import {readFile,writeFile} from 'node:fs/promises';
import {marketRoute} from './helpers.mjs';
const spec=await readFile(new URL('../../../products/explorer/design.md',import.meta.url),'utf8');
const section=spec.split('### 9.10 PARITY table')[1].split('### 9.11')[0];
export function generate(){
 return section.split('\n').flatMap(line=>{
  const match=line.match(/^\| ((?:D-L|[A-Z]+)-\d+)\s*(‡)? \| (.*?) \| (.*?) \|$/);if(!match)return [];
  const [,id,draft,assertion,raw]=match;
  const renamed=raw.match(/renamed `([^`]+)`/),name=renamed?.[1]??raw.match(/(?:parity|hero|rail|tags|drawer|quickbuy|card|flow|quality)-[\w-]+/)?.[0];
  if(!name)throw Error(`No test name: ${line}`);
  const group=id.replace(/-\d+$/,'');
  let route=['L','D-L'].includes(group)?'#/leaderboard':['C','CM'].includes(group)?'#/create-market':['CL','COL'].includes(group)?'#/collections/default':['P','RA','CH','O','I','T','MD','TAB','MOD'].includes(group)?marketRoute():'#/';
  if(/conditional-(?:badge|explanation)|MD-38/.test(name))route=marketRoute('conditional');
  if(/scalar-estimate|multiscalar|multi-scalar/.test(name))route=marketRoute(/multi/.test(name)?'multiScalar':'scalar');
  return [{id,name,route,assertion,draft:!!draft}];
 });
}
const entries=generate();
if(new Set(entries.map(r=>r.id)).size!==entries.length)throw Error('Duplicate parity IDs');
if(process.argv.includes('--check')){
 const current=JSON.parse(await readFile(new URL('./parity.json',import.meta.url),'utf8'));
 if(JSON.stringify(entries)!==JSON.stringify(current))throw Error('parity.json is stale; run node e2e/generate-parity.mjs');
}else{await writeFile(new URL('./parity.json',import.meta.url),JSON.stringify(entries,null,2)+'\n');console.log(`Generated ${entries.length} parity contracts`);}
