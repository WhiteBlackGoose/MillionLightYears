import * as THREE from 'three';
import { NOISE, add, premul, rng, V } from './glsl.js';
const WIND = 2.7;
export function galaxyDisc(seed, size, gain = 1, arms = 2, wind = WIND, ell = 0) {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(2, 2).rotateX(-Math.PI / 2), new THREE.ShaderMaterial({ ...premul, side: THREE.DoubleSide,
    uniforms: { uSeed: { value: seed }, uGain: { value: gain }, uA: { value: new THREE.Vector3(arms, wind, ell) } }, vertexShader: 'varying vec2 vUv;void main(){vUv=position.xz;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
    fragmentShader: NOISE + /* glsl */`
    varying vec2 vUv;uniform float uSeed,uGain;uniform vec3 uA;
    void main(){float r=length(vUv);if(r>1.)discard;if(uA.z>.5){gl_FragColor=vec4(vec3(1.,.8,.58)*(exp(-r*r*120.)*1.1+exp(-r*5.5)*.8)*smoothstep(1.,.6,r)*uGain,0.);return;}
     float th=atan(vUv.y,vUv.x)-log(r+.03)*uA.y;
     float n=fbm(vec3(vUv*5.,uSeed),5),n2=fbm(vec3(vUv*13.,uSeed+7.),5);
     float arm=pow(clamp(.5+.5*cos(uA.x*th+n*2.2),0.,1.),2.2);
     float lane=pow(clamp(.5+.5*cos(uA.x*th+1.15+n*2.8),0.,1.),5.)*smoothstep(.07,.2,r)*smoothstep(.95,.5,r);
     float f=exp(-r*3.6)*smoothstep(1.,.55,r);
     float bulge=exp(-r*r*150.)*1.3+exp(-r*14.)*.55;
     vec3 blue=vec3(.28,.46,1.),warm=vec3(1.,.72,.42),pink=vec3(1.,.22,.42);
     vec3 c=mix(warm,blue,smoothstep(.08,.5,r))*f*(.12+arm*(.65+n2*1.5))*1.25;
     c+=pink*arm*pow(clamp(n2*2.2+.15,0.,1.),2.)*f*smoothstep(.12,.3,r)*2.2;
     c+=warm*bulge;
     float dk=lane*clamp(.62+n2*1.3,0.,1.);
     c*=1.-.88*dk;
     gl_FragColor=vec4(max(c,0.)*uGain,clamp(dk*.55*smoothstep(1.,.5,r),0.,1.)*min(uGain,1.));}` }));
  m.scale.setScalar(size); return m;
}
export const HUES = { star: '#ffc45e', binary: '#ff8a5e', nebula: '#ff5f9e', pulsar: '#58e6ff', blackhole: '#a77bff', quasar: '#ffffff' };
// statistical star cloud of one galaxy in units where its radius is 1000
export function galaxyPoints(G) {
  const r = rng(G.seed + 99), n = G.R < 14000 ? 16000 : 60000, pos = new Float32Array(n * 3), col = new Float32Array(n * 3), sz = new Float32Array(n), k = Math.max(1, G.arms);
  for (let i = 0; i < n; i++) {
    const halo = r() < .1 || G.ell, bulge = !halo && r() < .22; let x, y, z, rad; const pick = r();
    if (bulge || halo) { const d = r.dir(); rad = bulge ? Math.abs(r.gauss()) * 75 : Math.pow(r(), G.ell ? 2.6 : 1.6) * 900; x = d.x * rad; y = d.y * rad * (bulge || G.ell ? .65 : .5); z = d.z * rad; }
    else { rad = Math.min(985, 30 - Math.log(1 - r() * .97) * 250); const q = r.gauss() * (.34 + r() * .25) * 2 / k, th = Math.log(rad / 1000 + .03) * G.wind + Math.floor(r() * k) / k * 6.28319 + q; x = Math.cos(th) * rad; z = Math.sin(th) * rad; y = r.gauss() * 13 * (1.3 - rad / 1000); }
    pos.set([x, y, z], i * 3); const t = Math.min(1, rad / 480), b = (bulge || halo ? .28 : .42) * (.4 + r()), c = pick < .03 && !halo && rad > 150 ? [1.5, .3, .6] : G.ell ? [1.1, .78, .5] : [1.1 - .55 * t, .72 + .02 * t, .42 + .75 * t];
    col.set(c.map(v => v * b), i * 3); sz[i] = pick < .03 ? 4.5 : r() < .01 ? 6 : 1 + r() * 2;
  }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('color', new THREE.BufferAttribute(col, 3)); g.setAttribute('size', new THREE.BufferAttribute(sz, 1));
  const m = new THREE.Points(g, new THREE.ShaderMaterial({ ...add, depthTest: false, vertexColors: true, uniforms: { uS: { value: 1 }, uFade: { value: 1 } }, vertexShader: 'attribute float size;uniform float uS,uFade;varying vec3 vC;void main(){vC=color*uFade;vec4 m=modelViewMatrix*vec4(position,1.);float s=size*uS*900./max(-m.z,1e-6);gl_PointSize=clamp(s,1.2,9.);vC*=min(1.,s/1.2);gl_Position=projectionMatrix*m;}',
    fragmentShader: 'varying vec3 vC;void main(){float d=length(gl_PointCoord-.5)*2.;gl_FragColor=vec4(vC*exp(-d*d*4.)*smoothstep(1.,.7,d),1.);}' })); m.frustumCulled = false; return m;
}
const SYL = ['ae', 'ly', 'ra', 'the', 'on', 'vel', 'or', 'ith', 'mur', 'sa', 'ne', 'is', 'cal', 'dro', 'em', 'ul', 'ka', 'phe', 'ri', 'os', 'tan', 'ya', 'zu', 'ber'];
export const makeName = r => { let s = ''; const n = r() < .45 ? 2 : 3; for (let i = 0; i < n; i++) s += r.pick(SYL); return s[0].toUpperCase() + s.slice(1); };
export function systemList(seed) {
  const r = rng(seed), types = ['star', 'nebula', 'pulsar', 'blackhole', 'star', 'binary', 'nebula', 'star', 'pulsar', 'blackhole', 'binary', 'star'];
  const out = types.map((type, i) => { const rad = 190 + (i * 7 % 12) / 12 * 560 + r() * 40, th = Math.log(rad / 1000 + .03) * WIND + (i % 2) * Math.PI + r.gauss() * .12;
    return { id: i, type, name: makeName(r), seed: (r() * 1e9) | 0, at: [Math.cos(th) * rad, r.gauss() * 8, Math.sin(th) * rad], first: i === 0 }; });
  out.push({ id: 12, type: 'quasar', name: 'The Heart', seed: (r() * 1e9) | 0, at: [0, 0, 0] });
  return out;
}
