import { useState } from 'react';
import type { Market } from '../data/types';
import { marketActivity } from './marketActivity';
import { shares, address } from '../data/format';
import { useWallet } from '../data/wallet';
import { explorer } from '../data/links';
export function ActivityTab({market:m}:{market:Market}){const[mine,setMine]=useState(false),wallet=useWallet(),rows=marketActivity(m).filter(r=>!mine||(wallet.connected&&r.address.toLowerCase()===wallet.address.toLowerCase()));return <div><label className="my-activity">My activity <input type="checkbox" role="switch" checked={mine} onChange={e=>setMine(e.target.checked)}/></label>{rows.map((r,i)=><a className="activity-row" key={r.transactionHash+i} href={explorer(m.chainId,r.transactionHash,'tx')??undefined} target="_blank" rel="noreferrer"><span title={r.address}>{r.name===r.address?address(r.address):r.name}</span><span>{r.action}</span><strong>{shares(r.amount)} {r.outcome}</strong><time>{new Date(r.timestamp*1000).toLocaleString('en-US',{month:'short',day:'numeric',year:'numeric',hour:'2-digit',minute:'2-digit',hour12:false,timeZone:'UTC'}).replace(/, (\d\d:\d\d)$/, ' · $1')}</time></a>)}</div>;}
