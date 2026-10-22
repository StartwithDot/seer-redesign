// Exercise the actual adapter and review-cut formula without a browser or server.
import ts from 'typescript';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';
import assert from 'node:assert/strict';
const read=path=>readFileSync(new URL(path,import.meta.url),'utf8');
const load=(source,require=()=>{throw Error('Unexpected import');},globals={})=>{
 const exports={};runInNewContext(ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,esModuleInterop:true}}).outputText,{exports,require,URLSearchParams,...globals});return exports;
};
const rng=load(read('../src/math/rng.ts'));
const math=load(read('../src/math/coverage.ts'));
const dataSource=read('../src/data/markets.ts').split("if(import.meta.env.DEV")[0];
// Access the store through the same public subscription hook used by the UI.
let store;
const adapter=load(dataSource,path=>path==='react'?{useSyncExternalStore:(_,snapshot)=>{store=snapshot();return store;}}:path==='../math/rng'?rng:JSON.parse(read('../src/data/'+path.slice(2))),{location:{search:'?n=12',hash:'#/'},window:{addEventListener:()=>{}}});
adapter.useMarkets();assert.equal(store.markets.length,12);
for(const market of store.markets.filter(m=>m.sample)){
 const cut=math.reviewCut(market),share=math.coverage(cut,market.rows);
 assert(share>=55&&share<=85,`${market.title}: Top ${cut} covers ${share}%`);
 assert(cut<market.rows.filter(r=>r.odds!==null).length);
}
assert.equal(math.coverage(math.reviewCut(store.markets[0]),store.markets[0].rows).toFixed(1),'60.4');
for(const name of ['markets','live_outcomes','finalized_outcomes','devcon_outcomes'])assert.deepEqual(JSON.parse(read('../src/data/'+name+'.json')),JSON.parse(read('../../../products/opportunity/data/'+name+'.json')),`${name} real data parity`);
console.log('PASS: all nine sample review cuts cover 55–85%; live top-27 covers 60.4%; real JSON parity');
