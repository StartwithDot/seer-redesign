import { useState } from 'react';
import type { Market } from '../data/types';
import { markets } from '../data/markets';
import { marketLink, reality } from '../data/links';
export function RelatedTab({market:m}:{market:Market}){const[search,setSearch]=useState('');const rows=markets.filter(p=>p.parentId===m.id&&`${p.question} ${p.parentOutcomeName}`.toLowerCase().includes(search.toLowerCase()));return <div><label className="outcome-search">Search by outcome:<input value={search} onChange={e=>setSearch(e.target.value)}/></label>{rows.map(p=><div className="related-row" key={p.id}><span className="market-status">{p.statusLabel}</span><a href={marketLink(p)}><strong>{p.question}</strong><span>Conditional on "{m.question}" being "{p.parentOutcomeName}"</span></a>{reality(p)&&<a href={reality(p)!} target="_blank" rel="noreferrer">Answer on Reality.eth!</a>}</div>)}</div>;}
