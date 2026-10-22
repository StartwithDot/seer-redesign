import type { Market } from '../data/types';
import { compact, format } from '../data/format';
export function DrawerPools({ market: m, onBack }: { market: Market; onBack: () => void }) {
 return <div className="drawer-pools"><header><button onClick={onBack}>‹ Liquidity</button><span>Volume {format(m.volumeUSD)} traded, notional {format(m.volumeNotionalUSD)}</span></header><div className="pool-scroll">{m.pools.map((p, i) => p && <div className="pool-row" key={i}><span title={m.outcomes[i]}>{m.outcomes[i]}</span><span>{compact(p.outcomeBalance)} {p.outcomeSymbol} / {compact(p.collateralBalance)} {p.collateralSymbol}</span></div>)}</div></div>;
}
