// Run outside the sandbox: npm run e2e -w apps/opportunity.
// A separate test-mode bundle enables hooks; ordinary production builds omit them.
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { mkdir,readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright-core';
const root = fileURLToPath(new URL('../', import.meta.url));
const out = fileURLToPath(new URL('./out/', import.meta.url));
await mkdir(out, { recursive: true });
const vite = fileURLToPath(new URL('../../../node_modules/vite/bin/vite.js', import.meta.url));
async function build() {
  const child = spawn(process.execPath, [vite, 'build', '--mode', 'test', '--outDir', 'e2e/out/site'], { cwd: root, stdio: 'inherit' });
  await new Promise((resolve, reject) => { child.once('error', reject); child.once('exit', code => code === 0 ? resolve() : reject(new Error(`Test build exited ${code}`))); });
}
await build();
// Intercept built assets directly in the browser: no listening server is required.
const base='https://opportunity.test';
async function poll(read, message, timeout = 8000) {
  const until = Date.now() + timeout;
  while (Date.now() < until) { if (await read()) return; await new Promise(resolve => setTimeout(resolve, 40)); }
  throw new Error(message);
}
let browser, context, page;
let failures = 0;
const errors = [];
const live='seer-ai-job-board-name',final='seer-rebrand-contest';
const routes=['#/',`#/m/${live}`,`#/m/${final}`,'#/markets'];
async function go(route = '#/', query = '') {
  await page.goto(`${base}/${query}${route}`);
  await page.locator('h1').waitFor();
  assert(!await page.locator('body').innerText().then(text=>/\bstage\b/i.test(text)),'No internal working name in visible copy');
  assert.equal(await page.locator('[aria-label*="stage" i],[title*="stage" i]').count(),0,'No internal working name in accessible labels');
  await page.waitForFunction(() => Boolean(window.__oppTest));
  await page.evaluate(() => {window.__oppTest.setFeed(false);return document.fonts.ready;});
}
async function resetTest({ tour = false, width = 1440 } = {}) {
  if (context) await context.close();
  context = await browser.newContext({ viewport: { width, height: 900 }, reducedMotion: 'no-preference' });
  await context.addInitScript(({ tour }) => {
    try{localStorage.setItem('opportunity.theme', 'dark');}catch{return;}
    if(!sessionStorage.getItem('test.seeded')){
      sessionStorage.setItem('test.seeded','true');
    }

  }, { tour });
  await context.route(`${base}/**`,async route=>{
    const path=decodeURIComponent(new URL(route.request().url()).pathname);
    if(path.includes('..'))return route.fulfill({status:400,body:''});
    const file=path==='/'?'index.html':path.slice(1);
    try{const body=await readFile(out+'site/'+file);return route.fulfill({body,contentType:file.endsWith('.js')?'application/javascript':file.endsWith('.css')?'text/css':file.endsWith('.woff2')?'font/woff2':file.endsWith('.svg')?'image/svg+xml':'text/html'});}catch{return route.fulfill({status:404,body:''});}
  });
  page = await context.newPage(); errors.length = 0;
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  page.on('pageerror', error => errors.push(error.message));
  page.on('response', response => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`); });
  page.on('requestfailed', request => { if (request.failure()?.errorText !== 'net::ERR_ABORTED') errors.push(`${request.url()} ${request.failure()?.errorText}`); });
}
async function test(name, run, options) {
  try {
    await resetTest(options); await run(); assert.deepEqual(errors, [], 'Browser errors');
    await page.screenshot({ path: `${out}${name}.png` });
    console.log(`PASS ${name}`);
  } catch (error) {
    failures++; console.error(`FAIL ${name}\n${error.stack}`);
    if (page) await page.screenshot({ path: `${out}${name}-FAIL.png` }).catch(() => {});
  }
}
const state=()=>page.evaluate(()=>window.__oppTest.getState());
async function fits(){assert(await page.evaluate(()=>document.documentElement.scrollHeight===innerHeight&&document.documentElement.scrollWidth===innerWidth),'Document must fit viewport');}
try {
 browser=await chromium.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true});
 await test('01-routes-viewport',async()=>{for(const n of [1,12])for(const route of routes){await go(route,`?n=${n}`);await fits();}});
 await test('02-market-sheet-click-targets',async()=>{
  await go('#/markets');const cards=page.locator('.market-card');const count=await cards.count();
  for(let i=0;i<count;i++){
   const card=cards.nth(i),id=await card.getAttribute('data-market-id');
   // Deliberately click title text, the reported failing target.
   await card.locator('.card-head strong').click();
   await poll(()=>page.locator('.expanded-market[open]').count().then(n=>n===1),'Card did not open sheet');
   assert.equal(new URLSearchParams((await page.evaluate(()=>location.hash)).split('?')[1]).get('open'),id);
   assert.equal(await page.locator('#market-sheet-title').innerText(),(await state()).markets.find(m=>m.id===id).title);
   await page.locator('.expanded-market').getByRole('button',{name:'Close',exact:true}).click();
   await poll(()=>page.locator('.expanded-market').count().then(n=>n===0),'Sheet did not close');
  }
  await go();await page.getByRole('button',{name:'Open expanded view',exact:true}).click();await page.locator('.expanded-market[open]').waitFor();await page.keyboard.press('Escape');
  for(const button of await page.locator('.desktop-rail .expand-market').all()){const label=await button.getAttribute('aria-label');await button.click();await page.locator('.expanded-market[open]').waitFor();assert.equal(await page.locator('#market-sheet-title').innerText(),label.replace('Open expanded view: ',''));await page.keyboard.press('Escape');await poll(()=>page.locator('.expanded-market').count().then(n=>!n),'Rail sheet close');}
 });
 await test('03-data-invariants',async()=>{
  await go();const s=await state(),m=s.markets.find(m=>m.id===live),rows=m.rows;
  assert.equal(rows.length,235);assert.equal(rows.filter(o=>o.odds!==null&&o.odds!==.4).length,59);assert.equal(rows.filter(o=>o.odds===.4).length,46);assert.equal(rows.filter(o=>o.odds===null).length,130);
  const sorted=[...rows].sort((a,b)=>(b.odds??-1)-(a.odds??-1));
  assert.equal(sorted.slice(0,27).reduce((a,o)=>a+o.odds,0).toFixed(1),'60.4');
  assert(Math.abs(rows.reduce((a,o)=>a+(o.odds??0),0)-99)<.11,'Real observed odds sum');
  for(const m of s.markets.filter(m=>m.sample)){
   assert.equal(new Set(m.rows.map(o=>o.name)).size,m.rows.length);assert(m.rows.some(o=>o.odds===null));assert(m.rows.some(o=>o.odds===.4));
   assert(Math.abs(m.rows.reduce((a,o)=>a+(o.odds??0),0)-100)<1e-8);
  }
  await go('#/markets?status=All');for(const card of await page.locator('.market-card').all()){
   const marketId=await card.getAttribute('data-market-id');if((await state()).markets.find(m=>m.id===marketId)?.sample){const text=await card.locator('.triage-label').innerText(),value=Number(text.match(/([\d.]+)%/)[1]);assert(value>=55&&value<=85,text);}
  }
 });
 await test('03b-ticks-conserve-mass',async()=>{
  await go();const initial=await state(),rows=initial.markets[0].rows,sum=rows.reduce((a,o)=>a+(o.odds??0),0);
  await page.evaluate(()=>{window.__oppTest.setFeed(true);for(let i=0;i<12;i++)window.__oppTest.tick();window.__oppTest.setFeed(false);});
  const next=(await state()).markets[0];assert.equal(next.tick,12);assert(Math.abs(next.rows.reduce((a,o)=>a+(o.odds??0),0)-sum)<1e-8);
  await page.emulateMedia({reducedMotion:'reduce'});await page.evaluate(()=>{window.__oppTest.setFeed(true);window.__oppTest.tick();window.__oppTest.setFeed(false);});assert.equal((await state()).markets[0].tick,12);
 });
 await test('04-filters-counts',async()=>{
  await go('#/markets','?n=3');assert.equal(await page.locator('.market-card').count(),1);
  const filters=page.locator('.filters');for(const [label,count]of [['All',3],['Completed',2],['Active',1]]){
   await filters.getByRole('button',{name:`${label} ${count}`,exact:true}).click();await poll(()=>page.locator('.market-card').count().then(n=>n===count),label);
  }
  await go('#/markets');const s=await state();assert.equal(await page.locator('.market-card').count(),s.markets.filter(m=>m.status==='Active').length);
  const widths=await page.locator('.card-meta .status').evaluateAll(els=>els.map(e=>e.getBoundingClientRect().width));assert(widths.every(w=>w===96));
 });
 await test('05-tiles-switch-speed',async()=>{
  await go();
  for(const option of await page.locator('.desktop-rail .market-row').all()){
   const before=await state(),name=await option.locator('strong').innerText(),target=before.markets.find(m=>m.title===name);
   const start=Date.now();await option.click();await poll(()=>page.locator(`.field[data-market="${target.id}"]`).count().then(n=>n===1),'Market morph',450);assert(Date.now()-start<=450);
   for(const tile of await page.locator('.field-tile,.field-chip').all()){assert((await tile.innerText()).trim());assert(await tile.isVisible());}
  }
 });
 await test('06-tour-blur',async()=>{
  await go();await page.getByRole('button',{name:'Help',exact:true}).click();await page.getByRole('button',{name:'Guide me in the app',exact:true}).click();
  const targets=['.desktop-rail .rail','.marquee','.field','.cut-row','.sponsor-lane','.right-panel .selection','.right-panel .ticket','#seer-global-header .sg-connect'];
  for(let i=0;i<8;i++){
   await poll(()=>page.locator('.tour-card .data-line').innerText().then(t=>t.includes(`${i+1} / 8`)),'Tour step');
   await poll(async()=>{const a=await page.locator(targets[i]).boundingBox(),b=await page.locator('.tour-ring').boundingBox();return b.x<=a.x+2&&b.y<=a.y+2&&b.x+b.width>=a.x+a.width-2&&b.y+b.height>=a.y+a.height-2;},'Spotlight containment');
   assert(await page.locator('.tour-scrim').evaluate(e=>{const s=getComputedStyle(e),r=e.getBoundingClientRect();return s.backdropFilter.includes('10px')&&s.clipPath!=='none'&&r.width===innerWidth&&r.height===innerHeight;}));
   await poll(async()=>{const a=await page.locator('.tour-card').boundingBox(),b=await page.locator('.tour-ring').boundingBox();return a.x+a.width<=b.x||b.x+b.width<=a.x||a.y+a.height<=b.y||b.y+b.height<=a.y;},'Tour card intersects target');
   await page.locator('.tour-card').getByRole('button',{name:i===7?'Enter':'Next',exact:true}).click();
  }
  assert.equal(await page.locator('.tour[open]').count(),0);
 });
 await test('07-marquee-steps-ticket',async()=>{
  await go();assert((await page.locator('.right-panel .ticket').boundingBox()).height<=240);
  await page.mouse.move(0,0);const transform=await page.locator('.marquee-track').evaluate(e=>getComputedStyle(e).transform);
  await poll(()=>page.locator('.marquee-track').evaluate((e,t)=>getComputedStyle(e).transform!==t,transform),'Marquee stationary');
  await page.locator('.marquee').hover();assert.equal(await page.locator('.marquee-track').evaluate(e=>getComputedStyle(e).animationPlayState),'paused');
 });
 await test('07b-explainer',async()=>{
  await resetTest({tour:true});await go();assert.equal(await page.locator('dialog[open]').count(),0);await page.getByRole('button',{name:'Help',exact:true}).click();await page.locator('.explainer[open]').waitFor();
  const chapters=['Call for entries become submissions','Traders set the odds of selection','Price becomes a triage tool','Sponsor makes final decision','Traders earn P&L based on final decision'];
  await poll(()=>page.locator('.explainer-step.active').innerText().then(t=>t.includes(chapters[1])),'Explainer autoplay',6000);
  for(let i=0;i<5;i++){await page.locator('.explainer-step').nth(i).click();assert.equal(await page.locator('#explainer-title').innerText(),chapters[i]);assert.equal(await page.locator('.scene-art svg').getAttribute('aria-label'),chapters[i]);}
  await page.keyboard.press('ArrowLeft');assert.equal(await page.locator('#explainer-title').innerText(),chapters[3]);
  await page.keyboard.press('Escape');assert.equal(await page.locator('.explainer').count(),0);await go();assert.equal(await page.locator('.explainer').count(),0,'Never auto opens');
 });
 await test('07c-field-filter-restoration',async()=>{
  await go();await page.emulateMedia({reducedMotion:'reduce'});
  const snapshot=()=>page.locator('.field-tile').evaluateAll(els=>els.map(e=>({name:e.querySelector('strong').textContent,opacity:getComputedStyle(e).opacity,background:getComputedStyle(e).backgroundColor,color:getComputedStyle(e).color})));
  await poll(()=>page.locator('.field-tile').count().then(n=>n>1),'Field ready');const initial=await snapshot();assert(initial.every(t=>t.opacity==='1'));
  await page.locator('#review-cut').focus();await page.keyboard.press('Home');assert(await page.locator('.field-tile.dim').count()>0);
  await page.keyboard.press('End');await poll(()=>page.locator('.field-tile.dim,.field-chip.dim').count().then(n=>n===130),'Cut did not restore priced and tied cells');
  await page.getByRole('button',{name:'List',exact:true}).click();await page.getByRole('button',{name:'Field',exact:true}).click();
  await poll(async()=>JSON.stringify(await snapshot())===JSON.stringify(initial),'Cut/view colors did not restore');
  await page.getByRole('button',{name:'View shortlist',exact:true}).click();assert.equal(await page.getByRole('button',{name:'List',exact:true}).getAttribute('aria-pressed'),'true');
  await page.getByRole('button',{name:'Field',exact:true}).click();
  await poll(async()=>JSON.stringify(await snapshot())===JSON.stringify(initial),'Field colors did not restore');
  await page.evaluate(()=>window.__oppTest.selectMarket('sample-1'));await poll(()=>page.locator('.field').getAttribute('data-market').then(id=>id==='sample-1'),'Switch sample');
  await page.evaluate(id=>window.__oppTest.selectMarket(id),live);await poll(async()=>JSON.stringify(await snapshot())===JSON.stringify(initial),'Field colors changed after switching markets');
 });
 await test('07e-named-field-and-cards',async()=>{
  await go();await page.emulateMedia({reducedMotion:'reduce'});
  await poll(()=>page.locator('.field-tile').count().then(n=>n===59),'All priced cells render');
  assert(await page.locator('.field').evaluate(e=>{const r=e.getBoundingClientRect(),card=e.closest('.stage-card').getBoundingClientRect();return r.height>=180&&r.top>=card.top&&r.bottom<=card.bottom;}),'Field stays usable inside its bounded card');
  assert(await page.locator('.field.bubbles').count());
  assert.equal(await page.locator('.field-tile').count(),59);
  assert.equal(await page.locator('.tier-pane').count(),2);
  assert.equal(await page.locator('.tier-pane').nth(0).locator('.field-chip').count(),46);
  assert.equal(await page.locator('.tier-pane').nth(1).locator('.field-chip').count(),130);
  assert.equal(await page.locator('.stage-card .tier-summary,.field-band').count(),0);
  for(const label of ['Tied at 0.4% · 46','No pool · 130'])assert.equal(await page.locator('.stage-card').getByText(label,{exact:true}).count(),1);
  assert(await page.locator('.field-tile,.field-chip').evaluateAll(els=>els.every(e=>e.querySelector('strong')?.textContent.trim()&&e.title&&getComputedStyle(e.querySelector('strong')).display!=='none')));
  assert(await page.locator('.field-tile').evaluateAll(els=>els.every(e=>{const r=e.getBoundingClientRect();return r.width>=55.9&&r.height>=55.9;})));
  await page.getByRole('button',{name:'Heatmap',exact:true}).click();
  assert.equal(await page.locator('[data-testid^=heatmap-]').count(),59);
  assert(await page.locator('.field-tile').evaluateAll(els=>els.every(e=>{const r=e.getBoundingClientRect();return r.width>=103.9&&r.height>=63.9&&e.querySelector('strong')?.textContent.trim()&&e.title;})),'Heatmap cells retain labels and readable dimensions');
  await page.getByRole('button',{name:'Bubbles',exact:true}).click();
  for(const pane of await page.locator('.tier-pane').all()){
   const last=pane.locator('.field-chip').last();await last.scrollIntoViewIfNeeded();await last.click();assert.equal(await page.locator('.selection h2').innerText(),await last.locator('strong').innerText());
  }
  const a=await page.locator('.cut-row').boundingBox(),b=await page.locator('.sponsor-lane').boundingBox();assert.equal(a.height,b.height);assert.equal(a.y,b.y);
  await page.getByRole('button',{name:'View shortlist',exact:true}).click();assert.equal(await page.locator('.ranked-table').getAttribute('aria-rowcount'),'28');
  await page.locator('.ranked-pane').evaluate(e=>e.scrollTop=e.scrollHeight);await poll(()=>page.locator('.ranked-table tbody tr:not([aria-hidden])').last().innerText().then(t=>t.startsWith('27')),'Shortlist must end at rank 27');
  assert.equal(await page.getByRole('button',{name:'List',exact:true}).getAttribute('aria-pressed'),'true');
 });
 await test('07d-sheet-last-row',async()=>{
  for(const [width,height] of [[1440,900],[390,844]]){
   await page.setViewportSize({width,height});await go();await page.getByRole('button',{name:'Open expanded view',exact:true}).click();await page.locator('.expanded-market[open]').waitFor();
   assert.equal(await page.locator('.sheet-outcomes tbody tr').count(),235);
   const last=page.locator('.sheet-outcomes tbody tr').last();await last.scrollIntoViewIfNeeded();
   assert(await last.evaluate(e=>{const row=e.getBoundingClientRect(),pane=e.closest('.sheet-body').getBoundingClientRect(),header=document.querySelector('.sheet-header').getBoundingClientRect();return row.top>=Math.max(pane.top,header.bottom)&&row.bottom<=pane.bottom;}),'Last submission row is clipped');
   await page.locator('.sheet-trading .ticket').scrollIntoViewIfNeeded();assert(await page.locator('.sheet-trading .ticket').isVisible());
   await page.locator('.sheet-body').evaluate(e=>e.scrollTop=e.scrollHeight);assert(await page.locator('.sheet-header').evaluate(e=>{const r=e.getBoundingClientRect();return r.top>=0&&r.bottom<innerHeight;}),'Sticky header lost');
   await page.keyboard.press('Escape');
  }
 });
 await test('08-dropdowns',async()=>{
  await go('#/markets');const triggers=page.locator('.filter-trigger');
  for(const trigger of await triggers.all()){
   await page.evaluate(()=>{window.__menuFrames=[];const until=performance.now()+600;const sample=()=>{const e=document.querySelector('.hover-panel');if(e)window.__menuFrames.push({opacity:Number(getComputedStyle(e).opacity),scale:new DOMMatrixReadOnly(getComputedStyle(e).transform).a});if(performance.now()<until)requestAnimationFrame(sample);};requestAnimationFrame(sample);});
   await trigger.focus();await page.locator('.hover-panel').waitFor();assert.equal(await page.locator('.hover-panel').count(),1);
   await poll(()=>page.locator('.hover-panel').evaluate(e=>getComputedStyle(e).opacity==='1'&&new DOMMatrixReadOnly(getComputedStyle(e).transform).a>.999),'Menu spring did not settle');
   assert(await page.evaluate(()=>window.__menuFrames.some(f=>f.opacity<.99||f.scale<.999)),'Menu never animated');
   const r=await page.locator('.hover-panel').boundingBox(),t=await trigger.boundingBox();assert(r.x>=0&&r.x+r.width<=1440&&r.y>=0&&r.y+r.height<=900);assert(r.y>=t.y+t.height+7||r.y+r.height<=t.y-7);
  }
  await page.keyboard.press('Escape');await poll(()=>page.locator('.hover-panel').count().then(n=>!n),'Menu Esc');
 });
 await test('09-wallet-buy-redeem',async()=>{
  await go();const ticket=page.locator('.right-panel .ticket');await ticket.getByRole('button',{name:'Connect wallet',exact:true}).click();
  await page.locator('.wallet-dialog').getByRole('button',{name:'Connect wallet',exact:true}).click();
  await ticket.getByRole('spinbutton').fill('20');await ticket.locator('.primary').click();
  let s=await state();assert.equal(s.balance,230);assert(s.positions[s.submissionId]>0);
  await ticket.getByRole('spinbutton').fill('1000');assert.equal(await ticket.locator('.primary').getAttribute('aria-disabled'),'true');
  await page.evaluate(id=>location.hash=`/m/${id}`,final);await poll(()=>state().then(s=>s.selectedId===final),'Final route');
  s=await state();const winner=s.markets.find(m=>m.id===final).rows.find(o=>o.name==='Electric Foundation');
  assert.equal(s.submissionId,winner.id);const before=s.balance;await ticket.getByRole('button',{name:'Redeem',exact:true}).click();
  s=await state();assert.equal(s.balance,before+10);assert.equal(s.positions[winner.id],0);assert.equal(await ticket.locator('.primary').getAttribute('aria-disabled'),'true');
 });
 await test('10-overlap',async()=>{
  for(const route of routes){await go(route);await page.waitForTimeout(1200);const bad=await page.evaluate(()=>{
   const clipped=(e,r)=>{for(let p=e.parentElement;p&&p!==document.body;p=p.parentElement){const c=getComputedStyle(p);if(/hidden|clip|auto|scroll/.test(c.overflowX+c.overflowY)){const q=p.getBoundingClientRect(),cx=r.x+r.width/2,cy=r.y+r.height/2;if(cx<q.left||cx>q.right||cy<q.top||cy>q.bottom)return true;}}return false;};const visible=e=>{const r=e.getBoundingClientRect();if(!r.width||!r.height||r.bottom<0||r.top>innerHeight||e.closest('[aria-hidden=true]')||clipped(e,r))return false;const hit=document.elementFromPoint(Math.max(0,Math.min(innerWidth-1,r.x+r.width/2)),Math.max(0,Math.min(innerHeight-1,r.y+r.height/2)));return hit&&(e.contains(hit)||hit.contains(e));};
   const els=[...document.querySelectorAll('button,input,a,h1,h2,output')].filter(visible),bad=[];
   for(let i=0;i<els.length;i++)for(let j=i+1;j<els.length;j++){const a=els[i],b=els[j];if(a.contains(b)||b.contains(a)||a.closest('[data-overlay]')||b.closest('[data-overlay]'))continue;const r=a.getBoundingClientRect(),s=b.getBoundingClientRect();if(a.matches('.bubbles .field-tile')&&b.matches('.bubbles .field-tile')&&Math.hypot(r.x+r.width/2-s.x-s.width/2,r.y+r.height/2-s.y-s.height/2)>=(r.width+s.width)/2)continue;if(Math.min(r.right,s.right)-Math.max(r.left,s.left)>2&&Math.min(r.bottom,s.bottom)-Math.max(r.top,s.top)>2)bad.push([a.textContent,b.textContent]);}return bad;
  });assert.deepEqual(bad,[],route);}
 });
 await test('11-click-all',async()=>{
  const setups=[...routes.map(route=>({name:route,open:()=>go(route)})),
   ...['Bubbles','Heatmap'].map(variant=>({name:variant,open:async()=>{await go();await page.getByRole('button',{name:'Field',exact:true}).click();await page.getByRole('button',{name:variant,exact:true}).click();}})),
   {name:'List',open:async()=>{await go();await page.getByRole('button',{name:'List',exact:true}).click();}},
   {name:'Market sheet',open:async()=>{await go('#/markets');await page.locator('.market-card').first().locator('.card-head strong').click();}},
   {name:'Rail arrow',open:async()=>{await go();await page.locator('.desktop-rail .rail-market').first().hover();}},
   {name:'Tour',open:async()=>{await go();await page.getByRole('button',{name:'Help',exact:true}).click();await page.getByRole('button',{name:'Guide me in the app',exact:true}).click();}},
   {name:'Wallet',open:async()=>{await go();await page.locator('#seer-global-header .sg-connect').click();await page.locator('.wallet-dialog[open]').waitFor();}},
   {name:'Palette',open:async()=>{await go();await page.keyboard.press('/');}}];
  for(const setup of setups){
   await page.waitForTimeout(250);for(let k=0;k<3;k++){await page.keyboard.press('Escape');await page.waitForTimeout(150);}await page.evaluate(()=>{try{localStorage.setItem('opportunity.field','Bubbles');}catch{/* about:blank */}});await page.goto('about:blank');await setup.open();const controls=[];
   for(const el of await page.locator('button,input,a,[role="option"],tr[tabindex]').all()){
    if(!await el.isVisible())continue;
    if(!await el.evaluate(e=>{const d=document.querySelector('dialog[open]');if(d&&!d.contains(e))return false;if(e.closest('#seer-global-header,.seer-footer'))return false;const r=e.getBoundingClientRect(),p=document.elementFromPoint(r.x+r.width/2,r.y+r.height/2);return p&&(e.contains(p)||p.contains(e));}))continue;
    if(await el.getAttribute('target')==='_blank')continue;
    const snapshot=await el.ariaSnapshot();
    // YAML quotes keys containing ': '. Unwrap that key before parsing the ARIA role/name.
    const firstLine=snapshot.split('\n')[0];
    const key=firstLine.startsWith("- '")?'- '+firstLine.slice(3,firstLine.lastIndexOf("'")).replaceAll("''", "'"):firstLine;
    const match=key.match(/^- (button|link|option|row|textbox|spinbutton|slider|searchbox)(?: "((?:[^"\\]|\\.)*)")?/);
    assert(match,`Unnamed control: ${snapshot}`);
    const role=match[1],name=match[2]?JSON.parse('"'+match[2]+'"'):'';
    assert(name.trim(),`Unnamed control: ${snapshot}`);
    const ordinal=controls.filter(c=>c.role===role&&c.name===name).length;controls.push({role,name,ordinal,id:await el.getAttribute('data-testid')});
   }
   for(const control of controls){
    if(process.env.E2E_TRACE)console.log('  ctl',setup.name,control.role,control.name);
    await page.waitForTimeout(250);for(let k=0;k<3;k++){await page.keyboard.press('Escape');await page.waitForTimeout(150);}await page.evaluate(()=>{try{localStorage.setItem('opportunity.field','Bubbles');}catch{/* about:blank */}});await page.goto('about:blank');await setup.open();const scope=(await page.locator('dialog[open]').count())?page.locator('dialog[open]'):page;const el=control.id?page.getByTestId(control.id):scope.getByRole(control.role,{name:control.name,exact:true}).nth(control.ordinal);
    await el.waitFor({state:'visible'});
    if(await el.getAttribute('aria-pressed')==='true')continue;if(await el.getAttribute('aria-disabled')==='true'||await el.isDisabled()){assert(await el.getAttribute('title'),'Disabled control requires explanation');continue;}
    const before=await page.evaluate(()=>({hash:location.hash,html:document.body.innerHTML,focus:document.activeElement?.outerHTML}));
    if(await el.evaluate(e=>e.classList.contains('ticker-chip'))){await el.focus();await el.press('Enter');}else await el.click({force:await el.evaluate(e=>e.classList.contains('leader'))});await poll(()=>page.evaluate(b=>location.hash!==b.hash||document.body.innerHTML!==b.html||document.activeElement?.outerHTML!==b.focus,before),`Dead control: ${setup.name} ${control.name}`,1500);
   }
  }

 });
 await test('12-contrast',async()=>{
  for(const theme of ['dark','light'])for(const route of routes){await go(route);await page.evaluate(async t=>{document.documentElement.dataset.theme=t;await new Promise(requestAnimationFrame);await new Promise(requestAnimationFrame);},theme);
   const bad=await page.evaluate(()=>{
    const canvas=document.createElement('canvas');canvas.width=canvas.height=1;const ctx=canvas.getContext('2d',{willReadFrequently:true});
    const rgb=s=>{ctx.clearRect(0,0,1,1);ctx.fillStyle=s;ctx.fillRect(0,0,1,1);const c=[...ctx.getImageData(0,0,1,1).data];return [c[0],c[1],c[2],c[3]/255];},lum=c=>c.slice(0,3).map(x=>{x/=255;return x<=.04045?x/12.92:((x+.055)/1.055)**2.4;}).reduce((a,x,i)=>a+x*[.2126,.7152,.0722][i],0),bad=[];
    for(const e of document.querySelectorAll('button,span,strong,small,label,output,h1,h2,p,td,th')){
     if(![...e.childNodes].some(n=>n.nodeType===3&&n.textContent.trim()))continue;const r=e.getBoundingClientRect();if(!r.width||!r.height||r.y<0||r.bottom>innerHeight||e.closest('[aria-hidden=true]'))continue;
     const hit=document.elementFromPoint(r.x+r.width/2,r.y+r.height/2);if(!hit||!e.contains(hit))continue;
     let p=e,bg;while(p){const c=rgb(getComputedStyle(p).backgroundColor);if((c[3]??1)>=.99){bg=c;break;}p=p.parentElement;}if(!bg)continue;
     const css=getComputedStyle(e),a=lum(rgb(css.color)),b=lum(bg),ratio=(Math.max(a,b)+.05)/(Math.min(a,b)+.05),minimum=parseFloat(css.fontSize)>=24?3:4.5;
     if(ratio<minimum-.02)bad.push({text:e.textContent,ratio});
    }return bad;
   });assert.deepEqual(bad,[],`${theme} ${route}`);
  }
 });
 await test('13-reduced-motion',async()=>{
  await page.emulateMedia({reducedMotion:'reduce'});await go();await page.getByRole('button',{name:'Help',exact:true}).click();
  assert.equal(await page.locator('.scene-art').getAttribute('data-static'),'true');
  assert.equal(await page.locator('.marquee-track').evaluate(e=>getComputedStyle(e).animationName),'none');
  const title=await page.locator('#explainer-title').innerText();await page.waitForTimeout(5200);assert.equal(await page.locator('#explainer-title').innerText(),title);
  await page.locator('.scene-controls').getByRole('button',{name:'Next',exact:true}).click();assert.notEqual(await page.locator('#explainer-title').innerText(),title);
  await page.emulateMedia({reducedMotion:'no-preference'});await poll(()=>page.locator('.scene-art').getAttribute('data-static').then(v=>v==='false'),'Runtime motion enabled');await page.emulateMedia({reducedMotion:'reduce'});await poll(()=>page.locator('.scene-art').getAttribute('data-static').then(v=>v==='true'),'Runtime motion stopped');
 });
 await test('14-mobile-touch',async()=>{
  for(const route of routes){await go(route);assert(await page.evaluate(()=>document.documentElement.scrollWidth===innerWidth));
   const bad=await page.evaluate(()=>[...document.querySelectorAll('button,input,a,[role=option]')].flatMap(e=>{
    const r=e.getBoundingClientRect();if(!r.width||!r.height||r.y<0||r.bottom>innerHeight||e.closest('[aria-hidden=true],#seer-global-header'))return [];const hit=document.elementFromPoint(r.x+r.width/2,r.y+r.height/2);if(!hit||!e.contains(hit))return [];
    return r.width<39.5||r.height<39.5?[{name:e.textContent,width:r.width,height:r.height}]:[];
   }));assert.deepEqual(bad,[],route);
  }
  await go();await page.locator('.mobile-ticket-trigger').click();await page.locator('.ticket-sheet[open]').waitFor();assert((await page.locator('.ticket-sheet .ticket').boundingBox()).height<=240);
 },{width:390});
 await test('15-responsive-fit-variants',async()=>{
  const sizes=[[1366,768],[1280,720],[1152,720],[1024,768],[1440,900],[1920,1080],[2560,1440]];
  for(const [width,height] of sizes){
   await page.setViewportSize({width,height});
   for(const route of routes){
    await go(route,'?n=12');
    for(const variant of route==='#/markets'?['Explore']:['Bubbles','Heatmap','List']){
     if(variant==='List')await page.getByRole('button',{name:'List',exact:true}).click();
     else if(variant!=='Explore'){await page.getByRole('button',{name:'Field',exact:true}).click();await page.getByRole('button',{name:variant,exact:true}).click();}
     await page.evaluate(()=>document.fonts.ready);await page.waitForTimeout(900);
     const violations=await page.evaluate(()=>{
      const failures=[],visible=[];
      const scrollParent=e=>{for(let p=e.parentElement;p;p=p.parentElement){const c=getComputedStyle(p);if(/auto|scroll/.test(c.overflowY+c.overflowX)&& (p.scrollHeight>p.clientHeight+1||p.scrollWidth>p.clientWidth+1))return p;}return null;};
      for(const e of document.querySelectorAll('main *,header *,footer *')){
       const r=e.getBoundingClientRect(),style=getComputedStyle(e);if(!r.width||!r.height||style.visibility==='hidden'||Number(style.opacity)===0||e.closest('[aria-hidden=true],.marquee'))continue;
       const pane=scrollParent(e),outside=r.left<-.5||r.top<-.5||r.right>innerWidth+.5||r.bottom>innerHeight+.5;
       if(pane){const pr=pane.getBoundingClientRect(),cs=getComputedStyle(pane);if(pr.top<0||pr.bottom>innerHeight+.5||pr.left<0||pr.right>innerWidth+.5)failures.push('scroll pane outside viewport');if(cs.scrollbarWidth==='none'&&!pane.parentElement.querySelector('.scroll-cue'))failures.push('no scroll cue');if(r.top<pr.top||r.bottom>pr.bottom||r.left<pr.left||r.right>pr.right)continue;}
       else if(outside)failures.push('outside: '+e.className);
       if(e.matches('button,a,input,[role=option]')&&r.top>=0&&r.bottom<=innerHeight)visible.push({e,r});
      }
      for(let i=0;i<visible.length;i++)for(let j=i+1;j<visible.length;j++){const a=visible[i],b=visible[j];if(a.e.contains(b.e)||b.e.contains(a.e))continue;if(a.e.matches('.bubbles .field-tile')&&b.e.matches('.bubbles .field-tile')&&Math.hypot(a.r.x+a.r.width/2-b.r.x-b.r.width/2,a.r.y+a.r.height/2-b.r.y-b.r.height/2)>=(a.r.width+b.r.width)/2)continue;const overlap=Math.min(a.r.right,b.r.right)-Math.max(a.r.left,b.r.left)>1&&Math.min(a.r.bottom,b.r.bottom)-Math.max(a.r.top,b.r.top)>1;if(overlap)failures.push('overlap: '+a.e.className+' / '+b.e.className);}
      if(document.documentElement.scrollHeight>innerHeight+1)failures.push('page scroll');return failures;
     });
     assert.deepEqual(violations,[],`${width}x${height} ${route} ${variant}`);
     if(variant!=='Explore')for(const selector of ['.stage-bottom','.right-panel .ticket>.primary','.seer-footer']){const r=await page.locator(selector).boundingBox();assert(r&&r.y>=0&&r.y+r.height<=height,`${selector} visible without scrolling`);}
    }
   }
  }
  await page.setViewportSize({width:1280,height:640});await go();
  assert(await page.evaluate(()=>document.documentElement.scrollHeight>innerHeight),'Short viewport scrolls');
  await page.locator('.seer-footer').scrollIntoViewIfNeeded();assert(await page.locator('.seer-footer').isVisible());
 });
 await test('16-field-choice-restoration',async()=>{
  await go();assert(await page.locator('.field.bubbles').count());
  assert.equal(await page.evaluate(()=>localStorage.getItem('opportunity.field')),'Bubbles');
  assert.deepEqual(await page.locator('[aria-label="Field view"] button').allTextContents(),['Bubbles','Heatmap']);
  await page.getByRole('button',{name:'Heatmap',exact:true}).click();await go();assert(await page.locator('.field.heatmap').count());
  await page.getByRole('button',{name:'Bubbles',exact:true}).click();await go();assert(await page.locator('.field.bubbles').count());
  const circles=await page.locator('.bubbles .field-tile').evaluateAll(els=>els.map(e=>({left:e.offsetLeft,top:e.offsetTop,w:e.offsetWidth,h:e.offsetHeight})));
  for(let i=0;i<circles.length;i++){const a=circles[i];assert(a.w>=56&&a.h>=56);for(let j=i+1;j<circles.length;j++){const b=circles[j];assert(Math.hypot(a.left+a.w/2-b.left-b.w/2,a.top+a.h/2-b.top-b.h/2)>=(a.w+b.w)/2,'Circles do not overlap');}}
  await page.locator('#review-cut').fill('1');assert(await page.locator('.field-tile.dim').count());
  await page.getByRole('button',{name:'List',exact:true}).click();await page.getByRole('button',{name:'Field',exact:true}).click();assert.equal(await page.locator('.field-tile.dim').count(),0);
 });
} finally {if(browser)await browser.close();}
if(failures){console.error(`${failures} Opportunity checks failed; screenshots: ${out}`);process.exitCode=1;}
else console.log('All Opportunity checks passed');
