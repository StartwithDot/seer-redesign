import type { LeaderRow } from '../data/leaderboard';
import { Tooltip } from '../components/Tooltip';
import { TierPill } from './TierPill';
export function ScoreAnatomy({ row }: { row: LeaderRow }) {
 const detail = row.scoreBreakdown;
 if (!detail) return <Tooltip text={`${'scoreUnavailable' in row && row.scoreUnavailable ? row.scoreUnavailable.minScoredMarkets : 3} scored markets needed`}><span tabIndex={0}><TierPill tier={null} /></span></Tooltip>;
 return <div className="score-anatomy" tabIndex={0}><span>{row.score?.toFixed(1)}</span><TierPill tier={row.tier} /><div className="score-popover" role="tooltip">{([['returns','Returns'],['profitFactor','Profit factor'],['hitRate','Hit rate'],['lossBurn','Loss burn'],['breadth','Breadth']] as const).map(([key,label]) => <label key={key}>{label}<meter min="0" max="100" value={detail.components[key]} />{detail.components[key]}</label>)}<div>sampleShrink.factor <strong>{detail.sampleShrink.factor.toFixed(4)}</strong></div></div></div>;
}
