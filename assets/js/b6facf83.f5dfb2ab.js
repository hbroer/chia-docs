"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[4439],{9358:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=n(5893),r=n(1151);const s={title:"Pools",slug:"/pools"},o=void 0,a={id:"academy/plotting-farming/pools",title:"Pools",description:"In this lesson, we review the Pooling protocol, and how it can benefit a Farmer starting out.",source:"@site/docs/academy/plotting-farming/pools.md",sourceDirName:"academy/plotting-farming",slug:"/pools",permalink:"/pools",draft:!1,unlisted:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/academy/plotting-farming/pools.md",tags:[],version:"current",frontMatter:{title:"Pools",slug:"/pools"},sidebar:"academy",previous:{title:"Challenges & Plot Filters",permalink:"/challenges-plot-filters"},next:{title:"Creating your first Plot",permalink:"/first-plot"}},l={},d=[{value:"Learning objectives",id:"learning-objectives",level:2},{value:"Content",id:"content",level:2},{value:"Script",id:"script",level:2},{value:"Common gotchas",id:"common-gotchas",level:2},{value:"Knowledge check",id:"knowledge-check",level:2},{value:"Additional resources",id:"additional-resources",level:2},{value:"Links",id:"links",level:3}];function c(e){const t={a:"a",admonition:"admonition",br:"br",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"In this lesson, we review the Pooling protocol, and how it can benefit a Farmer starting out."}),"\n",(0,i.jsx)(t.h2,{id:"learning-objectives",children:"Learning objectives"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Benefits of Pooling"}),": Understand the benefits of participating in a Pool."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Reward Splitting"}),": Understand how the rewards are split among pool participants."]}),"\n"]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"content",children:"Content"}),"\n",(0,i.jsx)("div",{class:"videoWrapper",children:(0,i.jsx)("iframe",{width:"100%",height:"504",src:"https://www.youtube.com/embed/qO1ctn7DhwE",frameborder:"0",allowfullscreen:"allowfullscreen"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"script",children:"Script"}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:" Expand for the full script "}),(0,i.jsxs)(t.p,{children:["0:00",(0,i.jsx)(t.br,{}),"\n","Pools are a great way to get started with Farming. Pooling allows farmers to smooth out their rewards by earning based on proof of space partials, as opposed to winning blocks."]}),(0,i.jsxs)(t.p,{children:["0:20",(0,i.jsx)(t.br,{}),"\n","A Proof of Space partial contains some additional metadata about the farmer that lets the Pool distribute shared rewards based on relative farm size. The more valid partials a farmer generates, the larger their share of the reward. When a submitted proof of space wins, the farmer that generated it still retains the right to farm the block, and processes it themselves."]}),(0,i.jsxs)(t.p,{children:["0:40",(0,i.jsx)(t.br,{}),"\n","In return, they receive 1/8 the value of the reward, while the remaining 7/8 is distributed to the rest of the pool, based on valid partials. Because the block is still farmed by an individual farmer, the network remains sufficiently decentralized."]}),(0,i.jsxs)(t.p,{children:["1:00",(0,i.jsx)(t.br,{}),"\n","The overall reward earned is largely the same over time for average sized farms, so Pooling is a great choice to get started."]})]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"common-gotchas",children:"Common gotchas"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Farming size still matters:"})," The size of a Farm directly relates to how many valid partials are generated, and partials determine a farmers share of the pool reward (7/8). This means there is still a benefit to large farms joining a pool."]}),"\n"]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"knowledge-check",children:"Knowledge check"}),"\n",(0,i.jsx)(t.admonition,{title:"Question 1 - Reward Split",type:"tip",children:(0,i.jsx)(t.p,{children:"What is the reward split between the Farmer and the Pool?"})}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:" Answer (expand when ready to see the answer)  "}),(0,i.jsx)(t.p,{children:"1/8 goes to the Farmer who won the challenge, 7/8 goes to the pool to be distributed"})]}),"\n",(0,i.jsx)(t.admonition,{title:"Question 2 - Decentralized Pooling",type:"tip",children:(0,i.jsx)(t.p,{children:"How does the protocol maintain decentralization?"})}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:" Answer (expand when ready to see the answer)  "}),(0,i.jsx)(t.p,{children:"By letting the Farmers process and author blocks, the network remains decentralized. Since the pool has no way of knowing which Farmer will win, and does not have a say on which transactions will be included in the block."})]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"additional-resources",children:"Additional resources"}),"\n",(0,i.jsx)(t.h3,{id:"links",children:"Links"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["More ",(0,i.jsx)(t.a,{href:"https://docs.chia.net/farming-basics",children:"farming basics"}),": overviews of plotting, pooling, and rewards."]}),"\n",(0,i.jsxs)(t.li,{children:["In depth ",(0,i.jsx)(t.a,{href:"https://docs.chia.net/architecture-overview",children:"architecture overview"}),": describing the interactions between Farmers, Harvesters, Wallets, etc."]}),"\n",(0,i.jsxs)(t.li,{children:["Chialisp ",(0,i.jsx)(t.a,{href:"https://chialisp.com/",children:"detailed documentation"}),": detailed information on all aspects of chialisp."]}),"\n",(0,i.jsxs)(t.li,{children:["Support ",(0,i.jsx)(t.a,{href:"https://discord.gg/chia",children:"in discord"}),": for further support join our discord server and ask in the #chialisp or #support channels."]}),"\n"]}),"\n",(0,i.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var i=n(7294);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);