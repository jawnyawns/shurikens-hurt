!function(){"use strict";const n="9px sans-serif",t="#0f0",e=1e3/29,o=360;function i(n){return n.height/2+68}const u=.125,c=.095,r=u,a=Math.min(u,.18,.235,c,r),f=Object.freeze({t:"NOT_STARTED",o:"IN_PROGRESS",i:"GAME_OVER",u:"READY_FOR_RESET"});function s(n,t=1/0){const e=[];let o=!1;function i(){if(o||0===e.length)return;o=!0;const{m:t,resolve:u,reject:c}=e.shift();Promise.resolve().then((()=>t())).then(u).catch(c).finally((()=>{setTimeout((()=>{o=!1,i()}),n)}))}return function(n){return e.length>=t?Promise.reject(Error("Queue size limit reached")):new Promise(((t,o)=>{e.push({m:n,resolve:t,reject:o}),i()}))}}function m(n,t=n=>{}){return Array.from({length:n},((n,e)=>t(e)))}function g(n){return Math.random()<n}function l(n,t){return Math.floor(Math.random()*(t-n))+n}function d(n,t){return Math.random()*(t-n)+n}function p(n,t,e,o,i=1/0){return function(n,t,e=1/0,o=()=>{}){for(let o=0;o<e;o++){const e=n();if(t(e))return e}return o()}((()=>function(n,t,e){return m(e,(()=>d(n,t)))}(n,t,e)),(n=>n.sort().every(((t,e)=>0===e||t-n[e-1]>=o))),i,(()=>null))}function h(){return g(.5)}function w(n){return n[l(0,n.length)]}function y(n){const t=d(0,n.reduce(((n,t)=>n+t),0));let e=0;for(let o=0;o<n.length;o++)if(e+=n[o],t<e)return o}function x(n,t){return n[y(t)]}function b(n,t){return n.x<t.x+t.width&&n.y<t.y+t.height&&t.x<n.x+n.width&&t.y<n.y+n.height}function v(n){return-n.width<n.x&&n.x<o}function M(n,t){return t/n}function _(n,t,e,o){return n+t*o+.5*e*o*o}function T(n,t,e){return n+t*e}function S(n){return new Promise(((t,e)=>{const o=new Image;o.onload=()=>t(o),o.onerror=n=>e(n),o.src=n}))}function k(n){return S(n).catch(console.error)}async function R(n,t){const e=await fetch(t),o=await e.arrayBuffer();return await n.decodeAudioData(o)}function E(n,t,e=1,o=1){if("running"===n.state){const i=n.createBufferSource();i.buffer=t,i.playbackRate.value=e;const u=n.createGain();u.gain.value=o,i.connect(u),u.connect(n.destination),i.start()}}function A(n,t,e,o,i,u,c=1,r=1,a=0){n.save(),n.translate(e+.5*i,o+.5*u),n.scale(c,r),n.rotate(a),n.drawImage(t,.5*-i,.5*-u,i,u),n.restore()}const P="high-score";function j(){const n=window.matchMedia("(min-aspect-ratio: 1/1) and (min-width: 900px)").matches?64:0;return[Math.min(window.innerWidth,window.innerHeight)-2*n,window.innerHeight-2*n]}function O(){C().forEach(D),G().forEach(Y),V().forEach(Y),function(){const n=L();Y(n),n.classList.remove("spawn-and-shrug-bubble")}(),document.querySelector(".loading").classList.add("loading--completed")}function I(n){C().forEach(Y),G().forEach(D),V().forEach(Y),H().textContent=n}function F(n,t){C().forEach(Y),G().forEach(Y),V().forEach(D),function(){const n=q();Y(n),n.classList.remove("spawn-and-shrug-bubble")}(),document.querySelector(".game__result-score").textContent=n,document.querySelector(".game__result-best").textContent=t}function X(n){const t=document.querySelector(".game__canvas-container");t.classList.add("game__canvas-container--bg-"+n),setTimeout((()=>{t.classList.remove(...[0,1,2,3].map((n=>"game__canvas-container--bg-"+n))),z().style.backgroundImage=`url('../img/background-${n}.png')`}),2e3)}function N(n){const[t,e]=j(),o=[L(),q()],u=t/n.width,c=e/n.height;o.forEach((t=>{const o=n.width/2+24,r=i(n)-18;t.style.left=o*u+"px",t.style.bottom=e-r*c+"px"}))}function Y(n){n.style.visibility="hidden"}function D(n){n.style.visibility="visible"}function C(){return[document.querySelector(".game__title"),document.querySelector(".info-button"),L()]}function G(){return[H()]}function V(){return[document.querySelector(".game__result"),q()]}function z(){return document.querySelector(".game__canvas")}function H(){return document.querySelector(".game__score")}function L(){return document.querySelector(".game__start-hint")}function q(){return document.querySelector(".game__reset-hint")}const B=32,J=20,U=Math.floor(o/2)-B/2,$=600,Q=8*(o/3)/($*$),K=-$*Q/2,W=1.5625,Z=2.5,nn=.7,tn=K,en=.35,on=250,un=3e3,cn=180;function rn(){return{l:0,p:W,h:Z,v:0,width:B,height:J,x:U,y:5*-J,velocityY:0,M:!0,_:0,isFrozen:!0}}function an(n){return i(n)-J}function fn(n){return n.T.y===an(n)}function sn(n){n.status!==f.o||n.T.M||(n.T.velocityY=K,n.T.l=1,n.T.M=!0,n.T._=n.S,E(n.k,w(n.A.R)))}function mn(n){n.T.isFrozen||(n.status===f.t||n.status===f.o?(n.T.M&&(gn(n),ln(n),function(n){n.T.P&&!n.T.M&&(sn(n),n.T.P=!1)}(n)),function(n){if(!n.T.M){const o=n.j.filter((n=>!n.O));if(o.length>0){const i=(t=o,e=n.T.x,function(n,t=n=>n){return n.reduce(((n,e)=>t(e)<t(n)?e:n))}(t,(n=>Math.abs(n.x-e)))),u=n.T.p<0!==i.I;n.T.p*=u?-1:1}}var t,e}(n)):n.status===f.i&&(gn(n),ln(n)))}function gn(n){var t,e,o;n.T.velocityY=(t=n.T.velocityY,e=Q,o=n.F,t+e*o),n.T.y=_(n.T.y,n.T.velocityY,Q,n.F);n.T.velocityY/K<en&&(n.status===f.i?n.T.l=6:n.T.l=2)}function ln(n){(function(n){return n.T.y>an(n)})(n)&&(n.T.y=an(n),n.T.velocityY=0,n.T.M=!1,n.T.l=0,n.T.v=0,n.status===f.i&&(n.T.l=4))}function dn(n){const t=d(on,un);n.X=setTimeout((()=>{n.T.M||(n.T.l=3),n.X=setTimeout((()=>{n.T.M||(n.T.l=0),dn(n)}),cn)}),t)}function pn(n){n.T.velocityY=tn,n.T.l=5,function(n){clearTimeout(n.X)}(n)}const hn=10,wn=10,yn=2.67,xn=2.67,bn=hn*yn*.5,vn=.4,Mn=3,_n=1,Tn=.15,Sn=.67;function kn(n){return function(n,t){const e=i(n)-J/2-wn/2,u=n.N?r:c,a=M(bn,u)*vn;return{p:yn,h:xn,v:0,Y:t?a:-a,width:hn,height:wn,x:t?-hn:o,y:e,velocityX:t?u:-u,I:t,O:!1}}(n,h())}const Rn=10,En=10,An=U/a,Pn=2,jn=2,On=.4,In=Rn*Pn*.5,Fn=[{l:0,velocityX:u,D:.85},{l:1,velocityX:.18,D:.95},{l:2,velocityX:.235,D:1.1}],Xn=[.4,.4,.2],Nn=50,Yn=.8,Dn=.25,Cn=.6,Gn=60;function Vn(n){return i(n)-J/2-En/2}function zn(n){return Math.min(...function(n,t,e){const o=.5*e,i=t,u=i*i-4*o*-n;if(u<0)return null;{const n=Math.sqrt(u);return[(-i+n)/(2*o),(-i-n)/(2*o)]}}(Vn(n)-(an(n)+J),K,Q))}function Hn(n){const t=n.C.filter((t=>t.G<=n.S));var e,o,i;n.C=n.C.filter((t=>t.G>n.S)),n.j.push(...t),e=()=>{!function(n,t){const e=w(n.A.V),o=Math.max(...t.map((n=>n.D))),i=d(-.05,.05),u=o+i;E(n.k,e,u,Cn)}(n,t)},o=Gn,(i=t.length)>0&&function n(t){e(t),t+1<i&&setTimeout((()=>n(t+1)),o)}(0)}function Ln(n){const t=function(n){function t(n){return n<1e4?[.1,.3,.6]:n<25e3?[.45,.4,.15]:n<4e4?[.65,.3,.05]:[.9,.1,0]}const e=[1*$,2.5*$,3.5*$],o=[2.5*$,3.5*$,7*$],i=y(t(n));return d(e[i],o[i])}(n.S-n.H);n.L=setTimeout((()=>{if(n.status!==f.o)return;const t=n.S+An;!function(n,t){const e=(s=n.S-n.H,s<1e4?1+y([.9,.1]):s<15e3?1+y([.7,.2,.05,.05]):s<3e4?1+y([.5,.2,.1,.1]):1+y([.4,.2,.15,.15,.05,.05])),i=function(n){const t=h(),e=x(Fn,Xn).velocityX;return m(n,(()=>{const o=g(Math.pow(Yn,1/n))?t:!t,i=g(Math.pow(Dn,1/n))?e:x(Fn,Xn).velocityX;return o?i:-i}))}(e),u=(f=i,f.reduce(((n,t)=>{const e=n.get(t)??0;return n.set(t,e+1),n}),new Map)),c=new Map(i.map((e=>[e,qn(n,t,e)]))),r=function(n,t=(n,t)=>[n,t]){return new Map(Array.from(n,(([n,e])=>t(n,e))))}(c,((n,[t,e])=>[n,function(n,t,e,o){const i=80;for(let u=e;u>0;u--){const e=p(n,t,u,o,i);if(e)return e}return[]}(t,e,u.get(n),Rn*Pn/Math.abs(n))])),a=Array.from(r,(([t,e])=>e.map((e=>function(n,t,e){const i=Fn.find((n=>Math.abs(e)===n.velocityX)),u=e>=0,c=M(In,e)*On;return{G:t,l:i.l,p:Pn,h:jn,v:0,Y:c,width:Rn,height:En,x:u?-Rn:o,y:Vn(n),velocityX:e,I:u,O:!1,D:i.D}}(n,e,t))))).flat();var f;var s;n.q.push(t),n.C.push(...a)}(n,t),function(n,t){if(!g(n.N?Sn:Tn))return;const e=kn(n),o=n.N?r:c,i=t-U/o,u=l(-$,2*$);e.G=i+u,n.B.push(e)}(n,t),Ln(n)}),t)}function qn(n,t,o){const i=Nn+e,u=zn(n),c=t+$-u-i,r=U+B+Rn;return[t+u+i-U/Math.abs(o),c-r/Math.abs(o)]}const Bn=4,Jn=400,Un=800,$n=60;function Qn(n){X(n.J),N(n),O(),dn(n),setTimeout((()=>{n.T.isFrozen=!1}),2e3)}function Kn(i){for(let n=i.U;n>0;n-=e)i.F=Math.min(n,e),i.S+=i.F,Wn(i),i.$+=1;i.K+=1,i.W-i.Z>=1e3&&(i.nn=i.K,i.tn=i.$,i.K=0,i.$=0,i.Z=i.W),function(e){(function(n){n.en.clearRect(0,0,o,n.height)})(e),function(n){A(n.en,n.images.T[n.T.l],n.T.x,n.T.y,n.T.width,n.T.height,n.T.p,n.T.h,n.T.v),n.un&&(n.en.strokeStyle=t,n.en.strokeRect(n.T.x,n.T.y,B,J))}(e),function(n){for(const e of n.cn)A(n.en,n.images.rn,e.x,e.y,e.width,e.height,e.p,e.h,e.v),n.un&&(n.en.strokeStyle=t,n.en.strokeRect(e.x,e.y,e.width,e.height))}(e),function(n){for(const e of n.j)A(n.en,n.images.an[e.l],e.x,e.y,e.width,e.height,e.p,e.h,e.v),n.un&&(n.en.strokeStyle=t,n.en.strokeRect(e.x,e.y,Rn,En))}(e),function(n){n.fn>0&&(n.en.fillStyle=`rgba(255, 255, 255, ${n.fn})`,n.en.fillRect(0,0,o,n.height))}(e),function(e){if(e.un){const i=[performance.memory&&(performance.memory.usedJSHeapSize/1024/1024).toFixed(1)+" MB",Math.round(e.nn)+" F/S",Math.round(e.tn)+" U/S"].filter(Boolean).join("   ");e.en.font=n,e.en.fillStyle=t,e.en.fillText(i,8,e.height-8),e.en.strokeStyle=t,e.en.strokeRect(0,0,o,e.height)}}(e)}(i),requestAnimationFrame((n=>{i.U=n-i.W,i.W=n,Kn(i)}))}function Wn(n){!function(n){const t=n.q.length>0&&n.q[0]<=n.S;n.sn&&t&&(sn(n),n.q.shift())}(n),mn(n),Hn(n),function(n){const t=n.B.filter((t=>t.G<=n.S));n.B=n.B.filter((t=>t.G>n.S)),n.cn.push(...t)}(n),function(n){for(const t of n.j)t.x=_(t.x,t.velocityX,0,n.F),t.v=T(t.v,t.Y,n.F)}(n),function(n){for(const t of n.cn)t.x=_(t.x,t.velocityX,0,n.F),t.v=T(t.v,t.Y,n.F)}(n),function(n){const t=n.mn;(function(n){if(n.N)return;if(n.status!==f.o)return;const t=n.j.filter((n=>{const t=!n.O,e=n.I&&n.x>U+B,o=!n.I&&n.x+Rn<U;return t&&(e||o)}));t.forEach((n=>n.O=!0)),n.mn+=t.length})(n),function(n){if(n.status!==f.o)return;const t=n.N?_n:Mn,e=n.cn.filter((t=>{const e=!t.O,o=b(n.T,t);return e&&o}));e.forEach((n=>n.O=!0)),n.cn=n.cn.filter((n=>!e.includes(n))),n.mn+=e.length*t}(n);const e=n.mn-t;for(let o=0;o<e;o++)n.gn((()=>{n.status===f.o&&(E(n.k,w(n.A.mn)),I(t+o+1))}))}(n),function(n){n.status===f.o?function(n){for(const t of n.j)if(b(n.T,t))return!0;return!1}(n)&&(!function(n){n.mn>n.ln&&(n.ln=n.mn,t=n.mn,localStorage.setItem(P,t));var t}(n),function(n){clearTimeout(n.L)}(n),function(n){n.fn=1}(n),pn(n),n.status=f.i,E(n.k,n.A.dn)):n.status===f.i&&function(n){return 0===n.j.length&&0===n.cn.length}(n)&&(n.status=f.u,F(n.mn,n.ln))}(n),function(n){n.j=n.j.filter(v)}(n),function(n){n.cn=n.cn.filter(v)}(n),function(n){n.status===f.t&&fn(n)&&!n.pn?n.pn=setTimeout((()=>{n.status===f.t&&(!function(){const n=L();D(n),n.classList.add("spawn-and-shrug-bubble")}(),E(n.k,w(n.A.mn)))}),Un):n.status!==f.u||n.hn||(n.hn=setTimeout((()=>{n.status===f.u&&(!function(){const n=q();D(n),n.classList.add("spawn-and-shrug-bubble")}(),E(n.k,w(n.A.mn)))}),Un))}(n),function(n){n.fn>0&&(n.fn-=n.F/Jn,n.fn<0&&(n.fn=0))}(n)}async function Zn(n){await async function(n){"suspended"!==n.k.state||n.wn||await n.k.resume()}(n),function(n){n.status===f.t&&fn(n)?(n.status=f.o,n.H=n.yn??n.S,Ln(n),I(n.mn)):n.status===f.u&&(n.status=f.t,n.T=rn(),n.mn=0,n.J=(n.J+1)%Bn,n.pn=null,n.hn=null,Qn(n))}(n),sn(n),function(n){const t=n.S-n.T._;n.status===f.o&&t>$*nn&&(n.T.P=!0)}(n)}function nt(n,t,e){const o=n.height,[u,c]=tt(t,e);n.width=u,n.height=c,function(n){n.cn.map((t=>{t.y=i(n)-J/2-wn/2}))}(n),function(n){n.j.map((t=>{t.y=Vn(n)}))}(n),function(n,t){const e=i({height:t}),o=n.T.y,u=i(n);n.T.y=u-(e-o)}(n,o),N(n)}function tt(n,t){return[o,o*t/n]}function et(n){n.stopPropagation()}function ot(n,t){const[e,i]=j(),u=Math.floor(e*window.devicePixelRatio),c=Math.floor(i*window.devicePixelRatio),r=u/o;n.style.width=e+"px",n.style.height=i+"px",n.width=Math.floor(u),n.height=Math.floor(c),n.getContext("2d").scale(r,r),t&&nt(t,n.width,n.height)}window.addEventListener("load",(async function(){const n=performance.now(),t=z(),e=document.querySelector(".info-button"),o=document.querySelector(".info-modal"),i=document.querySelector(".info-modal__card"),u=t.getContext("2d"),c=new AudioContext,{A:r,images:a}=await async function(n){const t={R:[],mn:[],V:[]},e=[R(n,"./sfx/die.mp3").then((n=>t.dn=n)),R(n,"./sfx/eat.wav").then((n=>t.xn=n)),R(n,"./sfx/jump-0.mp3").then((n=>t.R[0]=n)),R(n,"./sfx/jump-1.mp3").then((n=>t.R[1]=n)),R(n,"./sfx/jump-2.mp3").then((n=>t.R[2]=n)),R(n,"./sfx/jump-3.mp3").then((n=>t.R[3]=n)),R(n,"./sfx/jump-4.mp3").then((n=>t.R[4]=n)),R(n,"./sfx/jump-5.mp3").then((n=>t.R[5]=n)),R(n,"./sfx/score-0.wav").then((n=>t.mn[0]=n)),R(n,"./sfx/score-1.wav").then((n=>t.mn[1]=n)),R(n,"./sfx/score-2.wav").then((n=>t.mn[2]=n)),R(n,"./sfx/score-3.wav").then((n=>t.mn[3]=n)),R(n,"./sfx/shoot-0.wav").then((n=>t.V[0]=n)),R(n,"./sfx/shoot-1.wav").then((n=>t.V[1]=n))],o={T:[],an:[],background:[]},i=[S("./img/player-0.png").then((n=>o.T[0]=n)),S("./img/player-1.png").then((n=>o.T[1]=n)),S("./img/player-2.png").then((n=>o.T[2]=n)),S("./img/player-3.png").then((n=>o.T[3]=n)),S("./img/player-4.png").then((n=>o.T[4]=n)),S("./img/player-5.png").then((n=>o.T[5]=n)),S("./img/player-6.png").then((n=>o.T[6]=n)),S("./img/enemy-0.png").then((n=>o.an[0]=n)),S("./img/enemy-1.png").then((n=>o.an[1]=n)),S("./img/enemy-2.png").then((n=>o.an[2]=n)),S("./img/snack.png").then((n=>o.rn=n)),k("./img/background-0.png"),k("./img/background-1.png"),k("./img/background-2.png"),k("./img/background-3.png")];return await Promise.all([...e,...i]),{A:t,images:o}}(c),m=new URL(location),g="true"===m.searchParams.get("auto"),l="true"===m.searchParams.get("debug"),d="true"===m.searchParams.get("skip"),p="true"===m.searchParams.get("mute"),h="true"===m.searchParams.get("hungry"),w=m.searchParams.get("start"),y=m.searchParams.get("score"),x=m.searchParams.get("background"),b=w?Number.parseInt(w):void 0,v=y?Number.parseInt(y):0,M=x?Number.parseInt(x):1,_=localStorage.getItem(P)??0,[T,E]=j(),A=function(n,t,e,o,i,u,c,r,a,m,g,l,d,p){const[h,w]=tt(i,u);return{sn:r,un:a,wn:m,N:g,yn:l,en:n,k:t,A:e,images:o,width:h,height:w,W:0,U:0,S:0,F:0,nn:0,K:0,tn:0,$:0,Z:0,status:f.t,mn:d,ln:c,T:rn(),j:[],C:[],cn:[],B:[],q:[],H:0,gn:s($n),bn:null,L:null,X:null,pn:null,hn:null,fn:0,J:p}}(u,c,r,a,T,E,_,g,l,p,h,b,v,M),O=performance.now()-n;setTimeout((()=>{!function(n,t,e,o,i,u){ot(e),D(e),Qn(n),requestAnimationFrame((t=>{n.U=0,n.W=t,Kn(n)})),window.addEventListener("resize",(()=>ot(e,n)),{passive:!0}),document.addEventListener("keydown",function(n){async function t(o){" "===o.key&&(await Zn(n),document.removeEventListener("keydown",t),document.addEventListener("keyup",e))}async function e(n){" "===n.key&&(document.removeEventListener("keyup",e),document.addEventListener("keydown",t))}return t}(n)),document.addEventListener("keydown",function(n){return t=>{"Escape"===t.key&&Y(n)}}(i),{passive:!0}),document.addEventListener("visibilitychange",function(n,t){return()=>{!function(n,t){document.hidden?n.suspend():t.wn||n.resume()}(n,t)}}(t,n)),e.addEventListener("pointerup",function(n,t){async function e(){await Zn(t),n.addEventListener("pointerdown",o,{passive:!0})}async function o(){await Zn(t)}return e}(e,n),{once:!0,passive:!0}),o.addEventListener("click",function(n){function t(){D(n)}return t}(i),{passive:!0}),i.addEventListener("click",function(n){function t(){Y(n)}return t}(i),{passive:!0}),u.addEventListener("click",et,{passive:!0})}(A,c,t,e,o,i)}),d?0:Math.max(2e3-O,0))}))}();
