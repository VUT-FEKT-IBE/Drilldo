import{t as qe,i as ie,l as dt,j as pt,k as Vt,m as ht,q as le,r as jt,v as zt,x as Kt,y as Ft,z as Ut,A as mt,B as Gt,C as Qt,D as Wt,E as gt,F as Xt,G as Yt,b as B,H as L,I as vt,J as Zt,K as _t,L as ne,M as Et,N as Ee,O as Jt,P as en,o as se,c as oe,a as O,Q as tn,u as yt,d as K,e as Rt,p as bt,g as St,n as nn}from"./viewer-56c5588e.js";import{_ as Te,u as Ce,Q as wt,A as sn,U as on}from"./UploadJsonComponent-f26af479.js";const rn="http://www.w3.org/2000/svg",V=typeof document<"u"?document:null,He=V&&V.createElement("template"),cn={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const o=t?V.createElementNS(rn,e):V.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:e=>V.createTextNode(e),createComment:e=>V.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>V.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,o,r){const l=n?n.previousSibling:t.lastChild;if(o&&(o===r||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===r||!(o=o.nextSibling)););else{He.innerHTML=s?`<svg>${e}</svg>`:e;const f=He.content;if(s){const c=f.firstChild;for(;c.firstChild;)f.appendChild(c.firstChild);f.removeChild(c)}t.insertBefore(f,n)}return[l?l.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function an(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function ln(e,t,n){const s=e.style,o=le(n);if(n&&!o){for(const r in n)Pe(s,r,n[r]);if(t&&!le(t))for(const r in t)n[r]==null&&Pe(s,r,"")}else{const r=s.display;o?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=r)}}const Ve=/\s*!important$/;function Pe(e,t,n){if(ie(n))n.forEach(s=>Pe(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=un(e,t);Ve.test(n)?e.setProperty(mt(s),n.replace(Ve,""),"important"):e[s]=n}}const je=["Webkit","Moz","ms"],ye={};function un(e,t){const n=ye[t];if(n)return n;let s=Gt(t);if(s!=="filter"&&s in e)return ye[t]=s;s=Qt(s);for(let o=0;o<je.length;o++){const r=je[o]+s;if(r in e)return ye[t]=r}return t}const ze="http://www.w3.org/1999/xlink";function fn(e,t,n,s,o){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ze,t.slice(6,t.length)):e.setAttributeNS(ze,t,n);else{const r=Wt(t);n==null||r&&!gt(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function dn(e,t,n,s,o,r,l){if(t==="innerHTML"||t==="textContent"){s&&l(s,o,r),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n??"";(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let f=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=gt(n):n==null&&c==="string"?(n="",f=!0):c==="number"&&(n=0,f=!0)}try{e[t]=n}catch{}f&&e.removeAttribute(t)}function j(e,t,n,s){e.addEventListener(t,n,s)}function pn(e,t,n,s){e.removeEventListener(t,n,s)}function hn(e,t,n,s,o=null){const r=e._vei||(e._vei={}),l=r[t];if(s&&l)l.value=s;else{const[f,c]=mn(t);if(s){const u=r[t]=_n(s,o);j(e,f,u,c)}else l&&(pn(e,f,l,c),r[t]=void 0)}}const Ke=/(?:Once|Passive|Capture)$/;function mn(e){let t;if(Ke.test(e)){t={};let s;for(;s=e.match(Ke);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):mt(e.slice(2)),t]}let Re=0;const gn=Promise.resolve(),vn=()=>Re||(gn.then(()=>Re=0),Re=Date.now());function _n(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Xt(En(s,n.value),t,5,[s])};return n.value=e,n.attached=vn(),n}function En(e,t){if(ie(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>o=>!o._stopped&&s&&s(o))}else return t}const Fe=/^on[a-z]/,yn=(e,t,n,s,o=!1,r,l,f,c)=>{t==="class"?an(e,s,o):t==="style"?ln(e,n,s):Ft(t)?Ut(t)||hn(e,t,n,s,l):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Rn(e,t,s,o))?dn(e,t,s,r,l,f,c):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),fn(e,t,s,o))};function Rn(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&Fe.test(t)&&ht(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Fe.test(t)&&le(n)?!1:t in e}const ue=e=>{const t=e.props["onUpdate:modelValue"]||!1;return ie(t)?n=>jt(t,n):t};function bn(e){e.target.composing=!0}function Ue(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ro={created(e,{modifiers:{lazy:t,trim:n,number:s}},o){e._assign=ue(o);const r=s||o.props&&o.props.type==="number";j(e,t?"change":"input",l=>{if(l.target.composing)return;let f=e.value;n&&(f=f.trim()),r&&(f=qe(f)),e._assign(f)}),n&&j(e,"change",()=>{e.value=e.value.trim()}),t||(j(e,"compositionstart",bn),j(e,"compositionend",Ue),j(e,"change",Ue))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:s,number:o}},r){if(e._assign=ue(r),e.composing||document.activeElement===e&&e.type!=="range"&&(n||s&&e.value.trim()===t||(o||e.type==="number")&&qe(e.value)===t))return;const l=t??"";e.value!==l&&(e.value=l)}},io={deep:!0,created(e,t,n){e._assign=ue(n),j(e,"change",()=>{const s=e._modelValue,o=Sn(e),r=e.checked,l=e._assign;if(ie(s)){const f=dt(s,o),c=f!==-1;if(r&&!c)l(s.concat(o));else if(!r&&c){const u=[...s];u.splice(f,1),l(u)}}else if(pt(s)){const f=new Set(s);r?f.add(o):f.delete(o),l(f)}else l(Ct(e,r))})},mounted:Ge,beforeUpdate(e,t,n){e._assign=ue(n),Ge(e,t,n)}};function Ge(e,{value:t,oldValue:n},s){e._modelValue=t,ie(t)?e.checked=dt(t,s.props.value)>-1:pt(t)?e.checked=t.has(s.props.value):t!==n&&(e.checked=Vt(t,Ct(e,!0)))}function Sn(e){return"_value"in e?e._value:e.value}function Ct(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const wn=Kt({patchProp:yn},cn);let Qe;function Cn(){return Qe||(Qe=zt(wn))}const co=(...e)=>{const t=Cn().createApp(...e),{mount:n}=t;return t.mount=s=>{const o=Pn(s);if(!o)return;const r=t._component;!ht(r)&&!r.render&&!r.template&&(r.template=o.innerHTML),o.innerHTML="";const l=n(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),l},t};function Pn(e){return le(e)?document.querySelector(e):e}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const F=typeof window<"u";function An(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const S=Object.assign;function be(e,t){const n={};for(const s in t){const o=t[s];n[s]=M(o)?o.map(e):e(o)}return n}const ee=()=>{},M=Array.isArray,xn=/\/$/,On=e=>e.replace(xn,"");function Se(e,t,n="/"){let s,o={},r="",l="";const f=t.indexOf("#");let c=t.indexOf("?");return f<c&&f>=0&&(c=-1),c>-1&&(s=t.slice(0,c),r=t.slice(c+1,f>-1?f:t.length),o=e(r)),f>-1&&(s=s||t.slice(0,f),l=t.slice(f,t.length)),s=Ln(s??t,n),{fullPath:s+(r&&"?")+r+l,path:s,query:o,hash:l}}function Tn(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function We(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function kn(e,t,n){const s=t.matched.length-1,o=n.matched.length-1;return s>-1&&s===o&&U(t.matched[s],n.matched[o])&&Pt(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function U(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Pt(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!In(e[n],t[n]))return!1;return!0}function In(e,t){return M(e)?Xe(e,t):M(t)?Xe(t,e):e===t}function Xe(e,t){return M(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function Ln(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/");let o=n.length-1,r,l;for(r=0;r<s.length;r++)if(l=s[r],l!==".")if(l==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var re;(function(e){e.pop="pop",e.push="push"})(re||(re={}));var te;(function(e){e.back="back",e.forward="forward",e.unknown=""})(te||(te={}));function Mn(e){if(!e)if(F){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),On(e)}const Nn=/^[^#]+#/;function $n(e,t){return e.replace(Nn,"#")+t}function Bn(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const de=()=>({left:window.pageXOffset,top:window.pageYOffset});function Dn(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=Bn(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Ye(e,t){return(history.state?history.state.position-t:-1)+e}const Ae=new Map;function qn(e,t){Ae.set(e,t)}function Hn(e){const t=Ae.get(e);return Ae.delete(e),t}let Vn=()=>location.protocol+"//"+location.host;function At(e,t){const{pathname:n,search:s,hash:o}=t,r=e.indexOf("#");if(r>-1){let f=o.includes(e.slice(r))?e.slice(r).length:1,c=o.slice(f);return c[0]!=="/"&&(c="/"+c),We(c,"")}return We(n,e)+s+o}function jn(e,t,n,s){let o=[],r=[],l=null;const f=({state:p})=>{const g=At(e,location),E=n.value,P=t.value;let C=0;if(p){if(n.value=g,t.value=p,l&&l===E){l=null;return}C=P?p.position-P.position:0}else s(g);o.forEach(y=>{y(n.value,E,{delta:C,type:re.pop,direction:C?C>0?te.forward:te.back:te.unknown})})};function c(){l=n.value}function u(p){o.push(p);const g=()=>{const E=o.indexOf(p);E>-1&&o.splice(E,1)};return r.push(g),g}function i(){const{history:p}=window;p.state&&p.replaceState(S({},p.state,{scroll:de()}),"")}function d(){for(const p of r)p();r=[],window.removeEventListener("popstate",f),window.removeEventListener("beforeunload",i)}return window.addEventListener("popstate",f),window.addEventListener("beforeunload",i),{pauseListeners:c,listen:u,destroy:d}}function Ze(e,t,n,s=!1,o=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:o?de():null}}function zn(e){const{history:t,location:n}=window,s={value:At(e,n)},o={value:t.state};o.value||r(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(c,u,i){const d=e.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+c:Vn()+e+c;try{t[i?"replaceState":"pushState"](u,"",p),o.value=u}catch(g){console.error(g),n[i?"replace":"assign"](p)}}function l(c,u){const i=S({},t.state,Ze(o.value.back,c,o.value.forward,!0),u,{position:o.value.position});r(c,i,!0),s.value=c}function f(c,u){const i=S({},o.value,t.state,{forward:c,scroll:de()});r(i.current,i,!0);const d=S({},Ze(s.value,c,null),{position:i.position+1},u);r(c,d,!1),s.value=c}return{location:s,state:o,push:f,replace:l}}function Kn(e){e=Mn(e);const t=zn(e),n=jn(e,t.state,t.location,t.replace);function s(r,l=!0){l||n.pauseListeners(),history.go(r)}const o=S({location:"",base:e,go:s,createHref:$n.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function Fn(e){return typeof e=="string"||e&&typeof e=="object"}function xt(e){return typeof e=="string"||typeof e=="symbol"}const D={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ot=Symbol("");var Je;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Je||(Je={}));function G(e,t){return S(new Error,{type:e,[Ot]:!0},t)}function $(e,t){return e instanceof Error&&Ot in e&&(t==null||!!(e.type&t))}const et="[^/]+?",Un={sensitive:!1,strict:!1,start:!0,end:!0},Gn=/[.+*?^${}()[\]/\\]/g;function Qn(e,t){const n=S({},Un,t),s=[];let o=n.start?"^":"";const r=[];for(const u of e){const i=u.length?[]:[90];n.strict&&!u.length&&(o+="/");for(let d=0;d<u.length;d++){const p=u[d];let g=40+(n.sensitive?.25:0);if(p.type===0)d||(o+="/"),o+=p.value.replace(Gn,"\\$&"),g+=40;else if(p.type===1){const{value:E,repeatable:P,optional:C,regexp:y}=p;r.push({name:E,repeatable:P,optional:C});const b=y||et;if(b!==et){g+=10;try{new RegExp(`(${b})`)}catch(I){throw new Error(`Invalid custom RegExp for param "${E}" (${b}): `+I.message)}}let T=P?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;d||(T=C&&u.length<2?`(?:/${T})`:"/"+T),C&&(T+="?"),o+=T,g+=20,C&&(g+=-8),P&&(g+=-20),b===".*"&&(g+=-50)}i.push(g)}s.push(i)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const l=new RegExp(o,n.sensitive?"":"i");function f(u){const i=u.match(l),d={};if(!i)return null;for(let p=1;p<i.length;p++){const g=i[p]||"",E=r[p-1];d[E.name]=g&&E.repeatable?g.split("/"):g}return d}function c(u){let i="",d=!1;for(const p of e){(!d||!i.endsWith("/"))&&(i+="/"),d=!1;for(const g of p)if(g.type===0)i+=g.value;else if(g.type===1){const{value:E,repeatable:P,optional:C}=g,y=E in u?u[E]:"";if(M(y)&&!P)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const b=M(y)?y.join("/"):y;if(!b)if(C)p.length<2&&(i.endsWith("/")?i=i.slice(0,-1):d=!0);else throw new Error(`Missing required param "${E}"`);i+=b}}return i||"/"}return{re:l,score:s,keys:r,parse:f,stringify:c}}function Wn(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Xn(e,t){let n=0;const s=e.score,o=t.score;for(;n<s.length&&n<o.length;){const r=Wn(s[n],o[n]);if(r)return r;n++}if(Math.abs(o.length-s.length)===1){if(tt(s))return 1;if(tt(o))return-1}return o.length-s.length}function tt(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Yn={type:0,value:""},Zn=/[a-zA-Z0-9_]/;function Jn(e){if(!e)return[[]];if(e==="/")return[[Yn]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,s=n;const o=[];let r;function l(){r&&o.push(r),r=[]}let f=0,c,u="",i="";function d(){u&&(n===0?r.push({type:0,value:u}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:i,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function p(){u+=c}for(;f<e.length;){if(c=e[f++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&d(),l()):c===":"?(d(),n=1):p();break;case 4:p(),n=s;break;case 1:c==="("?n=2:Zn.test(c)?p():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&f--);break;case 2:c===")"?i[i.length-1]=="\\"?i=i.slice(0,-1)+c:n=3:i+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&f--,i="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),d(),l(),o}function es(e,t,n){const s=Qn(Jn(e.path),n),o=S(s,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function ts(e,t){const n=[],s=new Map;t=ot({strict:!1,end:!0,sensitive:!1},t);function o(i){return s.get(i)}function r(i,d,p){const g=!p,E=ns(i);E.aliasOf=p&&p.record;const P=ot(t,i),C=[E];if("alias"in i){const T=typeof i.alias=="string"?[i.alias]:i.alias;for(const I of T)C.push(S({},E,{components:p?p.record.components:E.components,path:I,aliasOf:p?p.record:E}))}let y,b;for(const T of C){const{path:I}=T;if(d&&I[0]!=="/"){const H=d.record.path,N=H[H.length-1]==="/"?"":"/";T.path=d.record.path+(I&&N+I)}if(y=es(T,d,P),p?p.alias.push(y):(b=b||y,b!==y&&b.alias.push(y),g&&i.name&&!st(y)&&l(i.name)),E.children){const H=E.children;for(let N=0;N<H.length;N++)r(H[N],y,p&&p.children[N])}p=p||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&c(y)}return b?()=>{l(b)}:ee}function l(i){if(xt(i)){const d=s.get(i);d&&(s.delete(i),n.splice(n.indexOf(d),1),d.children.forEach(l),d.alias.forEach(l))}else{const d=n.indexOf(i);d>-1&&(n.splice(d,1),i.record.name&&s.delete(i.record.name),i.children.forEach(l),i.alias.forEach(l))}}function f(){return n}function c(i){let d=0;for(;d<n.length&&Xn(i,n[d])>=0&&(i.record.path!==n[d].record.path||!Tt(i,n[d]));)d++;n.splice(d,0,i),i.record.name&&!st(i)&&s.set(i.record.name,i)}function u(i,d){let p,g={},E,P;if("name"in i&&i.name){if(p=s.get(i.name),!p)throw G(1,{location:i});P=p.record.name,g=S(nt(d.params,p.keys.filter(b=>!b.optional).map(b=>b.name)),i.params&&nt(i.params,p.keys.map(b=>b.name))),E=p.stringify(g)}else if("path"in i)E=i.path,p=n.find(b=>b.re.test(E)),p&&(g=p.parse(E),P=p.record.name);else{if(p=d.name?s.get(d.name):n.find(b=>b.re.test(d.path)),!p)throw G(1,{location:i,currentLocation:d});P=p.record.name,g=S({},d.params,i.params),E=p.stringify(g)}const C=[];let y=p;for(;y;)C.unshift(y.record),y=y.parent;return{name:P,path:E,params:g,matched:C,meta:os(C)}}return e.forEach(i=>r(i)),{addRoute:r,resolve:u,removeRoute:l,getRoutes:f,getRecordMatcher:o}}function nt(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function ns(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ss(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function ss(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="boolean"?n:n[s];return t}function st(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function os(e){return e.reduce((t,n)=>S(t,n.meta),{})}function ot(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function Tt(e,t){return t.children.some(n=>n===e||Tt(e,n))}const kt=/#/g,rs=/&/g,is=/\//g,cs=/=/g,as=/\?/g,It=/\+/g,ls=/%5B/g,us=/%5D/g,Lt=/%5E/g,fs=/%60/g,Mt=/%7B/g,ds=/%7C/g,Nt=/%7D/g,ps=/%20/g;function ke(e){return encodeURI(""+e).replace(ds,"|").replace(ls,"[").replace(us,"]")}function hs(e){return ke(e).replace(Mt,"{").replace(Nt,"}").replace(Lt,"^")}function xe(e){return ke(e).replace(It,"%2B").replace(ps,"+").replace(kt,"%23").replace(rs,"%26").replace(fs,"`").replace(Mt,"{").replace(Nt,"}").replace(Lt,"^")}function ms(e){return xe(e).replace(cs,"%3D")}function gs(e){return ke(e).replace(kt,"%23").replace(as,"%3F")}function vs(e){return e==null?"":gs(e).replace(is,"%2F")}function fe(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function _s(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<s.length;++o){const r=s[o].replace(It," "),l=r.indexOf("="),f=fe(l<0?r:r.slice(0,l)),c=l<0?null:fe(r.slice(l+1));if(f in t){let u=t[f];M(u)||(u=t[f]=[u]),u.push(c)}else t[f]=c}return t}function rt(e){let t="";for(let n in e){const s=e[n];if(n=ms(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(M(s)?s.map(r=>r&&xe(r)):[s&&xe(s)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function Es(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=M(s)?s.map(o=>o==null?null:""+o):s==null?s:""+s)}return t}const ys=Symbol(""),it=Symbol(""),Ie=Symbol(""),$t=Symbol(""),Oe=Symbol("");function Z(){let e=[];function t(s){return e.push(s),()=>{const o=e.indexOf(s);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function q(e,t,n,s,o){const r=s&&(s.enterCallbacks[o]=s.enterCallbacks[o]||[]);return()=>new Promise((l,f)=>{const c=d=>{d===!1?f(G(4,{from:n,to:t})):d instanceof Error?f(d):Fn(d)?f(G(2,{from:t,to:d})):(r&&s.enterCallbacks[o]===r&&typeof d=="function"&&r.push(d),l())},u=e.call(s&&s.instances[o],t,n,c);let i=Promise.resolve(u);e.length<3&&(i=i.then(c)),i.catch(d=>f(d))})}function we(e,t,n,s){const o=[];for(const r of e)for(const l in r.components){let f=r.components[l];if(!(t!=="beforeRouteEnter"&&!r.instances[l]))if(Rs(f)){const u=(f.__vccOpts||f)[t];u&&o.push(q(u,n,s,r,l))}else{let c=f();o.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${r.path}"`));const i=An(u)?u.default:u;r.components[l]=i;const p=(i.__vccOpts||i)[t];return p&&q(p,n,s,r,l)()}))}}return o}function Rs(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function ct(e){const t=ne(Ie),n=ne($t),s=L(()=>t.resolve(B(e.to))),o=L(()=>{const{matched:c}=s.value,{length:u}=c,i=c[u-1],d=n.matched;if(!i||!d.length)return-1;const p=d.findIndex(U.bind(null,i));if(p>-1)return p;const g=at(c[u-2]);return u>1&&at(i)===g&&d[d.length-1].path!==g?d.findIndex(U.bind(null,c[u-2])):p}),r=L(()=>o.value>-1&&Cs(n.params,s.value.params)),l=L(()=>o.value>-1&&o.value===n.matched.length-1&&Pt(n.params,s.value.params));function f(c={}){return ws(c)?t[B(e.replace)?"replace":"push"](B(e.to)).catch(ee):Promise.resolve()}return{route:s,href:L(()=>s.value.href),isActive:r,isExactActive:l,navigate:f}}const bs=_t({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ct,setup(e,{slots:t}){const n=vt(ct(e)),{options:s}=ne(Ie),o=L(()=>({[lt(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[lt(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&t.default(n);return e.custom?r:Et("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},r)}}}),Ss=bs;function ws(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Cs(e,t){for(const n in t){const s=t[n],o=e[n];if(typeof s=="string"){if(s!==o)return!1}else if(!M(o)||o.length!==s.length||s.some((r,l)=>r!==o[l]))return!1}return!0}function at(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const lt=(e,t,n)=>e??t??n,Ps=_t({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=ne(Oe),o=L(()=>e.route||s.value),r=ne(it,0),l=L(()=>{let u=B(r);const{matched:i}=o.value;let d;for(;(d=i[u])&&!d.components;)u++;return u}),f=L(()=>o.value.matched[l.value]);Ee(it,L(()=>l.value+1)),Ee(ys,f),Ee(Oe,o);const c=Jt();return en(()=>[c.value,f.value,e.name],([u,i,d],[p,g,E])=>{i&&(i.instances[d]=u,g&&g!==i&&u&&u===p&&(i.leaveGuards.size||(i.leaveGuards=g.leaveGuards),i.updateGuards.size||(i.updateGuards=g.updateGuards))),u&&i&&(!g||!U(i,g)||!p)&&(i.enterCallbacks[d]||[]).forEach(P=>P(u))},{flush:"post"}),()=>{const u=o.value,i=e.name,d=f.value,p=d&&d.components[i];if(!p)return ut(n.default,{Component:p,route:u});const g=d.props[i],E=g?g===!0?u.params:typeof g=="function"?g(u):g:null,C=Et(p,S({},E,t,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(d.instances[i]=null)},ref:c}));return ut(n.default,{Component:C,route:u})||C}}});function ut(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const As=Ps;function xs(e){const t=ts(e.routes,e),n=e.parseQuery||_s,s=e.stringifyQuery||rt,o=e.history,r=Z(),l=Z(),f=Z(),c=Yt(D);let u=D;F&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const i=be.bind(null,a=>""+a),d=be.bind(null,vs),p=be.bind(null,fe);function g(a,m){let h,v;return xt(a)?(h=t.getRecordMatcher(a),v=m):v=a,t.addRoute(v,h)}function E(a){const m=t.getRecordMatcher(a);m&&t.removeRoute(m)}function P(){return t.getRoutes().map(a=>a.record)}function C(a){return!!t.getRecordMatcher(a)}function y(a,m){if(m=S({},m||c.value),typeof a=="string"){const _=Se(n,a,m.path),x=t.resolve({path:_.path},m),Y=o.createHref(_.fullPath);return S(_,x,{params:p(x.params),hash:fe(_.hash),redirectedFrom:void 0,href:Y})}let h;if("path"in a)h=S({},a,{path:Se(n,a.path,m.path).path});else{const _=S({},a.params);for(const x in _)_[x]==null&&delete _[x];h=S({},a,{params:d(a.params)}),m.params=d(m.params)}const v=t.resolve(h,m),w=a.hash||"";v.params=i(p(v.params));const A=Tn(s,S({},a,{hash:hs(w),path:v.path})),R=o.createHref(A);return S({fullPath:A,hash:w,query:s===rt?Es(a.query):a.query||{}},v,{redirectedFrom:void 0,href:R})}function b(a){return typeof a=="string"?Se(n,a,c.value.path):S({},a)}function T(a,m){if(u!==a)return G(8,{from:m,to:a})}function I(a){return W(a)}function H(a){return I(S(b(a),{replace:!0}))}function N(a){const m=a.matched[a.matched.length-1];if(m&&m.redirect){const{redirect:h}=m;let v=typeof h=="function"?h(a):h;return typeof v=="string"&&(v=v.includes("?")||v.includes("#")?v=b(v):{path:v},v.params={}),S({query:a.query,hash:a.hash,params:"path"in v?{}:a.params},v)}}function W(a,m){const h=u=y(a),v=c.value,w=a.state,A=a.force,R=a.replace===!0,_=N(h);if(_)return W(S(b(_),{state:typeof _=="object"?S({},w,_.state):w,force:A,replace:R}),m||h);const x=h;x.redirectedFrom=m;let Y;return!A&&kn(s,v,h)&&(Y=G(16,{to:x,from:v}),Be(v,v,!0,!1)),(Y?Promise.resolve(Y):Le(x,v)).catch(k=>$(k)?$(k,2)?k:me(k):he(k,x,v)).then(k=>{if(k){if($(k,2))return W(S({replace:R},b(k.to),{state:typeof k.to=="object"?S({},w,k.to.state):w,force:A}),m||x)}else k=Ne(x,v,!0,R,w);return Me(x,v,k),k})}function Dt(a,m){const h=T(a,m);return h?Promise.reject(h):Promise.resolve()}function Le(a,m){let h;const[v,w,A]=Os(a,m);h=we(v.reverse(),"beforeRouteLeave",a,m);for(const _ of v)_.leaveGuards.forEach(x=>{h.push(q(x,a,m))});const R=Dt.bind(null,a,m);return h.push(R),z(h).then(()=>{h=[];for(const _ of r.list())h.push(q(_,a,m));return h.push(R),z(h)}).then(()=>{h=we(w,"beforeRouteUpdate",a,m);for(const _ of w)_.updateGuards.forEach(x=>{h.push(q(x,a,m))});return h.push(R),z(h)}).then(()=>{h=[];for(const _ of a.matched)if(_.beforeEnter&&!m.matched.includes(_))if(M(_.beforeEnter))for(const x of _.beforeEnter)h.push(q(x,a,m));else h.push(q(_.beforeEnter,a,m));return h.push(R),z(h)}).then(()=>(a.matched.forEach(_=>_.enterCallbacks={}),h=we(A,"beforeRouteEnter",a,m),h.push(R),z(h))).then(()=>{h=[];for(const _ of l.list())h.push(q(_,a,m));return h.push(R),z(h)}).catch(_=>$(_,8)?_:Promise.reject(_))}function Me(a,m,h){for(const v of f.list())v(a,m,h)}function Ne(a,m,h,v,w){const A=T(a,m);if(A)return A;const R=m===D,_=F?history.state:{};h&&(v||R?o.replace(a.fullPath,S({scroll:R&&_&&_.scroll},w)):o.push(a.fullPath,w)),c.value=a,Be(a,m,h,R),me()}let X;function qt(){X||(X=o.listen((a,m,h)=>{if(!De.listening)return;const v=y(a),w=N(v);if(w){W(S(w,{replace:!0}),v).catch(ee);return}u=v;const A=c.value;F&&qn(Ye(A.fullPath,h.delta),de()),Le(v,A).catch(R=>$(R,12)?R:$(R,2)?(W(R.to,v).then(_=>{$(_,20)&&!h.delta&&h.type===re.pop&&o.go(-1,!1)}).catch(ee),Promise.reject()):(h.delta&&o.go(-h.delta,!1),he(R,v,A))).then(R=>{R=R||Ne(v,A,!1),R&&(h.delta&&!$(R,8)?o.go(-h.delta,!1):h.type===re.pop&&$(R,20)&&o.go(-1,!1)),Me(v,A,R)}).catch(ee)}))}let pe=Z(),$e=Z(),ce;function he(a,m,h){me(a);const v=$e.list();return v.length?v.forEach(w=>w(a,m,h)):console.error(a),Promise.reject(a)}function Ht(){return ce&&c.value!==D?Promise.resolve():new Promise((a,m)=>{pe.add([a,m])})}function me(a){return ce||(ce=!a,qt(),pe.list().forEach(([m,h])=>a?h(a):m()),pe.reset()),a}function Be(a,m,h,v){const{scrollBehavior:w}=e;if(!F||!w)return Promise.resolve();const A=!h&&Hn(Ye(a.fullPath,0))||(v||!h)&&history.state&&history.state.scroll||null;return Zt().then(()=>w(a,m,A)).then(R=>R&&Dn(R)).catch(R=>he(R,a,m))}const ge=a=>o.go(a);let ve;const _e=new Set,De={currentRoute:c,listening:!0,addRoute:g,removeRoute:E,hasRoute:C,getRoutes:P,resolve:y,options:e,push:I,replace:H,go:ge,back:()=>ge(-1),forward:()=>ge(1),beforeEach:r.add,beforeResolve:l.add,afterEach:f.add,onError:$e.add,isReady:Ht,install(a){const m=this;a.component("RouterLink",Ss),a.component("RouterView",As),a.config.globalProperties.$router=m,Object.defineProperty(a.config.globalProperties,"$route",{enumerable:!0,get:()=>B(c)}),F&&!ve&&c.value===D&&(ve=!0,I(o.location).catch(w=>{}));const h={};for(const w in D)h[w]=L(()=>c.value[w]);a.provide(Ie,m),a.provide($t,vt(h)),a.provide(Oe,c);const v=a.unmount;_e.add(a),a.unmount=function(){_e.delete(a),_e.size<1&&(u=D,X&&X(),X=null,c.value=D,ve=!1,ce=!1),v()}}};return De}function z(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Os(e,t){const n=[],s=[],o=[],r=Math.max(t.matched.length,e.matched.length);for(let l=0;l<r;l++){const f=t.matched[l];f&&(e.matched.find(u=>U(u,f))?s.push(f):n.push(f));const c=e.matched[l];c&&(t.matched.find(u=>U(u,c))||o.push(c))}return[n,s,o]}const Ts="modulepreload",ks=function(e){return"/FEKT-tester/"+e},ft={},J=function(t,n,s){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=ks(r),r in ft)return;ft[r]=!0;const l=r.endsWith(".css"),f=l?'[rel="stylesheet"]':"";if(!!s)for(let i=o.length-1;i>=0;i--){const d=o[i];if(d.href===r&&(!l||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${f}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":Ts,l||(u.as="script",u.crossOrigin=""),u.href=r,document.head.appendChild(u),l)return new Promise((i,d)=>{u.addEventListener("load",i),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())};const Is={class:"but-text"},Ls={__name:"DataFile",props:["name","filename"],emits:["data"],setup(e,{emit:t}){const n=e;function s(){fetch("https://raw.githubusercontent.com/VUT-FEKT-IBE/FEKT-tester/main/data/"+n.filename).then(function(o){return o.json()}).then(function(o){t("data",o)}).catch(function(o){console.log(`Error: ${o}`)})}return(o,r)=>(se(),oe("div",null,[O("button",{class:"button",onClick:r[0]||(r[0]=l=>s())},[O("span",Is,tn(n.name),1)])]))}},ae=Te(Ls,[["__scopeId","data-v-e4450c05"]]);const Bt=e=>(bt("data-v-93575bcd"),e=e(),St(),e),Ms={class:"premade-tests"},Ns=Bt(()=>O("h3",null,"Select from pre-made question sets:",-1)),$s={class:"data-buttons"},Bs={key:0,class:"questions-loaded offset"},Ds=Bt(()=>O("h4",null,"Optionally load test statistics that you downloaded earlier",-1)),qs={__name:"BuiltInTestsComponent",setup(e){const t=Ce(wt),n=Ce(sn),s=yt();function o(l){t.flush(),n.flush(),l.forEach(function(f){let c=0;f.answers.forEach(function(u){u.correct&&c++}),t.save({number:f.number,question:f.question,maxScore:c,answers:f.answers})})}function r(l){l.length!=t.all().length&&console.error("Error loading stats: Number of questions doesn't match"),l.forEach(function(f){t.where("number",f.number).update({numCorrect:f.numCorrect,numIncorrect:f.numIncorrect})}),s.statsLoaded=!0}return(l,f)=>(se(),oe("div",Ms,[Ns,O("div",$s,[K(ae,{onData:o,name:"FEKT Paragraf 4",filename:"paragraf4.json"}),K(ae,{onData:o,name:"BPC-ZSG",filename:"zsg.json"}),K(ae,{onData:o,name:"BPC-MDS zkouška",filename:"mds-zkouska.json"}),K(ae,{onData:o,name:"BPC-MDS zápočet",filename:"mds-zapocet.json"})]),B(t).all().length>0&&!B(s).statsLoaded?(se(),oe("div",Bs,[Ds,K(on,{onData:r,buttonText:"Load statistics"})])):Rt("",!0)]))}},Hs=Te(qs,[["__scopeId","data-v-93575bcd"]]);const Q=e=>(bt("data-v-0e16dec0"),e=e(),St(),e),Vs={class:"app"},js={class:"load-route"},zs=Q(()=>O("h3",null,"Load your questions here:",-1)),Ks=Q(()=>O("span",{class:"but-text"},"Load data",-1)),Fs=[Ks],Us={key:0,class:"navigator offset"},Gs=Q(()=>O("p",{class:"explore text"},"Explore questions to revise your knowledge:",-1)),Qs=Q(()=>O("span",{class:"but-text"},"Explore questions",-1)),Ws=[Qs],Xs={class:"but-par"},Ys=Q(()=>O("p",{class:"test text"},"Or you can start testing right away:",-1)),Zs=Q(()=>O("span",{class:"but-text"},"Start testing",-1)),Js=[Zs],eo={__name:"HomeView",setup(e){const t=Ce(wt),n=yt();return n.showMobileMenu=!1,(s,o)=>(se(),oe("div",Vs,[O("div",js,[zs,O("button",{class:"explore button",onClick:o[0]||(o[0]=r=>s.$router.push("/load"))},Fs)]),K(Hs),B(t).all().length?(se(),oe("div",Us,[O("div",{class:nn(["but-par",{offset:!B(n).statsLoaded}])},[Gs,O("button",{class:"explore button",onClick:o[1]||(o[1]=r=>s.$router.push("/explore"))},Ws)],2),O("div",Xs,[Ys,O("button",{class:"test button",onClick:o[2]||(o[2]=r=>s.$router.push("/test"))},Js)])])):Rt("",!0)]))}},to=Te(eo,[["__scopeId","data-v-0e16dec0"]]),no=xs({history:Kn("/FEKT-tester/"),routes:[{path:"/",name:"home",component:to,meta:{title:"FEKT Tester"}},{path:"/load",name:"load",component:()=>J(()=>import("./LoadView-5f9b70ac.js"),["assets/LoadView-5f9b70ac.js","assets/UploadJsonComponent-f26af479.js","assets/viewer-56c5588e.js","assets/UploadJsonComponent-f69d4fef.css","assets/LoadView-36fc8006.css"]),meta:{title:"FEKT Tester | Load"}},{path:"/explore",name:"explore",component:()=>J(()=>import("./ExploreView-c17dd66e.js"),["assets/ExploreView-c17dd66e.js","assets/UploadJsonComponent-f26af479.js","assets/viewer-56c5588e.js","assets/UploadJsonComponent-f69d4fef.css","assets/QuestionComponent-765faf6a.js","assets/QuestionComponent-36766f83.css","assets/QuestionControlComponent-7842cdbb.js","assets/QuestionControlComponent-49cfac9d.css","assets/ExploreView-ee0c3707.css"]),meta:{title:"FEKT Tester | Explore"}},{path:"/test",name:"test",component:()=>J(()=>import("./TestView-35943c40.js"),["assets/TestView-35943c40.js","assets/UploadJsonComponent-f26af479.js","assets/viewer-56c5588e.js","assets/UploadJsonComponent-f69d4fef.css","assets/QuestionComponent-765faf6a.js","assets/QuestionComponent-36766f83.css","assets/QuestionControlComponent-7842cdbb.js","assets/QuestionControlComponent-49cfac9d.css","assets/TestView-c5bce3f1.css"]),meta:{title:"FEKT Tester | Test"}},{path:"/edit",name:"edit",component:()=>J(()=>import("./EditView-3bc55300.js"),["assets/EditView-3bc55300.js","assets/UploadJsonComponent-f26af479.js","assets/viewer-56c5588e.js","assets/UploadJsonComponent-f69d4fef.css","assets/QuestionControlComponent-7842cdbb.js","assets/QuestionControlComponent-49cfac9d.css","assets/EditView-edd4634d.css"]),meta:{title:"FEKT Tester | Edit"}},{path:"/about",name:"about",component:()=>J(()=>import("./AboutView-e3475015.js"),["assets/AboutView-e3475015.js","assets/viewer-56c5588e.js","assets/AboutView-87d70fe4.css"]),meta:{title:"FEKT Tester | About"}}]});no.beforeEach((e,t,n)=>{const s=e.meta.title;s&&(document.title=s),n()});export{Ss as R,As as a,io as b,co as c,no as r,ro as v};