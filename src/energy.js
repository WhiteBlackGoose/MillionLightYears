// Ideal drive: energy used = change of relativistic kinetic energy of a 10 t ship, speeding up or slowing down.
import { C0 } from './core.js';
export const MASS = 10000;
export const rapidity = w => Math.asinh(w / C0);
export const gees = a => { const g = a / 9.80665; return g < 10 ? g.toFixed(2) + ' g' : g < 1e4 ? Math.round(g).toLocaleString('en') + ' g' : sci(g) + ' g'; };
export const kinetic = w => { const u = w / C0, g = Math.sqrt(1 + u * u); return MASS * C0 * C0 * (u * u / (g + 1)); }; // stable at low speed
// plain powers of ten, as HTML
export const sci = x => { let e = Math.floor(Math.log10(x)), m = (x / 10 ** e).toFixed(2); if (m === '10.00') { m = '1.00'; e++; } return `${m} × 10<sup>${e < 0 ? '−' + -e : e}</sup>`; };
export function si(x, u) { return !(x > 0) ? '0 ' + u : x < 1e4 ? x.toFixed(0) + ' ' + u : sci(x) + ' ' + u; }
export function mass(E) { const m = E / (C0 * C0); if (!(m > 0)) return '0 kg'; if (m < 1e-9) return (m * 1e12).toPrecision(3) + ' ng'; if (m < 1e-6) return (m * 1e9).toPrecision(3) + ' µg'; if (m < 1e-3) return (m * 1e6).toPrecision(3) + ' mg'; if (m < 1) return (m * 1e3).toPrecision(3) + ' g'; if (m < 1e3) return m.toFixed(m < 10 ? 2 : 0) + ' kg'; if (m < 1e9) return Math.round(m / 1e3).toLocaleString('en') + ' t'; return sci(m / 1e3) + ' t'; }
const REF = [[4.2e9, 'tonnes of TNT'], [2.1e17, 'times the largest bomb ever tested'], [6e20, "times humanity's yearly energy use"], [3.83e26, 'seconds of the Sun’s whole output'], [3.83e26 * 3.156e7, 'years of the Sun’s whole output']];
export function compare(E) { let r = null; for (const q of REF) if (E >= q[0]) r = q; if (!r) return ''; const n = E / r[0]; return `${n < 1e4 ? n.toLocaleString('en', { maximumFractionDigits: n < 10 ? 1 : 0 }) : sci(n)} ${r[1]}`; }
export const ships = E => { const n = E / (MASS * C0 * C0); return n < .001 ? '' : `${n < 1e4 ? n.toLocaleString('en', { maximumFractionDigits: n < 10 ? 2 : 0 }) : sci(n)} × the ship's own mass`; };
