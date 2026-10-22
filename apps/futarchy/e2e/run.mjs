import { chromium } from 'playwright-core';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { createServer } from 'node:net';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
const root = fileURLToPath(new URL('..', import.meta.url));
const results = [], errors = [];
let browser, preview, resetTest;
const run = async (name, fn) => { try { if (typeof resetTest === 'function') await resetTest(name); await fn(); results.push({ Test: name, Result: 'PASS' }); } catch(e) { results.push({ Test: name, Result: 'FAIL', Detail: e.message }); } };
const command = (args) => new Promise((resolve,reject) => { const p=spawn('npm',args,{cwd:root,stdio:'inherit'}); p.on('error',reject); p.on('exit',code=>code===0?resolve():reject(Error(`npm exited ${code}`))); });
try {
 await mkdir(new URL('./out/',import.meta.url),{recursive:true});
 await command(['run','build']);
 const server=createServer(); server.listen(0,'127.0.0.1'); await once(server,'listening'); const port=server.address().port; await new Promise(r=>server.close(r));
 preview=spawn('npm',['run','preview','--','--host','127.0.0.1','--port',String(port),'--strictPort'],{cwd:root,stdio:'pipe'});
 const base=`http://127.0.0.1:${port}`;
 for(let i=0;i<100;i++){try{if((await fetch(base)).ok)break;}catch{} await new Promise(r=>setTimeout(r,100));}
 browser=await chromium.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true});
 const context=await browser.newContext({viewport:{width:1440,height:1000}});
 const page=await context.newPage();
 page.on('pageerror',e=>errors.push(e.message)); page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
 page.on('response',response=>{if(response.status()>=400)errors.push(`${response.status()} ${response.url()}`);});
 const go=async(path='/')=>{await page.goto(base+path);await page.waitForTimeout(650);};
 resetTest = async name => { await page.setViewportSize({width:1440,height:900}); await page.emulateMedia({reducedMotion:'no-preference'}); if (!name.startsWith('05')) await page.evaluate(()=>{sessionStorage.removeItem('futarchy.chart-view');}); };
 const waitVerdict = async label => { try { await page.waitForFunction(expected=>document.querySelector('.verdict-gauge [aria-current="true"]')?.textContent===expected,label,{timeout:8000}); } catch(e) { const cur = await page.evaluate(()=>document.querySelector('.verdict-gauge [aria-current="true"]')?.textContent); throw new Error(`waitVerdict(${label}) timed out; current=${cur}`); } };
 const skip=async()=>{if(await page.getByRole('button',{name:'Close',exact:true}).isVisible())await page.getByRole('button',{name:'Close',exact:true}).click();};
 const shot=async(name)=>{
  const original=await page.evaluate(()=>scrollY);
  const height=page.viewportSize().height;
  const total=await page.evaluate(()=>document.documentElement.scrollHeight);
  for(let y=0,index=0;y<total;y+=Math.floor(height*.9),index++){
   await page.evaluate(top=>window.scrollTo(0,top),y);
   await page.waitForTimeout(1300);
   await page.screenshot({path:fileURLToPath(new URL(`./out/${name}-${index}.png`,import.meta.url)),fullPage:false});
  }
  await page.evaluate(top=>window.scrollTo(0,top),original);
 };
 const assertCanvases=async()=>{
  for(const canvas of await page.locator('.fork-canvas canvas').all()){
   await canvas.scrollIntoViewIfNeeded();await page.waitForTimeout(1000);
   const info=await canvas.evaluate(e=>{const ctx=e.getContext('2d'),pixels=ctx.getImageData(0,0,e.width,e.height).data;let ink=0;for(let i=3;i<pixels.length;i+=4)if(pixels[i])ink++;return {width:e.getBoundingClientRect().width,height:e.getBoundingClientRect().height,ink, topInk:Array.from(ctx.getImageData(0,0,e.width,Math.ceil(4*e.height/e.getBoundingClientRect().height)).data).filter((v,i)=>i%4===3&&v>0).length};});
   assert(info.width>=300,`Canvas width ${info.width}`);assert(info.height>=72);assert(info.ink>100,'Canvas has no rendered chart');assert.equal(info.topInk,0,'Stroke pixels in top 4 CSS px');
  }
 };
 await run('05 Tour lifecycle',async()=>{await go();assert.equal(await page.locator('dialog[open]').count(),0);assert(await page.evaluate(()=>!['hidden','clip'].includes(getComputedStyle(document.body).overflow)));await page.getByRole('button',{name:'Tour',exact:true}).click();await page.getByRole('button',{name:'Next',exact:true}).waitFor();await shot('tour');for(let i=0;i<10;i++){
 await page.waitForTimeout(500);
 const containment=await page.evaluate(()=>{
 const keys=['board','switcher','impact','controls','milestone','chart','chart','gauge','trade','activity'];
 const step=Number(document.querySelector('#tour-progress > span').textContent.split('/')[0])-1;
 const target=document.querySelector(`[data-tour="${keys[step]}"]`)??document.querySelector('[data-tour="board"]');
 const t=target.getBoundingClientRect(),cut=document.querySelector('[data-tour-cutout]');
 const x=Number(cut.getAttribute('x')),y=Number(cut.getAttribute('y')),w=Number(cut.getAttribute('width')),h=Number(cut.getAttribute('height'));
 return {step,contains:x<=t.left+2&&y<=t.top+2&&x+w>=t.right-2&&y+h>=t.bottom-2};
 });assert(containment.contains,`Tour step ${containment.step+1} misses target`);
 await page.getByRole('button',{name:'Next',exact:true}).click();await page.waitForTimeout(180);if(i===4)assert.match(page.url(),/m\/eth-8363/);}await page.reload();assert.equal(await page.locator('dialog[open]').count(),0);await page.getByRole('button',{name:'Tour',exact:true}).click();await skip();await page.reload();assert.equal(await page.locator('dialog[open]').count(),0);});
 await skip();
 await run('02 Responsive overflow',async()=>{for(const width of [360,390,768,1024,1440,1920,2560]){await page.setViewportSize({width,height:1000});for(const route of ['/#/','/#/m/eth-8363']){await go(route);assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`${width} ${route}`);}}});
 await run('02b Mobile landing density',async()=>{await page.setViewportSize({width:390,height:844});await go();const height=await page.evaluate(()=>document.documentElement.scrollHeight);console.log('Mobile landing height:',height);assert(height<4800,`Mobile landing height: ${height}`);const strip=page.locator('.closed-strip');assert(await strip.evaluate(e=>e.scrollWidth>e.clientWidth));assert.equal(await page.getByRole('button',{name:'Search',exact:true}).isVisible(),true);});
 await run('03 Container alignment',async()=>{for(const width of [390,768,1440,1920,2560]){await page.setViewportSize({width,height:1000});for(const route of ['/#/','/#/m/eth-8363']){await go(route);const bad=await page.evaluate(()=>{const p=document.querySelector('main.page'),r=p.getBoundingClientRect(),s=getComputedStyle(p),left=r.left+parseFloat(s.paddingLeft),right=r.right-parseFloat(s.paddingRight);return [...document.querySelectorAll('[data-align]')].flatMap(e=>{const b=e.getBoundingClientRect();if(e.classList.contains('page')){const c=getComputedStyle(e);return Math.abs(b.left+parseFloat(c.paddingLeft)-left)>1||b.right-parseFloat(c.paddingRight)>right+1?[e.className]:[];}return Math.abs(b.left-left)>1||b.right>right+1?[e.className]:[];});});assert.deepEqual(bad,[],`${width} ${route}: ${bad}`);
 if(width>=1440){const size=await page.locator('main.page').evaluate(e=>{const r=e.getBoundingClientRect(),s=getComputedStyle(e);return r.width-parseFloat(s.paddingLeft)-parseFloat(s.paddingRight);});assert(Math.abs(size-(width-48))<=2,`${width}: canvas ${size}`);}
 assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`${width}: overflow`);}}});
 await page.setViewportSize({width:1440,height:1000});
 await run('04 Routing and history',async()=>{await go();await page.locator('.milestone-card').first().click();await page.locator('.detail-breadcrumb').waitFor();await page.getByRole('button',{name:'Back',exact:true}).click();await page.locator('.live-board').waitFor();await page.goForward();await page.locator('.detail-breadcrumb').waitFor();await page.goBack();await page.locator('.live-board').waitFor();await go('/#/m/eth-8363');await page.locator('.detail-breadcrumb a').nth(1).click();await page.locator('.live-board').waitFor();assert.match(page.url(),/org\/ethereum/);await page.locator('#seer-global-header .sg-brand').click();await page.locator('.live-board').waitFor();await go('/#/m/eth-8363');await page.locator('.detail-breadcrumb a').first().click();await page.locator('.live-board').waitFor();});
 await run('06 Search and palette',async()=>{await page.setViewportSize({width:390,height:1000});await go();await page.getByRole('textbox',{name:'Search milestones'}).fill('KIP-91');assert.equal(await page.locator('.milestone-card').count(),1);await page.getByRole('textbox',{name:'Search milestones'}).fill('');await page.locator('h1').click();await page.keyboard.press('/');await page.locator('dialog[open]').waitFor();await shot('palette');await page.keyboard.press('Escape');assert.equal(await page.locator('dialog[open]').count(),0);await page.keyboard.press('Meta+k');await page.getByRole('dialog').getByRole('textbox').fill('EIP-8363');await page.keyboard.press('Enter');await page.locator('.detail-breadcrumb').waitFor();});
 await run('07 Filters and URL',async()=>{await go();await page.locator('.organization-row').filter({hasText:'Gnosis DAO'}).first().click();await page.waitForTimeout(500);assert.match(page.url(),/org\/gnosis/);await go();await page.getByRole('button',{name:'Token',exact:true}).click();await page.getByRole('option').filter({hasText:'PNK'}).click();await page.keyboard.press('Escape');assert.match(page.url(),/token=PNK/);assert.equal(await page.locator('.milestone-card').count(),1);await page.getByRole('group',{name:'Status',exact:true}).getByRole('button',{name:'Resolved',exact:true}).click();assert.match(page.url(),/status=Resolved/);assert.equal(await page.locator('.milestone-card').count(),0);await page.getByRole('button',{name:'Clear',exact:true}).click();assert.equal(await page.locator('.milestone-card').count(),5);});
 await run('08 Milestone adaptation',async()=>{await go('/?n=1');assert.equal(await page.locator('.milestone-card--wide').count(),1);assert.equal(await page.locator('.board-switcher').count(),0);await assertCanvases();await shot('single');await go('/?n=12');assert.equal(await page.locator('.milestone-card').count(),12);assert(await page.locator('.signal-list').evaluate(e=>e.scrollHeight>e.clientHeight||e.scrollWidth>e.clientWidth));assert.equal(new Set(await page.locator('.milestone-card h3').allTextContents()).size,12);await assertCanvases();await shot('twelve');await page.setViewportSize({width:390,height:1000});await page.getByRole('textbox',{name:'Search milestones'}).fill('no-such-milestone');await page.getByRole('heading',{name:'No milestones'}).waitFor();});
 await run('09 Bounded live activity',async()=>{await go('/#/m/eth-8363');const card=page.locator('.activity-section'),list=page.locator('.activity-table');await card.scrollIntoViewIfNeeded();assert((await card.boundingBox()).height<=480);const height=await page.evaluate(()=>document.documentElement.scrollHeight),first=await list.locator('tbody tr').first().innerText();await list.evaluate(e=>e.scrollTop=200);const top=await list.evaluate(e=>e.scrollTop);await page.waitForTimeout(12500);assert(Math.abs(await page.evaluate(()=>document.documentElement.scrollHeight)-height)<=2);assert.notEqual(await list.locator('tbody tr').first().innerText(),first);assert(Math.abs(await list.evaluate(e=>e.scrollTop)-top)<=2,'scrollTop changed');await page.getByRole('button',{name:'Last 30 trades',exact:true}).click();await page.getByRole('option',{name:'Last 90 trades',exact:true}).click();assert.equal(await list.locator('tbody tr').count(),90);});
 await run('10 Verdict replay and needle',async()=>{await go('/#/m/eth-8363');const gauge=page.locator('.verdict-gauge');await gauge.scrollIntoViewIfNeeded();await waitVerdict('Neutral');const initial=await page.locator('.gauge-needle').getAttribute('style');await page.evaluate(()=>document.activeElement&&document.activeElement.blur());await page.keyboard.press('v');await waitVerdict('Include');await page.waitForFunction(init=>document.querySelector('.gauge-needle')?.getAttribute('style')!==init,initial,{timeout:6000}).catch(()=>{throw new Error('needle position never changed after verdict flip');});await page.evaluate(()=>document.activeElement&&document.activeElement.blur());await page.keyboard.press('v');await waitVerdict('Exclude');await page.locator('.chart-card').scrollIntoViewIfNeeded();await page.getByRole('button',{name:'Play',exact:true}).click();await page.getByRole('button',{name:'Play',exact:true}).waitFor({timeout:16000});await waitVerdict('Exclude');await page.waitForFunction(()=>!!document.querySelector('.verdict-gauge .gauge-heading svg'),null,{timeout:8000}).catch(()=>{throw new Error('lock glyph never appeared after replay');});});
 await run('11 Themes and contrast',async()=>{await go();for(const theme of ['light','dark']){await page.locator('.sg-theme').click();await page.waitForTimeout(600);assert.equal(await page.locator('html').getAttribute('data-theme'),theme);const ratios=await page.evaluate(()=>{const rgb=s=>s.match(/[\d.]+/g).slice(0,3).map(Number).map(v=>{v/=255;return v<=.04045?v/12.92:((v+.055)/1.055)**2.4;});const lum=s=>rgb(s).reduce((a,v,i)=>a+v*[.2126,.7152,.0722][i],0);return ['h1','.filter-trigger','.signal-tiles span'].map(sel=>{const e=document.querySelector(sel);if(!e)return 21;let b=e;while(b&&getComputedStyle(b).backgroundColor==='rgba(0, 0, 0, 0)')b=b.parentElement;const a=lum(getComputedStyle(e).color),c=lum(getComputedStyle(b??document.documentElement).backgroundColor);return (Math.max(a,c)+.05)/(Math.min(a,c)+.05);});});assert(ratios.every(r=>r>=4.5),`${theme}: ${ratios}`);}});
 await run('12 Mobile touch targets',async()=>{await page.setViewportSize({width:390,height:844});for(const route of ['/#/','/#/m/eth-8363']){await go(route);const bad=await page.locator('button,a').evaluateAll(es=>es.filter(e=>{if(e.closest('#seer-global-header,.seer-footer'))return false;const r=e.getBoundingClientRect();return r.width&&r.height&&(r.width<40||r.height<40);}).map(e=>`${e.textContent.trim()||e.getAttribute('aria-label')}`));assert.deepEqual(bad,[]);}});
 await run('13 Accessibility and dialogs',async()=>{for(const route of ['/#/','/#/m/eth-8363']){await go(route);const bad=await page.locator('button,a,input,select,[tabindex="0"]').evaluateAll(es=>es.filter(e=>{const r=e.getBoundingClientRect();return r.width&&r.height&&!e.getAttribute('aria-label')&&!e.getAttribute('aria-labelledby')&&!e.textContent.trim()&&!e.labels?.length;}).map(e=>e.outerHTML));assert.deepEqual(bad,[]);}await page.getByRole('button',{name:'Add Liquidity',exact:true}).click();await page.getByRole('dialog').waitFor();await page.keyboard.press('Escape');assert.equal(await page.locator('dialog[open]').count(),0);await go();await page.keyboard.press('Tab');assert(await page.evaluate(()=>{const e=document.activeElement,s=getComputedStyle(e);return e!==document.body&&s.outlineStyle!=='none'&&parseFloat(s.outlineWidth)>=2;}));await page.locator('header').getByRole('button',{name:'Search',exact:false}).click();for(let i=0;i<20;i++){await page.keyboard.press('Tab');assert(await page.evaluate(()=>!!document.activeElement.closest('dialog')));}await page.keyboard.press('Escape');});
 await run('14 Reduced motion stops tickers',async()=>{await page.emulateMedia({reducedMotion:'reduce'});await go('/?n=12');const first=await page.locator('.live-board').innerText(),counts=await page.locator('.countdown-chip').allTextContents();await page.waitForTimeout(8500);assert.equal(await page.locator('.live-board').innerText(),first);assert.deepEqual(await page.locator('.countdown-chip').allTextContents(),counts);await go('/#/m/eth-8363');const rows=await page.locator('.activity-table tbody').innerText();await page.waitForTimeout(6500);assert.equal(await page.locator('.activity-table tbody').innerText(),rows);assert(await page.getByRole('button',{name:'Play',exact:true}).isDisabled());await page.emulateMedia({reducedMotion:'no-preference'});});
 await run('15 Digit reel windows',async()=>{for(const reducedMotion of ['no-preference','reduce']){
  await page.emulateMedia({reducedMotion});await go('/#/m/eth-8363');
  await page.getByRole('spinbutton').fill('129.6');await page.waitForTimeout(400);
  await page.evaluate(() => document.fonts.ready);
  const bad=await page.locator('.rolling-number').evaluateAll(es=>es.flatMap(e=>{
   const issues=[], style=getComputedStyle(e), window=e.querySelector('.rolling-digit');
   if(!window)return issues;
   const height=window.getBoundingClientRect().height;
   if(Math.abs(height-parseFloat(style.lineHeight))>1)issues.push('line height');
   const numeric=e.textContent.trim().replace(/ (USDS|WETH|d|h|m)$/, '');
   if(!/^[+\-]?[\d.,]+ ?%?$/.test(numeric))issues.push(`text ${numeric}`);
   const ctx=document.createElement('canvas').getContext('2d');
   ctx.font=`${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
   for(const digit of '0123456789'){
    const metrics=ctx.measureText(digit);
    if(metrics.actualBoundingBoxAscent+metrics.actualBoundingBoxDescent>height)issues.push(`glyph ${digit} clipped`);
   }
   for(const column of e.querySelectorAll('.rolling-digit')){
    const reel=column.firstElementChild, index=Number(reel.style.transform.match(/-([0-9]+)/)[1]);
    const cell=reel.children[index].getBoundingClientRect(),box=column.getBoundingClientRect();
    if(Math.abs(cell.top-box.top)>1||Math.abs(cell.height-box.height)>1)issues.push('cell geometry');
   }
   return issues;
  }));assert.deepEqual(bad,[],`${reducedMotion}: digit window mismatch`);
 }await page.emulateMedia({reducedMotion:'no-preference'});});
 await run('16 No DOM or canvas label overlaps',async()=>{
  await page.emulateMedia({reducedMotion:'reduce'});
  for(const width of [360,390,768,1024,1440,1920,2560])for(const route of ['/#/','/#/m/eth-8363','/?n=12#/']){
   await page.setViewportSize({width,height:1000});await go(route);await page.evaluate(()=>document.fonts.ready);await page.evaluate(()=>window.scrollTo(0,0));await page.waitForTimeout(150);
   const issues=await page.evaluate(()=>{
    const entries=[];
    const add=(element,rect,name)=>{
     if(element.closest('[data-overlay],.sr-only,[aria-hidden="true"]'))return;
     let box={left:rect.left,right:rect.right,top:rect.top,bottom:rect.bottom};
     for(let e=element;e;e=e.parentElement){
      const style=getComputedStyle(e);if(style.display==='none'||style.visibility==='hidden'||Number(style.opacity)===0)return;
      const r=e.getBoundingClientRect();
      if(/hidden|clip|auto|scroll/.test(style.overflowX)){box.left=Math.max(box.left,r.left);box.right=Math.min(box.right,r.right);}
      if(/hidden|clip|auto|scroll/.test(style.overflowY)){box.top=Math.max(box.top,r.top);box.bottom=Math.min(box.bottom,r.bottom);}
     }
     if(box.right-box.left>1&&box.bottom-box.top>1)entries.push({element,box,name});
    };
    document.querySelectorAll('a,button,input,select,textarea,.rolling-number').forEach(e=>add(e,e.getBoundingClientRect(),e.getAttribute('aria-label')||e.textContent.trim().slice(0,50)));
    const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
    while(walker.nextNode()){
     const node=walker.currentNode,e=node.parentElement;
     if(!node.textContent.trim()||e.closest('script,style,a,button,input,select,textarea,.rolling-number'))continue;
     const range=document.createRange();range.selectNodeContents(node);
     for(const rect of range.getClientRects())add(e,rect,node.textContent.trim().slice(0,50));
    }
    const issues=[];
    for(let i=0;i<entries.length;i++)for(let j=i+1;j<entries.length;j++){
     const a=entries[i],b=entries[j];if(a.element.contains(b.element)||b.element.contains(a.element))continue;
     if(!!a.element.closest('header')!==!!b.element.closest('header'))continue;
     if(Math.min(a.box.right,b.box.right)-Math.max(a.box.left,b.box.left)>1&&Math.min(a.box.bottom,b.box.bottom)-Math.max(a.box.top,b.box.top)>1)issues.push(`${a.name} / ${b.name}`);
    }
    return issues;
   });assert.deepEqual(issues,[],`${width} ${route}: DOM overlaps`);
   for(const canvas of await page.locator('.fork-canvas canvas').all()){
    await canvas.scrollIntoViewIfNeeded();await page.waitForTimeout(100);
    const issues=await canvas.evaluate(canvas=>{
     const labels=canvas.__labels;if(!Array.isArray(labels))return ['Missing label diagnostics'];if(!labels.length && !['mini','hero'].includes(canvas.dataset.labelMode) && canvas.dataset.chartView!=='Field')return ['Missing text label diagnostics'];
     const {width,height}=canvas.getBoundingClientRect(),bad=[];
     for(const a of labels){for(const r of a.threadYRanges ?? [])if(a.y < r.max && a.y+a.h > r.min)bad.push(`Thread intersects label x-range: ${a.text}`);else if(a.y < r.max+10-.1 && a.y+a.h > r.min-10+.1)bad.push(`Thread clearance below 10px: ${a.text}`);if(a.x<12-.1||a.y<12-.1||a.x+a.w>width-12+.1||a.y+a.h>height-12+.1)bad.push(`Outside: ${a.text}`);}
     for(let i=0;i<labels.length;i++)for(let j=i+1;j<labels.length;j++){
      const a=labels[i],b=labels[j];
      if(a.x<b.x+b.w&&b.x<a.x+a.w&&a.y<b.y+b.h&&b.y<a.y+a.h)bad.push(`${a.text} / ${b.text}`);
      if(a.x<b.x+b.w&&b.x<a.x+a.w&&Math.abs(a.y-b.y)<18-.1)bad.push(`Separation: ${a.text} / ${b.text}`);
     }return bad;
    });assert.deepEqual(issues,[],`${width} ${route}: canvas labels`);
   }
  }
  await page.emulateMedia({reducedMotion:'no-preference'});
 });
 await run('20 Signal head momentum, ticks and reduced motion',async()=>{
  await page.setViewportSize({width:1440,height:1000});
  await page.emulateMedia({reducedMotion:'no-preference'});
  for(const preset of ['moving','waiting']){
   await go(`/?pulse=${preset}#/m/eth-8363`);
   await page.getByRole('radio',{name:'Chart',exact:true}).click();
   const canvas=page.locator('.chart-card canvas');await canvas.scrollIntoViewIfNeeded();
   await page.waitForFunction(expected=>document.querySelector('.chart-card canvas')?.__pulse?.mode===expected,preset);
   if(preset==='moving')await page.waitForFunction(()=>document.querySelector('.chart-card canvas').__pulse.particles>0);
   assert((await canvas.evaluate(e=>e.__pulse.particles))<=80);
  }
  await go('/?pulse=waiting#/m/eth-8363');
  await page.getByRole('radio',{name:'Chart',exact:true}).click();
  const canvas=page.locator('.chart-card canvas');await canvas.scrollIntoViewIfNeeded();
  await page.evaluate(()=>window.dispatchEvent(new Event('futarchy:activity')));
  await page.waitForFunction(()=>document.querySelector('.chart-card canvas').__pulse.particles>0);
  await go('/?pulse=moving#/');
  const mini=page.locator('.mini-chart canvas').first();await mini.scrollIntoViewIfNeeded();
  await page.mouse.move(0,0);await page.waitForTimeout(1000);
  assert.equal(await mini.evaluate(e=>e.__pulse.particles),0);
  await mini.hover();await page.waitForFunction(()=>document.querySelector('.mini-chart canvas').__pulse.particles>0);
  await page.emulateMedia({reducedMotion:'reduce'});
  await page.waitForFunction(()=>[...document.querySelectorAll('canvas')].every(c=>!c.__pulse?.particles),null,{timeout:4000});
  for(const route of ['/?pulse=moving#/','/?pulse=moving#/m/eth-8363']){
   await go(route);
   for(const c of await page.locator('.fork-canvas canvas').all()){
    await c.scrollIntoViewIfNeeded();await page.waitForFunction(()=>[...document.querySelectorAll('.fork-canvas canvas')].every(c=>c.__pulse?.particles===0),null,{timeout:4000});
    assert.equal(await c.evaluate(e=>e.__pulse?.particles),0);
   }
  }
  await page.emulateMedia({reducedMotion:'no-preference'});
 });
 await run('21 Field toggle, model, replay and reduced motion',async()=>{
  const sample=()=>page.locator('.chart-card canvas').evaluate(c=>{
   const ctx=c.getContext('2d'),w=c.width,h=c.height,data=ctx.getImageData(0,0,w,h).data;
   let sum=0,weight=0;
   for(let x=Math.floor(w*.45);x<w*.65;x++)for(let y=Math.floor(h*.2);y<h*.8;y++){
    const i=(y*w+x)*4,signal=Math.max(0,data[i+2]-data[i+1]-35);
    sum+=y*signal;weight+=signal;
   }
   return {row:sum/Math.max(1,weight)/h,weight};
  });
  try {
   await page.emulateMedia({reducedMotion:'reduce'});
   for(const width of [360,768,1440]){
    await page.setViewportSize({width,height:1000});await go('/#/m/eth-8363');
    await page.getByRole('radio',{name:'Field',exact:true}).click();
    const canvas=page.locator('.chart-card canvas');await canvas.scrollIntoViewIfNeeded();await page.waitForTimeout(150);
    assert.equal(await canvas.getAttribute('data-chart-view'),'Field');
    const before=await sample();assert(before.weight>0,'Field canvas is blank');
    const still=await canvas.evaluate(c=>c.toDataURL());await page.waitForTimeout(300);
    assert.equal(await canvas.evaluate(c=>c.toDataURL()),still,'Reduced motion animates');
    await page.keyboard.press('v');await page.waitForTimeout(200);const after=await sample();
    assert(Math.abs(after.row-before.row)>.015,'Preset did not separate streams');
    await page.reload();await page.waitForTimeout(650);assert.equal(await canvas.getAttribute('data-chart-view'),'Field');
    await page.getByRole('radio',{name:'Chart',exact:true}).click();assert.equal(await canvas.getAttribute('data-chart-view'),'Chart');
   }
   await page.emulateMedia({reducedMotion:'no-preference'});await go('/#/m/eth-8363');
   await page.getByRole('radio',{name:'Field',exact:true}).click();const canvas=page.locator('.chart-card canvas');await canvas.scrollIntoViewIfNeeded();
   await page.waitForTimeout(150);
   const pixels=()=>canvas.evaluate(c=>{const ctx=c.getContext('2d'),rows=[];for(const fraction of [.35,.45,.5,.55,.65])rows.push(...ctx.getImageData(0,Math.floor(c.height*fraction),c.width,1).data);return rows;});
   const first=await pixels();await page.waitForTimeout(400);assert.notDeepEqual(await pixels(),first,'Field particles did not move');
   const beforeScrub=await sample();
   await page.getByRole('slider',{name:'Remaining Time'}).evaluate(e=>{const setter=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set;setter.call(e,'5');e.dispatchEvent(new Event('input',{bubbles:true}));e.dispatchEvent(new Event('change',{bubbles:true}));});await page.waitForTimeout(650);
   assert.notDeepEqual(await sample(),beforeScrub,'Field did not react to replay');
   await page.getByRole('button',{name:'Play',exact:true}).click();await page.waitForTimeout(300);await page.getByRole('button',{name:'Pause',exact:true}).click();
   const slider=page.getByRole('slider',{name:'Remaining Time'});const now=await slider.inputValue();
   await page.getByRole('radio',{name:'Chart',exact:true}).click();assert.equal(await slider.inputValue(),now,'Toggle reset replay');
   assert.deepEqual(errors,[]);
  } finally {
   await page.evaluate(()=>sessionStorage.removeItem('futarchy.chart-view'));
   await page.emulateMedia({reducedMotion:'no-preference'});
  }
 });
 await run('22 Live signal board geometry',async()=>{
  await page.emulateMedia({reducedMotion:'reduce'});
  for(const width of [390,768,1024,1440,1920,2560]){
   let normalHeight;
   for(const count of [5,12,1]){
    await page.setViewportSize({width,height:1000});await go(`/?n=${count}#/`);await page.evaluate(()=>document.fonts.ready);
    const g=await page.evaluate(()=>{
     const box=sel=>document.querySelector(sel).getBoundingClientRect();
     const list=box('.signal-list-card'),chart=box('.live-board'),rows=[...document.querySelectorAll('.signal-row')].map(e=>e.getBoundingClientRect()),scroll=document.querySelector('.signal-list');
     const blocks=[...document.querySelector('.live-board-hero').children].filter(e=>getComputedStyle(e).display!=='none').map(e=>e.getBoundingClientRect());
     return {header:!!document.querySelector('.hero-header h1'),font:parseFloat(getComputedStyle(document.querySelector('h1')).fontSize),list:list.height,chart:chart.height,plot:box('.board-chart').height,tail:list.bottom-rows.at(-1).bottom,scroll:scroll.scrollHeight>scroll.clientHeight,hero:box('.live-board-hero').height,gaps:blocks.slice(1).map((r,i)=>r.top-blocks[i].bottom),strip:getComputedStyle(document.querySelector('.glyph-strip')).display!=='none',removed:document.querySelectorAll('.board-live-stats,.board-intro').length};
    });
    assert(g.header&&g.font<=40);assert.equal(g.removed,0);assert.equal(g.strip,width>=700);assert(g.plot>=300);
    if(count===5)normalHeight=g.hero;
    if(width>=1000&&count>1){assert(Math.abs(g.list-g.chart)<=2,`${width}: unequal cards`);if(count===5)assert(g.tail<=24,'Gap below signals');}
    if(count===12){assert(Math.abs(g.hero-normalHeight)<=2,'More signals grew hero');if(width>=1000)assert(g.scroll,'Signals must scroll internally');}
    if(count===1){assert(g.list<=128,'Single list did not collapse');assert(g.gaps.every(gap=>gap<=48),'Single hero void');}
    assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
   }
  }
 });
 await run('23 Labels have solid halo strokes',async()=>{
  for(const theme of ['light','dark'])for(const route of ['/#/','/#/m/eth-8363']){
   await page.setViewportSize({width:1440,height:1000});await go(route);await page.evaluate(value=>document.documentElement.dataset.theme=value,theme);
   for(const canvas of await page.locator('.fork-canvas canvas').all()){
    await canvas.scrollIntoViewIfNeeded();await page.waitForTimeout(250);
    const labels=await canvas.evaluate(c=>c.__labels);assert(labels?.length,'Missing label diagnostics');
    for(const label of labels)assert.deepEqual(label.lineDash,[],`Dashed halo: ${label.text}`);
   }
  }
 });
 await run('24 Signal selection and rotation',async()=>{
  await page.setViewportSize({width:1440,height:1000});await go();
  const selected=()=>page.locator('.signal-row:has(.signal-select[aria-current="true"])');
  const list=page.getByRole('list',{name:'Active milestones',exact:true});assert.equal(await list.getByRole('listitem').count(),5);assert.equal(await list.getByRole('button',{name:'Open',exact:true}).count(),5);
  const clicked=list.getByRole('listitem').nth(1);assert.equal(await clicked.getByRole('button').count(),2);await clicked.locator('.signal-select').click();assert.equal(new URL(page.url()).pathname + (new URL(page.url()).hash || '#/'), '/#/','Single click must stay on landing');assert.equal(await clicked.locator('.signal-select').getAttribute('aria-current'),'true');assert((await page.locator('.board-question').innerText()).includes((await clicked.locator('.signal-row-title').innerText()).split(' · ')[0]));
  await page.mouse.move(0,0);await page.evaluate(()=>document.activeElement?.blur());const held=await selected().getAttribute('data-id');await page.waitForTimeout(9000);assert.equal(await selected().getAttribute('data-id'),held,'Selection must hold for 12 seconds');
  const first=await selected().getAttribute('data-id');await selected().locator('.signal-select').focus();await page.keyboard.press('ArrowDown');
  const next=await selected().getAttribute('data-id');assert.notEqual(next,first);assert(await selected().locator('.signal-select').evaluate(e=>e===document.activeElement));assert.equal(await list.locator('.signal-select[tabindex="0"]').count(),1);
  const proposal=(await selected().locator('.signal-row-title').innerText()).split(' · ')[0];assert((await page.locator('.board-question').innerText()).includes(proposal));
  const color=await selected().evaluate(e=>({bar:getComputedStyle(e.querySelector('.selected-signal-bar')).backgroundColor,impact:getComputedStyle(e.querySelector('.signal-impact')).color}));assert.equal(color.bar,color.impact);
  await page.keyboard.press('Enter');await page.locator('.detail-breadcrumb').waitFor();assert(page.url().endsWith(`/m/${next}`));
  await go();await page.locator('.signal-select').nth(1).dblclick();await page.locator('.detail-breadcrumb').waitFor();
  await go();await page.locator('.board-question .btn-bubbles').click();await page.locator('.detail-breadcrumb').waitFor();
  await go();await page.locator('.signal-row').first().getByRole('button',{name:'Open',exact:true}).click();await page.locator('.detail-breadcrumb').waitFor();
  await go();await page.mouse.move(0,0);const initial=await selected().getAttribute('data-id');await page.waitForTimeout(8500);assert.notEqual(await selected().getAttribute('data-id'),initial);
  await selected().hover();const paused=await selected().getAttribute('data-id');await page.waitForTimeout(8500);assert.equal(await selected().getAttribute('data-id'),paused);
  await page.mouse.move(0,0);await selected().locator('.signal-select').focus();const focused=await selected().getAttribute('data-id');await page.waitForTimeout(8500);assert.equal(await selected().getAttribute('data-id'),focused,'Focus must pause rotation');
  await page.emulateMedia({reducedMotion:'reduce'});await go();await page.mouse.move(0,0);const still=await selected().getAttribute('data-id');await page.waitForTimeout(8500);assert.equal(await selected().getAttribute('data-id'),still);assert.equal(await page.locator('.signal-progress').count(),0);
  await page.emulateMedia({reducedMotion:'no-preference'});
 });

 await run('26 Fixed pills, organization columns, tooltips and bubbles',async()=>{
  await page.setViewportSize({width:1440,height:900});
  for(const width of [360,1024,1440,1920]){
   await page.setViewportSize({width,height:1000});await go();
   const widths=await page.locator('.lean-chip').evaluateAll(es=>es.filter(e=>e.getBoundingClientRect().width).map(e=>e.getBoundingClientRect().width));assert(widths.length>1);assert(widths.every(w=>Math.abs(w-76)<.1),'Verdict widths differ');
   const tags=await page.locator('.organization-market .active-market').evaluateAll(es=>es.map(e=>e.getBoundingClientRect().left));assert(tags.length>1);assert(tags.every(x=>Math.abs(x-tags[0])<1),'Market tag columns differ');
   assert.equal(await page.locator('.glyph-strip').isVisible(),width>=700,'Glyph strip responsive visibility');
   for(const step of width>=700 ? await page.locator('.glyph-strip > div').all() : []){
    await step.hover();await page.getByRole('tooltip').waitFor();assert((await page.getByRole('tooltip').innerText()).length>10);await page.mouse.move(0,0);await step.focus();await page.getByRole('tooltip').waitFor();await step.evaluate(e=>e.blur());
   }
   if(width===360||width===1440){
    for(const selector of ['.hero-actions a','.board-question a']){
     const button=page.locator(selector);assert((await button.getAttribute('class')).includes('btn-bubbles'));await button.hover();assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'Bubble hover overflow');
    }
    await go('/#/m/eth-8363');
    for(const button of await page.locator('.detail-actions .button,.trade-panel .button').all()){
     assert((await button.getAttribute('class')).includes('btn-bubbles'));await button.hover();assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'Detail bubble overflow');
    }
   }
  }
 });
 await run('25 Impact uses one live source',async()=>{
  await page.emulateMedia({reducedMotion:'reduce'});await go();
  const rows=page.locator('.signal-row');
  for(let i=0;i<await rows.count();i++){
   const row=rows.nth(i);await row.locator('.signal-select').focus();
   const id=await row.getAttribute('data-id'), impact=await row.locator('.signal-impact').innerText();
   assert.equal(await page.locator('.live-board .signal-tiles > div').last().locator('.rolling-number').getAttribute('data-value'),impact,`${id}: signal row and hero Impact differ`);
   assert.equal(await page.locator(`.milestone-card[href="#/m/${id}"] .signal-tiles > div`).last().locator('.rolling-number').getAttribute('data-value'),impact,`${id}: signal row and card Impact differ`);
  }
  const impact=await rows.first().locator('.signal-impact').innerText();
  await rows.first().locator('.signal-select').focus();await page.keyboard.press('Enter');await page.locator('.detail-heading').waitFor();
  assert.equal(await page.locator('.detail-heading .rolling-number').first().getAttribute('data-value'),impact,'Detail Impact differs from signal row');
  assert.equal(await page.locator('.metric-strip > div').last().locator('.rolling-number').getAttribute('data-value'),impact,'Chart stat Impact differs from signal row');
  await page.emulateMedia({reducedMotion:'no-preference'});
 });
 await run('17 HoverMenu interactions',async()=>{
  const assertMenuGap = async name => {
   const panel=page.getByRole('listbox',{name,exact:true}), trigger=page.getByRole('button',{name,exact:true});
   const box=await panel.boundingBox(),button=await trigger.boundingBox(),viewport=page.viewportSize();
   assert(box&&button,`${name}: missing panel or trigger`);
   assert(box.x>=0&&box.x+box.width<=viewport.width&&box.y>=0&&box.y+box.height<=viewport.height,`${name}: outside viewport`);
   assert(box.y>=button.y+button.height+7||box.y+box.height<=button.y-7,`${name} at ${viewport.width}px: panel ${JSON.stringify(box)}, trigger ${JSON.stringify(button)}`);
  };
  for(const width of [1440,390]){
   await page.setViewportSize({width,height:1000});await go();
   const trigger=page.getByRole('button',{name:'Organizations',exact:true});
   await trigger.scrollIntoViewIfNeeded();await trigger.hover();
   const panel=page.getByRole('listbox',{name:'Organizations',exact:true});await panel.waitFor({timeout:250});
   const order=await panel.getByRole('option').allTextContents();
   await panel.getByRole('option',{name:/^Kleros DAO/}).hover();
   assert.deepEqual(await panel.getByRole('option').allTextContents(),order,'Hover reordered organizations');
   const tokenTrigger=page.getByRole('button',{name:'Token',exact:true});await tokenTrigger.hover();
   await page.getByRole('listbox',{name:'Token',exact:true}).waitFor();await assertMenuGap('Token');
   assert.equal(await panel.count(),0,'Other menu remained open');
   await trigger.hover();await panel.waitFor();
   assert.equal(await page.getByRole('listbox',{name:'Token',exact:true}).count(),0,'Token menu remained open after Organizations opened');
   const box=await panel.boundingBox(),button=await trigger.boundingBox();
   assert(box.x>=0&&box.x+box.width<=width&&box.y>=0&&box.y+box.height<=1000);
   assert(box.y>=button.y+button.height+7||box.y+box.height<=button.y-7,`Organizations at ${width}px: panel ${JSON.stringify(box)}, trigger ${JSON.stringify(button)}`);
   assert.equal(await panel.getByRole('option').count(),await panel.locator('[role="option"] .avatar').count());
   await page.mouse.move(width-2,2);await panel.waitFor({state:'hidden',timeout:450});
   await trigger.focus();await page.keyboard.press('ArrowDown');await page.keyboard.press('Home');
   await panel.getByRole('option',{name:/^Gnosis DAO/}).click();
   assert.match(page.url(),/org=gnosis-dao/);await page.getByRole('button',{name:'Remove Gnosis DAO',exact:true}).waitFor();
   await page.keyboard.press('Escape');assert.equal(await panel.count(),0,'Organizations menu remained open after Escape');
   await trigger.focus();await page.keyboard.press('Space');await panel.getByRole('option',{name:/^Kleros DAO/}).click();assert.match(page.url(),/kleros-dao/);
   await page.keyboard.press('Escape');
   await page.getByRole('button',{name:'Token',exact:true}).click();await page.getByRole('listbox',{name:'Token',exact:true}).waitFor();await page.locator('h1').click();assert.equal(await page.locator('.hover-panel[role="listbox"]').count(),0,'Dismissed HoverMenu panel remained open');
  }
  await go();await page.getByRole('button',{name:'Closing soon',exact:true}).click();await page.getByRole('listbox',{name:'Closing soon',exact:true}).waitFor();await assertMenuGap('Closing soon');await page.keyboard.press('Escape');
  await go('/#/m/eth-8363');await page.getByRole('button',{name:'Last 30 trades',exact:true}).click();await page.getByRole('listbox',{name:'Last 30 trades',exact:true}).waitFor();await assertMenuGap('Last 30 trades');await page.getByRole('option',{name:'Last 60 trades',exact:true}).click();assert.equal(await page.locator('.hover-panel[role="listbox"]').count(),0,'Dismissed HoverMenu panel remained open');assert.equal(await page.locator('.activity-table tbody tr').count(),60);
 });
 await run('18 Tour CTA lifecycle',async()=>{
  await page.evaluate(()=>localStorage.removeItem('futarchy.tour.v1'));await go();
  assert.equal(await page.locator('.hero-actions').getByRole('link',{name:'Create market',exact:true}).count(),1);
  await page.getByRole('button',{name:'Tour',exact:true}).click();await skip();
  assert.equal(await page.locator('.hero-actions').getByRole('link',{name:'Create market',exact:true}).count(),1);
  await page.reload();assert.equal(await page.locator('dialog[open]').count(),0);
  await page.getByRole('button',{name:'Tour',exact:true}).click();await page.keyboard.press('Escape');assert.equal(await page.locator('dialog[open]').count(),0);
  await page.locator('h1').click();await page.keyboard.press('/');await page.getByRole('dialog').getByRole('textbox').fill('Take the tour');await page.keyboard.press('Enter');await page.locator('.guided-tour[open]').waitFor();await skip();
 });
 await run('19 Avatar consistency',async()=>{
  await go();const identities=await page.locator('.organization-row').evaluateAll(rows=>Object.fromEntries(rows.map(row=>[row.dataset.org,row.dataset.avatar])));
  assert.equal(new Set(Object.values(identities)).size,5);
  for(const card of await page.locator('.milestone-card,.closed-card').all()){
   const org=await card.getAttribute('data-org'),avatar=await card.getAttribute('data-avatar');assert.equal(avatar,identities[org]);assert.equal(await card.locator('.market-identity .avatar').first().getAttribute('data-avatar'),avatar);
  }
  await go('/#/m/eth-8363');assert.equal(await page.locator('.detail-heading').getAttribute('data-avatar'),identities.ethereum);assert.equal(await page.locator('.detail-breadcrumb .avatar').first().getAttribute('data-avatar'),identities.ethereum);
 });
 await run('27 Fixed filter geometry',async()=>{
  for(const width of [1440,1920]){
   await page.setViewportSize({width,height:1000});await go();
   const geometry=await page.evaluate(()=>{
    const rect=e=>{const r=e.getBoundingClientRect();return {w:r.width,h:r.height};};
    return {controls:[...document.querySelectorAll('.filter-search,.controls-menus .filter-trigger,.landing-controls .segmented')].map(rect),menus:[...document.querySelectorAll('.controls-menus .filter-trigger')].map(rect),segments:[...document.querySelectorAll('.landing-controls .segmented button')].map(rect)};
   });
   assert.equal(geometry.menus.length,3);
   for(const c of geometry.controls)assert(Math.abs(c.h-40)<=1,`${width}: control height ${c.h}`);
   assert(Math.max(...geometry.menus.map(c=>c.w))-Math.min(...geometry.menus.map(c=>c.w))<=1);
   assert(Math.max(...geometry.segments.map(c=>c.w))-Math.min(...geometry.segments.map(c=>c.w))<=1);
   assert(geometry.segments.every(c=>c.w>=80&&Math.abs(c.h-32)<=1));
  }
 });
 await run('30 Rapid organization and route transitions',async()=>{
  await go();
  for(const name of [/^Gnosis DAO/, /^Kleros DAO/]){
   const trigger=page.getByRole('button',{name:'Organizations',exact:true});
   await trigger.click({timeout:1000});
   await page.getByRole('listbox',{name:'Organizations',exact:true}).getByRole('option',{name}).click({timeout:1000});
   await page.waitForFunction(()=>!document.documentElement.dataset.transition,null,{timeout:1000});
   await page.keyboard.press('Escape');
  }
  await page.evaluate(()=>{location.hash='/m/eth-8363';});
  await page.locator('.detail-breadcrumb a').first().waitFor({timeout:1000});
  await page.waitForFunction(()=>!document.documentElement.dataset.transition,null,{timeout:1000});
  await page.locator('.detail-breadcrumb a').first().click({timeout:1000});
  await page.locator('.live-board').waitFor({timeout:1000});
  await page.waitForFunction(()=>!document.documentElement.dataset.transition,null,{timeout:1000});
 });
 await run('31 Tile values fit without collisions',async()=>{
  await page.emulateMedia({reducedMotion:'reduce'});
  for(const width of [1440,1920,2560])for(const route of ['/#/','/?n=12#/','/#/m/eth-8363']){
   await page.setViewportSize({width,height:1000});await go(route);await page.evaluate(()=>document.fonts.ready);
   const issues=await page.evaluate(()=>{
    const values=[...document.querySelectorAll('.signal-tiles .rolling-number,.metric-strip .rolling-number,.closed-impact-value')];
    const issues=[];
    for(const value of values){
     if(value.scrollWidth>value.clientWidth+1)issues.push(`Overflow: ${value.getAttribute('data-value')||value.textContent}`);
     const content=value.querySelector('.rolling-characters')||value;
     const box=content.getBoundingClientRect(),tile=value.closest('.signal-tiles > div,.metric-strip > div,.closed-impact').getBoundingClientRect();
     if(box.left<tile.left-1||box.right>tile.right+1)issues.push('Value outside tile');
    }
    const boxes=values.map(value=>value.getBoundingClientRect());
    for(let i=0;i<boxes.length;i++)for(let j=i+1;j<boxes.length;j++){
     const a=boxes[i],b=boxes[j];
     if(Math.min(a.right,b.right)-Math.max(a.left,b.left)>1&&Math.min(a.bottom,b.bottom)-Math.max(a.top,b.top)>1)issues.push('Tile values intersect');
    }
    return issues;
   });assert.deepEqual(issues,[],`${width}px ${route}`);
  }
 });
 await run('28 Organization column distribution',async()=>{
  for(const width of [1440,1920,2560]){
   await page.setViewportSize({width,height:1000});await go();
   const rows=await page.locator('.organization-row').evaluateAll(rows=>rows.map(row=>{
    const cells=[...row.children],table=row.getBoundingClientRect();
    const boxes=cells.map(cell=>cell.getBoundingClientRect());
    const contents=cells.map(cell=>{const range=document.createRange();range.selectNodeContents(cell);const r=range.getBoundingClientRect();return r.width ? r : cell.getBoundingClientRect();});
    return {width:table.width,height:table.height,widths:boxes.map(b=>b.width),gaps:contents.slice(1).map((b,i)=>Math.max(0,b.left-contents[i].right)),market:boxes[1].left,header:[...document.querySelector('.organization-head').children].map(c=>c.getBoundingClientRect().left),lefts:boxes.map(b=>b.left)};
   }));
   for(const row of rows){assert.equal(row.height,64);assert(row.widths.every(w=>w<=row.width*.4));assert(row.gaps.every(g=>g>=24&&g<=400),`${width}px: content gaps ${row.gaps}`);row.lefts.forEach((x,i)=>assert(Math.abs(x-row.header[i])<=1,`${width}px ${["NAME","MARKET","ACTIVE","PROPOSALS","CHAIN","LIQUIDITY"][i]}: body ${x}, header ${row.header[i]}`));assert.equal(row.market,rows[0].market);}
  }
  await page.setViewportSize({width:390,height:844});await go();assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
 });
 await run('29 Organization navigation and scroll',async()=>{
  for(const reducedMotion of ['no-preference','reduce']){
   await page.emulateMedia({reducedMotion});await go();
   const row=page.locator('.organization-row[data-org="ethereum"]');await row.click();
   await page.waitForURL(/#\/org\/ethereum$/);
   await page.waitForFunction(()=>{const r=document.querySelector('#milestones h2').getBoundingClientRect();return r.top>=64&&r.top<200;});
   assert.equal(await page.locator('.milestone-card:not([data-org="ethereum"])').count(),0);
   assert(await page.locator('.milestone-card').count()>0);
   assert.equal(await row.getAttribute('aria-current'),'true');
   assert.equal(await page.locator('.signal-row:not([data-org="ethereum"])').count(),0);
   await page.locator('.landing-controls').getByRole('button',{name:'Clear',exact:true}).click();
   await page.waitForURL(/#\/$/);await page.waitForFunction(()=>scrollY<2);
  }
 });
 await run('01 Every route error free' ,async()=>{await go();const links=await page.locator('a[href^="#/m/"],a[href^="#/org/"]').evaluateAll(es=>[...new Set(es.map(e=>e.getAttribute('href')))]);for(const hash of [...links,'#/unknown'])await go('/'+hash);assert.deepEqual(errors,[]);});
 for(const width of [1440,390]){await page.setViewportSize({width,height:1000});await go();await assertCanvases();await shot(`landing-${width}`);await go('/#/m/eth-8363');await assertCanvases();await shot(`detail-${width}`);}
} catch(e){results.push({Test:'Harness',Result:'FAIL',Detail:e.stack});}
finally {await browser?.close();preview?.kill('SIGTERM');console.table(results);if(results.some(r=>r.Result==='FAIL'))process.exitCode=1;}
