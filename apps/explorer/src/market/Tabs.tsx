import { useRef } from 'react';
import { motion } from 'motion/react';
import type { Market } from '../data/types';
import { markets } from '../data/markets';
import { CommentsTab } from './CommentsTab';
import { RelatedTab } from './RelatedTab';
import { HoldersTab } from './HoldersTab';
import { ActivityTab } from './ActivityTab';
export function Tabs({market:m,value,onChange}:{market:Market;value:string;onChange:(s:string)=>void}){const ref=useRef<HTMLDivElement>(null),tabs=[['comments','Comments'],['related',`Related Conditional Markets (${markets.filter(p=>p.parentId===m.id).length})`],['holders','Top Holders'],['activity','Activity']],current=tabs.some(t=>t[0]===value)?value:'comments';return <section className="market-card market-tabs"><div ref={ref} role="tablist" aria-label="Market" onKeyDown={e=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;e.preventDefault();const index=tabs.findIndex(t=>t[0]===current),next=e.key==='Home'?0:e.key==='End'?tabs.length-1:(index+(e.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;onChange(tabs[next][0]);ref.current?.querySelectorAll<HTMLButtonElement>('[role=tab]')[next]?.focus();}}>{tabs.map(([key,label])=><button key={key} id={`tab-${key}`} role="tab" aria-selected={current===key} aria-controls={`panel-${key}`} tabIndex={current===key?0:-1} onClick={()=>onChange(key)}>{label}{current===key&&<motion.span className="market-tab-underline" layoutId="market-tab" transition={{duration:.14}}/>}</button>)}</div><div role="tabpanel" id={`panel-${current}`} aria-labelledby={`tab-${current}`} tabIndex={0}>{current==='comments'?<CommentsTab marketId={m.id}/>:current==='related'?<RelatedTab market={m}/>:current==='holders'?<HoldersTab market={m}/>:<ActivityTab market={m}/>}</div></section>;}
