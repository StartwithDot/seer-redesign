// Real viewport captures only; scroll first so visible canvases render.
import {chromium} from 'playwright-core';
import {mkdir,writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {marketRoute} from './helpers.mjs';
const [url='http://127.0.0.1:5173/',w,h='900',prefix='explorer']=process.argv.slice(2);
const out=new URL('./out/shots/',import.meta.url);await mkdir(out,{recursive:true});
const browser=await chromium.launch({executablePath:process.env.CHROME_PATH??'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true});
const manifest=[];
try {
 for(const width of w?[Number(w)]:[1440,1920,390]){
  const page=await browser.newPage({viewport:{width,height:width===390?844:Number(h)}});
  page.setDefaultTimeout(5000);
  await page.addInitScript(()=>localStorage.setItem('explorer.tour.v1','done'));
  const capture=async(name,single=false)=>{
   await page.evaluate(()=>document.fonts.ready);
   const height=page.viewportSize().height,total=await page.evaluate(()=>document.documentElement.scrollHeight);
   for(let y=single?await page.evaluate(()=>scrollY):0,i=0;y<total;y+=Math.floor(height*.9),i++){
    await page.evaluate(y=>scrollTo(0,y),y);await page.waitForTimeout(450);
    const path=fileURLToPath(new URL(`${prefix}-${width}-${name}-${i}.png`,out));await page.screenshot({path,fullPage:false});manifest.push({width,name,path,url:page.url(),scrollY:await page.evaluate(()=>scrollY)});if(single)break;
   }
   await page.evaluate(()=>scrollTo(0,0));
  };
  const go=async route=>{const target=new URL(url);target.searchParams.set('test','1');target.hash=route;await page.goto(target.href);await page.locator('main').waitFor();};
  if(w){await page.goto(url);await capture('route');}
  else {
   for(const [name,route] of [['home','#/'],['conditional',marketRoute('conditional')],['80-outcomes',marketRoute('many')],['unverified',marketRoute('unverified')],['leaderboard','#/leaderboard'],['create','#/create-market'],['collections','#/collections/default']]){await go(route);await capture(name);if(name==='home'){await page.getByRole('button',{name:'Switch to light mode',exact:true}).click();await capture('home-light');await page.getByRole('button',{name:'Switch to dark mode',exact:true}).click();}if(name==='create'){await page.evaluate(()=>window.__explorerTest.connect());await capture('create-connected');}}
   await go('#/');if(width===390)await page.locator('.market-card').first().getByRole('button',{name:'Market details'}).click();else await page.locator('.market-card').first().hover();await page.locator('[data-drawer],dialog[open],[role="dialog"]').first().waitFor();await capture('drawer',true);
   await go('#/');await page.locator('.market-card').getByRole('button',{name:/^Buy /}).first().click();await page.getByRole('dialog',{name:/Buy /}).waitFor();await capture('quickbuy',true);
   for(const menu of ['Policies','App','Account']){await go('#/');if(width===390)await page.getByRole('button',{name:'Markets',exact:true}).click();if(menu==='Account')await page.evaluate(()=>window.__explorerTest.connect());await page.getByRole('button',{name:menu==='Account'?/Account|0x0000…dEaD/:new RegExp(`^${menu}`)}).filter({visible:true}).first().click();await capture(`menu-${menu}`,true);}
  }
  await page.close();
 }
}finally{await browser.close();await writeFile(new URL('manifest.json',out),JSON.stringify(manifest,null,2)+'\n');}
console.log(`${manifest.length} viewport captures; ${fileURLToPath(new URL('manifest.json',out))}`);
