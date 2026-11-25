// Deterministic contents of any star system, in metres.
import * as THREE from 'three';
import { rng, V } from './glsl.js';
import { AU } from './core.js';
import { makeName } from './galaxy.js';
import { starRadius, starName, tempColor, starClass } from './stars.js';
import { Terrain } from './terrain.js';
import { makeStar, makeGas, makeRing, makeHole, makePulsar } from './bodies.js';
const hsl = (h, s, l) => { const c = new THREE.Color().setHSL(((h % 1) + 1) % 1, s, l); return V(c.r, c.g, c.b); };
const ROM = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
export const WEATHER = { clear: 'Clear', rain: 'Rain', storm: 'Thunderstorm', snow: 'Snow', blizzard: 'Blizzard', dust: 'Dust storm', ash: 'Ash fall', acid: 'Acid rain', mist: 'Mist', diamond: 'Diamond dust' };
const LABEL = { terran: 'Temperate world', ocean: 'Ocean world', desert: 'Desert world', ice: 'Ice world', lava: 'Lava world', barren: 'Barren world', toxic: 'Toxic world', exotic: 'Exotic world', mesa: 'Canyon world', gas: 'Gas giant', icegiant: 'Ice giant', asteroid: 'Asteroid' };
function rocky(r, type, R, pos, sun, name, o = {}) {
  const seed = (r() * 1e9) | 0, big = Math.min(1, R / 6e6), k = r.range(.6, 1.5), hMaxBase = Math.min(11000, R * .02 + 400);
  const P = { key: 'k' + seed, R, seed, cont: hMaxBase * .55 * k, contF: r.range(1.1, 2.6), warp: r.range(.15, .6), bias: 0, ridge: hMaxBase * r.range(.7, 1.7), ridgeL: Math.min(R * .16, r.range(18000, 90000)), hill: r.range(.02, .07), dune: 0, terrace: 0, crater: 0, craterL: R * .55, craterMax: hMaxBase, spire: 0, canyon: 0, crack: 0, sea: 0, shape: 0 };
  const b = { kind: 'rock', type, label: LABEL[type], name, pos, R, P, sunDir: V(), sunCol: V(1, 1, 1), weather: [], g: 9.81 * (R / 6.37e6) * r.range(.7, 1.3), solid: 1 };
  let pal, atm = null; const H = Math.max(3500, Math.min(17000, R * .0026)), h0 = r();
  const air = (tau, mie, cloud, cc = V(.95, .96, 1), press = 1) => ({ H, top: H * 8, tau, mie, cloud, cloudC: cc, cloudF: r.range(2.2, 4.5) * Math.max(.5, big), cloudH: H * r.range(.28, .5), press });
  const earth = () => V(.05, .12, .28).multiplyScalar(r.range(.8, 1.5));
  if (type === 'terran') { const hue = r() < .6 ? r.range(.2, .36) : r(); P.sea = 1; P.bias = r.range(-.1, .14); b.water = hsl(r.range(.5, .64), .75, .16); pal = [hsl(hue + .08, .3, .42), hsl(hue, .5, .2), hsl(hue - .12, .25, .34), hsl(.07, .12, .3), V(.9, .93, .97)]; atm = air(o.earth || r() < .75 ? earth() : V(.16, .1, .22), .035, r.range(.35, .75)); b.plants = true; b.plantC = hsl(hue, .5, .25); b.snowLine = r.range(.82, 1.05); b.weather = ['clear', 'rain', 'mist', 'storm']; b.T = r.range(5, 28); }
  if (type === 'ocean') { P.sea = 1; P.bias = -.3; b.water = hsl(r.range(.45, .68), .8, .15); P.spire = r() < .5 ? 180 : 0; pal = [hsl(.12, .4, .5), hsl(h0, .4, .25), hsl(.1, .2, .4), hsl(.6, .06, .3), V(.9, .95, 1)]; atm = air(earth(), .05, r.range(.5, .9)); b.snowLine = 1.1; b.weather = ['storm', 'rain', 'storm', 'mist']; b.T = r.range(8, 34); }
  if (type === 'desert') { const hue = r.range(.02, .13); P.dune = r.range(20, 75); P.canyon = r() < .5 ? 900 : 0; pal = [hsl(hue, .5, .5), hsl(hue - .02, .5, .4), hsl(hue, .35, .3), hsl(hue - .03, .4, .22), hsl(hue + .03, .3, .75)]; atm = air(V(.16, .1, .06).multiplyScalar(r.range(.6, 1.6)), .08, r.range(0, .2), V(1, .85, .65), .4); b.snowLine = 1.3; b.weather = ['dust', 'clear', 'dust']; b.T = r.range(30, 75); }
  if (type === 'mesa') { const hue = r.range(-.02, .09); P.terrace = r.range(120, 420); P.canyon = r.range(700, 2200); P.ridge *= .4; P.spire = r.range(60, 240); pal = [hsl(hue, .55, .42), hsl(hue + .03, .5, .34), hsl(hue + .05, .45, .55), hsl(hue, .6, .25), hsl(hue + .04, .3, .8)]; atm = air(V(.1, .13, .2).multiplyScalar(r.range(.6, 1.5)), .05, r.range(.05, .4), V(1, .9, .82), .7); b.snowLine = 1.25; b.weather = ['clear', 'dust', 'mist']; b.T = r.range(10, 45); }
  if (type === 'ice') { const hue = r.range(.5, .68); P.crack = r.range(120, 500); pal = [hsl(hue, .25, .82), hsl(hue, .35, .68), hsl(hue, .2, .9), hsl(hue, .45, .42), V(.92, .96, 1)]; if (r() < .75) atm = air(V(.06, .11, .2).multiplyScalar(r.range(.4, 1.3)), .05, r.range(.1, .6), V(.95, .98, 1), .5); b.snowLine = .55; b.crystals = r() < .6; b.glow = hsl(hue, .7, .5); b.weather = ['snow', 'blizzard', 'diamond', 'clear']; b.T = r.range(-190, -40); }
  if (type === 'lava') { P.sea = 1; P.bias = r.range(-.05, .1); b.lava = true; b.glow = r() < .85 || 0 ? V(3, .55, .06) : V(.25, 1.1, 1.6); P.ridge *= 1.2; pal = [hsl(.04, .12, .13), hsl(.02, .15, .08), hsl(.05, .1, .18), hsl(.0, .1, .07), hsl(.06, .2, .3)]; if (r() < .8) atm = air(V(.26, .1, .05).multiplyScalar(r.range(.4, 1.2)), .12, r.range(.1, .5), V(.45, .35, .32), .9); b.snowLine = 1.4; b.weather = ['ash', 'ash', 'clear']; b.T = r.range(400, 1400); }
  if (type === 'toxic') { const hue = r.range(.12, .28); P.sea = r() < .5 ? 1 : 0; b.water = hsl(hue, .8, .2); pal = [hsl(hue, .4, .35), hsl(hue + .05, .5, .22), hsl(hue - .08, .4, .4), hsl(hue, .2, .2), hsl(hue, .4, .6)]; atm = air(V(.22, .26, .06).multiplyScalar(r.range(.7, 1.8)), .2, r.range(.6, .95), hsl(hue, .45, .72), 4); b.snowLine = 1.3; P.spire = r() < .5 ? 150 : 0; b.weather = ['acid', 'mist', 'storm']; b.T = r.range(90, 460); }
  if (type === 'exotic') { P.sea = r() < .5 ? 1 : 0; b.water = hsl(h0 + .4, .8, .2); P.spire = r.range(150, 520); P.terrace = r() < .4 ? 150 : 0; pal = [hsl(h0, .6, .4), hsl(h0 + .1, .6, .25), hsl(h0 + .2, .5, .5), hsl(h0 + .55, .4, .25), hsl(h0 + .3, .4, .8)]; const t = hsl(r(), .7, .5); atm = air(t.multiplyScalar(.5).addScalar(.02), .06, r.range(.15, .6), hsl(r(), .3, .85), 1); b.crystals = true; b.glow = hsl(h0 + .45, .9, .55); b.plants = r() < .6; b.plantC = hsl(h0 + .5, .7, .4); b.snowLine = r.range(.9, 1.3); b.weather = ['diamond', 'mist', 'clear', 'rain']; b.T = r.range(-60, 60); }
  if (type === 'barren' || type === 'asteroid') { const hue = r.range(.02, .14), l = r.range(.16, .42), s = r.range(.02, .22); P.crater = r.range(.35, .75); P.ridge *= .25; P.hill *= .8; pal = [hsl(hue, s, l), hsl(hue, s * 1.2, l * .75), hsl(hue, s, l * 1.3), hsl(hue, s, l * .6), hsl(hue, s, l * 1.6)]; b.snowLine = 1.5; b.T = r.range(-150, 120); b.weather = []; if (type === 'asteroid') { P.shape = r.range(.18, .42); P.cont = R * .06; P.ridge = R * .05; P.ridgeL = R * .5; P.hill = r.range(.03, .09); P.craterMax = R * .1; P.crater = r.range(.4, .8); b.crystals = r() < .35; b.glow = hsl(r(), .9, .5); b.g = Math.max(.002, 9.8 * R / 6.4e6); } }
  if (R < 1.1e6 && type !== 'lava' && atm && r() < .5) { atm.tau.multiplyScalar(.3); atm.cloud *= .4; atm.press *= .1; }
  b.pal = pal; b.atm = atm; b.hs = Math.max(hMaxBase, R * .02); b.hMax = type === 'asteroid' ? R * .8 : hMaxBase * 3; b.hMin = type === 'asteroid' ? -R * .6 : -hMaxBase * 2.5; b.seaName = P.sea ? (b.lava ? 'lava' : 'sea') : '';
  b.grav = (b.g / 9.81).toFixed(2); if (!atm) b.weather = []; return b;
}
function gasGiant(r, R, pos, name, hot) { const ic = R < 3.4e7, h = ic ? r.range(.48, .64) : r.range(-.02, .14), alt = r() < .2 ? r() : h, b = { kind: 'gas', type: ic ? 'icegiant' : 'gas', label: ic ? 'Ice giant' : 'Gas giant', name, pos, R, seed: r() * 50, sunDir: V(), sunCol: V(1, 1, 1), up: V(r.gauss() * .25, 1, r.gauss() * .25).normalize(), pal: [hsl(alt, .5, .6), hsl(alt - .03, .55, .32), hsl(alt + .05, .5, .82)], g: r.range(9, 26), solid: 1 }; b.grav = (b.g / 9.81).toFixed(2); b.ring = r() < .55; b.T = r.range(-190, -90); const H = R * .0032; b.atm = { H, top: H * 8, tau: ic ? V(.03, .08, .15) : V(.07, .06, .045), mie: .02, cloud: 0, press: 1000 }; b.weather = ['storm']; return b; }
export function buildSystem(s) {
  const r = rng(s.seed ^ 0x1f3), bodies = [], nm = starName(s), col = tempColor(s.T), O = V(); let main;
  if (s.k === 'blackhole') { main = { kind: 'blackhole', label: 'Black hole', R: r.range(2e7, 6e7), color: new THREE.Color('#ffd0a0') }; }
  else if (s.k === 'quasar') main = { kind: 'quasar', label: 'Supermassive black hole', R: 1.8e10, color: new THREE.Color('#dce8ff') };
  else if (s.k === 'pulsar') main = { kind: 'pulsar', label: 'Pulsar', R: 12000, color: new THREE.Color('#9cd8ff') };
  else main = { kind: 'star', label: starClass(s), R: starRadius(s), color: col.clone() };
  Object.assign(main, { name: nm, pos: O.clone(), solid: 1, T: s.T }); bodies.push(main);
  const land = s.land, suns = [main];
  if (s.k === 'star' && (land?.type === 'binary' || r() < .12)) { const T2 = r.range(2900, 9000), R2 = main.R * r.range(.15, .7); suns.push({ kind: 'star', label: 'Companion star', name: nm + ' B', pos: V(main.R * 9 + .08 * AU, main.R, 0), R: R2, color: tempColor(T2), solid: 1, T: T2 }); bodies.push(suns[1]); }
  const L = s.k === 'star' ? s.L : s.k === 'quasar' ? 1e6 : 1, unit = Math.sqrt(L) * AU, n = s.k === 'quasar' ? 2 : s.k === 'star' ? (land?.first ? 6 : 1 + (r() * 7 | 0)) : 1 + (r() * 3 | 0); let a = Math.max(unit * r.range(.22, .45), main.R * 12); let ci = 0;
  for (let i = 0; i < n; i++) {
    const Teq = 278 * Math.sqrt(unit / AU ? unit / a : 1), th = r() * 6.2832, pos = V(Math.cos(th) * a, r.gauss() * .03 * a, Math.sin(th) * a); let type; const u = r();
    if (land?.first) type = ['lava', 'terran', 'mesa', 'gas', 'exotic', 'gas'][i]; else if (s.k !== 'star') type = r.pick(['barren', 'lava', 'ice', 'exotic', 'barren']);
    else if (Teq > 600) type = u < .45 ? 'lava' : u < .75 ? 'barren' : u < .9 ? 'toxic' : 'gas'; else if (Teq > 330) type = u < .3 ? 'desert' : u < .5 ? 'toxic' : u < .7 ? 'mesa' : u < .85 ? 'barren' : 'exotic'; else if (Teq > 215) type = u < .42 ? 'terran' : u < .6 ? 'ocean' : u < .72 ? 'exotic' : u < .84 ? 'mesa' : u < .93 ? 'desert' : 'barren'; else if (Teq > 110) type = u < .5 ? 'gas' : u < .75 ? 'ice' : u < .88 ? 'exotic' : 'barren'; else type = u < .4 ? 'gas' : u < .85 ? 'ice' : 'barren';
    const name = land?.first && i === 1 ? makeName(r) : nm + ' ' + ROM[ci]; ci++; let b;
    if (type === 'gas') { b = gasGiant(r, Math.exp(r.range(Math.log(2.2e7), Math.log(9e7))), pos, name); if (land?.first) b.ring = true; } else b = rocky(r, type, land?.first && i === 1 ? 5.9e6 : Math.exp(r.range(Math.log(1.2e6), Math.log(1.1e7))), pos, main, name, { earth: land?.first });
    bodies.push(b);
    const nMoon = type === 'gas' ? 1 + (r() * 4 | 0) : r() < .5 ? 1 + (r() * 2 | 0) : 0; let mo = b.R * (b.ring ? 3.4 : 5);
    for (let j = 0; j < nMoon; j++) { mo *= r.range(1.3, 1.9); const mt = r() * 6.28, mR = Math.exp(r.range(Math.log(b.R * .02 + 3e4), Math.log(Math.min(2.6e6, b.R * .28)))), mp = pos.clone().add(V(Math.cos(mt) * mo, r.gauss() * .12 * mo, Math.sin(mt) * mo)); const m = rocky(r, r.pick(Teq < 160 ? ['ice', 'ice', 'barren', 'exotic', 'barren'] : Teq > 400 ? ['lava', 'barren', 'barren'] : ['barren', 'barren', 'desert', 'ice', 'terran']), mR, mp, main, name + ' ' + 'abcdefgh'[j]); m.moon = true; m.label = m.label.replace('world', 'moon'); bodies.push(m); }
    if (b.kind === 'gas' ? r() < .25 : i > 0 && (land?.first ? i === 2 : r() < .35)) { // asteroid swarm
      const c = pos.clone().multiplyScalar(land?.first ? 1.0001 : 1.2); if (land?.first) c.copy(pos).add(V(b.R * 9, b.R * 2, b.R * 4)); const nn = 14, sw = makeName(r); for (let q = 0; q < nn; q++) { const R = Math.exp(r.range(Math.log(120), Math.log(9e4))) * (q ? 1 : 1.6); const sp = 9e5; bodies.push(Object.assign(rocky(r, 'asteroid', R, c.clone().add(V(r.gauss() * sp, r.gauss() * sp * .3, r.gauss() * sp)), main, sw + '-' + (q + 1)), { swarm: true })); } }
    a *= r.range(1.4, 2.1);
  }
  const sc = main.color; const sunCol = V(sc.r, sc.g, sc.b).lerp(V(1, 1, 1), .6);
  for (const b of bodies) if (b.kind === 'rock' || b.kind === 'gas') { b.sunDir.copy(main.pos).sub(b.pos).normalize(); b.sunCol.copy(sunCol); }
  return { star: s, name: nm, bodies, main };
}
export function materialize(b) { // build GPU side on demand
  if (b.group) return; if (b.kind === 'star') makeStar(b); else if (b.kind === 'pulsar') makePulsar(b); else if (b.kind === 'blackhole') makeHole(b, ...[['#fff0d8', '#ff7a2a'], ['#f4f0ff', '#b05cff'], ['#fff2dc', '#ff4a36']][Math.floor(b.R) % 3]); else if (b.kind === 'quasar') makeHole(b, '#dcecff', '#ff7a3c', 17, true);
  else if (b.kind === 'gas') { makeGas(b); if (b.ring) makeRing(b); } else { b.terrain = new Terrain(b); b.group = b.terrain.group; b.sync = () => { }; }
}
export function dematerialize(b) { if (!b.group) return; b.group.removeFromParent(); if (b.terrain) { b.terrain.dispose(); b.terrain = null; } else b.group.traverse(o => { if (o.material) o.material.dispose(); }); b.group = null; b.sync = null; }
