import { useState } from 'react';
import type { Market } from '../data/types';
import { Dialog } from '../components/Dialog';
import { connect, sign, useWallet } from '../data/wallet';
export function ReportAnswerDialog({market:m,onClose}:{market:Market;onClose:()=>void}) {
 const [invalid,setInvalid]=useState(false),[answer,setAnswer]=useState('0'),[error,setError]=useState(''),[connecting,setConnecting]=useState(false),[pending,setPending]=useState(false);const wallet=useWallet();
 const submit=async()=>{if(!wallet.connected){setConnecting(true);return;}setPending(true);try{await sign();}catch{setError('User rejected the request.');}finally{setPending(false);}};
 return <Dialog title="Report Answer" onClose={onClose}><p>This market is not resolved yet. You can provide an answer to the Reality question by depositing a bond of 10 XDAI.</p><div className="answer-current">Current answer: Not answered yet</div><label><input type="radio" checked={!invalid} onChange={()=>setInvalid(false)}/>Choose an answer</label>{!invalid&&<select aria-label="Choose an answer" value={answer} onChange={e=>setAnswer(e.target.value)}>{m.outcomes.map((s,i)=><option key={i} value={i}>{s}</option>)}</select>}<label><input type="radio" checked={invalid} onChange={()=>setInvalid(true)}/>Mark this question invalid</label>{error&&<p role="alert" className="trade-error">{error}</p>}{connecting&&<button className="button" onClick={()=>{connect();setConnecting(false);}}>Mock wallet <span>0x0000…dEaD</span></button>}<footer><button className="button" onClick={onClose}>Return</button><button className="button primary" disabled={pending} onClick={()=>void submit()}>{pending?'Signing in...':'Answer'}</button></footer></Dialog>;
}
