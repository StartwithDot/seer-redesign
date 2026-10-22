import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
export { assert };
export const widths = [1440, 390];
export const readJSON = async name => JSON.parse(await readFile(new URL(`../src/data/${name}`, import.meta.url), 'utf8'));
export const source = await readJSON('markets-search.full.json');
const rows = source.markets;
const used = new Set(), slugs = new Map();
for (const m of rows) { let slug=m.url; if(used.has(`${m.chainId}/${slug}`))slug+=`-${m.id.slice(2,6)}`; used.add(`${m.chainId}/${slug}`); slugs.set(m.id,slug); }
const route = m => `#/markets/${m.chainId}/${slugs.get(m.id)}`;
export const samples = {
 binary: rows.find(m => m.id.startsWith('0xe1793927')),
 conditional: rows.find(m => m.id.startsWith('0xbbf8')),
 many: rows.find(m => m.outcomes.length >= 80),
 scalar: rows.find(m => /BASEFEE/i.test(m.marketName)),
 multiScalar: rows.find(m => m.templateId === '1' && !m.outcomes.includes('UP')),
 unverified: rows.find(m => m.verification?.status === 'not_verified'),
 knesset: rows.find(m => m.id.startsWith('0x31cb54c4')),
};
export function marketRoute(kind = 'binary') { assert(samples[kind], `Missing real fixture: ${kind}`); return route(samples[kind]); }
export const routes = [...new Set(['#/', ...Object.keys(samples).filter(k => k !== 'knesset').map(marketRoute), '#/leaderboard', '#/create-market', '#/collections/default', '#/account', '#/deposit', '#/portfolio', '#/trade-collateral', '#/policies/verified-market', '#/policies/market-rules', '#/missing'])];
export async function visible(locator) { await locator.first().waitFor({state:'visible', timeout:3000}); }
export async function text(page, value) { await visible(page.getByText(value, {exact:true})); }
export async function click(page, name) { await page.getByRole('button', {name, exact:true}).click(); }
export async function poll(fn, predicate = Boolean, message = 'State did not change', timeout = 2000) {
 const end = Date.now() + timeout; let value;
 do { value = await fn(); if (predicate(value)) return value; await new Promise(r => setTimeout(r,40)); } while(Date.now() < end);
 assert.fail(`${message}: ${JSON.stringify(value)}`);
}
export async function hooks(page) { await page.waitForFunction(() => !!window.__explorerTest); return page.evaluate(() => window.__explorerTest.data); }
export function card(page, id = samples.binary.id) { return page.locator(`.market-card[data-market-id="${id}"]`); }
export async function homeCard(t, kind = 'binary') {
 await t.go(`#/?marketName=${encodeURIComponent(samples[kind].marketName.trim())}`);
 const result = card(t.page, samples[kind].id); await visible(result); return result;
}
export async function openBuy(t, kind = 'binary') {
 const c = await homeCard(t, kind); await c.getByRole('button', {name:/^Buy /}).first().click();
 const panel = t.page.getByRole('dialog', {name:/^Buy /}); await visible(panel); return panel;
}
export async function openRail(t) {
 if (t.width >= 1024) await t.page.keyboard.press('f');
 else await t.page.getByRole('button',{name:/^Filters/}).click();
 await visible(t.page.locator('.filter-panel')); return t.page.locator('.filter-panel');
}
export async function market(t, kind = 'binary') { await t.go(marketRoute(kind)); await visible(t.page.locator('main h1')); }
export async function ticket(t) {
 if(t.width < 700) await click(t.page, 'Trade');
 const panel=t.page.locator('.ticket, [data-ticket]').first(); await visible(panel); return panel;
}
export async function assertExternal(locator, pattern) {
 assert(await locator.count()>0,'Missing external link');
 for (const a of await locator.all()) { const href=await a.getAttribute('href'); assert(pattern.test(href??''),`Unexpected href: ${href}`); assert.equal(await a.getAttribute('target'),'_blank'); assert.match(await a.getAttribute('rel')??'',/noopener/); }
}
export const allowedConsole = (message, status) => status === 404 && /^https:\/\/rpc\.walletconnect\.org\/v1\/profile\/reverse\//.test(message);
export async function geometry(locator) { const b=await locator.boundingBox(); assert(b,'Missing geometry'); return b; }
export function near(actual, expected, tolerance=.5) { assert(Math.abs(actual-expected)<=tolerance,`${actual} ≠ ${expected} ±${tolerance}`); }
export async function liveMarketPages(context,minimum=600){
 const {readdir}=await import('node:fs/promises');
 const files=(await readdir(new URL('../src/data/fixtures/',import.meta.url))).filter(f=>/^markets-search-\d+\.json$/.test(f));
 const pages=new Map([[0,source]]);
 for(const f of files)pages.set(Number(f.match(/-(\d+)\.json$/)[1]),await readJSON(`fixtures/${f}`));
 const markets=[...pages.values()].flatMap(p=>(p.data??p).markets??[]);
 assert(new Set(markets.map(m=>m.id)).size>=minimum,`Capture live market fixture pages: ${minimum} unique markets required; found ${new Set(markets.map(m=>m.id)).size}. Synthetic clones are forbidden.`);
 const requests=[];
 await context.route('**/.netlify/functions/markets-search**',async route=>{
  const request=route.request(),url=new URL(request.url());let body={};try{body=request.postDataJSON()??{};}catch{}
  const offset=Number(body.offset??url.searchParams.get('offset')??0);requests.push(offset);
  const page=pages.get(offset);if(!page){await route.fulfill({status:500,contentType:'application/json',body:JSON.stringify({error:`Missing captured page at offset ${offset}`})});return;}
  await route.fulfill({status:200,contentType:'application/json',body:JSON.stringify(page)});
 });
 return {pages,requests};
}
