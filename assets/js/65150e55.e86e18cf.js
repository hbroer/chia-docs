"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[9631],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(t),h=o,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||r;return t?i.createElement(m,l(l({ref:n},u),{},{components:t})):i.createElement(m,l({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=h;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[p]="string"==typeof e?e:o,l[1]=a;for(var c=2;c<r;c++)l[c]=t[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},8275:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=t(7462),o=(t(7294),t(3905));const r={id:"chialisp-concepts-condition-morphing",slug:"/guides/chialisp-condition-morphing",title:"Condition Morphing"},l=void 0,a={unversionedId:"guides/chialisp-concepts/chialisp-concepts-condition-morphing",id:"guides/chialisp-concepts/chialisp-concepts-condition-morphing",title:"Condition Morphing",description:"You've seen how you can use inner puzzles to output conditions and append them to the output of the outer puzzle. However, sometimes you want to change the output of the inner puzzle to enforce certain rules. This is called condition morphing.",source:"@site/docs/guides/chialisp-concepts/condition-morphing.md",sourceDirName:"guides/chialisp-concepts",slug:"/guides/chialisp-condition-morphing",permalink:"/guides/chialisp-condition-morphing",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/guides/chialisp-concepts/condition-morphing.md",tags:[],version:"current",frontMatter:{id:"chialisp-concepts-condition-morphing",slug:"/guides/chialisp-condition-morphing",title:"Condition Morphing"},sidebar:"guides",previous:{title:"Inner Puzzles",permalink:"/guides/chialisp-inner-puzzles"},next:{title:"NFT Guide",permalink:"/guides/nft-developer-guide"}},s={},c=[{value:"Example",id:"example",level:2},{value:"Inner Puzzle",id:"inner-puzzle",level:3},{value:"Public Key",id:"public-key",level:3},{value:"Currying",id:"currying",level:3},{value:"Conclusion",id:"conclusion",level:2}],u={toc:c};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You've seen how you can use inner puzzles to output conditions and append them to the output of the outer puzzle. However, sometimes you want to change the output of the inner puzzle to enforce certain rules. This is called ",(0,o.kt)("strong",{parentName:"p"},"condition morphing"),"."),(0,o.kt)("p",null,"An example of this is the singleton - every coin that its inner puzzle creates which has an odd output, is turned into an inner puzzle of itself. It changes the puzzle in the condition to the singleton with the original puzzle as its new inner puzzle. This can be a bit confusing to think about, but it allows for many things such as keeping track of state."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Let's try a simpler example of condition morphing that doubles the amount of created coins."),(0,o.kt)("p",null,"Write the following in a file named ",(0,o.kt)("inlineCode",{parentName:"p"},"coin-doubler.clsp"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-chialisp",metastring:'title="coin-double.clsp"',title:'"coin-double.clsp"'},"; Using the dot here means that the inner solution is the rest of the parameters. This avoids the need to nest parentheses.\n(mod (INNER_PUZZLE . inner_solution)\n\n    ; Doubles the amount of CREATE_COIN conditions.\n    (defun morph-condition (condition)\n\n        ; Checks if the opcode is 51, which is CREATE_COIN.\n        (if (= (f condition) 51)\n\n            ; Create a new condition similar to the original.\n            (list\n                ; It's still the same opcode.\n                51\n\n                ; The second value, the puzzle hash, is also the same.\n                (f (r condition))\n\n                ; The third value, the amount, is doubled.\n                (* (f (r (r condition))) 2)\n            )\n\n            ; If it's not the right opcode, leave it untouched.\n            condition\n        )\n    )\n\n    ; Goes through every condition and morphs it.\n    (defun morph-conditions (conditions)\n\n        ; If there are conditions left in the list.\n        (if (l conditions)\n            (c\n                ; Morph the first condition.\n                (morph-condition (f conditions))\n\n                ; Then morph the rest and form a list.\n                (morph-conditions (r conditions))\n            )\n\n            ; Otherwise, the output has ended.\n            ()\n        )\n    )\n\n    ; Morph the conditions output from the inner puzzle.\n    (morph-conditions (a INNER_PUZZLE inner_solution))\n)\n")),(0,o.kt)("p",null,"Make sure you read the comments and understand it fully before continuing."),(0,o.kt)("h3",{id:"inner-puzzle"},"Inner Puzzle"),(0,o.kt)("p",null,"Now we need an inner puzzle to morph the conditions of."),(0,o.kt)("p",null,"Write the following in a file named ",(0,o.kt)("inlineCode",{parentName:"p"},"any-with-signature.clsp"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-chialisp",metastring:'title="any-with-signature.clsp"',title:'"any-with-signature.clsp"'},"(mod (PUBLIC_KEY conditions)\n    (include condition_codes.clib)\n    (include sha256tree.clib)\n\n    (c\n        (list AGG_SIG_ME PUBLIC_KEY (sha256tree conditions))\n        conditions\n    )\n)\n")),(0,o.kt)("p",null,"Retrieve the libraries used in this example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cdv clsp retrieve condition_codes sha256tree\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Similarly to ",(0,o.kt)("a",{parentName:"p",href:"/guides/chialisp-inner-puzzles#inner-puzzle"},"the example in the Inner Puzzles guide"),", this allows the spender to pick any conditions. However, it also requires a signature. It's essentially the inner and outer puzzle from that example combined.")),(0,o.kt)("h3",{id:"public-key"},"Public Key"),(0,o.kt)("p",null,"You can refer to the ",(0,o.kt)("a",{parentName:"p",href:"/guides/chialisp-bls-signatures"},"signature guide")," to learn about key pairs and how to use your wallet to sign messages. We will be using similar steps here to get the derived public key."),(0,o.kt)("p",null,"Run this to get the derived public key:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'chia keys derive child-key --derive-from-hd-path "m/12381/8444/2/0"\n')),(0,o.kt)("p",null,"You will use this public key in the next step."),(0,o.kt)("h3",{id:"currying"},"Currying"),(0,o.kt)("p",null,"Now, we will wrap this inner puzzle in the outer puzzle we wrote previously. This will require the spend to be signed by a given key, and any coins created will have double the amount."),(0,o.kt)("p",null,"First, run this command to get the compiled form of the inner puzzle:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"run -i include any-with-signature.clsp\n")),(0,o.kt)("p",null,"Yes, the output is just ",(0,o.kt)("inlineCode",{parentName:"p"},"2"),"."),(0,o.kt)("p",null,"You can run this command to curry in the public key previously calculated and the inner puzzle:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'cdv clsp curry coin-doubler.clsp -a "0xPublicKey" -a 2\n')),(0,o.kt)("p",null,"That should produce an output similar to this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-chialisp"},"(a (q 2 (q 2 6 (c 2 (c (a 5 7) ()))) (c (q (a (i (= 9 (q . 51)) (q 4 (q . 51) (c 21 (c (* 45 (q . 2)) ()))) (q . 5)) 1) 2 (i (l 5) (q 4 (a 4 (c 2 (c 9 ()))) (a 6 (c 2 (c 13 ())))) ()) 1) 1)) (c (q . 0xPublicKey) (c (q 2 (q 4 (c 4 (c 5 (c (a 6 (c 2 (c 11 ()))) ()))) 11) (c (q 50 2 (i (l 5) (q 11 (q . 2) (a 6 (c 2 (c 9 ()))) (a 6 (c 2 (c 13 ())))) (q 11 (q . 1) 5)) 1) 1)) 1)))\n")),(0,o.kt)("p",null,"Now the inner puzzle and outer puzzle have been combined together."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"This combined puzzle would allow you to spend coins created with it with your public key, but any create coin conditions would have their amounts doubled in the output. Feel free to ask questions you may have on our ",(0,o.kt)("a",{parentName:"p",href:"https://keybase.io/team/chia_network.public"},"Keybase team"),"."))}p.isMDXComponent=!0}}]);