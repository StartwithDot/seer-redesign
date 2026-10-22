import type { LeaderRow as Row } from '../data/leaderboard';
import { reverseLookup } from '../data/wallet';
import { Avatar } from '../components/Avatar';
import { Tooltip } from '../components/Tooltip';
import { ScoreAnatomy } from './ScoreAnatomy';
export const usd = (value: number) => `${value < 0 ? '−' : ''}$${Math.abs(value).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})}`;
export function LeaderRow({ row }: { row: Row }) {
 return <tr><td>{row.rank}</td><td><Tooltip text={row.address}><span className="leader-account" tabIndex={0}><Avatar name={row.address} />{row.username || reverseLookup(row.address)}</span></Tooltip></td><td><ScoreAnatomy row={row} /></td><td data-label="P/L">{usd(row.pnl)}</td><td data-label="Volume">{usd(row.volume)}</td><td data-label="ROI">{row.roi === null ? <Tooltip text="under $0.01 of capital"><span tabIndex={0}>N/A</span></Tooltip> : `${row.roi < 0 ? '−' : '+'}${Math.abs(row.roi*100).toFixed(2)}%`}</td><td data-label="Markets">{row.marketCount}</td></tr>;
}
