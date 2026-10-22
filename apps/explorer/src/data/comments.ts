import source from './market-comments.json';
import { fixture, unwrap } from './fixtures';
export function comments(marketId: string): unknown[] {
 const value = unwrap(fixture<unknown>(`market-comments-${marketId}`) ?? (marketId === '0x31cb54c49479243333594eb7343d31f6bd1ddfd3' ? source : null));
 return Array.isArray(value) ? value : [];
}
