import { useState } from 'react';
import { HoverMenu } from './HoverMenu';
import { MOCK_ADDRESS } from '../data/wallet';
export function AccountMenu(){
 const [smart,setSmart]=useState(()=>localStorage.getItem('explorer.smart')==='true');
 return <HoverMenu label="0x0000…dEaD | 24.69 xDAI" selected={[]} options={['Account','Deposit','Portfolio','Market Collections','Trade Collateral'].map((label,i)=>({label,value:['#/account','#/deposit','#/portfolio','#/collections/default','#/trade-collateral'][i]}))} onChange={v=>{location.hash=v[0];}} header={<div className="account-copy"><code>0x0000…dEaD</code><button className="icon-button" aria-label="Copy address" onClick={()=>navigator.clipboard.writeText(MOCK_ADDRESS)}>⧉</button></div>} footer={<label className="smart-row">Use smart account<button role="switch" aria-checked={smart} aria-label="Use smart account" onClick={()=>{setSmart(!smart);localStorage.setItem('explorer.smart',String(!smart));}}><span/></button></label>}/>;
}
