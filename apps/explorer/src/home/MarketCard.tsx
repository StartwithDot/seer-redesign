import { useEffect, useRef, useState } from 'react';
import type { Market } from '../data/types';
import { markets } from '../data/markets';
import { marketLink } from '../data/links';
import { format, address } from '../data/format';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { CardOutcomes, validOutcomes } from './CardOutcomes';
import { CardMarks } from './CardMarks';
import { CardDrawer } from './CardDrawer';
import { useDrawer } from './useDrawer';
import { Tooltip } from '../components/Tooltip';
import { QuickBuy } from './QuickBuy';
import type { BuySelection, OpenBuy } from './useQuickBuy';
export function MarketCard({ market: m, onBuy, animateLayout = false, selection, onCloseBuy }: { market: Market; onBuy: OpenBuy; animateLayout?: boolean; selection?: BuySelection | null; onCloseBuy?: () => void }) {
 const reduced = useReducedMotion();
 const host = useRef<HTMLElement>(null), drawer = useDrawer(m.id), [imageFailed, setImageFailed] = useState(false), [, refresh] = useState(0);
 useEffect(() => { const tick = () => refresh(n => n + 1); window.addEventListener('explorer:odds', tick); return () => window.removeEventListener('explorer:odds', tick); }, []);
 const parent = markets.find(p => p.id === m.parentId), condition = `Conditional on "${parent?.question ?? m.parentId}" being "${m.parentOutcomeName}"`, extra = validOutcomes(m).length - 2;
 return <motion.article layout={animateLayout ? "position" : false} layoutId={animateLayout ? m.id : undefined} transition={{ layout: { duration: reduced ? 0 : .28, ease: [.2, .8, .2, 1] } }} ref={host} className={`market-card ${drawer.open ? 'drawer-open' : ''}`} aria-label={m.question} data-market-id={m.id} data-layout={m.layout} onPointerEnter={e => { if (e.pointerType !== 'touch') drawer.enter(); }} onPointerLeave={e => { if (!e.currentTarget.contains(document.activeElement)) drawer.leave(); }} onFocus={e => { if (!e.currentTarget.contains(e.relatedTarget as Node) && (matchMedia('(hover: hover)').matches || e.target.matches(':focus-visible'))) drawer.show(); }} onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget as Node)) drawer.close(); }}>
 <div className="card-head"><span className="market-avatar">{m.image && !imageFailed ? <img src={m.image} alt="" loading="lazy" onError={() => setImageFailed(true)} /> : m.question.replace(/^(Will |What |Who )/i, '').slice(0, 1)}</span><div className="card-question"><a className="market-link" href={marketLink(m)}>{m.question}</a>{m.creator && <span className="card-asker" title={m.creator}>Asked by {address(m.creator)}</span>}</div></div>
 {m.conditional && <Tooltip text={condition}><p className="card-condition" tabIndex={0}>Conditional</p></Tooltip>}
 <CardOutcomes active={drawer.open && !selection} market={m} onBuy={onBuy} /><footer className="card-footer"><span className="card-volume">{format(m.volumeUSD)} vol{extra > 0 && <> · <a href={`${marketLink(m)}#outcomes`} onClick={e => e.stopPropagation()}>+{extra} more</a></>}</span><CardMarks id={m.id} verification={m.verification} details={drawer.pin} expanded={drawer.open} /></footer>
 {selection && onCloseBuy && <QuickBuy selection={selection} onClose={onCloseBuy} />}
 <AnimatePresence initial={false}>{drawer.open && !selection && <CardDrawer key="drawer" market={m} onEnter={drawer.enter} onLeave={drawer.leave} />}</AnimatePresence>
 </motion.article>;
}
