// Schwarzschild black hole, inside and out. Lengths in metres, rs = horizon radius.
import { C0 } from './core.js';
export const tidal = (rs, r, L = 10) => C0 * C0 * rs * L / (r * r * r); // stretching across L metres, m/s^2
export const properDist = (rs, r) => { const x = r / rs; return x <= 1 ? 0 : rs * (Math.sqrt(x * (x - 1)) + Math.log(Math.sqrt(x) + Math.sqrt(x - 1))); };
export const dilation = (rs, r) => Math.sqrt(Math.max(0, 1 - rs / r));
// radial speed dr/dtau for energy E (per mc^2) and angular momentum L (units of rs*c); inside the horizon it can only point inwards
export const fallRate = (x, E, L) => Math.sqrt(Math.max(1e-12, E * E - (1 - 1 / x) * (1 + L * L / (x * x))));
// proper time left until the singularity (seconds), numerically
export function timeLeft(rs, x, E, L) { let t = 0; const n = 240; for (let i = 0; i < n; i++) { const u0 = i / n, u1 = (i + 1) / n, g = q => x * Math.sin(q * Math.PI / 2) ** 2, a = g(u0), b = g(u1), m = Math.max(1e-9, (a + b) / 2); t += (b - a) / fallRate(m, E, L); } return t * rs / C0; }
// one step of proper time dtau (s). s: {x, E, L, phi}
export function fallStep(s, rs, dtau) { const n = 12, h = dtau * C0 / rs / n; for (let i = 0; i < n && s.x > 0; i++) { const k1 = fallRate(s.x, s.E, s.L), xm = Math.max(1e-6, s.x - k1 * h / 2), k2 = fallRate(xm, s.E, s.L); s.phi += s.L / (xm * xm) * h; s.x -= k2 * h; } }
