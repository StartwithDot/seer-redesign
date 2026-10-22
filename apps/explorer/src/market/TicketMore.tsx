import { useState } from 'react';
import { Segmented } from '../components/Segmented';
import { balance, sign, useWallet } from '../data/wallet';
import type { Market } from '../data/types';
export type TicketMode='Trade'|'Mint'|'Merge'|'Redeem';
export function TicketMore({market:m,mode,onMode}:{market:Market;mode:TicketMode;onMode:(mode:TicketMode)=>void}){
 const [open,setOpen]=useState(mode!=='Trade'),[amount,setAmount]=useState(''),[operation,setOperation]=useState<Exclude<TicketMode,'Trade'>>('Mint'),[unit,setUnit]=useState(m.collateralSymbol),[pending,setPending]=useState(false),[error,setError]=useState('');const wallet=useWallet(),active=mode==='Trade'?operation:mode;
 const funds=wallet.connected&&active==='Mint'?balance(unit):0,value=Number(amount.replace(',','.'))||0,disabled=pending||value<=0||value>funds;
 const submit=async()=>{if(disabled)return;setPending(true);try{await sign();}catch{setError('User rejected the request.');}finally{setPending(false);}};
 return <div className="ticket-more">{mode==='Trade'&&<button className="button" aria-expanded={open} onClick={()=>setOpen(!open)}>More</button>}{(open||mode!=='Trade')&&<><Segmented label="More" value={active} options={(['Mint','Merge','Redeem'] as const).map(value=>({value,label:value}))} onChange={value=>{setOperation(value);if(mode!=='Trade')onMode(value);}}/><label>Amount<input aria-label="Amount" inputMode="decimal" value={amount} onChange={e=>{if(/^\d*(?:[.,]\d{0,6})?$/.test(e.target.value))setAmount(e.target.value);}}/></label><div>Balance: {funds} {unit}</div><select aria-label="Collateral" value={unit} onChange={e=>setUnit(e.target.value)}><option>{m.collateralSymbol}</option>{!m.conditional&&m.collateralSymbol!=='xDAI'&&<option>xDAI</option>}</select><button className="button primary" disabled={disabled} aria-describedby={disabled?'more-balance':undefined} onClick={()=>void submit()}>{pending?'Signing in...':active}</button>{disabled&&<span id="more-balance" className="ticket-note">Not enough balance.</span>}{error&&<p role="alert" className="trade-error">{error}</p>}</>}</div>;
}
