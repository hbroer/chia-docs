"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[8986],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=f(e,["components","mdxType","originalType","parentName"]),u=s(r),p=n,m=u["".concat(i,".").concat(p)]||u[p]||d[p]||l;return r?a.createElement(m,o(o({ref:t},c),{},{components:r})):a.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=p;var f={};for(var i in t)hasOwnProperty.call(t,i)&&(f[i]=t[i]);f.originalType=e,f[u]="string"==typeof e?e:n,o[1]=f;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294),n=r(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>p});var a=r(7462),n=r(7294),l=r(6010),o=r(2389),f=r(7392),i=r(7094),s=r(2466);const c="tabList__CuJ",u="tabItem_LNqP";function d(e){const{lazy:t,block:r,defaultValue:o,values:d,groupId:p,className:m}=e,_=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??_.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),k=(0,f.l)(h,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===o?o:o??_.find((e=>e.props.default))?.props.value??_[0].props.value;if(null!==y&&!h.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:v}=(0,i.U)(),[N,g]=(0,n.useState)(y),w=[],{blockElementScrollPositionUntilNextRender:O}=(0,s.o5)();if(null!=p){const e=b[p];null!=e&&e!==N&&h.some((t=>t.value===e))&&g(e)}const T=e=>{const t=e.currentTarget,r=w.indexOf(t),a=h[r].value;a!==N&&(O(t),g(a),null!=p&&v(p,String(a)))},C=e=>{let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const r=w.indexOf(e.currentTarget)+1;t=w[r]??w[0];break}case"ArrowLeft":{const r=w.indexOf(e.currentTarget)-1;t=w[r]??w[w.length-1];break}}t?.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},m)},h.map((e=>{let{value:t,label:r,attributes:o}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>w.push(e),onKeyDown:C,onClick:T},o,{className:(0,l.Z)("tabs__item",u,o?.className,{"tabs__item--active":N===t})}),r??t)}))),t?(0,n.cloneElement)(_.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},_.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function p(e){const t=(0,o.Z)();return n.createElement(d,(0,a.Z)({key:String(t)},e))}},829:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>f,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));r(5488),r(5162);const l={sidebar_label:"Offers",title:"Offer RPC",slug:"/offer-rpc"},o=void 0,f={unversionedId:"rpc-reference/offers",id:"rpc-reference/offers",title:"Offer RPC",description:"Note about Windows command escaping",source:"@site/docs/rpc-reference/offers.mdx",sourceDirName:"rpc-reference",slug:"/offer-rpc",permalink:"/offer-rpc",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/rpc-reference/offers.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Offers",title:"Offer RPC",slug:"/offer-rpc"},sidebar:"tutorialSidebar",previous:{title:"NFTs",permalink:"/nft-rpc"},next:{title:"DataLayer",permalink:"/datalayer-rpc"}},i={},s=[{value:"Reference",id:"reference",level:2},{value:"<code>create_offer_for_ids</code>",id:"create_offer_for_ids",level:3},{value:"<code>get_offer_summary</code>",id:"get_offer_summary",level:3},{value:"<code>check_offer_validity</code>",id:"check_offer_validity",level:3},{value:"<code>take_offer</code>",id:"take_offer",level:3},{value:"<code>get_offer</code>",id:"get_offer",level:3},{value:"<code>get_all_offers</code>",id:"get_all_offers",level:3},{value:"<code>cancel_offer</code>",id:"cancel_offer",level:3}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Note about Windows command escaping"),(0,n.kt)("p",null,"This document will use Linux/MacOS RPC syntax. When running rpc commands on Windows, you'll need to escape all quotes with backslashes."),(0,n.kt)("p",null,"For example, here is a typical RPC command on Linux and MacOS:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},'chia rpc wallet create_new_wallet \'{"wallet_type": "nft_wallet"}\'\n')),(0,n.kt)("p",null,"To run the same command on Windows, you need to escape the quotes with backslashes. In other words, add a \\ before each double quote, such that:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'"wallet_type" becomes \\"wallet_type\\"'),(0,n.kt)("li",{parentName:"ul"},'"nft_wallet" becomes \\"nft_wallet\\"'),(0,n.kt)("li",{parentName:"ul"},"etc"))),(0,n.kt)("h2",{id:"reference"},"Reference"),(0,n.kt)("h3",{id:"create_offer_for_ids"},(0,n.kt)("inlineCode",{parentName:"h3"},"create_offer_for_ids")),(0,n.kt)("p",null,"Creates a new offer."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"offer_dict"),": A dictionary of the offer to create."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"fee:")," An optional fee (in mojos) to include with the offer. Defaults to 0."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"validate_only:")," Defaults to False. Set to True to verify the validity of a potential offer, rather than actually creating an offer.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'async def create_offer_for_ids(\n  self, offer_dict: Dict[uint32, int], fee=uint64(0), validate_only: bool = False\n) -> Tuple[Optional[Offer], TradeRecord]:\n  send_dict: Dict[str, int] = {}\n  for key in offer_dict:\n    send_dict[str(key)] = offer_dict[key]\n\n  res = await self.fetch("create_offer_for_ids", {"offer": send_dict, "validate_only": validate_only, "fee": fee})\n  offer: Optional[Offer] = None if validate_only else Offer.from_bytes(hexstr_to_bytes(res["offer"]))\n  return offer, TradeRecord.from_json_dict_convenience(res["trade_record"], res["offer"])\n')),(0,n.kt)("h3",{id:"get_offer_summary"},(0,n.kt)("inlineCode",{parentName:"h3"},"get_offer_summary")),(0,n.kt)("p",null,"Returns the summary of a specific offer. Works for offers in any state."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"offer:")," The offer to summarize.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'async def get_offer_summary(self, offer: Offer) -> Dict[str, Dict[str, int]]:\n  res = await self.fetch("get_offer_summary", {"offer": bytes(offer).hex()})\n  return res["summary"]\n')),(0,n.kt)("h3",{id:"check_offer_validity"},(0,n.kt)("inlineCode",{parentName:"h3"},"check_offer_validity")),(0,n.kt)("p",null,"Checks whether a specific offer is valid."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"offer:")," The offer to check. The offer is considered valid if it is in any of the following states:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"PENDING_ACCEPT"),(0,n.kt)("li",{parentName:"ul"},"PENDING_CONFIRM"),(0,n.kt)("li",{parentName:"ul"},"PENDING_CANCEL")),(0,n.kt)("p",{parentName:"li"},"The offer is no longer valid if it is in any of the following states:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"CANCELLED"),(0,n.kt)("li",{parentName:"ul"},"CONFIRMED"),(0,n.kt)("li",{parentName:"ul"},"FAILED")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'async def check_offer_validity(self, offer: Offer) -> bool:\n  res = await self.fetch("check_offer_validity", {"offer": bytes(offer).hex()})\n  return res["valid"]\n')),(0,n.kt)("h3",{id:"take_offer"},(0,n.kt)("inlineCode",{parentName:"h3"},"take_offer")),(0,n.kt)("p",null,"Takes (accepts) a specific offer, with a given fee."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"offer:")," The offer to accept. Must be in the PENDING_ACCEPT state."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"fee:")," An optional fee (in mojos) to include with the offer. Defaults to 0.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'async def take_offer(self, offer: Offer, fee=uint64(0)) -> TradeRecord:\n  res = await self.fetch("take_offer", {"offer": bytes(offer).hex(), "fee": fee})\n  return TradeRecord.from_json_dict_convenience(res["trade_record"])\n')),(0,n.kt)("h3",{id:"get_offer"},(0,n.kt)("inlineCode",{parentName:"h3"},"get_offer")),(0,n.kt)("p",null,"Given an offer's unique identifier, return that offer's details."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"trade_id:")," The ID of the offer to examine. Can be retrieved from an offer file by calling ",(0,n.kt)("inlineCode",{parentName:"li"},"cdv inspect spendbundles <offer_file>"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"file_contents:")," Set to True to return a summary for the offer. Defaults to False, which only returns the offer's basic metadata.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'async def get_offer(self, trade_id: bytes32, file_contents: bool = False) -> TradeRecord:\n  res = await self.fetch("get_offer", {"trade_id": trade_id.hex(), "file_contents": file_contents})\n  offer_str = res["offer"] if file_contents else ""\n  return TradeRecord.from_json_dict_convenience(res["trade_record"], offer_str)\n')),(0,n.kt)("h3",{id:"get_all_offers"},(0,n.kt)("inlineCode",{parentName:"h3"},"get_all_offers")),(0,n.kt)("p",null,"Gets all offers for the current wallet. Includes offers in every state."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"file_contents")," Set to True to return a summary for the offer. Defaults to False, which only returns the offer's basic metadata.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'async def get_all_offers(self, file_contents: bool = False) -> List[TradeRecord]:\n  res = await self.fetch("get_all_offers", {"file_contents": file_contents})\n\n  records = []\n  optional_offers = res["offers"] if file_contents else ([""] * len(res["trade_records"]))\n  for record, offer in zip(res["trade_records"], optional_offers):\n    records.append(TradeRecord.from_json_dict_convenience(record, offer))\n\n  return records\n')),(0,n.kt)("h3",{id:"cancel_offer"},(0,n.kt)("inlineCode",{parentName:"h3"},"cancel_offer")),(0,n.kt)("p",null,"Cancel an offer with a specific identifier."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"trade_id:")," The ID of the offer to examine. Can be retrieved from an offer file by calling ",(0,n.kt)("inlineCode",{parentName:"li"},"cdv inspect spendbundles <offer_file>"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"fee:")," An optional fee (in mojos) to include with the cancellation. Defaults to 0."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"secure:")," Defaults to True, which means \"cancel on blockchain,\" ie spend the coins being offered and create new coin's in the Maker's wallet. Set to False to cancel locally. See ",(0,n.kt)("a",{parentName:"li",href:"#cancellation",title:"Offer cancellation"},"cancellation")," for more info.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'async def cancel_offer(self, trade_id: bytes32, fee=uint64(0), secure: bool = True):\n  await self.fetch("cancel_offer", {"trade_id": trade_id.hex(), "secure": secure, "fee": fee})\n')))}u.isMDXComponent=!0}}]);