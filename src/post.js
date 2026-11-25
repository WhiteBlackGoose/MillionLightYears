import * as THREE from 'three';
const tri = new THREE.BufferGeometry(); tri.setAttribute('position', new THREE.Float32BufferAttribute([-1, -1, 0, 3, -1, 0, -1, 3, 0], 3));
const VS = 'varying vec2 vUv;void main(){vUv=position.xy*.5+.5;gl_Position=vec4(position.xy,0.,1.);}';
const mk = (u, fs, o = {}) => new THREE.ShaderMaterial({ uniforms: u, vertexShader: VS, fragmentShader: fs, depthTest: false, depthWrite: false, ...o });
export class Post {
  constructor(renderer) {
    this.r = renderer; this.scale = .85; this.cam = new THREE.Camera(); this.mesh = new THREE.Mesh(tri); this.mesh.frustumCulled = false; this.scene = new THREE.Scene(); this.scene.add(this.mesh);
    const opt = { type: THREE.HalfFloatType };
    this.rt = new THREE.WebGLRenderTarget(4, 4, { ...opt, samples: 2 });
    this.mips = Array.from({ length: 6 }, () => new THREE.WebGLRenderTarget(4, 4, { ...opt, depthBuffer: false }));
    this.down = mk({ t: { value: null }, px: { value: new THREE.Vector2() }, first: { value: 0 } }, /* glsl */`
      varying vec2 vUv;uniform sampler2D t;uniform vec2 px;uniform float first;
      vec3 s(float x,float y){vec3 c=texture2D(t,vUv+vec2(x,y)*px).rgb;c=clamp(c,0.,60.);if(first>.5){float l=max(c.r,max(c.g,c.b));c*=smoothstep(.35,1.6,l)/(1.+l*.025);}return c;}
      void main(){vec3 c=s(0.,0.)*.25+(s(-1.,-1.)+s(1.,-1.)+s(-1.,1.)+s(1.,1.))*.125+(s(-2.,0.)+s(2.,0.)+s(0.,2.)+s(0.,-2.))*.0625;gl_FragColor=vec4(c,1.);}`);
    this.up = mk({ t: { value: null }, px: { value: new THREE.Vector2() } }, /* glsl */`
      varying vec2 vUv;uniform sampler2D t;uniform vec2 px;
      vec3 s(float x,float y){return texture2D(t,vUv+vec2(x,y)*px).rgb;}
      void main(){vec3 c=s(0.,0.)*4.+(s(-1.,0.)+s(1.,0.)+s(0.,-1.)+s(0.,1.))*2.+s(-1.,-1.)+s(1.,-1.)+s(-1.,1.)+s(1.,1.);gl_FragColor=vec4(c/16.*.82,1.);}`, { blending: THREE.AdditiveBlending, transparent: true });
    this.u = { t: { value: this.rt.texture }, b: { value: this.mips[0].texture }, uTime: { value: 0 }, uWarp: { value: 0 }, uFlash: { value: new THREE.Vector4(1, 1, 1, 0) }, uHeat: { value: 0 }, uBend: { value: 0 }, uSpeed: { value: 0 }, uAspect: { value: 1 }, uFade: { value: 1 } };
    this.final = mk(this.u, /* glsl */`
      varying vec2 vUv;uniform sampler2D t,b;uniform float uTime,uWarp,uHeat,uBend,uSpeed,uAspect,uFade;uniform vec4 uFlash;
      float h(vec2 p){vec3 q=fract(vec3(p.xyx)*.1031);q+=dot(q,q.yzx+33.33);return fract((q.x+q.y)*q.z);}
      vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
      void main(){vec2 p=vUv-.5;vec2 q=p*vec2(uAspect,1.);float r=length(q);
       vec2 uv=vUv-p*uBend*(.25-r*r)*.35;
       uv+=vec2(sin(uv.y*60.+uTime*9.),cos(uv.x*50.+uTime*8.))*.0016*uHeat;
       float blur=uWarp*.35+uSpeed*.018;vec3 c=vec3(0);
       if(blur>.002){float j=h(gl_FragCoord.xy+uTime);for(int i=0;i<8;i++){float k=(float(i)+j)/8.;c+=texture2D(t,uv-p*blur*k).rgb;}c/=8.;}
       else{float ca=.0012*r+uBend*.006*r;c=vec3(texture2D(t,uv-p*ca).r,texture2D(t,uv).g,texture2D(t,uv+p*ca).b);}
       c=min(c,vec3(60.));
       c+=texture2D(b,uv).rgb*.11;
       if(uWarp>.001){float a=atan(q.y,q.x);vec3 tun=vec3(0);
        for(int i=0;i<3;i++){float fi=float(i),N=90.+fi*70.;float id=floor(a/6.2832*N);float hh=h(vec2(id,fi*7.3));
         float z=fract(.18/(r+.02)*(.4+hh*.5)+uTime*(.7+hh*1.3)+hh*9.);
         float s=smoothstep(0.,.25,z)*smoothstep(1.,.3,z)*pow(hh,4.)*smoothstep(.5,0.,abs(fract(a/6.2832*N)-.5));
         tun+=s*mix(vec3(.4,.65,1.),vec3(1.,.55,.8),h(vec2(id,3.)))*smoothstep(.02,.5,r)*3.;}
        tun+=vec3(.75,.85,1.)*exp(-r*(14.-uWarp*10.))*2.5;
        c=mix(c,tun,smoothstep(.15,.75,uWarp));c+=tun*uWarp*.4;}
       c*=1.-.55*smoothstep(.35,1.15,r);
       c+=vec3(1.,.28,.06)*uHeat*smoothstep(.25,1.,r)*.7;
       c=mix(c,vec3(dot(c,vec3(.3,.5,.2)))*vec3(1.15,.8,.75),uBend*.35);
       c+=uFlash.rgb*uFlash.a;
       c=aces(c*.95*uFade);c=pow(c,vec3(1./2.2));
       c+=(h(gl_FragCoord.xy+fract(uTime)*91.)-.5)*.016;
       gl_FragColor=vec4(c,1.);}`);
  }
  size(w, h) { this.w = w; this.h = h; this.apply(); }
  apply() { let w = Math.max(2, this.w * this.scale | 0), h = Math.max(2, this.h * this.scale | 0); this.rt.setSize(w, h); for (const m of this.mips) { w = Math.max(2, w >> 1); h = Math.max(2, h >> 1); m.setSize(w, h); } this.u.uAspect.value = this.w / this.h; }
  pass(mat, target, clear = true) { this.mesh.material = mat; this.r.setRenderTarget(target); this.r.autoClear = clear; this.r.render(this.scene, this.cam); }
  render(scene, cam) {
    const r = this.r; r.autoClear = true; r.setRenderTarget(this.rt); r.render(scene, cam);
    let src = this.rt;
    this.mips.forEach((m, i) => { this.down.uniforms.t.value = src.texture; this.down.uniforms.px.value.set(1 / src.width, 1 / src.height); this.down.uniforms.first.value = i === 0 ? 1 : 0; this.pass(this.down, m); src = m; });
    for (let i = 5; i > 0; i--) { const s = this.mips[i]; this.up.uniforms.t.value = s.texture; this.up.uniforms.px.value.set(1 / s.width, 1 / s.height); this.pass(this.up, this.mips[i - 1], false); }
    this.pass(this.final, null); r.autoClear = true;
  }
}
