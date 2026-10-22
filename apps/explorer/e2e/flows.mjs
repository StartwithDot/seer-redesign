import {assert,visible,click,openRail,marketRoute,homeCard,openBuy,poll,market,ticket} from './helpers.mjs';
// Counts are the user decisions in §9.8, not setup/navigation or assertion operations.
function flow(test,name,expected,fn,options){test('flows',name,async t=>{let steps=0;const step=async action=>{steps++;return action();};await fn(t,step);assert.equal(steps,expected,`${name}: decision count`);},options);}
export function register(test) {
 flow(test,'flow-01-search-trade-preview-desktop',3,async(t,s)=>{
  await t.page.evaluate(()=>window.__explorerTest.connect());
  await s(()=>t.page.getByRole('textbox',{name:'Search by market, outcome or collection',exact:true}).fill('Marine Le Pen'));
  await poll(()=>t.page.url(),u=>u.includes('marketName='));const c=t.page.locator('.market-card').first();
  await s(()=>c.getByRole('button',{name:'Buy Yes at 84.2%',exact:true}).click());
  await s(()=>t.page.getByRole('dialog',{name:/Buy /}).getByRole('textbox',{name:'Amount'}).fill('1'));
  await poll(()=>t.page.getByRole('dialog',{name:/Buy /}).innerText(),v=>v.includes('1.1868'));
  const quote=t.page.getByRole('dialog',{name:/Buy /});assert.match(await quote.innerText(),/Pays 1\.19 sDAI if Yes wins/);assert(await quote.getByRole('button',{name:'Not enough balance.',exact:true}).isDisabled());
 },{widths:[1440]});
 const leaderboard=async(t,s,mobile)=>{
  if(mobile)await t.page.getByRole('button',{name:'Markets',exact:true}).click();
  await s(()=>t.page.getByRole('link',{name:'Leaderboard',exact:true}).filter({visible:true}).first().click());
  const period=async name=>{await click(t.page,name);await poll(()=>t.page.url(),u=>u.includes(`period=${name.toLowerCase()}`));await visible(t.page.getByText('Updating…',{exact:true}));};
  await s(()=>period('1W'));await s(()=>period('ALL'));
  if(mobile)await s(()=>click(t.page,'Filters'));
  await s(async()=>{await click(t.page,'Chain');await t.page.getByRole('option',{name:'Gnosis',exact:true}).click();await poll(()=>t.page.url(),u=>u.includes('chain=100'));if(mobile)await t.page.getByRole('dialog',{name:'Filters',exact:true}).getByRole('button',{name:'Close',exact:true}).click();});
  await s(()=>click(t.page,'Score'));await poll(()=>t.page.url(),u=>u.includes('sort=score'));
  const rows=t.page.locator('.leader-row,[data-leader-row],tbody tr');await poll(()=>rows.count(),n=>n===25);
  const first=await rows.allTextContents();
  await s(()=>click(t.page,'Next'));await poll(()=>t.page.url(),u=>u.includes('offset=25'));await poll(()=>rows.allTextContents(),r=>r.length===25&&JSON.stringify(r)!==JSON.stringify(first));
  await s(()=>click(t.page,'Previous'));await poll(()=>t.page.url(),u=>u.includes('offset=0'));await poll(()=>rows.allTextContents(),r=>JSON.stringify(r)===JSON.stringify(first));
 };
 flow(test,'flow-02-leaderboard',7,(t,s)=>leaderboard(t,s,false),{widths:[1440]});
 flow(test,'flow-03-market-trade',7,async(t,s)=>{
  const c=await homeCard(t);await s(()=>c.locator('.market-link').click());
  await s(()=>click(t.page,'Custom'));const dialog=t.page.getByRole('dialog');
  await s(()=>dialog.getByRole('button',{name:'Last Month',exact:true}).click());
  await s(()=>dialog.getByRole('button',{name:'Save',exact:true}).click());assert.match(t.page.url(),/range=\d+(?:-|%2D)\d+/);
  for(const name of ['Top Holders','Activity','Related Conditional Markets (2)']){
   await s(()=>t.page.getByRole('tab',{name,exact:true}).click());
   assert.equal(await t.page.getByRole('tab',{name,exact:true}).getAttribute('aria-selected'),'true');await visible(t.page.getByRole('tabpanel'));
  }
  assert.match(await t.page.getByRole('tabpanel').innerText(),/Conditional on/);
 });
 flow(test,'flow-04-liquidity',5,async(t,s)=>{
  const c=await homeCard(t);await s(()=>c.locator('.market-link').click());await s(()=>t.page.getByRole('radio').first().click());
  await s(()=>click(t.page,'View pool details'));await visible(t.page.getByText('Pool Id:',{exact:true}));await visible(t.page.getByText('SHARES',{exact:true}));await visible(t.page.getByText('Liquidity Chart',{exact:true}));assert.match(await t.page.locator('.pool-details').innerText(),/Last:/);
  await s(()=>click(t.page,'Add Liquidity'));await visible(t.page.getByRole('dialog'));await s(()=>t.page.getByRole('dialog').getByRole('button',{name:'Return',exact:true}).click());assert.equal(await t.page.getByRole('dialog').count(),0);
 });
 flow(test,'flow-05-report-answer',4,async(t,s)=>{
  const c=await homeCard(t);await s(()=>c.locator('.market-link').click());
  await s(()=>click(t.page,'Answer on Reality.eth!'));await visible(t.page.getByRole('dialog'));
  await s(()=>t.page.getByRole('radio',{name:'Mark this question invalid',exact:true}).check());assert.match(await t.page.getByRole('dialog').innerText(),/10 XDAI/);
  await s(()=>t.page.getByRole('dialog').getByRole('button',{name:'Return',exact:true}).click());
 });
 flow(test,'flow-06-collections-gate',2,async(t,s)=>{
  await s(()=>t.page.getByRole('link',{name:/My collections/}).filter({visible:true}).first().click());await visible(t.page.getByText('No markets in this collection.',{exact:true}));
  await s(()=>click(t.page,'Sign in'));await visible(t.page.getByText('User rejected the request.',{exact:true}));
 });
 flow(test,'flow-07-mobile-search-trade-sheet',4,async(t,s)=>{
  await s(()=>t.page.getByRole('button',{name:'Search',exact:true}).click());
  await s(async()=>{const d=t.page.getByRole('dialog',{name:'Search',exact:true});await d.getByRole('combobox').fill('Marine Le Pen');await t.page.keyboard.press('Enter');});
  await s(()=>t.page.locator('.market-card').first().getByRole('button',{name:'Buy Yes at 84.2%',exact:true}).click());
  await s(()=>t.page.getByRole('dialog',{name:/Buy /}).getByRole('textbox',{name:'Amount'}).fill('1'));await poll(()=>t.page.getByRole('dialog',{name:/Buy /}).innerText(),v=>v.includes('1.1868'));
 },{widths:[390]});
 flow(test,'flow-08-mobile-leaderboard',8,(t,s)=>leaderboard(t,s,true),{widths:[390]});
 flow(test,'flow-09-conditional',5,async(t,s)=>{
  const p=await openRail(t);await s(()=>p.getByRole('switch',{name:'Show only conditional markets',exact:true}).click());await s(()=>p.getByRole('button',{name:'Apply',exact:true}).click());await visible(t.page.getByRole('button',{name:'Remove Conditional',exact:true}));
  const c=t.page.locator('.market-card').filter({hasText:'National Rally'}).filter({hasText:'being "Yes"'}).first();await s(()=>c.locator('.market-link').click());assert.match(await t.page.locator('main').innerText(),/LEPEN_NRYES/);
  await s(()=>t.page.locator('.conditional-banner').getByRole('link').click());
  await s(()=>t.page.getByRole('tab',{name:'Related Conditional Markets (2)',exact:true}).click());assert.match(await t.page.locator('[role=tabpanel]').innerText(),/being "Yes"/);assert.match(await t.page.locator('[role=tabpanel]').innerText(),/being "No"/);
 });
}
