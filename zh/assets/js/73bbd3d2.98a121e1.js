"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[2006],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),f=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=f(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=f(n),k=a,g=c["".concat(s,".").concat(k)]||c[k]||h[k]||l;return n?i.createElement(g,r(r({ref:t},u),{},{components:n})):i.createElement(g,r({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,r[1]=o;for(var f=2;f<l;f++)r[f]=n[f];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}k.displayName="MDXCreateElement"},108:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>f});var i=n(7462),a=(n(7294),n(3905));const l={slug:"/guides/offers-gui-tutorial",title:"Offers - GUI"},r="Offers tutorial (GUI)",o={unversionedId:"guides/tutorials/offers-gui",id:"guides/tutorials/offers-gui",title:"Offers - GUI",description:"This tutorial demonstrates using Chia Offers with the reference wallet GUI.",source:"@site/docs/guides/tutorials/offers-gui.md",sourceDirName:"guides/tutorials",slug:"/guides/offers-gui-tutorial",permalink:"/zh/guides/offers-gui-tutorial",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/guides/tutorials/offers-gui.md",tags:[],version:"current",frontMatter:{slug:"/guides/offers-gui-tutorial",title:"Offers - GUI"},sidebar:"guides",previous:{title:"Clawback Primitive Guide",permalink:"/zh/guides/clawback-primitive-guide"},next:{title:"Offers - CLI",permalink:"/zh/guides/offers-cli-tutorial"}},s={},f=[{value:"Add a new CAT",id:"add-a-new-cat",level:2},{value:"Create an XCH-CAT offer",id:"create-an-xch-cat-offer",level:2},{value:"Accept an offer",id:"accept-an-offer",level:2},{value:"Cancel an offer",id:"cancel-an-offer",level:2},{value:"NFT Offers",id:"nft-offers",level:2},{value:"NFT Swaps",id:"nft-swaps",level:2},{value:"Offer notifications",id:"offer-notifications",level:2},{value:"Default expiration time",id:"default-expiration-time",level:2},{value:"Potential issues",id:"potential-issues",level:2},{value:"Contents:",id:"contents",level:2},{value:"Maker doesn&#39;t have enough money",id:"maker-doesnt-have-enough-money",level:3},{value:"Taker doesn&#39;t have enough money",id:"taker-doesnt-have-enough-money",level:3},{value:"Taker accepts an unknown CAT offer",id:"taker-accepts-an-unknown-cat-offer",level:3},{value:"Taker attempts to accept an invalid offer",id:"taker-attempts-to-accept-an-invalid-offer",level:3},{value:"Maker cancels an Offer locally, Taker accepts the offer",id:"maker-cancels-an-offer-locally-taker-accepts-the-offer",level:3},{value:"Whole coins must be reserved",id:"whole-coins-must-be-reserved",level:3},{value:"Offer involving a CAT1 is invalid",id:"offer-involving-a-cat1-is-invalid",level:3},{value:"Further reading",id:"further-reading",level:2}],u={toc:f},c="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"offers-tutorial-gui"},"Offers tutorial (GUI)"),(0,a.kt)("p",null,"This tutorial demonstrates using Chia Offers with the reference wallet GUI."),(0,a.kt)("p",null,"See also our ",(0,a.kt)("a",{parentName:"p",href:"/guides/offers-cli-tutorial"},"command line tutorial")," and our Offers standard ",(0,a.kt)("a",{parentName:"p",href:"https://chialisp.com/offers"},"reference"),"."),(0,a.kt)("p",null,'Chia Asset Tokens (CATs) are fungible assets on Chia\'s blockchain. In Chia parlance, "CAT" and "token" are often used interchangeably. Each CAT must come with its own Token and Asset Issuance Limiter (TAIL), a program that dictates how the CAT may be issued. For more information, see our ',(0,a.kt)("a",{parentName:"p",href:"https://chialisp.com/cats"},"CAT standard")," documentation."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"add-a-new-cat"},"Add a new CAT"),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"The Chia reference wallet comes embedded with a few CATs by default, but most CATs will need to be entered manually. CATs are distinguished by their TAILs. When mapping a TAIL to a CAT, one source of truth (though not the only one) is ",(0,a.kt)("a",{parentName:"p",href:"https://www.taildatabase.com"},"taildatabase.com"),". Whenever you add a new CAT, be sure to verify that you have the correct TAIL in order to avoid obtaining a fake (and worthless) CAT.")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you would like to acquire a CAT from an Offer, your wallet will need to recognize the CAT first. Click ",(0,a.kt)("inlineCode",{parentName:"p"},"MANAGE TOKEN LIST")," in the lower-left corner of the reference wallet GUI:"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/offers_img/gui2/01_offers.png",alt:"manage token list"})),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you want to add one of the included tokens, click the slider next to the token you would like to add.\nOtherwise, click the ",(0,a.kt)("inlineCode",{parentName:"p"},"+")," button:"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/offers_img/gui2/02_offers.png",alt:"add token"})),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enter the name and asset ID (TAIL) for your new CAT, then click ",(0,a.kt)("inlineCode",{parentName:"p"},"ADD"),":"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/offers_img/gui2/03_offers.png",alt:"One Meeellion CATs"})),(0,a.kt)("br",null))),(0,a.kt)("p",null,'Your new CAT will now appear in the "Tokens" list in your wallet.'),(0,a.kt)("h2",{id:"create-an-xch-cat-offer"},"Create an XCH-CAT offer"),(0,a.kt)("p",null,"For our first example Offer, we will offer 1 XCH in exchange for the new CAT."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Offers")," icon, then click ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATE AN OFFER")," to get started:"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/offers_img/gui2/04_offers.png",alt:"create an offer"})),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Next, fill in the details of the Offer. By default, the Offer will be set to expire after 7 days. This is likely fine in most cases. (If an Offer never expires, there is a chance it will be taken as arbitrage long after the maker has forgotten about it.) However, feel free to enter a different expiration time if desired."),(0,a.kt)("p",{parentName:"li"},"In this example, we will offer 1 XCH for 1000 tokens, and include a small blockchain fee, which will only be applied when the Offer is taken."),(0,a.kt)("p",{parentName:"li"},"After all of the details have been filled in, click ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATE OFFER"),":"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/offers_img/gui2/05_offers.png",alt:"fill in offer details"})),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If anyone acquires this Offer and it is still valid, they will be able to take it. Click the ",(0,a.kt)("inlineCode",{parentName:"p"},"I UNDERSTAND")," button and the Offer will be created:"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/offers_img/gui2/06_offers.png",alt:"confirm offer"})),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"At this point, the Offer has been created locally. However, until you share it, it is unlikely that anyone will know it exists. Feel free to email the Offer file, share it on social media, etc. The Offer file does not contain any sensitive data. Whoever sees it will only have two options: take it or ignore it."),(0,a.kt)("p",{parentName:"li"},"You can also use the panel that appears to share your Offer in a few default locations:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Dexie -- a bulletin board that acts as a Decentralized EXchange (DEX)"),(0,a.kt)("li",{parentName:"ul"},"Hashgreen -- another DEX, as well as an Automated Market Maker (AMM)"),(0,a.kt)("li",{parentName:"ul"},"Offerpool -- a bulletin board for sharing offers"),(0,a.kt)("li",{parentName:"ul"},"Spacescan -- an explorer and bulletin board"),(0,a.kt)("li",{parentName:"ul"},"Finally, you can save the file to your local computer and share it however you want ",(0,a.kt)("br",null),(0,a.kt)("br",null))),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/offers_img/gui2/07_offers.png",alt:"distribute offer"})),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The Offer will now appear as ",(0,a.kt)("inlineCode",{parentName:"p"},"Pending Accept"),", and the amount of time (if any) until it expires will also be shown:"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/offers_img/gui2/08_offers.png",alt:"offer pending status"})),(0,a.kt)("br",null))),(0,a.kt)("p",null,"Congratulations! You have created an Offer. A few things to note:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Your wallet has reserved the coin(s) necessary to complete the Offer."),(0,a.kt)("li",{parentName:"ul"},"The blockchain has not recorded this Offer."),(0,a.kt)("li",{parentName:"ul"},"You can distribute the Offer file wherever you want."),(0,a.kt)("li",{parentName:"ul"},"Anyone who sees the Offer file can attempt to accept it.")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"accept-an-offer"},"Accept an offer"),(0,a.kt)("p",null,"This example will use a different computer to accept the Offer that was created in the previous example. Keep in mind, offers are accepted on a first-come, first-served basis."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Prior to accepting the Offer, this wallet has 1,000,000 CATs:"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/offers_img/gui2/09_offers.png",alt:"One Meeellion CATs"})),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Offers"),", then view the Offer by either loading, dragging/dropping, or pasting the file:"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/offers_img/gui2/10_offers.png",alt:"view offer"})),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In this case, the Offer will expire in 6 days. The Taker must give 1000 CATs in exchange for 1 TXCH. The Maker has included a blockchain fee, and the Taker has the option of adding to this fee if desired. If the terms are acceptable, click ",(0,a.kt)("inlineCode",{parentName:"p"},"ACCEPT OFFER"),":"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/offers_img/gui2/11_offers.png",alt:"accept offer"})),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You will need to confirm that you actually want to accept the Offer, which will initiate an on-chain transaction:"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/offers_img/gui2/12_offers.png",alt:"verify acceptance of offer"})),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The Offer has been accepted. Click ",(0,a.kt)("inlineCode",{parentName:"p"},"OK"),":"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/offers_img/gui2/13_offers.png",alt:"offer accepted"})),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"While the blockchain transaction is pending, you will see this status in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Offers you accepted")," panel:"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/offers_img/gui2/14_offers.png",alt:"offer pending confirm"})),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Meanwhile, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Tokens")," screen will show the pending XCH and CAT amounts:"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/offers_img/gui2/15_offers.png",alt:"1 XCH incoming"})),(0,a.kt)("br",null),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/offers_img/gui2/16_offers.png",alt:"1000 CATs outgoing"})),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After the transaction has been confirmed (typically 1-3 minutes), the Offer's status will be updated to ",(0,a.kt)("inlineCode",{parentName:"p"},"Confirmed"),":"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/offers_img/gui2/17_offers.png",alt:"plus 1 XCH"})),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The final XCH and CAT balances will then be reflected in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Tokens")," screen:"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/offers_img/gui2/18_offers.png",alt:"minus 1000 CATs"})),(0,a.kt)("br",null),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/offers_img/gui2/19_offers.png",alt:"offer pending status"})),(0,a.kt)("br",null))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"cancel-an-offer"},"Cancel an offer"),(0,a.kt)("p",null,"You can cancel any Offer you created, as long as it has not already been accepted."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'In the "Offers" dialog, locate the Offer you want to cancel. It must be in the "Pending Accept" state.'),(0,a.kt)("p",{parentName:"li"},'Click the three dots in the "Actions" column:'),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/offers_img/gui2/20_offers.png",alt:"Pending Accept"})),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Click "Cancel Offer".'),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/offers_img/gui2/21_offers.png",alt:"Cancel Offer"})),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'The "Cancel Offer" dialog will appear. The default option is to cancel on the blockchain, as shown in the red circle in the image below.'),(0,a.kt)("p",{parentName:"li"},"This option will use your wallet to spend the coin(s) you had offered, and create new coins of the same type and value. This process does not involve taking the other end of the Offer, so you will not receive any funds of the type you had requested. The end result is that your wallet's balance will be the same as it was before you made the Offer (minus any transaction fees)."),(0,a.kt)("p",{parentName:"li"},"The advantage of canceling in this manner is that it ensures that nobody can accept your Offer in the future. The disadvantages are that you will need to wait a few minutes for your transaction to be processed, and that you may have to pay a transaction fee."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/offers_img/gui2/22_offers.png",alt:"Cancel on blockchain"})),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you uncheck the checkbox, your wallet will un-reserve the coins for your Offer. However, nothing will be recorded on the blockchain. If you have copied your Offer file elsewhere, someone could still accept it."),(0,a.kt)("p",{parentName:"li"},"The advantages of this option are that it will cancel your Offer instantly, and there's no need to include a fee."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/offers_img/gui2/23_offers.png",alt:"Cancel off chain"})),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'If you left the checkbox checked in the previous step, your Offer will enter the "Pending Cancel" state while the cancellation is being recorded on the blockchain. This could take several minutes.'),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/offers_img/gui2/24_offers.png",alt:"Pending Cancel"})),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'When your order has been successfully canceled, it will enter the "Cancelled" state. Your funds are now available in your wallet.'),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/offers_img/gui2/25_offers.png",alt:"Cancelled"})),(0,a.kt)("br",null))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"nft-offers"},"NFT Offers"),(0,a.kt)("p",null,"You can also create Offers to buy or sell NFTs. While it is possible to select NFTs from the ",(0,a.kt)("inlineCode",{parentName:"p"},"Offers")," dialog, this example will demonstrate how to do so directly from the ",(0,a.kt)("inlineCode",{parentName:"p"},"NFTs")," dialog."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enter the ",(0,a.kt)("inlineCode",{parentName:"p"},"NFTs")," dialog and select the NFT(s) to offer. If you would like to offer more than one NFT, click the checkbox (as shown below) to enter multi-select mode. To offer all of your NFTs, click ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT ALL"),":"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/offers_img/gui2/26_offers.png",alt:"Cancelled"})),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In this case, both of the NFTs are selected. Next, click ",(0,a.kt)("inlineCode",{parentName:"p"},"ACTIONS")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Create Offer"),":"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/offers_img/gui2/27_offers.png",alt:"Cancelled"})),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Offer Maker")," dialog will appear. Fill in any additional details for your Offer (be sure to request something!), and click ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATE OFFER"),":"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/offers_img/gui2/28_offers.png",alt:"Cancelled"})),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Share the Offer as you would with a CAT Offer. After the Offer has been created, the NFTs being offered will appear in the Offer summary:"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/offers_img/gui2/29_offers.png",alt:"Cancelled"})),(0,a.kt)("br",null))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"nft-swaps"},"NFT Swaps"),(0,a.kt)("p",null,"You can also swap NFTs for other NFTs, just like trading cards."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the ",(0,a.kt)("inlineCode",{parentName:"p"},"Offers")," dialog, select the NFT(s) you would like to offer and request. You can mix and match the Offer with a combination of XCH, CATs, and NFTs:"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/offers_img/gui2/30_offers.png",alt:"Multi NFT swap"})),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"When you are satisfied with terms of the Offer, click ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATE OFFER"),":"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/offers_img/gui2/31_offers.png",alt:"Cancelled"})),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After the Offer has been created, the assets to be trade will be displayed in the summary, just as with other Offers:"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/offers_img/gui2/32_offers.png",alt:"Cancelled"})),(0,a.kt)("br",null))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"offer-notifications"},"Offer notifications"),(0,a.kt)("p",null,"It is also possible to send a peer-to-peer notification to the owner of an NFT you would like to buy. You don't even need to know who owns the NFT; the notification will figure it out for you."),(0,a.kt)("p",null,"This example will continue with the same NFT-NFT Offer from the last section."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After creating an Offer to acquire an NFT, share it to Dexie, Mint Garden, etc:"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/offers_img/gui2/33_offers.png",alt:"Share on Dexie"})),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Be sure to verify that the Offer is correct; after it is shared publicly, someone could accept it:"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/offers_img/gui2/34_offers.png",alt:"Share Offer"})),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"NOTIFY CURRENT OWNER"),":"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/offers_img/gui2/35_offers.png",alt:"Notify current owner"})),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You have the option to add a transaction fee for the notification. You can also choose whether to allow counter offers:"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/offers_img/gui2/36_offers.png",alt:"Send message"})),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"A new offer coin will be created. If the owner of the NFT you would like to acquire is using the reference wallet, the wallet will notice this new coin and examine its contents. A new notification will appear in the owner's wallet. Click the notification bell:"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/offers_img/gui2/37_offers.png",alt:"Incoming notification"})),(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"A summary of the Offer will appear. Click the summary to see the details of the Offer:"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/offers_img/gui2/38_offers.png",alt:"View Offer"})),(0,a.kt)("br",null))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"default-expiration-time"},"Default expiration time"),(0,a.kt)("p",null,"By default, all Offers will expire seven days after being created. However, you can modify the expiration time on individual Offers, and you can also modify the default expiration time. From the ",(0,a.kt)("inlineCode",{parentName:"p"},"GENERAL")," tab in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings")," menu, scroll down to ",(0,a.kt)("inlineCode",{parentName:"p"},"Offer Expiration Time"),". From here, you can modify the default, or even disable expiring Offers altogether:"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/offers_img/gui2/39_offers.png",alt:"Change default from general settings"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"You can also access this setting from the ",(0,a.kt)("inlineCode",{parentName:"p"},"Offer Builder")," menu by clicking ",(0,a.kt)("inlineCode",{parentName:"p"},"Change default timing"),":"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"/img/offers_img/gui2/40_offers.png",alt:"Access default settings from Offer creation"})),(0,a.kt)("br",null),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"potential-issues"},"Potential issues"),(0,a.kt)("p",null,"This section will detail a non-comprehensive list of issues you might encounter while making or taking offers."),(0,a.kt)("h2",{id:"contents"},"Contents:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#maker-doesnt-have-enough-money"},"Maker doesn't have enough money")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#taker-doesnt-have-enough-money"},"Taker doesn't have enough money")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#taker-accepts-an-unknown-cat-offer"},"Taker accepts an unknown CAT offer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#taker-attempts-to-accept-an-invalid-offer"},"Taker attempts to accept an invalid offer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#maker-cancels-an-offer-locally-taker-accepts-the-offer"},"Maker cancels an Offer locally, Taker accepts the offer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#whole-coins-must-be-reserved"},"Whole coins must be reserved")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#offer-involving-a-cat1-is-invalid"},"Offer involving a CAT1 is invalid"))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"maker-doesnt-have-enough-money"},"Maker doesn't have enough money"),(0,a.kt)("p",null,"Let's say a Maker has wallets for XCH and CKC, with no money in either of them."),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/01_xch_wallet.png",alt:"0 XCH wallet"})),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/02_ckc_wallet.png",alt:"0 CKC wallet"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"The maker attempts to make an ambitious offer: 100 XCH for 1 million CKC."),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/03_100xch_for_1mckc.png",alt:"Offer 100 XCH for 1 million CKC"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"However, the Maker does not have enough money to create this Offer. As a result, an Error is displayed:"),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/04_100xch_for_1mckc_fail.png",alt:"Amount exceeds spendable balance"})),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"taker-doesnt-have-enough-money"},"Taker doesn't have enough money"),(0,a.kt)("p",null,"Let's say the Taker has a wallet with no money in it:"),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/01_xch_wallet.png",alt:"0 XCH wallet"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"And there's an outstanding Offer requesting 0.1 XCH for 10,000 CKC:"),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/05_accept_offer.png",alt:"Accept offer"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"However, the Taker does not have enough money to accept this Offer. As a result, an Error is displayed:"),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/06_insufficient_funds.png",alt:"Insufficient funds"})),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"taker-accepts-an-unknown-cat-offer"},"Taker accepts an unknown CAT offer"),(0,a.kt)("p",null,"You should be extra careful before accepting offers for unknown CATs. This is because the Offer ",(0,a.kt)("em",{parentName:"p"},"might")," be a scam where a different -- and worthless -- token is actually being offered."),(0,a.kt)("p",null,"Here's how the scam would work:"),(0,a.kt)("p",null,"Let's say a potential Taker has 0.1 XCH in their wallet."),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/07_0.1xch_wallet.png",alt:"0.1 XCH wallet"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"There is an Offer of 0.25 Shibe (an unknown CAT) in exchange for 0.1 XCH."),(0,a.kt)("p",null,"Here's the Offer from the Taker's perspective:"),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/08_0.25_shibe_for_0.1_xch.png",alt:"Offer shibe for XCH"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"The Taker decides to accept the Offer."),(0,a.kt)("p",null,"There is a warning dialog about the unknown cat, after which the Offer is confirmed successfully:"),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/09_accept_unknown_warning.png",alt:"Unknown CAT warning"})),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/10_unknown_success.png",alt:"Unknown CAT success"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"Notice that the Offer file was named ",(0,a.kt)("inlineCode",{parentName:"p"},"0.25_Shibe_for_0.1_XCH.offer"),", but the file name itself does ",(0,a.kt)("em",{parentName:"p"},"not")," dictate the contents of the Offer. The Taker may have inadvertently accepted an Offer for a worthless token!"),(0,a.kt)("p",null,"Luckily, it is easy to avoid this scam by cross-referencing the unknown CAT's ID before accepting the Offer. In this case, the Taker should verify from a trusted source that ",(0,a.kt)("inlineCode",{parentName:"p"},"4ac6a35e5fecb50d85604b19250a942afdc81876fe11db1f9d970c95dcf2c43f")," indeed corresponds to Shibe."),(0,a.kt)("p",null,"Chia does install a list of known CATs by default, so this scam should be rare, but you should always be diligent in scrutinizing offers for unknown CATs."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"taker-attempts-to-accept-an-invalid-offer"},"Taker attempts to accept an invalid offer"),(0,a.kt)("p",null,"If the Maker has canceled the Offer on the blockchain, or a Taker has already taken the Offer, it is no longer valid."),(0,a.kt)("p",null,"Any potential Takers will be conveyed this information upon viewing the Offer. For example:"),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/11_invalid_offer.png",alt:"Invalid offer"})),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"maker-cancels-an-offer-locally-taker-accepts-the-offer"},"Maker cancels an Offer locally, Taker accepts the offer"),(0,a.kt)("p",null,"This example will demonstrate that if you need to cancel an Offer, you should always do so on-chain unless you are certain the Offer file has not left your computer."),(0,a.kt)("p",null,"Let's say a Maker has 0.1 XCH and 1 USDS:"),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/12_0.1xch_wallet.png",alt:"0.1 XCH in wallet"})),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/13_1usds_wallet.png",alt:"1 USDS in wallet"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"The Maker offers 0.1 XCH in exchange for 10 USDS:"),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/14_view_offer_0.1xch_10usds.png",alt:"Offer 0.1 XCH for 10 USDS"})),(0,a.kt)("br",null),(0,a.kt)("p",null,'The Maker then decides to cancel the Offer, and unchecks the "Cancel on blockchain" checkbox:'),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/15_cancel_off_chain.png",alt:"Cancel offer off chain"})),(0,a.kt)("br",null),(0,a.kt)("p",null,'The offer\'s state is immediately changed to "Cancelled".'),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/16_canceled_off_chain.png",alt:"Canceled offer off chain"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"After the Offer has been canceled, a Taker notices the Offer file and decides to accept it:"),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/17_accept_a_canceled_offer.png",alt:"Accept a canceled offer"})),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/18_confirmed_canceled_offer.png",alt:"Confirm a canceled offer"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"Later, the Maker notices that the Offer has gone through, despite having been canceled:"),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/19_0xch_wallet.png",alt:"Post-offer 0 XCH"})),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/20_11usds_wallet.png",alt:"Post-offer 11 USDS"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"If the Offer had been canceled on-chain, the reserved coins would have been spent. At that point, even if someone else had gotten access to the Offer file, the Offer itself would've been invalid."),(0,a.kt)("p",null,"The lesson here is do ",(0,a.kt)("em",{parentName:"p"},"not"),' uncheck the "Cancel on blockchain" checkbox unless you\'re certain the Offer file has never left your computer.'),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"whole-coins-must-be-reserved"},"Whole coins must be reserved"),(0,a.kt)("p",null,"Under the coin set model, coins can be of any value. When an Offer is created, the Maker's wallet must reserve enough coins to meet the requirements of the Offer."),(0,a.kt)("p",null,"The coin set model ",(0,a.kt)("a",{parentName:"p",href:"/coin-set-intro"},"has many advantages")," over the account model, but it can create some situations that take time to understand."),(0,a.kt)("p",null,"For example, let's say a Maker has 1 XCH and 0 USDS:"),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/21_1xch_wallet.png",alt:"1 XCH in wallet"})),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/22_0usds_wallet.png",alt:"0 USDS in wallet"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"The Maker creates an Offer of 0.1 XCH for 10 USDS."),(0,a.kt)("p",null,"The Maker received the XCH in one lump sum, so there is a single coin worth 1 XCH in the Maker's wallet."),(0,a.kt)("p",null,"This is viewable in the offer's details:"),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/23_pending_accept.png",alt:"Offer in Pending Accept state"})),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/24_show_details.png",alt:"Show offer's details"})),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/25_one_coin.png",alt:"One coin used for offer"}),(0,a.kt)("figcaption",null,(0,a.kt)("em",null,"Scroll to the bottom to view coins reserved for the Offer."))),(0,a.kt)("br",null),(0,a.kt)("p",null,"While the Offer is pending, the Maker attempts to send 0.1 XCH to another address."),(0,a.kt)("p",null,"Notice that while the Total Balance is 1, the Spendable Balance is 0."),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/26_cant_send_offer_pending.png",alt:"Can't send while Offer pending"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"This should be possible -- the Maker has 0.9 XCH, even after taking the Offer into account. The reason for the Exception is because the Maker only has a single coin worth 1 XCH, and that coin has already been reserved for the Offer."),(0,a.kt)("p",null,"It's similar to using a $10 bill to buy something for $1. Before you receive your change, you can't buy anything else. On the other hand, if you had started with two $5 bills and bought the same $1 item, you could've purchased something else while waiting for your change."),(0,a.kt)("p",null,"The Maker can work around this issue by canceling the Offer, then breaking the single large coin into multiple small ones. One simple way to do this would be to send money to him/herself:"),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/27_send_0.1xch_to_self.png",alt:"Maker sends money to him/herself"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"The Maker can then recreate the same Offer. The new offer's details show a coin worth 0.9 XCH being reserved:"),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/28_0.1_coin_in_offer.png",alt:"New details of Maker's offer"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"The Maker's wallet shows a Total Balance of 1 XCH. This is the same as before, but there are now two coins that sum to 1 XCH."),(0,a.kt)("p",null,"Because there are now two coins in the Maker's wallet, and only one (worth 0.9 XCH) has been reserved for the Offer, the Spendable Balance is 0.1 XCH:"),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/29_0.1xch_available.png",alt:"Maker has 0.1 XCH available"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"The Maker can now send 0.1 XCH to another wallet, even while the Offer is still pending:"),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/img/offers_img/gui_tutorial/issues/30_send_while_offer_pending.png",alt:"Successful send while Offer pending"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"One of the Maker's coins has been reserved for the Offer, and the other has been sent to another wallet. The Maker can further break apart the large coin as needed."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"offer-involving-a-cat1-is-invalid"},"Offer involving a CAT1 is invalid"),(0,a.kt)("p",null,"The CAT1 Standard reached its end of life (EOL) with block 2,311,760 in July 2022. Any offers that include a CAT1 on either side of the trade will result in an invalid offer error."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"further-reading"},"Further reading"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.chia.net/2022/01/12/chia-offers-are-here-en.html"},"Offers blog entry")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://chialisp.com/offers"},"Offers reference")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/guides/offers-cli-tutorial"},"CLI tutorial")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/coin-set-intro"},"Info on the coin set model"))))}h.isMDXComponent=!0}}]);