import { compactUsd } from '../format';
import { Tooltip } from './Tooltip';
import { Avatar } from './Avatar';
import { verdict } from '../math/twap';
import { useEffect, useState } from 'react';
import { type Milestone, type ActiveMilestone } from '../data/milestones';
import { RollingNumber } from './RollingNumber';
export function DetailHeading({ impact, market, onLiquidity }: { onLiquidity: () => void; impact: number; market: Milestone | ActiveMilestone }) {
  const [now, setNow] = useState(Date.now);
  useEffect(() => { const timer = window.setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(timer); }, []);
  const minutes = Math.max(0, Math.floor((('endTimestamp' in market ? market.endTimestamp : now) - now) / 60000));
  const stats = [
    { label: 'Impact (spot)', value: <RollingNumber value={impact * 100} decimals={2} signed suffix="%" flash className={`verdict-${verdict(impact).toLowerCase()}`} /> },
    { label: 'Status', value: <><span className="chip status-chip">{market.status}</span>{'outcome' in market && market.outcome && <span className={`chip outcome-chip verdict-${market.outcome === 'NO' ? 'exclude' : 'include'}`}>Outcome {market.outcome}</span>}</> },
    { label: 'Volume (Total; USDS)', value: 'volume' in market ? compactUsd(market.volume) : '-' }, { label: 'TVL', value: 'tvl' in market ? compactUsd(market.tvl) : '-' },
    { label: 'Remaining Time', value: <><RollingNumber value={Math.floor(minutes / 1440)} decimals={0} suffix="d " /><RollingNumber value={Math.floor(minutes / 60) % 24} decimals={0} suffix="h " /><RollingNumber value={minutes % 60} decimals={0} suffix="m" /></> },
  ];
  return <header data-align data-avatar={market.token} className="detail-heading"><Avatar avatar={market.token} size={44} chain={market.chain} /><h1 style={{ viewTransitionName: 'milestone-question' }}>{market.question.pre}<span>{market.question.cond}</span></h1><div className="detail-summary"><dl>{stats.map((stat, i) => <Tooltip key={stat.label} text={stat.label === 'Remaining Time' ? 'Time until the market closes' : stat.label === 'Impact (spot)' ? 'YES vs NO gap' : stat.label}><div tabIndex={0}><dt><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" aria-hidden="true">{i === 0 ? <path d="M2 13 7 8V3m0 5 6-5" /> : i === 4 ? <><circle cx="8" cy="8" r="6" /><path d="M8 4v4l3 2" /></> : <><path d="M3 13V8m5 5V3m5 10V6" /></>}</svg>{stat.label}</dt><dd>{stat.value}</dd></div></Tooltip>)}</dl><div className="detail-actions"><a className="button btn-bubbles button-secondary" href="https://reality.eth.limo" target="_blank" rel="noopener noreferrer">Resolve Question <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" aria-hidden="true"><path d="M6 3H3v10h10v-3M8 2h6v6M7 9l7-7" /></svg></a><button className="button btn-bubbles button-secondary" type="button" disabled={market.status !== 'Active'} onClick={onLiquidity}>Add Liquidity</button></div></div></header>;
}
