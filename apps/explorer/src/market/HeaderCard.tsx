import { Avatar } from '../components/Avatar';
import { VerificationIcon, StarIcon } from '../components/Icons';
import { Tooltip } from '../components/Tooltip';
import { useState } from 'react';
import type { Market } from '../data/types';
import { MetaRow } from './MetaRow';
import { MultiScalarQuestions } from './MultiScalarQuestions';
export function HeaderCard({ market: m, onReport }: { market: Market; onReport: () => void }) {
 const [star, setStar] = useState(() => {try{return (JSON.parse(localStorage.getItem('explorer.collections') || '[]') as string[]).includes(m.id);}catch{return false;}});
 const toggle = () => { try { const ids = JSON.parse(localStorage.getItem('explorer.collections') || '[]') as string[]; localStorage.setItem('explorer.collections', JSON.stringify(star ? ids.filter(id => id !== m.id) : [...ids,m.id])); setStar(!star); }catch{setStar(!star);} };
 return <section className={`market-header market-card status-${m.status === 'Closed' ? 'closed' : m.status === 'Reports not open yet' ? 'open' : 'resolving'}`} data-align><div className="market-header-top"><span className="market-status status-pill"><i />{m.statusLabel}</span><Tooltip text={m.verification === 'Verified' ? 'Verified market' : m.verification} pinOnClick><button className="icon-button market-verification" data-verification={m.verification} aria-label={m.verification}><VerificationIcon status={m.verification}/></button></Tooltip><button className="icon-button" aria-pressed={star} aria-label={star ? 'Remove from collection' : 'Add to collection'} onClick={toggle}><StarIcon filled={star}/></button></div><div className="market-heading"><Avatar name={m.question} src={m.image} size={56}/><div><h1 title={m.question}>{m.question}</h1><button className="market-link" onClick={onReport} aria-label="Answer on Reality.eth!">Answer on Reality.eth! <span aria-hidden="true">→</span></button></div></div><MetaRow market={m}/>{m.type === 'Scalar' && <div className="market-estimate"><span>Market Estimate</span><strong>{m.estimate?.toFixed(3)} {m.unit}</strong><span>Resolution opening at {new Date(m.resolutionTs*1000).toUTCString()}</span></div>}{m.type === 'Multi Scalar' && <MultiScalarQuestions market={m}/>}</section>;
}
