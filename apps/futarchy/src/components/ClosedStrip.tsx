import { verdict } from '../math/twap';
import { useState } from 'react';
import { OrgChip } from './Chips';
import { closedMilestones, type Milestone } from '../data/milestones';
import { TokenLogo } from './TokenLogo';
export function MiniFork({ outcome }: { outcome?: 'YES' | 'NO' }) {
  return <svg className={`mini-fork${outcome ? '' : ' mini-fork--awaiting'}`} width="88" height="48" viewBox="0 0 88 48" fill="none" aria-hidden="true">
    <path d="M0 26h24" stroke="var(--text-3)" />
    {(['YES', 'NO'] as const).map(side => <path key={side} className={outcome === side ? 'winning-branch' : ''} d={side === 'YES' ? 'M24 26C44 26 44 8 64 8h24' : 'M24 26C44 26 44 40 64 40h24'} stroke={outcome === side ? (side === 'NO' ? 'var(--verdict-exclude)' : 'var(--verdict-include)') : 'var(--text-3)'} strokeWidth={outcome === side ? 2 : 1} pathLength="1" />)}
    {!outcome && <circle cx="24" cy="26" r="3" fill="var(--text-2)" />}
  </svg>;
}
export function ClosedStrip({ markets = closedMilestones }: { markets?: Milestone[] }) {
  const [expanded, setExpanded] = useState(false);
  return <section data-align className="closed-section" aria-labelledby="closed-title"><div className="section-heading"><h2 id="closed-title">Recently Closed <span className="section-count">{markets.length}</span></h2><button className="button" disabled={expanded || markets.length <= 8} onClick={() => setExpanded(true)}>Show more</button></div><div className="closed-strip">
    {(expanded ? markets : markets.slice(0, 8)).map(market => <a href={`#/m/${market.id}`} key={market.id} className="card closed-card" data-avatar={market.token} data-org={market.orgSlug}>
      <div className="market-identity"><TokenLogo token={market.token} chain={market.chain} /><OrgChip slug={market.orgSlug} /></div>
      <h3>{market.question.pre}<span>{market.question.cond}</span></h3>
      <div className="closed-status"><MiniFork outcome={market.outcome} /><span className={`chip${market.outcome ? ` outcome-chip verdict-${market.outcome === 'NO' ? 'exclude' : 'include'}` : ' status-chip'}`}>{market.status}{market.outcome && ` ${market.outcome}`}</span></div>
      <div className="closed-impact"><span>Impact</span><span className={`closed-impact-value verdict-${verdict(market.impact).toLowerCase()}`}>{market.status === 'Awaiting' ? '-' : `${market.impact >= 0 ? '+' : ''}${(market.impact * 100).toFixed(2)}%`}</span></div>
    </a>)}
  </div></section>;
}
