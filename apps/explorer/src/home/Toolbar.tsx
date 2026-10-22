import { useState } from 'react';
import type { Filters } from '../data/filters';
import { filterTags } from './ActiveTags';
export function Toolbar({ count, filters, onApply, onOpen }: { count: number; filters: Filters; onApply: (f: Filters) => void; onOpen: (group?: string) => void }) {
 const active = filterTags(filters).length, [tab, setTab] = useState('All markets');
 const tabs = ['All markets', 'Trending', 'Ending soon', 'New'];
 return <div className="toolbar-area"><div className="home-toolbar" aria-label={`${count} markets`}><div className="home-market-tabs">{tabs.map(label => <button key={label} aria-pressed={tab === label} onClick={() => { setTab(label); onApply({ ...filters, sort: label === 'Trending' ? 'Volume' : label === 'Ending soon' ? 'Opening Date' : label === 'New' ? 'Creation Date' : '', dir: label === 'Ending soon' ? 'Asc' : 'Desc' }); }}>{label}</button>)}</div><div className="toolbar-actions"><button className="sort-control" onClick={() => onOpen('sort')}>Sort: {filters.sort || 'Default'}<svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.5" /></svg></button><button onClick={() => onOpen()}>Filters{active ? ` (${active})` : ''}</button><a href="#/collections/default">My collections</a><a className="button primary" href="#/create-market">Create New Market</a></div></div></div>;
}
