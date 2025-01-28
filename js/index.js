!function(){"use strict";const n="9px sans-serif",t="#0f0",e=1e3/29,o=360;function u(n){return n.height/2+68}const i=600,c=.125,r=.095,a=c,s=Math.min(c,.18,.235,r,a),f=1.5*i,m=1.5*i+i,g=Object.freeze({t:"NOT_STARTED",o:"IN_PROGRESS",u:"GAME_OVER",i:"READY_FOR_RESET"});function l(n,t=1/0){const e=[];let o=!1;function u(){if(o||0===e.length)return;o=!0;const{m:t,resolve:i,reject:c}=e.shift();Promise.resolve().then((()=>t())).then(i).catch(c).finally((()=>{setTimeout((()=>{o=!1,u()}),n)}))}return function(n){return e.length>=t?Promise.reject(Error("Queue size limit reached")):new Promise(((t,o)=>{e.push({m:n,resolve:t,reject:o}),u()}))}}function d(n,t=n=>{}){return Array.from({length:n},((n,e)=>t(e)))}function p(n,t,e,o,u){const i=function(n,t,e){return Math.max(Math.min(n,e),t)}(n,t,e);return function(n,t,e,o,u){return(n-t)*(u-o)/(e-t)+o}(i,t,e,o,u)}function h(n){return Math.random()<n}function w(n,t){return Math.random()*(t-n)+n}function M(){return h(.5)}function y(n){return n[(t=0,e=n.length,Math.floor(Math.random()*(e-t))+t)];var t,e}function v(n){const t=w(0,n.reduce(((n,t)=>n+t),0));let e=0;for(let o=0;o<n.length;o++)if(e+=n[o],t<e)return o}function x(n,t){return n[v(t)]}function b(n,t){return n.x<t.x+t.width&&n.y<t.y+t.height&&t.x<n.x+n.width&&t.y<n.y+n.height}function T(n){return-n.width<n.x&&n.x<o}function _(n,t){return t/n}function S(n,t,e,o){return n+t*o+.5*e*o*o}function k(n,t,e){return n+t*e}function R(n){return new Promise(((t,e)=>{const o=new Image;o.onload=()=>t(o),o.onerror=n=>e(n),o.src=n}))}function E(n){return R(n).catch(console.error)}async function A(n,t){const e=await fetch(t),o=await e.arrayBuffer();return await n.decodeAudioData(o)}function j(n,t,e=1,o=1){if("running"===n.state){const u=n.createBufferSource();u.buffer=t,u.playbackRate.value=e;const i=n.createGain();i.gain.value=o,u.connect(i),i.connect(n.destination),u.start()}}function P(n,t,e,o,u,i,c=1,r=1,a=0){n.save(),n.translate(e+.5*u,o+.5*i),n.scale(c,r),n.rotate(a),n.drawImage(t,.5*-u,.5*-i,u,i),n.restore()}const O="high-score";function I(){const n=window.matchMedia("(min-aspect-ratio: 1/1) and (min-width: 900px)").matches?64:0;return[Math.min(window.innerWidth,window.innerHeight)-2*n,window.innerHeight-2*n]}function N(){V().forEach(G),z().forEach(D),H().forEach(D),function(){const n=B();D(n),n.classList.remove("spawn-and-shrug-bubble")}(),document.querySelector(".loading").classList.add("loading--completed")}function F(n){V().forEach(D),z().forEach(G),H().forEach(D),q().textContent=n}function X(n,t){V().forEach(D),z().forEach(D),H().forEach(G),function(){const n=J();D(n),n.classList.remove("spawn-and-shrug-bubble")}(),document.querySelector(".game__result-score").textContent=n,document.querySelector(".game__result-best").textContent=t}function Y(n){const t=document.querySelector(".game__canvas-container");t.classList.add("game__canvas-container--bg-"+n),setTimeout((()=>{t.classList.remove(...[0,1,2,3].map((n=>"game__canvas-container--bg-"+n))),L().style.backgroundImage=`url('../img/background-${n}.png')`}),2e3)}function C(n){const[t,e]=I(),o=[B(),J()],i=t/n.width,c=e/n.height;o.forEach((t=>{const o=n.width/2+20,r=u(n)-16;t.style.left=o*i+"px",t.style.bottom=e-r*c+"px"}))}function D(n){n.style.visibility="hidden"}function G(n){n.style.visibility="visible"}function V(){return[document.querySelector(".game__title"),document.querySelector(".info-button"),B()]}function z(){return[q()]}function H(){return[document.querySelector(".game__result"),J()]}function L(){return document.querySelector(".game__canvas")}function q(){return document.querySelector(".game__score")}function B(){return document.querySelector(".game__start-hint")}function J(){return document.querySelector(".game__reset-hint")}const U=20,$=20,Q=Math.floor(o/2)-U/2,K=8*(o/3)/(i*i),W=-i*K/2,Z=2.5,nn=2.5,tn=-6,en=0,on=1,un=2,cn=3,rn=4,an=.7,sn=W,fn=2*Math.abs(sn)/K,mn=250,gn=3e3,ln=180;function dn(){return{l:un,p:Z,h:nn,M:0,width:U,height:$,x:Q,y:-$*nn,velocityY:0,v:!0,T:0,isFrozen:!0}}function pn(n){return u(n)-$}function hn(n){return n._.y===pn(n)}function wn(n){n.status!==g.o||n._.v||(n._.velocityY=W,n._.l=un,n._.v=!0,n._.T=n.S,j(n.k,y(n.A.R)))}function Mn(n){n._.isFrozen||(n.status===g.t||n.status===g.o?(n._.v&&(yn(n),vn(n),function(n){n._.j&&!n._.v&&(wn(n),n._.j=!1)}(n)),function(n){if(!n._.v){const o=n.P.filter((n=>!n.O));if(o.length>0){const u=(t=o,e=n._.x,function(n,t=n=>n){return n.reduce(((n,e)=>t(e)<t(n)?e:n))}(t,(n=>Math.abs(n.x-e)))),i=n._.p<0!==u.I;n._.p*=i?-1:1}}var t,e}(n)):n.status===g.u&&(yn(n),function(n){const t=n.S-n._.N,e=p(t,0,fn,0,1),o=p(e,.35,.75,0,-.5*Math.PI);n._.M=o}(n),vn(n)))}function yn(n){var t,e,o;n._.velocityY=(t=n._.velocityY,e=K,o=n.F,t+e*o),n._.y=S(n._.y,n._.velocityY,K,n.F)}function vn(n){(function(n){return n._.y>pn(n)})(n)&&(n._.y=pn(n),n._.velocityY=0,n._.v=!1,n._.l=en,n._.M=0,n.status===g.u&&(n._.l=rn))}function xn(n){const t=w(mn,gn);n.X=setTimeout((()=>{n._.v||(n._.l=on),n.X=setTimeout((()=>{n._.v||(n._.l=en),xn(n)}),ln)}),t)}function bn(n){n._.velocityY=sn,n._.l=cn,n._.M=0,n._.N=n.S,function(n){clearTimeout(n.X)}(n)}const Tn=10,_n=10,Sn=2.67,kn=2.67,Rn=Tn*Sn*.5,En=.4,An=3,jn=1,Pn=.2,On=.7;function In(n){return function(n,t){const e=u(n)-$/2-_n/2,i=n.Y?a:r,c=_(Rn,i)*En;return{p:Sn,h:kn,M:0,C:t?c:-c,width:Tn,height:_n,x:t?-Tn:o,y:e,velocityX:t?i:-i,I:t,O:!1}}(n,M())}function Nn(n,t){if(n.status!==g.o)return;if(!h(n.Y?On:Pn))return;const e=In(n),o=function(n,t,e){const o=n+(t-n)*e,u=Math.random();return u<e?n+Math.sqrt(u*(t-n)*(o-n)):t-Math.sqrt((1-u)*(t-n)*(t-o))}(-f,m,.5);e.D=t-Q/Math.abs(e.velocityX)+o,e.D<n.S?console.error("Cannot create future snack in the past. This should never happen. The caller has provided a jumpTime that is NOT far enough into the future."):n.G.push(e)}const Fn=10,Xn=10,Yn=Q/s+f,Cn=2,Dn=2,Gn=.4,Vn=Fn*Cn*.5,zn=[{l:0,velocityX:c,V:.85},{l:1,velocityX:.18,V:.95},{l:2,velocityX:.235,V:1.1}],Hn=[.45,.35,.2],Ln=50,qn=.8,Bn=.25,Jn=.6,Un=60;function $n(n){return u(n)-$/2-Xn/2}function Qn(n){return Math.min(...function(n,t,e){const o=.5*e,u=t,i=u*u-4*o*-n;if(i<0)return null;{const n=Math.sqrt(i);return[(-u+n)/(2*o),(-u-n)/(2*o)]}}($n(n)-(pn(n)+$),W,K))}function Kn(n){const t=n.H.filter((t=>t.D<=n.S));var e,o,u;n.H=n.H.filter((t=>t.D>n.S)),n.P.push(...t),e=()=>{!function(n,t){const e=y(n.A.L),o=Math.max(...t.map((n=>n.V))),u=w(-.05,.05),i=o+u;j(n.k,e,i,Jn)}(n,t)},o=Un,(u=t.length)>0&&function n(t){e(t),t+1<u&&setTimeout((()=>n(t+1)),o)}(0)}function Wn(n){const t=function(n){function t(n){return n<1e4?[.1,.3,.6]:n<25e3?[.45,.4,.15]:n<4e4?[.65,.3,.05]:[.9,.1,0]}const e=[1*i,2.5*i,3.5*i],o=[2.5*i,3.5*i,7*i],u=v(t(n));return w(e[u],o[u])}(n.S-n.q);n.B=setTimeout((()=>{if(n.status!==g.o)return;const t=n.S+Yn;!function(n,t){const e=(f=n.S-n.q,f<7e3?1+v([.9,.1]):f<15e3?1+v([.7,.2,.05,.05]):f<3e4?1+v([.5,.2,.1,.1]):1+v([.4,.2,.15,.15,.05,.05])),u=function(n){const t=M(),e=x(zn,Hn).velocityX;return d(n,(()=>{const o=h(Math.pow(qn,1/n))?t:!t,u=h(Math.pow(Bn,1/n))?e:x(zn,Hn).velocityX;return o?u:-u}))}(e),i=(s=u,s.reduce(((n,t)=>{const e=n.get(t)??0;return n.set(t,e+1),n}),new Map)),c=new Map(u.map((e=>[e,Zn(n,t,e)]))),r=function(n,t=(n,t)=>[n,t]){return new Map(Array.from(n,(([n,e])=>t(n,e))))}(c,((n,[t,e])=>[n,function(n,t,e,o){const u=Math.floor((t-n)/o)+1,i=Math.min(e,u),c=function(n){const t=n.slice();for(let n=t.length-1;n>=0;n--){const e=Math.floor(Math.random()*(n+1));[t[n],t[e]]=[t[e],t[n]]}return t}(d(u,(n=>n))).slice(0,i).sort(((n,t)=>n-t));if(0===c.length)return[];const r=c[0],a=c[c.length-1],s=w(0,t-n-(a-r)*o);return c.map((t=>n+(t-r)*o+s))}(t,e,i.get(n),(Fn*Cn+2)/Math.abs(n))])),a=Array.from(r,(([t,e])=>e.map((e=>function(n,t,e){const u=zn.find((n=>Math.abs(e)===n.velocityX)),i=e>=0,c=_(Vn,e)*Gn;return{D:t,l:u.l,p:Cn,h:Dn,M:0,C:c,width:Fn,height:Xn,x:i?-Fn:o,y:$n(n),velocityX:e,I:i,O:!1,V:u.V}}(n,e,t))))).flat();var s;var f;n.J.push(t),n.H.push(...a)}(n,t),Nn(n,t),Wn(n)}),t)}function Zn(n,t,o){const u=Ln+e,c=Qn(n),r=t+i-c-u,a=Q+U+Fn;return[t+c+u-Q/Math.abs(o),r-a/Math.abs(o)]}const nt=3,tt=400,et=800,ot=60;function ut(n){Y(n.U),C(n),N(),xn(n),setTimeout((()=>{n._.isFrozen=!1}),2e3)}function it(u){for(let n=u.$;n>0;n-=e)u.F=Math.min(n,e),u.S+=u.F,ct(u),u.K+=1;u.W+=1,u.Z-u.nn>=1e3&&(u.tn=u.W,u.en=u.K,u.W=0,u.K=0,u.nn=u.Z),function(e){(function(n){n.un.clearRect(0,0,o,n.height)})(e),function(n){P(n.un,n.images._[n._.l],n._.x,n._.y+tn,n._.width,n._.height,n._.p,n._.h,n._.M),n.cn&&(n.un.strokeStyle=t,n.un.strokeRect(n._.x,n._.y,U,$))}(e),function(n){for(const e of n.rn)P(n.un,n.images.an,e.x,e.y,e.width,e.height,e.p,e.h,e.M),n.cn&&(n.un.strokeStyle=t,n.un.strokeRect(e.x,e.y,e.width,e.height))}(e),function(n){for(const e of n.P)P(n.un,n.images.sn[e.l],e.x,e.y,e.width,e.height,e.p,e.h,e.M),n.cn&&(n.un.strokeStyle=t,n.un.strokeRect(e.x,e.y,Fn,Xn))}(e),function(n){n.fn>0&&(n.un.fillStyle=`rgba(255, 255, 255, ${n.fn})`,n.un.fillRect(0,0,o,n.height))}(e),function(e){if(e.cn){const u=[performance.memory&&(performance.memory.usedJSHeapSize/1024/1024).toFixed(1)+" MB",Math.round(e.tn)+" F/S",Math.round(e.en)+" U/S"].filter(Boolean).join("   ");e.un.font=n,e.un.fillStyle=t,e.un.fillText(u,8,e.height-8),e.un.strokeStyle=t,e.un.strokeRect(0,0,o,e.height)}}(e)}(u),requestAnimationFrame((n=>{u.$=n-u.Z,u.Z=n,it(u)}))}function ct(n){!function(n){const t=n.J.length>0&&n.J[0]<=n.S;n.mn&&t&&(wn(n),n.J.shift())}(n),Mn(n),Kn(n),function(n){const t=n.G.filter((t=>t.D<=n.S)).filter((t=>{const e=(Tn*Sn+4)/Math.abs(t.velocityX),o=[...n.P,...n.H].filter((n=>Math.abs(n.velocityX-t.velocityX)<Number.EPSILON));return[...n.rn,...o].every((n=>Math.abs(t.D-n.D)>=e))}));n.G=n.G.filter((t=>t.D>n.S)),n.rn.push(...t)}(n),function(n){for(const t of n.P)t.x=S(t.x,t.velocityX,0,n.F),t.M=k(t.M,t.C,n.F)}(n),function(n){for(const t of n.rn)t.x=S(t.x,t.velocityX,0,n.F),t.M=k(t.M,t.C,n.F)}(n),function(n){const t=n.gn;(function(n){if(n.Y)return;if(n.status!==g.o)return;const t=n.P.filter((n=>{const t=!n.O,e=n.I&&n.x>Q+U,o=!n.I&&n.x+Fn<Q;return t&&(e||o)}));t.forEach((n=>n.O=!0)),n.gn+=t.length})(n),function(n){if(n.status!==g.o)return;const t=n.Y?jn:An,e=n.rn.filter((t=>{const e=!t.O,o=b(n._,t);return e&&o}));e.forEach((n=>n.O=!0)),n.rn=n.rn.filter((n=>!e.includes(n))),n.gn+=e.length*t}(n);const e=n.gn-t;for(let o=0;o<e;o++)n.ln((()=>{n.status===g.o&&(j(n.k,y(n.A.gn)),F(t+o+1))}))}(n),function(n){n.status===g.o?function(n){for(const t of n.P)if(b(n._,t))return!0;return!1}(n)&&(!function(n){n.gn>n.dn&&(n.dn=n.gn,t=n.gn,localStorage.setItem(O,t));var t}(n),function(n){clearTimeout(n.B)}(n),function(n){n.fn=1}(n),bn(n),n.status=g.u,j(n.k,n.A.pn)):n.status===g.u&&function(n){return 0===n.P.length&&0===n.rn.length}(n)&&(n.status=g.i,X(n.gn,n.dn))}(n),function(n){n.P=n.P.filter(T)}(n),function(n){n.rn=n.rn.filter(T)}(n),function(n){n.status===g.t&&hn(n)&&!n.hn?n.hn=setTimeout((()=>{n.status===g.t&&(!function(){const n=B();G(n),n.classList.add("spawn-and-shrug-bubble")}(),j(n.k,y(n.A.gn)))}),et):n.status!==g.i||n.wn||(n.wn=setTimeout((()=>{n.status===g.i&&(!function(){const n=J();G(n),n.classList.add("spawn-and-shrug-bubble")}(),j(n.k,y(n.A.gn)))}),et))}(n),function(n){n.fn>0&&(n.fn-=n.F/tt,n.fn<0&&(n.fn=0))}(n)}async function rt(n){await async function(n){"suspended"!==n.k.state||n.Mn||await n.k.resume()}(n),function(n){n.status===g.t&&hn(n)?(n.status=g.o,n.q=n.yn??n.S,Wn(n),F(n.gn)):n.status===g.i&&(n.status=g.t,n._=dn(),n.gn=0,n.U=(n.U+1)%nt,n.hn=null,n.wn=null,ut(n))}(n),wn(n),function(n){const t=n.S-n._.T;n.status===g.o&&t>i*an&&(n._.j=!0)}(n)}function at(n,t,e){const o=n.height,[i,c]=st(t,e);n.width=i,n.height=c,function(n){n.rn.map((t=>{t.y=u(n)-$/2-_n/2}))}(n),function(n){n.P.map((t=>{t.y=$n(n)}))}(n),function(n,t){const e=u({height:t}),o=n._.y,i=u(n);n._.y=i-(e-o)}(n,o),C(n)}function st(n,t){return[o,o*t/n]}function ft(n){n.stopPropagation()}function mt(n,t){const[e,u]=I(),i=Math.floor(e*window.devicePixelRatio),c=Math.floor(u*window.devicePixelRatio),r=i/o;n.style.width=e+"px",n.style.height=u+"px",n.width=Math.floor(i),n.height=Math.floor(c),n.getContext("2d").scale(r,r),t&&at(t,n.width,n.height)}window.addEventListener("load",(async function(){const n=performance.now(),t=L(),e=document.querySelector(".info-button"),o=document.querySelector(".info-modal"),u=document.querySelector(".info-modal__card"),i=t.getContext("2d"),c=new AudioContext,{A:r,images:a}=await async function(n){const t={R:[],gn:[],L:[]},e=[A(n,"./sfx/die.mp3").then((n=>t.pn=n)),A(n,"./sfx/eat.wav").then((n=>t.vn=n)),A(n,"./sfx/jump-0.mp3").then((n=>t.R[0]=n)),A(n,"./sfx/jump-1.mp3").then((n=>t.R[1]=n)),A(n,"./sfx/jump-2.mp3").then((n=>t.R[2]=n)),A(n,"./sfx/jump-3.mp3").then((n=>t.R[3]=n)),A(n,"./sfx/jump-4.mp3").then((n=>t.R[4]=n)),A(n,"./sfx/jump-5.mp3").then((n=>t.R[5]=n)),A(n,"./sfx/score-0.wav").then((n=>t.gn[0]=n)),A(n,"./sfx/score-1.wav").then((n=>t.gn[1]=n)),A(n,"./sfx/score-2.wav").then((n=>t.gn[2]=n)),A(n,"./sfx/score-3.wav").then((n=>t.gn[3]=n)),A(n,"./sfx/shoot-0.wav").then((n=>t.L[0]=n)),A(n,"./sfx/shoot-1.wav").then((n=>t.L[1]=n))],o={_:[],sn:[],background:[]},u=[R("./img/player-0.png").then((n=>o._[0]=n)),R("./img/player-1.png").then((n=>o._[1]=n)),R("./img/player-2.png").then((n=>o._[2]=n)),R("./img/player-3.png").then((n=>o._[3]=n)),R("./img/player-4.png").then((n=>o._[4]=n)),R("./img/enemy-0.png").then((n=>o.sn[0]=n)),R("./img/enemy-1.png").then((n=>o.sn[1]=n)),R("./img/enemy-2.png").then((n=>o.sn[2]=n)),R("./img/snack.png").then((n=>o.an=n)),E("./img/background-0.png"),E("./img/background-1.png"),E("./img/background-2.png")];return await Promise.all([...e,...u]),{A:t,images:o}}(c),s=new URL(location),f="true"===s.searchParams.get("auto"),m="true"===s.searchParams.get("debug"),d="true"===s.searchParams.get("skip"),p="true"===s.searchParams.get("mute"),h="true"===s.searchParams.get("hungry"),w=s.searchParams.get("start"),M=s.searchParams.get("score"),y=s.searchParams.get("background"),v=w?Number.parseInt(w):void 0,x=M?Number.parseInt(M):0,b=y?Number.parseInt(y):0,T=localStorage.getItem(O)??0,[_,S]=I(),k=function(n,t,e,o,u,i,c,r,a,s,f,m,d,p){const[h,w]=st(u,i);return{mn:r,cn:a,Mn:s,Y:f,yn:m,un:n,k:t,A:e,images:o,width:h,height:w,Z:0,$:0,S:0,F:0,tn:0,W:0,en:0,K:0,nn:0,status:g.t,gn:d,dn:c,_:dn(),P:[],H:[],rn:[],G:[],J:[],q:0,ln:l(ot),xn:null,B:null,X:null,hn:null,wn:null,fn:0,U:p}}(i,c,r,a,_,S,T,f,m,p,h,v,x,b),j=performance.now()-n;setTimeout((()=>{!function(n,t,e,o,u,i){mt(e),G(e),ut(n),requestAnimationFrame((t=>{n.$=0,n.Z=t,it(n)})),window.addEventListener("resize",(()=>mt(e,n)),{passive:!0}),document.addEventListener("keydown",function(n){async function t(o){" "===o.key&&(await rt(n),document.removeEventListener("keydown",t),document.addEventListener("keyup",e))}async function e(n){" "===n.key&&(document.removeEventListener("keyup",e),document.addEventListener("keydown",t))}return t}(n)),document.addEventListener("keydown",function(n){return t=>{"Escape"===t.key&&D(n)}}(u),{passive:!0}),document.addEventListener("visibilitychange",function(n,t){return()=>{!function(n,t){document.hidden?n.suspend():t.Mn||n.resume()}(n,t)}}(t,n)),e.addEventListener("pointerup",function(n,t){async function e(){await rt(t),n.addEventListener("pointerdown",o,{passive:!0})}async function o(){await rt(t)}return e}(e,n),{once:!0,passive:!0}),o.addEventListener("click",function(n){function t(){G(n)}return t}(u),{passive:!0}),u.addEventListener("click",function(n){function t(){D(n)}return t}(u),{passive:!0}),i.addEventListener("click",ft,{passive:!0})}(k,c,t,e,o,u)}),d?0:Math.max(2e3-j,0))}))}();
