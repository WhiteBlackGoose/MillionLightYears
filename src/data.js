// Physical data sheets, derived from the sizes, temperatures and gravity actually used in the game.
import { C0, AU, LY, dist, span } from './core.js';
import { sci } from './energy.js';
import { starRadius } from './stars.js';
import { buildSystem } from './system.js';
const G = 6.6743e-11, MS = 1.98847e30, RS = 6.957e8, ME = 5.9722e24, RE = 6.371e6, MJ = 1.89813e27, RJ = 6.9911e7, SUN = '☉', EARTH = '⊕', JUP = '♃', LS = 3.828e26;
export const num = x => !(x > 0) ? '0' : x < .001 || x >= 1e6 ? sci(x) : x >= 1000 ? Math.round(x).toLocaleString('en') : String(+x.toPrecision(3));
const sub = s => `<sub>${s}</sub>`, kel = T => T >= 1e6 ? num(T) + ' K' : `${num(Math.max(0, T))} K (${Math.round(T - 273.15).toLocaleString('en')} °C)`, big = T => T >= 1e6 ? (T >= 1e9 ? sci(T) : num(T / 1e6) + ' million') + ' K' : num(Math.round(T)) + ' K';
const vel = v => v >= .01 * C0 ? num(v / C0) + ' c' : v >= 1000 ? num(v / 1000) + ' km/s' : num(v) + ' m/s', dens = d => d >= 1e6 ? sci(d) + ' kg/m³' : num(d / 1000) + ' g/cm³', vol = R => 4 / 3 * Math.PI * R ** 3;
function starMass(L) { return L < .033 ? Math.max(.08, (L / .23) ** (1 / 2.3)) : L < 16 ? L ** .25 : L < 54000 ? (L / 1.4) ** (1 / 3.5) : Math.min(150, L / 32000 + 20); }
export function bodyMass(b) { // kg
  if (b.kind === 'blackhole' || b.kind === 'quasar') return b.R * C0 * C0 / (2 * G); if (b.kind === 'pulsar') return 1.44 * MS;
  if (b.kind === 'star') return starMass(lum(b)) * MS; return b.g * b.R * b.R / G; }
const lum = b => (b.R / RS) ** 2 * (b.T / 5780) ** 4;
export const AIR = { terran: 'nitrogen, oxygen', ocean: 'nitrogen, oxygen, water vapour', desert: 'carbon dioxide, nitrogen', mesa: 'nitrogen, carbon dioxide', ice: 'nitrogen, methane', lava: 'sulphur dioxide, carbon dioxide', toxic: 'carbon dioxide, sulphuric acid', exotic: 'neon, methane, unknown organics', barren: 'traces', crystal: 'argon, silicon vapour', fungal: 'nitrogen, carbon dioxide, spores', salt: 'nitrogen, chlorine', carbon: 'carbon monoxide, soot', metal: 'iron vapour, oxygen traces', painted: 'nitrogen, carbon dioxide', glow: 'nitrogen, oxygen, xenon', sulfur: 'sulphur dioxide', gas: 'hydrogen, helium', icegiant: 'hydrogen, helium, methane' };
function starRows(b) {
  const M = bodyMass(b), m = M / MS, L = lum(b), r = b.R / RS, giant = L > 50 && b.T < 6000, core = giant ? (L > 5000 ? 2.4e8 : 1.1e8) : 1.57e7 * (m / r) ** .65, life = 1e10 * m / Math.max(L, 1e-6);
  return [['Mass', `${num(m)} M${sub(SUN)}`], ['Radius', `${num(r)} R${sub(SUN)} (${dist(b.R)})`], ['Luminosity', `${num(L)} L${sub(SUN)}`], ['Surface', kel(b.T)], ['Core', '≈ ' + big(core)], ['Density', dens(M / vol(b.R))], ['Surface gravity', num(G * M / b.R ** 2 / 9.80665) + ' g'], ['Escape velocity', vel(Math.sqrt(2 * G * M / b.R))], ['Mass burned', num(L * LS / C0 ** 2) + ' kg/s'], giant ? ['Stage', 'late, helium burning'] : ['Lifetime', '≈ ' + (life >= 1e9 ? num(+(life / 1e9).toPrecision(2)) + ' billion years' : num(+(life / 1e6).toPrecision(2)) + ' million years')]];
}
function holeRows(b) { const M = bodyMass(b), m = M / MS, q = b.kind === 'quasar'; return [['Mass', `${num(m)} M${sub(SUN)}`], ['Horizon radius', dist(b.R)], ['Photon sphere', dist(b.R * 1.5)], ['Innermost stable orbit', dist(b.R * 3)], ['Mean density', dens(M / vol(b.R))], ['Horizon (Hawking)', sci(6.168e-8 / m) + ' K'], ['Disk, inner edge', '≈ ' + big(6.3e7 * m ** -.25)], ['Tide at horizon', tide(2 * G * M * 2 / b.R ** 3)], ['Horizon to centre', secs(Math.PI * G * M / C0 ** 3)], q ? ['Jets', dist(b.jetLen || b.R * 60) + ' each'] : null].filter(Boolean); }
const secs = s => s < 1e-3 ? num(s * 1e6) + ' µs' : s < 1 ? num(s * 1e3) + ' ms' : s < 120 ? num(s) + ' s' : span(s), tide = a => num(a / 9.80665) + ' g over 2 m';
function pulsarRows(b) { const M = bodyMass(b), g = G * M / b.R ** 2, z = Math.sqrt(1 - 2 * G * M / (b.R * C0 * C0)); return [['Mass', `${num(M / MS)} M${sub(SUN)}`], ['Radius', dist(b.R)], ['Density', dens(M / vol(b.R))], ['Surface', '≈ 600,000 K'], ['Core', '≈ 200 million K'], ['Rotation', '3.2 s'], ['Magnetic field', '≈ ' + sci(1e8) + ' T'], ['Surface gravity', num(g / 9.80665) + ' g'], ['Escape velocity', vel(C0 * Math.sqrt(2 * G * M / (b.R * C0 * C0)))], ['Time on surface', `${num(z)} of outside`]]; }
function worldRows(b, sys) {
  const M = bodyMass(b), gas = b.kind === 'gas', rows = [['Mass', gas ? `${num(M / MJ)} M${sub(JUP)} = ${num(M / ME)} M${sub(EARTH)}` : M > ME * 1e-4 ? `${num(M / ME)} M${sub(EARTH)}` : num(M) + ' kg'], ['Radius', gas ? `${num(b.R / RJ)} R${sub(JUP)} (${dist(b.R)})` : b.R > 2e5 ? `${num(b.R / RE)} R${sub(EARTH)} (${dist(b.R)})` : dist(b.R)], ['Density', dens(M / vol(b.R))], [gas ? 'Gravity, cloud tops' : 'Gravity', num(b.g / 9.80665) + ' g'], ['Escape velocity', vel(Math.sqrt(2 * G * M / b.R))]];
  const Ts = b.T + 273.15; rows.push([gas ? 'Cloud tops' : 'Surface', kel(Ts)]); const Tc = gas ? 2.2e4 * (M / MJ) ** .6 * (RJ / b.R) ** .25 : Ts + 5200 * Math.min(2.5, (M / ME) ** .45); rows.push(['Core', b.R < 1e5 ? '≈ as surface' : '≈ ' + big(Tc)]);
  if (b.atm) rows.push(['Pressure', gas ? 'no surface' : num(b.atm.press) + ' atm'], ['Air', AIR[b.type]]); else if (!gas) rows.push(['Air', 'none']);
  if (sys) { let p = sys.main, mo = false; if (b.moon) { for (const q of sys.bodies) if ((q.kind === 'gas' || q.kind === 'rock') && !q.moon && !q.swarm && (!mo || q.pos.distanceTo(b.pos) < p.pos.distanceTo(b.pos))) { p = q; mo = true; } } const a = p.pos.distanceTo(b.pos), T = 2 * Math.PI * Math.sqrt(a ** 3 / (G * bodyMass(p))); rows.push(['Orbit', `${a > AU * .01 ? num(a / AU) + ' AU' : dist(a)} around ${p.name}`], ['Period', T < 86400 * 800 ? span(T) : num(T / 3.156e7) + ' years']); if (sys.main.kind === 'star') { const d = b.pos.distanceTo(sys.main.pos) / AU; rows.push(['Starlight', `${num(lum(sys.main) / (d * d))} × Earth`]); } }
  return rows;
}
export function bodyRows(b, sys) { return b.kind === 'star' ? starRows(b) : b.kind === 'pulsar' ? pulsarRows(b) : b.kind === 'blackhole' || b.kind === 'quasar' ? holeRows(b) : worldRows(b, sys); }
const cache = new WeakMap();
export function starObjRows(s) { // a star not (necessarily) loaded
  if (s.isGal) return galRows(s.G); let r = cache.get(s); if (!r) { const sys = s.k === 'star' ? null : buildSystem(s); r = sys ? bodyRows(sys.main, sys) : starRows({ kind: 'star', R: starRadius(s), T: s.T }); cache.set(s, r); } return r; }
export function galRows(g) { const f = (g.R / 50000) ** 2.2, hole = 1.8e10 * C0 * C0 / (2 * G) / MS; return [['Diameter', dist(g.R * 2 * LY)], ['Stars', '≈ ' + sci(2e11 * f)], ['Mass, with dark matter', `≈ ${sci(1.2e12 * f)} M${sub(SUN)}`], ['Luminosity', `≈ ${sci(3e10 * f)} L${sub(SUN)}`], ['Central black hole', `${sci(hole)} M${sub(SUN)}`], ['Shape', g.ell ? 'elliptical' : `${g.arms} spiral arm${g.arms > 1 ? 's' : ''}`]]; }
export const html = rows => rows.map(r => `<dt>${r[0]}</dt><dd>${r[1]}</dd>`).join('');
