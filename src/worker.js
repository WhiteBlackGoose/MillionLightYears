import { makeHeight, buildChunk } from './height.js';
const fns = new Map();
onmessage = e => { const { id, P, f, l, x, y } = e.data; let h = fns.get(P.key); if (!h) { if (fns.size > 60) fns.clear(); fns.set(P.key, h = makeHeight(P)); } const r = buildChunk(P, h, f, l, x, y); postMessage({ id, ...r }, [r.pos.buffer, r.nor.buffer, r.aux.buffer, r.tile.buffer]); };
