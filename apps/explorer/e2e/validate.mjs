// Static verification only: no browser, server, or port.
import {readFile} from 'node:fs/promises';
import {assert} from './helpers.mjs';
import {validateContracts} from './parity.mjs';
const tests=[];
for(const file of ['quality','parity','deadControls','navigation','flows','card','chart','data']){
 const module=await import(`./${file}.mjs`);module.register((suite,name,fn,options)=>tests.push({suite,name,fn,options}));
}
assert.equal(new Set(tests.map(t=>`${t.suite}:${t.name}`)).size,tests.length,'Duplicate suite/name');
for(const t of tests){assert.equal(typeof t.fn,'function');assert((t.options?.widths??[1440,390]).length);}
const spec=await readFile(new URL('../../../products/explorer/design.md',import.meta.url),'utf8');
const section=spec.split('### 9.9 Tests')[1].split('### 9.10')[0];
const required=[...section.matchAll(/`((?:nav|card|drawer|quickbuy|hero|rail|tags|toolbar|chart|data|flow|quality|perf)-[a-z0-9-]+)`/g)].map(m=>m[1]);
for(const name of required)assert(tests.some(t=>t.name===name),`Missing §9.9 test ${name}`);
console.log(`${validateContracts()} parity IDs; ${tests.length} registered contracts; all named §9.9 checks present.`);
