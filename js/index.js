!function(){"use strict";const n="9px sans-serif",t="#0f0",e=1e3/29,o=360;function i(n){return n.height/2+69}const u=Object.freeze({t:"NOT_STARTED",o:"IN_PROGRESS",i:"GAME_OVER",u:"READY_FOR_RESET"});function c(n,t=1/0){const e=[];let o=!1;function i(){if(o||0===e.length)return;o=!0;const{m:t,resolve:u,reject:c}=e.shift();Promise.resolve().then((()=>t())).then(u).catch(c).finally((()=>{setTimeout((()=>{o=!1,i()}),n)}))}return function(n){return e.length>=t?Promise.reject(Error("Queue size limit reached")):new Promise(((t,o)=>{e.push({m:n,resolve:t,reject:o}),i()}))}}function r(n,t=n=>{}){return Array.from({length:n},((n,e)=>t(e)))}function a(n){return Math.random()<n}function f(n,t){return Math.random()*(t-n)+n}function s(n,t,e,o,i=1/0){return function(n,t,e=1/0,o=()=>{}){for(let o=0;o<e;o++){const e=n();if(t(e))return e}return o()}((()=>function(n,t,e){return r(e,(()=>f(n,t)))}(n,t,e)),(n=>n.sort().every(((t,e)=>0===e||t-n[e-1]>=o))),i,(()=>null))}function m(){return a(.5)}function l(n){return n[(t=0,e=n.length,Math.floor(Math.random()*(e-t))+t)];var t,e}function g(n){const t=f(0,n.reduce(((n,t)=>n+t),0));let e=0;for(let o=0;o<n.length;o++)if(e+=n[o],t<e)return o}function p(n,t){return n[g(t)]}function d(n,t){return n.x<t.x+t.width&&n.y<t.y+t.height&&t.x<n.x+n.width&&t.y<n.y+n.height}function h(n){return-n.width<n.x&&n.x<o}function w(n,t){return t/n}function y(n,t,e,o){return n+t*o+.5*e*o*o}function x(n,t,e){return n+t*e}function M(n){return new Promise(((t,e)=>{const o=new Image;o.onload=()=>t(o),o.onerror=n=>e(n),o.src=n}))}async function v(n,t){const e=await fetch(t),o=await e.arrayBuffer();return await n.decodeAudioData(o)}function T(n,t,e=1,o=1){if("running"===n.state){const i=n.createBufferSource();i.buffer=t,i.playbackRate.value=e;const u=n.createGain();u.gain.value=o,i.connect(u),u.connect(n.destination),i.start()}}function _(n,t,e,o,i,u,c=1,r=1,a=0){n.save(),n.translate(e+.5*i,o+.5*u),n.scale(c,r),n.rotate(a),n.drawImage(t,.5*-i,.5*-u,i,u),n.restore()}const S="high-score";function R(){const n=window.matchMedia("(min-aspect-ratio: 1/1) and (min-width: 900px)").matches?64:0;return[Math.min(window.innerWidth,window.innerHeight)-2*n,window.innerHeight-2*n]}function k(){O().forEach(P),I().forEach(j),X().forEach(j),j(D())}function E(n){O().forEach(j),I().forEach(P),X().forEach(j),Y().textContent=n}function b(n,t){O().forEach(j),I().forEach(j),X().forEach(P),j(N()),document.querySelector(".game__result-score").textContent=n,document.querySelector(".game__result-best").textContent=t}function A(n){F().style.backgroundImage=`url('../img/background-${n}.png')`}function j(n){n.style.visibility="hidden"}function P(n){n.style.visibility="visible"}function O(){return[document.querySelector(".game__title"),document.querySelector(".info-button"),D()]}function I(){return[Y()]}function X(){return[document.querySelector(".game__result"),N()]}function F(){return document.querySelector(".game__canvas")}function Y(){return document.querySelector(".game__score")}function D(){return document.querySelector(".game__start-hint")}function N(){return document.querySelector(".game__reset-hint")}const C=20,G=20,V=Math.floor(o/2)-C/2,L=-.75,q=L*L/224,z=2*Math.abs(L)/q,B=2.5,H=2.5,J=.7,U=L,$=.35,Q=250,K=3e3,W=180;function Z(){return{l:0,p:B,h:H,M:0,width:C,height:G,x:V,y:3.5*-G,velocityY:0,v:!0,T:0}}function nn(n){return i(n)-G}function tn(n){return n._.y===nn(n)}function en(n){n.status!==u.o||n._.v||(n._.velocityY=L,n._.l=1,n._.v=!0,n._.T=n.S,T(n.R,l(n.A.k)))}function on(n){n.status===u.t||n.status===u.o?(n._.v&&(un(n),cn(n),function(n){n._.j&&!n._.v&&(en(n),n._.j=!1)}(n)),function(n){if(!n._.v){const o=n.P.filter((n=>!n.O));if(o.length>0){const i=(t=o,e=n._.x,function(n,t=n=>n){return n.reduce(((n,e)=>t(e)<t(n)?e:n))}(t,(n=>Math.abs(n.x-e)))),u=n._.p<0!==i.I;n._.p*=u?-1:1}}var t,e}(n)):n.status===u.i&&(un(n),cn(n))}function un(n){var t,e,o;n._.velocityY=(t=n._.velocityY,e=q,o=n.X,t+e*o),n._.y=y(n._.y,n._.velocityY,q,n.X);n._.velocityY/L<$&&(n.status===u.i?n._.l=6:n._.l=2)}function cn(n){(function(n){return n._.y>nn(n)})(n)&&(n._.y=nn(n),n._.velocityY=0,n._.v=!1,n._.l=0,n._.M=0,n.status===u.i&&(n._.l=4))}function rn(n){const t=f(Q,K);n.F=setTimeout((()=>{n._.v||(n._.l=3),n.F=setTimeout((()=>{n._.v||(n._.l=0),rn(n)}),W)}),t)}function an(n){n._.velocityY=U,n._.l=5,function(n){clearTimeout(n.F)}(n)}const fn=10,sn=10,mn=2,ln=2,gn=.4,pn=fn*mn*.5,dn=[{l:0,velocityX:.13,Y:.85},{l:1,velocityX:.17,Y:.95},{l:2,velocityX:.22,Y:1.1}],hn=[.4,.4,.2],wn=V/.13,yn=50,xn=.8,Mn=.25,vn=.5;function Tn(n){return i(n)-G/2-sn/2}function _n(n){return Math.min(...function(n,t,e){const o=.5*e,i=t,u=i*i-4*o*-n;if(u<0)return null;{const n=Math.sqrt(u);return[(-i+n)/(2*o),(-i-n)/(2*o)]}}(Tn(n)-(nn(n)+G),L,q))}function Sn(n){const t=n.D.filter((t=>t.N<=n.S));n.D=n.D.filter((t=>t.N>n.S)),n.P.push(...t),t.length>0&&function(n,t){const e=l(n.A.C),o=Math.max(...t.map((n=>n.Y))),i=f(-.05,.05),u=o+i;n.G((()=>{T(n.R,e,u,vn)}))}(n,t)}function Rn(n){const t=function(n){function t(n){return n<5?[.1,.3,.6]:n<24?[.45,.4,.15]:n<46?[.65,.3,.05]:[.9,.1,0]}const e=[1*z,2.5*z,3.5*z],o=[2.5*z,3.5*z,7*z],i=g(t(n));return f(e[i],o[i])}(n.V);n.L=setTimeout((()=>{if(n.status!==u.o)return;const t=n.S+wn;var e;const i=function(n){const t=m(),e=p(dn,hn).velocityX;return r(n,(()=>{const o=a(Math.pow(xn,1/n))?t:!t,i=a(Math.pow(Mn,1/n))?e:p(dn,hn).velocityX;return o?i:-i}))}((e=n.V)<5?1+g([.9,.1]):e<11?1+g([.7,.2,.05,.05]):e<29?1+g([.5,.2,.1,.1]):1+g([.4,.2,.15,.15,.05,.05])),c=i.reduce(((n,t)=>{const e=n.get(t)??0;return n.set(t,e+1),n}),new Map);const f=function(n,t=(n,t)=>[n,t]){return new Map(Array.from(n,(([n,e])=>t(n,e))))}(new Map(i.map((e=>[e,kn(n,t,e)]))),((n,[t,e])=>[n,function(n,t,e,o){const i=20;for(let u=e;u>0;u--){const e=s(n,t,u,o,i);if(e)return e}return[]}(t,e,c.get(n),fn*mn/Math.abs(n))])),l=Array.from(f,(([t,e])=>e.map((e=>function(n,t,e){const i=dn.find((n=>Math.abs(e)===n.velocityX)),u=e>=0,c=w(pn,e)*gn;return{N:t,l:i.l,p:mn,h:ln,M:0,q:c,width:fn,height:sn,x:u?-fn:o,y:Tn(n),velocityX:e,I:u,O:!1,Y:i.Y}}(n,e,t))))).flat();n.B.push(t),n.D.push(...l),Rn(n)}),t)}function kn(n,t,o){const i=yn+e,u=_n(n),c=t+z-u-i,r=V+C+fn;return[t+u+i-V/Math.abs(o),c-r/Math.abs(o)]}const En=10,bn=10,An=.095,jn=2.67,Pn=2.67,On=.4*w(En*jn*.5,An),In=2e3,Xn=25e3;function Fn(n){return function(n,t){return{p:jn,h:Pn,M:0,q:t?On:-On,width:En,height:bn,x:t?-En:o,y:n,velocityX:t?An:-An,I:t,O:!1}}(n,m())}function Yn(n){const t=f(In,Xn);n.H=setTimeout((()=>{if(n.status!==u.o)return;const t=Fn(i(n)-G/2-bn/2);n.J.push(t),Yn(n)}),t)}const Dn=4,Nn=60,Cn=6,Gn=400,Vn=800;function Ln(i){for(let n=i.U;n>0;n-=e)i.X=Math.min(n,e),i.S+=i.X,qn(i),i.$+=1;i.K+=1,i.W-i.Z>=1e3&&(i.nn=i.K,i.tn=i.$,i.K=0,i.$=0,i.Z=i.W),function(e){(function(n){n.en.clearRect(0,0,o,n.height)})(e),function(n){_(n.en,n.images._[n._.l],n._.x,n._.y,n._.width,n._.height,n._.p,n._.h,n._.M),n.un&&(n.en.strokeStyle=t,n.en.strokeRect(n._.x,n._.y,C,G))}(e),function(n){for(const e of n.J)_(n.en,n.images.cn,e.x,e.y,e.width,e.height,e.p,e.h,e.M),n.un&&(n.en.strokeStyle=t,n.en.strokeRect(e.x,e.y,e.width,e.height))}(e),function(n){for(const e of n.P)_(n.en,n.images.rn[e.l],e.x,e.y,e.width,e.height,e.p,e.h,e.M),n.un&&(n.en.strokeStyle=t,n.en.strokeRect(e.x,e.y,fn,sn))}(e),function(n){n.an>0&&(n.en.fillStyle=`rgba(255, 255, 255, ${n.an})`,n.en.fillRect(0,0,o,n.height))}(e),function(e){if(e.un){const i=[performance.memory&&(performance.memory.usedJSHeapSize/1024/1024).toFixed(1)+" MB",Math.round(e.nn)+" F/S",Math.round(e.tn)+" U/S"].filter(Boolean).join("   ");e.en.font=n,e.en.fillStyle=t,e.en.fillText(i,8,e.height-8),e.en.strokeStyle=t,e.en.strokeRect(0,0,o,e.height)}}(e)}(i),requestAnimationFrame((n=>{i.U=n-i.W,i.W=n,Ln(i)}))}function qn(n){!function(n){const t=n.B.length>0&&n.B[0]<=n.S;n.fn&&t&&(en(n),n.B.shift())}(n),on(n),Sn(n),function(n){for(const t of n.P)t.x=y(t.x,t.velocityX,0,n.X),t.M=x(t.M,t.q,n.X)}(n),function(n){for(const t of n.J)t.x=y(t.x,t.velocityX,0,n.X),t.M=x(t.M,t.q,n.X)}(n),function(n){if(n.status!==u.o)return;const t=n.P.filter((n=>{const t=!n.O,e=n.I&&n.x>V+C,o=!n.I&&n.x+fn<V;return t&&(e||o)}));t.forEach((n=>n.O=!0)),n.V+=t.length,t.length>0&&(n.G((()=>T(n.R,l(n.A.V)))),E(n.V))}(n),function(n){if(n.status!==u.o)return;const t=n.J.filter((t=>{const e=!t.O,o=d(n._,t);return e&&o}));t.forEach((n=>n.O=!0)),n.V+=t.length,n.J=n.J.filter((n=>!t.includes(n))),t.length>0&&(T(n.R,n.A.sn),E(n.V))}(n),function(n){n.status===u.o?function(n){for(const t of n.P)if(d(n._,t))return!0;return!1}(n)&&(!function(n){n.V>n.mn&&(n.mn=n.V,t=n.V,localStorage.setItem(S,t));var t}(n),function(n){clearTimeout(n.H)}(n),function(n){clearTimeout(n.L)}(n),function(n){n.an=1}(n),an(n),n.status=u.i,T(n.R,n.A.ln)):n.status===u.i&&function(n){return 0===n.P.length&&0===n.J.length}(n)&&(n.status=u.u,b(n.V,n.mn))}(n),function(n){n.P=n.P.filter(h)}(n),function(n){n.J=n.J.filter(h)}(n),function(n){n.status===u.t&&tn(n)&&!n.gn?n.gn=setTimeout((()=>{n.status===u.t&&(P(D()),n.G((()=>T(n.R,l(n.A.V)))))}),Vn):n.status!==u.u||n.pn||(n.pn=setTimeout((()=>{n.status===u.u&&(P(N()),n.G((()=>T(n.R,l(n.A.V)))))}),Vn))}(n),function(n){n.an>0&&(n.an-=n.X/Gn,n.an<0&&(n.an=0))}(n)}async function zn(n){await async function(n){"suspended"===n.R.state&&await n.R.resume()}(n),function(n){n.status===u.t&&tn(n)?(n.status=u.o,Yn(n),Rn(n),E(n.V)):n.status===u.u&&(n.status=u.t,n._=Z(),n.V=0,n.dn=(n.dn+1)%Dn,n.gn=null,n.pn=null,rn(n),k(),A(n.dn))}(n),en(n),function(n){const t=n.S-n._.T;n.status===u.o&&t>z*J&&(n._.j=!0)}(n)}function Bn(n,t,e){const o=n.height,[u,c]=Hn(t,e);n.width=u,n.height=c,function(n){n.J.map((t=>{t.y=i(n)-G/2-bn/2}))}(n),function(n){n.P.map((t=>{t.y=Tn(n)}))}(n),function(n,t){const e=i({height:t}),o=n._.y,u=i(n);n._.y=u-(e-o)}(n,o)}function Hn(n,t){return[o,o*t/n]}function Jn(n){n.stopPropagation()}function Un(n,t){const[e,i]=R(),u=Math.floor(e*window.devicePixelRatio),c=Math.floor(i*window.devicePixelRatio),r=u/o;n.style.width=e+"px",n.style.height=i+"px",n.width=Math.floor(u),n.height=Math.floor(c),n.getContext("2d").scale(r,r),t&&Bn(t,n.width,n.height)}window.addEventListener("load",(async function(){const n=F(),t=document.querySelector(".info-button"),e=document.querySelector(".info-modal"),o=document.querySelector(".info-modal__card"),i=n.getContext("2d"),r=new AudioContext,a={k:[],V:[],C:[]},f=[v(r,"./sfx/die.mp3").then((n=>a.ln=n)),v(r,"./sfx/eat.wav").then((n=>a.sn=n)),v(r,"./sfx/jump-0.mp3").then((n=>a.k[0]=n)),v(r,"./sfx/jump-1.mp3").then((n=>a.k[1]=n)),v(r,"./sfx/jump-2.mp3").then((n=>a.k[2]=n)),v(r,"./sfx/jump-3.mp3").then((n=>a.k[3]=n)),v(r,"./sfx/jump-4.mp3").then((n=>a.k[4]=n)),v(r,"./sfx/jump-5.mp3").then((n=>a.k[5]=n)),v(r,"./sfx/score-0.wav").then((n=>a.V[0]=n)),v(r,"./sfx/score-1.wav").then((n=>a.V[1]=n)),v(r,"./sfx/score-2.wav").then((n=>a.V[2]=n)),v(r,"./sfx/score-3.wav").then((n=>a.V[3]=n)),v(r,"./sfx/shoot-0.wav").then((n=>a.C[0]=n)),v(r,"./sfx/shoot-1.wav").then((n=>a.C[1]=n))],s={_:[],rn:[],background:[]},m=[M("./img/player-0.png").then((n=>s._[0]=n)),M("./img/player-1.png").then((n=>s._[1]=n)),M("./img/player-2.png").then((n=>s._[2]=n)),M("./img/player-3.png").then((n=>s._[3]=n)),M("./img/player-4.png").then((n=>s._[4]=n)),M("./img/player-5.png").then((n=>s._[5]=n)),M("./img/player-6.png").then((n=>s._[6]=n)),M("./img/enemy-0.png").then((n=>s.rn[0]=n)),M("./img/enemy-1.png").then((n=>s.rn[1]=n)),M("./img/enemy-2.png").then((n=>s.rn[2]=n)),M("./img/snack.png").then((n=>s.cn=n))];await Promise.all([...f,...m]);const l=new URL(location),g="true"===l.searchParams.get("auto"),p="true"===l.searchParams.get("debug"),d=Number.parseInt(l.searchParams.get("score"))||0,h=localStorage.getItem(S)??0,[w,y]=R(),x=function(n,t,e,o,i,r,a,f,s,m){const[l,g]=Hn(i,r);return{en:n,R:t,A:e,images:o,width:l,height:g,W:0,U:0,S:0,X:0,status:u.t,V:m,mn:a,_:Z(),P:[],D:[],J:[],B:[],fn:f,un:s,nn:0,K:0,tn:0,$:0,Z:0,H:null,L:null,F:null,gn:null,pn:null,an:0,dn:1,G:c(Nn,Cn)}}(i,r,a,s,w,y,h,g,p,d);A(x.dn),Un(n),P(n),k(),requestAnimationFrame((n=>{x.U=0,x.W=n,rn(x),Ln(x)})),window.addEventListener("resize",(()=>Un(n,x)),{passive:!0}),document.addEventListener("keydown",function(n){async function t(o){" "===o.key&&(await zn(n),document.removeEventListener("keydown",t),document.addEventListener("keyup",e))}async function e(n){" "===n.key&&(document.removeEventListener("keyup",e),document.addEventListener("keydown",t))}return t}(x)),document.addEventListener("visibilitychange",function(n){return()=>{!function(n){document.hidden?n.suspend():n.resume()}(n)}}(r)),n.addEventListener("pointerup",function(n,t){async function e(){await zn(t),n.addEventListener("pointerdown",o,{passive:!0})}async function o(){await zn(t)}return e}(n,x),{once:!0,passive:!0}),t.addEventListener("click",function(n){function t(){P(n)}return t}(e),{passive:!0}),e.addEventListener("click",function(n){function t(){j(n)}return t}(e),{passive:!0}),o.addEventListener("click",Jn,{passive:!0})}))}();
