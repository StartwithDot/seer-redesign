import { Tooltip } from './Tooltip';
import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { RollingNumber } from './RollingNumber';
import { verdict } from '../math/twap';
interface Props { value: number; locked?: boolean }
export function VerdictGauge({ value, locked = false }: Props) {
  const reduced = useReducedMotion(), previous = useRef(locked);
  const result = verdict(value), index = result === 'Exclude' ? 0 : result === 'Neutral' ? 1 : 2;
  useEffect(() => { if (locked && !previous.current && !reduced) navigator.vibrate?.(20); previous.current = locked; }, [locked, reduced]);
  return <Tooltip text="The five-day average price gap determines Include, Neutral or Exclude."><section tabIndex={0} data-tour="gauge" className={`card verdict-gauge verdict-${result.toLowerCase()}`} aria-label="5-day TWAP">
    <div className="gauge-heading"><span>5-day TWAP</span><span><span className="gauge-value"><RollingNumber value={value * 100} decimals={3} signed suffix="%" flash /></span>{locked && <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor"><path d="M5 7V5a3 3 0 0 1 6 0v2M4 7h8v7H4Z" /></svg>}</span></div>
    <div className="gauge-track"><span className="gauge-band" />{[-1, 1].map(n => <span key={n} className="gauge-tick" style={{ left: `${(n + 3) / 6 * 100}%` }}>{n > 0 ? '+' : ''}{n} %</span>)}<motion.span className="gauge-needle" animate={{ left: `${Math.max(0, Math.min(100, (value + .03) / .06 * 100))}%` }} transition={locked || reduced ? { duration: 0 } : { type: 'spring', stiffness: 170, damping: 26 }} /></div>
    <div className="verdict-options"><motion.span className="verdict-thumb" animate={{ x: `${index * 100}%` }} transition={reduced ? { duration: 0 } : { type: 'spring', stiffness: 170, damping: 26 }} />{(['Exclude', 'Neutral', 'Include'] as const).map(label => <span key={label} aria-current={label === result}>{label}</span>)}</div>
  </section></Tooltip>;
}
