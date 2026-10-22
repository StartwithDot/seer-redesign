import { chromium } from 'playwright-core';
import { spawn } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import './validate.mjs';
import { allowedConsole, assert, poll } from './helpers.mjs';
const root=fileURLToPath(new URL('../',import.meta.url));
const requested=process.argv.find(a=>a.startsWith('--suite='))?.slice(8)?.split(',');
const suites=['quality','parity','dead','nav','flows','card','hero','rail','chart','data'];
if(requested) for(const s of requested) assert(suites.includes(s),`Unknown suite: ${s}`);
const tests=[], results=[];
export const register=(suite,name,fn,options={})=>tests.push({suite,name,fn,...options});
for(const file of ['quality','parity','deadControls','navigation','flows','card','chart','data']) {
 const module=await import(`./${file}.mjs`); module.register(register);
}
assert.equal(new Set(tests.map(t=>`${t.suite}:${t.name}`)).size,tests.length,'Duplicate test names');
let browser, preview;
const command=(args)=>new Promise((resolve,reject)=>{const p=spawn('npm',args,{cwd:root,stdio:'inherit'});p.on('error',reject);p.on('exit',code=>code===0?resolve():reject(Error(`npm exited ${code}`)));});
try {
 await mkdir(new URL('./out/',import.meta.url),{recursive:true});
 await command(['run','build']);
 // Vite chooses a free port; wait for its ready line, not a second port-binding probe.
 preview=spawn('npm',['run','preview','--','--host','127.0.0.1','--port','0'],{cwd:root,stdio:['ignore','pipe','pipe'],env:{...process.env,NO_COLOR:'1'}});
 let output=''; preview.stdout.on('data',b=>{output+=b});preview.stderr.on('data',b=>{output+=b});
 const base=await poll(async()=>output.match(/http:\/\/127\.0\.0\.1:\d+/)?.[0],Boolean,'Preview did not start',15000);
 browser=await chromium.launch({executablePath:process.env.CHROME_PATH??'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true});
 for(const test of tests.filter(t=>!requested||requested.includes(t.suite))) {
  for(const width of test.widths??[1440,390]) {
   const name=`${test.suite}-${test.name}-${width}`, errors=[];
   const context=await browser.newContext({viewport:{width,height:width<700?844:900},reducedMotion:'no-preference',hasTouch:!!test.touch,isMobile:!!test.touch});
   await context.addInitScript(()=>{if(!sessionStorage.getItem('explorer.e2e.initialized')){localStorage.setItem('explorer.tour.v1','done');sessionStorage.setItem('explorer.e2e.initialized','1');}});
   await context.addInitScript(()=>{
    // Record the actual canvas draw calls; hidden DOM copy cannot prove the axis.
    const fill=CanvasRenderingContext2D.prototype.fillText,clear=CanvasRenderingContext2D.prototype.clearRect;
    CanvasRenderingContext2D.prototype.clearRect=function(...args){this.canvas.__e2eText=[];return clear.apply(this,args);};
    CanvasRenderingContext2D.prototype.fillText=function(text,x,y,...args){
     const m=this.measureText(String(text)),w=args[0]===undefined?m.width:Math.min(m.width,args[0]);
     const left=this.textAlign==='center'?x-w/2:this.textAlign==='right'||this.textAlign==='end'?x-w:x;
     (this.canvas.__e2eText??=[]).push({text:String(text),x:left,y:y-m.actualBoundingBoxAscent,w,h:m.actualBoundingBoxAscent+m.actualBoundingBoxDescent});
     return fill.call(this,text,x,y,...args);
    };
   });
   const page=await context.newPage();page.setDefaultTimeout(3000);page.setDefaultNavigationTimeout(15000);
   page.on('pageerror',e=>errors.push({message:e.message}));
   page.on('console',m=>{if(m.type()==='error')errors.push({message:m.text(),url:m.location().url,status:/\b404\b/.test(m.text())?404:undefined});});
   page.on('response',r=>{if(r.status()>=400&&!allowedConsole(r.url(),r.status()))errors.push({message:`${r.status()} ${r.url()}`,url:r.url(),status:r.status()});});
   // Console messages sometimes omit the response URL: only suppress the exact G-16 URL + 404.
   const unexpected=()=>errors.filter(e=>!allowedConsole(e.url??'',e.status));
   const go=async(hash='#/',search={})=>{const url=new URL(base);url.searchParams.set('test','1');for(const [key,value] of Object.entries(search))url.searchParams.set(key,value);url.hash=hash.replace(/^#/,'');await page.goto(url.href);await page.evaluate(()=>document.fonts.ready);await page.locator('main').waitFor();};
   try {
    await go();
    await test.fn({page,context,width,base,go,errors:unexpected});
    assert.deepEqual(unexpected(),[],'Unexpected console/page/resource errors');
    results.push({name,suite:test.suite,result:'PASS'});console.log(`PASS ${name}`);
   } catch(error) {
    results.push({name,suite:test.suite,result:'FAIL',error:error.stack??String(error)});console.error(`FAIL ${name}\n${error.stack??error}`);
    await page.screenshot({path:fileURLToPath(new URL(`./out/fail-${name.replace(/[^a-z0-9-]/gi,'_')}.png`,import.meta.url)),fullPage:false}).catch(()=>{});
   } finally { await context.close(); }
  }
 }
 await writeFile(new URL('./out/results.json',import.meta.url),JSON.stringify(results,null,2)+'\n');
 const failed=results.filter(r=>r.result==='FAIL').length;
 console.log(`${results.length-failed} passed; ${failed} failed; ${results.length} checks`);process.exitCode=failed?1:0;
} finally { await browser?.close(); preview?.kill('SIGTERM'); }
