import {readFile} from 'node:fs/promises';
import {assert,visible,near,poll,openRail,marketRoute,homeCard,openBuy,ticket,hooks,assertExternal,geometry,samples,readJSON,allowedConsole,liveMarketPages} from './helpers.mjs';
import {register as cards} from './card.mjs';
import {register as charts} from './chart.mjs';
import {register as flows} from './flows.mjs';
import {register as quality} from './quality.mjs';
const rows=JSON.parse(await readFile(new URL('./parity.json',import.meta.url),'utf8'));
const shared=new Map();for(const register of [cards,charts,flows,quality])register((suite,name,fn,options)=>shared.set(name,{fn,options}));
const contracts=new Map();
const set=(prefix,values,start=1)=>values.forEach((value,i)=>contracts.set(`${prefix}-${String(start+i).padStart(2,'0')}`,value));
// @ = selector; ~ = regular expression; other values are verbatim visible copy.
set('G',['@.beta-strip','@header.header','@header .brand[href="#/"]','@header a[href="#/"]','@a[href="#/leaderboard"]','@a[href="#/create-market"]','@.account-button svg','0x0000…dEaD','24.69 xDAI','@button[aria-label="Help"]','@button.theme-toggle','@html[data-theme="dark"]','@.market-grid','Connect','@main','@main']);
set('M',['Policies','Verified Market Policy','Market Rules Policy','App','Futarchy','Deepfunding','Foresight','Opportunity Markets','Account','Account','Deposit','Portfolio','Market Collections','Trade Collateral','Use smart account','@.account-menu']);
set('H',['@.market-grid','@.grid-sentinel','Sort By','@.market-link','@.card-question','@.market-avatar','@.card-outcomes','@.outcome-value,.outcome-tile strong','@.market-meta svg','~\\$[\\d.,]+[KM]?','@.card-mark','@button[aria-label="Open interest and liquidity breakdown"]','Open interest','~traded, notional','@.pool-row','@a[href^="https://gnosisscan.io/"]','@a[href^="https://curate.kleros.io/"]','@input[placeholder="Search by market, outcome or collection"]','@.market-grid','Connect','Filters','Market States','Verification Status','Chain','Sort By','Asc','Show only conditional markets','Minimum Liquidity','Show only markets with rewards','Show only futarchy markets','Cancel','Apply','@a[href="#/create-market"]','@a[href="#/collections/default"]']);
set('L',['Profit & Loss Leaderboard','Trader Score','@a[href="https://docs.seer.pm/app/leaderboard"]','1D','1W','1M','ALL','Filters','App','Chain','Your Rank','@input[placeholder*="Search"]','Search','#','Account','@.tier-pill','N/A','Profit/Loss','Volume','ROI','Traded Markets','Score','Profit/Loss','Volume','ROI','Previous','Next','~Sort','Updating…','Finding your rank…','~Page 1 of \\d+','~Updated','@.leader-row,[data-leader-row],tbody tr','Traded Markets','@.leader-row,[data-leader-row],tbody tr','Your Rank']);
contracts.set('D-L-36','N/A');contracts.set('D-L-37','N/A');contracts.set('D-L-40','No accounts found');
set('C',['1 of 2','@input[type="radio"],[role="radio"]','Next','Connect','SECURED BY KLEROS','@a[href^="https://app.seer.pm/"]']);
set('CM',['Type','Categorical','Scalar','Multi Categorical','Multi Scalar','Next','@main','@main','@main','@button.theme-toggle']);
set('CL',['Sign in','No markets in this collection.','@.market-card']);
set('COL',['Default','Sign in','No markets in this collection.','Default','@main','@main','@main','@button.theme-toggle']);
set('P',['@main h1','Home','@.status-pill','Reports open','Trading Open','Pending execution','@.verification-mark,[data-verification]','@button[aria-pressed]','@main h1','@main h1','@.market-meta svg','Categorical','Liquidity','Pool price, not trades','Volume','P&L','Verified','Market Estimate','~Resolution opening at','@.question-row','Hide questions','Answer on Reality.eth!','Major Events','Conditional Market','~This market is conditional on','Switch to Gnosis']);
set('RA',['@dialog[open]','Current answer: Not answered yet','Choose an answer','Mark this question invalid','~10 XDAI','Return','Answer']);
set('CH',['1D','@button[aria-label*="help" i]','@dialog[open]','Last Week','Save','@button[aria-label*="Export"]','@canvas','@button[aria-label*="Previous"]','@canvas','@canvas','@canvas','@canvas','@*[role="tooltip"]','@canvas','@canvas','Pool price, not trades']);
set('O',['@*[role="radio"]','Invalid','Yes','Add Liquidity','View pool details','New conditional market']);
set('I',['@.pool-details','~Pool Id:','@.pool-details canvas','SHARES','@dialog[open]','~Farming Rewards','~Swapr','~Rewards end','@a[href^="https://v3.swapr.eth.limo/#/add/"]','~Learn more about the farming program','Return','@dialog[open]','@a[href^="https://v3.swapr.eth.limo/#/add/"]']);
set('T',['Yes','Market','You pay','sDAI','~Balance: 0 sDAI','Max','@.ticket-direction,[aria-label*="direction" i]','~1\\.1868','@select,[role="combobox"]','~Low balance\\? Bridge tokens from other networks','Avg price','Price after buy','Potential return','~Max slippage 1%','Enter an amount','Not enough balance.','~User rejected the request\\.','More']);
set('MD',['@main h1','Home','@main h1','Reports open','Pending execution','Categorical','Multi Scalar','Conditional Market','Verified','Liquidity','Volume','P&L','@dialog[open]','Deadline:','Hide questions','Answer: Answered too soon','~Reopen question','~Conditional on','@.ticket,[data-ticket]','Switch to Gnosis','@main','@main','@main','@button.theme-toggle','@*[role="radio"]','Invalid','~182 seats','@dialog[open]','@.pool-details','Hide pool details','New conditional market','1D','@*[role="tooltip"]','Last Week','Su','Save','Open interest','~7\\.22K LEPEN_NRYES','~traded, notional','@.pool-row','@canvas','Yes','You pay','@.ticket input,[data-ticket] input','Max','You will get','Avg price','~0\\.00 sDAI \\(0\\.00%\\)','Calculate your potential return','~Max slippage 1%','Enter an amount','More','Mint','Merge','Redeem','~Balance:','sDAI','Mint','1 UPCOMING','~Reality']);
set('TAB',['Comments','~Connect','Connect to comment','No takes yet. Share the first one.','User rejected the request.','~Related Conditional Markets','~Related Conditional Markets \\(2\\)','Search by outcome:','~Conditional on','Answer on Reality.eth!','Top Holders','Yes','No','Invalid','~(?:\\d+K|<0\\.001)','My activity','~Bought.*Oct','~Bought|Sold|Split','~<0\\.001|\\d+\\.\\d+']);
set('MOD',['@dialog[open]','~10 XDAI','Current answer: Not answered yet','Choose an answer','Mark this question invalid','Return','Answer','@dialog[open]','~Farming Rewards','Available Pools:','~Rewards ended on:','@a[href^="https://v3.swapr.eth.limo/#/add/"]','~Learn more about the farming program','Return','@.pool-details','Liquidity Chart','~Pool Id:','Pool Balances:','SHARES','Last: 0.7454']);
const delegates={
 'H-01':'card-grid-columns','H-04':'card-whole-click-navigates','H-05':'card-question-two-line-clamp-with-tooltip','H-08':'card-binary-tiles-exact-percent','H-12':'drawer-liquidity-opens-per-pool-panel','H-15':'drawer-liquidity-opens-per-pool-panel','H-21':'rail-all-groups-and-options-verbatim',
 'H-28':'rail-min-liquidity-filters','H-31':'rail-staged-cancel-reverts-apply-commits-url','H-32':'rail-staged-cancel-reverts-apply-commits-url',
 'CH-03':'chart-custom-popover-presets-save-cancel','CH-04':'chart-custom-popover-presets-save-cancel','CH-05':'chart-custom-popover-presets-save-cancel','CH-06':'chart-export-csv-download','CH-08':'chart-prev-next-shift-window','CH-10':'chart-default-domain-0-100','CH-11':'chart-gutter-labels-no-tick-overlap','CH-12':'chart-gutter-labels-no-tick-overlap','CH-13':'chart-crosshair-tooltip-all-top-outcomes','CH-14':'chart-year-at-boundaries','CH-15':'chart-no-origin-artifact',
 'G-10':'quality-05-tour-lifecycle','G-11':'quality-11-themes-contrast','G-13':'quality-11-themes-contrast',
 'C-06':'quality-08-adaptation','CL-03':'card-star-toggles-aria-pressed-persists',
};
async function locate(t,value){return value.startsWith('@')?t.page.locator(value.slice(1)).filter({visible:true}).first():value.startsWith('~')?t.page.getByText(new RegExp(value.slice(1))).filter({visible:true}).first():t.page.getByText(value,{exact:true}).filter({visible:true}).first();}
async function button(t,name){return t.page.getByRole('button',{name:new RegExp(`^${name}(?:⌄|$)`)}).filter({visible:true}).first();}
async function openMenu(t,name){if(t.width<700)await t.page.getByRole('button',{name:'Markets',exact:true}).click();if(name==='Account')await t.page.evaluate(()=>window.__explorerTest.connect());await (await button(t,name)).click();}
async function setup(t,row){
 const [group,num]=row.id.match(/^(.*)-(\d+)$/).slice(1),n=Number(num);
 await t.go(row.route);
 if(['G-07','G-08','G-09'].includes(row.id))await t.page.evaluate(()=>window.__explorerTest.connect());
 if(['C','CM'].includes(group)&&row.id!=='C-04')await t.page.evaluate(()=>window.__explorerTest.connect());
 if(group==='L'&&n===11)await t.page.evaluate(()=>window.__explorerTest.connect());
 if(group==='M')await openMenu(t,n<=3?'Policies':n<=8?'App':'Account');
 if(group==='H'&&n>=21&&n<=32)await openRail(t);
 if(group==='H'&&[10,11,13,14,15,16,17].includes(n)){const c=await homeCard(t,'knesset');await c.hover();await visible(c.locator('[data-drawer]'));if([14,15].includes(n))await c.getByRole('button',{name:'Open interest and liquidity breakdown'}).click();}
 if(group==='H'&&n===9)await t.go(marketRoute());
 if(['P-05'].includes(row.id)){const d=await hooks(t.page),m=d.markets.find(m=>m.statusLabel==='Trading Open');assert(m);await t.go(`#/markets/${m.chainId}/${m.slug}`);}
 if(['P-06','MD-05'].includes(row.id)){const d=await hooks(t.page),m=d.markets.find(m=>m.statusLabel==='Pending execution');assert(m);await t.go(`#/markets/${m.chainId}/${m.slug}`);}
 if(group==='RA'||group==='MOD'&&n<=7||row.id==='MD-13')await (await button(t,'Answer on Reality.eth!')).click();
 if(group==='CH'&&[3,4,5].includes(n))await (await button(t,'Custom')).click();
 if(group==='O'||group==='I'||group==='MOD'&&n>=8||['MD-28','MD-29','MD-30'].includes(row.id)){
  await t.page.getByRole('radio').first().click();
  if(group==='I'&&[1,2,3,4].includes(n)||group==='MOD'&&n>=15||['MD-29','MD-30'].includes(row.id))await (await button(t,'View pool details')).click();
  else if(group==='I'||group==='MOD'&&n>=8||row.id==='MD-28')await (await button(t,'Add Liquidity')).click();
 }
 if(group==='T'||group==='MD'&&n>=42&&n<=58){await ticket(t);if(n===8&&group==='T')await t.page.getByRole('textbox',{name:/You pay|Amount/}).fill('1');if(group==='MD'&&n>=53&&n<=58)await (await button(t,'More')).click();}
 if(group==='TAB'){const tab=n<=5?'Comments':n<=10?'Related Conditional Markets':n<=15?'Top Holders':'Activity';await t.page.getByRole('tab',{name:new RegExp(`^${tab}`)}).click();if(n===5)await (await button(t,'Connect to comment')).click();}
 const overlay=row.name.match(/-(policies|app|wallet)-overlay-/);if(overlay)await openMenu(t,{policies:'Policies',app:'App',wallet:'Account'}[overlay[1]]);
 if(group==='L'&&[9,10].includes(n))await (await button(t,n===9?'App':'Chain')).click();
}
async function dataContract(t,row){
 const n=Number(row.id.split('-').at(-1));
 if(row.id.startsWith('D-L-')||n<=3){
  const data=(await readJSON('get-pnl-leaderboard.json')).data;
  if(n===1||n===41){for(const field of ['period','app','chain','sort','dir','offset'])assert((await readFile(new URL('../src/data/leaderboard.ts',import.meta.url),'utf8')).includes(field));}
  else if(n===2||n===42){for(const field of ['total','updatedAt','rows'])assert(field in data,field);}
  else {assert.equal(data.rows.length,25);for(const r of data.rows)for(const f of ['address','pnl','volume','roi','score','tier','scoreBreakdown'])assert(f in r,`Missing row field ${f}`);}
 }else if(n===4||n===5){const d=await hooks(t.page);for(const m of d.markets)for(const field of ['id','chainId','question','odds','outcomes','liquidityUSD','volumeUSD','collateralToken','questions'])assert(field in m,field);}
 else if(n===6){const data=await readJSON('markets-charts.json');assert.match(JSON.stringify(data),/periodStartUnix/);assert.match(JSON.stringify(data),/token0Price/);assert.match(JSON.stringify(data),/token1Price/);}
 else if(n===7){const data=await readJSON(`fixtures/pool-ticks-${samples.conditional.id}.json`);for(const f of ['tickIdx','liquidityNet'])assert(JSON.stringify(data).includes(f),f);}
 else if(n===8){await t.page.evaluate(()=>window.__explorerTest.connect());await visible(t.page.getByRole('button',{name:/0x0000…dEaD/}));}
 else {const p=await openBuy(t);await p.getByRole('textbox',{name:'Amount'}).fill('1');await p.getByRole('button',{name:'Connect',exact:true}).click();await visible(t.page.getByRole('button',{name:/Mock wallet/}));}
}
async function verify(t,row){
 if(row.id==='H-02'){await liveMarketPages(t.context,200);await t.go('#/',{live:'1'});const before=await t.page.locator('.market-card').count();await t.page.evaluate(()=>scrollTo(0,document.documentElement.scrollHeight));await poll(()=>t.page.locator('.market-card').count(),n=>n>before,'Live infinite scroll did not load captured page 2',4000);return;}
 if(shared.has(row.name))return shared.get(row.name).fn(t);
 if(delegates[row.id])return shared.get(delegates[row.id]).fn(t);
 if(row.id.startsWith('DATA-')||/^D-L-4[123]$/.test(row.id))return dataContract(t,row);
 await setup(t,row);
 if(row.id==='L-36'){assert.equal(await t.page.getByRole('button',{name:'Your Rank',exact:true}).count(),0);return;}
 if(row.id==='D-L-40'){await t.page.getByRole('textbox',{name:/Search/}).fill('no-matching-account');await (await button(t,'Search')).click();await visible(t.page.getByText('No accounts found',{exact:true}));await visible(t.page.getByRole('button',{name:'Clear search',exact:true}));return;}
 if(row.id==='G-16'){assert(allowedConsole('https://rpc.walletconnect.org/v1/profile/reverse/0xdead',404));assert(!allowedConsole('https://app.seer.pm/missing',404));assert(!allowedConsole('https://rpc.walletconnect.org/v1/profile/reverse/x',500));assert.deepEqual(t.errors(),[]);return;}
 const value=contracts.get(row.id);assert(value,`Missing assertion recipe for ${row.id}`);
 const target=await locate(t,value);await visible(target);
 if(row.id==='H-07'){assert.equal(await t.page.locator('.market-card canvas,.market-card [data-donut]').count(),0);assert.equal(await t.page.locator('.card-outcomes').count(),100);}
 if(row.id==='H-19'){await t.page.getByRole('textbox',{name:'Search by market, outcome or collection',exact:true}).fill('Marine Le Pen');await poll(()=>t.page.url(),u=>u.includes('marketName=Marine+Le+Pen')||u.includes('marketName=Marine%20Le%20Pen'));}
 if(row.id==='H-26'){await t.page.getByRole('button',{name:'Asc',exact:true}).click();await t.page.getByRole('button',{name:'Apply',exact:true}).click();assert.match(t.page.url(),/dir=Asc/);}
 if(row.name.includes('link')&&await target.evaluate(e=>e.tagName==='A')){const href=await target.getAttribute('href');assert(href&&!/^javascript:|^#$/.test(href));}
 if(/toggle|selectable/.test(row.name)){
  const control=target.locator('input,button,[role="switch"],[role="radio"]').first();const op=await control.count()?control:target;
  const before=await op.evaluate(e=>({checked:e.checked,pressed:e.getAttribute('aria-pressed'),expanded:e.getAttribute('aria-expanded'),selected:e.getAttribute('aria-selected'),ariaChecked:e.getAttribute('aria-checked')}));
  await op.click();await poll(()=>op.evaluate(e=>({checked:e.checked,pressed:e.getAttribute('aria-pressed'),expanded:e.getAttribute('aria-expanded'),selected:e.getAttribute('aria-selected'),ariaChecked:e.getAttribute('aria-checked')})),a=>JSON.stringify(a)!==JSON.stringify(before),'Control state unchanged');
 }
 if(row.name.includes('disabled')){const control=t.page.getByRole('button',{name:value,exact:true});assert(await control.isDisabled());assert(await control.getAttribute('aria-describedby'));}
 if(/sort-by-(score|profit-loss|volume|roi)$/.test(row.name)){
  const before=await t.page.locator('.leader-row,[data-leader-row],tbody tr').allTextContents();await (await button(t,value)).click();await poll(()=>t.page.locator('.leader-row,[data-leader-row],tbody tr').allTextContents(),a=>JSON.stringify(a)!==JSON.stringify(before),'Sort did not change rows');assert.match(t.page.url(),/sort=/);
 }
 if(row.id==='L-33')assert.equal(await t.page.locator('.leader-row,[data-leader-row],tbody tr').count(),25);
 if(row.id==='G-15'||/-overlay-preserves-page$/.test(row.name))assert((await t.page.locator('main').innerText()).trim().length>0);
}
export function register(test){
 const grouped=new Map();for(const row of rows)grouped.set(row.name,[...(grouped.get(row.name)??[]),row]);
 for(const [name,entries] of grouped)test('parity',name,async t=>{for(const row of entries){try{await verify(t,row);}catch(e){e.message=`${row.id}: ${row.assertion}\n${e.message}`;throw e;}}},shared.get(name)?.options);
}
export function validateContracts(){
 for(const row of rows)assert(shared.has(row.name)||delegates[row.id]||contracts.has(row.id)||row.id.startsWith('DATA-')||/^D-L-4[123]$/.test(row.id),`Missing parity assertion: ${row.id}`);
 return rows.length;
}
