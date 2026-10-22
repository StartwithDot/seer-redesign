// Run explicitly with: node apps/explorer/public/previews/a/check-nav.mjs
// Playwright fulfills static files from disk. No server process is started.
import { chromium } from 'playwright-core';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import assert from 'node:assert/strict';
const directory=path.dirname(fileURLToPath(import.meta.url));
const data=JSON.parse(await readFile(path.resolve(directory,'../data/markets.json'),'utf8'));
const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
try {
 const page=await browser.newPage({viewport:{width:1440,height:900}});
 const errors=[];
 page.on('pageerror',error=>errors.push(error.message));
 page.on('console',message=>{if(message.type()==='error')errors.push(message.text());});
 await page.route('https://seam.test/**',async route=>{
  const pathname=new URL(route.request().url()).pathname;
  const files={'/a/index.html':['index.html','text/html'],'/a/app.js':['app.js','text/javascript'],'/a/app.css':['app.css','text/css'],'/data/markets.json':['../data/markets.json','application/json']};
  const entry=files[pathname];
  if(!entry)return route.abort();
  await route.fulfill({body:await readFile(path.resolve(directory,entry[0])),contentType:entry[1]});
 });
 const base='https://seam.test/a/index.html';
 const marketRoute=`#/market/${data.markets[0].id}`;
 const origins=['#/',marketRoute,'#/leaderboard','#/create-market'];
 const destinations=[['.brand','#/','All markets'],['header nav a[href="#/"]','#/','All markets'],['header nav a[href="#/leaderboard"]','#/leaderboard','Leaderboard'],['header nav a[href="#/create-market"]','#/create-market','Create Market']];
 async function visit(hash){await page.goto(base+hash);await page.locator('#app h1').waitFor();}
 for(const origin of origins){
  for(const [selector,hash,heading] of destinations){
   await visit(origin);
   await page.locator(selector).click();
   await page.waitForFunction(expected=>location.hash===expected,hash);
   await page.getByRole('heading',{name:heading,exact:true}).waitFor();
  }
  await visit(origin);
  const routeHeading=await page.locator('#app h1').innerText();
  async function unchanged(){
   assert.equal(new URL(page.url()).hash,origin);
   assert.equal(await page.locator('#app h1').innerText(),routeHeading);
   assert.ok(await page.locator('#app h1').isVisible());
  }
  for(const [action,heading] of [['policies','Policies'],['help','Read the seam']]){
   await page.locator(`header [data-action=${action}]`).click();
   await page.getByRole('dialog').getByRole('heading',{name:heading,exact:true}).waitFor();
   await unchanged();
   await page.keyboard.press('Escape');
  }
  await page.locator('header [data-action=apps]').click();
  await page.locator('.app-popover').waitFor();
  const products=['Seer App','Deep','Futarchy','Opportunity Markets','Risk Pricing','Explorer'];
  for(const name of products){
   const link=page.locator('.app-popover a').filter({hasText:name});
   const destination=await link.getAttribute('href');
   const popupPromise=page.waitForEvent('popup');
   // Fulfill external pages locally, so the check never depends on a live service.
   await page.context().route(destination+'**',route=>route.fulfill({contentType:'text/html',body:`<h1>${name}</h1>`}));
   await link.click();
   const popup=await popupPromise;
   await popup.waitForLoadState('domcontentloaded');
   assert.equal(new URL(popup.url()).origin,new URL(destination).origin);
   await popup.getByRole('heading',{name,exact:true}).waitFor();
   await popup.close();
  }
  await unchanged();
  await page.keyboard.press('Escape');
  const oldTheme=await page.locator('html').getAttribute('data-theme');
  await page.locator('#theme').click();
  assert.notEqual(await page.locator('html').getAttribute('data-theme'),oldTheme);
  await unchanged();
  await page.locator('#theme').click();
  await page.locator('#wallet').click();
  if(await page.getByRole('dialog').isVisible())await page.keyboard.press('Escape');
  await page.locator('#wallet').click();
  await page.getByRole('dialog').getByRole('heading',{name:'Account',exact:true}).waitFor();
  await unchanged();
  await page.keyboard.press('Escape');
  await page.locator('#search').fill('French');
  await page.waitForFunction(()=>location.hash==='#/');
  await page.getByRole('heading',{name:'All markets',exact:true}).waitFor();
  assert.equal(new URL(page.url()).searchParams.get('marketName'),'French');
  await page.locator('#search').fill('');
  await page.keyboard.press('Escape');
  if(origin!=='#/'){
   await visit(origin);
   await page.locator('.breadcrumb a[href="#/"]').first().click();
   await page.getByRole('heading',{name:'All markets',exact:true}).waitFor();
  }
 }
 // Regression sequence without reloading, including same-route links.
 await visit(marketRoute);
 for(const [selector,hash,heading] of destinations.slice(1)){
  await page.locator(selector).click();
  await page.waitForFunction(expected=>location.hash===expected,hash);
  await page.getByRole('heading',{name:heading,exact:true}).waitFor();
 }
 await page.locator('.brand').click();
 await page.locator('[data-action=agent]').click();
 await page.locator('.machine-strip').first().waitFor();
 await page.locator('[data-action=agent-console]').click();
 await page.locator('#agent-response').waitFor();
 assert.equal(JSON.parse(await page.locator('#agent-response').innerText()).length,3);
 await page.locator('[data-action=agent-console]').last().click();
 await page.locator('[data-layout=table]').click();
 await page.locator('.agent-table').waitFor();
 for(const width of [1440,1100,820,390]){
  await page.setViewportSize({width,height:900});
  await visit(marketRoute);
  for(const tab of ['Price','Depth','Volume','Traders']){
   await page.locator(`.chart-tabs [data-tab="${tab}"]`).click();
   assert.ok((await page.locator('#chart-stage').innerHTML()).length>0);
  }
  for(const tab of ['About','Outcomes','Activity','Holders','Dispute and Resolution']){
   await page.locator(`.detail-tabs [data-tab="${tab}"]`).click();
   assert.ok((await page.locator('#tab-content').innerText()).length>0);
  }
  if(width<=820)await page.locator('.mobile-trade').click();
  await page.locator('[data-side=Sell]').click();
  assert.match(await page.locator('#quote-line').innerText(),/Sell/);
  assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`Overflow at ${width}`);
 }
 for(const width of [820,390]){
  await page.setViewportSize({width,height:900});
  for(const origin of origins){
   for(const [label,hash,heading] of [['Markets','#/','All markets'],['Leaderboard','#/leaderboard','Leaderboard'],['Create Market','#/create-market','Create Market']]){
    await visit(origin);
    await page.locator('header [data-action=menu]').click();
    await page.getByRole('dialog').getByText(label,{exact:true}).click();
    await page.waitForFunction(expected=>location.hash===expected,hash);
    await page.getByRole('heading',{name:heading,exact:true}).waitFor();
    assert.equal(await page.getByRole('dialog').isVisible(),false);
   }
   await visit(origin);
   await page.locator('header .brand').click();
   await page.getByRole('heading',{name:'All markets',exact:true}).waitFor();
   assert.equal(new URL(page.url()).hash,'#/');
  }
 }
 await page.emulateMedia({reducedMotion:'reduce'});
 for(const width of [1440,1100,820,390]){
  await page.setViewportSize({width,height:900});
  for(const theme of ['dark','light']){
   await page.evaluate(theme=>{document.documentElement.dataset.theme=theme;localStorage.setItem('seam.theme',theme);},theme);
   await visit('#/');
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`${theme} home overflow at ${width}`);
  }
 }
 assert.deepEqual(errors,[]);
 console.log('Navigation, Agent mode and market terminal checks passed.');
} finally {await browser.close();}
