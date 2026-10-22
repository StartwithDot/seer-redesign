export const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
export const lerp = (a, b, t) => a + (b - a) * t;
export const ss = (t) => { t = clamp(t); return t * t * (3 - 2 * t); };
export const sstep = (a, b, x) => ss((x - a) / (b - a));
export const smoother = (t) => { t = clamp(t); return t * t * t * (t * (t * 6 - 15) + 10); };
export const lin = (a, b, i, n) => a + (b - a) * (n < 2 ? 0.5 : i / (n - 1));
export function rng(seed) {
  let s = seed >>> 0;
  return () => {
    s |= 0; s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
export const isMob = (W) => W < 820;
export const reduced = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
export function mixRGB(a, b, t) {
  return [Math.round(lerp(a[0], b[0], t)), Math.round(lerp(a[1], b[1], t)), Math.round(lerp(a[2], b[2], t))];
}
export const rgba = (c, a) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;
