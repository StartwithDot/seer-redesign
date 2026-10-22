import { useEffect, useRef, useState } from 'react';
import type { Filters } from '../data/filters';
import { Sheet } from '../components/Sheet';
import { FilterPanel } from './FilterPanel';
export function FilterRail({ filters, onApply, collapsed, setCollapsed, open, setOpen }: { filters: Filters; onApply: (f: Filters) => void; collapsed: boolean; setCollapsed: (value: boolean) => void; open: boolean; setOpen: (value: boolean) => void }) {
 const rail = useRef<HTMLElement>(null);
 useEffect(() => { if (open && !collapsed) rail.current?.querySelector<HTMLButtonElement>('button')?.focus(); }, [open, collapsed]);
 const [desktop, setDesktop] = useState(() => matchMedia('(min-width:1440px)').matches);
 useEffect(() => { const media = matchMedia('(min-width:1440px)'), update = () => setDesktop(media.matches); media.addEventListener('change', update); return () => media.removeEventListener('change', update); }, []);
 const close = () => { setOpen(false); if (desktop) setCollapsed(true); };
 const panel = <FilterPanel key={JSON.stringify(filters)} filters={filters} onApply={onApply} onClose={close} persistent={desktop} />;
 if (!desktop) return open ? <Sheet label="Filters" onClose={close}>{panel}</Sheet> : null;
 return collapsed ? null : <aside ref={rail} className="filter-rail">{panel}</aside>;
}
