import { useState } from 'react';
import { defaults, type Filters } from '../data/filters';
import { filterTags } from './ActiveTags';
import { FilterGroup, groups } from './FilterGroup';
export function FilterPanel({ filters, onApply, onClose, persistent = false }: { filters: Filters; onApply: (filters: Filters) => void; onClose: () => void; persistent?: boolean }) {
 const [draft, setDraft] = useState(filters);
 return <div className="filter-panel" data-tour="rail"><header><h2>Filters</h2>{filterTags(filters).length > 0 && <button onClick={() => { const next = { ...defaults, marketName: filters.marketName, sort: filters.sort, dir: filters.dir }; setDraft(next); onApply(next); }}>Clear filters</button>}<button className="icon-button" aria-label={persistent ? 'Collapse' : 'Close'} onClick={onClose}>{persistent ? '‹' : '×'}</button></header>
 <div className="filter-scroll">{groups.slice(0, 4).map(group => <details key={group.key} open={group.key === 'state'}><summary>{group.key === 'state' ? 'Market state' : group.key === 'verif' ? 'Verification' : group.key === 'sort' ? 'Sort by' : group.label}</summary><FilterGroup group={group} filters={draft} change={(key, value) => setDraft(previous => ({ ...previous, [key]: value }))} /></details>)}<details><summary>More</summary>{groups.slice(4).map(group => <FilterGroup key={group.key} group={group} filters={draft} change={(key, value) => setDraft(previous => ({ ...previous, [key]: value }))} />)}</details></div>
 {JSON.stringify(draft) !== JSON.stringify(filters) && <footer><button className="button" onClick={() => { setDraft(filters); if (!persistent) onClose(); }}>Cancel</button><button className="button primary" onClick={() => { onApply({ ...draft, marketName: filters.marketName, minLiq: draft.minLiq ? String(Math.max(0, Number(draft.minLiq) || 0)) : '' }); if (!persistent) onClose(); }}>Apply</button></footer>}</div>;
}
