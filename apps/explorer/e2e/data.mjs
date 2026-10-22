import {adapters} from './adapters.mjs';
import {assert,hooks,samples,readJSON,marketRoute,visible,homeCard,openBuy,poll,ticket} from './helpers.mjs';
export function register(test) {
 const check=(name,fn)=>test('data',name,async t=>fn(await hooks(t.page),t));
 check('data-type-counts-74-1-14-11',d=>assert.deepEqual(d.types,{'Categorical':74,'Multi Categorical':1,Scalar:14,'Multi Scalar':11}));
 check('data-verified-88-unverified-12',d=>{assert.equal(d.counts.verified,88);assert.equal(d.markets.filter(m=>m.verification==='Not Verified').length,12);});
 check('data-conditional-17',d=>assert.equal(d.counts.conditional,17));
 check('data-rewards-1',d=>assert.equal(d.counts.rewards,1));
 check('data-futarchy-empty-state',async(d,t)=>{assert.equal(d.markets.filter(m=>m.isFutarchy).length,0);await t.go('#/?futarchy=1');assert.equal(await t.page.locator('.market-card').count(),0);await visible(t.page.getByText('No markets found',{exact:true}));});
 check('data-status-lepen-reports-open-answered-too-soon',d=>{assert.equal(d.lePen.status,'Reports open');assert(d.lePen.answeredTooSoon.some(Boolean));});
 check('data-odds-as-given-sigma-tooltip-only',async(d,t)=>{
  const raw=(await readJSON('markets-search.full.json')).markets;
  for(const m of d.markets){assert.deepEqual(m.odds,raw.find(r=>r.id.toLowerCase()===m.id).odds);assert.equal(m.odds.at(-1),null);}
  const m=d.markets.find(m=>m.odds.some(v=>v===35.3));assert(m);await t.go(`#/?marketName=${encodeURIComponent(m.question)}`);
  assert(!/Σ|sum of odds/i.test(await t.page.locator('main').innerText()),'Sigma must be tooltip only');
 });
 check('data-single-source-card-hero-row-ticket',async(d,t)=>{
  await t.page.emulateMedia({reducedMotion:'reduce'});
  const hero=t.page.locator('.trending-hero'),href=await hero.locator('.hero-market').getAttribute('href');
  const leading=d.markets.find(m=>href===`#/markets/${m.chainId}/${m.slug}`);assert(leading,'Hero market must come from the shared adapter');
  const expected=leading.layout==='scalar'?leading.estimate:leading.odds[leading.leading];
  assert(Number.isFinite(expected));assert.equal(await hero.locator('.rolling-number').getAttribute('data-value'),leading.layout==='scalar'?`${expected.toFixed(2)} ${leading.unit.trim()}`:`${expected.toFixed(1)}%`);
  const c=await homeCard(t);assert.match(await c.innerText(),/84\.2\s*%/);
  const panel=await openBuy(t);assert.match(await panel.innerText(),/84\.2\s*%/);
  await t.go(marketRoute());const row=t.page.getByRole('radio',{name:/Yes.*84\.2/});await visible(row);await row.click();
  const p=await ticket(t);await visible(p.getByText('Yes',{exact:true}));await p.getByRole('textbox',{name:/You pay|Amount/}).fill('1');await poll(()=>p.innerText(),v=>v.includes('1.1868'));
 });
 check('data-leaderboard-tiers-and-na-reason',async()=>{
  const data=(await readJSON('get-pnl-leaderboard.json')).data;assert.equal(data.rows.length,25);
  for(const r of data.rows){if(r.score===null)assert(r.scoreUnavailable,'N/A reason missing');else {assert(r.scoreBreakdown);assert(r.scoreBreakdown.components);assert(r.tier);}}
 });
 check('data-slugs-unique',d=>{assert.equal(new Set(d.markets.map(m=>`${m.chainId}/${m.slug}`)).size,d.markets.length);for(const m of d.markets)assert(m.slug&&!m.slug.includes('/'));});
 check('data-no-fake-history',async(d,t)=>{
  const a=await adapters();
  const objects=value=>typeof value==='string'?a.salvageObjects(value):Array.isArray(value)?value.flatMap(objects):value&&typeof value==='object'?[value,...Object.values(value).flatMap(objects)]:[];
  for(const m of a.getMarkets()){
   const raw=a.fixture(`market-chart-${m.id}`)??await readJSON(m.id==='0x31cb54c49479243333594eb7343d31f6bd1ddfd3'?'market-chart.json':'markets-charts.json');
   const captured=objects(a.unwrap(raw)).filter(p=>typeof p.periodStartUnix==='number'&&p.pool&&typeof p.token0Price==='string'&&typeof p.token1Price==='string');
   for(const p of a.history(m)){
    assert(captured.some(r=>r.pool.id===p.pool.id&&r.periodStartUnix===p.periodStartUnix),'History point absent from source');
    const index=m.wrappedTokens.findIndex(token=>[p.pool.token0.id.toLowerCase(),p.pool.token1.id.toLowerCase()].includes(token.toLowerCase()));assert(index>=0);
    const expected=100*Number(p.pool.token0.id.toLowerCase()===m.wrappedTokens[index].toLowerCase()?p.token1Price:p.token0Price);assert.equal(p.percent,expected);
   }
  }
 });
}
