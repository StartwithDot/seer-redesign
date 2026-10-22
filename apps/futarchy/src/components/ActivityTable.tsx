import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Segmented } from './Segmented';
import { HoverMenu } from './HoverMenu';
import { ForkMark } from './ForkMark';
interface Pair { id: number; time: number; amount: number; price: number }
const epoch = Date.UTC(2026, 9, 17, 12);
function pair(id: number): Pair { return { id, time: epoch + id * 6000, amount: 80 + ((id * 7919 + 24935) % 60000) / 100, price: 2430 + Math.sin(id * 1.7) * 1.8 }; }
function date(time: number) { const d = new Date(time); return `${String(d.getUTCMonth() + 1).padStart(2, '0')}/${String(d.getUTCDate()).padStart(2, '0')} ${String(d.getUTCHours()).padStart(2, '0')}:${String(d.getUTCMinutes()).padStart(2, '0')}`; }
export function ActivityTable({ historical = false }: { historical?: boolean }) {
  const scroller = useRef<HTMLDivElement>(null);
  const anchor = useRef<{ top: number; height: number } | null>(null);
  const [tab, setTab] = useState('activity'), [limit, setLimit] = useState(30);
  const [pairs, setPairs] = useState(() => Array.from({ length: 45 }, (_, i) => pair(44 - i)));
  const [fresh, setFresh] = useState(-1), [loading, setLoading] = useState(true);
  const sequence = useRef(45), reduced = useReducedMotion();
  useEffect(() => { const timer = window.setTimeout(() => setLoading(false), 400); return () => clearTimeout(timer); }, []);
  useEffect(() => {
    if (reduced || historical) return;
    const timer = window.setInterval(() => { if (document.hidden) return; const element = scroller.current; if (element && element.scrollTop > 0) anchor.current = { top: element.scrollTop, height: element.scrollHeight }; const next = pair(sequence.current++); window.dispatchEvent(new Event('futarchy:activity')); setFresh(next.id); setPairs(previous => [next, ...previous].slice(0, 45)); }, 6000);
    return () => clearInterval(timer);
  }, [reduced, historical]);
  useLayoutEffect(() => { const element = scroller.current, saved = anchor.current; if (element && saved) element.scrollTop = saved.top; anchor.current = null; }, [pairs]);
  return <section data-tour="activity" data-align className="card activity-section" aria-label="Recent Activity">
    <div className="activity-heading"><Segmented label="Recent Activity" variant="underline" value={tab} onChange={setTab} options={[{ value: 'activity', label: `Recent Activity · ${limit}` }, { value: 'trades', label: 'My Trades' }, { value: 'position', label: 'Position' }]} />
      <span className="activity-count">{tab === 'activity' ? limit : 0} trades</span>
      {tab === 'activity' && <HoverMenu label={`Last ${limit} trades`} options={[30, 60, 90].map(n => ({ value: String(n), label: `Last ${n} trades` }))} selected={[String(limit)]} onChange={values => setLimit(Number(values[0]))} />}</div>
    {tab !== 'activity' ? <div className="activity-empty"><ForkMark size={44} /><span>No trades</span></div> : <div ref={scroller} tabIndex={0} aria-label="Recent Activity" className={`activity-table${loading ? ' skeleton is-loading' : ''}`} aria-busy={loading}><table><thead><tr><th>Outcome</th><th>Amount</th><th>Price</th><th>Date</th></tr></thead><tbody>
      {pairs.slice(0, limit / 2).flatMap(p => (['YES', 'NO'] as const).map(outcome => <motion.tr layout={reduced ? false : 'position'} transition={{ duration: reduced || anchor.current ? 0 : .42, ease: [.2, .8, .2, 1] }} key={`${p.id}-${outcome}`} className={p.id === fresh ? 'trade-fresh' : ''}>
        <td data-label="Outcome"><span className={`chip ${outcome === 'YES' ? 'outcome-chip' : ''}`}>{outcome}</span><span>{p.id % 3 === 0 ? 'Sell' : 'Buy'}</span></td>
        <td data-label="Amount"><span>{p.amount.toFixed(2)} USDS → {(p.amount / p.price).toFixed(4)} WETH</span></td>
        <td data-label="Price">{p.price.toFixed(2)}</td><td data-label="Date">{date(p.time)}</td>
      </motion.tr>))}
    </tbody></table></div>}
  </section>;
}
