import { useState } from 'react';
import type { Market } from '../data/types';
import { OutcomeRow } from './OutcomeRow';
import { ActionStrip } from './ActionStrip';
import { PoolDetails } from './PoolDetails';
export function Outcomes({market:m,selected,onSelect,onHover,onLiquidity}:{market:Market;selected:number;onSelect:(n:number)=>void;onHover:(n:number|null)=>void;onLiquidity:(n:number)=>void}) {
 const [all,setAll]=useState(false),[search,setSearch]=useState(''),[pool,setPool]=useState<number|null>(null);
 const indices=m.outcomes.map((_,i)=>i).filter(i=>m.outcomes[i].toLowerCase().includes(search.toLowerCase()));
 return <section className="market-card market-outcomes"><h2>Outcomes</h2>{m.outcomes.length>8&&<label className="outcome-search">Search by outcome:<input value={search} onChange={e=>setSearch(e.target.value)}/></label>}<div className={all?'outcomes-scroll':''} role="radiogroup" aria-label="Outcomes" onKeyDown={e=>{if(['ArrowDown','ArrowUp'].includes(e.key)){e.preventDefault();const next=(selected+(e.key==='ArrowDown'?1:-1)+m.outcomes.length)%m.outcomes.length;onSelect(next);e.currentTarget.querySelectorAll<HTMLButtonElement>('[role=radio]')[indices.indexOf(next)]?.focus();}}}>{indices.slice(0,all?undefined:8).map(i=><div key={i}><OutcomeRow market={m} index={i} selected={selected===i} onSelect={()=>onSelect(i)} onHover={onHover}/>{selected===i&&<><ActionStrip market={m} index={i} expanded={pool===i} onPool={()=>setPool(pool===i?null:i)} onLiquidity={()=>onLiquidity(i)}/>{pool===i&&<PoolDetails market={m} index={i}/>}</>}</div>)}</div>{!all&&indices.length>8&&<button className="button secondary" onClick={()=>setAll(true)}>Show all {m.outcomes.length}</button>}</section>;
}
