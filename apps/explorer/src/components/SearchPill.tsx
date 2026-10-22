import { useEffect, useRef, useState } from 'react';
import { filterParams, readFilters } from '../data/filters';
import { navigate, type Route } from '../router';
export function SearchPill({ route, onOpen }: { route: Route; onOpen: () => void }) {
 const query = route.params.get('marketName') || '', [value, setValue] = useState(query), latest = useRef(route);
 latest.current = route;
 useEffect(() => setValue(query), [query]);
 useEffect(() => { if (value === query) return; const timer = setTimeout(() => navigate('/', filterParams({ ...readFilters(latest.current.params), marketName: value })), 250); return () => clearTimeout(timer); }, [value, query]);
 return <label className="search-pill" data-tour="search"><span aria-hidden="true">⌕</span><input className="search-input" aria-label="Search by market, outcome or collection" placeholder="Search by market, outcome or collection" value={value} onChange={e => setValue(e.target.value)} /><button className="search-shortcut" aria-label="Search" onClick={onOpen}><kbd>/</kbd></button></label>;
}
