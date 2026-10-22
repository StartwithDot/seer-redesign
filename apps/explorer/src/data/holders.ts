import source from './get-token-transactions.json';
import { fixture, salvageObjects, unwrap } from './fixtures';
export interface Holder { address: string; balance: number; exactBalance: string }
export function holders(marketId: string, token: string): Holder[] {
 const data = unwrap(fixture<unknown>(`get-token-transactions-${marketId}`) ?? (marketId === '0x31cb54c49479243333594eb7343d31f6bd1ddfd3' ? source : null));
 if (!data || typeof data !== 'object') return [];
 const obj = data as Record<string, unknown>;
 let rows: unknown = (obj.topHolders as Record<string, unknown> | undefined)?.[token];
 if (!rows && typeof obj._raw_truncated === 'string') {
  const start = obj._raw_truncated.indexOf(`"${token}":[`);
  if (start >= 0) { const segment = obj._raw_truncated.slice(start + token.length + 4); rows = salvageObjects(segment.split(']')[0]); }
 }
 return Array.isArray(rows) ? rows.flatMap(row => {
  if (!row || typeof row !== 'object' || !('address' in row) || !('balance' in row)) return [];
  // ERC20 balance units use 18 decimal places; preserve the integer for exact display.
  return [{ address: String(row.address), balance: Number(row.balance) / 1e18, exactBalance: String(row.balance) }];
 }) : [];
}
