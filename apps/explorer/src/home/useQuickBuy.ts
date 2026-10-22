import { useCallback, useState } from 'react';
import type { Market } from '../data/types';
export interface BuySelection { market: Market; outcome: number; anchor: HTMLElement }
export type OpenBuy = (market: Market, outcome: number, anchor: HTMLElement) => void;
export function useQuickBuy() {
 const [selection, setSelection] = useState<BuySelection | null>(null);
 const close = useCallback(() => { setSelection(null); if (window.__explorerTest) window.__explorerTest.hero.paused = false; }, []);
 const open: OpenBuy = useCallback((market, outcome, anchor) => { window.dispatchEvent(new Event('explorer:quickbuy')); if (window.__explorerTest) window.__explorerTest.hero.paused = true; setSelection({ market, outcome, anchor }); }, []);
 return { selection, open, close };
}
