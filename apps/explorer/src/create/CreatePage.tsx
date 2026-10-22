import { useState } from 'react';
import type { Route } from '../router';
import { navigate } from '../router';
import { markets } from '../data/markets';
import { useWallet } from '../data/wallet';
import { ConnectDialog } from '../components/ConnectDialog';
import { Tooltip } from '../components/Tooltip';
import '../leaderboard/leaderboard.css';
export function CreatePage({route}:{route:Route}){
 const wallet=useWallet(),parent=markets.find(m=>m.id===route.params.get('parent'));
 const [type,setType]=useState(parent?'Categorical':''),[connecting,setConnecting]=useState(false);
 const types=['Categorical','Scalar','Multi Categorical','Multi Scalar'];
 const examples=[markets.find(m=>m.question.includes('Knesset')),markets.find(m=>m.question.includes('BASEFEE')),markets.find(m=>m.templateId==='3'),markets.find(m=>m.question.includes('Hungar')&&m.type==='Multi Scalar')].map((m,i)=>m?.question??markets.find(m=>m.type===types[i])?.question??'');
 return <section className="create-page" data-align>{!wallet.connected?<div className="create-plate"><button className="button primary" onClick={()=>setConnecting(true)}>Connect</button></div>:route.params.get('step')==='2'?<div className="create-plate"><h1>Not in this build</h1><a className="button secondary" href="https://app.seer.pm/create-market" target="_blank" rel="noreferrer">Open in Seer app ↗</a></div>:<div className="create-form"><div className="step-dots"><i/><i/>1 of 2</div><h1>Type</h1>{parent&&<p>{parent.question}</p>}<fieldset aria-label="Type">{types.map((t,i)=><label className="type-option" key={t}><input type="radio" name="type" value={t} checked={type===t} onChange={()=>setType(t)}/><span><strong>{t}</strong><small>{examples[i]}</small></span></label>)}</fieldset><Tooltip text={type?'Next':'Choose a market type'}><span tabIndex={type?undefined:0}><button className="button primary" disabled={!type} aria-describedby={!type?'choose-type':undefined} onClick={()=>{const p=new URLSearchParams(route.params);p.set('step','2');navigate('/create-market',p);}}>Next</button></span></Tooltip><span id="choose-type" className="sr-only">Choose a market type</span></div>}<footer className="create-footer">SECURED BY KLEROS <a href="https://kleros.io/" target="_blank" rel="noreferrer">kleros.io ↗</a></footer>{connecting&&<ConnectDialog onClose={()=>setConnecting(false)}/>}</section>;
}
