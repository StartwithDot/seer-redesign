import { chromium } from 'playwright-core';
import assert from 'node:assert/strict';

const base = process.argv[2] || 'http://127.0.0.1:5187/previews/g/index.html';
const browser = await chromium.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: true,
});
let count = 0;
try {
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto(base);
  await page.waitForSelector('.tile[data-id]');
  const firstId = await page.locator('.tile[data-id]').first().getAttribute('data-id');
  for (const width of [1440, 1100, 820, 390]) {
    await page.setViewportSize({ width, height: 900 });
    for (const theme of ['dark', 'light']) {
      await page.evaluate(theme => { document.documentElement.dataset.theme = theme; }, theme);
      for (const route of ['#/', `#/market/${firstId}`, '#/leaderboard']) {
        await page.goto(base.split('#')[0] + route);
        await page.waitForSelector(route === '#/' ? '.tile' : route === '#/leaderboard' ? '.leader-controls' : '.market-title');
        await page.evaluate(theme => { document.documentElement.dataset.theme = theme; }, theme);
        const triggers = page.locator('[data-dropdown]');
        for (let i = 0; i < await triggers.count(); i++) {
          const trigger = triggers.nth(i);
          if (!await trigger.isVisible()) continue;
          const label = `${width} ${theme} ${route}: ${await trigger.textContent()}`;
          const panel = page.locator('#popover');
          const visible = async () => {
            await page.waitForTimeout(200);
            assert.equal(await trigger.getAttribute('aria-expanded'), 'true', label);
            assert.equal(await panel.isVisible(), true, label);
            assert.equal(await panel.evaluate(el => {
              const r = el.getBoundingClientRect();
              const hit = document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2);
              return r.width > 0 && r.height > 0 && r.left >= 0 && r.top >= 0 &&
                r.right <= innerWidth + 1 && r.bottom <= innerHeight + 1 && el.contains(hit);
            }), true, `${label}: clipped or covered`);
          };
          const closed = async () => {
            await page.waitForTimeout(150);
            assert.equal(await trigger.getAttribute('aria-expanded'), 'false', label);
            assert.equal(await panel.isVisible(), false, label);
          };
          await trigger.hover();
          await visible();
          await panel.hover(); // Crossing the trigger/panel gap keeps it open.
          await visible();
          await page.keyboard.press('Escape');
          await closed();
          assert.equal(await trigger.evaluate(el => el === document.activeElement), true, label);
          // Move away first so click does not follow an intentional hover opening.
          await page.mouse.move(0, 0);
          await trigger.click();
          await visible();
          await page.mouse.click(1, 899);
          await closed();
          await trigger.focus();
          await page.keyboard.press('ArrowDown');
          await visible();
          assert.equal(await panel.evaluate(el => el.contains(document.activeElement)), true, label);
          await page.keyboard.press('ArrowDown');
          await page.keyboard.press('Escape');
          await closed();
          // Touch uses a single tap to open, then a second to close.
          await trigger.dispatchEvent('pointerenter', { pointerType: 'touch' });
          await trigger.evaluate(el => el.click());
          await visible();
          await trigger.evaluate(el => el.click());
          await closed();
          count++;
        }
      }
    }
  }
  assert.deepEqual(errors, [], 'Browser errors');
  console.log(`PASS: ${count} dropdown checks across routes, themes and widths`);
} catch (error) {
  console.error(error);
  process.exitCode = 1;
} finally {
  await browser.close();
}
