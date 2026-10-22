import * as THREE from 'three';
import { SVGLoader } from '../../lib/jsm/loaders/SVGLoader.js';
import logoSvg from './logo.svg';
import { deepStage } from './deep.js';

const FOV = 20;
const dprCap = () => Math.min(2, window.devicePixelRatio || 1);
const reduce = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

function makeEnv(renderer) {
  const s = new THREE.Scene();
  s.add(new THREE.Mesh(new THREE.BoxGeometry(40, 20, 40), new THREE.MeshBasicMaterial({ color: 0x050508, side: THREE.BackSide })));
  const panel = (w, h, col, k, pos, look) => {
    const c = new THREE.Color(col).multiplyScalar(k);
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: c, side: THREE.DoubleSide }));
    m.position.set(...pos); m.lookAt(...look); s.add(m);
  };
  panel(22, 3, 0xffffff, 9, [0, 9.5, 2], [0, 0, 0]);
  panel(2, 14, 0x9a63ff, 14, [-12, 1, 3], [0, 0, 0]);
  panel(2, 14, 0x7b3ff2, 12, [12, 1, -2], [0, 0, 0]);
  panel(18, 1.2, 0xffffff, 6, [0, -2, -14], [0, 0, 0]);
  panel(10, 10, 0x1a1030, 2, [0, -9, 0], [0, 0, 0]);
  panel(30, 14, 0x3a1a90, 1.5, [0, 1, 17], [0, 0, 0]);
  panel(3, 16, 0xffffff, 10, [-5, 2, 15], [0, 0, 0]);
  panel(1.2, 16, 0xffffff, 8, [6, 2, 15], [0, 0, 0]);
  const pm = new THREE.PMREMGenerator(renderer);
  const rt = pm.fromScene(s, 0.02);
  pm.dispose();
  return rt.texture;
}

function buildLogo(material) {
  const data = new SVGLoader().parse(logoSvg);
  const holder = new THREE.Group();
  data.paths.forEach((p) => {
    p.toShapes(true).forEach((shape) => {
      const geo = new THREE.ExtrudeGeometry(shape, { depth: 5, bevelEnabled: true, bevelThickness: 0.9, bevelSize: 0.5, bevelSegments: 3, curveSegments: 14 });
      holder.add(new THREE.Mesh(geo, material));
    });
  });
  const box = new THREE.Box3().setFromObject(holder);
  const c = box.getCenter(new THREE.Vector3());
  holder.children.forEach((m) => m.position.set(-c.x, -c.y, -c.z));
  const pivot = new THREE.Group(); pivot.add(holder); pivot.scale.set(1, -1, 1);
  const root = new THREE.Group(); root.add(pivot);
  return root;
}

/* shared mount scaffold: own renderer, sized to el, renders only on screen */
function scaffold(el, setup) {
  let renderer;
  try {
    const t = document.createElement('canvas');
    if (!(t.getContext('webgl2') || t.getContext('webgl'))) throw new Error('nogl');
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  } catch (e) {
    el.classList.add('seer-glass-nogl');
    return { destroy() {} };
  }
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NoToneMapping;
  const cv = renderer.domElement;
  cv.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;display:block';
  if (getComputedStyle(el).position === 'static') el.style.position = 'relative';
  el.appendChild(cv);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(FOV, 1, 40, 14000);
  scene.environment = makeEnv(renderer);
  scene.add(new THREE.HemisphereLight(0xffffff, 0x4b3bff, 0.8));
  const key = new THREE.DirectionalLight(0xffffff, 1.9); key.position.set(-300, 700, 900); scene.add(key);
  const rim = new THREE.DirectionalLight(0x9a63ff, 2.2); rim.position.set(500, 200, -500); scene.add(rim);

  const api = { renderer, scene, camera, key, rim, W: 1, H: 1 };
  const inst = setup(api);

  const ptr = { x: 0, y: 0, tx: 0, ty: 0 };
  const onMove = (e) => {
    const r = el.getBoundingClientRect();
    ptr.tx = Math.max(-1, Math.min(1, ((e.clientX - r.left) / Math.max(1, r.width)) * 2 - 1));
    ptr.ty = Math.max(-1, Math.min(1, ((e.clientY - r.top) / Math.max(1, r.height)) * 2 - 1));
  };
  addEventListener('pointermove', onMove, { passive: true });

  function resize() {
    const r = el.getBoundingClientRect();
    const W = Math.max(2, Math.round(r.width)), H = Math.max(2, Math.round(r.height));
    api.W = W; api.H = H;
    renderer.setPixelRatio(dprCap()); renderer.setSize(W, H, false);
    camera.aspect = W / H;
    camera.position.set(0, 0, (H / 2) / Math.tan(THREE.MathUtils.degToRad(FOV / 2)));
    camera.updateProjectionMatrix();
    inst.resize && inst.resize(W, H);
  }
  const ro = new ResizeObserver(resize); ro.observe(el);
  resize();

  let visible = true, raf = 0, t = reduce() ? 3.4 : 0, last = performance.now(), dead = false;
  const io = new IntersectionObserver((es) => { visible = es[0].isIntersecting; if (visible) { last = performance.now(); loop(); } }, { rootMargin: '80px' });
  io.observe(el);
  function loop() {
    cancelAnimationFrame(raf);
    if (dead || !visible) return;
    raf = requestAnimationFrame(loop);
    const now = performance.now(); let dt = Math.min(0.05, (now - last) / 1000); last = now;
    if (reduce()) dt = 0; else t += dt;
    const k = Math.min(1, dt * 4 + (reduce() ? 1 : 0));
    ptr.x += (ptr.tx - ptr.x) * k; ptr.y += (ptr.ty - ptr.y) * k;
    inst.frame(t, dt, ptr, api);
    renderer.render(scene, camera);
  }
  loop();
  return {
    destroy() {
      dead = true; cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); removeEventListener('pointermove', onMove);
      scene.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
      renderer.dispose(); cv.remove();
    },
  };
}

function renderer_cv(api) { return api.renderer.domElement; }

const REPOS = ['consensus-specs', 'ethers.js', 'lighthouse', 'nimbus-eth2', 'gnark-crypto', 'foundry', 'blst', 'mev-boost', 'teku', 'go-ethereum'];
const _v = new THREE.Vector3(), _w = new THREE.Vector3();
const deepApi = { anchors: [], sel: null, st: null, pulse(i) { const s = deepApi.st; if (s && deepApi.sel) s.boost[deepApi.sel[i]] = 1; } };
function mountDeep(el) {
  return scaffold(el, (api) => {
    const st = deepStage(el);
    api.scene.add(st.group);
    deepApi.st = st; deepApi.sel = null;
    const tag = document.createElement('div');
    tag.style.cssText = 'position:absolute;left:0;top:0;pointer-events:none;white-space:nowrap;padding:5px 11px;border-radius:999px;background:rgba(10,8,24,.78);border:1px solid rgba(255,255,255,.45);color:#fff;font:600 12px/1 "Inter Tight",system-ui,sans-serif;letter-spacing:.02em';
    el.appendChild(tag);
    const ptr0 = { x: 0, y: 0 };
    return {
      resize(W, H) { st.group.scale.setScalar((Math.min(W, H) / st.design) * 0.82); deepApi.sel = null; deepApi.n = 0; },
      frame(t, dt, ptr) {
        st.update(t, dt, 0, ptr || ptr0);
        st.group.updateMatrixWorld(true);
        {
          const pts = [];
          for (let k = 0; k < 64; k++) { st.cellLocal(k, _w).project(api.camera); pts.push({ k, x: ((_w.x + 1) / 2) * api.W, y: ((1 - _w.y) / 2) * api.H }); }
          deepApi.n = (deepApi.n || 0) + 1;
          if (!deepApi.sel && deepApi.n > 12 && api.W > 100) {
            const ys = pts.map((q) => q.y), xs = pts.map((q) => q.x), y0 = Math.min(...ys), y1 = Math.max(...ys), x0 = Math.min(...xs), used = new Set(), sel = [];
            for (let i = 0; i < 10; i++) {
              const ty = y0 + ((y1 - y0) * (i + 0.5)) / 10; let best = null, bs = 1e9;
              pts.forEach((q) => { if (used.has(q.k)) return; const sc = Math.abs(q.y - ty) + 0.12 * (q.x - x0); if (sc < bs) { bs = sc; best = q; } });
              used.add(best.k); sel.push(best.k);
            }
            deepApi.sel = sel;
          }
          deepApi.anchors = (deepApi.sel || []).map((k) => pts[k]);
          deepApi.W = api.W; deepApi.H = api.H;
        }
        _v.setFromMatrixPosition(st.agent.matrixWorld).project(api.camera);
        tag.style.transform = `translate(${((_v.x + 1) / 2) * api.W}px,${((1 - _v.y) / 2) * api.H}px) translate(-50%,-190%)`;
        const nm = REPOS[(st.state.u > 0.5 ? st.state.b : st.state.a) % REPOS.length];
        if (tag.textContent !== nm) tag.textContent = nm;
      },
    };
  });
}

const pulseSubs = new Set();
let pulseLevel = 0;
function logoPulse(s) { pulseLevel = Math.max(0, Math.min(1, +s || 0)); pulseSubs.forEach((f) => f(pulseLevel)); }

function mountLogo(el, opts = {}) {
  const floorOn = opts.floor !== false;
  return scaffold(el, (api) => {
    if (floorOn) { const m = 'linear-gradient(#000 62%,transparent 98%)'; renderer_cv(api).style.webkitMaskImage = m; renderer_cv(api).style.maskImage = m; }
    const logoMat = new THREE.MeshPhysicalMaterial({ color: 0xc9c0ee, metalness: 1, roughness: 0.12, clearcoat: 1, clearcoatRoughness: 0.03, envMapIntensity: 1.7, emissive: 0x7b3ff2, emissiveIntensity: 0 });
    const logoRoot = buildLogo(logoMat);
    const mirror = logoRoot.clone(true);
    const logoRig = new THREE.Group(); logoRig.add(logoRoot);
    const mirrorWrap = new THREE.Group(); mirrorWrap.scale.y = -1; mirrorWrap.add(mirror);
    const mirrorRig = new THREE.Group(); mirrorRig.add(mirrorWrap);
    const floorMat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false,
      vertexShader: 'varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
      fragmentShader: 'varying vec2 vUv; void main(){float a=mix(0.84,1.0,smoothstep(0.0,0.5,1.0-vUv.y)); gl_FragColor=vec4(0.039,0.039,0.039,a);}',
    });
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), floorMat);
    const g = new THREE.Group();
    g.add(mirrorRig, floor, logoRig);
    api.scene.add(g);
    let k = 1, hh = 64, W = 2, H = 2;
    const baseRim = api.rim.intensity, baseEnv = 1.7;
    let target = pulseLevel, cur = pulseLevel;
    const sub = (v) => { target = v; };
    pulseSubs.add(sub);
    if (el.__seerLogoPulse === undefined) el.__seerLogoPulse = (v) => { target = Math.max(0, Math.min(1, v)); };
    return {
      resize(w, h) {
        W = w; H = h;
        k = Math.min(w * 0.86 / 138, h * (floorOn ? 0.42 : 0.8) / 64);
        logoRoot.scale.setScalar(k); mirror.scale.setScalar(k);
        hh = 64 * k;
        floor.scale.set(138 * k * 1.3, hh * 0.4, 1);
        mirrorRig.visible = floor.visible = floorOn && w >= 500;
        g.position.y = floorOn ? h * 0.17 : 0;
      },
      frame(t, dt, ptr) {
        cur += (target - cur) * Math.min(1, dt * 8 + (reduce() ? 1 : 0));
        api.rim.intensity = baseRim + cur * 6;
        logoMat.emissiveIntensity = cur * 0.55;
        logoMat.envMapIntensity = baseEnv + cur * 1.1;
        const bob = Math.sin(t * 0.9) * 8 * (k / 3);
        logoRig.position.y = bob;
        logoRig.rotation.set(-ptr.y * 0.22 + Math.sin(t * 0.7) * 0.05, (ptr.x + Math.sin(t * 0.35) * 0.45 + 0.3) * 0.55 + Math.sin(t * 0.5) * 0.28, Math.sin(t * 0.6) * 0.02);
        const floorY = -hh / 2 - 44 * (k / 3);
        mirrorRig.position.set(0, 2 * floorY - bob, -70 * (k / 3));
        mirror.rotation.copy(logoRig.rotation);
        floor.position.set(0, floorY - hh * 0.2, -35 * (k / 3));
      },
    };
  });
}

window.SeerGlass = { mountDeep, mountLogo, logoPulse, deep: deepApi };
