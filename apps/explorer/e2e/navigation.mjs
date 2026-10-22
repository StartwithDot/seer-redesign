import {assert,marketRoute,routes,visible,click,homeCard,geometry,openBuy,openRail,poll} from './helpers.mjs';
export function register(test) {
 test('nav','nav-every-route-reachable-from-ui',async t=>{
  for(const [name,href] of [['Leaderboard','#/leaderboard'],['Create New Market','#/create-market'],['My collections','#/collections/default']]) {
   await t.go();if(t.width<700&&name==='Leaderboard')await t.page.getByRole('button',{name:'Markets',exact:true}).click();
   await t.page.getByRole('link',{name:new RegExp(name)}).filter({visible:true}).first().click();assert(t.page.url().endsWith(href));
  }
  for(const [menu,labels] of [['Policies',['Verified Market Policy','Market Rules Policy']],['Account',['Account','Deposit','Portfolio','Trade Collateral']]])for(const label of labels){
   await t.go();if(menu==='Account')await t.page.evaluate(()=>window.__explorerTest.connect());
   if(t.width<700)await t.page.getByRole('button',{name:'Markets',exact:true}).click();
   await click(t.page,menu);await t.page.getByRole('link',{name:label,exact:true}).click();await visible(t.page.locator('.plate'));
  }
 });
 test('nav','nav-back-forward-restores-filters-and-scroll',async t=>{
  await t.go('#/?verif=Verified');await t.page.evaluate(()=>scrollTo(0,400));const y=await t.page.evaluate(()=>scrollY);
  await t.page.locator('.market-card .market-link').first().click();await poll(()=>t.page.url(),u=>u.includes('/markets/'));
  await t.page.goBack();assert.match(t.page.url(),/verif=Verified/);await poll(()=>t.page.evaluate(()=>scrollY),n=>Math.abs(n-y)<2,'Scroll restoration');
  await t.page.goForward();assert.match(t.page.url(),/\/markets\//);
 });
 test('nav','nav-deep-link-market-loads',async t=>{for(const route of routes.filter(r=>r.includes('/markets/'))){await t.go(route);await visible(t.page.locator('main h1'));assert(!await t.page.getByText('Not in this build',{exact:true}).isVisible());}});
 test('nav','nav-brand-home-header-scoped',async t=>{await t.go(marketRoute());await t.page.locator('header .brand').click();assert(t.page.url().endsWith('#/'));await visible(t.page.locator('.market-grid'));});
 test('nav','nav-breadcrumb-home',async t=>{await t.go(marketRoute());await t.page.locator('main').getByRole('link',{name:'Home',exact:true}).click();assert(t.page.url().endsWith('#/'));});
 test('nav','nav-esc-closes-overlay-then-back',async t=>{await openBuy(t);const url=t.page.url();await t.page.keyboard.press('Escape');assert.equal(await t.page.getByRole('dialog',{name:/Buy /}).count(),0);assert.equal(t.page.url(),url);});
 test('nav','nav-keyboard-tab-order-card-controls',async t=>{const c=await homeCard(t);await c.locator('.market-link').focus();const visited=[];for(let i=0;i<6;i++){visited.push(await t.page.evaluate(()=>({label:document.activeElement.getAttribute('aria-label'),tag:document.activeElement.tagName})));await t.page.keyboard.press('Tab');}assert(visited.some(v=>v.label?.startsWith('Buy ')));assert(visited.some(v=>/collection/.test(v.label??'')));});
 test('nav','nav-palette-slash-and-cmdk',async t=>{for(const key of ['/','Meta+k','Control+k']){await t.page.evaluate(()=>document.activeElement?.blur());await t.page.keyboard.press(key);await visible(t.page.getByRole('dialog',{name:'Search',exact:true}));await t.page.keyboard.press('Escape');assert.equal(await t.page.getByRole('dialog').count(),0);}});
 test('nav','nav-unknown-route-404-plate',async t=>{await t.go('#/missing');await visible(t.page.getByText('404',{exact:true}));await t.page.locator('main').getByRole('link',{name:'Markets',exact:true}).click();assert(t.page.url().endsWith('#/'));});
}
