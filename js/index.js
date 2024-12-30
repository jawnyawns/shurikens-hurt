!function(){"use strict";const n="9px sans-serif",t="#0f0",e=1e3/29,o=360;function i(n){return n.height/2+69}const u=Object.freeze({t:"NOT_STARTED",o:"IN_PROGRESS",i:"GAME_OVER",u:"READY_FOR_RESET"});function c(n,t=1/0){const e=[];let o=!1;function i(){if(o||0===e.length)return;o=!0;const{m:t,resolve:u,reject:c}=e.shift();Promise.resolve().then((()=>t())).then(u).catch(c).finally((()=>{setTimeout((()=>{o=!1,i()}),n)}))}return function(n){return e.length>=t?Promise.reject(Error("Queue size limit reached")):new Promise(((t,o)=>{e.push({m:n,resolve:t,reject:o}),i()}))}}function r(n,t=n=>{}){return Array.from({length:n},((n,e)=>t(e)))}function a(n){return Math.random()<n}function f(n,t){return Math.random()*(t-n)+n}function s(n,t,e,o,i=1/0){return function(n,t,e=1/0,o=()=>{}){for(let o=0;o<e;o++){const e=n();if(t(e))return e}return o()}((()=>function(n,t,e){return r(e,(()=>f(n,t)))}(n,t,e)),(n=>n.sort().every(((t,e)=>0===e||t-n[e-1]>=o))),i,(()=>null))}function m(){return a(.5)}function g(n){return n[(t=0,e=n.length,Math.floor(Math.random()*(e-t))+t)];var t,e}function l(n){const t=f(0,n.reduce(((n,t)=>n+t),0));let e=0;for(let o=0;o<n.length;o++)if(e+=n[o],t<e)return o}function p(n,t){return n[l(t)]}function d(n,t){return n.x<t.x+t.width&&n.y<t.y+t.height&&t.x<n.x+n.width&&t.y<n.y+n.height}function h(n){return-n.width<n.x&&n.x<o}function w(n,t){return t/n}function y(n,t,e,o){return n+t*o+.5*e*o*o}function x(n,t,e){return n+t*e}function v(n){return new Promise(((t,e)=>{const o=new Image;o.onload=()=>t(o),o.onerror=n=>e(n),o.src=n}))}function M(n){return v(n).catch(console.error)}async function T(n,t){const e=await fetch(t),o=await e.arrayBuffer();return await n.decodeAudioData(o)}function _(n,t,e=1,o=1){if("running"===n.state){const i=n.createBufferSource();i.buffer=t,i.playbackRate.value=e;const u=n.createGain();u.gain.value=o,i.connect(u),u.connect(n.destination),i.start()}}function k(n,t,e,o,i,u,c=1,r=1,a=0){n.save(),n.translate(e+.5*i,o+.5*u),n.scale(c,r),n.rotate(a),n.drawImage(t,.5*-i,.5*-u,i,u),n.restore()}const S="high-score";function R(){const n=window.matchMedia("(min-aspect-ratio: 1/1) and (min-width: 900px)").matches?64:0;return[Math.min(window.innerWidth,window.innerHeight)-2*n,window.innerHeight-2*n]}function b(){I().forEach(O),F().forEach(P),X().forEach(P),P(N()),document.querySelector(".loading").classList.add("loading--completed")}function E(n){I().forEach(P),F().forEach(O),X().forEach(P),D().textContent=n}function A(n,t){I().forEach(P),F().forEach(P),X().forEach(O),P(C()),document.querySelector(".game__result-score").textContent=n,document.querySelector(".game__result-best").textContent=t}function j(n){const[t,e]=R(),o=[N(),C()],u=t/n.width,c=e/n.height;o.forEach((t=>{const o=n.width/2+24,r=i(n)-18;t.style.left=o*u+"px",t.style.bottom=e-r*c+"px"}))}function P(n){n.style.visibility="hidden"}function O(n){n.style.visibility="visible"}function I(){return[document.querySelector(".game__title"),document.querySelector(".info-button"),N()]}function F(){return[D()]}function X(){return[document.querySelector(".game__result"),C()]}function Y(){return document.querySelector(".game__canvas")}function D(){return document.querySelector(".game__score")}function N(){return document.querySelector(".game__start-hint")}function C(){return document.querySelector(".game__reset-hint")}const G=32,V=20,z=Math.floor(o/2)-G/2,H=-.75,L=H*H/224,q=2*Math.abs(H)/L,B=1.5625,J=2.5,U=.7,$=H,Q=.35,K=250,W=3e3,Z=180;function nn(){return{l:0,p:B,h:J,v:0,width:G,height:V,x:z,y:5*-V,velocityY:0,M:!0,T:0,isFrozen:!0}}function tn(n){return i(n)-V}function en(n){return n._.y===tn(n)}function on(n){n.status!==u.o||n._.M||(n._.velocityY=H,n._.l=1,n._.M=!0,n._.T=n.k,_(n.S,g(n.A.R)))}function un(n){n._.isFrozen||(n.status===u.t||n.status===u.o?(n._.M&&(cn(n),rn(n),function(n){n._.j&&!n._.M&&(on(n),n._.j=!1)}(n)),function(n){if(!n._.M){const o=n.P.filter((n=>!n.O));if(o.length>0){const i=(t=o,e=n._.x,function(n,t=n=>n){return n.reduce(((n,e)=>t(e)<t(n)?e:n))}(t,(n=>Math.abs(n.x-e)))),u=n._.p<0!==i.I;n._.p*=u?-1:1}}var t,e}(n)):n.status===u.i&&(cn(n),rn(n)))}function cn(n){var t,e,o;n._.velocityY=(t=n._.velocityY,e=L,o=n.F,t+e*o),n._.y=y(n._.y,n._.velocityY,L,n.F);n._.velocityY/H<Q&&(n.status===u.i?n._.l=6:n._.l=2)}function rn(n){(function(n){return n._.y>tn(n)})(n)&&(n._.y=tn(n),n._.velocityY=0,n._.M=!1,n._.l=0,n._.v=0,n.status===u.i&&(n._.l=4))}function an(n){const t=f(K,W);n.X=setTimeout((()=>{n._.M||(n._.l=3),n.X=setTimeout((()=>{n._.M||(n._.l=0),an(n)}),Z)}),t)}function fn(n){n._.velocityY=$,n._.l=5,function(n){clearTimeout(n.X)}(n)}const sn=10,mn=10,gn=z/.13,ln=2,pn=2,dn=.4,hn=sn*ln*.5,wn=[{l:0,velocityX:.13,Y:.85},{l:1,velocityX:.17,Y:.95},{l:2,velocityX:.22,Y:1.1}],yn=[.4,.4,.2],xn=50,vn=.8,Mn=.25,Tn=.6;function _n(n){return i(n)-V/2-mn/2}function kn(n){return Math.min(...function(n,t,e){const o=.5*e,i=t,u=i*i-4*o*-n;if(u<0)return null;{const n=Math.sqrt(u);return[(-i+n)/(2*o),(-i-n)/(2*o)]}}(_n(n)-(tn(n)+V),H,L))}function Sn(n){const t=n.D.filter((t=>t.N<=n.k));n.D=n.D.filter((t=>t.N>n.k)),n.P.push(...t),t.length>0&&function(n,t){const e=g(n.A.C),o=Math.max(...t.map((n=>n.Y))),i=f(-.05,.05),u=o+i;n.G((()=>{_(n.S,e,u,Tn)}))}(n,t)}function Rn(n){const t=function(n){function t(n){return n<5?[.1,.3,.6]:n<24?[.45,.4,.15]:n<46?[.65,.3,.05]:[.9,.1,0]}const e=[1*q,2.5*q,3.5*q],o=[2.5*q,3.5*q,7*q],i=l(t(n));return f(e[i],o[i])}(n.V);n.H=setTimeout((()=>{if(n.status!==u.o)return;const t=n.k+gn;var e;const i=function(n){const t=m(),e=p(wn,yn).velocityX;return r(n,(()=>{const o=a(Math.pow(vn,1/n))?t:!t,i=a(Math.pow(Mn,1/n))?e:p(wn,yn).velocityX;return o?i:-i}))}((e=n.V)<5?1+l([.9,.1]):e<11?1+l([.7,.2,.05,.05]):e<29?1+l([.5,.2,.1,.1]):1+l([.4,.2,.15,.15,.05,.05])),c=i.reduce(((n,t)=>{const e=n.get(t)??0;return n.set(t,e+1),n}),new Map);const f=function(n,t=(n,t)=>[n,t]){return new Map(Array.from(n,(([n,e])=>t(n,e))))}(new Map(i.map((e=>[e,bn(n,t,e)]))),((n,[t,e])=>[n,function(n,t,e,o){const i=80;for(let u=e;u>0;u--){const e=s(n,t,u,o,i);if(e)return e}return[]}(t,e,c.get(n),sn*ln/Math.abs(n))])),g=Array.from(f,(([t,e])=>e.map((e=>function(n,t,e){const i=wn.find((n=>Math.abs(e)===n.velocityX)),u=e>=0,c=w(hn,e)*dn;return{N:t,l:i.l,p:ln,h:pn,v:0,L:c,width:sn,height:mn,x:u?-sn:o,y:_n(n),velocityX:e,I:u,O:!1,Y:i.Y}}(n,e,t))))).flat();n.q.push(t),n.D.push(...g),Rn(n)}),t)}function bn(n,t,o){const i=xn+e,u=kn(n),c=t+q-u-i,r=z+G+sn;return[t+u+i-z/Math.abs(o),c-r/Math.abs(o)]}const En=10,An=10,jn=.095,Pn=.13,On=2.67,In=2.67,Fn=En*On*.5,Xn=.4,Yn=3,Dn=1,Nn=1500,Cn=18e3,Gn=600,Vn=8e3;function zn(n){return function(n,t){const e=i(n)-V/2-An/2,u=n.B?Pn:jn,c=w(Fn,u)*Xn;return{p:On,h:In,v:0,L:t?c:-c,width:En,height:An,x:t?-En:o,y:e,velocityX:t?u:-u,I:t,O:!1}}(n,m())}function Hn(n){const t=n.B?f(Gn,Vn):f(Nn,Cn);n.J=setTimeout((()=>{if(n.status!==u.o)return;const t=zn(n);n.U.push(t),Hn(n)}),t)}const Ln=4,qn=60,Bn=6,Jn=400,Un=800;function $n(n){var t;t=n.$,Y().style.backgroundImage=`url('../img/background-${t}.png')`,j(n),b(),an(n),setTimeout((()=>{n._.isFrozen=!1}),1e3)}function Qn(i){for(let n=i.K;n>0;n-=e)i.F=Math.min(n,e),i.k+=i.F,Kn(i),i.W+=1;i.Z+=1,i.nn-i.tn>=1e3&&(i.en=i.Z,i.un=i.W,i.Z=0,i.W=0,i.tn=i.nn),function(e){(function(n){n.cn.clearRect(0,0,o,n.height)})(e),function(n){k(n.cn,n.images._[n._.l],n._.x,n._.y,n._.width,n._.height,n._.p,n._.h,n._.v),n.rn&&(n.cn.strokeStyle=t,n.cn.strokeRect(n._.x,n._.y,G,V))}(e),function(n){for(const e of n.U)k(n.cn,n.images.an,e.x,e.y,e.width,e.height,e.p,e.h,e.v),n.rn&&(n.cn.strokeStyle=t,n.cn.strokeRect(e.x,e.y,e.width,e.height))}(e),function(n){for(const e of n.P)k(n.cn,n.images.fn[e.l],e.x,e.y,e.width,e.height,e.p,e.h,e.v),n.rn&&(n.cn.strokeStyle=t,n.cn.strokeRect(e.x,e.y,sn,mn))}(e),function(n){n.sn>0&&(n.cn.fillStyle=`rgba(255, 255, 255, ${n.sn})`,n.cn.fillRect(0,0,o,n.height))}(e),function(e){if(e.rn){const i=[performance.memory&&(performance.memory.usedJSHeapSize/1024/1024).toFixed(1)+" MB",Math.round(e.en)+" F/S",Math.round(e.un)+" U/S"].filter(Boolean).join("   ");e.cn.font=n,e.cn.fillStyle=t,e.cn.fillText(i,8,e.height-8),e.cn.strokeStyle=t,e.cn.strokeRect(0,0,o,e.height)}}(e)}(i),requestAnimationFrame((n=>{i.K=n-i.nn,i.nn=n,Qn(i)}))}function Kn(n){!function(n){const t=n.q.length>0&&n.q[0]<=n.k;n.mn&&t&&(on(n),n.q.shift())}(n),un(n),Sn(n),function(n){for(const t of n.P)t.x=y(t.x,t.velocityX,0,n.F),t.v=x(t.v,t.L,n.F)}(n),function(n){for(const t of n.U)t.x=y(t.x,t.velocityX,0,n.F),t.v=x(t.v,t.L,n.F)}(n),function(n){if(n.B)return;if(n.status!==u.o)return;const t=n.P.filter((n=>{const t=!n.O,e=n.I&&n.x>z+G,o=!n.I&&n.x+sn<z;return t&&(e||o)}));t.forEach((n=>n.O=!0)),n.V+=t.length,t.length>0&&(n.G((()=>_(n.S,g(n.A.V)))),E(n.V))}(n),function(n){if(n.status!==u.o)return;const t=n.B?Dn:Yn,e=n.U.filter((t=>{const e=!t.O,o=d(n._,t);return e&&o}));e.forEach((n=>n.O=!0)),n.U=n.U.filter((n=>!e.includes(n)));for(let o=0;o<e.length*t;o++)n.G((()=>{_(n.S,g(n.A.V)),n.V+=1,E(n.V)}))}(n),function(n){n.status===u.o?function(n){for(const t of n.P)if(d(n._,t))return!0;return!1}(n)&&(!function(n){n.V>n.gn&&(n.gn=n.V,t=n.V,localStorage.setItem(S,t));var t}(n),function(n){clearTimeout(n.J)}(n),function(n){clearTimeout(n.H)}(n),function(n){n.sn=1}(n),fn(n),n.status=u.i,_(n.S,n.A.ln)):n.status===u.i&&function(n){return 0===n.P.length&&0===n.U.length}(n)&&(n.status=u.u,A(n.V,n.gn))}(n),function(n){n.P=n.P.filter(h)}(n),function(n){n.U=n.U.filter(h)}(n),function(n){n.status===u.t&&en(n)&&!n.pn?n.pn=setTimeout((()=>{n.status===u.t&&(O(N()),n.G((()=>_(n.S,g(n.A.V)))))}),Un):n.status!==u.u||n.dn||(n.dn=setTimeout((()=>{n.status===u.u&&(O(C()),n.G((()=>_(n.S,g(n.A.V)))))}),Un))}(n),function(n){n.sn>0&&(n.sn-=n.F/Jn,n.sn<0&&(n.sn=0))}(n)}async function Wn(n){await async function(n){"suspended"===n.S.state&&await n.S.resume()}(n),function(n){n.status===u.t&&en(n)?(n.status=u.o,Hn(n),Rn(n),E(n.V)):n.status===u.u&&(n.status=u.t,n._=nn(),n.V=0,n.$=(n.$+1)%Ln,n.pn=null,n.dn=null,$n(n))}(n),on(n),function(n){const t=n.k-n._.T;n.status===u.o&&t>q*U&&(n._.j=!0)}(n)}function Zn(n,t,e){const o=n.height,[u,c]=nt(t,e);n.width=u,n.height=c,function(n){n.U.map((t=>{t.y=i(n)-V/2-An/2}))}(n),function(n){n.P.map((t=>{t.y=_n(n)}))}(n),function(n,t){const e=i({height:t}),o=n._.y,u=i(n);n._.y=u-(e-o)}(n,o),j(n)}function nt(n,t){return[o,o*t/n]}function tt(n){n.stopPropagation()}function et(n,t){const[e,i]=R(),u=Math.floor(e*window.devicePixelRatio),c=Math.floor(i*window.devicePixelRatio),r=u/o;n.style.width=e+"px",n.style.height=i+"px",n.width=Math.floor(u),n.height=Math.floor(c),n.getContext("2d").scale(r,r),t&&Zn(t,n.width,n.height)}window.addEventListener("load",(async function(){const n=performance.now(),t=Y(),e=document.querySelector(".info-button"),o=document.querySelector(".info-modal"),i=document.querySelector(".info-modal__card"),r=t.getContext("2d"),a=new AudioContext,{A:f,images:s}=await async function(n){const t={R:[],V:[],C:[]},e=[T(n,"./sfx/die.mp3").then((n=>t.ln=n)),T(n,"./sfx/eat.wav").then((n=>t.hn=n)),T(n,"./sfx/jump-0.mp3").then((n=>t.R[0]=n)),T(n,"./sfx/jump-1.mp3").then((n=>t.R[1]=n)),T(n,"./sfx/jump-2.mp3").then((n=>t.R[2]=n)),T(n,"./sfx/jump-3.mp3").then((n=>t.R[3]=n)),T(n,"./sfx/jump-4.mp3").then((n=>t.R[4]=n)),T(n,"./sfx/jump-5.mp3").then((n=>t.R[5]=n)),T(n,"./sfx/score-0.wav").then((n=>t.V[0]=n)),T(n,"./sfx/score-1.wav").then((n=>t.V[1]=n)),T(n,"./sfx/score-2.wav").then((n=>t.V[2]=n)),T(n,"./sfx/score-3.wav").then((n=>t.V[3]=n)),T(n,"./sfx/shoot-0.wav").then((n=>t.C[0]=n)),T(n,"./sfx/shoot-1.wav").then((n=>t.C[1]=n))],o={_:[],fn:[],background:[]},i=[v("./img/player-0.png").then((n=>o._[0]=n)),v("./img/player-1.png").then((n=>o._[1]=n)),v("./img/player-2.png").then((n=>o._[2]=n)),v("./img/player-3.png").then((n=>o._[3]=n)),v("./img/player-4.png").then((n=>o._[4]=n)),v("./img/player-5.png").then((n=>o._[5]=n)),v("./img/player-6.png").then((n=>o._[6]=n)),v("./img/enemy-0.png").then((n=>o.fn[0]=n)),v("./img/enemy-1.png").then((n=>o.fn[1]=n)),v("./img/enemy-2.png").then((n=>o.fn[2]=n)),v("./img/snack.png").then((n=>o.an=n)),M("./img/background-0.png"),M("./img/background-1.png"),M("./img/background-2.png"),M("./img/background-3.png")];return await Promise.all([...e,...i]),{A:t,images:o}}(a),m=new URL(location),g="true"===m.searchParams.get("auto"),l="true"===m.searchParams.get("debug"),p="true"===m.searchParams.get("skip"),d="true"===m.searchParams.get("hungry"),h=Number.parseInt(m.searchParams.get("score"))||0,w=localStorage.getItem(S)??0,[y,x]=R(),_=function(n,t,e,o,i,r,a,f,s,m,g){const[l,p]=nt(i,r);return{mn:f,rn:s,B:m,cn:n,S:t,G:c(qn,Bn),A:e,images:o,width:l,height:p,nn:0,K:0,k:0,F:0,en:0,Z:0,un:0,W:0,tn:0,status:u.t,V:g,gn:a,_:nn(),P:[],D:[],U:[],q:[],J:null,H:null,X:null,pn:null,dn:null,sn:0,$:1}}(r,a,f,s,y,x,w,g,l,d,h),k=performance.now()-n;setTimeout((()=>{!function(n,t,e,o,i,u){et(e),O(e),$n(n),requestAnimationFrame((t=>{n.K=0,n.nn=t,Qn(n)})),window.addEventListener("resize",(()=>et(e,n)),{passive:!0}),document.addEventListener("keydown",function(n){async function t(o){" "===o.key&&(await Wn(n),document.removeEventListener("keydown",t),document.addEventListener("keyup",e))}async function e(n){" "===n.key&&(document.removeEventListener("keyup",e),document.addEventListener("keydown",t))}return t}(n)),document.addEventListener("keydown",function(n){return t=>{"Escape"===t.key&&P(n)}}(i),{passive:!0}),document.addEventListener("visibilitychange",function(n){return()=>{!function(n){document.hidden?n.suspend():n.resume()}(n)}}(t)),e.addEventListener("pointerup",function(n,t){async function e(){await Wn(t),n.addEventListener("pointerdown",o,{passive:!0})}async function o(){await Wn(t)}return e}(e,n),{once:!0,passive:!0}),o.addEventListener("click",function(n){function t(){O(n)}return t}(i),{passive:!0}),i.addEventListener("click",function(n){function t(){P(n)}return t}(i),{passive:!0}),u.addEventListener("click",tt,{passive:!0})}(_,a,t,e,o,i)}),p?0:Math.max(2e3-k,0))}))}();
