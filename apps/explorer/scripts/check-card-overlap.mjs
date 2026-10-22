// Port-free layout check: Chrome loads the built app through local request fulfillment.
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { chromium } from 'playwright-core';
const dist = new URL('../dist/', import.meta.url);
const browser = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
try {
 const page = await browser.newPage();
 await page.route('**/*', async route => {
  const url = new URL(route.request().url());
  if (url.hostname !== 'explorer.test') return route.abort();
  const path = url.pathname === '/' ? 'index.html' : url.pathname.slice(1);
  if (path.includes('..')) return route.abort();
  try { await route.fulfill({ body: await readFile(new URL(path, dist)), contentType: path.endsWith('.js') ? 'text/javascript' : path.endsWith('.css') ? 'text/css' : path.endsWith('.html') ? 'text/html' : 'application/octet-stream' }); }
  catch { await route.abort(); }
 });
 const inspect = () => [...document.querySelectorAll('.market-card')].flatMap(card => {
  const walker = document.createTreeWalker(card, NodeFilter.SHOW_TEXT), boxes = [];
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
   if (!node.textContent.trim() || node.parentElement.closest('.sr-only,[aria-hidden="true"]')) continue;
   const style = getComputedStyle(node.parentElement);
   if (style.visibility === 'hidden' || style.display === 'none') continue;
   const range = document.createRange(); range.selectNodeContents(node);
   for (const r of range.getClientRects()) if (r.width && r.height) boxes.push({ text: node.textContent.trim(), x: r.x, y: r.y, right: r.right, bottom: r.bottom });
  }
  // RollingNumber uses painted pseudo-elements, so use its visible outer rectangle once.
  for (const number of card.querySelectorAll('.rolling-number')) { const r = number.getBoundingClientRect(); boxes.push({ text: number.getAttribute('aria-label'), x: r.x, y: r.y, right: r.right, bottom: r.bottom }); }
  return boxes.flatMap((a, i) => boxes.slice(i + 1).filter(b => Math.min(a.right, b.right) - Math.max(a.x, b.x) > 1 && Math.min(a.bottom, b.bottom) - Math.max(a.y, b.y) > 1).map(b => ({ market: card.dataset.marketId, a: a.text, b: b.text })));
 });
 for (const width of [1440, 390]) {
  await page.setViewportSize({ width, height: 900 });
  await page.goto('https://explorer.test/?test=1#/');
  await page.locator('.market-card').first().waitFor();
  await page.evaluate(() => document.fonts.ready);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  for (const theme of ['dark', 'light']) {
   await page.evaluate(theme => document.documentElement.dataset.theme = theme, theme);
   assert.deepEqual(await page.evaluate(inspect), [], `${width} ${theme} text overlaps`);
   await page.locator('.market-card .card-details').first().click();
   assert.deepEqual(await page.evaluate(inspect), [], `${width} ${theme} drawer text overlaps`);
   await page.keyboard.press('Escape');
  }
  console.log(`PASS ${width}: card text and inline drawer, dark + light`);
 }
} finally { await browser.close(); }
