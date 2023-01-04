"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[2466],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,m=c["".concat(s,".").concat(d)]||c[d]||h[d]||a;return n?i.createElement(m,l(l({ref:t},u),{},{components:n})):i.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6288:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var i=n(7462),r=(n(7294),n(3905));const a={id:"chialisp-concepts-inner-puzzles",slug:"/guides/chialisp-inner-puzzles",title:"Inner Puzzles"},l=void 0,o={unversionedId:"guides/chialisp-concepts/chialisp-concepts-inner-puzzles",id:"guides/chialisp-concepts/chialisp-concepts-inner-puzzles",title:"Inner Puzzles",description:"Sometimes you want the behavior of your puzzles to be composable, so that you can reuse code in multiple ways. An example of this is the Chia Asset Token puzzle, which allows you to specify an inner puzzle.",source:"@site/docs/guides/chialisp-concepts/inner-puzzles.md",sourceDirName:"guides/chialisp-concepts",slug:"/guides/chialisp-inner-puzzles",permalink:"/guides/chialisp-inner-puzzles",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/guides/chialisp-concepts/inner-puzzles.md",tags:[],version:"current",frontMatter:{id:"chialisp-concepts-inner-puzzles",slug:"/guides/chialisp-inner-puzzles",title:"Inner Puzzles"},sidebar:"guides",previous:{title:"Currying",permalink:"/guides/chialisp-currying"},next:{title:"Condition Morphing",permalink:"/guides/chialisp-condition-morphing"}},s={},p=[{value:"Example",id:"example",level:2},{value:"Inner Puzzle",id:"inner-puzzle",level:3},{value:"Public Key",id:"public-key",level:3},{value:"Currying",id:"currying",level:3},{value:"Conclusion",id:"conclusion",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Sometimes you want the behavior of your puzzles to be composable, so that you can reuse code in multiple ways. An example of this is the ",(0,r.kt)("a",{parentName:"p",href:"https://chialisp.com/docs/puzzles/cats"},"Chia Asset Token")," puzzle, which allows you to specify an ",(0,r.kt)("strong",{parentName:"p"},"inner puzzle"),"."),(0,r.kt)("p",null,"This allows the outer puzzle to enforce certain rules on how it can be spent, while the inner puzzle can do whatever it wants within those rules. In this case, the CAT enforces that it maintains a constant amount in mojos, while the inner puzzle (typically the ",(0,r.kt)("a",{parentName:"p",href:"https://chialisp.com/docs/standard_transaction/"},"Standard Transaction primitive"),") decides how it can be spent."),(0,r.kt)("p",null,"This is typically used in combination with a variety of other concepts, which we will talk about later. However, for the purpose of this guide and to make it easier to follow, we will provide a simple example that only incorporates currying and inner puzzles."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"We're going to write a simple example to try inner puzzles on the command line."),(0,r.kt)("p",null,"Write this in a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"require-signature.clsp"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-chialisp",metastring:'title="require-signature.clsp"',title:'"require-signature.clsp"'},"; Using the dot here means that the inner solution is the rest of the parameters. This avoids the need to nest parentheses.\n(mod (PUBLIC_KEY INNER_PUZZLE . inner_solution)\n    (include condition_codes.clib)\n    (include sha256tree.clib)\n\n    (c\n        (list AGG_SIG_ME PUBLIC_KEY (sha256tree inner_solution))\n        (a INNER_PUZZLE inner_solution)\n    )\n)\n")),(0,r.kt)("p",null,"Retrieve the libraries used in this example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cdv clsp retrieve condition_codes sha256tree\n")),(0,r.kt)("p",null,"First, note that ",(0,r.kt)("inlineCode",{parentName:"p"},"PUBLIC_KEY")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"INNER_PUZZLE")," are both all caps. Because of this you can tell that they are meant to be ",(0,r.kt)("a",{parentName:"p",href:"/guides/chialisp-currying"},"curried")," in before used as a puzzle."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"c")," operator creates a cons pair with two values. Here, it is essentially prepending the ",(0,r.kt)("inlineCode",{parentName:"p"},"AGG_SIG_ME")," condition to the output of the inner puzzle."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," operator executes a program with its parameters. Here, it is used to run the curried inner puzzle with the inner solution passed in during the spend. It outputs a list of conditions which will get appended to the first condition."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"AGG_SIG_ME")," condition will verify the ",(0,r.kt)("inlineCode",{parentName:"p"},"PUBLIC_KEY")," signed the message, which is the tree hash of the inner solution."),(0,r.kt)("h3",{id:"inner-puzzle"},"Inner Puzzle"),(0,r.kt)("p",null,"Next, we need to write the inner puzzle that will be curried into the example."),(0,r.kt)("p",null,"Write this in a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"any-conditions.clsp"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-chialisp",metastring:'title="any-conditions.clsp"',title:'"any-conditions.clsp"'},"(mod (conditions)\n    conditions\n)\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This is an exceedingly simple puzzle that just returns any conditions passed into the solution. It is insecure on its own, as it allows anyone to spend it however they want.")),(0,r.kt)("h3",{id:"public-key"},"Public Key"),(0,r.kt)("p",null,"You can refer to the ",(0,r.kt)("a",{parentName:"p",href:"/guides/chialisp-bls-signatures"},"BLS Signatures guide")," to learn about key pairs and how to use your wallet to sign messages. We will be using similar steps here to get the derived public key."),(0,r.kt)("p",null,"Run this to get the derived public key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'chia keys derive child-key --derive-from-hd-path "m/12381/8444/2/0"\n')),(0,r.kt)("p",null,"You will use this public key in the next step."),(0,r.kt)("h3",{id:"currying"},"Currying"),(0,r.kt)("p",null,"Now, we will wrap this inner puzzle in the outer puzzle we wrote previously. This will require the spend to be signed by a given key, which effectively secures the inner puzzle so that only you can spend it, instead of anyone."),(0,r.kt)("p",null,"First, run this command to get the compiled form of the inner puzzle:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"run any-conditions.clsp\n")),(0,r.kt)("p",null,"Yes, the output is just ",(0,r.kt)("inlineCode",{parentName:"p"},"2"),"."),(0,r.kt)("p",null,"You can run this command to curry in the public key previously calculated and the inner puzzle:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'cdv clsp curry require-signature.clsp -a "0xPublicKey" -a 2\n')),(0,r.kt)("p",null,"That should produce an output similar to this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-chialisp"},"(a (q 2 (q 4 (c 4 (c 5 (c (a 6 (c 2 (c 15 ()))) ()))) (a 11 15)) (c (q 50 2 (i (l 5) (q 11 (q . 2) (a 6 (c 2 (c 9 ()))) (a 6 (c 2 (c 13 ())))) (q 11 (q . 1) 5)) 1) 1)) (c (q . 0xPublicKey) (c (q . 2) 1)))\n")),(0,r.kt)("p",null,"Now the inner puzzle and outer puzzle have been combined together."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"The concept of inner puzzles allows for the composition of puzzles. This is commonly used in the wallet, where CATs, DIDs, and NFTs wrap the standard transaction. That way they have the ability to be transferred, yet also have their own set of rules that control their use. If you have any questions about inner puzzles, feel free to ask on our ",(0,r.kt)("a",{parentName:"p",href:"https://keybase.io/team/chia_network.public"},"Keybase team"),"."))}c.isMDXComponent=!0}}]);