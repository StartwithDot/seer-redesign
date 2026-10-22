import type { ActiveMilestone } from '../data/milestones';
/** Seeded small price wiggles share a stem, then separate by the milestone's impact. */
export function MiniSpark({ market }: { market: ActiveMilestone }) {
  const gap = Math.max(-8, Math.min(8, market.impact * 400));
  const path = (side: number) => Array.from({ length: 17 }, (_, i) => {
    const y = 12 + Math.sin(i * 1.7 + market.seed) * 2 + (i > 5 ? (i - 5) / 11 * gap * side : 0);
    return `${i ? 'L' : 'M'}${i * 4},${y.toFixed(2)}`;
  }).join(' ');
  return <svg className="mini-spark" viewBox="0 0 64 24" width="64" height="24" fill="none" aria-hidden="true"><path d={path(-1)} stroke={market.preset === 'exclude' ? 'var(--signal-color)' : 'var(--text-3)'} strokeWidth="1.5" /><path d={path(1)} stroke={market.preset === 'exclude' ? 'var(--text-3)' : 'var(--signal-color)'} strokeWidth="1.5" /></svg>;
}
