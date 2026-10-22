import { useMemo, useState } from 'react';
import type { Route } from '../router';
import type { Verification } from '../data/types';
import { markets } from '../data/markets';
import { filterMarkets, readFilters, filterParams, type Filters } from '../data/filters';
import { MarketGrid } from './MarketGrid';
import { useQuickBuy } from './useQuickBuy';
import { navigate } from '../router';
import { FilterRail } from './FilterRail';
import { Toolbar } from './Toolbar';
import { ActiveTags, filterTags } from './ActiveTags';
import { Hero } from './Hero';
import { AskerStrip } from './AskerStrip';
import './home.css';
import './rail.css';
import './hero.css';
export function HomePage({ route }: { route: Route }) {
 const [collapsed, setCollapsed] = useState(false), [open, setOpen] = useState(false);
 const filters = { ...readFilters(route.params), sort: route.params.get('sort') ?? 'Liquidity' };
 const openFilters = (group = 'state') => {
  setCollapsed(false); setOpen(true);
  requestAnimationFrame(() => {
   const target = document.getElementById(`filter-${group}`);
   const details = target?.closest('details'); if (details) details.open = true;
   target?.querySelector<HTMLElement>('input, button')?.focus();
  });
 };
 const apply = (next: Filters) => navigate('/', filterParams(next));
 const buy = useQuickBuy(), query = route.params.toString();
 const rows = useMemo(() => route.path === '/__test/marks' ? (['Verified', 'Not Verified', 'Verifying', 'Challenged'] as Verification[]).map((verification, i) => ({ ...markets[0], id: `${markets[0].id}-${i}`, verification })) : filterMarkets(markets, { ...readFilters(new URLSearchParams(query)), sort: new URLSearchParams(query).get('sort') ?? 'Liquidity' }), [query, route.path]);
 return <section className="home-page" data-align><AskerStrip /><div className={`home-layout ${collapsed ? 'rail-collapsed' : ''}`}><Toolbar count={rows.length} filters={filters} onApply={apply} onOpen={openFilters} /><FilterRail filters={filters} onApply={apply} collapsed={collapsed} setCollapsed={setCollapsed} open={open} setOpen={setOpen} /><div className="home-content"><Hero buying={!!buy.selection} /><div className="home-board">{filterTags(filters).length > 0 && <ActiveTags filters={filters} onApply={apply} onOpen={() => openFilters()} />}<MarketGrid markets={rows} onBuy={buy.open} selection={buy.selection} onCloseBuy={buy.close} /></div></div></div></section>;
}
