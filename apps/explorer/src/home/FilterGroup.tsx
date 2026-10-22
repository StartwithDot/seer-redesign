import type { FilterKey, Filters } from '../data/filters';
import { Segmented } from '../components/Segmented';
import { Switch } from './Switch';
import { markets } from '../data/markets';
import { filterMarkets } from '../data/filters';
export const groups: { key: FilterKey; label: string; options?: string[]; toggle?: string }[] = [
 { key: 'state', label: 'Market States', options: ['All', 'Reports not open yet', 'Reports open', 'Waiting for answer', 'In Dispute', 'Pending execution', 'Closed'] },
 { key: 'verif', label: 'Verification Status', options: ['All', 'Verified', 'Verifying', 'Challenged', 'Not Verified'] },
 { key: 'chain', label: 'Chain', options: ['All', 'Ethereum', 'OP Mainnet', 'Gnosis', 'Base'] },
 { key: 'sort', label: 'Sort By', options: ['Default', 'Liquidity', 'Volume', 'Open Interest', 'Opening Date', 'Creation Date'] },
 { key: 'cond', label: 'Conditional Market', toggle: 'Show only conditional markets' },
 { key: 'rewards', label: 'Rewards', toggle: 'Show only markets with rewards' },
 { key: 'minLiq', label: 'Minimum Liquidity' },
 { key: 'futarchy', label: 'Futarchy', toggle: 'Show only futarchy markets' },
];
export function FilterGroup({ group, filters, change }: { group: typeof groups[number]; filters: Filters; change: (key: FilterKey, value: string) => void }) {
 const value = filters[group.key] || group.options?.[0];
 return <section className="filter-group" id={`filter-${group.key}`}><h3>{group.label}</h3>
 {group.options && <div role="radiogroup" aria-label={group.label}>{group.options.map((option, i) => <label className="filter-option" key={option}><input type="radio" name={`filter-${group.key}`} value={option} checked={value === option} onChange={() => change(group.key, i ? option : '')} /><span>{option}</span><span className="filter-count">{filterMarkets(markets, { ...filters, [group.key]: i ? option : '' }).length}</span></label>)}</div>}
 {group.key === 'sort' && <Segmented label="Sort By" value={filters.dir || 'Desc'} options={['Desc', 'Asc'].map(v => ({ value: v, label: v }))} onChange={v => change('dir', v)} />}
 {group.toggle && <Switch label={group.toggle} checked={filters[group.key] === '1'} onChange={checked => change(group.key, checked ? '1' : '')} />}
 {group.key === 'minLiq' && <label className="liquidity-input"><span>$</span><input aria-label="Minimum Liquidity" type="number" inputMode="decimal" min="0" value={filters.minLiq} onChange={e => change('minLiq', e.target.value)} /></label>}
 </section>;
}
