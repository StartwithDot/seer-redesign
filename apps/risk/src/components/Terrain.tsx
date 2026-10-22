import {useState} from 'react';
import {useEased} from '../anim';
import {assets,band,pct,quarter,survival,type Asset} from '../math/model';
import {useRisk} from '../store';
export function Terrain(){
 const s=useRisk();const [hover,setHover]=useState<Asset|null>(null);
 // Horizon eases over 420ms and the ridges rise from the floor on mount: y = floor - S * height * rise.
 const h=useEased(s.horizon,420),rise=useEased(1,420,0);
 const list=assets.filter(a=>s.selected.includes(a.id)).sort((a,b)=>a.m-b.m);
 const width=760,floor=340,height=195,x0=72,end=708,cw=(end-x0)/Math.max(1,list.length),step=Math.max(1,Math.ceil(24/cw));
 function ridge(t:number,d:number,user=false){let v=1;let path=`M ${x0-d*18} ${floor-d*22-height*rise}`;
 list.forEach((a,i)=>{const x=x0+i*cw-d*18;const y=floor-d*22-v*height*rise;v*= (1-(user?(s.estimates[a.id]??a.m):a.m))**t;const yn=floor-d*22-v*height*rise;path+=` L ${x+cw*.38} ${y} C ${x+cw*.62} ${y},${x+cw*.6} ${yn},${x+cw*.86} ${yn} L ${x+cw} ${yn}`});return {path:path+` L ${end-d*18} ${floor-d*22-v*height*rise}`,v};}
 const live=ridge(h/100,(100-h)/25);
 return <><svg viewBox={`0 0 ${width} 430`} className="terrain" role="img" aria-label="Survival terrain" onMouseLeave={()=>setHover(null)}>
 <defs><linearGradient id="ridge-fill" x2="0" y2="1"><stop stopColor="var(--text)" stopOpacity=".14"/><stop offset="1" stopColor="var(--text)" stopOpacity=".02"/></linearGradient></defs>
 {[.25,.5,.75,1].map(v=><g key={v}><path d={`M72 ${floor-height*v}H708`} className="grid-line"/><text x="62" y={floor-height*v+4} textAnchor="end">{v*100}%</text></g>)}
 {[3,2,1,0].map(d=>{const r=ridge(1-d*.25,d);return <g key={d}><path d={`${r.path} L${end-d*18} ${floor-d*22} L${x0-d*18} ${floor-d*22}Z`} fill="url(#ridge-fill)"/><path d={r.path} className="ghost-ridge"/></g>})}
 <path d={live.path} className="live-ridge"/>{s.edited.length>0&&<path d={ridge(h/100,(100-h)/25,true).path} className="user-ridge"/>}
 <circle cx={end-(100-h)/25*18} cy={floor-(100-h)/25*22-live.v*height*rise} r="9" fill="var(--lime)"/>
 {list.map((a,i)=><g key={a.id} tabIndex={0} role="button" aria-label={`${a.ticker}, ${pct(a.m)}, Details`} onFocus={()=>setHover(a)} onMouseEnter={()=>setHover(a)} onClick={()=>setHover(a)} onDoubleClick={()=>s.setDrawer(a)} onKeyDown={e=>{if(e.key==='Enter')s.setDrawer(a)}}><rect x={x0+i*cw} y="140" width={cw} height="205" fill={hover?.id===a.id?'var(--violet-soft)':'transparent'} opacity=".4"/>{(i%step===0||hover?.id===a.id)&&<text x={x0+i*cw+cw/2} y={hover?.id===a.id?396:i%step===0&&(i/step)%2===0?362:380} textAnchor="middle" fontSize="11" className={hover?.id===a.id?'tick on':'tick'}>{a.ticker}</text>}<rect x={x0+i*cw+1} y="410" width={Math.max(1,cw-2)} height="3" fill={`var(--b-${band(a.m)==='Low'?'low':band(a.m)==='Moderate'?'mod':band(a.m)==='High'?'high':'crit'})`}/></g>)}
 </svg><div className="band-legend">{['Low 0–2%','Moderate 2–5%','High 5–10%','Critical 10–100%'].map((b,i)=><span key={b} style={{color:`var(--bt-${["low","mod","high","crit"][i]},var(--b-${["low","mod","high","crit"][i]}))`}}>{b}</span>)}</div>
 {hover&&<div className="tip on terrain-tip" data-testid="hover-card" role="tooltip"><h4>{hover.ticker}<span>{hover.grade}</span></h4><dl><dt>PD (Ann.)</dt><dd>{pct(hover.m)}</dd><dt>PD (Quart.)</dt><dd>{pct(quarter(hover.m))}</dd><dt>Band</dt><dd>{band(hover.m)}</dd></dl></div>}
 <span className="sr">Selected survival {pct(survival(list.map(a=>a.m)))}</span></>;
}
