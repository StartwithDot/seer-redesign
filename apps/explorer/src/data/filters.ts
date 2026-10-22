import type { Market } from './types';
export const filterKeys = ['marketName', 'state', 'verif', 'chain', 'sort', 'dir', 'cond', 'rewards', 'minLiq', 'futarchy'] as const;
export type FilterKey = typeof filterKeys[number];
export type Filters = Record<FilterKey, string>;
export const defaults: Filters = { marketName: '', state: '', verif: '', chain: '', sort: '', dir: '', cond: '', rewards: '', minLiq: '', futarchy: '' };
export function readFilters(params: URLSearchParams): Filters {
 return Object.fromEntries(filterKeys.map(k => [k, params.get(k) ?? ''])) as Filters;
}
export function filterParams(filters: Filters) {
 const params = new URLSearchParams();
 filterKeys.forEach(k => { if (filters[k]) params.set(k, filters[k]); }); return params;
}
const on = (value: string) => value === '1' || value === 'true';
export function filterMarkets(markets: Market[], f: Filters) {
 const q = f.marketName.trim().toLowerCase();
 const rows = markets.filter(m => (!q || [m.question, ...m.outcomes].some(s => s.toLowerCase().includes(q))) &&
  (!f.state || f.state === 'All' || m.status === f.state) && (!f.verif || f.verif === 'All' || m.verification === f.verif) &&
  (!f.chain || f.chain === 'All' || String(m.chainId) === f.chain || m.chainName === f.chain) &&
  (!on(f.cond) || m.conditional) && (!on(f.rewards) || m.rewards) && (!on(f.futarchy) || m.isFutarchy) && m.liquidityUSD >= Math.max(0, Number(f.minLiq) || 0));
 const keys = { Liquidity: 'liquidityUSD', Volume: 'volumeUSD', 'Open Interest': 'openInterestUSD', 'Opening Date': 'openingTs', 'Creation Date': 'createdTs' } as const;
 const key = keys[f.sort as keyof typeof keys];
 return key ? rows.sort((a, b) => (a[key] - b[key]) * (f.dir.toLowerCase() === 'asc' ? 1 : -1)) : rows;
}
