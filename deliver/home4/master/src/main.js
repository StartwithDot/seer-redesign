import * as G from '../vendor/gsap.min.js';
import * as ST from '../vendor/ScrollTrigger.min.js';
import * as DS from '../vendor/DrawSVGPlugin.min.js';
import '../vendor/lenis.min.js';
import starSvg from '../assets/star.svg';
import { clamp, lerp, ss, sstep, reduced } from './util.js';
import { initSpine, spine } from './spine.js';
import { makeScenes } from './scenes.js';
import { arrive as arriveMap } from './chapters.js';
import { fx } from './neon.js';
import { buildWheel } from './wheel.js';
import { makeBg } from './bgfx.js';
import logoSvg from '../assets/logo.svg';
import { initHeader, initMenu, initHeroHover, initHeadings, initFooterLine } from './shell.js';
import { LAYOUTS, heroGeom, deepZone, finaleZone, N } from './layouts.js';

const gsap = G.gsap || G.default;
const ScrollTrigger = ST.ScrollTrigger || ST.default;
const DrawSVGPlugin = DS.DrawSVGPlugin || DS.default;
const Lenis = globalThis.Lenis;
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

// ---- smooth scroll
let lenis = null;
if (!reduced) {
  lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1, smoothWheel: true });
  document.documentElement.classList.add('lenis');
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  $$('a[href^="#"]').forEach((a) => a.addEventListener('click', (e) => {
    const t = $(a.getAttribute('href')); if (!t) return; e.preventDefault(); lenis.scrollTo(t, { duration: 1.6 });
  }));
}

// ---- header stays fixed; gains a backdrop after the bird takes off
initHeader(); initMenu();

// ---- nav logo (real vector). #nav-mark = raven + star, #nav-word = SEER
(function () {
  const NS = 'http://www.w3.org/2000/svg', svg = $('#nav-svg');
  const ds = [...logoSvg.matchAll(/ d="([^"]+)"/g)].map((m) => m[1]);
  const mk = (id, from, to) => { const g = document.createElementNS(NS, 'g'); g.id = id; g.setAttribute('fill', '#fff'); ds.slice(from, to).forEach((d) => { const p = document.createElementNS(NS, 'path'); p.setAttribute('d', d); g.appendChild(p); }); svg.appendChild(g); };
  mk('nav-word', 0, 4); mk('nav-mark', 4, 11);
  const raven = svg.cloneNode(true); raven.removeAttribute('id'); raven.querySelector('#nav-word').remove(); raven.querySelector('#nav-mark').removeAttribute('id'); raven.setAttribute('viewBox','0 0 64 64'); document.querySelector('#finale-logo').appendChild(raven);
})();

// ---- panel tone-on-tone art
const starD = [...starSvg.matchAll(/ d="([^"]+)"/g)].map((m) => m[1]).join(' ');
$$('.panel .bg').forEach((bg, bi) => {
  const NS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('viewBox', '0 0 1200 800'); svg.setAttribute('preserveAspectRatio', 'xMaxYMax slice');
  svg.setAttribute('aria-hidden', 'true');
  const star = document.createElementNS(NS, 'path');
  star.setAttribute('d', starD); star.setAttribute('fill', '#fff'); star.setAttribute('opacity', 0.09);
  const sx = bi % 2 ? 1010 : 190, sy = bi % 2 ? 640 : 160;
  star.setAttribute('transform', `translate(${sx} ${sy}) scale(8) translate(-16 -14.5)`);
  const starG = document.createElementNS(NS, 'g'); starG.appendChild(star);
  svg.append(starG); bg.appendChild(svg);
  gsap.to(starG, { rotation: 360, svgOrigin: `${sx} ${sy}`, duration: reduced ? 400 : 90, ease: 'none', repeat: -1 });
});

// ---- hero: wheel + illustrative market + neon fan
const OUT = [['consensus-specs',84.8],['ethers.js',82.8],['lighthouse',82.8],['nimbus-eth2',82.6],['gnark-crypto',80.7],['foundry',80.3],['blst',80.3],['mev-boost',80.3],['teku',80.2],['go-ethereum',79.7]];
const wheel = buildWheel($('#heroWheel'));
const barsList = $('#barsList');
const rows = OUT.map(([n, p]) => {
  const r = document.createElement('div'); r.className = 'bar';
  const f = document.createElement('div'); f.className = 'bar-fill';
  const sp = document.createElement('span'); sp.textContent = n; const b = document.createElement('b');
  const tip = document.createElement('i'); tip.className = 'tip'; const sw = document.createElement('i'); sw.className = 'sweep';
  f.append(sp, b, sw, tip); r.appendChild(f); barsList.appendChild(r);
  return { r, f, b, p, tip, sw };
});
function renderBar(r) { r.b.textContent = r.v.toFixed(1) + '%'; r.f.style.width = r.v + '%'; }
function paintBars() { rows.forEach((r) => renderBar(r)); }
rows.forEach((r) => { r.p0 = r.p; r.v = r.p; r.hits = 0; gsap.set(r.f, { transformOrigin: '0% 50%' }); });
// a light packet reaches a bar: spring bubble + tiny shake, number and width tween together, edge flash, settle
function hitBar(i) {
  const r = rows[i]; if (!r || reduced) return;
  const now = performance.now(); if (now - (r.t || 0) < 260) return; r.t = now;
  r.walk = (r.walk || 0) + (Math.random() * 2 - 1) * 1.8; r.walk *= 0.82;
  const tgt = clamp(r.p0 + r.walk + (Math.random() * 2 - 1) * 1.2, 52, 99);
  gsap.to(r, { v: tgt, duration: 0.8, ease: 'power3.out', overwrite: 'auto', onUpdate: () => renderBar(r) });
  gsap.fromTo(r.f, { scaleX: 1.025, scaleY: 1.16 }, { scaleX: 1, scaleY: 1, duration: 0.9, ease: 'elastic.out(1,0.35)', overwrite: 'auto' });
  gsap.timeline().fromTo(r.f, { x: 0 }, { x: 1.6, duration: 0.04 }).to(r.f, { x: -1.3, duration: 0.05 }).to(r.f, { x: 0.7, duration: 0.05 }).to(r.f, { x: 0, duration: 0.07 });
  gsap.fromTo(r.f, { filter: 'brightness(1.5)' }, { filter: 'brightness(1)', duration: 0.6, ease: 'power2.out', clearProps: 'filter' });
  gsap.fromTo(r.tip, { opacity: 1 }, { opacity: 0, duration: 0.45, ease: 'power2.out', overwrite: 'auto' });
}
let arrived = false, nextPulse = 5;
paintBars();
let barAcc = 0, barNext = 1.2;
function driftBars() {}
const wheelEl = $('#heroWheel'), heroStage = $('.herostage');
function measureHero() {
  const st = heroStage.getBoundingClientRect();
  const wr = wheelEl.getBoundingClientRect();
  const cx = wr.left + wr.width / 2 - st.left, cy = wr.top + wr.height / 2 - st.top;
  const rs = rows.map((r) => r.r.getBoundingClientRect());
  const xe = rs[0].left - st.left - 10;
  Object.assign(heroGeom, { y0: rs[5].top - st.top, fx0: innerWidth < 820 ? 20 : innerWidth * .26, fx1: xe - 16, xe, ends: rs.map((q) => q.top - st.top + q.height / 2), ok: true, unit: wr.width / 800 });
}
const spinSt = { scroll: 0 };
function wheelUpdate(t) {
  const sp = spinSt.scroll * 220;
  wheel.spin.setAttribute('transform', `rotate(${t * 7 + sp})`);
  wheel.circles.forEach((c, i) => c.setAttribute('cx', 130 + 11 * Math.sin(t * 1.1 + i * 1.26) + spinSt.scroll * 40));
  wheel.rings.setAttribute('transform', `rotate(${-t * 2.2 - spinSt.scroll * 60})`);
  wheel.disc.setAttribute('r', 118 * (1 + Math.sin(t * 1.4) * 0.012));
  if (heroGeom.ok && wheel.segs) {
    const u = heroGeom.unit, front = spine.reveal * (heroGeom.xe + 40), cx = heroGeom.fx0 - 275 * u;
    wheel.segs[0].setAttribute('opacity', clamp((front - (cx - 275 * u)) / (120 * u)).toFixed(3));
    wheel.segs[1].setAttribute('opacity', clamp((front - cx) / (90 * u)).toFixed(3));
  }
}
if (!reduced) {
  gsap.from(wheel.circles, { attr: { r: 0 }, duration: 1.6, stagger: 0.09, ease: 'expo.out' });
  gsap.from([wheel.disc, wheel.cut], { scale: 0, transformOrigin: '50% 50%', duration: 1.2, ease: 'back.out(1.6)', delay: 0.25 });
  gsap.from(wheel.mark, { opacity: 0, duration: 0.8, delay: 0.7 });
  gsap.from('.hero-copy .lead, .hero-copy .pills', { y: 30, opacity: 0, duration: 1.1, ease: 'power3.out', stagger: 0.12, delay: 0.9 });
  gsap.from('.bars-q', { opacity: 0, y: 14, duration: 0.9, delay: 0.8 });
  gsap.from(rows.map((r) => r.f), { clipPath: 'inset(0 100% 0 0)', duration: 1.2, stagger: 0.05, delay: 0.7, ease: 'expo.out' });
  gsap.from('.nav .brand, .nav nav', { opacity: 0, y: -12, duration: 0.9, delay: 0.3, clearProps: 'transform,opacity' });
  spine.reveal = 0;
  gsap.to(spine, { reveal: 1, duration: 2.4, ease: 'power2.inOut', delay: 0.5 });
  gsap.timeline({ scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 0.6 } }).to(spinSt, { scroll: 1, ease: 'none' });
  gsap.to('.hero-copy, .wheelwrap', { opacity: 0, ease: 'none', scrollTrigger: { trigger: '#hero', start: () => innerHeight * 0.3, end: () => innerHeight * 0.95, scrub: true } });
} else spine.reveal = 1;

// ---- spine + object canvases
const secEls = $$('[data-layout]');
const sp = initSpine($('#spine'), secEls);
const objC = $('#obj'), octx = objC.getContext('2d');
const bgC = $('#bgfx'), bctx = bgC.getContext('2d');
function sizeObj() {
  const dpr = Math.min(2, devicePixelRatio || 1);
  [objC, bgC].forEach((c) => { c.width = Math.round(innerWidth * dpr); c.height = Math.round(innerHeight * dpr); c.style.width = innerWidth + 'px'; c.style.height = innerHeight + 'px'; });
  spine.dpr = dpr;
}
// slots (deep 3D + finale logo) and bird perches
function place() {
  const W = innerWidth, H = innerHeight;
  const put = (el, z) => { el.style.left = z.x0 + 'px'; el.style.top = z.y0 + 'px'; el.style.width = z.x1 - z.x0 + 'px'; el.style.height = z.y1 - z.y0 + 'px'; };
  put($('#finale-logo'), finaleZone(W, H));
  const m = W < 820;
  $$('.sec').forEach((sec) => {
    const pe = sec.querySelector('.perch'); if (!pe) return;
    const nm = sec.dataset.layout, L = LAYOUTS[nm](W, H);
    let x = L.fx0 - 64, y = L.y0 - 14;
    if (nm === 'protocol') x = m ? L.fx0 - 66 : Math.max(37 + 0.208 * W, L.fx0 - Math.max(446, 0.31 * W));
    if (nm === 'hero') { x = m ? 30 : Math.max(60, wheelEl.getBoundingClientRect().left - 90); }
    if (nm === 'close' && m) { x = 0.2 * W; y = L.y0 - 14; }
    pe.style.left = Math.max(24, x) + 'px'; pe.style.top = y + 'px';
  });
}
function layoutAll() {
  sizeObj();
  if (innerWidth < 820) { // mobile: bars flow under the copy, the wheel centres on them
    wheelEl.style.top = '0px';
    const st = heroStage.getBoundingClientRect(), bl = barsList.getBoundingClientRect();
    wheelEl.style.top = (bl.top - st.top + bl.height / 2) + 'px';
  } else wheelEl.style.top = '';
  measureHero(); place();
}
layoutAll();
addEventListener('resize', () => { layoutAll(); sp.resize(); ScrollTrigger.refresh(); });
ScrollTrigger.addEventListener('refresh', () => sp.measure());
if (window.ResizeObserver) { let rt = 0; new ResizeObserver(() => { clearTimeout(rt); rt = setTimeout(() => sp.measure(), 120); }).observe(document.body); }
if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { layoutAll(); ScrollTrigger.refresh(); });

initHeroHover(); initHeadings(); initFooterLine();
const scenes = makeScenes();
import_arrive();
function import_arrive() { const prev = spine.onArrive; spine.onArrive = (i) => { if ((spine.weights[0] || 0) > 0.6) hitBar(i); if (arriveMap.seerapp) arriveMap.seerapp(i); if (arriveMap.opportunity) arriveMap.opportunity(i); }; }
const bgs = makeBg(); delete bgs.opportunity; delete bgs.futarchy;
const NOOFF = new Set(['protocol', 'seerapp', 'futarchy', 'close', 'deep']);
const state = {};
Object.keys(scenes).forEach((k) => {
  const el = document.getElementById(k);
  state[k] = { el, target: 0, p: 0, en: 0 };
});
const barsEl = $('#bars');

let time = 0, started = false;
const hooks = [];
gsap.ticker.add((_, deltaMs) => {
  const dt0 = Math.min(0.05, (deltaMs || 16) / 1000);
  const dt = reduced ? dt0 * 0.3 : dt0;
  time += dt;
  const W = innerWidth, H = innerHeight;
  // progress + enter timers
  Object.keys(scenes).forEach((k) => {
    const s = state[k]; const ix = secEls.indexOf(s.el), sy = scrollY;
    const r = { top: spine.docTop[ix] - sy, height: spine.docH[ix], bottom: spine.docTop[ix] + spine.docH[ix] - sy };
    const raw = clamp(-r.top / Math.max(1, r.height - H));
    s.target = raw;
    s.p = started ? lerp(s.p, raw, 1 - Math.exp(-dt0 * 12)) : raw;
    const wgt = spine.weights[spine.names.indexOf(k)] || 0;
    s.en = wgt > 0.35 ? clamp(s.en + dt0 / 1.3) : Math.max(0, s.en - dt0 * 0.8);
    s.r = r;
  });
  started = true;
  
  if (!arrived && (reduced || spine.reveal > 0.95)) { arrived = true; }
  
  { const hw = spine.weights[0] || 0; barsEl.style.opacity = clamp(hw * 1.5).toFixed(3);
    spine.hole = null; }

  // scenes first (they set spine.ext), spine second, objects drawn from spine geometry
  octx.setTransform(spine.dpr, 0, 0, spine.dpr, 0, 0);
  octx.clearRect(0, 0, W, H);
  const pending = [];
  Object.keys(scenes).forEach((k) => {
    const s = state[k], r = s.r, sc = scenes[k];
    pending.push(() => {
      octx.save();
      const top = Math.max(0, r.top), bot = Math.min(H, r.bottom);
      const wk = spine.weights[spine.names.indexOf(k)] || 0;
      if (!NOOFF.has(k)) {
        octx.beginPath(); if (bot > top) octx.rect(0, top, W, bot - top); else octx.rect(0, 0, 0, 0);
        octx.clip();
        const off = r.top > 0 ? r.top : Math.min(0, r.bottom - H); octx.translate(0, off);
        fx.a = 1;
      } else fx.a = clamp(Math.pow(wk, 1.3) * 1.15);
      if (k !== 'futarchy' || (r.top <= 0 && r.bottom >= H)) sc.draw(octx, W, H, time, dt, s.p, s.en);
      octx.restore();
    });
  });
  // pass 1: run draws to set ext (using last frame's spine.cur), then spine, so labels line up next frame
  sp.frame(time, dt);
  pending.forEach((f) => f());
  for (const h of hooks) h(time, dt0);
  bctx.setTransform(spine.dpr, 0, 0, spine.dpr, 0, 0);
  bctx.clearRect(0, 0, W, H);
  Object.keys(bgs).forEach((k) => {
    const s = state[k], r = s.r, top = Math.max(0, r.top), bot = Math.min(H, r.bottom);
    const kk = clamp((spine.weights[spine.names.indexOf(k)] || 0) * 1.8);
    if (bot <= top || kk < 0.02) return;
    bctx.save(); bctx.beginPath(); bctx.rect(0, top, W, bot - top); bctx.clip();
    bctx.translate(0, r.top > 0 ? r.top : Math.min(0, r.bottom - H));
    bgs[k](bctx, W, H, time, dt, s.p, s.en, kk);
    bctx.restore();
  });
});

addEventListener('load', () => ScrollTrigger.refresh());
window.__neon = { state, spine, lenis, scenes, heroGeom, hook: (f) => hooks.push(f) };
