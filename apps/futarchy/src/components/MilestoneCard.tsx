import { useEffect, useState } from 'react';
import { useReducedMotion } from 'motion/react';
import type { ActiveMilestone } from '../data/milestones';
import { OrgChip } from './Chips';
import { TokenLogo } from './TokenLogo';
import { MarketSignal } from './MarketSignal';
export interface MilestoneCardProps { milestone: ActiveMilestone; loading?: boolean; wide?: boolean }
function CountdownChip({ end }: { end: number }) {
  const reduced = useReducedMotion();
  const [now, setNow] = useState(Date.now);
  useEffect(() => { if (reduced) return; const timer = window.setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(timer); }, [reduced]);
  const seconds = Math.max(0, Math.floor((end - now) / 1000));
  return <span className="chip countdown-chip" aria-label="Remaining Time">{Math.floor(seconds / 86400)}d {Math.floor(seconds / 3600) % 24}h {Math.floor(seconds / 60) % 60}m {seconds % 60}s</span>;
}
export function MilestoneCard({ milestone: m, loading = false, wide = false }: MilestoneCardProps) {
  return <a href={`#/m/${m.id}`} className={`card milestone-card${wide ? ' milestone-card--wide' : ''}${loading ? ' skeleton' : ''}`} aria-busy={loading} data-tour="milestone" data-avatar={m.token} data-org={m.orgSlug}>
    <div className="market-identity"><TokenLogo token={m.token} chain={m.chain} /><OrgChip slug={m.orgSlug} /><span className="chip">{m.chain}</span><CountdownChip end={m.endTimestamp} /></div>
    <h3>{m.question.pre}<span>{m.question.cond}</span></h3>
    <MarketSignal market={m} mini />
  </a>;
}
