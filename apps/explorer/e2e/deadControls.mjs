import { assert, routes, poll } from './helpers.mjs';
const selector='button,a[href],input,select,textarea,[role="tab"],[role="switch"],[role="menuitem"],[role="radio"],[role="option"],[role="slider"]';
async function snapshot(page) {
 return page.evaluate(()=>{
  const hash=s=>{let n=2166136261;for(let i=0;i<s.length;i++)n=Math.imul(n^s.charCodeAt(i),16777619);return n>>>0;};
  return {url:location.href,dom:hash(document.querySelector('main')?.innerHTML??''),overlays:[...document.querySelectorAll('dialog[open],[role="dialog"],[role="menu"],[role="tooltip"],[data-overlay]')].map(e=>hash(e.outerHTML)),state:[...document.querySelectorAll('[aria-expanded],[aria-pressed],[aria-selected],[aria-checked]')].map(e=>hash(e.outerHTML)),values:[...document.querySelectorAll('input,select,textarea')].map(e=>[e.name,e.value,e.checked]),focus:document.activeElement?.outerHTML};
 });
}
async function disabledReason(control) {
 return control.evaluate(e=>e.matches(':disabled')&&(e.getAttribute('aria-describedby')?.split(/\s+/)??[]).some(id=>!!document.getElementById(id)?.textContent.trim()));
}
async function identify(page,key) {
 return page.locator(selector).evaluateAll((elements,key)=>{
  document.querySelectorAll('[data-e2e-control]').forEach(e=>e.removeAttribute('data-e2e-control'));
  const occurrences=new Map();
  for(const e of elements){const r=e.getBoundingClientRect();if(!r.width||!r.height||getComputedStyle(e).visibility==='hidden')continue;
   const d={tag:e.tagName,role:e.getAttribute('role'),label:e.getAttribute('aria-label')??e.getAttribute('placeholder')??e.textContent.trim(),href:e.getAttribute('href'),name:e.getAttribute('name'),value:e.getAttribute('value')};
   const base=JSON.stringify(d),occurrence=occurrences.get(base)??0;occurrences.set(base,occurrence+1);
   if(JSON.stringify({...d,occurrence})===key){e.setAttribute('data-e2e-control','current');return true;}
  }return false;
 },key);
}
async function operate(page,control){
 const tag=await control.evaluate(e=>e.tagName.toLowerCase()),type=await control.getAttribute('type');
 if(tag==='select'){
  const current=await control.inputValue(),values=await control.locator('option:not(:disabled)').evaluateAll(es=>es.map(e=>e.value));
  assert(values.some(v=>v!==current),'Select has no alternative');await control.selectOption(values.find(v=>v!==current));
 }else if(tag==='textarea'||tag==='input'&&!['radio','checkbox','button','submit','range'].includes(type)){const current=await control.inputValue();await control.fill(type==='number'?(current==='1'?'2':'1'):(current==='Marine'?'Le Pen':'Marine'));}
 else if(type==='range'||await control.getAttribute('role')==='slider'){await control.focus();await page.keyboard.press('ArrowRight');}
 else await control.click();
}
function external(href){
 const u=new URL(href);assert.equal(u.protocol,'https:');
 // §9.3 templates, not just a loose domain allowlist.
 const patterns=[/^https:\/\/(?:futarchy|deep|opportunity)\.seer\.pm\/?$/,/^https:\/\/foresight\.kleros\.io\/?$/,/^https:\/\/docs\.seer\.pm\/app\/leaderboard\/?$/,/^https:\/\/app\.seer\.pm\//,/^https:\/\/kleros\.io\/?$/,/^https:\/\/(?:gnosisscan\.io|(?:optimistic\.)?etherscan\.io|basescan\.org)\/(?:address|token|tx)\/0x[\da-fA-F]+$/,/^https:\/\/curate\.kleros\.io\/tcr\/100\/0x[\da-fA-F]{40}(?:\/0x[\da-fA-F]{64})?$/,/^https:\/\/reality\.eth\.limo\/app\/#!\/network\/\d+\/question\/0x[\da-fA-F]+-0x[\da-fA-F]+$/,/^https:\/\/v3\.swapr\.eth\.limo\/#\/add\/0x[\da-fA-F]{40}\/0x[\da-fA-F]{40}\/enter-amounts$/];
 assert(patterns.some(p=>p.test(href)),`Unobserved external href ${href}`);
}
export async function enumerate(t,route,connected=false){
 const {page}=t,seen=new Set(),queue=[],failures=[];
 await page.emulateMedia({reducedMotion:'reduce'});
 const restore=async path=>{
  await t.go(route);if(connected)await page.evaluate(()=>window.__explorerTest.connect());
  for(const key of path){assert(await identify(page,key),`Cannot restore owner ${key}`);await operate(page,page.locator('[data-e2e-control="current"]'));}
 };
 const collect=async path=>{
  const descriptors=await page.locator(selector).evaluateAll(es=>es.filter(e=>{const r=e.getBoundingClientRect();return r.width&&r.height&&getComputedStyle(e).visibility!=='hidden';}).map(e=>({tag:e.tagName,role:e.getAttribute('role'),label:e.getAttribute('aria-label')??e.getAttribute('placeholder')??e.textContent.trim(),href:e.getAttribute('href'),name:e.getAttribute('name'),value:e.getAttribute('value')})));
  const occurrences=new Map();
  for(const descriptor of descriptors){const base=JSON.stringify(descriptor),occurrence=occurrences.get(base)??0;occurrences.set(base,occurrence+1);const signature=JSON.stringify({...descriptor,occurrence});if(!seen.has(signature)){seen.add(signature);queue.push({signature,path});}}
 };
 await restore([]);await collect([]);assert(queue.length,'No controls enumerated');
 for(let i=0;i<queue.length;i++){
  const {signature,path}=queue[i];let popup=false;const download=()=>popup=true,onPopup=p=>{popup=true;void p.close();};
  try{
   await restore(path);assert(await identify(page,signature),`Unreachable control ${signature}`);const control=page.locator('[data-e2e-control="current"]');
   if(await control.isDisabled()||await control.getAttribute('aria-disabled')==='true'){assert(await disabledReason(control),`Native disabled + aria-describedby text required: ${signature}`);continue;}
   const href=await control.getAttribute('href');if(href&&/^https?:/.test(href)){external(href);assert.equal(await control.getAttribute('target'),'_blank');assert.match(await control.getAttribute('rel')??'',/noopener/);continue;}
   await page.evaluate(()=>document.activeElement?.blur());const before=JSON.stringify(await snapshot(page));page.on('download',download);page.on('popup',onPopup);
   await operate(page,control);await poll(async()=>popup||JSON.stringify(await snapshot(page))!==before,Boolean,`Silent control ${signature}`);
   await collect([...path,signature]);
  }catch(e){failures.push(`${signature}: ${e.message}`);}finally{page.off('download',download);page.off('popup',onPopup);}
 }
 console.log(`Enumerated ${queue.length} controls: ${route} @${t.width}`);assert.deepEqual(failures,[]);
}
export function register(test){for(const route of routes)for(const connected of route==='#/create-market'?[false,true]:[false])test('dead',`dead-controls-${route.replace(/[^a-z0-9]+/gi,'-')}${connected?'-connected':''}`,t=>enumerate(t,route,connected));}
