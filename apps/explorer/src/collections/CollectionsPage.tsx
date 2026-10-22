import { useEffect, useState } from 'react';
import { markets } from '../data/markets';
import { sign } from '../data/wallet';
import { MarketGrid } from '../home/MarketGrid';
import { useQuickBuy } from '../home/useQuickBuy';
import '../leaderboard/leaderboard.css';
export function CollectionsPage(){
 const [ids,setIds]=useState<string[]>([]),[status,setStatus]=useState(''); const buy=useQuickBuy();
 useEffect(()=>{const read=()=>{try{setIds(JSON.parse(localStorage.getItem('explorer.collection.default')??localStorage.getItem('explorer.collections')??'[]') as string[]);}catch{setIds([]);}};read();window.addEventListener('explorer:collection',read);window.addEventListener('storage',read);return()=>{window.removeEventListener('explorer:collection',read);window.removeEventListener('storage',read);};},[]);
 const rows=markets.filter(m=>ids.includes(m.id));
 return <section className="collections-page" data-align><h1>Default</h1><div className="collection-gate"><p>Sign in to view and manage your market collections</p><button className="button primary" disabled={status==='Signing in...'} onClick={async()=>{setStatus('Signing in...');try{await sign();}catch{setStatus('User rejected the request.');}}}>Sign in</button>{status&&<p role="status">{status}</p>}</div>{rows.length?<MarketGrid markets={rows} onBuy={buy.open} selection={buy.selection} onCloseBuy={buy.close}/>:<p>No markets in this collection.</p>}</section>;
}
