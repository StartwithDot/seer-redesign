import type { Market } from '../data/types';
import { format, compact } from '../data/format';
import { useWallet } from '../data/wallet';
import { Tooltip } from '../components/Tooltip';
export const priceHelp = 'Pool price, not trades';
export function MetaRow({ market: m }: { market: Market }) {
 const { connected } = useWallet();
 return <div className="market-meta">
  <span><span className="meta-label">Type</span><strong>{m.type}</strong></span>
  <span><span className="meta-label">Liquidity</span><strong>{format(m.liquidityUSD)}</strong><Tooltip text={priceHelp}><button className="icon-button" aria-label="Liquidity">ⓘ</button></Tooltip></span>
  <span><span className="meta-label">Volume</span><strong>{format(m.volumeUSD)}</strong></span>
  <span><span className="meta-label">Open interest</span><strong>{format(m.openInterestUSD)}</strong><Tooltip text={`${compact(m.openInterestCollateral)} ${m.collateralSymbol} · ${m.pools.filter(Boolean).map(p => `${compact(p!.outcomeBalance)} ${p!.outcomeSymbol} / ${compact(p!.collateralBalance)} ${p!.collateralSymbol}`).join(' · ')}`}><button className="icon-button" aria-label="Open interest">ⓘ</button></Tooltip></span>
  {connected && <span><span className="meta-label">P&amp;L</span><strong>0.00</strong></span>}
 </div>;
}
