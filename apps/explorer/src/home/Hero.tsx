import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { trending } from '../data/trending';
import { RollingNumber } from '../components/RollingNumber';
export function Hero({ buying }: { buying: boolean }) {
 const rows = useMemo(trending, []), [index, setIndex] = useState(0), [hover, setHover] = useState(false), [focus, setFocus] = useState(false), [resuming, setResuming] = useState(false), [manual, setManual] = useState(false);
 const reduced = useReducedMotion(), pause = hover || focus || buying, wasPaused = useRef(false);
 useEffect(() => { if (pause) { wasPaused.current = true; setResuming(true); return; } if (wasPaused.current) { const timer = setTimeout(() => setResuming(false), 600); return () => clearTimeout(timer); } }, [pause]);
 useEffect(() => { if (window.__explorerTest) window.__explorerTest.hero = { index, paused: pause || resuming || !!reduced }; }, [index, pause, resuming, reduced]);
 useEffect(() => { if (pause || resuming || reduced || rows.length < 2) return; const timer = setTimeout(() => { setManual(false); setIndex(i => (i + 1) % rows.length); }, 6000); return () => clearTimeout(timer); }, [index, pause, resuming, reduced, rows.length]);
 const m = rows[index];
 if (!m) return null;
 const scalar = m.layout === 'scalar', leading = m.leading;
 return <section className="trending-hero" role="region" aria-roledescription="carousel" aria-label="Trending" data-tour="hero" onClick={e => { if (!(e.target instanceof Element && e.target.closest('button,a'))) location.hash = `#/markets/${m.chainId}/${m.slug}`; }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onFocusCapture={() => setFocus(true)} onBlurCapture={e => { if (!e.currentTarget.contains(e.relatedTarget)) setFocus(false); }}>
 <span className="trending-label">Trending ·</span><div className="hero-window" aria-live={manual ? 'polite' : 'off'}><AnimatePresence initial={false} mode="wait"><motion.div className="hero-content" key={m.id} initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : -6 }} transition={{ duration: reduced ? 0 : .15, ease: [.2, .8, .2, 1] }}>
 <a className="hero-market" href={`#/markets/${m.chainId}/${m.slug}`}>{m.question}</a><span className="hero-separator">·</span><div className="hero-numeral"><strong>{scalar ? m.estimate === null ? '—' : <RollingNumber value={m.estimate} suffix={m.unit} /> : m.odds[leading] === null ? '—' : <RollingNumber value={m.odds[leading]!} decimals={1} suffix="%" />}</strong><span>{scalar ? 'Market estimate' : m.outcomes[leading]}</span></div>
 </motion.div></AnimatePresence></div><button className="hero-counter" aria-label={`Trending ${index + 1} of ${rows.length}`} onClick={() => { setManual(true); setIndex(i => (i + 1) % rows.length); }} onKeyDown={e => { if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) { e.preventDefault(); setManual(true); setIndex(e.key === 'Home' ? 0 : e.key === 'End' ? rows.length - 1 : (index + (e.key === 'ArrowLeft' ? -1 : 1) + rows.length) % rows.length); } }}>{index + 1} / {rows.length}</button></section>;
}
