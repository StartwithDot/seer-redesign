import { useEffect, useMemo, useState } from 'react';
import { closedMilestones, getActiveMilestones, organizations, type Milestone } from '../data/milestones';
import { MilestoneHero } from './MilestoneHero';
import { MilestoneCard } from './MilestoneCard';
import { ClosedStrip } from './ClosedStrip';
import { OrgTable } from './OrgTable';
import { Segmented } from './Segmented';
import { ForkMark } from './ForkMark';
import { HoverMenu } from './HoverMenu';
import { orgAvatars, type AvatarKey } from '../data/avatars';
const defaults = { q: '', org: '', token: '', status: 'All', sort: 'Closing soon' };
type Filters = typeof defaults;
function readFilters(org?: string): Filters {
  const query = new URLSearchParams(location.search);
  const status = query.get('status') ?? 'All', sort = query.get('sort') ?? 'Closing soon';
  return { q: query.get('q') ?? '', org: org ?? query.get('org') ?? '', token: query.get('token') ?? '',
    status: ['All', 'Active', 'Awaiting', 'Resolved'].includes(status) ? status : 'All', sort: ['Closing soon', 'Volume', 'Impact'].includes(sort) ? sort : 'Closing soon' };
}
export function Landing({ org, loading }: { org?: string; loading: boolean }) {
  const [filters, setFilters] = useState(() => readFilters(org));
  const active = useMemo(() => getActiveMilestones(), []);
  useEffect(() => { setFilters(readFilters(org)); }, [org]);
  useEffect(() => {
    const onPop = () => setFilters(readFilters(org));
    window.addEventListener('popstate', onPop); return () => window.removeEventListener('popstate', onPop);
  }, [org]);
  const update = (next: Filters) => {
    setFilters(next);
    const url = new URL(location.href);
    for (const key of Object.keys(defaults) as (keyof Filters)[]) {
      if (next[key] === defaults[key]) url.searchParams.delete(key); else url.searchParams.set(key, next[key]);
    }
    if (org && next.org !== org) url.hash = '/';
    history.replaceState(null, '', url);
    if (org && next.org !== org) window.dispatchEvent(new HashChangeEvent('hashchange'));
  };
  const set = (key: keyof Filters, value: string) => {
    update({ ...filters, [key]: value });
    if (key === 'org' && value && !value.includes(',')) location.hash = `/org/${value}`;
  };
  const matches = (m: Milestone) => {
    const name = organizations.find(o => o.slug === m.orgSlug)?.name ?? '';
    return (!filters.org || filters.org.split(',').includes(m.orgSlug)) && (!filters.token || filters.token.split(',').includes(m.token)) && (filters.status === 'All' || m.status === filters.status) &&
      `${m.question.pre}${m.question.cond} ${m.token} ${name} ${m.id} ${m.proposal}`.toLowerCase().includes(filters.q.toLowerCase().trim());
  };
  const visible = active.filter(matches).sort((a, b) => filters.sort === 'Volume' ? b.volume - a.volume : filters.sort === 'Impact' ? b.impact - a.impact : a.endTimestamp - b.endTimestamp);
  const closed = closedMilestones.filter(matches).sort((a, b) => filters.sort === 'Impact' ? b.impact - a.impact : 0);
  const filtered = Object.keys(defaults).some(key => filters[key as keyof Filters] !== defaults[key as keyof Filters]);
  const clear = () => {
    update({ ...defaults });
    location.hash = '/';
    window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  };
  const orgActive = active.filter(m => !filters.org || filters.org.split(',').includes(m.orgSlug));
  return <><MilestoneHero markets={orgActive.length ? orgActive : active} /><section className="landing-controls" data-align data-tour="controls" aria-label="Filters">
    <input className="filter-search" aria-label="Search milestones" placeholder="Search" value={filters.q} onChange={event => set('q', event.target.value)} />
    <div className="controls-menus">
    {(['org', 'token'] as const).map(key => <HoverMenu key={key} label={key === 'org' ? 'Organizations' : 'Token'} multiple selected={filters[key].split(',').filter(Boolean)} onChange={values => set(key, values.join(','))} options={key === 'org' ? organizations.map(o => ({ value: o.slug, label: o.name, avatar: orgAvatars[o.slug], count: [...active, ...closedMilestones].filter(m => m.orgSlug === o.slug).length })) : (['ETH', 'GNO', 'PNK', 'AAVE'] as AvatarKey[]).map(value => ({ value, label: value, avatar: value, count: [...active, ...closedMilestones].filter(m => m.token === value).length }))} />)}
    <Segmented label="Status" options={['All', 'Active', 'Awaiting', 'Resolved'].map(value => ({ value, label: value }))} value={filters.status} onChange={value => set('status', value)} />
    <HoverMenu label={filters.sort} options={['Closing soon', 'Volume', 'Impact'].map(value => ({ value, label: value }))} selected={[filters.sort]} onChange={values => set('sort', values[0])} />
    </div>
    <div className="filter-chips">{(['org', 'token'] as const).flatMap(key => filters[key].split(',').filter(Boolean).map(value => ({ key, value }))).slice(0, 3).map(({ key, value }) => <button className="chip" key={key + value} aria-label={`Remove ${key === 'org' ? organizations.find(o => o.slug === value)?.name : value}`} onClick={() => set(key, filters[key].split(',').filter(v => v !== value).join(','))}>{key === 'org' ? organizations.find(o => o.slug === value)?.name : value}<span aria-hidden="true">×</span></button>)}{filters.org.split(',').filter(Boolean).length + filters.token.split(',').filter(Boolean).length > 3 && <span>+{filters.org.split(',').filter(Boolean).length + filters.token.split(',').filter(Boolean).length - 3}</span>}</div>
    <output>{visible.length} active · {closed.length} closed</output>{filtered && <button className="button button-secondary" onClick={clear}>Clear</button>}
  </section><section data-align id="milestones" className="active-section"><div className="section-heading"><h2>Active Milestones</h2><span className="muted">{visible.length}</span></div><div className="milestone-grid">{visible.map(m => <MilestoneCard key={m.id} milestone={m} loading={loading} wide={visible.length === 1} />)}</div>{!visible.length && <div className="card milestone-empty"><ForkMark size={48} /><h3>No milestones</h3><button className="button button-secondary" onClick={clear}>Clear filters</button></div>}</section><ClosedStrip markets={closed} /><OrgTable loading={loading} selectedOrg={filters.org} /></>;
}

