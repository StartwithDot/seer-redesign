import { useState } from 'react';
import type { Route } from '../router';
import { navigate } from '../router';
import { findMarket } from '../data/markets';
import { Plate } from '../components/Plate';
import { Breadcrumb } from './Breadcrumb';
import { Banners } from './Banners';
import { HeaderCard } from './HeaderCard';
import { Chart } from './Chart';
import { Outcomes } from './Outcomes';
import { Ticket } from './Ticket';
import { TradeFab } from './TradeFab';
import { MajorEvents } from './MajorEvents';
import { IdsBlock } from './IdsBlock';
import { Tabs } from './Tabs';
import { ReportAnswerDialog } from './ReportAnswerDialog';
import { AddLiquidityDialog } from './AddLiquidityDialog';
import './market.css';
export function MarketPage({route}:{route:Route}){
 const m=findMarket(route.chainId!,route.slug!),[hover,setHover]=useState<number|null>(null),[report,setReport]=useState(false),[liquidity,setLiquidity]=useState<number|null>(null);
 if(!m)return <Plate title="Not in sample data"/>;
 const raw=Number(route.params.get('outcome')??m.leading),selected=Number.isInteger(raw)&&raw>=0&&raw<m.outcomes.length?raw:Math.max(0,m.leading),change=(key:string,value:string)=>{const params=new URLSearchParams(route.params);params.set(key,value);const top=window.scrollY;navigate(route.path,params,true);requestAnimationFrame(()=>window.scrollTo(0,top));};
 return <div className="market-page" data-align><Breadcrumb/><Banners market={m}/><HeaderCard market={m} onReport={()=>setReport(true)}/><div className="market-layout"><div className="market-main"><Chart market={m} isolate={hover??(route.params.has('outcome')?selected:null)} range={route.params.get('range')??'All'} onRange={s=>change('range',s)}/><Outcomes market={m} selected={selected} onSelect={i=>change('outcome',String(i))} onHover={setHover} onLiquidity={setLiquidity}/><MajorEvents marketId={m.id}/><IdsBlock market={m}/><Tabs market={m} value={route.params.get('tab')??'comments'} onChange={s=>change('tab',s)}/></div><aside className="market-ticket-column"><Ticket market={m} selected={selected} onSelect={i=>change('outcome',String(i))} /></aside></div><TradeFab market={m} selected={selected} onSelect={i=>change('outcome',String(i))}/>{report&&<ReportAnswerDialog market={m} onClose={()=>setReport(false)}/>} {liquidity!==null&&<AddLiquidityDialog market={m} index={liquidity} onClose={()=>setLiquidity(null)}/>}</div>;
}
