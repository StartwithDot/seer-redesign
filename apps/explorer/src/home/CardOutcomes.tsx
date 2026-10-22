import { motion } from 'motion/react';
import { TugBar } from './TugBar';
import type { Market } from '../data/types';
import type { OpenBuy } from './useQuickBuy';
import { percent } from '../data/format';
import { Tooltip } from '../components/Tooltip';
import { RollingNumber } from '../components/RollingNumber';
export const validOutcomes = (m: Market) => m.outcomes.map((name, index) => ({ name, index })).filter(o => o.name !== 'Invalid');
export function CardOutcomes({ market: m, onBuy, active = false }: { market: Market; onBuy: OpenBuy; active?: boolean }) {
 const valid = validOutcomes(m), top = [...valid].sort((a, b) => (m.odds[b.index] ?? -Infinity) - (m.odds[a.index] ?? -Infinity)).slice(0, 2);
 const button = (index: number, label: string) => <button key={index} className="ghost-buy" aria-label={`Buy ${m.outcomes[index]} at ${percent(m.odds[index])}`} onClick={e => { e.stopPropagation(); onBuy(m, index, e.currentTarget); }}>{label}</button>;
 const number = (index: number) => m.odds[index] === null ? '—' : <RollingNumber value={m.odds[index]!} decimals={1} suffix="%" />;
 if (m.status === 'Closed') return <div className="card-outcomes closed-outcomes"><strong>{m.outcomes[m.leading]}</strong><span>Closed</span></div>;
 if (m.layout === 'binary') return <div className="card-outcomes binary-block"><div className="binary-outcomes">{valid.map(o => <div className={`outcome-tile ${o.index === m.leading ? 'is-leading' : ''}`} key={o.index}><span>{o.name}</span><strong>{number(o.index)}</strong></div>)}</div><TugBar probability={m.odds[m.leading] ?? 50} active={active} /><div className="binary-buttons">{valid.map(o => button(o.index, o.name))}</div></div>;
 if (m.layout === 'scalar') return <div className="card-outcomes scalar-outcomes"><div className="scalar-estimate"><span>Market estimate</span><strong>{m.estimate?.toFixed(3) ?? '—'}</strong><span>{m.unit}</span></div><div className="binary-buttons">{valid.slice(0, 2).map((o, i) => button(o.index, i ? 'Down' : 'Up'))}</div></div>;
 return <div className="card-outcomes multi-outcomes">{top.map((o, rank) => <motion.div layout="position" className="home-outcome-row" key={o.index}><div className="home-outcome-content"><Tooltip text={o.name}><span className="outcome-name" tabIndex={0}>{o.name}</span></Tooltip><span className="outcome-value">{number(o.index)}</span>{button(o.index, 'Buy')}</div><div className="multi-bar"><span style={{ width: `${Math.max(0, Math.min(100, m.odds[o.index] ?? 0))}%` }} className={rank === 0 ? 'leading-bar' : ''} /></div></motion.div>)}</div>;
}
