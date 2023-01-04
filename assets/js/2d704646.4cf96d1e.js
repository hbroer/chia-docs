"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[794],{3905:(e,o,t)=>{t.d(o,{Zo:()=>s,kt:()=>m});var r=t(7294);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function l(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?l(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function c(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=r.createContext({}),p=function(e){var o=r.useContext(i),t=o;return e&&(t="function"==typeof e?e(o):a(a({},o),e)),t},s=function(e){var o=p(e.components);return r.createElement(i.Provider,{value:o},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},d=r.forwardRef((function(e,o){var t=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),d=n,m=u["".concat(i,".").concat(d)]||u[d]||f[d]||l;return t?r.createElement(m,a(a({ref:o},s),{},{components:t})):r.createElement(m,a({ref:o},s))}));function m(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var l=t.length,a=new Array(l);a[0]=d;var c={};for(var i in o)hasOwnProperty.call(o,i)&&(c[i]=o[i]);c.originalType=e,c[u]="string"==typeof e?e:n,a[1]=c;for(var p=2;p<l;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},198:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=t(7462),n=(t(7294),t(3905));const l={title:"Chia Protocol",slug:"/chia-protocol"},a=void 0,c={unversionedId:"protocol/protocol",id:"protocol/protocol",title:"Chia Protocol",description:"The Chia protocol is composed of a few different sub-protocols. All protocol messages are sent encoded in Streamable format, using the networking protocol defined in the Networking page. The following documents go into depth into the messages sent by each type of service/node, and how they should be interpreted.",source:"@site/docs/protocol/protocol.md",sourceDirName:"protocol",slug:"/chia-protocol",permalink:"/chia-protocol",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/protocol/protocol.md",tags:[],version:"current",frontMatter:{title:"Chia Protocol",slug:"/chia-protocol"},sidebar:"tutorialSidebar",previous:{title:"Plot Public Keys",permalink:"/plot-public-keys"},next:{title:"Networking Protocol",permalink:"/networking-protocol"}},i={},p=[],s={toc:p};function u(e){let{components:o,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,t,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Chia protocol is composed of a few different sub-protocols. All protocol messages are sent encoded in Streamable format, using the networking protocol defined in the ",(0,n.kt)("a",{parentName:"p",href:"/networking-protocol"},"Networking page"),". The following documents go into depth into the messages sent by each type of service/node, and how they should be interpreted."),(0,n.kt)("p",null,"The protocol is asynchronous and bidirectional, that is, each end of the connection can send messages, and receive a response, multiple responses, or no response for each message."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Harvester protocol (harvester <-> farmer)"),(0,n.kt)("li",{parentName:"ol"},"Farmer protocol (farmer <-> full node)"),(0,n.kt)("li",{parentName:"ol"},"Timelord protocol (timelord <-> full node)"),(0,n.kt)("li",{parentName:"ol"},"Peer protocol (full node <-> full node)"),(0,n.kt)("li",{parentName:"ol"},"Pool protocol (pool <-> farmer)"),(0,n.kt)("li",{parentName:"ol"},"Wallet protocol (wallet/light client <-> full node)")))}u.isMDXComponent=!0}}]);