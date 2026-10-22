// Run outside the sandbox. Responses are saved verbatim; failed captures never replace existing files.
import { readFile, mkdir, writeFile, rename } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
const dataDir = new URL('../src/data/', import.meta.url);
const output = new URL('fixtures/', dataDir);
const { markets } = JSON.parse(await readFile(new URL('markets-search.full.json', dataDir), 'utf8'));
await mkdir(output, { recursive: true });
const base = 'https://app.seer.pm';
const jobs = [];
const add = (name, endpoint, body) => jobs.push({ name, endpoint, body });
const ids = ['0xe1793927', '0xbbf8f7e4', '0xfe41', '0x31cb54c4'];
const selected = markets.filter(m => ids.some(id => m.id.startsWith(id)) || /BASEFEE/i.test(m.marketName + JSON.stringify(m.poolBalance)) || m.outcomes.filter(o => o !== 'Invalid').length === 80 || /futarchy.run AI job board/i.test(m.marketName));
const seats = markets.find(m => m.templateId === '1' && /seats/i.test(m.marketName) && m.outcomes.length > 3);
if (seats) selected.push(seats);
for (const market of new Map(selected.map(m => [m.id, m])).values()) {
 for (const endpoint of ['market-chart', 'get-token-transactions', 'get-market-events']) {
  add(`${endpoint}-${market.id}`, `/.netlify/functions/${endpoint}?marketId=${market.id}&chainId=${market.chainId}`);
 }
 if (market.id.startsWith('0xbbf8') || market.id.startsWith('0xfe41')) {
  // Pool ids are resolved from the real wrapped outcome/collateral pair, never invented.
  const tokens = [...market.wrappedTokens, market.collateralToken].map(t => t.toLowerCase());
  add(`pool-ticks-${market.id}`, '/subgraph?_subgraph=algebra&_chainId=100', {
   query: 'query Pools($tokens: [String!]!) { pools(where: {token0_in: $tokens, token1_in: $tokens}) { id tick sqrtPrice liquidity token0 { id symbol decimals } token1 { id symbol decimals } ticks(first: 1000, orderBy: tickIdx, orderDirection: asc) { tickIdx liquidityGross liquidityNet price0 price1 } } }',
   variables: { tokens },
  });
 }
}
function leader(period, chain, sort, app = 'all', offset = 0) {
 const params = new URLSearchParams({ period, chainId: chain, sort, app, dir: 'desc', limit: '25', offset: String(offset), breakdown: '1' });
 add(`lb-${period}-${app}-${chain}-${sort}-desc-${offset}`, `/.netlify/functions/get-pnl-leaderboard?${params}`);
}
for (const period of ['1d', '1w', '1m', 'all']) for (const chain of ['all', '100']) for (const sort of ['pnl', 'score', 'volume', 'roi']) leader(period, chain, sort);
leader('all', 'all', 'pnl', 'all', 25);
for (const app of ['foresight', 'opportunity', 'deepfunding']) leader('all', 'all', 'pnl', app);
// The page-2 body is A-08; override with the browser-observed body if the endpoint differs.
const searchBody = process.env.EXPLORER_SEARCH_BODY ? JSON.parse(process.env.EXPLORER_SEARCH_BODY) : { offset: 100, limit: 100 };
add('markets-search-100', '/.netlify/functions/markets-search', searchBody);
let failures = 0;
for (const job of jobs) {
 try {
  const response = await fetch(base + job.endpoint, { method: job.body ? 'POST' : 'GET', headers: job.body ? { 'Content-Type': 'application/json' } : undefined, body: job.body ? JSON.stringify(job.body) : undefined, signal: AbortSignal.timeout(45000) });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const text = await response.text(), parsed = JSON.parse(text);
  if (parsed.errors || parsed.error) throw new Error(JSON.stringify(parsed.errors ?? parsed.error));
  if (job.name === 'markets-search-100' && (!Array.isArray(parsed.markets) || !parsed.markets.length || parsed.markets.some(m => markets.some(existing => existing.id === m.id)))) throw new Error('A-08: page 2 not confirmed; set EXPLORER_SEARCH_BODY from the browser request');
  const target = new URL(`${job.name}.json`, output), temp = fileURLToPath(target) + '.tmp';
  await writeFile(temp, text); await rename(temp, target); console.log(`Saved ${job.name}`);
 } catch (error) { failures++; console.error(`${job.name}: ${error.message}`); }
}
process.exitCode = failures ? 1 : 0;
