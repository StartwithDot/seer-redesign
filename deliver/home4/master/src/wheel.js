import logoSvg from '../assets/logo.svg';
const NS = 'http://www.w3.org/2000/svg';
const LOGO = [...logoSvg.matchAll(/ d="([^"]+)"/g)].map((m) => m[1]);
export const COLORS = ['#7B3FF2', '#4B3BFF', '#9C6FFF', '#6A2DE6', '#8B5CFF'];
const el = (tag, attrs, parent) => { const e = document.createElementNS(NS, tag); for (const k in attrs || {}) e.setAttribute(k, attrs[k]); if (parent) parent.appendChild(e); return e; };

export function buildWheel(container) {
  const svg = el('svg', { viewBox: '-400 -400 800 800' }, container);
  const rings = el('g', {}, svg);

  const spin = el('g', {}, svg);
  const lobeG = el('g', { style: 'isolation:isolate' }, spin);
  const circles = [];
  for (let i = 0; i < 5; i++) {
    const arm = el('g', { transform: `rotate(${-90 + 72 * i})` }, lobeG);
    circles.push(el('circle', { cx: 130, cy: 0, r: 170, fill: COLORS[i], 'fill-opacity': 0.8, style: 'mix-blend-mode:screen' }, arm));
  }
  // thread: the neon line runs over the lobes into the hub and back out, with a soft contact shadow
  const defs = el('defs', {}, svg);
  const f = el('filter', { id: 'thsh', x: '-10%', y: '-200%', width: '120%', height: '500%' }, defs);
  el('feGaussianBlur', { stdDeviation: 7 }, f);
  const thread = el('g', { class: 'thread' }, svg);
  const segs = [-1, 1].map((sd) => {
    const g = el('g', {}, thread);
    const x1 = sd * 118, x2 = sd * 286, d = `M${x1} 0H${x2}`;
    el('path', { d, transform: 'translate(0 9)', stroke: '#07070a', 'stroke-opacity': 0.55, 'stroke-width': 22, fill: 'none', filter: 'url(#thsh)' }, g);
    const L = (w, col, o) => el('path', { d, stroke: col, 'stroke-opacity': o, 'stroke-width': w, fill: 'none', 'stroke-linecap': 'butt', 'vector-effect': 'non-scaling-stroke' }, g);
    L(14, '#7b3ff2', 0.22); L(5.5, '#b092ff', 0.6); L(2.1, '#f6f0ff', 1);
    const pk = el('path', { d, class: 'tpk' + (sd < 0 ? '' : ' out'), stroke: '#fff', 'stroke-width': 3, fill: 'none', 'stroke-linecap': 'round', 'vector-effect': 'non-scaling-stroke', pathLength: 100 }, g);
    return g;
  });
  const cut = el('circle', { r: 140, fill: '#07070a' }, svg);
  const disc = el('circle', { r: 118, fill: '#fff' }, svg);
  const mark = el('g', { transform: 'scale(2.55) translate(-29,-31.5)', fill: '#07070a' }, svg);
  for (let i = 4; i <= 10; i++) el('path', { d: LOGO[i] }, mark);
  return { svg, rings, spin, circles, cut, disc, mark, segs };
}
