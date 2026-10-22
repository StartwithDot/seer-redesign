import source from './get-token-transactions.json';
import subgraph from './subgraph.json';
import { fixture, salvageObjects, unwrap } from './fixtures';
import { getMarkets } from './markets';
export interface Activity { address: string; action: 'Bought' | 'Sold' | 'Split' | 'Merged'; amount: number; outcome: string; timestamp: number; transactionHash: string; token: string }
export function activity(marketId: string): Activity[] {
 const market = getMarkets().find(m => m.id === marketId);
 const data = unwrap(fixture<unknown>(`get-token-transactions-${marketId}`) ?? (marketId === '0x31cb54c49479243333594eb7343d31f6bd1ddfd3' ? source : null));
 if (!market || !data || typeof data !== 'object') return [];
 const value = data as Record<string, unknown>;
 const rows = Array.isArray(value.recentTransactions) ? value.recentTransactions : typeof value._raw_truncated === 'string' ? salvageObjects(value._raw_truncated).filter(r => 'tx_hash' in r) : [];
 const pools = new Set(subgraph.data.data.pools.map(p => p.id.toLowerCase()));
 return rows.flatMap((row: Record<string, unknown>) => {
  if (typeof row.from !== 'string' || typeof row.to !== 'string' || typeof row.token !== 'string' || typeof row.timestamp !== 'number' || typeof row.value !== 'string') return [];
  const index = market.wrappedTokens.findIndex(t => t.toLowerCase() === String(row.token).toLowerCase());
  if (index < 0) return [];
  const from = row.from.toLowerCase(), to = row.to.toLowerCase();
  // ERC20 mint = Split, burn = Merged; pool-to-user = Bought, user-to-pool = Sold.
  // Unknown transfers are excluded: an arbitrary transfer does not prove a trade.
  const action = /^0x0+$/.test(from) ? 'Split' : /^0x0+$/.test(to) ? 'Merged' : pools.has(from) ? 'Bought' : pools.has(to) ? 'Sold' : null;
  if (!action) return [];
  return [{ address: action === 'Sold' || action === 'Merged' ? row.from : row.to, action,
   amount: Number(row.value) / 1e18, outcome: market.outcomes[index], timestamp: row.timestamp,
   transactionHash: String(row.tx_hash), token: row.token } satisfies Activity];
 }).sort((a, b) => b.timestamp - a.timestamp);
}
