import { readFile } from 'node:fs/promises';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const source = await readFile(new URL('./app.js', import.meta.url), 'utf8');
const data = JSON.parse(await readFile(new URL('../data/markets.json', import.meta.url), 'utf8'));
const element = { dataset: {}, setAttribute() {}, addEventListener() {}, classList: { add() {}, remove() {} }, value: '', textContent: '' };
const document = { documentElement: element, querySelector: () => element, querySelectorAll: () => [], addEventListener() {} };
const context = vm.createContext({ document, window: { addEventListener() {} }, matchMedia: () => ({ matches: false }), localStorage: { getItem: () => null, setItem() {} }, IntersectionObserver: class { observe() {} unobserve() {} }, setInterval() {}, URL, location: { href: 'http://localhost/previews/b/' }, console, fixture: data.markets, assert });
vm.runInContext(source.slice(0, source.lastIndexOf('try{const response=')) + `
markets=fixture.map(prepare);
assert.equal(markets.length,100);
assert.equal(markets.filter(priced).length,50);
assert.equal(markets.filter(isConditional).length,17);
for(const m of markets){
 assert.ok(who(m).length>30 && what(m).length>30 && how(m).length>30);
 assert.ok(!/undefined|NaN/.test(who(m)+what(m)+how(m)));
 assert.ok(['Reports not open yet','Reports open','Waiting for answer','In Dispute','Pending execution','Closed'].includes(status(m)));
 if(priced(m)){
  for(let i=0;i<m.prices.length;i++){
   assert.ok(m.odds[m.prices[i].index] !== null);
   const q=quote(m,100,i);
   assert.ok(Number.isFinite(q.shares) && q.shares>0);
   assert.ok(q.after>=m.prices[i].p-0.001);
  }
 }else{
  assert.equal(priceText(m),'—');
  assert.ok(how(m).includes('No priced outcomes'));
 }
}
assert.equal(rng(markets[0].id)(),rng(markets[0].id)());
assert.equal(markets.filter(m=>match(m,{...filters,rewards:true})).length,1);
assert.equal(markets.filter(m=>match(m,{...filters,verification:'verified'})).length,88);
assert.equal(markets.filter(m=>match(m,{...filters,min:1e12})).length,0);
console.log('PASS: 100 real markets; 50 unpriced remain unpriced; conditional, rewards, verification and liquidity filters; all information readouts; quote math; deterministic seeds.');
`, context);
assert.ok(!/https?:\/\/(?:cdn|fonts|unpkg|jsdelivr)/.test(source), 'No remote asset dependencies');
assert.ok(source.includes("fetch('../data/markets.json')"));
console.log('PASS: local data contract; no remote assets. Browser interaction and viewport checks require a server and were not run.');
