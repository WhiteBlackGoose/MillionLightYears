// High resolution tiling 3D detail, baked once on the GPU.
// A: fbm, ridges, cell cracks (F2-F1), fine grain.  B: surface gradient (rgb) and height (a).
import * as THREE from 'three';
export const detailU = { uDA: { value: null }, uDB: { value: null } };
const N = 128;
export function bakeDetail(renderer) {
  const mk = () => { const rt = new THREE.WebGL3DRenderTarget(N, N, N, { depthBuffer: false }); const t = rt.texture; t.wrapS = t.wrapT = t.wrapR = THREE.RepeatWrapping; t.magFilter = THREE.LinearFilter; t.minFilter = THREE.LinearMipmapLinearFilter; t.generateMipmaps = false; t.colorSpace = THREE.NoColorSpace; return rt; };
  const tri = new THREE.BufferGeometry(); tri.setAttribute('position', new THREE.Float32BufferAttribute([-1, -1, 0, 3, -1, 0, -1, 3, 0], 3));
  const mat = new THREE.ShaderMaterial({ depthTest: false, depthWrite: false, uniforms: { uZ: { value: 0 }, uMode: { value: 0 } }, vertexShader: 'varying vec2 v;void main(){v=position.xy*.5+.5;gl_Position=vec4(position.xy,0.,1.);}', fragmentShader: /* glsl */`
   varying vec2 v;uniform float uZ,uMode;
   vec3 h3(vec3 p){p=fract(p*vec3(.1031,.1030,.0973));p+=dot(p,p.yxz+33.33);return fract((p.xxy+p.yxx)*p.zyx);}
   float gn(vec3 x,float P){vec3 i=floor(x),f=x-i,u=f*f*f*(f*(f*6.-15.)+10.);
    #define G(o) dot(h3(mod(i+o,P)+P*1.7)*2.-1.,f-o)
    return mix(mix(mix(G(vec3(0)),G(vec3(1,0,0)),u.x),mix(G(vec3(0,1,0)),G(vec3(1,1,0)),u.x),u.y),mix(mix(G(vec3(0,0,1)),G(vec3(1,0,1)),u.x),mix(G(vec3(0,1,1)),G(vec3(1,1,1)),u.x),u.y),u.z);}
   float fb(vec3 p,float P,int n){float a=.55,s=0.;for(int i=0;i<n;i++){s+=a*gn(p*P,P);P*=2.;a*=.52;}return s;}
   float rg(vec3 p,float P,int n){float a=.55,s=0.,w=1.;for(int i=0;i<n;i++){float r=1.-abs(gn(p*P,P))*2.1;r=max(r,0.);r*=r*w;w=min(1.,r*1.5);s+=r*a;P*=2.;a*=.52;}return s;}
   vec2 cell(vec3 p,float P){vec3 x=p*P,i=floor(x),f=x-i;float a=9.,b=9.;for(int z=-1;z<=1;z++)for(int y=-1;y<=1;y++)for(int k=-1;k<=1;k++){vec3 o=vec3(k,y,z);vec3 q=o+h3(mod(i+o,P)+5.)-f;float d=dot(q,q);if(d<a){b=a;a=d;}else if(d<b)b=d;}return sqrt(vec2(a,b));}
   float H(vec3 p){vec2 c=cell(p,8.);return fb(p,4.,5)*.55+rg(p,5.,4)*.32+smoothstep(0.,.35,c.y-c.x)*.16-c.x*.12;}
   void main(){vec3 p=vec3(v,uZ);
    if(uMode<.5){vec2 c=cell(p,9.);gl_FragColor=vec4(fb(p,4.,5)*.85+.5,rg(p,4.,5)*.9,clamp(c.y-c.x,0.,1.),fb(p,24.,3)*.9+.5);}
    else{float e=1./${N}.,h=H(p);vec3 g=vec3(H(p+vec3(e,0,0))-h,H(p+vec3(0,e,0))-h,H(p+vec3(0,0,e))-h)/e*.06;gl_FragColor=vec4(clamp(g*.5+.5,0.,1.),clamp(h+.45,0.,1.));}}` });
  const m = new THREE.Mesh(tri, mat), sc = new THREE.Scene(), cam = new THREE.Camera(); m.frustumCulled = false; sc.add(m); const ac = renderer.autoClear; renderer.autoClear = false;
  for (const [k, mode] of [['uDA', 0], ['uDB', 1]]) { const rt = mk(); mat.uniforms.uMode.value = mode; for (let z = 0; z < N; z++) { mat.uniforms.uZ.value = (z + .5) / N; rt.texture.generateMipmaps = z === N - 1; renderer.setRenderTarget(rt, z); renderer.render(sc, cam); } detailU[k].value = rt.texture; }
  renderer.setRenderTarget(null); renderer.autoClear = ac; mat.dispose(); tri.dispose();
}
