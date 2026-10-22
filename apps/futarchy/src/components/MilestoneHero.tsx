import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'motion/react';
import type { ActiveMilestone } from '../data/milestones';
import { Avatar } from './Avatar';
import { MarketSignal } from './MarketSignal';
import { GlyphStrip } from './GlyphStrip';
import { LeanChip } from './Chips';
import { SignalList } from './SignalList';
export function MilestoneHero({ markets }: { markets: ActiveMilestone[] }) {
  const [selected, setSelected] = useState(0), [hovered, setHovered] = useState(false), [focused, setFocused] = useState(false);
  const reduced = useReducedMotion(), chips = useRef<HTMLDivElement>(null), elapsed = useRef(0), holdUntil = useRef(0);
  const index = selected % markets.length, market = markets[index], paused = hovered || focused;
  const select = (next: number) => { elapsed.current = 0; holdUntil.current = performance.now() + 12000; setSelected(next); };
  useEffect(() => {
    if (paused || reduced || markets.length < 2) return;
    let last = performance.now();
    const timer = window.setInterval(() => {
      const now = performance.now();
      if (now >= holdUntil.current && !document.querySelector('[data-touring]') && !document.hidden) elapsed.current += now - last;
      last = now;
      if (elapsed.current >= 8000) { elapsed.current = 0; setSelected(i => (i + 1) % markets.length); }
    }, 100);
    return () => clearInterval(timer);
  }, [paused, reduced, markets.length]);
  useEffect(() => {
    const chip = chips.current?.querySelector<HTMLElement>('[aria-selected="true"]');
    if (chip && chips.current) chips.current.scrollTo({ left: chip.offsetLeft, behavior: reduced ? 'instant' : 'smooth' });
    const row = document.querySelector<HTMLElement>('.signal-row[aria-selected="true"]'), list = row?.parentElement;
    if (row && list) {
      if (innerWidth < 1000) list.scrollTo({ left: row.offsetLeft, behavior: reduced ? 'instant' : 'smooth' });
      else if (row.offsetTop < list.scrollTop || row.offsetTop + row.offsetHeight > list.scrollTop + list.clientHeight) list.scrollTo({ top: row.offsetTop, behavior: reduced ? 'instant' : 'smooth' });
    }
  }, [index, reduced]);
  return <section data-align className={`live-board-hero${markets.length === 1 ? ' signal-single' : ''}`} aria-label="Live signal board">
    <div className="hero-header"><div className="hero-ask"><h1>What happens to the token if a proposal passes?</h1><p className="hero-explainer">Two markets price the token: one if the proposal passes, one if it fails. The DAO still votes.</p></div><div className="hero-summary">{(['Active', 'Include', 'Exclude'] as const).map(label => <span key={label}><i className={`lean-dot dot-${label.toLowerCase()}`} />{label === 'Active' ? markets.length : markets.filter(m => m.preset === label.toLowerCase()).length} {label}</span>)}</div><div className="hero-actions"><a className="button btn-bubbles button-primary" href="#/create">Create market</a></div></div>
    <dl className="asker-strip"><div><dt>Asked by</dt><dd>Gnosis DAO</dd></div><div><dt>Priced</dt><dd>What happens to GNO if GIP-154 passes vs fails</dd></div><div><dt>How to use</dt><dd>Read the gap between the pass and fail prices; the DAO still votes.</dd></div></dl>
    <div className="signal-board-grid" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={() => setFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
      <SignalList markets={markets} selected={index} select={select} paused={paused} />
      {markets.length > 1 && <div className="board-switcher"><button className="icon-button" aria-label="Previous milestone" onClick={() => select((index - 1 + markets.length) % markets.length)}>‹</button><div ref={chips} className="board-chips" role="tablist" aria-label="Milestones" onKeyDown={event => {
        if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
        event.preventDefault(); const next = (index + (event.key === 'ArrowRight' ? 1 : -1) + markets.length) % markets.length; select(next); chips.current?.querySelectorAll('button')[next]?.focus();
      }}>{markets.map((m, i) => <button key={m.id} className="chip" role="tab" aria-selected={i === index} tabIndex={i === index ? 0 : -1} aria-controls="board-signal" onClick={() => select(i)}><Avatar avatar={m.token} size={20} />{m.proposal}<i className={`lean-dot dot-${m.preset}`} /></button>)}</div><button className="icon-button" aria-label="Next milestone" onClick={() => select((index + 1) % markets.length)}>›</button></div>}
      <div className="card live-board" data-tour="board"><div className="board-question"><span className="board-avatar"><Avatar avatar={market.token} size={32} /></span><span>{market.token} · {market.proposal}</span><h2>{market.question.cond}</h2><LeanChip value={market.impact} /><a className="button btn-bubbles button-secondary board-open" href={`#/m/${market.id}`}>Open <span aria-hidden="true">›</span></a></div><div id="board-signal" key={market.id} aria-label={market.proposal}><MarketSignal market={market} board /></div></div>
    </div><GlyphStrip />
  </section>;
}
