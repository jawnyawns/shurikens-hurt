!function(){"use strict";const n="9px sans-serif",t="#0f0",e=1e3/29,o=360;function i(n){return n.height/2+68}const u=Object.freeze({t:"NOT_STARTED",o:"IN_PROGRESS",i:"GAME_OVER",u:"READY_FOR_RESET"});function c(n,t=1/0){const e=[];let o=!1;function i(){if(o||0===e.length)return;o=!0;const{m:t,resolve:u,reject:c}=e.shift();Promise.resolve().then((()=>t())).then(u).catch(c).finally((()=>{setTimeout((()=>{o=!1,i()}),n)}))}return function(n){return e.length>=t?Promise.reject(Error("Queue size limit reached")):new Promise(((t,o)=>{e.push({m:n,resolve:t,reject:o}),i()}))}}function r(n,t=n=>{}){return Array.from({length:n},((n,e)=>t(e)))}function a(n){return Math.random()<n}function f(n,t){return Math.random()*(t-n)+n}function s(n,t,e,o,i=1/0){return function(n,t,e=1/0,o=()=>{}){for(let o=0;o<e;o++){const e=n();if(t(e))return e}return o()}((()=>function(n,t,e){return r(e,(()=>f(n,t)))}(n,t,e)),(n=>n.sort().every(((t,e)=>0===e||t-n[e-1]>=o))),i,(()=>null))}function m(){return a(.5)}function g(n){return n[(t=0,e=n.length,Math.floor(Math.random()*(e-t))+t)];var t,e}function l(n){const t=f(0,n.reduce(((n,t)=>n+t),0));let e=0;for(let o=0;o<n.length;o++)if(e+=n[o],t<e)return o}function p(n,t){return n[l(t)]}function d(n,t){return n.x<t.x+t.width&&n.y<t.y+t.height&&t.x<n.x+n.width&&t.y<n.y+n.height}function h(n){return-n.width<n.x&&n.x<o}function w(n,t){return t/n}function y(n,t,e,o){return n+t*o+.5*e*o*o}function x(n,t,e){return n+t*e}function b(n){return new Promise(((t,e)=>{const o=new Image;o.onload=()=>t(o),o.onerror=n=>e(n),o.src=n}))}function v(n){return b(n).catch(console.error)}async function M(n,t){const e=await fetch(t),o=await e.arrayBuffer();return await n.decodeAudioData(o)}function T(n,t,e=1,o=1){if("running"===n.state){const i=n.createBufferSource();i.buffer=t,i.playbackRate.value=e;const u=n.createGain();u.gain.value=o,i.connect(u),u.connect(n.destination),i.start()}}function k(n,t,e,o,i,u,c=1,r=1,a=0){n.save(),n.translate(e+.5*i,o+.5*u),n.scale(c,r),n.rotate(a),n.drawImage(t,.5*-i,.5*-u,i,u),n.restore()}const S="high-score";function _(){const n=window.matchMedia("(min-aspect-ratio: 1/1) and (min-width: 900px)").matches?64:0;return[Math.min(window.innerWidth,window.innerHeight)-2*n,window.innerHeight-2*n]}function R(){I().forEach(O),F().forEach(j),X().forEach(j),function(){const n=D();j(n),n.classList.remove("spawn-and-shrug-bubble")}(),document.querySelector(".loading").classList.add("loading--completed")}function E(n){I().forEach(j),F().forEach(O),X().forEach(j),Y().textContent=n}function A(n,t){I().forEach(j),F().forEach(j),X().forEach(O),function(){const n=G();j(n),n.classList.remove("spawn-and-shrug-bubble")}(),document.querySelector(".game__result-score").textContent=n,document.querySelector(".game__result-best").textContent=t}function P(n){const[t,e]=_(),o=[D(),G()],u=t/n.width,c=e/n.height;o.forEach((t=>{const o=n.width/2+24,r=i(n)-18;t.style.left=o*u+"px",t.style.bottom=e-r*c+"px"}))}function j(n){n.style.visibility="hidden"}function O(n){n.style.visibility="visible"}function I(){return[document.querySelector(".game__title"),document.querySelector(".info-button"),D()]}function F(){return[Y()]}function X(){return[document.querySelector(".game__result"),G()]}function N(){return document.querySelector(".game__canvas")}function Y(){return document.querySelector(".game__score")}function D(){return document.querySelector(".game__start-hint")}function G(){return document.querySelector(".game__reset-hint")}const C=32,V=20,z=Math.floor(o/2)-C/2,H=-.75,L=H*H/224,q=2*Math.abs(H)/L,B=1.5625,J=2.5,U=.7,$=H,Q=.35,K=250,W=3e3,Z=180;function nn(){return{l:0,p:B,h:J,v:0,width:C,height:V,x:z,y:5*-V,velocityY:0,M:!0,T:0,isFrozen:!0}}function tn(n){return i(n)-V}function en(n){return n.k.y===tn(n)}function on(n){n.status!==u.o||n.k.M||(n.k.velocityY=H,n.k.l=1,n.k.M=!0,n.k.T=n.S,T(n._,g(n.A.R)))}function un(n){n.k.isFrozen||(n.status===u.t||n.status===u.o?(n.k.M&&(cn(n),rn(n),function(n){n.k.P&&!n.k.M&&(on(n),n.k.P=!1)}(n)),function(n){if(!n.k.M){const o=n.j.filter((n=>!n.O));if(o.length>0){const i=(t=o,e=n.k.x,function(n,t=n=>n){return n.reduce(((n,e)=>t(e)<t(n)?e:n))}(t,(n=>Math.abs(n.x-e)))),u=n.k.p<0!==i.I;n.k.p*=u?-1:1}}var t,e}(n)):n.status===u.i&&(cn(n),rn(n)))}function cn(n){var t,e,o;n.k.velocityY=(t=n.k.velocityY,e=L,o=n.F,t+e*o),n.k.y=y(n.k.y,n.k.velocityY,L,n.F);n.k.velocityY/H<Q&&(n.status===u.i?n.k.l=6:n.k.l=2)}function rn(n){(function(n){return n.k.y>tn(n)})(n)&&(n.k.y=tn(n),n.k.velocityY=0,n.k.M=!1,n.k.l=0,n.k.v=0,n.status===u.i&&(n.k.l=4))}function an(n){const t=f(K,W);n.X=setTimeout((()=>{n.k.M||(n.k.l=3),n.X=setTimeout((()=>{n.k.M||(n.k.l=0),an(n)}),Z)}),t)}function fn(n){n.k.velocityY=$,n.k.l=5,function(n){clearTimeout(n.X)}(n)}const sn=10,mn=10,gn=.125,ln=z/gn,pn=2,dn=2,hn=.4,wn=sn*pn*.5,yn=[{l:0,velocityX:gn,N:.85},{l:1,velocityX:.18,N:.95},{l:2,velocityX:.235,N:1.1}],xn=[.4,.4,.2],bn=50,vn=.8,Mn=.25,Tn=.6,kn=60;function Sn(n){return i(n)-V/2-mn/2}function _n(n){return Math.min(...function(n,t,e){const o=.5*e,i=t,u=i*i-4*o*-n;if(u<0)return null;{const n=Math.sqrt(u);return[(-i+n)/(2*o),(-i-n)/(2*o)]}}(Sn(n)-(tn(n)+V),H,L))}function Rn(n){const t=n.Y.filter((t=>t.D<=n.S));var e,o,i;n.Y=n.Y.filter((t=>t.D>n.S)),n.j.push(...t),e=()=>{!function(n,t){const e=g(n.A.G),o=Math.max(...t.map((n=>n.N))),i=f(-.05,.05),u=o+i;T(n._,e,u,Tn)}(n,t)},o=kn,(i=t.length)>0&&function n(t){e(t),t+1<i&&setTimeout((()=>n(t+1)),o)}(0)}function En(n){const t=function(n){function t(n){return n<1e4?[.1,.3,.6]:n<25e3?[.45,.4,.15]:n<4e4?[.65,.3,.05]:[.9,.1,0]}const e=[1*q,2.5*q,3.5*q],o=[2.5*q,3.5*q,7*q],i=l(t(n));return f(e[i],o[i])}(n.S-n.C);n.V=setTimeout((()=>{if(n.status!==u.o)return;const t=n.S+ln;var e;const i=function(n){const t=m(),e=p(yn,xn).velocityX;return r(n,(()=>{const o=a(Math.pow(vn,1/n))?t:!t,i=a(Math.pow(Mn,1/n))?e:p(yn,xn).velocityX;return o?i:-i}))}((e=n.S-n.C)<1e4?1+l([.9,.1]):e<15e3?1+l([.7,.2,.05,.05]):e<3e4?1+l([.5,.2,.1,.1]):1+l([.4,.2,.15,.15,.05,.05])),c=i.reduce(((n,t)=>{const e=n.get(t)??0;return n.set(t,e+1),n}),new Map);const f=function(n,t=(n,t)=>[n,t]){return new Map(Array.from(n,(([n,e])=>t(n,e))))}(new Map(i.map((e=>[e,An(n,t,e)]))),((n,[t,e])=>[n,function(n,t,e,o){const i=80;for(let u=e;u>0;u--){const e=s(n,t,u,o,i);if(e)return e}return[]}(t,e,c.get(n),sn*pn/Math.abs(n))])),g=Array.from(f,(([t,e])=>e.map((e=>function(n,t,e){const i=yn.find((n=>Math.abs(e)===n.velocityX)),u=e>=0,c=w(wn,e)*hn;return{D:t,l:i.l,p:pn,h:dn,v:0,H:c,width:sn,height:mn,x:u?-sn:o,y:Sn(n),velocityX:e,I:u,O:!1,N:i.N}}(n,e,t))))).flat();n.L.push(t),n.Y.push(...g),En(n)}),t)}function An(n,t,o){const i=bn+e,u=_n(n),c=t+q-u-i,r=z+C+sn;return[t+u+i-z/Math.abs(o),c-r/Math.abs(o)]}const Pn=10,jn=10,On=.095,In=gn,Fn=2.67,Xn=2.67,Nn=Pn*Fn*.5,Yn=.4,Dn=3,Gn=1,Cn=1500,Vn=18e3,zn=500,Hn=6800;function Ln(n){return function(n,t){const e=i(n)-V/2-jn/2,u=n.q?In:On,c=w(Nn,u)*Yn;return{p:Fn,h:Xn,v:0,H:t?c:-c,width:Pn,height:jn,x:t?-Pn:o,y:e,velocityX:t?u:-u,I:t,O:!1}}(n,m())}function qn(n){const t=n.q?f(zn,Hn):f(Cn,Vn);n.B=setTimeout((()=>{if(n.status!==u.o)return;const t=Ln(n);n.J.push(t),qn(n)}),t)}const Bn=4,Jn=400,Un=800,$n=60;function Qn(n){var t;t=n.U,N().style.backgroundImage=`url('../img/background-${t}.png')`,P(n),R(),an(n),setTimeout((()=>{n.k.isFrozen=!1}),1e3)}function Kn(i){for(let n=i.$;n>0;n-=e)i.F=Math.min(n,e),i.S+=i.F,Wn(i),i.K+=1;i.W+=1,i.Z-i.nn>=1e3&&(i.tn=i.W,i.en=i.K,i.W=0,i.K=0,i.nn=i.Z),function(e){(function(n){n.un.clearRect(0,0,o,n.height)})(e),function(n){k(n.un,n.images.k[n.k.l],n.k.x,n.k.y,n.k.width,n.k.height,n.k.p,n.k.h,n.k.v),n.cn&&(n.un.strokeStyle=t,n.un.strokeRect(n.k.x,n.k.y,C,V))}(e),function(n){for(const e of n.J)k(n.un,n.images.rn,e.x,e.y,e.width,e.height,e.p,e.h,e.v),n.cn&&(n.un.strokeStyle=t,n.un.strokeRect(e.x,e.y,e.width,e.height))}(e),function(n){for(const e of n.j)k(n.un,n.images.an[e.l],e.x,e.y,e.width,e.height,e.p,e.h,e.v),n.cn&&(n.un.strokeStyle=t,n.un.strokeRect(e.x,e.y,sn,mn))}(e),function(n){n.fn>0&&(n.un.fillStyle=`rgba(255, 255, 255, ${n.fn})`,n.un.fillRect(0,0,o,n.height))}(e),function(e){if(e.cn){const i=[performance.memory&&(performance.memory.usedJSHeapSize/1024/1024).toFixed(1)+" MB",Math.round(e.tn)+" F/S",Math.round(e.en)+" U/S"].filter(Boolean).join("   ");e.un.font=n,e.un.fillStyle=t,e.un.fillText(i,8,e.height-8),e.un.strokeStyle=t,e.un.strokeRect(0,0,o,e.height)}}(e)}(i),requestAnimationFrame((n=>{i.$=n-i.Z,i.Z=n,Kn(i)}))}function Wn(n){!function(n){const t=n.L.length>0&&n.L[0]<=n.S;n.sn&&t&&(on(n),n.L.shift())}(n),un(n),Rn(n),function(n){for(const t of n.j)t.x=y(t.x,t.velocityX,0,n.F),t.v=x(t.v,t.H,n.F)}(n),function(n){for(const t of n.J)t.x=y(t.x,t.velocityX,0,n.F),t.v=x(t.v,t.H,n.F)}(n),function(n){const t=n.mn;(function(n){if(n.q)return;if(n.status!==u.o)return;const t=n.j.filter((n=>{const t=!n.O,e=n.I&&n.x>z+C,o=!n.I&&n.x+sn<z;return t&&(e||o)}));t.forEach((n=>n.O=!0)),n.mn+=t.length})(n),function(n){if(n.status!==u.o)return;const t=n.q?Gn:Dn,e=n.J.filter((t=>{const e=!t.O,o=d(n.k,t);return e&&o}));e.forEach((n=>n.O=!0)),n.J=n.J.filter((n=>!e.includes(n))),n.mn+=e.length*t}(n);const e=n.mn-t;for(let o=0;o<e;o++)n.gn((()=>{n.status===u.o&&(T(n._,g(n.A.mn)),E(t+o+1))}))}(n),function(n){n.status===u.o?function(n){for(const t of n.j)if(d(n.k,t))return!0;return!1}(n)&&(!function(n){n.mn>n.ln&&(n.ln=n.mn,t=n.mn,localStorage.setItem(S,t));var t}(n),function(n){clearTimeout(n.B)}(n),function(n){clearTimeout(n.V)}(n),function(n){n.fn=1}(n),fn(n),n.status=u.i,T(n._,n.A.pn)):n.status===u.i&&function(n){return 0===n.j.length&&0===n.J.length}(n)&&(n.status=u.u,A(n.mn,n.ln))}(n),function(n){n.j=n.j.filter(h)}(n),function(n){n.J=n.J.filter(h)}(n),function(n){n.status===u.t&&en(n)&&!n.dn?n.dn=setTimeout((()=>{n.status===u.t&&(!function(){const n=D();O(n),n.classList.add("spawn-and-shrug-bubble")}(),T(n._,g(n.A.mn)))}),Un):n.status!==u.u||n.hn||(n.hn=setTimeout((()=>{n.status===u.u&&(!function(){const n=G();O(n),n.classList.add("spawn-and-shrug-bubble")}(),T(n._,g(n.A.mn)))}),Un))}(n),function(n){n.fn>0&&(n.fn-=n.F/Jn,n.fn<0&&(n.fn=0))}(n)}async function Zn(n){await async function(n){"suspended"!==n._.state||n.wn||await n._.resume()}(n),function(n){n.status===u.t&&en(n)?(n.status=u.o,n.C=n.S,qn(n),En(n),E(n.mn)):n.status===u.u&&(n.status=u.t,n.k=nn(),n.mn=0,n.U=(n.U+1)%Bn,n.dn=null,n.hn=null,Qn(n))}(n),on(n),function(n){const t=n.S-n.k.T;n.status===u.o&&t>q*U&&(n.k.P=!0)}(n)}function nt(n,t,e){const o=n.height,[u,c]=tt(t,e);n.width=u,n.height=c,function(n){n.J.map((t=>{t.y=i(n)-V/2-jn/2}))}(n),function(n){n.j.map((t=>{t.y=Sn(n)}))}(n),function(n,t){const e=i({height:t}),o=n.k.y,u=i(n);n.k.y=u-(e-o)}(n,o),P(n)}function tt(n,t){return[o,o*t/n]}function et(n){n.stopPropagation()}function ot(n,t){const[e,i]=_(),u=Math.floor(e*window.devicePixelRatio),c=Math.floor(i*window.devicePixelRatio),r=u/o;n.style.width=e+"px",n.style.height=i+"px",n.width=Math.floor(u),n.height=Math.floor(c),n.getContext("2d").scale(r,r),t&&nt(t,n.width,n.height)}window.addEventListener("load",(async function(){const n=performance.now(),t=N(),e=document.querySelector(".info-button"),o=document.querySelector(".info-modal"),i=document.querySelector(".info-modal__card"),r=t.getContext("2d"),a=new AudioContext,{A:f,images:s}=await async function(n){const t={R:[],mn:[],G:[]},e=[M(n,"./sfx/die.mp3").then((n=>t.pn=n)),M(n,"./sfx/eat.wav").then((n=>t.yn=n)),M(n,"./sfx/jump-0.mp3").then((n=>t.R[0]=n)),M(n,"./sfx/jump-1.mp3").then((n=>t.R[1]=n)),M(n,"./sfx/jump-2.mp3").then((n=>t.R[2]=n)),M(n,"./sfx/jump-3.mp3").then((n=>t.R[3]=n)),M(n,"./sfx/jump-4.mp3").then((n=>t.R[4]=n)),M(n,"./sfx/jump-5.mp3").then((n=>t.R[5]=n)),M(n,"./sfx/score-0.wav").then((n=>t.mn[0]=n)),M(n,"./sfx/score-1.wav").then((n=>t.mn[1]=n)),M(n,"./sfx/score-2.wav").then((n=>t.mn[2]=n)),M(n,"./sfx/score-3.wav").then((n=>t.mn[3]=n)),M(n,"./sfx/shoot-0.wav").then((n=>t.G[0]=n)),M(n,"./sfx/shoot-1.wav").then((n=>t.G[1]=n))],o={k:[],an:[],background:[]},i=[b("./img/player-0.png").then((n=>o.k[0]=n)),b("./img/player-1.png").then((n=>o.k[1]=n)),b("./img/player-2.png").then((n=>o.k[2]=n)),b("./img/player-3.png").then((n=>o.k[3]=n)),b("./img/player-4.png").then((n=>o.k[4]=n)),b("./img/player-5.png").then((n=>o.k[5]=n)),b("./img/player-6.png").then((n=>o.k[6]=n)),b("./img/enemy-0.png").then((n=>o.an[0]=n)),b("./img/enemy-1.png").then((n=>o.an[1]=n)),b("./img/enemy-2.png").then((n=>o.an[2]=n)),b("./img/snack.png").then((n=>o.rn=n)),v("./img/background-0.png"),v("./img/background-1.png"),v("./img/background-2.png"),v("./img/background-3.png")];return await Promise.all([...e,...i]),{A:t,images:o}}(a),m=new URL(location),g="true"===m.searchParams.get("auto"),l="true"===m.searchParams.get("debug"),p="true"===m.searchParams.get("skip"),d="true"===m.searchParams.get("mute"),h="true"===m.searchParams.get("hungry"),w=m.searchParams.get("score"),y=m.searchParams.get("background"),x=w?Number.parseInt(w):0,T=y?Number.parseInt(y):1,k=localStorage.getItem(S)??0,[R,E]=_(),A=function(n,t,e,o,i,r,a,f,s,m,g,l,p){const[d,h]=tt(i,r);return{sn:f,cn:s,wn:m,q:g,un:n,_:t,A:e,images:o,width:d,height:h,Z:0,$:0,S:0,F:0,tn:0,W:0,en:0,K:0,nn:0,status:u.t,mn:l,ln:a,k:nn(),j:[],Y:[],J:[],L:[],C:0,gn:c($n),B:null,V:null,X:null,dn:null,hn:null,fn:0,U:p}}(r,a,f,s,R,E,k,g,l,d,h,x,T),P=performance.now()-n;setTimeout((()=>{!function(n,t,e,o,i,u){ot(e),O(e),Qn(n),requestAnimationFrame((t=>{n.$=0,n.Z=t,Kn(n)})),window.addEventListener("resize",(()=>ot(e,n)),{passive:!0}),document.addEventListener("keydown",function(n){async function t(o){" "===o.key&&(await Zn(n),document.removeEventListener("keydown",t),document.addEventListener("keyup",e))}async function e(n){" "===n.key&&(document.removeEventListener("keyup",e),document.addEventListener("keydown",t))}return t}(n)),document.addEventListener("keydown",function(n){return t=>{"Escape"===t.key&&j(n)}}(i),{passive:!0}),document.addEventListener("visibilitychange",function(n,t){return()=>{!function(n,t){document.hidden?n.suspend():t.wn||n.resume()}(n,t)}}(t,n)),e.addEventListener("pointerup",function(n,t){async function e(){await Zn(t),n.addEventListener("pointerdown",o,{passive:!0})}async function o(){await Zn(t)}return e}(e,n),{once:!0,passive:!0}),o.addEventListener("click",function(n){function t(){O(n)}return t}(i),{passive:!0}),i.addEventListener("click",function(n){function t(){j(n)}return t}(i),{passive:!0}),u.addEventListener("click",et,{passive:!0})}(A,a,t,e,o,i)}),p?0:Math.max(2e3-P,0))}))}();
