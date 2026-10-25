// Regenerates src/data/contest-summary.json (archived contests: only prices + counts).
// Run: node scripts/gen-contest-summary.mjs   (needs esbuild, available via vite)
import { build } from 'esbuild';
import { writeFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
const out = new URL('./.contests-full.tmp.mjs', import.meta.url).pathname;
await build({ entryPoints: [new URL('../src/data/contests-full.ts', import.meta.url).pathname], bundle: true, format: 'esm', platform: 'node', outfile: out, loader: { '.json': 'json' }, logLevel: 'error' });
const m = await import(pathToFileURL(out).href);
const list = m.archivedIds.map(id => { const c = m.fullContest(id); return { id: c.id, name: c.name, kind: c.kind, live: c.live, marketCount: c.marketCount, prices: c.rows.map(r => r.price) }; });
writeFileSync(new URL('../src/data/contest-summary.json', import.meta.url), JSON.stringify(list));
import('node:fs').then(fs => fs.unlinkSync(out));
console.log('ok', list.map(c => `${c.id}:${c.prices.length}`).join(' '));
