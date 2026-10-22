import { withAlpha } from './colors';
export interface LabelRect { x: number; y: number; w: number; h: number; text: string; lineDash: number[]; threadYRanges: { min: number; max: number }[] }
export interface ChartLabel { x: number; y: number; text: string; color: string; align?: CanvasTextAlign; side?: 'above' | 'below' }
declare global { interface HTMLCanvasElement { __labels?: LabelRect[] } }

/** Greedy nearest-position packing; intersecting columns keep baselines 18px apart. */
export function drawLabels(ctx: CanvasRenderingContext2D, width: number, height: number, labels: ChartLabel[], backing: string, threads: { x: number; y: number }[][] = []) {
  const placed: LabelRect[] = [];
  ctx.save(); ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over'; ctx.setLineDash([]); ctx.lineJoin = 'round'; ctx.font = `12px ${getComputedStyle(document.documentElement).getPropertyValue('--font-ui')}`; ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
  for (const label of labels) {
    const maxWidth = Math.max(0, width - 24);
    let text = label.text;
    while (ctx.measureText(text).width > maxWidth && text.length > 1) text = text.slice(0, -2) + '…';
    const w = ctx.measureText(text).width, h = 12;
    const x = Math.max(12, Math.min(width - 12 - w, label.x - (label.align === 'right' ? w : label.align === 'center' ? w / 2 : 0)));
    const threadYRanges = threads.flatMap(points => {
      const values: number[] = [];
      for (let i = 1; i < points.length; i++) {
        const a = points[i - 1], b = points[i];
        if (b.x < x - 2 || a.x > x + w + 2) continue;
        // Monotone curves stay within the endpoint envelope of each segment.
        values.push(a.y, b.y);
      }
      return values.length ? [{ min: Math.min(...values), max: Math.max(...values) }] : [];
    });
    const preferred = Math.max(18, Math.min(height - 18, label.y));
    let y: number | undefined;
    for (let delta = 0; delta <= height; delta += 1) {
      for (const candidate of delta ? [preferred + delta, preferred - delta] : [preferred]) {
        if (candidate < 18 || candidate > height - 18) continue;
        if (label.side === 'above' && candidate > preferred || label.side === 'below' && candidate < preferred) continue;
        if (threadYRanges.some(r => candidate + h / 2 + 10 > r.min && candidate - h / 2 - 10 < r.max)) continue;
        if (placed.every(r => x + w + 6 <= r.x || x >= r.x + r.w + 6 || Math.abs(candidate - (r.y + r.h / 2)) >= 18)) { y = candidate; break; }
      }
      if (y !== undefined) break;
    }
    if (y === undefined) continue;
    ctx.strokeStyle = withAlpha(backing, 1); ctx.lineWidth = 4; ctx.lineJoin = 'round'; ctx.strokeText(text, x, y);
    ctx.fillStyle = withAlpha(label.color, 1); ctx.fillText(text, x, y);
    placed.push({ x, y: y - h / 2, w, h, text, lineDash: ctx.getLineDash(), threadYRanges });
  }
  ctx.restore(); ctx.canvas.__labels = placed;
}

export function threadLabels(x: number, yesY: number, noY: number, yes: number, no: number, violet: string, grey: string): ChartLabel[] {
  const format = (value: number) => value.toFixed(value < 1 ? 4 : 2);
  return Math.abs(yesY - noY) < 18
    ? [{ x, y: Math.min(yesY, noY) - 18, side: 'above', text: `Yes ${format(yes)} · No ${format(no)}`, color: violet, align: 'right' }]
    : [{ x, y: yesY - 18, side: 'above', text: `If Yes ${format(yes)}`, color: violet, align: 'right' }, { x, y: noY + 18, side: 'below', text: `If No ${format(no)}`, color: grey, align: 'right' }];
}
