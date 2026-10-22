import source from './get-market-events.json';
import { fixture, unwrap } from './fixtures';
export function events(marketId: string): unknown[] {
 const value = unwrap(fixture<unknown>(`get-market-events-${marketId}`) ?? (marketId === '0x31cb54c49479243333594eb7343d31f6bd1ddfd3' ? source : null));
 return Array.isArray(value) ? value : [];
}
