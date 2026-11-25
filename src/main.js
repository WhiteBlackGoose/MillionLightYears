import '@fontsource/italiana'; import '@fontsource-variable/martian-mono'; import './style.css';
import * as THREE from 'three';
import { clock, V, C, rng } from './glsl.js';
import { C0, LY, AU, FAR, shared, mat, REL, dist, span } from './core.js';
import { Post } from './post.js';
import { Sky, skyMesh } from './sky.js';
import { Universe } from './universe.js';
import { Galaxies } from './galaxies.js';
import { GMap } from './map.js';
import { Stars, starName, starClass, starRadius } from './stars.js';
import { buildSystem, materialize, dematerialize, WEATHER } from './system.js';
import { Props, pump } from './terrain.js';
import { noise } from './height.js';
import { buildShip, Trails, dustField, Sparks, weatherField, tagLD } from './ship.js';
import { Audio } from './audio.js';
import { bodyRows, starObjRows, html } from './data.js';
import { turnResult, turnStep } from './course.js';
import { Dial } from './dial.js';
import { Radar } from './radar.js';
import { sci, kinetic, rapidity, gees, si, mass, compare, ships } from './energy.js';

const $ = s => document.querySelector(s), body = document.body;
const LIGHTS = [
  { id: 'blackhole', hue: '#b06cff', name: 'Violet light', how: 'Fly close around a black hole', line: 'It fell for a thousand years, and you were there for six seconds of it.' },
  { id: 'quasar', hue: '#6f8cff', name: 'Blue light', how: 'Ride a jet of the Heart, the galactic core', line: 'Older than every world you have seen.' },
  { id: 'pulsar', hue: '#4fe6ff', name: 'Cyan light', how: "Let a pulsar's beam sweep over you", line: 'A dead star, still keeping time.' },
  { id: 'planet', hue: '#86f29b', name: 'Green light', how: 'Walk on a world that has weather', line: 'Someone might have called it home.' },
  { id: 'star', hue: '#ffd45e', name: 'Golden light', how: "Hold inside a star's corona", line: 'Eight minutes old, and still warm.' },
  { id: 'asteroid', hue: '#ff9440', name: 'Amber light', how: 'Land on an asteroid', line: 'Sealed since before there were planets.' },
  { id: 'nebula', hue: '#ff4d7e', name: 'Red light', how: 'Fly into a nebula', line: 'Every sun begins as weather.' }];

const renderer = new THREE.WebGLRenderer({ canvas: $('#c'), antialias: false, powerPreference: 'high-performance', logarithmicDepthBuffer: true });
renderer.toneMapping = THREE.NoToneMapping; renderer.outputColorSpace = THREE.LinearSRGBColorSpace; renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
const post = new Post(renderer), cam = new THREE.PerspectiveCamera(64, 1, .1, FAR), mapCam = new THREE.PerspectiveCamera(50, 1, 1, 20000);
const scene = new THREE.Scene(); scene.add(skyMesh()); const stars = new Stars(), sky = new Sky(renderer); scene.add(stars.group); const gals = new Galaxies(); scene.add(gals.mesh);
const ship = buildShip(), trails = new Trails(ship.glow), dust = dustField(), sparks = new Sparks(), weather = weatherField(), props = new Props(), audio = new Audio();
const fx = new THREE.Group(); fx.add(ship.group, trails.mesh, dust.mesh, sparks.mesh, weather.mesh); tagLD(fx); scene.add(fx, props.group);
const sunL = new THREE.DirectionalLight('#fff', 3), hemi = new THREE.HemisphereLight('#8fa4c8', '#2a2622', .25); scene.add(sunL, sunL.target, hemi);
// plasma sheath on atmospheric entry
const plasma = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 20).scale(6.6, 2.6, 7), new THREE.ShaderMaterial({ transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, uniforms: { uTime: clock, uI: { value: 0 } }, vertexShader: 'varying vec3 vP,vN,vV;void main(){vP=position;vec4 m=modelViewMatrix*vec4(position,1.);vN=normalMatrix*normal;vV=-m.xyz;gl_Position=projectionMatrix*m;}', fragmentShader: 'varying vec3 vP,vN,vV;uniform float uTime,uI;void main(){float f=1.-abs(dot(normalize(vN),normalize(vV)));float n=.6+.4*sin(vP.x*3.+uTime*31.)*sin(vP.z*2.-uTime*47.);float e=pow(f,3.)*smoothstep(3.,-6.,vP.z)*n;gl_FragColor=vec4(mix(vec3(1.,.25,.05),vec3(1.,.7,.4),e)*e*uI*1.8,1.);}' })); ship.group.add(plasma); tagLD(plasma);
// unresolved planets and the local star's glare
const PN = 160, pg = new THREE.BufferGeometry(); for (const [k, n] of [['position', 3], ['color', 3], ['ps', 1]]) pg.setAttribute(k, new THREE.BufferAttribute(new Float32Array(PN * n), n).setUsage(THREE.DynamicDrawUsage));
const pts = new THREE.Points(pg, mat({ transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, vertexColors: true, uniforms: { uPx: { value: 1 } }, vertexShader: REL + 'attribute float ps;uniform float uPx;varying vec3 vC;varying float vLW,vS;void main(){vec3 p=aberr(position);vC=doppler(color,normalize(position));vS=ps;gl_PointSize=ps*uPx;gl_Position=projectionMatrix*vec4(mat3(viewMatrix)*p,1.);vLW=gl_Position.w;}', fragmentShader: REL + 'varying vec3 vC;varying float vLW,vS;void main(){vec2 q=abs(gl_PointCoord-.5)*2.;float d=length(q);float a=exp(-d*d*9.);if(vS>14.)a=exp(-d*d*60.)*2.+exp(-d*6.)*.5+(exp(-q.x*40.)*exp(-q.y*3.)+exp(-q.y*40.)*exp(-q.x*3.))*.3;gl_FragColor=vec4(vC*a*smoothstep(1.,.6,d),1.);gl_FragDepth=logd(vLW);}' })); pts.frustumCulled = false; pts.renderOrder = -7; scene.add(pts);

function resize() { const w = innerWidth, h = innerHeight; renderer.setSize(w, h, false); const pr = renderer.getPixelRatio(); post.size(w * pr, h * pr); for (const c of [cam, mapCam]) { c.aspect = w / h; c.updateProjectionMatrix(); } }
addEventListener('resize', resize); resize();

// ---------- state
const KEY = 'afterlight-2'; let save = null; try { save = JSON.parse(localStorage.getItem(KEY)); } catch { }
const fresh = (n = 1) => ({ seed: (Math.random() * 1e9) | 0, got: [], n, landed: 0, years: 0, spent: 0 });
const st = Object.assign(fresh(), save || {});
const P = { pos: V(), q: new THREE.Quaternion(), w: 0, thr: .4, drift: V(), hull: 100, roll: 0, inv: 0, boostT: 0, state: 'fly' };
function persist() { try { localStorage.setItem(KEY, JSON.stringify({ seed: st.seed, got: st.got, n: st.n, landed: st.landed, years: st.years, spent: st.spent, at: anchor && { g: cur.id, star: { ...anchor, c: undefined, G: undefined, land: anchor.land }, pos: P.pos.toArray(), q: P.q.toArray() } })); } catch { } }
setInterval(() => { if (mode === 'flight' && !warp && P.state === 'fly') persist(); }, 5000);
let hover = null, hovT = 0, sheetOn = true, sheetKey = null;
let mode = 'title', uni, cur, anchor, sys, bodies = [], target = null, gaze = false, glide = false, warp = null, dead = 0, started = false;
const gal = V(), sysG = new THREE.Group(); scene.add(sysG);
let flash = 0, flashC = V(1, 1, 1), shake = 0, near = [], nb = null, alt = Infinity, nearD = Infinity, gamma = 1, beta = 0, yearsShip = 0;
let paused = false, hold = null, trip = null, freeExit = false; const radar = new Radar($('#radar')), EN = { last: 0, power: 0, burn: 0, total: 0, idle: 9, sign: 0, prev: null, eta: 0, a: 0, gmax: 0 };
// 1 cruise, 2..4 ordinary speeds, 5..9 = c minus 10^-3, 10^-6 ... 10^-15 of c (stored as proper velocity)
const CRUISE = 2500, near1 = k => { const e = 10 ** -k; return C0 * (1 - e) / Math.sqrt(e * (2 - e)); };
const SUP = n => [...String(n)].map(c => '⁰¹²³⁴⁵⁶⁷⁸⁹'[c]).join(''), TOP = 81, cel = b => b * C0 / Math.sqrt(1 - b * b);
// index: 0 stop, 1 cruise, then gears 2.0 ... 9.9. Entries: [proper velocity, text, dial text]
const gid = (g, s) => (g - 2) * 10 + s + 2, gearName = i => i === 0 ? 'Stop' : i === 1 ? 'Cruise' : `${Math.floor((i - 2) / 10) + 2}.${(i - 2) % 10}`;
const SET = [[0, 'full stop', ['0 m/s', '', '']], [CRUISE, '2.5 km/s', ['2.5 km/s', '', '']]];
{ const km = v => SET.push([v * 1000, `${v} km/s`, [`${v} km/s`, '', '']]); for (let s = 0; s < 10; s++) km((s + 1) * 10); for (const v of [125, 160, 200, 250, 320, 400, 500, 630, 800, 1000]) km(v);
  for (const b of [.005, .01, .02, .05, .1, .2, .4, .6, .8, .9]) SET.push([cel(b), `${b} c`, [`${b} c`, '', '']]);
  for (let k = 2; k <= 51; k++) SET.push([near1(k), `c − 10⁻${SUP(k)} c`, ['c − 10', '−' + k, ' c']]); }
function setSpeed(n, shift) {
  if (P.state !== 'fly') return; gaze = false;
  if (n === 0) { hold = { n: 0, w: 0, t: SET[0][1] }; glide = false; P.thr = 0; toast('Full stop'); audio.tone(110, .5, .06, 'sine', 60); return; }
  if (!shift && n > 1 && hold?.n === n) { hold = null; toast(glide ? 'Autopilot speed: automatic' : 'Gear off'); return; }
  const was = hold?.n ?? 0; hold = { n, w: SET[n][0], t: SET[n][1] }; if (n === 1) P.thr = 1; audio.tone(150 + n * 9, .16, .05, 'triangle', (150 + n * 9) * (n >= was ? 1.35 : .75)); toast((glide ? 'Autopilot, gear ' : 'Gear ') + gearName(n) + ': ' + hold.t);
}
// present speed on the gear scale
const gearPos = () => gearAt(P.w);
const gearBase = d => hold ? hold.n : d > 0 ? Math.floor(gearPos() + .02) : Math.ceil(gearPos() - .02);
function shiftGear(d) { setSpeed(Math.max(0, Math.min(TOP, gearBase(d) + d)), true); }
const dial = new Dial($('#dial')), segE = [2, 3, 4, 5, 6, 7, 8, 9].map(g => kinetic(SET[gid(g, 0)][0]));
function drawDial(dt) { const gp = gearPos(), g = hold ? hold.n : Math.max(gp > .02 ? 1 : 0, Math.min(TOP, Math.floor(gp + .02))), E = kinetic(P.w), b = gearBase(1), c = gearBase(-1); const busy = EN.idle < .3 && EN.power > 0 ? Math.min(1, .25 + Math.log10(1 + EN.a / 9.8) / 12) : 0;
  dial.draw(dt, { gp, sel: hold ? hold.n : -1, label: hold ? gearName(hold.n) : gearName(g), speed: SET[g][2], energy: kinetic(SET[g][0]), segE, power: busy, sign: EN.sign, up: b < TOP ? Math.abs(kinetic(SET[b + 1][0]) - E) : null, down: c > 0 ? Math.abs(E - kinetic(SET[c - 1][0])) : null, mode: !locked && P.w > LOWV ? 'CHANGING COURSE' : glide ? (hold ? 'AUTOPILOT, GEAR SET' : 'AUTOPILOT') : hold ? 'GEAR SET' : 'MANUAL' }); }
const drawGears = () => { $('#spent').innerHTML = `<b>Energy spent ${si(st.spent || 0, 'J')}</b><br>= ${mass(st.spent || 0)} of mass`; };
function startGlide() { if (hold && (hold.n < 2 || hold.auto)) hold = null; glide = true; gaze = false; head = null; if (target.star) startTrip(target.name); }
function startTrip(name) { const A = target.star ? starRel(target.star, V()) : target.pos; trip = { name, E: 0, g: 0, t: 0, y0: st.years, d: A.distanceTo(P.pos), peak: 0 }; $('#report').classList.remove('on'); }
let repT; function endTrip(ok) { const t = trip; trip = null; if (t.t < 1) return; const E = t.E, r = $('#report'); r.querySelector('h3').textContent = ok ? `Journey to ${t.name}` : `Journey to ${t.name}, interrupted`; const rows = [['Energy used', si(E, 'J')], ['Equivalent mass, E = mc²', mass(E)], ['', ships(E)], ['For comparison', compare(E)], ['Distance', dist(t.d)], ['Time on board', span(t.t)], ['Time outside', span((st.years - t.y0) * 3.156e7)], ['Peak acceleration felt', gees(t.g)], ['Peak γ', gfmt(t.peak)]]; r.querySelector('dl').innerHTML = rows.filter(q => q[1]).map(q => `<dt>${q[0]}</dt><dd>${q[1]}</dd>`).join(''); r.classList.add('on'); clearTimeout(repT); repT = setTimeout(() => r.classList.remove('on'), 90000); }
function energyStep(dt) {
  const E = kinetic(P.w), dE = E - EN.last, freeBrake = (nb?.atm && P.pos.distanceTo(nb.pos) - nb.R < nb.atm.top && dE < 0 && !keys.KeyX) || dead || P.state !== 'fly'; EN.last = E;
  // proper acceleration: what is felt on board, exact near c as well
  const eta = rapidity(P.w), skip = dead || gaze || P.state !== 'fly' || EN.skip, acc = skip ? 0 : (P.dEta ?? Math.abs(eta - EN.eta)) * C0 / Math.max(dt, 1e-3); EN.eta = eta; EN.skip = dead || gaze || P.state !== 'fly'; if (skip) return; EN.a += (acc - EN.a) * (1 - Math.exp(-dt * 10));
  const use = freeBrake ? 0 : Math.abs(dE), p = Math.abs(dE) / Math.max(dt, 1e-3); EN.power += (use / Math.max(dt, 1e-3) - EN.power) * (1 - Math.exp(-dt * 8)); EN.total += use; st.spent = (st.spent || 0) + use;
  if (p > Math.max(2e5, E * .02)) { const sg = Math.sign(dE); if (EN.idle > 1.2 || sg !== EN.sign) { if (EN.burn > 0 || EN.gmax > 0) EN.prev = { E: EN.burn, s: EN.sign, g: EN.gmax }; EN.burn = 0; EN.gmax = 0; } EN.sign = sg; EN.idle = 0; } else EN.idle += dt; if (EN.idle < 1.2) { EN.burn += use; EN.gmax = Math.max(EN.gmax, acc); }
  if (trip) { trip.E += use; trip.g = Math.max(trip.g, acc); trip.t += dt; trip.peak = Math.max(trip.peak, gamma); if (!glide) endTrip(trip.arrived); }
}
function setPause(v) { if (v === paused || (v && (mode !== 'flight' || warp))) return; paused = v; $('#pause').hidden = !v; body.classList.toggle('flying', !v && mode === 'flight'); for (const k in keys) keys[k] = false; if (v) { freeExit = true; document.exitPointerLock?.(); setTimeout(() => freeExit = false, 300); if (P.state === 'fly') persist(); audio.x?.suspend(); $('#resume').focus(); } else { audio.x?.resume(); document.activeElement?.blur?.(); if (P.state === 'walk') lockPtr(); } }
document.addEventListener('pointerlockchange', () => { if (!document.pointerLockElement && P.state === 'walk' && mode === 'flight' && !freeExit && helpHidden() && document.hasFocus()) setPause(true); });
const keys = {}, mouse = { x: 0, y: 0, down: false };
const tmp = V(), tmp2 = V(), F = V(), A = V(), dq = new THREE.Quaternion(), eul = new THREE.Euler(), m4 = new THREE.Matrix4(), camPos = V();

function galPos() { return gal.set(anchor.x + P.pos.x / LY, anchor.y + P.pos.y / LY, anchor.z + P.pos.z / LY); }
function loadGalaxy() { uni = new Universe(st.seed); stars.uni = uni; setGalaxy(uni.home); gmap.setUniverse(uni); }
function setGalaxy(G) { cur = G; uni.pin(G); stars.setGalaxy(G); sky.setGalaxy(); }
// metres from the anchor to a star (or galaxy centre), also across galaxies
const starRel = (s, o) => { const g = s.G && s.G !== cur ? s.G : null; return o.set((s.x - anchor.x + (g ? g.pos[0] - cur.pos[0] : 0)) * LY, (s.y - anchor.y + (g ? g.pos[1] - cur.pos[1] : 0)) * LY, (s.z - anchor.z + (g ? g.pos[2] - cur.pos[2] : 0)) * LY); };
const uniPos = () => { galPos(); return V(gal.x + cur.pos[0], gal.y + cur.pos[1], gal.z + cur.pos[2]); };
function switchGalaxy(G) { const u = uniPos(); keepTarget(anchor); setGalaxy(G); const h = stars.marks[12]; anchor = null; P.pos.set((u.x - G.pos[0] - h.x) * LY, (u.y - G.pos[1] - h.y) * LY, (u.z - G.pos[2] - h.z) * LY); near = []; setAnchor(h); if (!glide && !dead) banner(G.name, G.label); }
let picked = false; // the player chose this target: keep it whatever system or galaxy we pass
function keepTarget(a) { if (picked && a && target && !target.star && bodies.includes(target)) target = { star: a, body: target === sys.main ? null : target.name, name: target.name, label: target.label }; }
function choose(h) { if (!h) return; if (h.s?.G) uni.pin(h.s.G); target = h.b || { star: h.s, name: starName(h.s) }; picked = true; toast(`Selected: ${target.name}. Press F to fly there`); }
function setAnchor(s) {
  const old = anchor; if (old && old.id !== s.id) keepTarget(old); for (const b of bodies) dematerialize(b); if (props.body) props.setup(null); nb = null;
  if (old) P.pos.set(P.pos.x + (old.x - s.x) * LY, P.pos.y + (old.y - s.y) * LY, P.pos.z + (old.z - s.z) * LY);
  const wasTarget = target && target.star && target.star.id === s.id, wantBody = wasTarget && target.body;
  anchor = s; sys = buildSystem(s); bodies = sys.bodies; if (!target || wasTarget || !target.star) target = wasTarget || !target ? sys.main : target; if (target && !target.star && !bodies.includes(target)) target = sys.main;
  if (wantBody) target = bodies.find(b => b.name === wantBody) || sys.main;
  hover = null; buildMarkers(); $('#place h2').textContent = sys.name; $('#place p').textContent = `${starClass(s)}, ${bodies.length - 1} known bodies, ${cur.name}`; audio.chord(s.k === 'star' ? ['star', 'binary', 'nebula'][s.seed % 3] : s.k);
}
function spawn(saved) {
  target = null; anchor = null;
  if (saved) { setGalaxy(uni.byId(saved.g)); const sid = saved.star.id.split('|').pop(), m = stars.marks.find(m => m.id.split('|').pop() === sid); setAnchor(m || { ...saved.star, G: cur }); P.pos.fromArray(saved.pos); P.q.fromArray(saved.q); target = sys.main; }
  else { setAnchor(stars.marks[0]); const b = bodies.find(b => b.type === 'terran' && !b.moon), n = b.sunDir.clone().applyAxisAngle(V(0, 1, 0), .95); n.y = .22; n.normalize(); P.pos.copy(b.pos).addScaledVector(n, b.R * 2.7); m4.lookAt(P.pos, b.pos, V(0, 1, 0)); P.q.setFromRotationMatrix(m4); target = b; }
  F.set(0, 0, -1).applyQuaternion(P.q); head = null; lockCourse(); trip = null; picked = false; hold = null; EN.last = 0; EN.skip = true; P.w = 0; P.thr = .3; P.drift.set(0, 0, 0); P.hull = 100; P.state = 'fly'; P.inv = 3; galPos(); stars.update(gal, 0, px()); sky.bakeNow(stars, gal); envMap(); trails.reset();
}
const px = () => post.scale * renderer.getPixelRatio() * innerHeight / 900;
function envMap() { const pm = new THREE.PMREMGenerator(renderer); scene.userData.pm?.dispose(); const t = pm.fromCubemap(sky.rts[sky.cur].texture); scene.userData.pm = t; scene.environment = t.texture; scene.environmentIntensity = 2; pm.dispose(); }
function setMode(m) { mode = m; body.classList.toggle('flying', m === 'flight'); body.classList.toggle('mapping', m === 'map'); if (m === 'map') gmap.open({ p: uniPos(), anchor, G: cur, way: target && (target.star ? { star: target.star, name: target.name } : { star: anchor, name: target.name }) }); }
const roman = n => { let s = ''; for (const [v, r] of [[10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']]) while (n >= v) { s += r; n -= v; } return s; };
function goWarp(fn, dur = 2.6) { if (warp) return; warp = { t: 0, dur, fn, done: false, ready: false }; audio.warp(); }

// ---------- interface
let bt, tt;
function banner(h, p, c) { const b = $('#banner'); b.querySelector('h1').textContent = h; b.querySelector('p').textContent = p; b.style.setProperty('--c', c || '#f2ead9'); b.classList.add('on'); clearTimeout(bt); bt = setTimeout(() => b.classList.remove('on'), 4800); }
function toast(s) { const t = $('#toast'); t.textContent = s; t.classList.add('on'); clearTimeout(tt); tt = setTimeout(() => t.classList.remove('on'), 2800); }
const specX = [6, 19, 34, 48, 62, 76, 92];
$('#spectrum').innerHTML = LIGHTS.map((l, i) => `<i data-id="${l.id}" style="left:${specX[i]}%;--c:${l.hue}"></i>`).join('');
$('#helplights').innerHTML = LIGHTS.map(l => `<dt style="color:${l.hue}">${l.name}</dt><dd>${l.how}</dd>`).join('');
function drawSpectrum() { document.querySelectorAll('#spectrum i').forEach(e => e.classList.toggle('on', st.got.includes(e.dataset.id))); const l = LIGHTS.find(l => l.id === st.got.at(-1)); ship.glow.value.copy(l ? C(l.hue) : V(1, .68, .35)); }
let mk = []; const hueOf = b => ({ star: '#ffd45e', blackhole: '#b06cff', quasar: '#ffffff', pulsar: '#4fe6ff', gas: '#ffc9a0' })[b.kind] || (b.type === 'asteroid' ? '#ff9440' : b.atm ? '#86f29b' : '#c8c2ba');
function mkOne(hue) { const e = document.createElement('div'); e.className = 'mk'; e.innerHTML = '<i></i><span><b style="font-weight:400"></b><em></em></span>'; e.style.setProperty('--c', hue); $('#markers').append(e); return { e, sp: e.querySelector('span'), nm: e.querySelector('b'), em: e.querySelector('em') }; }
let starMk, hovMk; function buildMarkers() { $('#markers').innerHTML = ''; mk = bodies.map(b => { const m = mkOne(hueOf(b)); m.b = b; m.nm.textContent = b.name; return m; }); starMk = mkOne('#cfe3ff'); hovMk = mkOne('#ffffff'); hovMk.e.classList.add('hv'); }
const relV = V();
function aberrJS(v) { const b = shared.uBeta.value; if (b < 1e-4) return v; const l = v.length(), B = shared.uBDir.value; v.divideScalar(l); const c = v.dot(B), g = 1 / Math.sqrt(1 - b * b); relV.copy(v).addScaledVector(B, -c); if (shared.uMeas.value > .5) v.copy(relV).addScaledVector(B, c / g).normalize(); else { const k = 1 + b * c; v.copy(relV).divideScalar(g * k).addScaledVector(B, (c + b) / k); } return v.multiplyScalar(l); }
function project(rel) { tmp.copy(aberrJS(tmp.copy(rel))).normalize(); tmp2.copy(tmp).applyQuaternion(cam.quaternion.clone().invert()); if (tmp2.z > -.05) return { ok: false }; const f = 1 / Math.tan(cam.fov * Math.PI / 360), x = tmp2.x / -tmp2.z * f / cam.aspect, y = tmp2.y / -tmp2.z * f; return { x: (x * .5 + .5) * innerWidth, y: (-y * .5 + .5) * innerHeight, ok: Math.abs(x) < 1.02 && Math.abs(y) < 1.02 }; }
// distance in the ship's frame: the component along the motion is Lorentz contracted
function contracted(rel, d = rel.length()) { if (gamma < 1.001) return d; const c = rel.dot(D); return Math.sqrt(Math.max(0, d * d - c * c) + c * c / (gamma * gamma)); }
const r0 = V();
const both = (r, d = r.length()) => { const c = contracted(r, d); return dist(d) + (gamma > 1.02 && Math.abs(c - d) > d * .01 ? ` (aboard ${dist(c)})` : '') + (P.w >= 1 ? `, ${span(d / P.w)} at this speed` : ''); }; // d / celerity = time on the ship's own clock
let occ = [];
// is direction n (unit, galaxy frame) at distance d hidden behind some body?
function hidden(n, d, self) { for (const o of occ) if (o.b !== self && o.d < d && o.a > .0015 && n.dot(o.n) > o.c) return true; return false; }
function drawMarkers() {
  const busy = P.state !== 'fly'; occ = bodies.map(b => { const n = b.pos.clone().sub(camPos), d = n.length(), a = b.R / d; return { b, n: n.divideScalar(d), d: d - b.R, a, c: d > b.R ? Math.sqrt(Math.max(0, 1 - a * a)) : -1 }; });
  const hb = hover?.b; for (const m of mk) { const b = m.b; r0.copy(b.pos).sub(camPos); const d = r0.length(), s = project(r0), isT = b === target, isH = b === hb, ang = b.R / d; let show = s.ok && !busy && (isT || isH || (ang < .25 && (b.swarm ? d < 4e7 : b.moon ? d < 4e9 : d < 400 * AU) && !hidden(tmp2.copy(r0).divideScalar(d), d - b.R, b))); if (isH && !busy && (!s.ok || ang > .25)) { show = true; s.x = mouse.px; s.y = mouse.py; } m.e.style.display = show ? '' : 'none'; if (!show) continue; m.e.style.transform = `translate(${s.x | 0}px,${s.y | 0}px)`; m.e.classList.toggle('t', isT); m.e.classList.toggle('hv', isH && !isT); m.e.style.opacity = isT && !isH && hidden(tmp2.copy(r0).divideScalar(d), d - b.R, b) ? .45 : 1; m.sp.style.display = isT || isH ? '' : 'none'; if (isT || isH) { const nm = isH ? `${b.name}, ${b.label}` : b.name; if (m.nm.textContent !== nm) m.nm.textContent = nm; m.em.textContent = both(r0, Math.max(0, d - b.R)); } }
  const put = (mk, s, isT) => { if (!s || busy) { mk.e.style.display = 'none'; return; } starRel(s, r0).sub(camPos); const p = project(r0); mk.e.style.display = p.ok ? '' : 'none'; if (!p.ok) return; mk.e.style.transform = `translate(${p.x | 0}px,${p.y | 0}px)`; mk.e.classList.toggle('t', isT); mk.nm.textContent = isT && target.body ? `${target.name}, ${target.label || starName(s)}` : `${starName(s)}, ${starClass(s)}`; mk.em.textContent = both(r0); };
  { const t = $('#tdir'); let on = false; if (target && !busy && !gaze) { if (target.star) starRel(target.star, r0).sub(camPos); else r0.copy(target.pos).sub(camPos); const p = project(r0); if (!p.ok) { tmp2.copy(aberrJS(tmp.copy(r0))).applyQuaternion(cam.quaternion.clone().invert()); const a = Math.atan2(-tmp2.y, tmp2.x); t.style.transform = `translate(${Math.cos(a) * 82}px,${Math.sin(a) * 82}px) rotate(${a}rad)`; on = true; if (t.title !== target.name) { t.title = target.name; } } } t.classList.toggle('on', on); }
  { const pm = $('#prograde'); const on = !busy && !gaze && P.w > 20 && turnAngle(D, F)[1] > .012; pm.classList.toggle('on', on); if (on) { const p = project(D.clone().multiplyScalar(1e9)); pm.style.display = p.ok ? '' : 'none'; if (p.ok) pm.style.transform = `translate(${p.x | 0}px,${p.y | 0}px)`; } }
  put(starMk, target?.star, true); put(hovMk, hover?.s && hover.s.id !== target?.star?.id ? hover.s : null, false);
}
// what is under the cursor: a body the ray really hits (nearest first), then one close beside it, then a visible star
// world direction under the cursor; with aberration undone it is where that thing really is
function cursorDir(real, center) {
  const cx = center ? 0 : (mouse.px ?? innerWidth / 2) / innerWidth * 2 - 1, cy = center ? 0 : 1 - (mouse.py ?? innerHeight / 2) / innerHeight * 2, t = Math.tan(cam.fov * Math.PI / 360), n = V(cx * t * cam.aspect, cy * t, -1).normalize().applyQuaternion(cam.quaternion); const B = shared.uBeta.value;
  if (real && B > 1e-4) { const D = shared.uBDir.value, c = n.dot(D), g = 1 / Math.sqrt(1 - B * B), q = n.clone().addScaledVector(D, -c); if (shared.uMeas.value > .5) n.copy(q).addScaledVector(D, c * g).normalize(); else { const k = 1 - B * c; n.copy(q).divideScalar(g * k).addScaledVector(D, (c - B) / k).normalize(); } } return n; }
// course state: D is where the ship really moves, F where the nose points, head the heading the pilot asked for
const D = V(0, 0, -1), LOWV = 3000; let locked = true, head = null, steerT = -1, turn = null;
const lockCourse = () => { locked = true; turn = null; D.copy(F); };
const gearAt = w => { if (w < 1) return 0; if (w < CRUISE) return w / CRUISE; if (w >= SET[TOP][0]) return TOP; let lo = 1, hi = TOP; while (hi - lo > 1) { const c = lo + hi >> 1; if (SET[c][0] <= w) lo = c; else hi = c; } return lo + Math.log(w / SET[lo][0]) / Math.log(SET[lo + 1][0] / SET[lo][0]); };
const turnAngle = (a, b) => [a.dot(b), tmp2.crossVectors(a, b).length()];
function unlock() { if (locked) { locked = false; if (!glide) hold = null; turn = { w0: P.w, from: D.clone() }; } }
function steerOn(real) { head = cursorDir(real); if (glide) { glide = false; toast('Autopilot off'); } }
function pickHover() {
  if (P.state !== 'fly' || gaze) return null; const n = cursorDir(true, glide);
  let hit = null, side = null, sb = .02; for (const o of occ) { const dot = n.dot(o.n); if (dot >= o.c) { if (!hit || o.d < hit.d) hit = o; continue; } if (o.b.swarm && o.d > 4e7 || o.b.moon && o.d > 4e9) continue; const sep = Math.acos(Math.min(1, dot)) - Math.asin(Math.min(1, o.a)); if (sep < sb && !hidden(o.n, o.d, o.b)) { sb = sep; side = o; } }
  if (hit) return { b: hit.b }; if (side) return { b: side.b }; if (nb && alt < 5000) return null;
  const s = P.w < LY * 5 ? stars.pick(gal, n, .9997) : null; if (s && s.id !== anchor.id) return { s }; const up = uniPos(); let bg = null, ba = .012; for (const [G, d] of uni.near(up, 25)) { if (d < G.R * 1.6) continue; const r = V(G.pos[0] - up.x, G.pos[1] - up.y, G.pos[2] - up.z).divideScalar(d), sep = Math.acos(Math.min(1, r.dot(n))) - Math.min(.3, G.R * .5 / d); if (sep < ba) { ba = sep; bg = G; } } if (bg) uni.pin(bg); return bg ? { s: bg.star } : null;
}
const mapTarget = t => { if (t.star?.G) uni.pin(t.star.G); target = t.here ? (t.body && bodies.find(b => b.name === t.body)) || sys.main : t; picked = true; };
const gmap = new GMap(mapCam, t => { mapTarget(t); setMode('flight'); if (P.state === 'fly') { hold = null; startGlide(); startTrip(target.name); toast('Gliding to ' + target.name); } else toast('Waypoint: ' + target.name); },
  t => { const was = target; mapTarget(t); if (glide && target !== was) { glide = false; toast('Autopilot off, new waypoint: ' + target.name); } else toast('Waypoint: ' + target.name); });

// ---------- input
addEventListener('mousemove', e => { const x = e.clientX, y = e.clientY; if (mode === 'map') gmap.move(x, y, mouse.down, e.movementX || 0, e.movementY || 0, e.buttons > 1 || e.shiftKey); if (document.pointerLockElement) { walk.yaw -= e.movementX * .0022; walk.pitch = Math.max(-1.5, Math.min(1.5, walk.pitch - e.movementY * .0022)); return; } mouse.px = x; mouse.py = y; const s = Math.min(innerWidth, innerHeight) * .42; mouse.x = Math.max(-1, Math.min(1, (x - innerWidth / 2) / s)); mouse.y = Math.max(-1, Math.min(1, (y - innerHeight / 2) / s)); });
document.addEventListener('mouseleave', () => { mouse.x = mouse.y = 0; });
addEventListener('blur', () => { steerT = -1; for (const k in keys) keys[k] = false; mouse.down = false; mouse.x = mouse.y = 0; });
addEventListener('mousedown', e => { if (e.button === 2 && mode === 'flight') { if (P.state === 'fly' && !paused && !dead && !warp && !gaze && helpHidden()) { steerT = 0; steerOn(true); } return; } mouse.down = true; gmap.moved = 0; if (mode === 'flight' && P.state === 'fly' && !paused && !dead && !warp && !glide && !gaze && helpHidden()) choose(pickHover()); if (P.state === 'walk' && mode === 'flight' && helpHidden() && !paused) lockPtr(); });
addEventListener('mouseup', e => { if (e.button === 2) steerT = -1;  const was = mouse.down; mouse.down = false; if (was && mode === 'map' && !warp && helpHidden() && e.button === 0) gmap.click(); });
addEventListener('dblclick', () => { if (mode === 'map') gmap.dbl(); });
let wheelA = 0; addEventListener('wheel', e => { if (mode === 'map') { e.preventDefault(); gmap.zoom(e.deltaY * (e.deltaMode ? 30 : 1)); } else if (mode === 'flight' && P.state === 'fly' && !paused && !dead && helpHidden()) { e.preventDefault(); wheelA += e.deltaY * (e.deltaMode ? 30 : 1); if (Math.abs(wheelA) >= 60) { shiftGear(wheelA < 0 ? 1 : -1); wheelA = 0; } } }, { passive: false });
addEventListener('contextmenu', e => e.preventDefault());
const lockPtr = () => { try { $('#c').requestPointerLock()?.catch?.(() => { }); } catch { } };
const helpHidden = () => $('#help').hidden, showHelp = v => { $('#help').hidden = !v; if (v) { freeExit = true; document.exitPointerLock?.(); setTimeout(() => freeExit = false, 300); body.classList.remove('flying'); } else if (mode === 'flight') body.classList.add('flying'); };
$('#closehelp').onclick = () => showHelp(false);
addEventListener('keydown', e => {
  const br = e.key === '[' || e.code === 'BracketLeft' ? -1 : e.key === ']' || e.code === 'BracketRight' ? 1 : 0; if (br && mode === 'flight' && !paused && !dead && helpHidden()) { e.preventDefault(); shiftGear(br); return; }
  if (e.ctrlKey || e.metaKey || e.altKey || e.getModifierState?.('AltGraph')) return; if ((e.code === 'Space' || e.code.startsWith('Arrow')) && mode !== 'title') e.preventDefault(); if (e.repeat) return; keys[e.code] = true;
  if (mode === 'title' || mode === 'warp') return; if (e.code === 'Escape' && helpHidden() && mode === 'flight') { setPause(!paused); return; } if (paused) return; if (e.key === '?' || (e.key === 'Escape' && !helpHidden())) { showHelp(helpHidden()); return; } if (!helpHidden()) return;
  if (mode === 'map') { if (e.code === 'KeyM' || e.code === 'Escape') setMode('flight'); return; } if (dead) return;
  const dg = /^(?:Digit|Numpad)(\d)$/.exec(e.code); if (dg) { const d = +dg[1]; setSpeed(d < 2 ? d : gid(d, 0)); return; }
  switch (e.code) {
    case 'Enter': $('#report').classList.remove('on'); break;
    case 'KeyM': freeExit = true; document.exitPointerLock?.(); setTimeout(() => freeExit = false, 300); setMode('map'); break;
    case 'KeyT': pickTarget(); break;
    case 'KeyF': if (P.state === 'fly') { if (glide) { glide = false; toast('Glide ended'); } else { startGlide(); toast(`Gliding to ${target.name}` + (hold ? `, ${hold.t}` : '')); } } break;
    case 'KeyC': if (P.state === 'fly' && !target.star) { gaze = !gaze; glide = false; gz = null; if (gaze) P.w = 0; } break;
    case 'KeyG': if (P.state === 'fly' && canLand()) startLanding(); else if (P.state === 'landed') takeOff(); break;
    case 'KeyE': if (P.state === 'landed') stepOut(); else if (P.state === 'walk') board(); break;
    case 'KeyV': shared.uMeas.value = 1 - shared.uMeas.value; toast(shared.uMeas.value ? 'Measured: pure length contraction' : 'Seen: aberration and Doppler shift'); break;
    case 'KeyH': body.classList.toggle('nohud'); break;
    case 'KeyI': sheetOn = !sheetOn; toast(sheetOn ? 'Data sheet on' : 'Data sheet off'); break;
    case 'KeyN': toast(audio.mute() ? 'Sound off' : 'Sound on'); break;
  }
});
addEventListener('keyup', e => keys[e.code] = false);
let lastPick = 0;
function pickTarget() { const f = V(0, 0, -1).applyQuaternion(P.q), now = performance.now(); const s = bodies.filter(b => !b.swarm || b.pos.distanceTo(P.pos) < 1e8).map(b => { const r = b.pos.clone().sub(P.pos), d = r.length(); return [b, Math.acos(Math.max(-1, Math.min(1, r.dot(f) / d))) - Math.min(.6, b.R / d)]; }).sort((a, b) => a[1] - b[1]); const st0 = stars.pick(galPos(), f, .9992);
  if (hover && now - lastPick > 600 && (hover.b ? hover.b !== target : hover.s.id !== target?.star?.id)) target = hover.b || { star: hover.s, name: starName(hover.s) }; else if (now - lastPick < 2500 && s.length) { const i = s.findIndex(x => x[0] === target); target = s[(i + 1) % s.length][0]; } else if (s[0] && s[0][1] < .035) target = s[0][0]; else if (st0 && st0.id !== anchor.id) target = { star: st0, name: starName(st0) }; else if (s[0]) target = s[0][0]; lastPick = now; picked = true; toast('Target: ' + target.name); }

// ---------- landing, walking
const walk = { pos: V(), yaw: 0, pitch: 0, vy: 0, fwd: V() }; let land = null;
const upAt = (b, p) => p.clone().sub(b.pos).normalize();
const canLand = () => nb && nb.terrain && alt < 260 && P.w < 90 && P.state === 'fly';
function startLanding() { const u = upAt(nb, P.pos), n = nb.terrain.normal(u, 5); P.state = 'descend'; head = null; lockCourse(); glide = gaze = false; const f = V(0, 0, -1).applyQuaternion(P.q); f.addScaledVector(n, -f.dot(n)); if (f.lengthSq() < .01) f.set(1, 0, 0).addScaledVector(n, -n.x); f.normalize(); m4.lookAt(V(), f, n); land = { q: new THREE.Quaternion().setFromRotationMatrix(m4), v: 0 }; P.w = 0; P.thr = 0; toast('Landing'); }
function touchDown() { P.state = 'landed'; audio.boom(.25, 300); shake = .5; st.landed++; const u = upAt(nb, P.pos); if (nb.type === 'asteroid') gain('asteroid'); banner(nb.name, `${nb.label}. Press E to step out, G to take off.`); persist(); }
function takeOff() { P.state = 'fly'; const u = upAt(nb, P.pos); P.drift.copy(u).multiplyScalar(26); P.thr = .25; audio.boom(.3, 800); toast('Lift off'); }
function stepOut() { const u = upAt(nb, P.pos), s = V(1, 0, 0).applyQuaternion(P.q); walk.pos.copy(P.pos).addScaledVector(s, 9); walk.fwd.copy(V(0, 0, -1).applyQuaternion(P.q)); walk.yaw = -.6; walk.pitch = 0; walk.vy = 0; P.state = 'walk'; lockPtr(); if (nb.weather.length) gain('planet'); toast('Walk back to the ship and press E to board'); }
function board() { if (walk.pos.distanceTo(P.pos) > 22) { toast('Too far from the ship: ' + dist(walk.pos.distanceTo(P.pos))); return; } P.state = 'landed'; document.exitPointerLock?.(); }

// ---------- flight
let gz = null, beamHits = 0, beamWas = false, coronaT = 0, holeT = 0, jetT = 0, scanT = 0, hudT = 0, envT = 0, wx = { k: 'clear', i: 0, f: 0 }, lit = 0;
function gain(id) { if (st.got.includes(id)) return; st.got.push(id); persist(); const l = LIGHTS.find(x => x.id === id); drawSpectrum(); flashC.copy(C(l.hue)); flash = .7; audio.fanfare(); banner(l.name, l.line, l.hue); if (st.got.length === 7) setTimeout(() => banner('The spectrum is whole', 'Return to the Heart of the galaxy and fly into the dark.'), 6000); }
function die(msg) { if (dead || warp) return; dead = 1; flashC.set(1, .9, .8); flash = 1.2; audio.boom(.9, 900); banner('Unmade', msg); ship.group.visible = false; glide = gaze = false; const near0 = nb || sys.main; setTimeout(() => { dead = 0; ship.group.visible = true; const b = bodies.includes(near0) ? near0 : sys.main, k = b.kind === 'star' ? 4 : b.kind === 'blackhole' || b.kind === 'quasar' ? 24 : b.kind === 'pulsar' ? 200 : 2.4; const u = b.sunDir && b.sunDir.lengthSq() ? b.sunDir.clone().applyAxisAngle(V(0, 1, 0), .8) : V(.3, .25, 1).normalize(); P.pos.copy(b.pos).addScaledVector(u, b.R * k); m4.lookAt(P.pos, b.pos, V(0, 1, 0)); P.q.setFromRotationMatrix(m4); F.set(0, 0, -1).applyQuaternion(P.q); head = null; lockCourse(); P.w = 0; P.drift.set(0, 0, 0); P.hull = 100; P.inv = 3; P.state = 'fly'; P.thr = .2; hold = null; EN.last = 0; EN.skip = true; trails.reset(); }, 2200); }
function ascend() { if (warp) return; setMode('warp'); flashC.set(1, 1, 1); flash = 2; goWarp(async () => { Object.assign(st, fresh(st.n + 1)); loadGalaxy(); drawSpectrum(); spawn(); await ready(); setMode('flight'); banner('Universe ' + roman(st.n), 'The light you carried becomes its first dawn.'); }, 5); }
async function ready() { for (let i = 0; i < 200; i++) { simulate(0.0001); if (bodies.every(b => !b.terrain || b.terrain.ready)) break; await new Promise(r => setTimeout(r, 20)); } await renderer.compileAsync(scene, cam).catch(() => { }); }

function scanBodies() { // materialise what is big enough to see, rank the nearest surfaces
  let best = Infinity; nb = null; nearD = Infinity; const list = [];
  for (const b of bodies) { const d = b.pos.distanceTo(P.pos), a = b.R / d; const lim = b.kind === 'quasar' || b.kind === 'blackhole' ? 4e-5 : b.kind === 'pulsar' ? 2e-6 : b.kind === 'star' ? 6e-4 : .0014; if (a > lim && !b.group) { materialize(b); sysG.add(b.group); } else if (a < lim * .5 && b.group) dematerialize(b); let s = d - b.R; if (b.terrain && a > .25) { const u = upAt(b, P.pos); s -= b.terrain.height(u); } list.push({ name: b.name, d: Math.max(0, s), b }); const eff = b.kind === 'blackhole' || b.kind === 'quasar' ? Math.max(0, d - b.R * 3) : s; if (eff < nearD) nearD = eff; if ((b.kind === 'rock' || b.kind === 'gas') && s < best && d < b.R * 4 + 4e5) { best = s; nb = b; } }
  alt = nb ? best : Infinity; return list;
}
function endTurn() { const t = turn; const was = t ? gearAt(t.w0) : 0; lockCourse(); D.copy(F); if (glide || !t) return; const g = gearAt(P.w); if (!hold || hold.w > P.w * 1.02) { if (g >= 1.98) { const n = Math.max(2, Math.min(TOP, Math.floor(g + .05))); hold = { n, w: Math.min(SET[n][0], P.w), t: SET[n][1], auto: true }; } else { hold = null; P.thr = Math.min(P.thr, Math.max(.05, P.w / CRUISE)); } } if (was - g > .4) toast(`Course changed, down to ${g < 1 ? 'cruise' : 'gear ' + gearName(Math.max(1, Math.floor(g + .05)))}`); }
function simulate(dt) {
  P.inv -= dt; const ctl = !gaze && !dead && helpHidden() && mode === 'flight' && P.state === 'fly'; let pitch = 0, yaw = 0, roll = 0;
  const list = scanBodies(); galPos();
  // air
  const atm = nb?.atm, h = nb ? P.pos.distanceTo(nb.pos) - nb.R : 0, dens = atm ? Math.exp(-Math.max(h, 0) / atm.H) : 0, inAir = atm && h < atm.top;
  if (ctl) { if (steerT >= 0) { steerT += dt; if (steerT > .25) head = cursorDir(false); } if (keys.ArrowLeft) yaw = 1; if (keys.ArrowRight) yaw = -1; if (keys.ArrowUp) pitch = 1; if (keys.ArrowDown) pitch = -1; if (pitch || yaw) { head = null; if (glide) glide = false; } roll = (keys.KeyA ? 1 : 0) - (keys.KeyD ? 1 : 0); if (keys.KeyW) P.thr = Math.min(1, P.thr + dt * .7); if (keys.KeyS) P.thr = Math.max(0, P.thr - dt * .7); }
  const boost = ctl && (keys.ShiftLeft || keys.ShiftRight), brake = ctl && keys.KeyX; if (brake) { P.thr = Math.max(0, P.thr - dt * 2); glide = false; hold = null; } if (ctl && (keys.KeyS || keys.KeyW) && !glide) hold = null;
  P.boostT = boost ? P.boostT + dt : 0;
  if (near[0]) { const dn = Math.hypot(near[0].s.x - gal.x, near[0].s.y - gal.y, near[0].s.z - gal.z) * LY; if (dn > .01 * LY) nearD = Math.min(nearD, dn); }
  const far = nearD > .05 * LY; const over = far ? 1 + Math.max(0, P.boostT - 4) ** 2 * 3 : 1; const dGal = galPos().length() - cur.R; let cap = Math.min(Math.max(400, dGal * .25) * LY, Math.max(70, nearD * .9 + 60) * over); const airCap = inAir ? 290 / (dens * Math.min(1.6, atm.press) + .012) : Infinity; cap = Math.min(cap, Math.max(airCap, 60));
  let want = Math.min(Math.max(120, Math.min(2500, alt * .12)) * P.thr, cap); const free = hold && hold.n > 1 && !inAir && (far || P.w > LY); if (hold && !glide && hold.n !== 1) want = free ? hold.w : Math.min(hold.w, cap); if (boost) { want = cap; if (hold?.n < 2) hold = null; } if (brake) want = 0; const stop = hold?.n === 0 && !boost; if (stop) P.drift.multiplyScalar(Math.exp(-dt * 4));
  if (glide && target && ctl) {
    if (target.star) { starRel(target.star, A); } else A.copy(target.pos);
    const t0 = A.clone(), d = A.distanceTo(P.pos), arr = target.star ? (target.star.isGal ? target.star.G.R * 1.9 * LY : .004 * LY) : arrive(target), u = A.clone().sub(P.pos).divideScalar(d); let clr = Infinity;
    for (const b of bodies) if (b !== target) { const r = b.pos.clone().sub(P.pos), al = r.dot(u); const m = b.kind === 'rock' ? b.R * 1.3 + (b.atm ? b.atm.top : 0) : arrive(b) * .75; if (r.length() < m * 1.02 && b.kind === 'rock') { const up = r.clone().normalize().negate(); if (u.dot(up) < .75) { A.copy(P.pos).addScaledVector(up, d).addScaledVector(u, d * .35); clr = Math.min(clr, Math.max(0, r.length() - b.R) * 2 + 600); continue; } clr = Math.min(clr, Math.max(0, r.length() - b.R) * 3 + 600); continue; } if (al > 0 && al < d) { const off = u.clone().multiplyScalar(al).sub(r), ol = off.length(); if (ol < m) A.addScaledVector(ol < 1 ? V(0, 1, 0) : off.normalize(), m * 1.2 * Math.min(60, d / Math.max(al, 1))); clr = Math.min(clr, Math.max(0, r.length() - b.R * 1.05)); } else clr = Math.min(clr, Math.max(0, r.length() - b.R) * 3 + 2e4); }
    m4.lookAt(P.pos, A, V(0, 1, 0).applyQuaternion(P.q)); dq.setFromRotationMatrix(m4); P.q.slerp(dq, 1 - Math.exp(-dt * 2.2)); pitch = yaw = 0; const align = Math.max(0, V(0, 0, -1).applyQuaternion(P.q).dot(A.clone().sub(P.pos).normalize()));
    want = Math.max(60, (d - arr) * .75) * Math.pow(align, 30); if (target.star && !(hold?.n > 1)) want = Math.min(want, (target.star.isGal || target.star.G !== cur ? 4e5 : Math.max(4000, Math.min(4e5, (d / LY - 1e5) * .5))) * LY); if (!target.star || P.pos.length() < .02 * LY) want = Math.min(want, clr * 1.2 + 800); if (inAir) want = Math.min(want, airCap * 1.5); if (hold) want = Math.min(want, hold.w);
    if (d < arr * 1.04) { glide = false; mouse.x = mouse.y = 0; mouse.px = innerWidth / 2; mouse.py = innerHeight / 2; P.thr = .2; if (target.star?.isGal) { toast('Arrived: ' + target.name); if (trip) trip.arrived = true; hold = null; banner(target.name, target.star.G.label); target = sys.main; } else if (!target.star) { toast('Arrived: ' + target.name); if (trip) trip.arrived = true; if (hold) hold = null; } else { setAnchor(target.star); banner(sys.name, $('#place p').textContent); glide = true; } }
  }
  if (gaze || dead || P.state !== 'fly') want = 0;
  if (ctl && nb && alt < Math.min(60000, nb.R * .2) && !roll) { const u = upAt(nb, P.pos), r = V(1, 0, 0).applyQuaternion(P.q), f = V(0, 0, -1).applyQuaternion(P.q); if (Math.abs(f.dot(u)) < .9) roll = -r.dot(u) * .9; } // gently level with the horizon
  if (!ctl) { head = null; steerT = -1; }
  if (head && !glide) { const f = V(0, 0, -1).applyQuaternion(P.q), ax = V().crossVectors(f, head), s = ax.length(), a = Math.atan2(s, f.dot(head)); if (a < .0015) { if (steerT < 0) head = null; } else { if (s < 1e-6) ax.set(0, 1, 0).applyQuaternion(P.q); else ax.divideScalar(s); const st = Math.min(a, Math.min(a * 3.2, 1.2) * dt); yaw = -Math.max(-1, Math.min(1, V(1, 0, 0).applyQuaternion(P.q).dot(head) * 2.5)) * .999; P.q.premultiply(dq.setFromAxisAngle(ax, st)).normalize(); } }
  const bank = yaw; if (head) yaw = 0; const steering = !!head || steerT >= 0 || pitch !== 0 || yaw !== 0;
  P.roll += (bank * .75 - P.roll) * (1 - Math.exp(-dt * 4)); eul.set(pitch * 1.25 * dt, yaw * 1.25 * dt, roll * 1.7 * dt); dq.setFromEuler(eul); P.q.multiply(dq).normalize(); F.set(0, 0, -1).applyQuaternion(P.q);
  const rate = want > P.w ? (boost || glide ? 1.1 : 1.6) : brake || stop || (hold && !boost && P.w > Math.max(hold.w, 120) * 1.1) ? 5.5 : glide || inAir ? 3 : 1.7; P.dEta = null;
  if (P.w > LOWV && P.state === 'fly' && !gaze && !dead) { const [c, s] = turnAngle(D, F); if (locked && (steering ? s > 1e-9 || c < 0 : glide && (s > .03 || c < 0))) unlock(); }
  const slow = P.w <= LOWV;
  const aiming = !!head && steerT <= .25 && turnAngle(F, head)[1] > .12 || (!!head && steerT <= .25 && F.dot(head) < 0), goal = head && steerT <= .25 ? head : F;
  if (!locked && !slow && aiming && !brake && !stop && P.state === 'fly') { /* nose still swinging: coast on the old course */ }
  else if (!locked && !slow && !brake && !stop && P.state === 'fly') { // burning off the old course
    const [c, s] = turnAngle(D, goal), t = turnStep(P.w / C0, c, s, dt); P.dEta = t.d; turn && (turn.ang = Math.atan2(s, c));
    if (t.straight) P.w = t.w * C0; else { const side = V().copy(D).addScaledVector(goal, -c); if (side.lengthSq() > 0) side.normalize(); const v = goal.clone().multiplyScalar(t.par).addScaledVector(side, t.perp), l = v.length(); P.w = l * C0; if (l > 0) D.copy(v.divideScalar(l)); }
    const [c2, s2] = turnAngle(D, F); if (!steering && c2 > 0 && s2 < .012 && (t.straight || t.r < .02)) endTurn();
  } else if (slow && P.state === 'fly') { // ordinary flight: thrusters push the velocity vector round, so the ship drifts a little
    if (!locked) endTurn(); const v = D.clone().multiplyScalar(P.w), k = 1 - Math.exp(-dt * (want > LOWV ? rate : Math.max(rate, inAir ? 3 : 2))); v.addScaledVector(F.clone().multiplyScalar(want).sub(v), k); P.w = v.length(); if (P.w > 1e-6) D.copy(v).divideScalar(P.w); else D.copy(F); if (P.w > LOWV) lockCourse();
  } else { P.w += (want - P.w) * (1 - Math.exp(-dt * rate)); if (locked) D.copy(F); }
  if (ctl && !glide && !free && locked) P.w = Math.min(P.w, Math.max(cap * 1.4, 120)); if (P.w < .02 || (stop && P.w < .5)) { P.w = 0; D.copy(F); if (stop && P.drift.length() < .5) P.drift.set(0, 0, 0); }
  energyStep(dt);
  // relativity: P.w is proper velocity (celerity), so speed stays below c while ship time shrinks every journey
  const cw = P.w / C0; gamma = Math.sqrt(1 + cw * cw); beta = cw / gamma; st.years += dt * gamma / 3.156e7; yearsShip += dt / 3.156e7;
  const gv = 1 + (gamma - 1) / (1 + (gamma - 1) / 2); const bv = Math.sqrt(Math.max(0, 1 - 1 / (gv * gv))); shared.uBeta.value += (bv - shared.uBeta.value) * (1 - Math.exp(-dt * 6)); if (shared.uBeta.value < 1e-3 && bv < 1e-3) shared.uBeta.value = 0; shared.uBDir.value.copy(D);
  P.drift.multiplyScalar(Math.exp(-dt * .9)); const move = D.clone().multiplyScalar(P.w * dt).addScaledVector(P.drift, dt); if (P.state === 'fly' && !gaze) P.pos.add(move); else move.set(0, 0, 0);
  // surfaces
  const heat = inAir ? Math.min(1, dens * Math.pow(P.w / 1500, 2) * 1.1) : 0; plasma.material.uniforms.uI.value += (heat - plasma.material.uniforms.uI.value) * dt * 3; plasma.visible = plasma.material.uniforms.uI.value > .01; if (heat > .3) shake = Math.max(shake, heat * .35);
  let star01 = 0, bend = 0;
  for (const b of bodies) { const r = b.pos.clone().sub(P.pos), d = r.length();
    if (b.kind === 'star') { star01 = Math.max(star01, 1 - (d / b.R - 1.1) / .8); if (d < b.R * 1.01) die('Nothing that touches a star stays itself.'); else if (d < b.R * 1.9 && !dead) { coronaT += dt; if (coronaT > 4) gain('star'); } }
    if (b.kind === 'pulsar') { if (d < b.R * 1.05) die('A teaspoon of it weighs a mountain.'); if (b.beam && d < b.R * 4000) { const on = Math.abs(r.dot(b.beam) / d) > Math.cos(.16); if (on && !beamWas) { flashC.set(.4, .8, 1); flash = .3; audio.tone(90, .7, .3, 'sine', 45); if (d < b.R * 400 && ++beamHits >= 3) gain('pulsar'); } beamWas = on; } }
    if (b.kind === 'blackhole' || b.kind === 'quasar') { bend = Math.max(bend, Math.max(0, 1 - (d / b.R - 1) / 8)); if (!gaze && !dead && d < b.R * 14 && !glide) P.drift.addScaledVector(r, b.R * .25 * Math.min(1, (b.R * 3 / d) ** 2) * dt / d); if (d < b.R * 9 && b.kind === 'blackhole') { holeT += dt; if (holeT > 5) gain('blackhole'); } if (b.jet) { const y = -r.dot(b.jet), rad = r.clone().addScaledVector(b.jet, y).length(), hh = Math.abs(y) / b.jetLen; if (hh > .02 && hh < 1 && rad < b.R * (.5 + 3.9 * hh)) { shake = Math.max(shake, .3); P.drift.addScaledVector(b.jet, Math.sign(y) * b.R * .5 * dt); jetT += dt; if (jetT > 2) gain('quasar'); } } if (d < b.R * 1.06 && !dead) { if (b.kind === 'quasar' && st.got.length === 7) return ascend(); die('You crossed the horizon. Time, politely, declined.'); } } }
  if (nb && P.state === 'fly' && !dead) { const u = upAt(nb, P.pos);
    if (nb.kind === 'gas') { const dep = nb.R - P.pos.distanceTo(nb.pos); if (dep > nb.atm.H * .5) { shake = Math.max(shake, .4); if (dep > nb.atm.H * 3) die('The pressure took you, gently, then completely.'); } }
    else if (nb.terrain) { const g = nb.R + nb.terrain.height(u) + 2.6, d = P.pos.distanceTo(nb.pos); if (d < g) { const vn = D.dot(u) * P.w + P.drift.dot(u); P.pos.copy(nb.pos).addScaledVector(u, g); if (vn < -45) { P.hull -= Math.min(45, -vn * .12); audio.boom(.4); shake = 1; P.w *= .35; P.drift.addScaledVector(u, 18 + -vn * .1); if (P.hull <= 0 && P.inv < 0) die('The ground was patient.'); } else { P.drift.addScaledVector(u, Math.max(0, 3 - P.drift.dot(u))); } } } }
  if (P.state === 'descend') { P.q.slerp(land.q, 1 - Math.exp(-dt * 2.2)); const u = upAt(nb, P.pos), g = nb.R + nb.terrain.height(u) + 1.9, d = P.pos.distanceTo(nb.pos), left = d - g; land.v = Math.max(1.2, Math.min(28, left * .75)); P.pos.addScaledVector(u, -Math.min(left, land.v * dt)); if (left < .04) touchDown(); }
  if (P.hull < 100) P.hull = Math.min(100, P.hull + dt * 4);
  post.u.uHeat.value += (Math.max(0, Math.min(1, star01)) * .5 - post.u.uHeat.value) * dt * 3; post.u.uBend.value += (Math.min(1, bend) * .5 - post.u.uBend.value) * dt * 3;
  // re-anchor to whichever star is nearest
  if ((scanT -= dt) < 0) { scanT = .2; if (P.state === 'fly') { const u = uniPos(); galNear = uni.nearest(u, 24); const n = uni.near(u, 1)[0]; if (n[0] !== cur && (P.w < 2e4 * LY || (target?.star && target.star.G === n[0])) && n[1] / n[0].R < gal.length() / cur.R * .8) switchGalaxy(n[0]); $('#place').classList.toggle('void', gal.length() > cur.R * 1.5); if (gal.length() > cur.R * 1.5) { $('#place h2').textContent = 'Intergalactic space'; $('#place p').textContent = `${dist((gal.length()) * LY)} from ${cur.name}`; voidT = true; } else if (voidT) { voidT = false; $('#place h2').textContent = sys.name; $('#place p').textContent = `${starClass(anchor)}, ${bodies.length - 1} known bodies, ${cur.name}`; } }
    const ns = stars.nearest(galPos(), 14); near = ns.map(([s, d]) => ({ name: starName(s), d: d * LY - starRadius(s), s })); if (ns[0] && ns[0][0].id !== anchor.id && P.state === 'fly') { const dA = P.pos.length() / LY; if (ns[0][1] < dA * .6 && dA > .05 && P.w < (glide ? 8 : 1500) * LY) { setAnchor(ns[0][0]); } } for (const n of sky.nebs || []) if (Math.hypot(n.x - gal.x, n.y - gal.y, n.z - gal.z) < n.R * .75) { if (P.w < 100 * LY) gain('nebula'); } }
  if (voidT) list.length = 0; { const u = uniPos(); for (const [G] of galNear) { const d = Math.hypot(G.pos[0] - u.x, G.pos[1] - u.y, G.pos[2] - u.z); if (G === cur && !voidT) continue; list.push({ name: G.name, d: Math.max(0, d - G.R) * LY, g: G }); } }
  list.push(...near.filter(n => n.s.id !== anchor.id).map(n => ({ name: n.name, d: n.d, s: n.s }))); list.sort((a, b) => a.d - b.d); lastList = list;
  weatherStep(dt, dens, inAir, h, move); camera(dt, move);
}
let lastList = [], voidT = false, galNear = [];
const arrive = b => b.kind === 'rock' ? b.R * 1.35 + (b.atm ? b.atm.top : 0) + 300 : b.kind === 'gas' ? b.R * (b.ring ? 3 : 1.9) : b.kind === 'star' ? b.R * 3.2 : b.kind === 'pulsar' ? b.R * 60 : b.R * 18;
function weatherStep(dt, dens, inAir, h, move) {
  const b = nb; let k = 'clear', i = 0; const here = P.state === 'walk' ? walk.pos : P.pos;
  if (b && inAir && b.weather.length && h < b.atm.cloudH * 1.2 + 500 && b.kind === 'rock') { const u = upAt(b, here), n = noise(u.x * 7 + clock.value * .004, u.y * 7, u.z * 7 + clock.value * .003, 5) + .12; k = b.weather[Math.min(b.weather.length - 1, Math.floor((noise(u.x * 3, u.y * 3, u.z * 3, 9) * .7 + .5) * b.weather.length))] || b.weather[0]; i = Math.max(0, Math.min(1, (n + .25) * 2.2)) * Math.max(0, Math.min(1, (b.atm.cloudH * 1.2 + 500 - h) / 1500)); if (k === 'clear') i = 0; }
  if (k !== wx.k) { wx.f -= dt * .8; if (wx.f <= 0) { wx.k = k; wx.f = 0; } } else wx.f += (i - wx.f) * dt * .8; const f = Math.max(0, wx.f), K = wx.k, u = weather.u;
  const S = { rain: [34, .022, [.6, .7, .85], .4, .00009, 0], storm: [44, .026, [.6, .68, .8], .55, .00016, 0], snow: [3.5, .03, [1, 1, 1], .9, .00018, 1.2], blizzard: [16, .016, [1, 1, 1], .9, .0009, 1.5], dust: [22, .02, [.8, .55, .32], .5, .00045, .8], ash: [2.5, .03, [.5, .42, .4], .8, .00012, 1.2], acid: [26, .022, [.7, .8, .25], .5, .0002, 0], mist: [0, 0, [1, 1, 1], 0, .0003, 0], diamond: [1.2, .04, [.8, .95, 1], 1, .00003, 1.5] }[K];
  let fog = 0, fl = 0;
  if (S && f > .01 && b?.terrain && b.atm) { const up = upAt(b, here), side = V().crossVectors(up, Math.abs(up.y) < .9 ? V(0, 1, 0) : V(1, 0, 0)).normalize(); const wind = K === 'dust' || K === 'blizzard' ? 1.4 : .25; u.uVel.value.copy(up).multiplyScalar(-S[0] * (wind > 1 ? .15 : 1)).addScaledVector(side, S[0] * wind); u.uLen.value = S[1]; u.uCol.value.set(...S[2]); const day = Math.max(.05, Math.min(1, up.dot(b.sunDir) * 2 + .5)); u.uCol.value.multiplyScalar(.25 + .75 * day); if (K === 'lava' || K === 'ash') u.uCol.value.addScalar(.02); u.uInt.value = f * S[3]; u.uSway.value = S[5]; const v = u.uVel.value; u.uCam.value.x = ((u.uCam.value.x + camMove.x - v.x * dt) % 70 + 70) % 70; u.uCam.value.y = ((u.uCam.value.y + camMove.y - v.y * dt) % 70 + 70) % 70; u.uCam.value.z = ((u.uCam.value.z + camMove.z - v.z * dt) % 70 + 70) % 70; weather.mesh.visible = S[0] > 0 && P.w < 400; fog = S[4] * f; if (K === 'storm') { lit -= dt; if (lit < -2 - Math.random() * 9) { lit = .35; setTimeout(() => audio.boom(.5, 260), 500 + Math.random() * 1500); } if (lit > 0) fl = Math.random() * lit * 4; } const t = b.atm.tau, m = Math.max(t.x, t.y, t.z); u_fog.copy(K === 'dust' || K === 'ash' || K === 'acid' ? V(...S[2]).multiplyScalar(.5) : V(.5, .52, .55).multiplyScalar(.7).addScaledVector(t, .3 / m)).multiply(b.sunCol).multiplyScalar(day * .75); }
  else weather.mesh.visible = false;
  for (const q of bodies) { const tu = q.terrain?.u || q.u; if (!tu) continue; tu.uFog.value = q === b ? fog : 0; tu.uFogC.value.copy(u_fog); tu.uFlash.value = q === b ? fl : 0; if (q.kind === 'gas' && q === b) { const dep = Math.max(0, 1 - h / (q.atm.H * 1.2)); tu.uFog.value = dep > 0 ? dep * dep * .0012 : 0; tu.uFogC.value.copy(q.pal[0]).multiplyScalar(.5 * Math.max(.05, upAt(q, P.pos).dot(q.sunDir))); } }
}
const shipRel = V(), u_fog = V(), camMove = V(), lastCam = V(), camQ = new THREE.Quaternion();
function camera(dt, move) {
  ship.group.quaternion.copy(P.q).multiply(dq.setFromEuler(eul.set(0, 0, P.state === 'fly' ? P.roll : 0)));
  if (P.state === 'walk') { const b = nb, u = upAt(b, walk.pos); walk.fwd.addScaledVector(u, -walk.fwd.dot(u)).normalize(); const f = walk.fwd.clone().applyAxisAngle(u, walk.yaw), r = V().crossVectors(f, u); if (!document.pointerLockElement) { walk.yaw -= mouse.x * Math.abs(mouse.x) * dt * 1.8; walk.pitch = Math.max(-1.4, Math.min(1.4, -mouse.y * 1.1)); } const sp = (keys.ShiftLeft ? 16 : 5.5) * dt; if (helpHidden()) { if (keys.KeyW || keys.ArrowUp) walk.pos.addScaledVector(f, sp); if (keys.KeyS || keys.ArrowDown) walk.pos.addScaledVector(f, -sp); if (keys.KeyA) walk.pos.addScaledVector(r, -sp); if (keys.KeyD) walk.pos.addScaledVector(r, sp); if (keys.Space) walk.vy += (Math.max(b.g, 1) + 7) * dt; } const u2 = upAt(b, walk.pos); walk.vy = Math.max(-40, Math.min(25, walk.vy - Math.max(b.g, .6) * dt)); walk.pos.addScaledVector(u2, walk.vy * dt); const g = b.R + b.terrain.height(u2) + 1.75, d = walk.pos.distanceTo(b.pos); if (d < g || (d < g + .35 && walk.vy <= 0)) { walk.pos.copy(b.pos).addScaledVector(u2, g); walk.vy = 0; } const look = f.clone().multiplyScalar(Math.cos(walk.pitch)).addScaledVector(u2, Math.sin(walk.pitch)); m4.lookAt(V(), look, u2); cam.quaternion.setFromRotationMatrix(m4); camPos.copy(walk.pos); }
  else if (gaze && target && !target.star) { if (!gz) { const l = target.sunDir && target.sunDir.lengthSq(); const d = P.pos.clone().sub(target.pos); gz = { a: l ? Math.atan2(target.sunDir.x, target.sunDir.z) + .8 : Math.atan2(d.x, d.z), p: 0 }; } gz.a += dt * .05; gz.p += dt * .1; const D = target.kind === 'rock' ? target.R * 2.6 : arrive(target) * 1.15; camPos.set(Math.sin(gz.a) * D, D * (.16 + .12 * Math.sin(gz.p)), Math.cos(gz.a) * D).add(target.pos); m4.lookAt(camPos, target.pos, V(0, 1, 0)); cam.quaternion.setFromRotationMatrix(m4); P.w = 0; P.pos.copy(camPos); P.q.copy(cam.quaternion); }
  else { if (P.state === 'landed') { dq.setFromEuler(eul.set(-.12 - mouse.y * .35, -mouse.x * 2.6, 0, 'YXZ')); eul.order = 'XYZ'; camQ.copy(P.q).multiply(dq); } else camQ.copy(P.q); cam.quaternion.slerp(camQ, 1 - Math.exp(-dt * 5.5)); A.set(0, P.state === 'landed' ? 2.2 : 3.4, (P.state === 'fly' ? 16 : 19) + Math.min(4, Math.log10(1 + P.w / 300))).applyQuaternion(cam.quaternion); camPos.copy(P.pos).add(A); shipRel.copy(A).negate(); if (nb?.terrain && alt < 400) { const u = upAt(nb, camPos), g = nb.R + nb.terrain.height(u) + 1.2, d = camPos.distanceTo(nb.pos); if (d < g) { camPos.addScaledVector(u, g - d); shipRel.addScaledVector(u, d - g); } } }
  if (P.state === 'walk' || gaze) shipRel.copy(P.pos).sub(camPos); camMove.copy(camPos).sub(lastCam); lastCam.copy(camPos); if (P.pos.length() > 1e14) camMove.copy(move); if (camMove.length() > 1e5) camMove.setLength(60);
  ship.group.visible = !dead && !gaze; ship.group.position.copy(shipRel); ship.thrust.value += (Math.min(1, P.w / 500) - ship.thrust.value) * dt * 4; ship.flame.visible = P.state === 'fly' || P.state === 'descend'; ship.flame.scale.set(1, 1, .5 + Math.min(7, Math.log10(1 + P.w / 20) * 1.3)); if (shake > .01) { ship.group.position.add(V().randomDirection().multiplyScalar(shake * .18)); shake *= Math.exp(-dt * 4); } ship.group.updateMatrixWorld();
  trails.mesh.visible = P.state === 'fly' && !gaze && P.w < 900 && P.w > 3 && P.pos.length() < 1e14; if (trails.mesh.visible) trails.update(ship, camPos, move, dt); else trails.reset();
  const dc = dust.u.uCam.value; dc.set(((dc.x + camMove.x) % 260 + 260) % 260, ((dc.y + camMove.y) % 260 + 260) % 260, ((dc.z + camMove.z) % 260 + 260) % 260); dust.u.uVel.value.copy(D).multiplyScalar(Math.min(P.w, 3000)); dust.mesh.visible = P.state === 'fly' && !gaze && P.w > 1;
  const fov = 64 + Math.min(16, Math.log10(1 + P.w / 2000) * 2.4); if (Math.abs(cam.fov - fov) > .05) { cam.fov += (fov - cam.fov) * Math.min(1, dt * 3); cam.updateProjectionMatrix(); }
  cam.position.set(0, 0, 0); cam.updateMatrixWorld(); shared.uFwd.value.set(0, 0, -1).applyQuaternion(cam.quaternion);
  // light on the ship
  const ref = nb || sys.main, sd = nb ? nb.sunDir : sys.main.pos.clone().sub(P.pos).normalize(); sunL.position.copy(sd); let sI = 3, up = nb && upAt(nb, P.pos); if (nb) { const mu = up.dot(sd); const a = nb.atm, hh = Math.max(0, P.pos.distanceTo(nb.pos) - nb.R), e = a ? Math.exp(-hh / a.H) : 0; const dip = Math.sqrt(2 * hh / nb.R), vis = Math.max(0, Math.min(1, (mu + dip + .05) / .1)); const k = e / (Math.max(0, mu) + .04); sunL.color.setRGB(nb.sunCol.x * (a ? Math.exp(-a.tau.x * k) : 1), nb.sunCol.y * (a ? Math.exp(-a.tau.y * k) : 1), nb.sunCol.z * (a ? Math.exp(-a.tau.z * k) : 1)); sI *= vis; hemi.intensity = .12 + (a ? e * Math.max(0, mu + .2) * 1.6 : 0); hemi.position.copy(up); if (a) { const m = Math.max(a.tau.x, a.tau.y, a.tau.z); hemi.color.setRGB(.5 + .5 * a.tau.x / m, .5 + .5 * a.tau.y / m, .5 + .5 * a.tau.z / m); } } else { sunL.color.copy(sys.main.color).lerp(new THREE.Color('#fff'), .5); hemi.intensity = .15; if (P.pos.length() > 2000 * AU) sI = .6; } sunL.intensity = sI;
  // per-body sync
  const pxr = innerHeight * renderer.getPixelRatio() * post.scale / (2 * Math.tan(cam.fov * Math.PI / 360)), half = shared.uBeta.value > .001 ? -2 : Math.atan(Math.tan(cam.fov * Math.PI / 360) * Math.hypot(1, cam.aspect)) + .03;
  for (const b of bodies) if (b.group) { if (b.terrain) { b.terrain.update(camPos.clone().sub(b.pos), shared.uFwd.value, pxr, half); const tu = b.terrain.u; tu.uLampI.value = b === nb && alt < 300 ? 1 : 0; tu.uLamp.value.copy(ship.group.position); } else b.sync(camPos); }
  pump(); props.update(nb ? camPos.clone().sub(nb.pos) : V(1, 0, 0), nb, P.state === 'fly' ? alt : Math.min(alt, 100));
  // points
  let n = 0; const pp = pg.attributes.position.array, pc = pg.attributes.color.array, ps = pg.attributes.ps.array; const put = (r, c, s, k) => { if (n >= PN) return; pp[n * 3] = r.x; pp[n * 3 + 1] = r.y; pp[n * 3 + 2] = r.z; pc[n * 3] = c.r * k; pc[n * 3 + 1] = c.g * k; pc[n * 3 + 2] = c.b * k; ps[n++] = s; };
  for (const b of bodies) { const r = b.pos.clone().sub(camPos), d = r.length(); if (b.kind === 'star' || b.kind === 'pulsar' || b.kind === 'quasar' || b.kind === 'blackhole') { const ly = d / LY; if (ly > .03 || (b !== sys.main && ly > .03)) continue; const a = b.R / d; if (a > .02) continue; const fade = Math.min(1, (.03 - ly) / .015) * Math.min(1, (.02 - a) / .012); const ss = b.kind === 'blackhole' ? 5 : Math.min(110, 12 + Math.pow(a * 3000, .6) * 16); put(r, b.color, ss, Math.max(0, fade) * (b.kind === 'blackhole' ? .5 : 2)); } else { const a = b.R / d; if (a > .0022) continue; const k = Math.min(1.1, Math.pow(a * 2200, .45)) * (a > .0014 ? .5 : 1) * (b.swarm ? .5 : 1); if (k < .045) continue; const c = b.pal[2]; put(r.multiplyScalar(.9999), { r: .25 + c.x, g: .25 + c.y, b: .25 + c.z }, 3 + k * 2.6, k * .9); } }
  for (const k of ['position', 'color', 'ps']) pg.attributes[k].needsUpdate = true; pg.setDrawRange(0, n); pts.material.uniforms.uPx.value = px();
  gals.update(uni, uniPos(), 1 / pxr, sky.u.uVol.value); stars.update(gal, P.w / LY, px()); sky.update(stars, gal, dt); if (sky.done && (envT -= dt) < 0 && P.w < LY * .01) { sky.done = false; envT = 4; envMap(); }
}
function speedText(w) { if (beta > .01) { if (gamma < 1.6) return [(beta).toFixed(4), 'c']; const nines = -Math.log10(1 / (gamma * gamma) / (1 + beta)); return [nines < 5 ? beta.toFixed(Math.min(7, Math.ceil(nines) + 1)) : `1 − 10⁻${[...String(Math.floor(nines + .03))].map(c => '⁰¹²³⁴⁵⁶⁷⁸⁹'[c]).join('')}`, 'c']; } return w < 1000 ? [w.toFixed(0), 'm/s'] : w < 1e6 ? [(w / 1e3).toFixed(w < 1e4 ? 2 : 1), 'km/s'] : [Math.round(w / 1e3).toLocaleString('en'), 'km/s']; }
const gfmt = g => g < 100 ? g.toFixed(2) : g < 1e5 ? Math.round(g).toLocaleString('en') : sci(g);
function hud(dt) {
  drawMarkers(); const a = $('#aim'); a.style.transform = `translate(${mouse.px || innerWidth / 2}px,${mouse.py || innerHeight / 2}px)`; a.style.opacity = glide || gaze || P.state !== 'fly' ? 0 : 1; $('#reticle').style.opacity = gaze || P.state !== 'fly' ? 0 : 1;
  if ((hovT -= dt) < 0) { hovT = .08; hover = pickHover(); }
  drawDial(dt);
  { const el = $('#turn'); let s = ''; if (P.state === 'fly' && !glide && !gaze && P.w > LOWV) { const d = steerT > .25 ? F : head || cursorDir(true), [c, n] = turnAngle(D, d), a = Math.atan2(n, c); if (a > .002) { const w = turnResult(P.w / C0, c, n) * C0, g = gearAt(w); s = `${(a * 57.2958).toFixed(a < .17 ? 1 : 0)}° → ${g < .05 ? 'stop' : g < 2 ? 'cruise' : gearName(Math.floor(g + .05))}`; } } if (el.textContent !== s) el.textContent = s; el.style.transform = `translate(${(mouse.px || innerWidth / 2) + 14}px,${(mouse.py || innerHeight / 2) - 24}px)`; el.style.opacity = steerT >= 0 || head || !locked ? 1 : .55; }
  if ((hudT -= dt) > 0) return; hudT = .1; const [n, un] = speedText(P.w); $('#speed b').textContent = `${n} ${un}`;
  $('#speed span').textContent = P.state === 'landed' ? 'Landed' : P.state === 'walk' ? 'On foot' : P.state === 'descend' ? 'Landing' : glide ? 'Gliding' : gaze ? 'Gazing' : P.boostT ? 'Boost' : hold && hold.n !== 1 ? `Gear ${gearName(hold.n)}` : `Throttle ${Math.round(P.thr * 100)}%`; if (glide && hold) $('#speed span').textContent = `Gliding, gear ${gearName(hold.n)}`;
  $('#rel').innerHTML = gamma > 1.0005 ? `γ ${gfmt(gamma)}<br>Lengths ahead × ${gamma < 1000 ? (1 / gamma).toFixed(3) : sci(1 / gamma)}<br>1 s here = ${span(gamma)} outside${shared.uMeas.value ? '<br>View: measured' : ''}` : st.years > .002 ? `${span(st.years * 3.156e7)} have passed outside` : '';
  // nearest three surfaces, in the ship's own frame
  const relOf = (o, v) => o.g ? (tmp.copy(uniPos()), v.set((o.g.pos[0] - tmp.x) * LY, (o.g.pos[1] - tmp.y) * LY, (o.g.pos[2] - tmp.z) * LY)) : o.s ? starRel(o.s, v).sub(P.pos) : v.copy(o.b.pos).sub(P.pos);
  $('#near').innerHTML = lastList.slice(0, 3).map(o => { relOf(o, r0); const l = Math.max(r0.length(), 1), c = o.d * contracted(r0) / l; return `<div><b>${dist(o.d)}</b><span>${o.name}${gamma > 1.02 ? ` <i>aboard ${dist(c)}</i>` : ''}</span></div>`; }).join('');
  const eOn = P.state === 'fly' && (EN.idle < 45 || trip); $('#energy').classList.toggle('on', !!eOn); if (eOn) $('#energy').innerHTML = `<b>${EN.idle < .6 ? (EN.sign > 0 ? 'Accelerating' : 'Decelerating') + ' ' + si(EN.power, 'W') : 'Drive idle'}</b><br>${EN.idle < .6 ? 'This' : 'Last'} ${EN.sign < 0 ? 'braking' : 'burn'} ${si(EN.burn, 'J')} = ${mass(EN.burn)}<br>${EN.idle < .6 ? `Now ${gees(EN.a)}, max` : 'Max'} ${gees(EN.gmax)}` + (EN.prev ? `<br>Before: ${EN.prev.s < 0 ? 'braking' : 'burn'} ${si(EN.prev.E, 'J')} = ${mass(EN.prev.E)}, max ${gees(EN.prev.g)}` : '') + (trip ? `<br>Journey ${si(trip.E, 'J')} = ${mass(trip.E)}` : `<br>Total ${si(EN.total, 'J')} = ${mass(EN.total)}`);
  const iq = P.q.clone().invert(), seen = new Set(), rl = []; const src = lastList.map(o => { const r = relOf(o, V()), c = r.length(); return { o: o.b || o.s || o.g.star, name: o.name, star: !!(o.s || o.g) || ['star', 'pulsar', 'blackhole', 'quasar'].includes(o.b?.kind), small: !!o.b?.swarm, hue: o.b ? hueOf(o.b) : o.g ? '#b9c8ff' : '#cfe3ff', g: !!o.g, d: Math.max(1, o.d), dir: r.divideScalar(Math.max(c, 1)).applyQuaternion(iq) }; }).sort((a, b) => a.d - b.d); let sw = 0; for (const t of src) { if (t.small && ++sw > 6 && t.o !== target) continue; if (t.g && !voidT && t.o !== target?.star) continue; if (rl.length < 22 || t.o === target || t.o === sys.main) rl.push(t); } radar.draw(rl, target); drawGears();
  { const o = P.state !== 'fly' ? nb : hover?.b || hover?.s || target?.star || target, sh = $('#sheet'); sh.classList.toggle('on', !!(sheetOn && o)); if (o && o !== sheetKey && sheetOn) { sheetKey = o; const isB = !!o.kind; sh.innerHTML = `<h3>${isB ? o.name : starName(o)}</h3><p>${isB ? o.label : starClass(o)}</p><dl>${html(isB ? bodyRows(o, bodies.includes(o) ? sys : null) : starObjRows(o))}</dl>`; } }
  const b = nb, on = b && (alt < Math.max(b.atm ? b.atm.top * 1.6 : 0, Math.min(b.R * .4, 150000))); $('#alt').classList.toggle('on', !!on);
  if (on) { const fA = P.state === 'walk' ? walk.pos.distanceTo(P.pos) : 0, hh = P.pos.distanceTo(b.pos) - b.R, d = b.atm ? Math.exp(-Math.max(0, hh) / b.atm.H) * b.atm.press : 0; $('#alt b').textContent = P.state === 'walk' ? dist(fA) + ' to ship' : P.state === 'landed' ? 'On the ground' : dist(Math.max(0, alt - 2.6)); const vs = upAt(b, P.pos).dot(D) * P.w + upAt(b, P.pos).dot(P.drift); $('#alt p').innerHTML = [P.state === 'fly' ? `${vs < 0 ? '↓' : '↑'} ${dist(Math.abs(vs))}/s` : '', `${b.name}, ${b.label.toLowerCase()}`, `Radius ${dist(b.R)}, gravity ${b.grav} g`, b.atm ? (d > 900 ? 'Crushing pressure' : d < .005 ? 'Edge of the atmosphere' : `Pressure ${d < .1 ? d.toFixed(3) : d.toFixed(2)} atm`) : 'No atmosphere', b.T !== undefined ? `${Math.round(b.T)} °C` : '', b.atm && b.kind === 'rock' && hh < b.atm.cloudH * 1.5 ? WEATHER[wx.f > .05 ? wx.k : 'clear'] : ''].filter(Boolean).join('<br>'); }
  const l = $('#land'), t = canLand() ? ['G', nb.terrain.raw(upAt(nb, P.pos)) < 0 && nb.P.sea ? `Set down on the ${nb.seaName}` : 'Land'] : P.state === 'landed' ? ['G', 'Take off, or press E to step out'] : P.state === 'walk' && walk.pos.distanceTo(P.pos) < 22 ? ['E', 'Board the ship'] : P.state === 'fly' && nb?.terrain && alt < 600 && P.w > 90 ? ['X', 'Brake to land'] : P.state === 'fly' && nb?.terrain && alt < 1500 && alt > 260 && P.w < 90 ? ['↓', 'Fly lower to land'] : null; l.classList.toggle('on', !!t); if (t) { l.children[0].textContent = t[0]; l.children[1].textContent = t[1]; }
  $('#reticle .hull').style.strokeDasharray = `${P.hull < 99 ? P.hull / 100 : 0} 1`;
}
// ---------- loop
let last = performance.now(), avg = 16, resT = 0, calm = 0;
function frame(now) {
  requestAnimationFrame(frame); const raw = now - last; last = now; const dt = Math.min(.05, Math.max(.001, raw / 1000)); if (paused) { post.render(scene, cam); return; } clock.value += dt; shared.uTime.value = clock.value; post.u.uTime.value = clock.value % 100;
  if (raw < 250 && !document.hidden && !warp) { avg += (raw - avg) * .06; resT += dt; if (resT > 1) { resT = 0; let s = post.scale; if (avg > 23) { s = Math.max(.45, s * .88); calm = 0; } else if (avg < 17.8 && ++calm > 5) { s = Math.min(1, s * 1.06); calm = 0; } if (Math.abs(s - post.scale) > .001) { post.scale = s; post.apply(); } } }
  if (warp) { warp.t += dt; const half = warp.dur * .45; if (warp.t >= half && !warp.done) { warp.done = true; Promise.resolve(warp.fn()).catch(e => console.error(e)).then(() => { warp.ready = true; warp.t = half; }); } if (!warp.ready) { warp.t = Math.min(warp.t, half); post.u.uWarp.value = Math.min(1, warp.t / half); } else post.u.uWarp.value = Math.max(0, 1 - (warp.t - half) / (warp.dur - half)); if (warp.ready && warp.t >= warp.dur) { warp = null; post.u.uWarp.value = 0; } }
  flash *= Math.exp(-dt * 2.5); post.u.uFlash.value.set(flashC.x, flashC.y, flashC.z, flash < .003 ? 0 : flash); sparks.update(dt); audio.update(mode === 'flight' ? (P.state === 'fly' ? Math.min(4000, P.w < 1000 ? P.w : 1000 + Math.log10(P.w / 1000) * 250) : 0) + wx.f * 700 : 0, post.u.uBend.value > .2);
  if (mode === 'flight' || (mode === 'warp' && started && warp?.done && anchor)) { if (mode === 'flight') { simulate(dt); hud(dt); } post.render(scene, cam); }
  else { post.u.uHeat.value = post.u.uBend.value = post.u.uSpeed.value = 0; if (mode === 'title') gmap.a += dt * .015; if (mode === 'map') { const k = 700 * dt; if (keys.KeyA) gmap.pan(k, 0); if (keys.KeyD) gmap.pan(-k, 0); if (keys.KeyW) gmap.pan(0, k); if (keys.KeyS) gmap.pan(0, -k); } gmap.update(dt, mode !== 'map'); post.render(gmap.scene, mapCam); }
}
$('#resume').onclick = () => setPause(false); $('#phelp').onclick = () => { setPause(false); showHelp(true); }; $('#pmap').onclick = () => { setPause(false); freeExit = true; document.exitPointerLock?.(); setTimeout(() => freeExit = false, 300); setMode('map'); };
function begin(isNew) { audio.start(); if (isNew) { Object.assign(st, fresh()); delete st.at; loadGalaxy(); } mouse.x = mouse.y = 0; mouse.px = innerWidth / 2; mouse.py = innerHeight / 2; $('#title').classList.add('off'); setMode('warp'); goWarp(async () => { const at = !isNew && save?.at; spawn(at); started = true; await ready(); setMode('flight'); drawSpectrum(); banner(at ? sys.name : target.name, at ? $('#place p').textContent : 'Hold Shift to boost toward the world ahead. X brakes. Press ? for everything else.'); }); }
$('#begin').onclick = () => begin(false); $('#again').onclick = () => begin(true); if (save) { $('#begin').textContent = 'Continue'; $('#again').hidden = false; }
$('#title p').innerHTML = 'A galaxy at its true size. Every star you can see is a place you can reach.<br>Fly close to light, land anywhere, and gather its seven colours.';
gmap.D = gmap.tD = 57000; gmap.e = .42; loadGalaxy(); { const m = stars.marks[0]; sky.bakeNow(stars, V(m.x, m.y, m.z)); } drawSpectrum(); requestAnimationFrame(frame);
if (import.meta.env.DEV) window.__g = { st, P, V, LY, post, cam, stars, sky, shared, renderer, setAnchor, startLanding, stepOut, walk, gain, get bodies() { return bodies; }, get anchor() { return anchor; }, get alt() { return alt; }, get nb() { return nb; }, get mode() { return mode; }, get warp() { return warp; }, get avg() { return avg; }, get gamma() { return gamma; }, get target() { return target; }, set target(b) { target = b; }, set gaze(v) { gaze = v; gz = null; }, get glide() { return glide; }, set glide(v) { glide = v; }, get wx() { return wx; }, get list() { return lastList; }, get D() { return D; }, get F() { return F; }, get locked() { return locked; }, get head() { return head; }, gearAt, gid, gearName, setSpeed, get picked() { return picked; }, gearPos, gals, gmap, get uni() { return uni; }, get cur() { return cur; }, uniPos, EN, SET, get hold() { return hold; }, get paused() { return paused; }, get hover() { return hover; }, get trip() { return trip; }, get beta() { return beta; } };
