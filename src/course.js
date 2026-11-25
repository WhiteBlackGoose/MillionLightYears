// Relativistic course changes. Velocity is the vector w·D (proper velocity, units of c here).
// Cheapest way to fly along a new heading F: move in velocity (hyperbolic) space straight to the closest
// point of the F ray. That point has speed beta·cos(theta); at 90 degrees or more it is a full stop.
export function turnResult(w, cos, sin) { // -> proper velocity left along the new heading
  if (cos <= 0) return 0; const b2 = w * w / (1 + w * w), inv = sin * sin + cos * cos / (1 + w * w); return Math.sqrt(b2) * cos / Math.sqrt(inv); }
// one step of the burn; returns {par, perp, d}: new components along F and sideways, and the rapidity spent
export function turnStep(w, cos, sin, dt, rate = 3, max = 5) {
  if (cos <= 0) { const eta = Math.asinh(w), d = Math.min(eta * (1 - Math.exp(-dt * rate)), max * dt), n = Math.sinh(eta - d); return { w: n, straight: true, d }; }
  const r = Math.asinh(w * sin), d = Math.min(r * (1 - Math.exp(-dt * rate)), max * dt), u = turnResult(w, cos, sin); return { par: u * Math.cosh(r - d), perp: Math.sinh(r - d), d, r: r - d }; }
