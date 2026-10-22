import type { LeaderRow as Row, LeaderParams } from '../data/leaderboard';
import { Tooltip } from '../components/Tooltip';
import { LeaderRow } from './LeaderRow';
export function LeaderTable({ rows, params, onSort }: { rows: Row[]; params: LeaderParams; onSort: (sort: string) => void }) {
 return <table className="leader-table"><thead><tr>{[['#',''],['Account',''],['Score','score'],['Profit/Loss','pnl'],['Volume','volume'],['ROI','roi'],['Traded Markets','marketCount']].map(([label,key]) => <th key={label} aria-sort={key && params.sort === key ? params.dir === 'asc' ? 'ascending' : 'descending' : undefined}>{key ? <button onClick={() => onSort(key)}>{label} {params.sort===key ? params.dir==='asc'?'↑':'↓':'↕'}</button> : label}{key==='score'&&<Tooltip text="Trader Score"><span tabIndex={0}>ⓘ</span></Tooltip>}</th>)}</tr></thead><tbody>{rows.map(row => <LeaderRow key={row.address} row={row} />)}</tbody></table>;
}
