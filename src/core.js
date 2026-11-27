import * as THREE from 'three';
export const C0 = 299792458, LY = 9.4607304725808e15, AU = 1.495978707e11, FAR = 1e15;
export const shared = { uBDir: { value: new THREE.Vector3(0, 0, -1) }, uBeta: { value: 0 }, uMeas: { value: 0 }, uFwd: { value: new THREE.Vector3(0, 0, -1) }, uTime: { value: 0 }, uLogG: { value: 0 } };
// Special relativity on directions. "Seen" = aberration of light; "measured" = pure Lorentz contraction along the motion.
export const REL = /* glsl */`
uniform vec3 uBDir,uFwd;uniform float uBeta,uMeas;
#define LDK ${(1 / Math.log2(FAR + 1)).toPrecision(9)}
vec3 aberr(vec3 p){if(uBeta<1e-4)return p;float l=length(p);vec3 n=p/l;float c=dot(n,uBDir),g=1./sqrt(1.-uBeta*uBeta);vec3 q=n-c*uBDir;
 if(uMeas>.5)return l*normalize(uBDir*c/g+q);
 float k=1.+uBeta*c;return l*normalize(uBDir*(c+uBeta)/k+q/(g*k));}
vec3 unab(vec3 n){if(uBeta<1e-4)return n;float c=dot(n,uBDir),g=1./sqrt(1.-uBeta*uBeta);vec3 q=n-c*uBDir;
 if(uMeas>.5)return normalize(uBDir*c*g+q);
 float k=1.-uBeta*c;return normalize(uBDir*(c-uBeta)/k+q/(g*k));}
// A black body of temperature T seen at frequency factor D is exactly a black body of temperature T*D.
vec3 planck(float T){return 1./(exp(min(vec3(23587.,26160.,30942.)/max(T,1.),60.))-1.);} // relative radiance at 610, 550, 465 nm
vec3 bbShift(float T,float D){vec3 x=vec3(23587.,26160.,30942.)/T;return (exp(min(x,60.))-1.)/(exp(min(x/max(D,.02),60.))-1.);}
// Doppler shift of colour. Starlight, glowing gas and dust have broad smooth spectra, and a black body of temperature T seen at
// frequency factor D is exactly a black body at T*D. So each pixel is read as a smooth spectrum: the temperature whose red/blue ratio
// matches it, and every channel is scaled by how that spectrum's radiance changes there. Ahead: bluer and brighter; behind: redder
// and dimmer, sliding smoothly with angle (no rainbow rings: those need pure spectral lines).
vec3 shiftCol(vec3 col,float D){if(abs(D-1.)<1e-3)return col;col=max(col,0.);float rb=(col.r+1e-5)/(col.b+1e-5),lo=log(1200.),hi=log(6e4);
 for(int i=0;i<14;i++){float mm=.5*(lo+hi),T=exp(mm),f=.2567*(exp(min(30942./T,60.))-1.)/(exp(min(23587./T,60.))-1.);if(f>rb)lo=mm;else hi=mm;}
 vec3 k=pow(max(bbShift(exp(.5*(lo+hi)),D),1e-12),vec3(.6));return col*min(k,vec3(40.));}
float dopF(vec3 n){return uBeta<1e-4?1.:(1.+uBeta*dot(n,uBDir))/sqrt(1.-uBeta*uBeta);}
vec3 doppler(vec3 col,vec3 n){return uBeta<1e-4?col:shiftCol(col,dopF(n));}
float logd(float w){return log2(max(1.+w,1e-6))*LDK;}
`;
export const PROXY = REL + /* glsl */`uniform vec3 uOff;uniform float uScale;varying vec3 vP;
void main(){vec3 p=aberr(position*uScale+uOff);vP=p;gl_Position=projectionMatrix*vec4(mat3(viewMatrix)*p,1.);}`;
export function mat(o) {
  return new THREE.ShaderMaterial({ ...o, uniforms: { ...shared, ...o.uniforms } });
}
// Camera-facing sprite with an exact camera-relative centre
export const SPRITE = REL + /* glsl */`uniform vec3 uOff;uniform float uScale;varying vec2 vUv;varying float vLW;
void main(){vUv=uv*2.-1.;vec4 m=vec4(mat3(viewMatrix)*aberr(uOff),1.);m.xy+=position.xy*uScale;gl_Position=projectionMatrix*m;vLW=gl_Position.w;}`;
const sup10 = x => { const e = Math.floor(Math.log10(x)); return (x / 10 ** e).toFixed(1) + ' × 10' + [...String(e)].map(c => '⁰¹²³⁴⁵⁶⁷⁸⁹'[c]).join(''); };
export function dist(m) {
  const s = Math.abs(m) / C0;
  if (m < 1000) return m.toFixed(m < 100 ? 1 : 0) + ' m';
  if (m < 1e6) return (m / 1e3).toFixed(m < 1e5 ? 1 : 0) + ' km';
  if (s < .1) return Math.round(m / 1e3).toLocaleString('en') + ' km';
  if (s < 60) return s.toFixed(2) + ' ls';
  if (s < 3600) return (s / 60).toFixed(2) + ' lm';
  if (s < 86400) return (s / 3600).toFixed(2) + ' lh';
  if (s < 86400 * 30) return (s / 86400).toFixed(2) + ' ld';
  const ly = m / LY; return ly < 1000 ? ly.toFixed(2) + ' ly' : ly < 1e6 ? (ly / 1e3).toFixed(2) + ' kly' : ly < 1e9 ? (ly / 1e6).toFixed(2) + ' Mly' : ly < 1e13 ? (ly / 1e9).toFixed(2) + ' Gly' : sup10(ly) + ' ly';
}
export function span(s) {
  if (s < 10) return s.toFixed(s < .095 ? 3 : 1) + ' s'; if (s < 60) return s.toFixed(0) + ' s'; if (s < 3600) return (s / 60).toFixed(1) + ' min'; if (s < 86400) return (s / 3600).toFixed(1) + ' h';
  if (s < 3.156e7) return (s / 86400).toFixed(1) + ' days'; return s < 3.156e10 ? (s / 3.156e7).toFixed(1) + ' years' : s < 3.156e13 ? (s / 3.156e10).toFixed(1) + ' thousand years' : s < 3.156e16 ? (s / 3.156e13).toFixed(2) + ' million years' : s < 3.156e19 ? (s / 3.156e16).toFixed(2) + ' billion years' : sup10(s / 3.156e7) + ' years';
}
