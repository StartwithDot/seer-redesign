import { useEffect, useState } from 'react';
import { leaderboard, leaderDefaults, type LeaderParams } from '../data/leaderboard';
import { navigate, type Route } from '../router';
import { Tooltip } from '../components/Tooltip';
import { LeaderControls } from './LeaderControls';
import { LeaderTable } from './LeaderTable';
import './leaderboard.css';
export function LeaderboardPage({route}:{route:Route}) {
 const params:LeaderParams={...leaderDefaults,...Object.fromEntries(route.params),offset:Math.max(0,(Number(route.params.get('page')??1)-1)*25)};
 const [updating,setUpdating]=useState(false),[retry,setRetry]=useState(0),[info,setInfo]=useState(false),[rank,setRank]=useState('');
 const key=route.params.toString();
 useEffect(()=>{setUpdating(true);const timer=setTimeout(()=>setUpdating(false),320);return()=>clearTimeout(timer);},[key,retry]);
 useEffect(()=>{if(rank!=='Finding your rank…')return;const timer=setTimeout(()=>setRank('—'),600);return()=>clearTimeout(timer);},[rank]);
 const change=(next:Partial<LeaderParams>)=>{const p=new URLSearchParams(route.params);p.delete('page');Object.entries(next).forEach(([k,v])=>p.set(k,String(v)));navigate('/leaderboard',p);};
 const result=leaderboard(params), data=result.data;
 const page=params.offset/25+1;
 return <section className="leaderboard-page" data-align><div className="leader-title"><h1>Profit &amp; Loss Leaderboard</h1><button className="icon-button" aria-label="Trader Score" aria-expanded={info} onClick={()=>setInfo(!info)}>ⓘ</button>{info&&<aside className="score-explanation">Trader Score rates each wallet 0–100 on returns, profit factor, hit rate edge, loss burn and breadth across the markets it traded, shrunk toward the middle when it traded few of them. <a href="https://docs.seer.pm/app/leaderboard" target="_blank" rel="noreferrer">How it works ↗</a></aside>}</div><LeaderControls key={params.q} params={params} change={change} onRank={()=>setRank('Finding your rank…')}/>{rank&&<div className="rank-result"><span>Your Rank</span><Tooltip text="No accounts found"><span tabIndex={0}>{rank}</span></Tooltip></div>}{updating?<div className="leader-loading" aria-busy="true">Updating…{Array.from({length:8},(_,i)=><div key={i}/>)}</div>:data?<><LeaderTable rows={data.rows} params={params} onSort={sort=>change({sort,dir:params.sort===sort&&params.dir==='desc'?'asc':'desc'})}/>{data.rows.length===0&&<div className="empty-leaders"><p>No accounts found</p><button className="button" onClick={()=>change({q:''})}>Clear search</button></div>}</>:<div className="plate"><h2>Not in sample data</h2><button className="button" onClick={()=>setRetry(n=>n+1)}>Retry</button></div>}<footer className="leader-footer"><span>Sorted by {({pnl:'Profit/Loss',score:'Score',volume:'Volume',roi:'ROI',marketCount:'Traded Markets'} as Record<string,string>)[params.sort]}, {params.dir==='asc'?'low to high':'high to low'}</span><span>Page {page} of {data?.pages??'—'}</span><button className="button" disabled={page===1} onClick={()=>{const p=new URLSearchParams(route.params);p.set('page',String(page-1));navigate('/leaderboard',p);}}>Previous</button><button className="button" disabled={!data||page>=data.pages} onClick={()=>{const p=new URLSearchParams(route.params);p.set('page',String(page+1));navigate('/leaderboard',p);}}>Next</button>{data&&<span>Updated {new Date(data.updatedAt).toLocaleString('en-US',{timeZone:'UTC',year:'numeric',month:'2-digit',day:'2-digit',hour:'numeric',minute:'2-digit'})}</span>}</footer></section>;
}
