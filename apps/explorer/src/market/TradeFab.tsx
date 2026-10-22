import { useState } from 'react';
import type { Market } from '../data/types';
import { Sheet } from '../components/Sheet';
import { Segmented } from '../components/Segmented';
import { Ticket } from './Ticket';
import type { TicketMode } from './TicketMore';
export function TradeFab({market,selected,onSelect}:{market:Market;selected:number;onSelect:(i:number)=>void}){const[open,setOpen]=useState(false),[mode,setMode]=useState<TicketMode>('Trade');return <div className="market-mobile-trade"><button className="button primary trade-fab" aria-haspopup="dialog" onClick={()=>setOpen(true)}>Trade</button>{open&&<Sheet label="Trade" onClose={()=>setOpen(false)}><header className="trade-sheet-header"><Segmented label="Trade" value={mode} options={(['Trade','Mint','Merge','Redeem'] as const).map(value=>({value,label:value}))} onChange={setMode}/><button className="icon-button" aria-label="Close" onClick={()=>setOpen(false)}>×</button></header><Ticket market={market} selected={selected} onSelect={onSelect} mode={mode} onMode={setMode}/></Sheet>}</div>;}
