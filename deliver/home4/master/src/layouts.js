import { lin, isMob, lerp } from './util.js';
export const N = 10;

export function zone(W, H) {
  return isMob(W)
    ? { x0: 0.46 * W, x1: 0.96 * W, y0: (H < 700 ? 0.58 : 0.5) * H, y1: 0.95 * H }
    : { x0: 0.58 * W, x1: 0.95 * W, y0: 0.14 * H, y1: 0.88 * H };
}
const Y0 = (W, H) => (isMob(W) ? 0.8 : 0.68) * H;
const spread = (a, b) => Array.from({ length: N }, (_, i) => lin(a, b, i, N));

export function gridGeom(W, H, cols, rows) {
  const z = zone(W, H);
  const pw = (z.x1 - z.x0) / cols, ph = (z.y1 - z.y0) / rows;
  const s = Math.min(pw, ph) - (isMob(W) ? 4 : 8);
  return { z, pw, ph, s, cx: (c) => z.x0 + pw * (c + 0.5), cy: (r) => z.y0 + ph * (r + 0.5) };
}

export const heroGeom = { y0: 0, fx0: 0, fx1: 0, xe: 0, ends: null, ok: false };

// Deep: the 3D scene fills this box (also used by main.js to place #deep-3d)
export function deepZone(W, H) {
  return isMob(W)
    ? { x0: 0.3 * W, x1: 0.99 * W, y0: (H < 700 ? 0.6 : 0.56) * H, y1: 0.97 * H }
    : { x0: 0.56 * W, x1: 0.97 * W, y0: 0.14 * H, y1: 0.88 * H };
}
// Finale: the glass logo fills this box
export function finaleZone(W, H) {
  return isMob(W)
    ? { x0: 0.4 * W, x1: 0.95 * W, y0: (H < 700 ? 0.55 : 0.56) * H, y1: (H < 700 ? 0.68 : 0.68) * H }
    : { x0: 0.64 * W, x1: 0.9 * W, y0: 0.2 * H, y1: 0.5 * H };
}

export const LAYOUTS = {
  hero(W, H) {
    const m = isMob(W), g = heroGeom;
    if (g.ok) return { y0: g.y0, fx0: g.fx0, fx1: g.fx1, xe: g.xe, ends: g.ends, tone: 0, thick: 1 };
    return { y0: 0.62 * H, fx0: 0.4 * W, fx1: 0.6 * W, xe: 0.7 * W, ends: spread(0.3, 0.9).map((v) => v * H), tone: 0, thick: 1 };
  },
  protocol(W, H) {
    const m = isMob(W), z = zone(W, H);
    return { y0: Y0(W, H), fx0: (m ? 0.2 : 0.36) * W, fx1: (m ? 0.4 : 0.62) * W, xe: (m ? 0.6 : 0.7) * W,
      ends: Array.from({ length: N }, (_, i) => lin(z.y0 + 14, z.y1 - 14, i, N)), tone: 0, thick: 1, labels: 'protocol' };
  },
  seerapp(W, H) {
    const m = isMob(W), z = zone(W, H);
    return { y0: Y0(W, H), fx0: (m ? 0.08 : 0.3) * W, fx1: (m ? 0.2 : 0.46) * W, xe: (m ? 0.3 : 0.57) * W,
      ends: Array.from({ length: N }, (_, i) => lin(z.y0 + 30, z.y1 - 14, i, N)), tone: 1, thick: 1 };
  },
  deep(W, H) {
    const m = isMob(W), z = deepZone(W, H);
    return { y0: Y0(W, H), fx0: (m ? 0.1 : 0.28) * W, fx1: (m ? 0.2 : 0.4) * W, xe: z.x0 + (m ? 8 : 14),
      ends: Array.from({ length: N }, (_, i) => lin(z.y0 + (z.y1 - z.y0) * 0.3, z.y1 - (z.y1 - z.y0) * 0.3, i, N)), tone: 0, thick: 1 };
  },
  futarchy(W, H) {
    const m = isMob(W), z = zone(W, H);
    const pass = lerp(z.y0, z.y1, m ? 0.16 : 0.2), fail = lerp(z.y0, z.y1, m ? 0.86 : 0.82);
    const gap = m ? 7 : 11;
    const ends = Array.from({ length: N }, (_, i) => (i < 5 ? pass + (i - 2) * gap : fail + (i - 7) * gap));
    return { y0: Y0(W, H), fx0: (m ? 0.1 : 0.36) * W, fx1: (m ? 0.3 : 0.5) * W, xe: (m ? 0.5 : 0.58) * W, ends, tone: 1, thick: 1, pass, fail };
  },
  opportunity(W, H) {
    const m = isMob(W), cols = m ? 4 : 8, rows = 48 / cols, g = gridGeom(W, H, cols, rows);
    const rowOf = Array.from({ length: N }, (_, i) => Math.floor((i * rows) / N));
    const off = [0, -4, 4, -4, 4, -4, 4, -4, 4, 0];
    return { y0: 0.94 * H, fx0: (m ? 0.1 : 0.3) * W, fx1: (m ? 0.3 : 0.46) * W, xe: g.z.x0 - 6,
      ends: rowOf.map((r, i) => g.cy(r) + off[i]), tone: 0, thick: 1, cols, rows };
  },
  risk(W, H) {
    const m = isMob(W), z = zone(W, H);
    let top = 0.56 * H; const gap = m ? 7 : 10;
    /* keep the line and chart clear of the chapter button on short viewports (button sits in the absolute .copy block) */
    const cp = typeof document !== 'undefined' && document.querySelector('#risk .copy'), pl = cp && cp.querySelector('.pill');
    if (pl) top = Math.min(Math.max(top, cp.offsetTop + pl.offsetTop + pl.offsetHeight + 44), z.y1 - (m ? 34 : 54) - 90);
    return { y0: top, fx0: (m ? 0.1 : 0.3) * W, fx1: (m ? 0.3 : 0.46) * W, xe: z.x0 - 6,
      ends: Array.from({ length: N }, (_, i) => top + ((i < 3 ? 0 : i < 6 ? 1 : 2) - 1) * gap), tone: 1, thick: 0.42, top, gap, perchDy: m ? -10 : -14 };
  },
  close(W, H) {
    const m = isMob(W), z = finaleZone(W, H);
    if (m) return { y0: 0.9 * H, fx0: 0.08 * W, fx1: 0.24 * W, xe: 0.31 * W,
      ends: Array.from({ length: N }, (_, i) => lin(0.59 * H, 0.65 * H, i, N)), tone: 0, thick: 1 };
    return { y0: 0.83 * H, fx0: 0.4 * W, fx1: 0.5 * W, xe: 0.5 * W,
      ends: Array.from({ length: N }, (_, i) => lin(0.2 * H, 0.5 * H, i, N)), tone: 0, thick: 1 };
  },
};
