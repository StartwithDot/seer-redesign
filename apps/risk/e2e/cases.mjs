await run('00 guide opens only on click', async () => {
 await go();assert.equal(await page.locator('dialog[open]').count(),0);assert(await page.evaluate(()=>!['hidden','clip'].includes(getComputedStyle(document.body).overflow)));await id('btn-guide').click();await poll(()=>id('modal-guide').isVisible());assert.equal(await id('modal-guide').getByRole('button',{name:'Close',exact:true}).count(),1);await page.keyboard.press('Escape');await poll(async()=>!(await id('modal-guide').isVisible()));await page.reload();assert.equal(await page.locator('dialog[open]').count(),0);
});
await run('01 default headline shows 46.52 and 82.59', async () => {
  await go('/');
  await poll(async () => (await id('headline-ann').innerText()).includes('46.52'));
  await poll(async () => (await id('headline-quart').innerText()).includes('82.59'));
  assert.match((await id('headline-ann').innerText()).replace(/\s+/g, ' '), /46\.52/);
  assert.match((await id('headline-quart').innerText()).replace(/\s+/g, ' '), /82\.59/);
  await poll(async () => /30 September 2026/i.test(await id('trading-period').innerText()));
  await poll(async () => /closed/i.test(await id('countdown').innerText()));
});

await run('02 group chips show counts 33/7/13/6/7', async () => {
  await go('/');
  const txt = async (t) => (await id(t).innerText()).replace(/\s+/g, ' ').trim();
  await poll(async () => /33/.test(await txt('chip-all')));
  assert.match(await txt('chip-all'), /33/);
  assert.match(await txt('chip-eth'), /7/);
  assert.match(await txt('chip-usd'), /13/);
  assert.match(await txt('chip-btc'), /6/);
  assert.match(await txt('chip-funds'), /7/);
});

await run('03 chip-eth selects exactly 7 pills', async () => {
  await go('/');
  const selected = page.locator('[data-testid^="pill-"][aria-pressed="true"]');
  await id('chip-eth').click();
  await poll(async () => (await selected.count()) === 7);
  assert.equal(await selected.count(), 7);
  await poll(async () => (await id('chip-eth').getAttribute('aria-pressed')) === 'true');
});

await run('04 chip-all selects all 33 pills', async () => {
  await go('/');
  const selected = page.locator('[data-testid^="pill-"][aria-pressed="true"]');
  await id('chip-eth').click();
  await poll(async () => (await selected.count()) === 7);
  await id('chip-all').click();
  await poll(async () => (await selected.count()) === 33);
  assert.equal(await selected.count(), 33);
  await poll(async () => (await id('chip-all').getAttribute('aria-pressed')) === 'true');
});

await run('05 clear all empties chart with empty-state text', async () => {
  await go('/');
  await id('btn-clear-all').click();
  const selected = page.locator('[data-testid^="pill-"][aria-pressed="true"]');
  await poll(async () => (await selected.count()) === 0);
  await poll(async () => await id('empty-state').isVisible());
  const t = (await id('empty-state').innerText()).replace(/[\u2013\u2014]/g, '-').replace(/\s+/g, ' ').trim();
  assert.ok(t.includes('No assets selected - pick a category or asset above to plot it.'), `empty state text was: ${t}`);
});

await run('06 select all restores 33 pills', async () => {
  await go('/');
  const selected = page.locator('[data-testid^="pill-"][aria-pressed="true"]');
  await id('btn-clear-all').click();
  await poll(async () => (await selected.count()) === 0);
  await poll(async () => /select all/i.test(await id('btn-clear-all').innerText()));
  await id('btn-clear-all').click();
  await poll(async () => (await selected.count()) === 33);
  assert.equal(await selected.count(), 33);
});

await run('07 pill toggling from empty state adds assets', async () => {
  await go('/');
  const selected = page.locator('[data-testid^="pill-"][aria-pressed="true"]');
  await id('btn-clear-all').click();
  await poll(async () => (await selected.count()) === 0);
  await id('pill-usdc').click();
  await poll(async () => (await selected.count()) === 1);
  await poll(async () => (await id('pill-usdc').getAttribute('aria-pressed')) === 'true');
  await id('pill-usdt').click();
  await poll(async () => (await selected.count()) === 2);
});

await run('08 aggregate slider edit exposes delta, count and actions', async () => {
  await go('/');
  await id('agg-slider').focus();
  await page.keyboard.press('ArrowLeft');
  await poll(async () => await id('agg-delta').isVisible());
  await poll(async () => /33 of 33/.test(await id('edited-count').innerText()));
  await poll(async () => await id('btn-reset').isVisible());
  await poll(async () => await id('btn-reset-predictions').isVisible());
  await poll(async () => await id('btn-export').isVisible());
});

await run('09 reset returns aggregate to 46.52 and 0 of 33', async () => {
  await go('/');
  await id('agg-slider').focus();
  await page.keyboard.press('ArrowLeft');
  await poll(async () => await id('agg-delta').isVisible());
  await poll(async () => await id('btn-reset').isVisible());
  await id('btn-reset').click();
  await poll(async () => (await id('agg-ann').innerText()).includes('46.52'));
  await poll(async () => /0 of 33/.test(await id('edited-count').innerText()));
  await poll(async () => !(await id('btn-reset-predictions').isVisible()));
});

await run('10 single asset slider edit updates count, delta and aggregate', async () => {
  await go('/');
  const before = (await id('agg-ann').innerText()).replace(/\s+/g, ' ');
  if (/expand/i.test(await id('btn-expand-all').innerText())) await id('btn-expand-all').click();
  await poll(async () => await id('asset-row-weeth').isVisible());
  if (/expand/i.test(await id('btn-expand-all').innerText())) await id('btn-expand-all').click(); await id('asset-row-weeth').click();
  await poll(async () => await id('asset-slider-weeth').isVisible());
  await id('asset-slider-weeth').focus();
  await page.keyboard.press('ArrowRight');
  await poll(async () => /1 of 33/.test(await id('edited-count').innerText()));
  await poll(async () => await id('asset-delta-weeth').isVisible());
  await page.keyboard.press('PageUp');
  await poll(async () => (await id('agg-ann').innerText()).replace(/\s+/g, ' ') !== before);
});

await run('11 export downloads predictions csv', async () => {
  await go('/');
  await id('agg-slider').focus();
  await page.keyboard.press('ArrowLeft');
  await poll(async () => await id('btn-export').isVisible());
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    id('btn-export').click(),
  ]);
  const name = download.suggestedFilename();
  assert.ok(name.startsWith('risk-pricing-predictions'), `filename was ${name}`);
  const stream = await download.createReadStream();
  let body = '';
  for await (const chunk of stream) body += chunk.toString();
  assert.equal(body.split(/\r?\n/)[0].trim(), 'asset,probability');
});

await run('12 csv modal opens and template download works', async () => {
  await go('/');
  await id('btn-upload-csv').click();
  await poll(async () => await id('modal-csv').isVisible());
  await poll(async () => await id('btn-csv-template').isVisible());
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    id('btn-csv-template').click(),
  ]);
  assert.ok(download.suggestedFilename().startsWith('risk-pricing-predictions'), download.suggestedFilename());
  const stream = await download.createReadStream();
  let body = '';
  for await (const chunk of stream) body += chunk.toString();
  assert.equal(body.split(/\r?\n/)[0].trim(), 'asset,probability');
  await id('modal-csv').locator('[data-testid="btn-modal-close"]').click();
  await poll(async () => !(await id('modal-csv').isVisible()));
});

await run('13 loading a valid csv marks 2 of 33 edited', async () => {
  await go('/');
  await id('btn-upload-csv').click();
  await poll(async () => await id('modal-csv').isVisible());
  await id('csv-file-input').setInputFiles({
    name: 'predictions.csv',
    mimeType: 'text/csv',
    buffer: Buffer.from('asset,probability\nLBTC,55%\nUSDF,30%'),
  });
  await id('btn-load-predictions').click();
  await poll(async () => /2 of 33/.test(await id('edited-count').innerText()));
  await poll(async () => await id('btn-export').isVisible());
});

await run('14 loading an invalid csv shows csv-error', async () => {
  await go('/');
  await id('btn-upload-csv').click();
  await poll(async () => await id('modal-csv').isVisible());
  await id('csv-file-input').setInputFiles({
    name: 'bad.csv',
    mimeType: 'text/csv',
    buffer: Buffer.from('foo,bar\nbaz,qux'),
  });
  await id('btn-load-predictions').click();
  await poll(async () => await id('csv-error').isVisible());
});

await run('15 nav-assets scrolls to assets section', async () => {
  await go('/');
  await id('nav-assets').click();
  await poll(async () => id('section-assets').evaluate((el) => {
    const r = el.getBoundingClientRect();
    return r.top < window.innerHeight && r.bottom > 0;
  }));
});

await run('16 nav-participate scrolls to participate panel', async () => {
  await go('/');
  await id('nav-participate').click();
  await poll(async () => id('panel-participate').evaluate((el) => {
    const r = el.getBoundingClientRect();
    return r.top < window.innerHeight && r.bottom > 0;
  }));
});

await run('17 nav-overtime activates time view with chart', async () => {
  await go('/');
  await id('nav-overtime').click();
  await poll(async () => (await id('view-time').getAttribute('aria-pressed')) === 'true');
  await poll(async () => await id('hero-visual').isVisible());
});

await run('18 nav-overview returns to top of page', async () => {
  await go('/');
  await page.evaluate(() => window.scrollTo(0, 2500));
  await poll(async () => (await page.evaluate(() => window.scrollY)) > 100);
  await id('nav-overview').click();
  await poll(async () => (await page.evaluate(() => window.scrollY)) < 5);
});

await run('20 header Guide modal opens and closes via close button', async () => {
  await go('/');
  await id('btn-guide').click();
  await poll(async () => await id('modal-guide').isVisible());
  await id('modal-guide').locator('[data-testid="btn-modal-close"]').click();
  await poll(async () => !(await id('modal-guide').isVisible()));
});

await run('21 header Email modal opens and closes', async () => {
  await go('/');
  await id('btn-email').click();
  await poll(async () => await id('modal-email').isVisible());
  await id('modal-email').locator('[data-testid="btn-modal-close"]').click();
  await poll(async () => !(await id('modal-email').isVisible()));
});

await run('22 header Connect modal opens', async () => {
  await go('/');
  await page.locator('.sg-connect').click();
  await poll(async () => await id('modal-connect').isVisible());
  await page.keyboard.press('Escape');
  await poll(async () => !(await id('modal-connect').isVisible()));
});

await run('23 help menu exposes 6 external links', async () => {
  await go('/');
  await id('btn-help').click();
  for (let i = 1; i <= 6; i += 1) {
    const item = id(`help-item-${i}`);
    await poll(async () => await item.isVisible());
    const href = await item.getAttribute('href');
    assert.ok(href && href.trim().length > 4, `help item ${i} href was ${href}`);
    const target = await item.getAttribute('target');
    assert.equal(target, '_blank', `help item ${i} target was ${target}`);
  }
});

await run('24 theme toggle flips document theme', async () => {
  await go('/');
  const read = () => page.evaluate(() => {
    const el = document.documentElement;
    return (el.dataset && el.dataset.theme) || el.className || '';
  });
  const initial = await read();
  await page.locator('.sg-theme').click();
  await poll(async () => (await read()) !== initial);
  const after = await read();
  assert.notEqual(after, initial);
  await page.locator('.sg-theme').click();
  await poll(async () => (await read()) === initial);
});

await run('25 tab-q4 is disabled', async () => {
  await go('/');
  await poll(async () => {
    const el = id('tab-q4');
    if (await el.isDisabled()) return true;
    if ((await el.getAttribute('aria-disabled')) === 'true') return true;
    return (await el.getAttribute('disabled')) !== null;
  });
  await id('tab-q3').click();
  await poll(async () => (await id('tab-q4').getAttribute('aria-disabled')) !== 'false');
});

await run('26 credora drawer for weeth shows ratings and closes', async () => {
  await go('/');
  if (/expand/i.test(await id('btn-expand-all').innerText())) await id('btn-expand-all').click(); await id('asset-row-weeth').click();
  await id('asset-details-weeth').click();
  await id('drawer-credora').waitFor({ state: 'visible' });
  assert.match((await id('credora-grade').textContent()).trim(), /^A\+$/);
  assert.match((await id('credora-category').textContent()).trim(), /Derivative - Liquid Restaking/);
  assert.match((await id('credora-avg').textContent()).trim(), /4\.57/);
  assert.match((await id('credora-consensus').textContent()).trim(), /0\.09/);
  assert.match((await id('credora-market').textContent()).trim(), /0\.091/);
  assert.match(await id('link-credora').getAttribute('href'), /app\.credora\.network\/assets\/eeth/);
  assert.match(await id('link-etherscan').getAttribute('href'), /etherscan\.io\/address\//);
  await id('btn-drawer-close').click();
  await poll(async () => !(await id('drawer-credora').isVisible().catch(() => false)), 3000);
  await id('asset-details-weeth').click();
  await id('drawer-credora').waitFor({ state: 'visible' });
  await page.keyboard.press('Escape');
  await poll(async () => !(await id('drawer-credora').isVisible().catch(() => false)), 3000);
});

await run('27 nusd drawer shows special credora message', async () => {
  await go('/');
  if (/expand/i.test(await id('btn-expand-all').innerText())) await id('btn-expand-all').click(); await id('asset-row-nusd').click();
  await id('asset-details-nusd').click();
  await id('drawer-credora').waitFor({ state: 'visible' });
  assert.equal((await id('credora-special').textContent()).trim(), 'Metric breakdown not published by Credora yet.');
  await id('btn-drawer-close').click();
});

await run('28 lbtc drawer shows special credora message', async () => {
  await go('/');
  if (/expand/i.test(await id('btn-expand-all').innerText())) await id('btn-expand-all').click(); await id('asset-row-lbtc').click();
  await id('asset-details-lbtc').click();
  await id('drawer-credora').waitFor({ state: 'visible' });
  assert.equal((await id('credora-special').textContent()).trim(), "Credora hasn't published a risk rating for this asset yet.");
  await id('btn-drawer-close').click();
});

await run('29 panel group filters isolate eth funds and all', async () => {
  await go('/');
  if (/expand/i.test(await id('btn-expand-all').innerText())) await id('btn-expand-all').click();
  await id('panel-filter-eth').click();
  await poll(async () => (await id('asset-row-weeth').isVisible()) && !(await id('asset-row-usdc').isVisible()), 3000);
  await id('panel-filter-funds').click();
  await poll(async () => await id('asset-row-jaaa').isVisible(), 3000);
  await id('panel-filter-all').click();
  await poll(async () => (await id('asset-row-weeth').isVisible()) && (await id('asset-row-usdc').isVisible()), 3000);
});

await run('30 nav tabs live in header and active underline follows scroll', async () => {
  await go('/');
  for (const t of ['overview', 'assets', 'overtime', 'participate']) assert.equal(await page.locator(`header [data-testid="nav-${t}"]`).count(), 1);
  assert.equal(await page.locator('[data-testid="nav-guide"]').count(), 0);
  await poll(async () => (await id('nav-overview').getAttribute('aria-current')) === 'page');
  await id('nav-assets').click();
  await poll(async () => (await id('nav-assets').getAttribute('aria-current')) === 'page');
  await id('nav-overtime').click();
  await poll(async () => (await id('nav-overtime').getAttribute('aria-current')) === 'page');
});

await run('31 participate panel stays fixed while the page scrolls', async () => {
  await go('/');
  const top = () => id('panel-participate').evaluate((el) => Math.round(el.getBoundingClientRect().top));
  const before = await top();
  await page.evaluate(() => window.scrollTo(0, 1200));
  await poll(async () => (await page.evaluate(() => window.scrollY)) > 800);
  const after = await top();
  assert.ok(Math.abs(after - 120) <= 2 && before >= 60, `panel top ${before} -> ${after}`);
  assert.ok(await id('btn-connect-predict').isVisible());
  assert.ok(await id('btn-download-csv').isVisible());
});

await run('32 assets tiles are dense: >=5 per row at 1440', async () => {
  await go('/');
  const tops = await page.locator('[data-testid^="asset-tile-"]').evaluateAll((els) => els.map((e) => Math.round(e.getBoundingClientRect().top + window.scrollY)));
  assert.equal(tops.length, 33);
  const firstRow = tops.filter((t) => t === tops[0]).length;
  assert.ok(firstRow >= 5, `tiles in first row ${firstRow}`);
  await id('asset-tile-weeth').getByRole('button', { name: /Credora details/ }).click();
  await id('drawer-credora').waitFor({ state: 'visible' });
  await id('btn-drawer-close').click();
});

await run('33 text contrast >= 4.5:1 in dark and light', async () => {
  await go('/');
  const audit = () => page.evaluate(() => {
    const parse = (c) => { const m = c.match(/[\d.]+/g).map(Number); return { r: m[0], g: m[1], b: m[2], a: m[3] ?? 1 }; };
    const lin = (v) => { v /= 255; return v <= .03928 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4; };
    const lum = ({ r, g, b }) => .2126 * lin(r) + .7152 * lin(g) + .0722 * lin(b);
    const over = (f, b) => ({ r: f.r * f.a + b.r * (1 - f.a), g: f.g * f.a + b.g * (1 - f.a), b: f.b * f.a + b.b * (1 - f.a), a: 1 });
    const bgOf = (el) => { const layers = []; for (let n = el; n; n = n.parentElement) { const c = parse(getComputedStyle(n).backgroundColor); if (c.a > 0) layers.push(c); if (c.a === 1) break; } let base = { r: 255, g: 255, b: 255, a: 1 }; for (const l of layers.reverse()) base = over(l, base); return base; };
    const bad = [];
    for (const el of document.body.querySelectorAll('*')) {
      if (el.closest('dialog,svg,[disabled],.sr,.metric-tip,select')) continue;
      const own = [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim());
      if (!own) continue;
      const r = el.getBoundingClientRect(); if (!r.width || !r.height) continue;
      const cs = getComputedStyle(el); if (cs.visibility === 'hidden' || +cs.opacity === 0) continue;
      const bg = bgOf(el), fg = over(parse(cs.color), bg);
      const [hi, lo] = [lum(fg), lum(bg)].sort((a, b) => b - a);
      const ratio = (hi + .05) / (lo + .05);
      if (ratio < 4.5) bad.push(`${el.tagName.toLowerCase()}.${el.className && el.className.baseVal === undefined ? el.className : ''} "${el.textContent.trim().slice(0, 18)}" ${ratio.toFixed(2)}`);
    }
    return bad;
  });
  for (const theme of ['dark', 'light']) {
    await page.evaluate((t) => { localStorage.setItem('risk2-theme', t); }, theme);
    await page.reload(); await page.waitForSelector('[data-testid="page-title"]'); await page.waitForTimeout(700);
    const bad = await audit();
    assert.deepEqual(bad, [], `${theme}: ${bad.join(' | ')}`);
  }
  await page.evaluate(() => localStorage.setItem('risk2-theme', 'dark'));
});
