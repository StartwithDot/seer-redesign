import { motion, useReducedMotion } from 'motion/react';
import type { ActiveMilestone } from '../data/milestones';
import { useSignalPoint } from '../data/signals';
import { Avatar } from './Avatar';
import { LeanChip } from './Chips';
import { MiniSpark } from './MiniSpark';
export function SignalList({ markets, selected, select, paused }: { markets: ActiveMilestone[]; selected: number; select: (index: number) => void; paused: boolean }) {
  const reduced = useReducedMotion();
  return <div className="card signal-list-card"><div className="signal-list-heading"><i className="active-dot" />Active <span>{markets.length}</span></div><ul className="signal-list" data-tour="switcher" role="list" aria-label="Active milestones" onKeyDown={event => {
    const direction = event.key === 'ArrowDown' || event.key === 'ArrowRight' ? 1 : event.key === 'ArrowUp' || event.key === 'ArrowLeft' ? -1 : 0;
    if (!direction || !(event.target instanceof Element) || !event.target.closest('.signal-select')) return;
    event.preventDefault(); const next = (selected + direction + markets.length) % markets.length; select(next);
    event.currentTarget.querySelectorAll<HTMLElement>('.signal-select')[next]?.focus({ preventScroll: true });
  }}>{markets.map((market, index) => <li key={market.id} className={`signal-row signal-${market.preset}`} data-id={market.id} data-org={market.orgSlug}>
    <button type="button" className="signal-select" aria-label={`${market.proposal} ${market.question.cond}`} aria-current={selected === index ? 'true' : undefined} tabIndex={selected === index ? 0 : -1} onFocus={() => select(index)} onClick={() => select(index)} onDoubleClick={() => { location.hash = `/m/${market.id}`; }} onKeyDown={event => { if (event.key === 'Enter') { event.preventDefault(); select(index); location.hash = `/m/${market.id}`; } }}>
    {selected === index && <motion.i className="selected-signal-bar" layoutId="signal-selection" transition={reduced ? { duration: 0 } : { type: 'spring', stiffness: 170, damping: 26 }} />}
    <Avatar avatar={market.token} size={32} /><span className="signal-row-title" title={`${market.proposal} · ${market.question.cond}`}>{market.proposal} · {market.question.cond}</span><MiniSpark market={market} /><LeanChip value={market.impact} /><span className="signal-impact"><SignalImpact market={market} /></span></button><button type="button" className="signal-chevron" aria-label="Open" onClick={event => { event.stopPropagation(); location.hash = `/m/${market.id}`; }}>›</button>
    {selected === index && !reduced && markets.length > 1 && <i key={market.id} className="signal-progress" style={{ animationPlayState: paused ? 'paused' : 'running' }} />}
  </li>)}</ul></div>;
}

function SignalImpact({ market }: { market: ActiveMilestone }) {
  const point = useSignalPoint(market);
  return <>{point.impact >= 0 ? '+' : ''}{(point.impact * 100).toFixed(2)}%</>;
}
