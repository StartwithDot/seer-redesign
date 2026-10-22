// Pure geometry checks, run without a browser or development server.
import ts from 'typescript';
import {readFileSync} from 'node:fs';
import assert from 'node:assert/strict';
const source=readFileSync(new URL('../src/math/treemap.ts',import.meta.url),'utf8');
const js=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.ESNext}}).outputText;
const {squarify,labeledLayout}=await import(`data:text/javascript;base64,${Buffer.from(js).toString('base64')}`);
const live=JSON.parse(readFileSync(new URL('../src/data/live_outcomes.json',import.meta.url),'utf8'));
const items=live.filter(o=>o.odds!==null&&o.odds!==.4).sort((a,b)=>b.odds-a.odds).map((o,i)=>({id:String(i),weight:o.odds}));
assert.equal(live.length,235);assert.equal(items.length,59);
assert.equal(live.filter(o=>o.odds===.4).length,46);assert.equal(live.filter(o=>o.odds===null).length,130);
assert.equal(items.slice(0,27).reduce((s,o)=>s+o.weight,0).toFixed(1),'60.4');
for(const [w,h] of [[664,520],[688,520],[300,480],[1200,400]]){
 const rects=squarify(items,w,h),sum=items.reduce((s,o)=>s+o.weight,0);
 assert.equal(rects.length,59);
 for(const [i,r] of rects.entries()){
 assert.ok(r.x>=0&&r.y>=0&&r.x+r.width<=w+.00001&&r.y+r.height<=h+.00001);
 assert.ok(Math.abs(r.width*r.height-items[i].weight/sum*w*h)<.00001);
 for(const b of rects.slice(i+1))assert.ok(Math.min(r.x+r.width,b.x+b.width)-Math.max(r.x,b.x)<.00001||Math.min(r.y+r.height,b.y+b.height)-Math.max(r.y,b.y)<.00001);
 }
 const layout=labeledLayout(items,w,h);
 assert.equal(layout.rects.filter(r=>r.id==='more').length,1);
 if(w>=664)assert.ok(layout.count>=10,`Expected >=10 labels at ${w}x${h}; got ${layout.count}`);
 const mass=items.reduce((s,o)=>s+o.weight,0);
 for(const r of layout.rects){const weight=r.id==='more'?items.slice(layout.count).reduce((s,o)=>s+o.weight,0):items.find(o=>o.id===r.id).weight;assert.ok(Math.abs(r.width*r.height-weight/mass*w*h)<.00001);}
 assert.ok(layout.rects.filter(r=>r.id!=='more').every(r=>r.width>=116&&r.height>=68));
}
assert.deepEqual(squarify([],300,200),[]);
assert.deepEqual(squarify(items,0,200),[]);
console.log('PASS: 235-row tiers, top-27 coverage, proportional areas, bounds, no overlaps, label minimums and merged remainder');
const {namedLayout}=await import(`data:text/javascript;base64,${Buffer.from(js).toString('base64')}`);
for(const [w,h] of [[160,480],[300,480],[539,468],[800,468],[1200,600]]){
 const layout=namedLayout(items,w,h);assert.equal(layout.rects.length,59);
 for(const [i,r] of layout.rects.entries()){
  assert(r.width>=76-1e-8&&r.height>=52-1e-8,'Named cells reserve 72×48 plus gutters');
  assert(r.x>=0&&r.y>=0&&r.x+r.width<=w+1e-8&&r.y+r.height<=layout.height+1e-8);
  for(const b of layout.rects.slice(i+1))assert(Math.min(r.x+r.width,b.x+b.width)-Math.max(r.x,b.x)<1e-8||Math.min(r.y+r.height,b.y+b.height)-Math.max(r.y,b.y)<1e-8);
 }
 assert.equal(layout.height,Math.max(h,Math.ceil(60/Math.floor(w/76))*52));
 assert(layout.rects[0].width*layout.rects[0].height>Math.max(...layout.rects.slice(1).map(r=>r.width*r.height)),'Leader has the largest cell');
}
console.log('PASS: all 59 named cells, minimum dimensions, bounded strips, no overlap at five widths');
