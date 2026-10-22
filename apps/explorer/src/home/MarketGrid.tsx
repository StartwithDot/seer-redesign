import { useEffect, useRef, useState } from 'react';
import { LayoutGroup } from 'motion/react';
import type { Market } from '../data/types';
import type { BuySelection, OpenBuy } from './useQuickBuy';
import { MarketCard } from './MarketCard';
export function MarketGrid({ markets, onBuy, selection, onCloseBuy }: { markets: Market[]; onBuy: OpenBuy; selection?: BuySelection | null; onCloseBuy?: () => void }) {
 const columnCount = () => innerWidth >= 1920 ? 5 : innerWidth >= 1440 ? 4 : innerWidth >= 1024 ? 3 : innerWidth >= 768 ? 2 : 1;
 const [columns, setColumns] = useState(columnCount);
 useEffect(() => { const resize = () => setColumns(columnCount()); window.addEventListener('resize', resize); return () => window.removeEventListener('resize', resize); }, []);
 const [count, setCount] = useState(100), sentinel = useRef<HTMLDivElement>(null);
 useEffect(() => { setCount(100); }, [markets]);
 useEffect(() => { const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setCount(n => Math.min(n + 100, markets.length)); }, { rootMargin: '400px' }); if (sentinel.current) observer.observe(sentinel.current); return () => observer.disconnect(); }, [markets.length, count]);
 return <><LayoutGroup><div className="market-grid" data-tour="grid">{Array.from({ length: columns }, (_, column) => <div className="market-column" key={column}>{markets.slice(0, count).filter((_, index) => index % columns === column).map(m => <MarketCard key={m.id} market={m} onBuy={onBuy} selection={selection?.market.id === m.id ? selection : null} onCloseBuy={onCloseBuy} animateLayout={markets.indexOf(m) < 40} />)}</div>)}</div></LayoutGroup>{count < markets.length && <div ref={sentinel} className="grid-sentinel" aria-hidden="true" />}</>;
}
