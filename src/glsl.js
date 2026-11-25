import * as THREE from 'three';
export const NOISE = /* glsl */`
float hash13(vec3 p){p=fract(p*.1031);p+=dot(p,p.zyx+31.32);return fract((p.x+p.y)*p.z);}
vec3 hash33(vec3 p){p=fract(p*vec3(.1031,.1030,.0973));p+=dot(p,p.yxz+33.33);return fract((p.xxy+p.yxx)*p.zyx);}
float gnoise(vec3 x){vec3 i=floor(x),f=fract(x),u=f*f*f*(f*(f*6.-15.)+10.);
 #define G(o) dot(hash33(i+o)*2.-1.,f-o)
 return mix(mix(mix(G(vec3(0,0,0)),G(vec3(1,0,0)),u.x),mix(G(vec3(0,1,0)),G(vec3(1,1,0)),u.x),u.y),
  mix(mix(G(vec3(0,0,1)),G(vec3(1,0,1)),u.x),mix(G(vec3(0,1,1)),G(vec3(1,1,1)),u.x),u.y),u.z);}
float fbm(vec3 p,int n){float a=.5,s=0.;for(int i=0;i<n;i++){s+=a*gnoise(p);p=p.yzx*2.03+17.1;a*=.5;}return s;}
float ridge(vec3 p,int n){float a=.5,s=0.;for(int i=0;i<n;i++){s+=a*(1.-abs(gnoise(p))*2.2);p=p.yzx*2.07+9.7;a*=.5;}return s;}
float ign(vec2 p){return fract(52.9829189*fract(dot(p,vec2(.06711056,.00583715))));}
`;
export const STARS = /* glsl */`
vec3 starLayer(vec3 d,float s,float dens,float gain){
 vec3 p=d*s,id=floor(p);vec3 h=hash33(id+s);vec3 c=id+.5+(h-.5)*.5;float l=length(c);
 if(h.x>dens||abs(l-s)>.45)return vec3(0);
 float r=length(p-c/l*s);float m=fract(h.x*91.7+h.y*13.);float w=.00085*s*(1.+.5*pow(m,10.));
 float b=pow(m,14.)*9.+pow(m,3.)*.5+.04;
 vec3 tint=mix(vec3(1.,.72,.5),vec3(.6,.75,1.),smoothstep(.2,.9,h.z));
 return tint*b*gain*exp(-r*r/(w*w))*smoothstep(.5,.25,r);}
vec3 starField(vec3 d){return starLayer(normalize(d+vec3(.13,-.07,.05)*d.zxy),41.,.16,1.3)+starLayer(d.zxy*mat3(.36,.48,-.8,-.8,.6,0.,.48,.64,.6),97.,.11,.8)+starLayer(d.yzx*mat3(.6,0.,.8,.64,.6,-.48,-.48,.8,.36),190.,.10,.45);}
`;
export const BILLBOARD = /* glsl */`
varying vec2 vUv;uniform float uSize;
void main(){vUv=uv*2.-1.;vec4 m=modelViewMatrix*vec4(0,0,0,1);m.xy+=position.xy*uSize;gl_Position=projectionMatrix*m;}`;
export const add = { transparent: true, depthWrite: false, blending: THREE.AdditiveBlending };
export const premul = { transparent: true, depthWrite: false, blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor };
export const clock = { value: 0 };
export const V = (x, y, z) => new THREE.Vector3(x, y, z);
export const C = h => { const c = new THREE.Color(h); return V(c.r, c.g, c.b); };
export function rng(seed) { let a = seed >>> 0; const f = () => { a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  f.range = (a, b) => a + f() * (b - a); f.pick = a => a[f() * a.length | 0]; f.gauss = () => Math.sqrt(-2 * Math.log(1 - f())) * Math.cos(6.2832 * f());
  f.dir = () => { const z = f() * 2 - 1, t = f() * 6.2832, r = Math.sqrt(1 - z * z); return V(r * Math.cos(t), z, r * Math.sin(t)); }; return f; }

// Tiling 3D noise: r = billows, g = filaments, b = fine grain
let tex3;
export function noiseTexture() {
  if (tex3) return tex3;
  const N = 64, data = new Uint8Array(N ** 3 * 4), r = rng(7);
  const lattice = p => { const g = new Float32Array(p ** 3); for (let i = 0; i < g.length; i++) g[i] = r() * 2 - 1; return g; };
  const sm = t => t * t * (3 - 2 * t);
  const oct = [4, 8, 16, 32].map(p => [p, lattice(p)]), octB = [4, 8, 16, 32].map(p => [p, lattice(p)]);
  const samp = ([p, g], x, y, z) => { const s = p / N; x *= s; y *= s; z *= s; const xi = x | 0, yi = y | 0, zi = z | 0, u = sm(x - xi), v = sm(y - yi), w = sm(z - zi), X = (xi + 1) % p, Y = (yi + 1) % p, Z = (zi + 1) % p;
    const a = (i, j, k) => g[(k * p + j) * p + i], l = (a, b, t) => a + (b - a) * t;
    return l(l(l(a(xi, yi, zi), a(X, yi, zi), u), l(a(xi, Y, zi), a(X, Y, zi), u), v), l(l(a(xi, yi, Z), a(X, yi, Z), u), l(a(xi, Y, Z), a(X, Y, Z), u), v), w); };
  let o = 0;
  for (let z = 0; z < N; z++) for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
    let f = 0, rd = 0, am = .5;
    for (let i = 0; i < 4; i++) { f += am * samp(oct[i], x, y, z); rd += am * (1 - 2.2 * Math.abs(samp(octB[i], x, y, z))); am *= .55; }
    data[o++] = Math.max(0, Math.min(255, (f * .75 + .5) * 255)); data[o++] = Math.max(0, Math.min(255, (rd * .6 + .2) * 255));
    data[o++] = (samp(oct[3], x, y, z) * .5 + .5) * 255; data[o++] = 255;
  }
  tex3 = new THREE.Data3DTexture(data, N, N, N);
  tex3.wrapS = tex3.wrapT = tex3.wrapR = THREE.RepeatWrapping; tex3.minFilter = tex3.magFilter = THREE.LinearFilter; tex3.unpackAlignment = 1; tex3.needsUpdate = true;
  return tex3;
}
