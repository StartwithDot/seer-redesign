import starSvg from '../assets/star.svg';

export const PAL = {
  dark: { core: '#f6f0ff', mid: '#b092ff', glow: '#7b3ff2', ga: 1 },
  violet: { core: '#ffffff', mid: '#ece6ff', glow: '#d6caff', ga: 0.6 },
};
export const fx = { a: 1 };
export const pal = (tone) => (tone ? PAL.violet : PAL.dark);

// Tube: wide soft bloom, tight halo, crisp core.
export function tube(ctx, col, w, alpha, build) {
  alpha *= fx.a;
  ctx.save();
  ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  const ga = col.ga ?? 1;
  ctx.globalCompositeOperation = 'source-over';
  ctx.strokeStyle = col.glow; ctx.lineWidth = w * 7; ctx.globalAlpha = alpha * 0.06 * ga; build(ctx); ctx.stroke();
  ctx.lineWidth = w * 3.4; ctx.globalAlpha = alpha * 0.12 * ga; build(ctx); ctx.stroke();
  ctx.globalCompositeOperation = 'source-over';
  ctx.strokeStyle = col.mid; ctx.lineWidth = w * 1.9; ctx.globalAlpha = alpha * 0.55; build(ctx); ctx.stroke();
  ctx.strokeStyle = col.core; ctx.lineWidth = w; ctx.globalAlpha = alpha; build(ctx); ctx.stroke();
  ctx.restore();
}

export function glowDot(ctx, col, x, y, r, alpha = 1) {
  alpha *= fx.a;
  ctx.save();
  ctx.globalCompositeOperation = 'source-over';
  ctx.fillStyle = col.glow; ctx.globalAlpha = alpha * 0.28 * (col.ga ?? 1);
  ctx.beginPath(); ctx.arc(x, y, r * 3.2, 0, 7); ctx.fill();
  ctx.globalAlpha = alpha * 0.4 * (col.ga ?? 1);
  ctx.beginPath(); ctx.arc(x, y, r * 1.9, 0, 7); ctx.fill();
  ctx.globalCompositeOperation = 'source-over';
  ctx.fillStyle = col.core; ctx.globalAlpha = alpha;
  ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill();
  ctx.restore();
}

export function label(ctx, str, x, y, o = {}) {
  ctx.save();
  ctx.font = `${o.weight || 600} ${o.size || 13}px ${o.mono ? 'ui-monospace, Menlo, monospace' : '"Inter Tight", sans-serif'}`;
  ctx.textAlign = o.align || 'left';
  ctx.textBaseline = o.base || 'middle';
  if (o.spacing && 'letterSpacing' in ctx) ctx.letterSpacing = o.spacing + 'px';
  ctx.globalAlpha = (o.alpha ?? 1) * fx.a;
  ctx.fillStyle = o.color || '#fff';
  ctx.fillText(str, x, y);
  ctx.restore();
}

const starPaths = [...starSvg.matchAll(/ d="([^"]+)"/g)].map((m) => new Path2D(m[1]));
export function starShape(ctx, cx, cy, size, fill, alpha = 1) {
  ctx.save();
  ctx.translate(cx, cy);
  const s = size / 32;
  ctx.scale(s, s);
  ctx.translate(-16, -14.5);
  ctx.fillStyle = fill; ctx.globalAlpha = alpha * fx.a;
  for (const p of starPaths) ctx.fill(p);
  ctx.restore();
}
