import { useState } from 'react';
import type { Verification } from '../data/types';
import { Tooltip } from '../components/Tooltip';
import { VerificationIcon, StarIcon } from '../components/Icons';
export const verificationText: Record<Verification, string> = { Verified: 'Verified market', 'Not Verified': "This market is unverified (it didn't go through the curation process)", Verifying: 'Verifying', Challenged: 'Challenged' };
export function CardMarks({ id, verification, details, expanded }: { id: string; verification: Verification; details: () => void; expanded: boolean }) {
 const [starred, setStarred] = useState(() => { try { return JSON.parse(localStorage.getItem('explorer.collection.default') ?? localStorage.getItem('explorer.collections') ?? '[]').includes(id) as boolean; } catch { return false; } });
 const toggle = () => { const next = !starred; setStarred(next); try { const ids = new Set<string>(JSON.parse(localStorage.getItem('explorer.collection.default') ?? localStorage.getItem('explorer.collections') ?? '[]')); if (next) ids.add(id); else ids.delete(id); localStorage.setItem('explorer.collection.default', JSON.stringify([...ids])); window.dispatchEvent(new Event('explorer:collection')); } catch { /* Storage is optional. */ } };
 return <div className="card-marks" onClick={e => e.stopPropagation()}>
 <Tooltip text={verificationText[verification]} pinOnClick><button className="card-mark" data-verification={verification} aria-label={verificationText[verification]}><VerificationIcon status={verification} /></button></Tooltip>
 <Tooltip text={starred ? 'Remove from collection' : 'Add to collection'}><button className="card-star" aria-label={starred ? 'Remove from collection' : 'Add to collection'} aria-pressed={starred} onClick={toggle}><StarIcon filled={starred} /></button></Tooltip>
 <button className="card-details" aria-label="Market details" aria-expanded={expanded} onClick={details}><svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.5" /></svg></button></div>;
}
