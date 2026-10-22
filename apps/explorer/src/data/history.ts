import single from './market-chart.json';
import multiple from './markets-charts.json';
import { fixture, salvageObjects, unwrap } from './fixtures';
import type { Market } from './types';
import { now } from './clock';
interface Token { id: string; name: string }
export interface HistoryPoint { periodStartUnix: number; token0Price: string; token1Price: string; pool: { id: string; token0: Token; token1: Token }; percent: number; outcome: number }
function objects(value: unknown): Record<string, unknown>[] {
 if (typeof value === 'string') return salvageObjects(value);
 if (Array.isArray(value)) return value.flatMap(objects);
 if (value && typeof value === 'object') return [value as Record<string, unknown>, ...Object.values(value).flatMap(objects)];
 return [];
}
export function history(m: Market, range = 'All', end = now()): HistoryPoint[] {
 const captured = fixture<unknown>(`market-chart-${m.id}`);
 const input = captured ?? (m.id === '0x31cb54c49479243333594eb7343d31f6bd1ddfd3' ? single : multiple);
 const spans: Record<string, number> = { '1D': 86400, '1W': 604800, '1M': 2592000 };
 const custom = range.match(/^(\d+)-(\d+)$/);
 const from = custom ? +custom[1] : range === 'All' ? -Infinity : end - (spans[range] ?? Infinity);
 const to = custom ? +custom[2] : end;
 const seen = new Set<string>();
 return objects(unwrap(input)).flatMap(row => {
  if (typeof row.periodStartUnix !== 'number' || !row.pool || typeof row.token0Price !== 'string' || typeof row.token1Price !== 'string') return [];
  const point = row as unknown as HistoryPoint;
  const outcome = m.wrappedTokens.findIndex(t => [point.pool.token0.id.toLowerCase(), point.pool.token1.id.toLowerCase()].includes(t.toLowerCase()));
  if (outcome < 0 || point.periodStartUnix < from || point.periodStartUnix > to) return [];
  // Algebra token1Price = token1 units per token0; token0Price is its reciprocal.
  const price = point.pool.token0.id.toLowerCase() === m.wrappedTokens[outcome].toLowerCase() ? +point.token1Price : +point.token0Price;
  const key = `${point.pool.id}/${point.periodStartUnix}`;
  if (!Number.isFinite(price) || seen.has(key)) return [];
  seen.add(key); return [{ ...point, outcome, percent: price * 100 }];
 }).sort((a,b) => a.periodStartUnix - b.periodStartUnix);
}
