// Three sun shadow cascades in camera-relative space; far ones refresh less often.
import * as THREE from 'three';
import { V } from './glsl.js';
const DEF = [[85, 1536, 2], [420, 1280, 9], [5200, 1280, 24]]; // radius m, size, every n frames
export const shU = { uSh0: { value: null }, uSh1: { value: null }, uSh2: { value: null }, uShM: { value: [0, 1, 2].map(() => new THREE.Matrix4()) }, uShOn: { value: 0 } };
export const SHGLSL = /* glsl */`
uniform sampler2D uSh0,uSh1,uSh2;uniform mat4 uShM[3];uniform float uShOn;
float shUn(vec4 c){return dot(c,vec4(1.,1./255.,1./65025.,1./16581375.));}
float shTap(sampler2D m,vec3 c,float b,float px){vec2 q=c.xy/px-.5,f=fract(q),o=(floor(q)+.5)*px;vec4 t=vec4(shUn(texture2D(m,o)),shUn(texture2D(m,o+vec2(px,0.))),shUn(texture2D(m,o+vec2(0.,px))),shUn(texture2D(m,o+px)));t=step(c.z-b,t);return mix(mix(t.x,t.y,f.x),mix(t.z,t.w,f.x),f.y);}
float sunShadow(vec3 p,vec3 n){if(uShOn<.5)return 1.;float s=1.;vec3 c=(uShM[0]*vec4(p+n*.07,1.)).xyz;vec3 e=abs(c-.5);
 if(max(e.x,e.y)<.48&&e.z<.5)s=min(s,shTap(uSh0,c,.0012,${(1 / DEF[0][1]).toFixed(7)}));
 else{c=(uShM[1]*vec4(p+n*.9,1.)).xyz;e=abs(c-.5);if(max(e.x,e.y)<.49&&e.z<.5)s=min(s,shTap(uSh1,c,.0022,${(1 / DEF[1][1]).toFixed(7)}));}
 c=(uShM[2]*vec4(p+n*13.,1.)).xyz;e=abs(c-.5);float k=max(e.x,e.y);if(k<.49&&e.z<.5)s=min(s,mix(1.,shTap(uSh2,c,.0035,${(1 / DEF[2][1]).toFixed(7)}),smoothstep(.49,.42,k)));
 return s;}
`;
export class Shadows {
  constructor() {
    this.mat = new THREE.ShaderMaterial({ side: THREE.DoubleSide, vertexShader: 'void main(){vec4 p=vec4(position,1.);\n#ifdef USE_INSTANCING\np=instanceMatrix*p;\n#endif\ngl_Position=projectionMatrix*modelViewMatrix*p;}', fragmentShader: 'void main(){vec4 e=vec4(1.,255.,65025.,16581375.)*gl_FragCoord.z;e=fract(e);e-=e.yzww*vec4(1./255.,1./255.,1./255.,0.);gl_FragColor=e;}' });
    this.c = DEF.map(([r, n, every], i) => { const rt = new THREE.WebGLRenderTarget(n, n, { minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter, generateMipmaps: false }); shU['uSh' + i].value = rt.texture; const cam = new THREE.OrthographicCamera(-r, r, r, -r, 0, r * 4); cam.layers.set(i === 2 ? 2 : 1); if (i === 1) cam.layers.enable(3); return { rt, cam, r, every, org: V(), m: new THREE.Matrix4() }; }); this.f = 0; this.off = V();
  }
  // camP: camera position relative to the body (metres), dir: to the sun
  update(renderer, scene, dir, camP, on) {
    shU.uShOn.value = on ? 1 : 0; if (!on) { this.f = 0; return; } const ov = scene.overrideMaterial, ac = renderer.autoClear, cc = new THREE.Color(); renderer.getClearColor(cc); const ca = renderer.getClearAlpha();
    const upv = Math.abs(dir.y) < .95 ? V(0, 1, 0) : V(1, 0, 0);
    this.c.forEach((c, i) => { if (this.f === 0 || (this.f + i * 2) % c.every === 0) { c.org.copy(camP); const tx = c.r * 2 / c.rt.width; c.cam.position.copy(dir).multiplyScalar(c.r * 2); c.cam.up.copy(upv); c.cam.lookAt(0, 0, 0); c.cam.updateMatrixWorld(); // snap to texels so edges stay still
          const o = camP.clone().applyQuaternion(c.cam.quaternion.clone().invert()), sx = ((o.x % tx) + tx) % tx, sy = ((o.y % tx) + tx) % tx; const s = V(-sx, -sy, 0).applyQuaternion(c.cam.quaternion); c.cam.position.add(s); c.cam.updateMatrixWorld(); c.cam.matrixWorldInverse.copy(c.cam.matrixWorld).invert();
          c.m.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1).multiply(c.cam.projectionMatrix).multiply(c.cam.matrixWorldInverse);
          scene.overrideMaterial = this.mat; renderer.setClearColor('#fff', 1); renderer.autoClear = true; renderer.setRenderTarget(c.rt); renderer.render(scene, c.cam); }
      this.off.copy(camP).sub(c.org); shU.uShM.value[i].copy(c.m).multiply(new THREE.Matrix4().makeTranslation(this.off.x, this.off.y, this.off.z)); });
    this.f++; scene.overrideMaterial = ov; renderer.setClearColor(cc, ca); renderer.autoClear = ac; renderer.setRenderTarget(null);
  }
}
