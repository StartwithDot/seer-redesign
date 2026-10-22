import {useEffect,useRef,useState} from 'react';
import {assets,groups,names,glyphs,pct,quarter,position,band,type Group,type Asset} from '../math/model';
import {useRisk} from '../store';
// Survival S(t) = (1-PD)^t over the year, drawn on its own min..1 scale: y = (1 - S) / (1 - Smin), floored at 1% so near-zero PD stays flat.
function curve(m:number,w:number,h:number){const range=Math.max(.01,m);return Array.from({length:25},(_,i)=>`${i?'L':'M'}${(i/24*w).toFixed(1)},${(2+(1-(1-m)**(i/24))/range*(h-4)).toFixed(1)}`).join(' ')}
function Tile({a}:{a:Asset}){const s=useRisk();const ref=useRef<HTMLElement>(null);const [seen,setSeen]=useState(false);const [replay,setReplay]=useState(0);const selected=s.selected.includes(a.id);
 useEffect(()=>{const el=ref.current;if(!el||typeof IntersectionObserver==='undefined'){setSeen(true);return}const io=new IntersectionObserver(([e])=>{if(e.isIntersecting){setSeen(true);io.disconnect()}},{threshold:.4});io.observe(el);return()=>io.disconnect()},[]);
 const d=curve(a.m,64,44);
 return <article ref={ref} className="asset-tile" data-selected={selected} data-testid={`asset-tile-${a.id}`} onPointerEnter={()=>setReplay(n=>n+1)}>
  <button className="tile-main" aria-label={`${a.ticker} Credora details`} onClick={()=>s.setDrawer(a)}>
   <span className="t-top"><span className="t-tk"><i aria-hidden="true">{glyphs[a.group]}</i>{a.ticker}</span><span className="chip">{a.grade||'-'}</span></span>
   <span className="t-body"><span className="t-nums"><span className="t-cap">PD (Ann.)</span><b>{pct(a.m)}</b><span className="t-q">{pct(quarter(a.m))} (Quart.)</span></span>
    <svg viewBox="0 0 64 44" preserveAspectRatio="none" role="img" aria-label={`${a.ticker} survival curve`}><path d={`${d}L64 44H0Z`} className={seen?'spark-fill on':'spark-fill'} key={`f${replay}`}/><path d={d} pathLength="1" className={seen?'spark-line on':'spark-line'} key={`l${replay}`}/></svg></span>
   <span className="tile-gauge" role="img" aria-label={`${band(a.m)} risk on logarithmic scale`}><i style={{left:`${position(a.m)}%`}}/></span>
  </button>
  <button className="tile-select" aria-label={`${selected?'Deselect':'Select'} ${a.ticker}`} aria-pressed={selected} onClick={()=>s.toggle(a.id)}><svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="m3 8.5 3.2 3L13 4.5"/></svg></button>
 </article>}
export function Gallery(){const [filter,setFilter]=useState<Group>('all');const [sort,setSort]=useState('PD');const grades=['AAA','AA+','AA','AA−','AA-','A+','A','A-','BBB+','BBB','BBB-','BB+','BB','BB-','B+','B','B-','CCC','CC','C','D'];const rank=(g:string|null)=>{const i=grades.indexOf(g??'');return i<0?99:i};const list=assets.filter(a=>filter==='all'||a.group===filter).sort((a,b)=>sort==='Name'?a.ticker.localeCompare(b.ticker):sort==='Grade'?rank(a.grade)-rank(b.grade)||a.ticker.localeCompare(b.ticker):b.m-a.m);
 return <section id="assets" data-align data-testid="section-assets" className="gallery"><div className="gallery-head"><h2>Assets <span className="lbl">33</span></h2><div className="panel-filters">{groups.map(g=><button key={g} aria-pressed={filter===g} data-testid={`assets-filter-${g}`} onClick={()=>setFilter(g)}>{names[g]}</button>)}</div><select className="field" data-testid="assets-sort" aria-label="Sort assets" value={sort} onChange={e=>setSort(e.target.value)}>{['PD','Name','Grade'].map(v=><option key={v}>{v}</option>)}</select></div><div className="asset-grid">{list.map(a=><Tile key={a.id} a={a}/>)}</div></section>;
}
