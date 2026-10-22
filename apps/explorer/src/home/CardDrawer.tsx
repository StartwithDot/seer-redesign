import { useState, type ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import type { Market } from '../data/types';
import { markets } from '../data/markets';
import { explorer, kleros, marketLink, reality } from '../data/links';
import { format } from '../data/format';
import { DrawerPools } from './DrawerPools';
export function CardDrawer({ market: m, onEnter, onLeave }: { market: Market; onEnter: () => void; onLeave: () => void }) {
 const [pools, setPools] = useState(false), reduced = useReducedMotion();
 const parent = markets.find(p => p.id === m.parentId), realityUrl = reality(m);
 const ext = (url: string | null, text: string) => url ? <a href={url} target="_blank" rel="noopener">{text} ↗</a> : '—';
 const rows: [string, ReactNode][] = [
 ['Status', <span className={`drawer-status ${m.status === 'Closed' ? 'is-closed' : m.status === 'Reports not open yet' ? 'is-open' : ''}`}>{m.statusLabel}</span>],
 ['Liquidity', <button aria-label={`Open interest ${format(m.openInterestUSD)} and liquidity breakdown`} onClick={() => setPools(true)}>{format(m.liquidityUSD)} ›</button>],
 ['Type', m.type], ['Chain', ext(explorer(m.chainId, m.id), m.chainName)],
 ['Kleros', ext(kleros(m.verificationItemId), m.verification === 'Not Verified' ? 'Verify it' : m.verification)],
 ['Reality.eth', ext(realityUrl, 'Answer on Reality.eth!')], ...(m.rewards ? [['Rewards', 'Active'] as [string, ReactNode]] : []),
 ...(parent ? [['Parent', <a href={marketLink(parent)}>"{parent.question}" › {m.parentOutcomeName}</a>] as [string, ReactNode]] : []),
 ['Resolution', <span title="Resolution opening at">{new Date(m.openingTs * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' })}</span>],
 ];
 const body = pools ? <DrawerPools market={m} onBack={() => setPools(false)} /> : <dl className="drawer-rows">{rows.slice(0, 8).map(([label, value]) => <div key={label}><dt>{label}</dt><dd title={typeof value === 'string' ? value : undefined}>{value}</dd></div>)}</dl>;
 return <motion.div className="card-drawer" data-drawer initial={{ height: reduced ? 'auto' : 0, opacity: reduced ? 1 : 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0, marginTop: 0 }} transition={reduced ? { duration: 0 } : { type: 'spring', stiffness: 420, damping: 38 }} onPointerEnter={onEnter} onPointerLeave={onLeave} onClick={e => e.stopPropagation()}><div className="drawer-body">{body}</div></motion.div>;
}
