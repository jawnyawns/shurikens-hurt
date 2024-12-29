!function(){"use strict";const n="9px sans-serif",t="#0f0",e=1e3/29,o=360;function i(n){return n.height/2+69}const u=Object.freeze({t:"NOT_STARTED",o:"IN_PROGRESS",i:"GAME_OVER",u:"READY_FOR_RESET"});function c(n,t=1/0){const e=[];let o=!1;function i(){if(o||0===e.length)return;o=!0;const{m:t,resolve:u,reject:c}=e.shift();Promise.resolve().then((()=>t())).then(u).catch(c).finally((()=>{setTimeout((()=>{o=!1,i()}),n)}))}return function(n){return e.length>=t?Promise.reject(Error("Queue size limit reached")):new Promise(((t,o)=>{e.push({m:n,resolve:t,reject:o}),i()}))}}function r(n,t=n=>{}){return Array.from({length:n},((n,e)=>t(e)))}function a(n){return Math.random()<n}function f(n,t){return Math.random()*(t-n)+n}function s(n,t,e,o,i=1/0){return function(n,t,e=1/0,o=()=>{}){for(let o=0;o<e;o++){const e=n();if(t(e))return e}return o()}((()=>function(n,t,e){return r(e,(()=>f(n,t)))}(n,t,e)),(n=>n.sort().every(((t,e)=>0===e||t-n[e-1]>=o))),i,(()=>null))}function m(){return a(.5)}function l(n){return n[(t=0,e=n.length,Math.floor(Math.random()*(e-t))+t)];var t,e}function g(n){const t=f(0,n.reduce(((n,t)=>n+t),0));let e=0;for(let o=0;o<n.length;o++)if(e+=n[o],t<e)return o}function p(n,t){return n[g(t)]}function d(n,t){return n.x<t.x+t.width&&n.y<t.y+t.height&&t.x<n.x+n.width&&t.y<n.y+n.height}function h(n){return-n.width<n.x&&n.x<o}function w(n,t){return t/n}function y(n,t,e,o){return n+t*o+.5*e*o*o}function x(n,t,e){return n+t*e}function v(n){return new Promise(((t,e)=>{const o=new Image;o.onload=()=>t(o),o.onerror=n=>e(n),o.src=n}))}async function M(n,t){const e=await fetch(t),o=await e.arrayBuffer();return await n.decodeAudioData(o)}function T(n,t,e=1,o=1){if("running"===n.state){const i=n.createBufferSource();i.buffer=t,i.playbackRate.value=e;const u=n.createGain();u.gain.value=o,i.connect(u),u.connect(n.destination),i.start()}}function _(n,t,e,o,i,u,c=1,r=1,a=0){n.save(),n.translate(e+.5*i,o+.5*u),n.scale(c,r),n.rotate(a),n.drawImage(t,.5*-i,.5*-u,i,u),n.restore()}const S="high-score";function R(){const n=window.matchMedia("(min-aspect-ratio: 1/1) and (min-width: 900px)").matches?64:0;return[Math.min(window.innerWidth,window.innerHeight)-2*n,window.innerHeight-2*n]}function k(n){j().forEach(b),P().forEach(A),O().forEach(b),F().textContent=n}function E(n,t){j().forEach(b),P().forEach(b),O().forEach(A),b(Y()),document.querySelector(".game__result-score").textContent=n,document.querySelector(".game__result-best").textContent=t}function b(n){n.style.visibility="hidden"}function A(n){n.style.visibility="visible"}function j(){return[document.querySelector(".game__title"),document.querySelector(".info-button"),X()]}function P(){return[F()]}function O(){return[document.querySelector(".game__result"),Y()]}function I(){return document.querySelector(".game__canvas")}function F(){return document.querySelector(".game__score")}function X(){return document.querySelector(".game__start-hint")}function Y(){return document.querySelector(".game__reset-hint")}const D=20,N=20,C=Math.floor(o/2)-D/2,G=-.75,V=G*G/224,z=2*Math.abs(G)/V,L=2.5,q=2.5,B=.7,H=G,J=.35,U=250,$=3e3,Q=180;function K(){return{l:0,p:L,h:q,v:0,width:D,height:N,x:C,y:3.5*-N,velocityY:0,M:!0,T:0,isFrozen:!0}}function W(n){return i(n)-N}function Z(n){return n._.y===W(n)}function nn(n){n.status!==u.o||n._.M||(n._.velocityY=G,n._.l=1,n._.M=!0,n._.T=n.S,T(n.R,l(n.A.k)))}function tn(n){n._.isFrozen||(n.status===u.t||n.status===u.o?(n._.M&&(en(n),on(n),function(n){n._.j&&!n._.M&&(nn(n),n._.j=!1)}(n)),function(n){if(!n._.M){const o=n.P.filter((n=>!n.O));if(o.length>0){const i=(t=o,e=n._.x,function(n,t=n=>n){return n.reduce(((n,e)=>t(e)<t(n)?e:n))}(t,(n=>Math.abs(n.x-e)))),u=n._.p<0!==i.I;n._.p*=u?-1:1}}var t,e}(n)):n.status===u.i&&(en(n),on(n)))}function en(n){var t,e,o;n._.velocityY=(t=n._.velocityY,e=V,o=n.F,t+e*o),n._.y=y(n._.y,n._.velocityY,V,n.F);n._.velocityY/G<J&&(n.status===u.i?n._.l=6:n._.l=2)}function on(n){(function(n){return n._.y>W(n)})(n)&&(n._.y=W(n),n._.velocityY=0,n._.M=!1,n._.l=0,n._.v=0,n.status===u.i&&(n._.l=4))}function un(n){const t=f(U,$);n.X=setTimeout((()=>{n._.M||(n._.l=3),n.X=setTimeout((()=>{n._.M||(n._.l=0),un(n)}),Q)}),t)}function cn(n){n._.velocityY=H,n._.l=5,function(n){clearTimeout(n.X)}(n)}const rn=10,an=10,fn=2,sn=2,mn=.4,ln=rn*fn*.5,gn=[{l:0,velocityX:.13,Y:.85},{l:1,velocityX:.17,Y:.95},{l:2,velocityX:.22,Y:1.1}],pn=[.4,.4,.2],dn=C/.13,hn=50,wn=.8,yn=.25,xn=.5;function vn(n){return i(n)-N/2-an/2}function Mn(n){return Math.min(...function(n,t,e){const o=.5*e,i=t,u=i*i-4*o*-n;if(u<0)return null;{const n=Math.sqrt(u);return[(-i+n)/(2*o),(-i-n)/(2*o)]}}(vn(n)-(W(n)+N),G,V))}function Tn(n){const t=n.D.filter((t=>t.N<=n.S));n.D=n.D.filter((t=>t.N>n.S)),n.P.push(...t),t.length>0&&function(n,t){const e=l(n.A.C),o=Math.max(...t.map((n=>n.Y))),i=f(-.05,.05),u=o+i;n.G((()=>{T(n.R,e,u,xn)}))}(n,t)}function _n(n){const t=function(n){function t(n){return n<5?[.1,.3,.6]:n<24?[.45,.4,.15]:n<46?[.65,.3,.05]:[.9,.1,0]}const e=[1*z,2.5*z,3.5*z],o=[2.5*z,3.5*z,7*z],i=g(t(n));return f(e[i],o[i])}(n.V);n.L=setTimeout((()=>{if(n.status!==u.o)return;const t=n.S+dn;var e;const i=function(n){const t=m(),e=p(gn,pn).velocityX;return r(n,(()=>{const o=a(Math.pow(wn,1/n))?t:!t,i=a(Math.pow(yn,1/n))?e:p(gn,pn).velocityX;return o?i:-i}))}((e=n.V)<5?1+g([.9,.1]):e<11?1+g([.7,.2,.05,.05]):e<29?1+g([.5,.2,.1,.1]):1+g([.4,.2,.15,.15,.05,.05])),c=i.reduce(((n,t)=>{const e=n.get(t)??0;return n.set(t,e+1),n}),new Map);const f=function(n,t=(n,t)=>[n,t]){return new Map(Array.from(n,(([n,e])=>t(n,e))))}(new Map(i.map((e=>[e,Sn(n,t,e)]))),((n,[t,e])=>[n,function(n,t,e,o){const i=20;for(let u=e;u>0;u--){const e=s(n,t,u,o,i);if(e)return e}return[]}(t,e,c.get(n),rn*fn/Math.abs(n))])),l=Array.from(f,(([t,e])=>e.map((e=>function(n,t,e){const i=gn.find((n=>Math.abs(e)===n.velocityX)),u=e>=0,c=w(ln,e)*mn;return{N:t,l:i.l,p:fn,h:sn,v:0,q:c,width:rn,height:an,x:u?-rn:o,y:vn(n),velocityX:e,I:u,O:!1,Y:i.Y}}(n,e,t))))).flat();n.B.push(t),n.D.push(...l),_n(n)}),t)}function Sn(n,t,o){const i=hn+e,u=Mn(n),c=t+z-u-i,r=C+D+rn;return[t+u+i-C/Math.abs(o),c-r/Math.abs(o)]}const Rn=10,kn=10,En=.095,bn=2.67,An=2.67,jn=.4*w(Rn*bn*.5,En),Pn=2e3,On=25e3;function In(n){return function(n,t){return{p:bn,h:An,v:0,q:t?jn:-jn,width:Rn,height:kn,x:t?-Rn:o,y:n,velocityX:t?En:-En,I:t,O:!1}}(n,m())}function Fn(n){const t=f(Pn,On);n.H=setTimeout((()=>{if(n.status!==u.o)return;const t=In(i(n)-N/2-kn/2);n.J.push(t),Fn(n)}),t)}const Xn=4,Yn=60,Dn=6,Nn=400,Cn=800;function Gn(n){var t;j().forEach(A),P().forEach(b),O().forEach(b),b(X()),t=n.U,I().style.backgroundImage=`url('../img/background-${t}.png')`,un(n),setTimeout((()=>{n._.isFrozen=!1}),600)}function Vn(i){for(let n=i.$;n>0;n-=e)i.F=Math.min(n,e),i.S+=i.F,zn(i),i.K+=1;i.W+=1,i.Z-i.nn>=1e3&&(i.tn=i.W,i.en=i.K,i.W=0,i.K=0,i.nn=i.Z),function(e){(function(n){n.un.clearRect(0,0,o,n.height)})(e),function(n){_(n.un,n.images._[n._.l],n._.x,n._.y,n._.width,n._.height,n._.p,n._.h,n._.v),n.cn&&(n.un.strokeStyle=t,n.un.strokeRect(n._.x,n._.y,D,N))}(e),function(n){for(const e of n.J)_(n.un,n.images.rn,e.x,e.y,e.width,e.height,e.p,e.h,e.v),n.cn&&(n.un.strokeStyle=t,n.un.strokeRect(e.x,e.y,e.width,e.height))}(e),function(n){for(const e of n.P)_(n.un,n.images.an[e.l],e.x,e.y,e.width,e.height,e.p,e.h,e.v),n.cn&&(n.un.strokeStyle=t,n.un.strokeRect(e.x,e.y,rn,an))}(e),function(n){n.fn>0&&(n.un.fillStyle=`rgba(255, 255, 255, ${n.fn})`,n.un.fillRect(0,0,o,n.height))}(e),function(e){if(e.cn){const i=[performance.memory&&(performance.memory.usedJSHeapSize/1024/1024).toFixed(1)+" MB",Math.round(e.tn)+" F/S",Math.round(e.en)+" U/S"].filter(Boolean).join("   ");e.un.font=n,e.un.fillStyle=t,e.un.fillText(i,8,e.height-8),e.un.strokeStyle=t,e.un.strokeRect(0,0,o,e.height)}}(e)}(i),requestAnimationFrame((n=>{i.$=n-i.Z,i.Z=n,Vn(i)}))}function zn(n){!function(n){const t=n.B.length>0&&n.B[0]<=n.S;n.sn&&t&&(nn(n),n.B.shift())}(n),tn(n),Tn(n),function(n){for(const t of n.P)t.x=y(t.x,t.velocityX,0,n.F),t.v=x(t.v,t.q,n.F)}(n),function(n){for(const t of n.J)t.x=y(t.x,t.velocityX,0,n.F),t.v=x(t.v,t.q,n.F)}(n),function(n){if(n.status!==u.o)return;const t=n.P.filter((n=>{const t=!n.O,e=n.I&&n.x>C+D,o=!n.I&&n.x+rn<C;return t&&(e||o)}));t.forEach((n=>n.O=!0)),n.V+=t.length,t.length>0&&(n.G((()=>T(n.R,l(n.A.V)))),k(n.V))}(n),function(n){if(n.status!==u.o)return;const t=n.J.filter((t=>{const e=!t.O,o=d(n._,t);return e&&o}));t.forEach((n=>n.O=!0)),n.V+=t.length,n.J=n.J.filter((n=>!t.includes(n))),t.length>0&&(T(n.R,n.A.mn),k(n.V))}(n),function(n){n.status===u.o?function(n){for(const t of n.P)if(d(n._,t))return!0;return!1}(n)&&(!function(n){n.V>n.ln&&(n.ln=n.V,t=n.V,localStorage.setItem(S,t));var t}(n),function(n){clearTimeout(n.H)}(n),function(n){clearTimeout(n.L)}(n),function(n){n.fn=1}(n),cn(n),n.status=u.i,T(n.R,n.A.gn)):n.status===u.i&&function(n){return 0===n.P.length&&0===n.J.length}(n)&&(n.status=u.u,E(n.V,n.ln))}(n),function(n){n.P=n.P.filter(h)}(n),function(n){n.J=n.J.filter(h)}(n),function(n){n.status===u.t&&Z(n)&&!n.pn?n.pn=setTimeout((()=>{n.status===u.t&&(A(X()),n.G((()=>T(n.R,l(n.A.V)))))}),Cn):n.status!==u.u||n.dn||(n.dn=setTimeout((()=>{n.status===u.u&&(A(Y()),n.G((()=>T(n.R,l(n.A.V)))))}),Cn))}(n),function(n){n.fn>0&&(n.fn-=n.F/Nn,n.fn<0&&(n.fn=0))}(n)}async function Ln(n){await async function(n){"suspended"===n.R.state&&await n.R.resume()}(n),function(n){n.status===u.t&&Z(n)?(n.status=u.o,Fn(n),_n(n),k(n.V)):n.status===u.u&&(n.status=u.t,n._=K(),n.V=0,n.U=(n.U+1)%Xn,n.pn=null,n.dn=null,Gn(n))}(n),nn(n),function(n){const t=n.S-n._.T;n.status===u.o&&t>z*B&&(n._.j=!0)}(n)}function qn(n,t,e){const o=n.height,[u,c]=Bn(t,e);n.width=u,n.height=c,function(n){n.J.map((t=>{t.y=i(n)-N/2-kn/2}))}(n),function(n){n.P.map((t=>{t.y=vn(n)}))}(n),function(n,t){const e=i({height:t}),o=n._.y,u=i(n);n._.y=u-(e-o)}(n,o)}function Bn(n,t){return[o,o*t/n]}function Hn(n){n.stopPropagation()}function Jn(n,t){const[e,i]=R(),u=Math.floor(e*window.devicePixelRatio),c=Math.floor(i*window.devicePixelRatio),r=u/o;n.style.width=e+"px",n.style.height=i+"px",n.width=Math.floor(u),n.height=Math.floor(c),n.getContext("2d").scale(r,r),t&&qn(t,n.width,n.height)}window.addEventListener("load",(async function(){const n=I(),t=document.querySelector(".info-button"),e=document.querySelector(".info-modal"),o=document.querySelector(".info-modal__card"),i=n.getContext("2d"),r=new AudioContext,a={k:[],V:[],C:[]},f=[M(r,"./sfx/die.mp3").then((n=>a.gn=n)),M(r,"./sfx/eat.wav").then((n=>a.mn=n)),M(r,"./sfx/jump-0.mp3").then((n=>a.k[0]=n)),M(r,"./sfx/jump-1.mp3").then((n=>a.k[1]=n)),M(r,"./sfx/jump-2.mp3").then((n=>a.k[2]=n)),M(r,"./sfx/jump-3.mp3").then((n=>a.k[3]=n)),M(r,"./sfx/jump-4.mp3").then((n=>a.k[4]=n)),M(r,"./sfx/jump-5.mp3").then((n=>a.k[5]=n)),M(r,"./sfx/score-0.wav").then((n=>a.V[0]=n)),M(r,"./sfx/score-1.wav").then((n=>a.V[1]=n)),M(r,"./sfx/score-2.wav").then((n=>a.V[2]=n)),M(r,"./sfx/score-3.wav").then((n=>a.V[3]=n)),M(r,"./sfx/shoot-0.wav").then((n=>a.C[0]=n)),M(r,"./sfx/shoot-1.wav").then((n=>a.C[1]=n))],s={_:[],an:[],background:[]},m=[v("./img/player-0.png").then((n=>s._[0]=n)),v("./img/player-1.png").then((n=>s._[1]=n)),v("./img/player-2.png").then((n=>s._[2]=n)),v("./img/player-3.png").then((n=>s._[3]=n)),v("./img/player-4.png").then((n=>s._[4]=n)),v("./img/player-5.png").then((n=>s._[5]=n)),v("./img/player-6.png").then((n=>s._[6]=n)),v("./img/enemy-0.png").then((n=>s.an[0]=n)),v("./img/enemy-1.png").then((n=>s.an[1]=n)),v("./img/enemy-2.png").then((n=>s.an[2]=n)),v("./img/snack.png").then((n=>s.rn=n))];await Promise.all([...f,...m]);const l=new URL(location),g="true"===l.searchParams.get("auto"),p="true"===l.searchParams.get("debug"),d=Number.parseInt(l.searchParams.get("score"))||0,h=localStorage.getItem(S)??0,[w,y]=R(),x=function(n,t,e,o,i,r,a,f,s,m){const[l,g]=Bn(i,r);return{un:n,R:t,A:e,images:o,width:l,height:g,Z:0,$:0,S:0,F:0,status:u.t,V:m,ln:a,_:K(),P:[],D:[],J:[],B:[],sn:f,cn:s,tn:0,W:0,en:0,K:0,nn:0,H:null,L:null,X:null,pn:null,dn:null,fn:0,U:1,G:c(Yn,Dn)}}(i,r,a,s,w,y,h,g,p,d);Jn(n),A(n),Gn(x),requestAnimationFrame((n=>{x.$=0,x.Z=n,Vn(x)})),window.addEventListener("resize",(()=>Jn(n,x)),{passive:!0}),document.addEventListener("keydown",function(n){async function t(o){" "===o.key&&(await Ln(n),document.removeEventListener("keydown",t),document.addEventListener("keyup",e))}async function e(n){" "===n.key&&(document.removeEventListener("keyup",e),document.addEventListener("keydown",t))}return t}(x)),document.addEventListener("visibilitychange",function(n){return()=>{!function(n){document.hidden?n.suspend():n.resume()}(n)}}(r)),n.addEventListener("pointerup",function(n,t){async function e(){await Ln(t),n.addEventListener("pointerdown",o,{passive:!0})}async function o(){await Ln(t)}return e}(n,x),{once:!0,passive:!0}),t.addEventListener("click",function(n){function t(){A(n)}return t}(e),{passive:!0}),e.addEventListener("click",function(n){function t(){b(n)}return t}(e),{passive:!0}),o.addEventListener("click",Hn,{passive:!0})}))}();
