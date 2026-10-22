import { useLayoutEffect, useRef, useState } from 'react';
import { type Filters, type FilterKey } from '../data/filters';
import { compact } from '../data/format';
import { groups } from './FilterGroup';
export function filterTags(filters: Filters) {
 const keys: FilterKey[] = ['state', 'verif', 'chain', 'cond', 'rewards', 'futarchy', 'minLiq'];
 return keys.filter(key => {
  const value = filters[key];
  if (['cond', 'rewards', 'futarchy'].includes(key)) return value === '1' || value === 'true';
  if (key === 'minLiq') return Number(value) > 0;
  return !!value && value !== 'All';
 }).map(key => ({ key, label: key === 'minLiq' ? `Min $${compact(Number(filters[key])).replace('.00', '')}` : key === 'cond' ? 'Conditional' : key === 'rewards' ? 'Rewards' : key === 'futarchy' ? 'Futarchy' : filters[key], group: groups.find(g => g.key === key)?.label || '' }));
}
export function ActiveTags({ filters, onApply, onOpen }: { filters: Filters; onApply: (f: Filters) => void; onOpen: () => void }) {
 const tags = filterTags(filters), host = useRef<HTMLDivElement>(null), [limit, setLimit] = useState(tags.length);
 const signature = JSON.stringify(tags);
 useLayoutEffect(() => { const node = host.current; if (!node) return; const measure = () => { const mobile = innerWidth < 768; let used = 0, count = 0; const width = node.clientWidth - 120; node.querySelectorAll<HTMLElement>('.tag-measure > span').forEach(el => { used += el.offsetWidth + 8; if (used <= width) count++; }); setLimit(mobile ? tags.length : count); }; const observer = new ResizeObserver(measure); observer.observe(node); measure(); return () => observer.disconnect(); }, [signature, tags.length]);
 return <div className="active-tags" ref={host}><div className="tag-measure" aria-hidden="true">{tags.map(tag => <span className="active-tag" key={tag.key}>{tag.label}<span>×</span></span>)}</div>{tags.slice(0, limit).map(tag => <span className="active-tag" title={`${tag.group}: ${tag.label}`} key={tag.key}>{tag.label}<button aria-label={`Remove ${tag.label}`} onClick={() => onApply({ ...filters, [tag.key]: '' })}>×</button></span>)}{tags.length > limit && <button className="tag-overflow" onClick={onOpen}>+{tags.length - limit}</button>}</div>;
}
