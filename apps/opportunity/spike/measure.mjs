import { chromium } from "playwright-core";
const base = process.argv[2];
const browser = await chromium.launch({ executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" });
for (const [engine, n, dpr] of [["verlet",235,2],["matter",235,2],["verlet",705,2],["matter",705,2]]) {
  const page = await browser.newPage({ viewport: { width: 1000, height: 420 } });
  await page.goto(`${base}/index.html?engine=${engine}&n=${n}&dpr=${dpr}&secs=6`);
  await page.waitForFunction(() => window.__result, null, { timeout: 30000 });
  console.log(JSON.stringify(await page.evaluate(() => window.__result)));
  if (n === 235) await page.screenshot({ path: `shot-${engine}.png` });
  await page.close();
}
await browser.close();
