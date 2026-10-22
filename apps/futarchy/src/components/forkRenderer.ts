import { chartColor, withAlpha } from '../chart/colors';
import type { PulseGeometry } from '../chart/pulse';
import { drawLabels, threadLabels, type ChartLabel } from '../chart/labels';
import { scaleLinear } from 'd3-scale';
import { line, area, curveMonotoneX } from 'd3-shape';
import { projectPoint, priceRadius } from '../math/forecast';
import { twapGap, twapCone } from '../math/twap';
import type { Series, SeriesPoint } from '../math/series';
export interface ChartFrame { series: Series; now: number; mode: 'hero' | 'detail' | 'card' | 'mini'; hover: number | null; reveal: number; separation: number }
export function drawFork(ctx: CanvasRenderingContext2D, w: number, h: number, f: ChartFrame) {
  const { series: s, now, mode, hover, reveal, separation } = f;
  const { t0, fork, T, kappa, theta, eta, sigma } = s.params;
  if (mode !== 'detail') {
    return drawBoard(ctx, w, h, f);
  }
  const detail = mode === 'detail', left = detail ? 64 : -8, right = w - (detail ? 24 : -8);
  const bottom = h - (detail ? 28 : 0);
  const gapHeight = Math.max(128, bottom * .22);
  const priceBottom = detail ? bottom - gapHeight - 16 : bottom;
  const color = chartColor;
  const violet = color('--violet'), grey = color('--text-2'), muted = color('--text-3'), rule = color('--line');
  const x = scaleLinear().domain([t0, T]).range([left, right]);
  const current = s.points.reduce((a, b) => Math.abs(b.t - now) < Math.abs(a.t - now) ? b : a);
  const data = s.points.map(p => projectPoint(p, current, s));
  const values = data.flatMap(p => [p.spot, p.yes, p.no, p.no * 1.01, p.no * .99,
    p.spot - priceRadius(p.spot, sigma, p.t - now), p.spot + priceRadius(p.spot, sigma, p.t - now)]);
  const y = scaleLinear().domain([Math.min(...values), Math.max(...values)]).nice(4).range([priceBottom - 24, 28]);
  const gapExtent = Math.max(.03, ...data.map(p => Math.abs(p.impact) * 1.15));
  const gy = scaleLinear().domain([-gapExtent, gapExtent]).nice(6).range([bottom - 8, priceBottom + 16]);
  const labels: ChartLabel[] = [];
  const label = (text: string, x: number, y: number) => labels.push({ text, x, y, color: String(ctx.fillStyle) });
  const crisp = (n: number) => Math.floor(n) + .5;
  const stroke = (path: string | null, c: string | CanvasGradient, width = 1, dash: number[] = []) => {
    if (!path) return; ctx.strokeStyle = c; ctx.lineWidth = width; ctx.setLineDash(dash); ctx.stroke(new Path2D(path)); ctx.setLineDash([]);
  };
  const fill = (path: string | null, c: string) => { if (path) { ctx.fillStyle = c; ctx.fill(new Path2D(path)); } };
  const vertical = (t: number, c: string) => { ctx.strokeStyle = c; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(crisp(x(t)), 16); ctx.lineTo(crisp(x(t)), bottom); ctx.stroke(); };
  const priceLine = (key: 'yes' | 'no' | 'spot') => line<SeriesPoint>().x(p => x(p.t)).y(p => y(p.spot + (p[key] - p.spot) * separation)).curve(curveMonotoneX);
  const polygon = area<SeriesPoint>().x(p => x(p.t)).curve(curveMonotoneX);
  const branch = data.filter(p => p.t >= fork), history = data.filter(p => p.t <= fork), past = branch.filter(p => p.t <= now), future = branch.filter(p => p.t >= current.t);
  ctx.clearRect(0, 0, w, h); ctx.save(); ctx.beginPath(); ctx.rect(0, 6, w, h - 12); ctx.clip(); ctx.globalAlpha = 1;
  ctx.font = `12px ${color('--font-ui')}`; ctx.textBaseline = 'middle';
  if (detail) y.ticks(4).forEach(t => { ctx.fillStyle = muted; label(t.toFixed(0), 12, y(t)); stroke(`M${left},${crisp(y(t))}H${right}`, rule); });
  ctx.beginPath(); ctx.rect(0, 0, w * reveal, h); ctx.clip();
  ctx.fillStyle = color('--text'); ctx.globalAlpha *= .03; ctx.fillRect(x(T - 5), 16, x(T) - x(T - 5), bottom - 16); ctx.globalAlpha = 1;
  vertical(T - 5, rule); vertical(T, grey); vertical(fork, rule); vertical(now, rule);
  [T - 5, T].forEach(t => stroke(`M${x(t)-3},16H${x(t)+3}M${x(t)-3},${bottom}H${x(t)+3}`, grey));
  ctx.save(); ctx.beginPath(); ctx.rect(0, 0, w, priceBottom); ctx.clip();
  fill(polygon.y0(p => y(p.no * .99)).y1(p => y(p.no * 1.01))(branch), withAlpha(violet, 0.10196));
  [1.01, .99].forEach(n => stroke(line<SeriesPoint>().x(p => x(p.t)).y(p => y(p.no * n)).curve(curveMonotoneX)(branch), withAlpha(color('--violet-text'), 0.34902)));
  fill(polygon.y0(p => y(p.no * 1.01)).y1(p => y(Math.max(p.yes, p.no * 1.01)))(past), withAlpha(violet, 0.21961));
  fill(polygon.y0(p => y(p.no * .99)).y1(p => y(Math.min(p.yes, p.no * .99)))(past), withAlpha(color('--red'), 0.18039));
  fill(polygon.y0(p => y(p.spot - priceRadius(p.spot, sigma, p.t - now))).y1(p => y(p.spot + priceRadius(p.spot, sigma, p.t - now)))(future), withAlpha(violet, 0.05882));
  fill(polygon.y0(p => y(p.spot + (p.no - p.spot) * separation)).y1(p => y(p.spot + (p.yes - p.spot) * separation))(branch), withAlpha(violet, 0.20000));
  stroke(priceLine('spot')(history), grey, 1.5); stroke(priceLine('no')(past), grey, 2); stroke(priceLine('yes')(past), violet, 2);
  (['no', 'yes'] as const).forEach(key => {
    const fade = ctx.createLinearGradient(x(now), 0, Math.max(x(now) + 1, x(T)), 0), c = key === 'yes' ? violet : grey;
    fade.addColorStop(0, withAlpha(c, 0.60000)); fade.addColorStop(1, withAlpha(c, 0.10196));
    stroke(priceLine(key)(future), fade, 1, [3, 4]);
  });
  const dot = (px: number, py: number, c: string, radius = 3) => { ctx.beginPath(); ctx.arc(px, py, radius, 0, Math.PI * 2); ctx.fillStyle = c; ctx.fill(); };
  dot(x(fork), y(history[history.length - 1].spot), grey, 5); dot(x(fork), y(history[history.length - 1].spot), color('--card'), 3);
  dot(x(now), y(current.spot + (current.yes - current.spot) * separation), violet); dot(x(now), y(current.spot + (current.no - current.spot) * separation), grey);
  const lx = x(T) - 8; stroke(`M${lx-4},24v-4a4,4 0 0 1 8,0${now >= T ? 'v4' : ''}M${lx-5},24h10v8h-10Z`, grey);
  ctx.restore();
  if (detail) {
    gy.ticks(6).forEach(v => { ctx.fillStyle = grey; label(`${v > 0 ? '+' : v < 0 ? '−' : ''}${Math.abs(v * 100).toFixed(0)}\u202f%`, 12, gy(v)); });
    [-.01, 0, .01].forEach(v => {
      stroke(`M${left},${crisp(gy(v))}H${right}`, v ? muted : rule, 1, v ? [3, 5] : []);
      if (v) { ctx.fillStyle = grey; label(`${v > 0 ? '+' : '−'}${Math.abs(v * 100)}\u202f%`, Math.min(right - 40, x(now) + 12), gy(v)); }
    });
    stroke(line<SeriesPoint>().x(p => x(p.t)).y(p => gy(p.impact)).curve(curveMonotoneX)(past), violet, 1.5);
    const estimates = data.filter(p => p.t >= T - 5).map(p => ({ t: p.t, value: twapGap(data, Math.min(p.t, now), T, kappa, theta) }));
    const estimate = twapGap(data, now, T, kappa, theta);
    const water = estimate > .01 ? withAlpha(violet, 0.27843) : estimate < -.01 ? withAlpha(color('--red'), 0.23922) : withAlpha(grey, 0.12157);
    fill(area<{t:number;value:number}>().x(p => x(p.t)).y0(gy(0)).y1(p => gy(p.value)).curve(curveMonotoneX)(estimates), water);
    const cone = data.filter(p => p.t >= now).map(p => ({ t: p.t, ...twapCone(estimate, p.t, T, kappa, eta) }));
    fill(area<(typeof cone)[number]>().x(p => x(p.t)).y0(p => gy(p.lower)).y1(p => gy(p.upper)).curve(curveMonotoneX)(cone), withAlpha(violet, 0.15686));
    stroke(line<(typeof estimates)[number]>().x(p => x(p.t)).y(p => gy(p.value)).curve(curveMonotoneX)(estimates), violet, 2); dot(x(T), gy(estimate), violet, 4);
    ctx.fillStyle = muted; (w < 500 ? [t0, fork, 0, T] : [t0, fork, 0, T - 5, T]).forEach(t => label(`${t.toFixed(1)}\u202fd`, Math.min(right - 32, x(t)), h - 10));
  }
  if (hover !== null) vertical(hover, muted);
  ctx.restore();
  labels.unshift(...threadLabels(w - 12, y(data[data.length - 1].yes), y(data[data.length - 1].no), data[data.length - 1].yes, data[data.length - 1].no, color('--violet-text'), grey));
  labels.push({ x: x(now) + 8, y: 18, text: 'Now', color: muted });
  drawLabels(ctx, w, h, labels, color('--card'), (['yes', 'no'] as const).map(side => branch.map(p => ({ x: x(p.t), y: y(p.spot + (p[side] - p.spot) * separation) }))));
  return pulseGeometry(s, current, x(now), y(current.yes), y(current.no), gy(current.impact), y(current.no * (current.impact >= 0 ? 1.01 : .99)), right, violet, grey);
}

/** Separate history and forecast scales at NOW; forecast extent follows gap/corridor. */
function drawBoard(ctx: CanvasRenderingContext2D, w: number, h: number, f: ChartFrame) {
  if (w <= 0 || h <= 0) return;
  const { series: s, now, mode } = f, mini = mode === 'mini';
  const c = chartColor;
  const current = s.points.reduce((a, b) => Math.abs(b.t - now) < Math.abs(a.t - now) ? b : a);
  const split = w * (w < 500 ? .5 : .6), start = s.params.fork - 1.5;
  const x = scaleLinear().domain([start, now, s.params.T]).range([0, split, w]);
  const allHistory = s.points.filter(p => p.t >= start && p.t <= now);
  const stride = Math.max(1, Math.ceil(allHistory.length / Math.max(1, split / 2)));
  const history = allHistory.filter((_, i) => i % stride === 0);
  history.push(current);
  const sorted = history.map(p => p.spot).sort((a, b) => a - b);
  const lo = sorted[Math.floor((sorted.length - 1) * .02)], hi = sorted[Math.ceil((sorted.length - 1) * .98)];
  const pad = Math.max(hi - lo, current.spot * .001) * .1;
  const top = mini ? 10 : 36, bottom = h - (mini ? 10 : 16);
  const historicalY = scaleLinear().domain([lo - pad, hi + pad]).range([bottom, top]);
  const future = s.points.filter(p => p.t >= current.t).map(p => projectPoint(p, current, s));
  // Zoom to the real YES/NO spread (not the fixed +-1% corridor) so a small gap is still visible.
  const hero = !mini;
  const forecastValues = [current.spot, ...future.flatMap(p => hero ? [p.yes, p.no] : [p.yes, p.no * .99, p.no * 1.01])];
  const forecastLow = Math.min(...forecastValues), forecastHigh = Math.max(...forecastValues);
  const forecastPad = Math.max(current.spot * .0004, forecastHigh - forecastLow) * (hero ? .3 : .04);
  const y = scaleLinear().domain([forecastLow - forecastPad, forecastHigh + forecastPad]).range([bottom, top]);
  const end = future[future.length - 1] ?? current;
  const path = (points: SeriesPoint[], value: (p: SeriesPoint) => number) => line<SeriesPoint>().x(p => x(p.t)).y(value).curve(curveMonotoneX)(points);
  const stroke = (d: string | null, color: string, width: number) => { if (d) { ctx.strokeStyle = color; ctx.lineWidth = width; ctx.stroke(new Path2D(d)); } };
  ctx.clearRect(0, 0, w, h); ctx.save(); ctx.beginPath(); ctx.rect(0, 6, w * f.reveal, h - 12); ctx.clip();
  // End history exactly at the shared fork so the two scales meet continuously.
  const offset = y(current.spot) - historicalY(current.spot);
  const historyLow = Math.min(...history.map(p => historicalY(p.spot) + offset));
  const historyHigh = Math.max(...history.map(p => historicalY(p.spot) + offset));
  const historyScale = Math.min(1, (y(current.spot) - top) / Math.max(1, y(current.spot) - historyLow), (bottom - y(current.spot)) / Math.max(1, historyHigh - y(current.spot)));
  ctx.save(); ctx.beginPath(); ctx.rect(0, 8, split, h - 16); ctx.clip();
  stroke(path(history, p => y(current.spot) + (historicalY(p.spot) + offset - y(current.spot)) * historyScale), c('--text-2'), 1.5); ctx.restore();
  const corridor = area<SeriesPoint>().x(p => x(p.t)).y0(p => y(p.no * .99)).y1(p => y(p.no * 1.01)).curve(curveMonotoneX)(future);
  if (corridor) { ctx.fillStyle = c('--violet'); ctx.globalAlpha = .08; ctx.fill(new Path2D(corridor)); ctx.globalAlpha = 1; }
  ctx.setLineDash([3, 4]);
  for (const factor of [.99, 1.01]) stroke(path(future, p => y(p.no * factor)), c('--violet-text'), 1);
  stroke(`M${split},8V${h - 8}`, c('--text-2'), 1); ctx.setLineDash([]);
  const value = (p: SeriesPoint, side: 'yes' | 'no') => current.spot + (p[side] - current.spot) * Math.min(1, Math.max(0, (p.t - current.t) / Math.max(.001, (s.params.T - now) * .3))) * f.separation;
  const ribbon = area<SeriesPoint>().x(p => x(p.t)).y0(p => y(value(p, 'no'))).y1(p => y(value(p, 'yes'))).curve(curveMonotoneX)(future);
  if (ribbon) { ctx.globalAlpha = .12; ctx.fillStyle = c('--violet'); ctx.fill(new Path2D(ribbon)); ctx.globalAlpha = 1; }
  for (const side of ['no', 'yes'] as const) stroke(path(future, p => y(value(p, side))), c(side === 'yes' ? '--violet' : '--text-2'), 1.5);
  ctx.restore();
  ctx.font = `11px ${c('--font-ui')}`;
  const labels: ChartLabel[] = mini ? [] : threadLabels(w - 12, y(value(end, 'yes')), y(value(end, 'no')), end.yes, end.no, c('--violet-text'), c('--text-2'));
  for (const factor of [1.01, .99]) { const fy = y(current.no * factor); if (!hero || fy > top + 6 && fy < bottom - 6) labels.push({ x: split + 12, y: fy, text: factor > 1 ? '+1%' : '−1%', color: c('--text-2') }); }
  if (hero) {
    // Spread bracket at the right end: absolute and relative YES-NO gap.
    const by = y(value(end, 'yes')), bn = y(value(end, 'no')), bx = w - 6, gap = end.yes - end.no;
    if (Math.abs(bn - by) > 10 && f.separation > .5) {
      ctx.save(); ctx.strokeStyle = c('--text-2'); ctx.lineWidth = 1; ctx.beginPath();
      ctx.moveTo(bx - 3, by); ctx.lineTo(bx, by); ctx.lineTo(bx, bn); ctx.lineTo(bx - 3, bn); ctx.stroke(); ctx.restore();
      const rel = end.no ? Math.abs(gap / end.no) * 100 : 0;
      labels.push({ x: bx - 8, y: (by + bn) / 2, align: 'right', color: c('--text-2'), text: `Gap ${gap >= 0 ? '+' : '−'}${Math.abs(gap).toFixed(end.no < 1 ? 4 : 2)} · ${rel.toFixed(2)}%` });
    }
  }
  if (!mini) labels.push({ x: split + 12, y: 18, text: 'Now', color: c('--text-2') });
  drawLabels(ctx, w, h, labels, c('--card'), (['yes', 'no'] as const).map(side => future.map(p => ({ x: x(p.t), y: y(value(p, side)) }))));
  return pulseGeometry(s, current, split, y(current.yes), y(current.no), -100, y(current.no * (current.impact >= 0 ? 1.01 : .99)), w, c('--violet'), c('--text-2'));
}

/** Standardise price displacement by annual volatility converted to elapsed days. */
function pulseGeometry(s: Series, current: SeriesPoint, x: number, yes: number, no: number, gapY: number, edge: number, end: number, violet: string, grey: string): PulseGeometry {
  const index = s.points.indexOf(current), previous = s.points[Math.max(s.forkIndex, index - 12)];
  const elapsed = Math.max(1e-9, current.t - previous.t);
  const denominator = current.spot * s.params.sigma * Math.sqrt(elapsed / 365) * 2;
  const momentum = (side: 'yes' | 'no') => Math.max(-1, Math.min(1, (current[side] - previous[side]) / denominator));
  return { x, yes, no, gapY, edge, end, yesMomentum: momentum('yes'), noMomentum: momentum('no'),
    yesAngle: -(current.yes >= previous.yes ? 1 : -1) * Math.PI / 3,
    noAngle: -(current.no >= previous.no ? 1 : -1) * Math.PI / 3,
    gap: current.impact, violet, grey, dark: document.documentElement.dataset.theme !== 'light' };
}
