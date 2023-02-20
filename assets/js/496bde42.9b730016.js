"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[1187],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=i,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||r;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8502:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={slug:"/guides/chialisp-testnet-setup",title:"3. Testnet Setup"},o=void 0,l={unversionedId:"guides/chialisp-primer/testnet-setup",id:"guides/chialisp-primer/testnet-setup",title:"3. Testnet Setup",description:"If you haven't already, you will need to clone the Chia Blockchain repository, then follow the below steps to set it up and configure it for the testnet.",source:"@site/docs/guides/chialisp-primer/testnet-setup.md",sourceDirName:"guides/chialisp-primer",slug:"/guides/chialisp-testnet-setup",permalink:"/guides/chialisp-testnet-setup",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/guides/chialisp-primer/testnet-setup.md",tags:[],version:"current",frontMatter:{slug:"/guides/chialisp-testnet-setup",title:"3. Testnet Setup"},sidebar:"guides",previous:{title:"2. Using Modules",permalink:"/guides/chialisp-using-modules"},next:{title:"4. First Smart Coin",permalink:"/guides/chialisp-first-smart-coin"}},s={},p=[{value:"Setup",id:"setup",level:2},{value:"Faucet",id:"faucet",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you haven't already, you will need to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chia-blockchain"},"clone the Chia Blockchain repository"),", then follow the below steps to set it up and configure it for the testnet."),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you are using Windows, we recommend PowerShell, and you may need to replace forward slashes ",(0,i.kt)("inlineCode",{parentName:"p"},"/")," with backslashes ",(0,i.kt)("inlineCode",{parentName:"p"},"\\"),".")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open the ",(0,i.kt)("inlineCode",{parentName:"li"},"chia-blockchain")," folder in a command prompt of your choice."),(0,i.kt)("li",{parentName:"ol"},"Set the environment variable ",(0,i.kt)("inlineCode",{parentName:"li"},"CHIA_ROOT")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"~/.chia/testnet10"),"."),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"./Install.ps1")," on Windows or ",(0,i.kt)("inlineCode",{parentName:"li"},"./install.sh")," on MacOS or Linux."),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},". ./activate")," to use the Python virtual environment."),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"chia init")," to setup and configure Chia."),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"chia keys generate")," to prepare the wallet keys."),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"chia configure -t true")," to use the Testnet."),(0,i.kt)("li",{parentName:"ol"},"Download the ",(0,i.kt)("a",{parentName:"li",href:"https://download.chia.net/testnet10/blockchain_v2_testnet10.sqlite.gz"},"Testnet database")," and place it in the ",(0,i.kt)("inlineCode",{parentName:"li"},"~/.chia/testnet10/db")," folder."),(0,i.kt)("li",{parentName:"ol"},"Finally, run ",(0,i.kt)("inlineCode",{parentName:"li"},"chia start node")," to start the full node.")),(0,i.kt)("h2",{id:"faucet"},"Faucet"),(0,i.kt)("p",null,"Now you can set up the wallet and use a faucet to receive Testnet coins to use in the upcoming guides."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"chia start wallet")," to start the wallet."),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"chia wallet get_address")," to get the next wallet address."),(0,i.kt)("li",{parentName:"ol"},"Go to the ",(0,i.kt)("a",{parentName:"li",href:"https://testnet10-faucet.chia.net"},"Testnet faucet")," and give it your address."),(0,i.kt)("li",{parentName:"ol"},"Wait a minute or two and run ",(0,i.kt)("inlineCode",{parentName:"li"},"chia wallet show")," to check your balance.")),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"You should now be ready to use the Testnet to create and spend smart coins. As always, if you ran into any issues while setting up the Testnet, feel free to ask for support on our ",(0,i.kt)("a",{parentName:"p",href:"https://keybase.io/team/chia_network.public"},"Keybase team"),"."))}d.isMDXComponent=!0}}]);