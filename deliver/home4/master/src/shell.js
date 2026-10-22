// SHELL: header dropdown, hero headline hover, section heading effects, footer ending line.
import * as G from '../vendor/gsap.min.js';
import * as ST from '../vendor/ScrollTrigger.min.js';
import * as SP from '../vendor/SplitText.min.js';
import { clamp, reduced } from './util.js';
import { tube, glowDot, fx, pal } from './neon.js';

const gsap = G.gsap || G.default;
const ScrollTrigger = ST.ScrollTrigger || ST.default;
const SplitText = SP.SplitText || SP.default;
gsap.registerPlugin(ScrollTrigger, SplitText);

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* ------------------------------------------------------------------ header */
export function initHeader() {
  const nav = $('#nav');
  const onScroll = () => nav.classList.toggle('scrolled', scrollY > 40);
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
}

/* ---------------------------------------------------------- apps dropdown */
const NS = 'http://www.w3.org/2000/svg';
const svgOf = (inner) => `<svg class="g" viewBox="0 0 56 40" aria-hidden="true">${inner}</svg>`;
const GLYPH = {
  app: () => {
    const w = [30, 18, 36, 24];
    let r = '';
    for (let i = 0; i < 10; i++) r += `<circle cx="7" cy="${4 + 8 * i}" r="1.6" fill="#b99bff"/><rect x="13" y="${2 + 8 * i}" width="${w[i % 4]}" height="4" rx="2" fill="${i % 2 ? '#9c6fff' : '#e9ddff'}"/>`;
    return svgOf(`<g class="g-rows">${r}</g>`);
  },
  deep: () => {
    let b = '';
    for (let i = 0; i < 6; i++) b += `<rect class="g-bar" style="animation-delay:${-i * 0.37}s;animation-duration:${1.5 + (i % 3) * 0.3}s" x="${6 + 8 * i}" y="14" width="5" height="22" rx="1.5" fill="${i === 2 ? '#fff' : '#9c6fff'}"/>`;
    return svgOf(`${b}<polygon class="g-hop" points="0,-4 3.6,0 0,4 -3.6,0" fill="#fff"/>`);
  },
  fut: () => svgOf(`<g fill="none" stroke-linecap="round" stroke-width="1.6">
    <path d="M4 20H18C28 20 28 10 40 10H48M18 20C28 20 28 30 40 30H48" stroke="#7b3ff2" stroke-opacity=".9"/>
    <path class="g-run" pathLength="100" d="M4 20H18C28 20 28 10 40 10H48" stroke="#fff"/>
    <path class="g-run b" pathLength="100" d="M4 20H18C28 20 28 30 40 30H48" stroke="#d9c9ff"/></g>
    <circle class="g-up" cx="50" cy="10" r="2.6" fill="#fff"/><circle class="g-dn" cx="50" cy="30" r="2.6" fill="#b99bff"/>`),
  opp: () => {
    const pick = new Set([8, 15, 22]);
    let d = '';
    for (let r = 0; r < 4; r++) for (let c = 0; c < 6; c++) {
      const i = r * 6 + c;
      d += `<circle class="${pick.has(i) ? 'g-pick' : 'g-dot'}" style="animation-delay:${-(i % 7) * 0.12}s" cx="${8 + 8 * c}" cy="${6 + 9.3 * r}" r="2.2" fill="${pick.has(i) ? '#fff' : '#b99bff'}"/>`;
    }
    return svgOf(d);
  },
  risk: () => svgOf(`<g fill="none" stroke-linecap="round" stroke-width="1.7">
    <path class="g-draw" pathLength="1" style="animation-delay:0s" stroke="#fff" d="M4 6C16 8 30 12 52 16"/>
    <path class="g-draw" pathLength="1" style="animation-delay:.18s" stroke="#b99bff" d="M4 6C14 10 26 21 52 28"/>
    <path class="g-draw" pathLength="1" style="animation-delay:.36s" stroke="#7b3ff2" d="M4 6C10 14 18 30 52 36"/></g>`),
  exp: () => {
    let r = '';
    for (let i = 0; i < 4; i++) r += `<rect x="6" y="${3 + 9 * i}" width="44" height="7" rx="2" fill="none" stroke="#b99bff" stroke-opacity=".55"/><rect x="9" y="${5.4 + 9 * i}" width="${12 + ((i * 11) % 18)}" height="2.2" rx="1.1" fill="#d9c9ff" fill-opacity=".8"/>`;
    return svgOf(`${r}<rect class="g-scan" x="5" y="2" width="46" height="9" rx="2.5" fill="#7b3ff2" fill-opacity=".42" stroke="#fff" stroke-width="1.2"/>`);
  },
};
const PRODUCTS = [
  ['Seer App', 'Every market, one index', 'https://app.seer.pm', 'app'],
  ['Deep', 'Many outcomes, agents price', 'https://deep.seer.pm', 'deep'],
  ['Futarchy', 'Conditional markets for DAOs', 'https://futarchy.seer.pm', 'fut'],
  ['Opportunity Markets', 'Forecast the shortlist', 'https://opportunity.seer.pm', 'opp'],
  ['Risk Pricing', 'Compare protocol risk', 'https://risk.seer.pm', 'risk'],
];

export function initMenu() {
  const menu = $('#appsMenu'), btn = $('#appsBtn'), panel = $('#appsPanel'), inner = $('.menu-in', panel);
  inner.innerHTML = PRODUCTS.map(([n, d, href, g]) =>
    `<a class="mrow" role="menuitem" href="${href}"><span class="gtile">${GLYPH[g]()}</span><span class="mtxt"><b>${n}</b><i>${d}</i></span><svg class="marr" viewBox="0 0 14 10" aria-hidden="true"><path d="M1 5h11M8 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>`).join('');
  const rows = $$('.mrow', panel);
  const canHover = matchMedia('(hover:hover) and (min-width:820px)');
  let open = false, timer = 0, suppress = false;
  const set = (v, focusFirst) => {
    open = v; menu.classList.toggle('open', v); btn.setAttribute('aria-expanded', v ? 'true' : 'false');
    if (v && focusFirst) rows[0].focus();
  };
  const later = () => { clearTimeout(timer); timer = setTimeout(() => set(false), 160); };
  const enter = () => { if (!canHover.matches || suppress) return; clearTimeout(timer); set(true); };
  const leave = () => { suppress = false; if (canHover.matches) later(); };
  menu.addEventListener('mouseenter', enter); menu.addEventListener('mouseleave', leave);
  btn.addEventListener('click', () => { clearTimeout(timer); if (open) { set(false); suppress = canHover.matches; } else set(true); });
  btn.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); set(true, true); }
  });
  panel.addEventListener('keydown', (e) => {
    const i = rows.indexOf(document.activeElement);
    if (e.key === 'ArrowDown') { e.preventDefault(); rows[(i + 1) % rows.length].focus(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); rows[(i - 1 + rows.length) % rows.length].focus(); }
    else if (e.key === 'Home') { e.preventDefault(); rows[0].focus(); }
    else if (e.key === 'End') { e.preventDefault(); rows[rows.length - 1].focus(); }
  });
  addEventListener('keydown', (e) => { if (e.key === 'Escape' && open) { set(false); btn.focus(); } });
  addEventListener('pointerdown', (e) => { if (open && !menu.contains(e.target)) set(false); });
  menu.addEventListener('focusout', (e) => { if (open && e.relatedTarget && !menu.contains(e.relatedTarget)) set(false); });
  addEventListener('resize', () => set(false));
}

/* ------------------------------------------------- hero headline: hover */
// Variable-weight proximity wave: letters near the pointer thicken and warm toward lavender.
export function initHeroHover() {
  const h1 = $('#heroH1'); if (!h1) return null;
  const split = SplitText.create(h1, { type: 'lines,chars', mask: 'lines', linesClass: 'hl', charsClass: 'ch' });
  const chars = split.chars;
  // line 1 light and violet-to-white, line 2 heavy white: weight contrast
  const lineOf = chars.map((c) => split.lines.findIndex((l) => l.contains(c)));
  const cnt = [0, 0].map((_, k) => lineOf.filter((l) => l === k).length);
  const idx = [0, 0];
  const base = chars.map((c, i) => { const l = Math.max(0, lineOf[i]); const j = idx[l]++; c._t = cnt[l] > 1 ? j / (cnt[l] - 1) : 1; c._l = l; return l === 0 ? 520 : 800; });
  const col0 = [150, 112, 255], col1 = [255, 255, 255];
  const baseCol = (c, shim) => { const t = c._l === 0 ? Math.min(1, c._t * 1.15 + shim) : 1; return `rgb(${Math.round(col0[0] + (col1[0] - col0[0]) * t)},${Math.round(col0[1] + (col1[1] - col0[1]) * t)},255)`; };
  chars.forEach((c, i) => { c.style.fontWeight = base[i]; c.style.color = baseCol(c, 0); });
  // entrance: per-letter rise inside the line mask
  if (!reduced) {
    gsap.from(chars, { yPercent: 115, rotate: 4, duration: 1.1, ease: 'expo.out', stagger: 0.028, delay: 0.5 });
  }
  const st = chars.map(() => ({ v: 0 }));
  let px = -1e4, py = -1e4, active = false, rects = [], dirty = true, t = 0;
  const measure = () => { rects = chars.map((c) => { const r = c.getBoundingClientRect(); return [r.left + r.width / 2, r.top + r.height / 2]; }); dirty = false; };
  addEventListener('pointermove', (e) => { px = e.clientX; py = e.clientY; active = true; dirty = true; }, { passive: true });
  document.documentElement.addEventListener('pointerleave', () => { active = false; });
  addEventListener('resize', () => { dirty = true; });
  addEventListener('scroll', () => { dirty = true; }, { passive: true });
  const R = 120;
  gsap.ticker.add((_, dms) => {
    if (reduced) return;
    if (h1.getBoundingClientRect().bottom < 0) return;
    t += Math.min(0.05, (dms || 16) / 1000);
    if (dirty) measure();
    // idle shimmer: a soft highlight travels along line 1 every ~5s
    const sweep = ((t % 5.5) / 5.5) * 1.6 - 0.3;
    chars.forEach((c, i) => {
      let f = 0;
      if (active) { const [x, y] = rects[i]; const q = Math.hypot(px - x, (py - y) * 0.7) / R; f = Math.exp(-q * q); }
      const s = st[i]; s.v += (f - s.v) * 0.14;
      const k = s.v;
      const sh = c._l === 0 ? Math.max(0, 0.45 - Math.abs(c._t - sweep) * 3.2) : 0;
      const w = Math.round(base[i] + Math.min(900 - base[i], 260) * k);
      if (c._w !== w) { c.style.fontWeight = w; c._w = w; }
      c.style.color = k > 0.02 ? `rgb(${Math.round(255 - 45 * k)},${Math.round(255 - 75 * k)},255)` : baseCol(c, sh);
      c.style.transform = k > 0.01 ? `translateY(${(-4 * k).toFixed(2)}px)` : '';
    });
  });
  return split;
}

/* ------------------------------------------ section heading effects */
// One consistent family: masked line rise with a slight blur-in. Simple and fast.
export function initHeadings() {
  if (reduced) return;
  $$('main .sec').forEach((sec) => {
    const h = $('h2', sec); if (!h || sec.id === 'futarchy') return;
    const s = SplitText.create(h, { type: 'lines', mask: 'lines', linesClass: 'ln' });
    const tl = gsap.timeline({ paused: true });
    tl.fromTo(s.lines, { yPercent: 108, filter: 'blur(7px)', opacity: 0 }, { yPercent: 0, filter: 'blur(0px)', opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.1 }, 0);
    const rest = $$('.eyebrow, .lead, .copy > .pill', sec);
    if (rest.length) tl.fromTo(rest, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', stagger: 0.07 }, 0.2);
    ScrollTrigger.create({ trigger: sec, start: 'top 45%', onEnter: () => tl.timeScale(1).play(), onLeaveBack: () => tl.timeScale(1.6).reverse() });
    if (sec.getBoundingClientRect().top < innerHeight * 0.45) tl.progress(1);
  });
}

/* ----------------------------------------------- footer infinite ending */
export function initFooterLine() {
  const cv = $('#footLine'); if (!cv) return;
  const ctx = cv.getContext('2d');
  const foot = cv.parentElement;
  let W = 0, H = 0, dpr = 1, vis = false;
  const size = () => { dpr = Math.min(2, devicePixelRatio || 1); W = foot.clientWidth; H = 150; cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr); cv.style.width = W + 'px'; cv.style.height = H + 'px'; };
  size(); addEventListener('resize', size);
  new IntersectionObserver((e) => { vis = e[0].isIntersecting; }, { rootMargin: '200px' }).observe(foot);
  const Y = 56, N = 4;
  // one line, fans into four parallel threads toward the right edge and leaves the viewport
  const yOf = (i, x) => { const f = clamp((x - W * 0.36) / (W * 0.34)); const s = f * f * (3 - 2 * f); return Y + (i - (N - 1) / 2) * 12 * s; };
  const packets = Array.from({ length: 9 }, (_, k) => ({ x: (k / 9) * 1400, line: k % N, v: 220 + (k * 53) % 160, len: 90 + (k * 37) % 70 }));
  const col = pal(0);
  let t = 0;
  gsap.ticker.add((_, dms) => {
    if (!vis) return;
    const dt = Math.min(0.05, (dms || 16) / 1000); t += reduced ? 0 : dt;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, W, H);
    fx.a = 1;
    const pathFor = (i, x0, x1) => (c) => { c.beginPath(); c.moveTo(x0, yOf(i, x0)); for (let x = x0; x <= x1; x += 14) c.lineTo(x, yOf(i, x)); c.lineTo(x1, yOf(i, x1)); };
    for (let i = 0; i < N; i++) tube(ctx, col, i === 1 || i === 2 ? 2.1 : 1.5, i === 1 || i === 2 ? 0.95 : 0.7, pathFor(i, -10, W + 20));
    if (reduced) return;
    packets.forEach((p) => {
      p.x += p.v * dt; if (p.x - p.len > W + 40) { p.x = -20 - Math.random() * 300; p.line = (Math.random() * N) | 0; }
      const x0 = Math.max(-10, p.x - p.len), x1 = Math.min(W + 20, p.x);
      if (x1 <= x0) return;
      ctx.save(); ctx.globalCompositeOperation = 'lighter';
      const g = ctx.createLinearGradient(p.x - p.len, 0, p.x, 0); g.addColorStop(0, 'rgba(255,255,255,0)'); g.addColorStop(1, 'rgba(255,255,255,.95)');
      ctx.strokeStyle = g; ctx.lineWidth = 2.4; ctx.lineCap = 'round'; pathFor(p.line, x0, x1)(ctx); ctx.stroke(); ctx.restore();
      glowDot(ctx, col, p.x, yOf(p.line, p.x), 2.1, 0.9);
    });
  });
}
