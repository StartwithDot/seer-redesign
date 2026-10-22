import { useEffect, useRef } from 'react';
import { animate, motion, useMotionValue, useReducedMotion } from 'motion/react';
/** The boundary is p/100 of the track; the shove is clamped to its physical ends. */
export function TugBar({ probability, active }: { probability: number; active: boolean }) {
 const track = useRef<HTMLDivElement>(null), previous = useRef(probability), boundary = useMotionValue(`${probability}%`), squash = useMotionValue(1), reduced = useReducedMotion();
 useEffect(() => {
  const old = previous.current; previous.current = probability;
  if (reduced) { boundary.set(`${probability}%`); squash.set(1); return; }
  const direction = probability === old ? (probability >= 50 ? 1 : -1) : Math.sign(probability - old);
  const shove = 600 / Math.max(1, track.current?.clientWidth ?? 200);
  let cancelled = false;
  const end = animate(squash, [1, .65, 1], { duration: .22, times: [0, .5, 1] });
  const push = animate(boundary, `${Math.max(0, Math.min(100, probability + direction * shove))}%`, { type: 'spring', stiffness: 420, damping: 38 });
  let settle: ReturnType<typeof animate> | undefined;
  void push.then(() => { if (!cancelled) settle = animate(boundary, `${probability}%`, { type: 'spring', stiffness: 420, damping: 38 }); });
  return () => { cancelled = true; push.stop(); settle?.stop(); end.stop(); };
 }, [probability, active, reduced, boundary, squash]);
 return <div className="tug-bar" ref={track} aria-hidden="true"><motion.div className="tug-yes" style={{ width: boundary }} /><motion.span className="tug-cap" style={{ left: boundary, scaleX: squash }} /></div>;
}
