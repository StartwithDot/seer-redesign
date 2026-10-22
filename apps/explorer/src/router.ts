import { useSyncExternalStore } from 'react';
export type Route = { name: 'home' | 'leaderboard' | 'create' | 'collections' | 'plate' | 'not-found' | 'market'; path: string; params: URLSearchParams; chainId?: number; slug?: string };
export function parseRoute(hash: string): Route {
 const [path = '/', query = ''] = hash.replace(/^#/, '').split('?');
 const params = new URLSearchParams(query), base = { path, params };
 if (path === '/') return { ...base, name: 'home' };
 const market = path.match(/^\/markets\/(\d+)\/([^/#]+)(?:#outcomes)?$/);
 if (market) return { ...base, name: 'market', chainId: +market[1], slug: decodeURIComponent(market[2]) };
 const names = { '/leaderboard': 'leaderboard', '/create-market': 'create', '/collections/default': 'collections' } as const;
 if (path in names) return { ...base, name: names[path as keyof typeof names] };
 return { ...base, name: ['/account', '/deposit', '/portfolio', '/trade-collateral', '/policies/verified-market', '/policies/market-rules'].includes(path) ? 'plate' : 'not-found' };
}
const positions = new Map<string, number>();
let previous = typeof location === 'undefined' ? '#/' : location.hash;
function subscribe(callback: () => void) {
 const changed = () => {
  positions.set(previous, window.scrollY); previous = location.hash; callback();
  requestAnimationFrame(() => window.scrollTo(0, positions.get(location.hash) ?? 0));
 };
 window.addEventListener('hashchange', changed); return () => window.removeEventListener('hashchange', changed);
}
export function useRoute() { return parseRoute(useSyncExternalStore(subscribe, () => location.hash || '#/')); }
export function navigate(path: string, params = new URLSearchParams(), replace = false) {
 const next = `#${path}${params.size ? '?' + params : ''}`;
 if (replace) { history.replaceState(null, '', next); window.dispatchEvent(new HashChangeEvent('hashchange')); }
 else location.hash = next;
}
