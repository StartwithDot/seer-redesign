import { Tooltip } from './Tooltip';
import { type ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import { useSpring } from 'motion/react';
import type { Series, SeriesPoint } from '../math/series';
import { appendTick, projectPoint } from '../math/forecast';
import { normal, mulberry32 } from '../math/rng';
import { SignalPulse, type PulseGeometry } from '../chart/pulse';
import { Field } from '../chart/field';
import { Segmented } from './Segmented';
import { drawFork } from './forkRenderer';
declare global { interface Window { __futarchyTest?: { setMomentum: (level: 'high' | 'low') => void } } }
export interface ForkChartProps { series: Series; nowIndex: number; mode: 'hero' | 'detail' | 'card' | 'mini'; header?: ReactNode; onHover?: (point: SeriesPoint | null) => void; onNowChange?: (time: number, series: Series) => void }
export function ForkChart({ series: source, nowIndex, mode, header, onHover, onNowChange }: ForkChartProps) {
  const [momentum, setMomentum] = useState<string | null>(() => new URLSearchParams(location.search).get('pulse'));
  useEffect(() => {
    if (!import.meta.env.DEV) return;
    const update = (event: Event) => setMomentum((event as CustomEvent<string>).detail);
    window.__futarchyTest = { setMomentum: level => window.dispatchEvent(new CustomEvent('futarchy:momentum', { detail: level === 'high' ? 'moving' : 'waiting' })) };
    window.addEventListener('futarchy:momentum', update);
    return () => window.removeEventListener('futarchy:momentum', update);
  }, []);
  // Deterministic motion fixtures exercise real displacement math, never override diagnostics.
  const series = useMemo(() => {
    const preset = momentum;
    if (preset !== 'moving' && preset !== 'waiting') return source;
    const current = source.points[nowIndex];
    const points = source.points.map(p => {
      const spot = current.spot * (1 + (preset === 'moving' ? .08 * (p.t - current.t) : 0));
      return { ...p, spot, yes: spot * 1.003, no: spot * .997, impact: 1.003 / .997 - 1 };
    });
    return { ...source, points };
  }, [source, nowIndex, momentum]);
  const [view, setView] = useState<'Chart' | 'Field'>(() => { try { return sessionStorage.getItem('futarchy.chart-view') === 'Field' ? 'Field' : 'Chart'; } catch { return 'Chart'; } });
  const pointer = useRef({ x: 0, y: 0, active: false }); const canvas = useRef<HTMLCanvasElement>(null), host = useRef<HTMLDivElement>(null);
  const [live, setLive] = useState(series), [now, setNow] = useState(series.points[nowIndex].t);
  const [endLabels, setEndLabels] = useState<{x: number; y: number; text: string}[]>([]);
  const [onscreen, setOnscreen] = useState(true);
  const [playing, setPlaying] = useState(false), [hover, setHover] = useState<SeriesPoint | null>(null);
  const [reduced, setReduced] = useState(() => matchMedia('(prefers-reduced-motion: reduce)').matches);
  useEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    const change = () => setReduced(media.matches);
    media.addEventListener('change', change); change();
    return () => media.removeEventListener('change', change);
  }, []);
  const visible = useRef(true), invalidateRef = useRef<() => void>(() => undefined);
  const random = useRef(normal(mulberry32(8363)));
  const smooth = useSpring(now, { stiffness: 170, damping: 26 });
  const state = useRef({ live, now, hover, mode }); state.current = { live, now, hover, mode };
  const change = (time: number) => setNow(Math.max(series.params.fork + 1, Math.min(series.params.T, time)));
  useEffect(() => { setLive(series); setNow(series.points[nowIndex].t); setPlaying(false); }, [series, nowIndex]);
  useEffect(() => { if (reduced) smooth.jump(now); else smooth.set(now); onNowChange?.(now, live); }, [now, live, smooth, reduced, onNowChange]);
  useEffect(() => {
    const element = canvas.current, container = host.current;
    if (!element || !container) return;
    element.__labels = [];
    const ctx = element.getContext('2d'); if (!ctx) return;
    const field = new Field();
    const pulse = new SignalPulse(); element.__pulse = pulse.diagnostics;
    const base = document.createElement('canvas'), baseCtx = base.getContext('2d'); base.__labels = [];
    if (!baseCtx) return;
    let geometry: PulseGeometry | undefined, initial = true, pointed = false, pendingTick = false;
    const activity = () => { if (mode === 'detail' && visible.current) { pendingTick = true; invalidateRef.current(); } };
    const enter = () => { pointed = true; invalidateRef.current(); };
    const leave = () => { pointed = false; };
    window.addEventListener('futarchy:activity', activity);
    container.addEventListener('pointerenter', enter); container.addEventListener('pointerleave', leave);
    let size = { width: container.clientWidth, height: container.clientHeight };
    let frame = 0, dirty = true, elapsed = 0, previous = performance.now();
    const redraw = (time: number) => {
      frame = 0;
      if (!visible.current) { previous = time; return; }
      const dt = Math.min(.05, (time - previous) / 1000); elapsed += time - previous; previous = time;
      if (mode === 'detail' && view === 'Field') {
        const w = size.width, h = size.height, dpr = Math.min(devicePixelRatio || 1, 2);
        if (element.width !== Math.round(w * dpr) || element.height !== Math.round(h * dpr)) { element.width = Math.round(w * dpr); element.height = Math.round(h * dpr); }
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        field.draw(ctx, w, h, state.current.live, smooth.get(), dt, media.matches, pointer.current);
        element.__labels = [];
        dirty = false;
        if (!media.matches) frame = requestAnimationFrame(redraw);
        return;
      }
      const reveal = media.matches ? 1 : 1 - Math.pow(1 - Math.min(1, elapsed / 900), 3);
      if (dirty || reveal < 1 || Math.abs(smooth.get() - state.current.now) > .0001) {
        const w = size.width, h = size.height, dpr = Math.min(devicePixelRatio || 1, 2);
        if (element.width !== Math.round(w * dpr) || element.height !== Math.round(h * dpr)) { element.width = Math.round(w * dpr); element.height = Math.round(h * dpr); }
        if (base.width !== element.width || base.height !== element.height) { base.width = element.width; base.height = element.height; }
        baseCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
        const start = mode === 'detail' ? series.params.t0 : series.params.fork - 1.5;
        const forkFraction = (series.params.fork - start) / (series.params.T - start);
        const forkStart = 900 * (1 - Math.cbrt(1 - forkFraction));
        const u = Math.max(0, (elapsed - forkStart) / 600) * 8;
        geometry = drawFork(baseCtx, w, h, { series: state.current.live, now: smooth.get(), hover: state.current.hover?.t ?? null, mode, reveal, separation: media.matches ? 1 : 1 - (1 + u) * Math.exp(-u) });
        if (geometry) { pulse.update(geometry, initial); initial = false; }
        element.__labels = base.__labels;
        const labels = (base.__labels ?? []).filter(label => /YES|NO|Yes|No/.test(label.text));
        setEndLabels(previous => JSON.stringify(previous) === JSON.stringify(labels.map(({x,y,text}) => ({x,y,text}))) ? previous : labels.map(({x,y,text}) => ({x,y,text}))); 
        dirty = false;
      }
      ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, element.width, element.height); ctx.drawImage(base, 0, 0);
      const dpr = Math.min(devicePixelRatio || 1, 2); ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (geometry) {
        if (pendingTick) { pulse.tick(geometry, media.matches, mode !== 'mini' || pointed); pendingTick = false; }
        ctx.save(); ctx.beginPath(); ctx.rect(0, 6, size.width, Math.max(0, size.height - 12)); ctx.clip();
        pulse.draw(ctx, geometry, dt, media.matches, mode !== 'mini' || pointed); ctx.restore();
        element.__pulse = pulse.diagnostics;
      }
      if (!media.matches || reveal < 1 || Math.abs(smooth.get() - state.current.now) > .0001) frame = requestAnimationFrame(redraw);
    };
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    const motionChange = () => {
      pulse.clear(); field.clear();
      ctx.clearRect(0, 0, element.width, element.height);
      invalidate();
    };
    media.addEventListener('change', motionChange);
    const invalidate = () => { dirty = true; if (!frame && visible.current) { previous = performance.now(); frame = requestAnimationFrame(redraw); } };
    invalidateRef.current = invalidate;
    const resize = new ResizeObserver(([entry]) => { size = { width: entry.contentRect.width, height: entry.contentRect.height }; invalidate(); }); resize.observe(container);
    const intersection = new IntersectionObserver(([entry]) => { visible.current = entry.isIntersecting; setOnscreen(entry.isIntersecting); if (entry.isIntersecting) invalidate(); }); intersection.observe(container);
    const mutation = new MutationObserver(invalidate); mutation.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    const unsubscribe = smooth.on('change', invalidate);
    let lastLive = state.current.live;
    const tickCheck = () => { if (lastLive !== state.current.live) { pendingTick = true; lastLive = state.current.live; } invalidate(); };
    invalidateRef.current = tickCheck;
    container.addEventListener('pointermove', invalidate); container.addEventListener('pointerleave', invalidate);
    invalidate();
    return () => { media.removeEventListener('change', motionChange); window.removeEventListener('futarchy:activity', activity); container.removeEventListener('pointerenter', enter); container.removeEventListener('pointerleave', leave); cancelAnimationFrame(frame); resize.disconnect(); intersection.disconnect(); mutation.disconnect(); unsubscribe(); container.removeEventListener('pointermove', invalidate); container.removeEventListener('pointerleave', invalidate); };
  }, [mode, reduced, series, smooth, view]);
  useEffect(() => { invalidateRef.current(); }, [live, hover]);
  useEffect(() => {
    if (!playing || reduced || !onscreen) return;
    let frame = 0, last = performance.now();
    const advance = (time: number) => { const dt = Math.min(.1, (time - last) / 1000); last = time; if (visible.current) setNow(n => Math.min(series.params.T, n + dt)); frame = requestAnimationFrame(advance); };
    frame = requestAnimationFrame(advance); return () => cancelAnimationFrame(frame);
  }, [playing, reduced, series, onscreen]);
  useEffect(() => { if (now >= series.params.T || reduced) setPlaying(false); }, [now, series, reduced]);
  useEffect(() => {
    if (mode === 'hero' || reduced || playing || Math.abs(now - state.current.live.params.now) > .000001) return;
    const timer = window.setInterval(() => {
      if (!visible.current) return;
      const next = appendTick(state.current.live, random.current);
      setLive(next); setNow(next.params.now);
    }, 2500);
    return () => clearInterval(timer);
  }, [mode, reduced, playing, now, series, smooth]);
  const toggle = () => { if (!reduced) { if (now >= series.params.T) change(series.params.fork + 1); setPlaying(p => !p); } };
  useEffect(() => {
    if (mode !== 'detail') return;
    const onKey = (event: KeyboardEvent) => {
      const target = event.target;
      if (document.querySelector('dialog[open]')) return;
      if (event.defaultPrevented || event.key !== ' ' || event.repeat || event.metaKey || event.ctrlKey || event.altKey ||
        (target instanceof HTMLElement && (target.isContentEditable || target.closest('button, input, select, textarea')))) return;
      event.preventDefault();
      if (!reduced) { if (now >= series.params.T) change(series.params.fork + 1); setPlaying(p => !p); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mode, reduced, now, series]);
  return <section className={`fork-chart fork-chart--${mode}`} aria-label="TWAP" tabIndex={mode === 'detail' ? 0 : undefined} onKeyDown={event => {
    if (event.target instanceof HTMLButtonElement || (event.target instanceof HTMLInputElement && event.key !== ' ')) return;
    if (event.key === ' ') { event.preventDefault(); toggle(); }
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); setPlaying(false); change(now + (event.key === 'ArrowRight' ? 1 : -1) / 48); }
  }}>
    {mode === 'detail' && <div className="chart-view-header">{header}<Segmented label="Chart view" options={[{ value: 'Chart', label: 'Chart' }, { value: 'Field', label: 'Field' }]} value={view} onChange={value => { setView(value); setHover(null); try { sessionStorage.setItem('futarchy.chart-view', value); } catch { /* Optional storage. */ } }} /></div>}
    <div data-tour={mode === 'detail' ? 'chart' : undefined} className="fork-canvas" ref={host} onPointerMove={event => {
      if (mode !== 'detail') return;
      if (view === 'Field') { const rect = event.currentTarget.getBoundingClientRect(); pointer.current = { x: event.clientX - rect.left, y: event.clientY - rect.top, active: true }; return; }
      const rect = event.currentTarget.getBoundingClientRect(), fraction = Math.max(0, Math.min(1, (event.clientX - rect.left - 64) / (rect.width - 88)));
      const t = series.params.t0 + fraction * (series.params.T - series.params.t0);
      const point = live.points.reduce((a, b) => Math.abs(b.t - t) < Math.abs(a.t - t) ? b : a);
      const current = live.points.reduce((a, b) => Math.abs(b.t - now) < Math.abs(a.t - now) ? b : a);
      const display = projectPoint(point, current, live); setHover(display); onHover?.(display);
    }} onPointerCancel={() => { pointer.current.active = false; }} onPointerUp={event => { if (event.pointerType !== 'mouse') pointer.current.active = false; }} onPointerDown={event => { if (view === 'Field') { const rect = event.currentTarget.getBoundingClientRect(); pointer.current = { x: event.clientX - rect.left, y: event.clientY - rect.top, active: true }; } }} onPointerLeave={() => { pointer.current.active = false; setHover(null); onHover?.(null); }}>
      {endLabels.map(label => <Tooltip key={label.text} text={/YES|Yes/.test(label.text) ? 'Price if the proposal passes' : 'Price if it fails'}><span tabIndex={0} role="img" className="chart-label-dot" aria-label={label.text} style={{ left: Math.max(0, label.x - 12), top: label.y - 2 }} /></Tooltip>)}
      <canvas data-label-mode={mode} ref={canvas} data-chart-view={mode === 'detail' ? view : 'Chart'} aria-label={mode === 'detail' && view === 'Field' ? 'Field · 5-day TWAP' : 'YES Price · NO Price · 5-day TWAP'} />
      {mode === 'detail' && view === 'Chart' && hover && <output data-overlay className="chart-tooltip" style={{ left: `${Math.max(8, Math.min(70, (hover.t - series.params.t0) / (series.params.T - series.params.t0) * 100))}%` }}>
        <span>{hover.t.toFixed(2)} d</span><span className="yes-value">{hover.yes.toFixed(2)} USDS</span><span>{hover.no.toFixed(2)} USDS</span><span>{(hover.impact * 100).toFixed(3)} %</span>
      </output>}
    </div>
    {mode === 'detail' && <div className="chart-controls"><button className="icon-button" type="button" disabled={!!reduced} onClick={toggle} aria-label={playing ? 'Pause' : 'Play'}><svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">{playing ? <path d="M4 3h3v10H4zm5 0h3v10H9z" /> : <path d="m5 3 8 5-8 5Z" />}</svg></button><input aria-label="Remaining Time" type="range" min={series.params.fork + 1} max={series.params.T} step="any" value={now} onChange={e => { setPlaying(false); change(Number(e.target.value)); }} /><output>{Math.abs(now) < .05 ? 'Now' : `${now > 0 ? '+' : ''}${now.toFixed(1)}d`}</output></div>}
  </section>;
}
