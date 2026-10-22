import source from './get-pnl-leaderboard.json';
import { fixture, unwrap } from './fixtures';
export type LeaderboardResponse = typeof source.data;
type CapturedRow = LeaderboardResponse['rows'][number];
export interface LeaderRow { rank: number; address: string; pnl: number; volume: number; roi: number | null; unit: string; marketCount: number; score: number | null; tier: string | null; scoreBreakdown?: NonNullable<CapturedRow['scoreBreakdown']>; scoreUnavailable?: CapturedRow['scoreUnavailable'] | null; username?: string; updatedAt: string }
export interface LeaderParams { period: string; app: string; chain: string; sort: string; dir: string; offset: number; q?: string }
export const leaderDefaults: LeaderParams = { period: 'all', app: 'all', chain: 'all', sort: 'pnl', dir: 'desc', offset: 0 };
export function leaderboard(params: LeaderParams = leaderDefaults) {
 const key = `lb-${params.period}-${params.app}-${params.chain}-${params.sort}-${params.dir}-${params.offset}`;
 const initial = params.period === 'all' && params.app === 'all' && params.chain === 'all' && params.sort === 'pnl' && params.dir === 'desc' && params.offset === 0;
 const data = initial ? source.data : unwrap(fixture<unknown>(key)) as LeaderboardResponse | null;
 if (!data?.rows) return { error: 'Not in sample data' as const, data: null };
 return { error: null, data: { ...data, pages: Math.ceil(data.total / 25), rows: (data.rows as LeaderRow[]).filter(r => !params.q || `${r.address} ${r.username??''}`.toLowerCase().includes(params.q.toLowerCase())).sort((a,b) => { const key = params.sort as 'pnl'|'score'|'volume'|'roi'|'marketCount'; const av=a[key],bv=b[key]; if(av==null)return bv==null?0:1;if(bv==null)return -1;return (av-bv)*(params.dir==='asc'?1:-1); }).map(r => ({ ...r,
  roiPercent: r.roi === null ? null : r.roi * 100, tierLabel: r.tier?.toUpperCase() ?? 'N/A', scoreUnavailable: 'scoreUnavailable' in r ? r.scoreUnavailable : null })) } };
}
