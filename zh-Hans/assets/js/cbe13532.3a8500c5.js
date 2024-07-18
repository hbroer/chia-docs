"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[5522],{616:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var n=l(5893),s=l(1151);l(4866),l(5162);const r={slug:"/walletconnect-developer-guide",title:"WalletConnect Developer Guide"},i=void 0,d={id:"guides/walletconnect/walletconnect-developer-guide",title:"WalletConnect Developer Guide",description:"Intro",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/walletconnect/walletconnect-developer-guide.md",sourceDirName:"guides/walletconnect",slug:"/walletconnect-developer-guide",permalink:"/zh-Hans/walletconnect-developer-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/guides/walletconnect/walletconnect-developer-guide.md",tags:[],version:"current",frontMatter:{slug:"/walletconnect-developer-guide",title:"WalletConnect Developer Guide"},sidebar:"guides",previous:{title:"WalletConnect User Guide",permalink:"/zh-Hans/walletconnect-user-guide"},next:{title:"Video Series",permalink:"/zh-Hans/guides/video-series"}},a={},c=[{value:"Intro",id:"intro",level:2},{value:"RPC Calls",id:"rpc-calls",level:2}];function o(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"intro",children:"Intro"}),"\n",(0,n.jsxs)(t.p,{children:["This guide will help developers to create dApps on Chia's blockchain using ",(0,n.jsx)(t.a,{href:"https://walletconnect.com/",children:"WalletConnect"}),". It will be expanded upon as more tools are introduced."]}),"\n",(0,n.jsxs)(t.p,{children:["For more info, see our WalletConnect ",(0,n.jsx)(t.a,{href:"/walletconnect-commands/",children:"command documentation"}),"."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"rpc-calls",children:"RPC Calls"}),"\n",(0,n.jsx)(t.p,{children:"The following table shows each RPC for Chia WalletConnect dApps, along with a description of what each RPC does, and a link to the equivalent Chia RPC:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"WalletConnect RPC"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Chia Wallet RPC"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"addCATtoken"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/wallet-rpc#create_new_wallet",children:"create_new_wallet"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Create a new wallet for CATs"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"addVCProofs"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/vc-rpc/#vc_add_proofs",children:"vc_add_proofs"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Add a set of proofs to the DB that can be used when spending a VC"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"cancelOffer"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/wallet-rpc#cancel_offer",children:"cancel_offer"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Cancel an offer"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"checkOfferValidity"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/wallet-rpc#check_offer_validity",children:"check_offer_validity"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Check if an offer is valid"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"createNewDIDWallet"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/did-rpc/#create_new_wallet",children:"create_new_wallet"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Create a new DID wallet"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"createOfferForIDs"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/wallet-rpc#create_offer_for_ids",children:"create_offer_for_ids"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Create a new offer"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"getAllOffers"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/wallet-rpc#get_all_offers",children:"get_all_offers"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Show the details of all offers for this wallet"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"getCATAssetId"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/wallet-rpc#cat_get_asset_id",children:"cat_get_asset_id"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Retrieve a the asset ID from a CAT wallet"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"getCATWalletInfo"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/wallet-rpc/#get_wallets",children:"get_wallets"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Get CAT Wallet Info"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"getCurrentAddress"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,n.jsx)(t.a,{href:"/wallet-rpc#get_next_address",children:"get_next_address"}),"*"]}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Set ",(0,n.jsx)(t.code,{children:"new_address"})," to ",(0,n.jsx)(t.code,{children:"false"})," to use the current address"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"getNextAddress"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,n.jsx)(t.a,{href:"/wallet-rpc#get_next_address",children:"get_next_address"}),"*"]}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Set ",(0,n.jsx)(t.code,{children:"new_address"})," to ",(0,n.jsx)(t.code,{children:"true"})," to create a new address"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"getNFTsCount"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/nft-rpc/#nft_count_nfts",children:"nft_count_nfts"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Count the number of NFTs in a wallet"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"getNFTInfo"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/nft-rpc/#nft_get_info",children:"nft_get_info"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Get info about an NFT"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"getNFTs"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/nft-rpc/#nft_get_nfts",children:"nft_get_nfts"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Show all NFTs in a given wallet"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"getNFTWalletsWithDIDs"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/nft-rpc/#nft_get_wallets_with_dids",children:"nft_get_wallets_with_dids"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Show all NFT wallets that are associated with DIDs"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"getOfferData"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/wallet-rpc#get_offer",children:"get_offer"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Show the details of one offer"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"getOfferRecord"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/wallet-rpc#get_all_offers",children:"get_all_offers"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Show the details of all offers for this wallet"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"getOffersCount"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/wallet-rpc#get_offers_count",children:"get_offers_count"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Obtain the number of offers from the current wallet"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"getOfferSummary"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/wallet-rpc#get_offer_summary",children:"get_offer_summary"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Show a summary of an offer"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"getProofsForRoot"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/vc-rpc/#vc_get_proofs_for_root",children:"vc_get_proofs_for_root"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Given a specified VC root, get any proofs associated with that root"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"getPublicKey"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/daemon-rpc#get_public_key",children:"get_public_key"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Request the user to provide their master public key"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"getSyncStatus"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/wallet-rpc#get_sync_status",children:"get_sync_status"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Show whether the current wallet is syncing or synced"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"getTransaction"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/wallet-rpc#get_transaction",children:"get_transaction"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Get a transaction's details from its ID"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"getVC"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/vc-rpc/#vc_get",children:"vc_get"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Given a launcher ID, get the Verifiable Credential"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"getVCList"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/vc-rpc/#vc_get_list",children:"vc_get_list"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Get a list of Verifiable Credentials"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"getWalletAddresses"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/daemon-rpc/#get_wallet_addresses",children:"get_wallet_addresses"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Get wallet addresses for one or more wallet keys"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"getWalletBalance"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/wallet-rpc#get_wallet_balance",children:"get_wallet_balance"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Obtain the balance (and related info) from a wallet"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"getWalletBalances"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/wallet-rpc/#get_wallet_balances",children:"get_wallet_balances"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Request the asset balances for specific wallets associated with the current wallet key"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"getWallets"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/wallet-rpc#get_wallets",children:"get_wallets"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Show all wallets associated with the current fingerprint, including (by default) coin information"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"logIn"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/wallet-rpc#log_in",children:"log_in"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Log into the wallet with the specified key"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"mintNFT"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/nft-rpc/#nft_mint_nft",children:"nft_mint_nft"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Mint an NFT"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"revokeVC"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/vc-rpc/#vc_revoke",children:"vc_revoke"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Revoke an on chain VC provided the correct DID is available"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"sendTransaction"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/wallet-rpc#send_transaction",children:"send_transaction"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Send a transaction"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"setDIDName"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/did-rpc/#did_set_wallet_name",children:"did_set_wallet_name"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Set the name of a DID wallet"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"setNFTDID"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/nft-rpc/#nft_set_nft_did",children:"nft_set_nft_did"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Set the DID for an NFT"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"showNotification"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/wallet-rpc/#get_notifications",children:"get_notifications"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Show notification with offer or general announcement"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"signMessageByAddress"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/wallet-rpc#sign_message_by_address",children:"sign_message_by_address"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Sign a message using an XCH address without incurring an on-chain transaction"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"signMessageById"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/wallet-rpc#sign_message_by_id",children:"sign_message_by_id"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Sign a message using a DID or NFT ID without incurring an on-chain transaction"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"spendCAT"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/wallet-rpc#cat_spend",children:"cat_spend"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Send CAT funds to another wallet"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"spendClawbackCoins"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/wallet-rpc/#spend_clawback_coins",children:"spend_clawback_coins"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Claw back or claim claw back transaction"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"takeOffer"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/wallet-rpc#take_offer",children:"take_offer"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Take an offer"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"transferNFT"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/nft-rpc#nft_transfer_nft",children:"nft_transfer_nft"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Transfer an NFT to a new wallet address"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"spendVC"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/vc-rpc/#vc_spend",children:"vc_spend"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Add Proofs To Verifiable Credential"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"verifySignature"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/wallet-rpc#verify_signature",children:"verify_signature"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Given a public key, message and signature, verify if it is valid"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"waitForConfirmation"}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},5162:(e,t,l)=>{l.d(t,{Z:()=>i});l(7294);var n=l(512);const s={tabItem:"tabItem_Ymn6"};var r=l(5893);function i(e){let{children:t,hidden:l,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,i),hidden:l,children:t})}},4866:(e,t,l)=>{l.d(t,{Z:()=>m});var n=l(7294),s=l(512),r=l(2466),i=l(6550),d=l(469),a=l(1980),c=l(7392),o=l(812);function h(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:t,children:l}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:l,attributes:n,default:s}}=e;return{value:t,label:l,attributes:n,default:s}}))}(l);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,l])}function x(e){let{value:t,tabValues:l}=e;return l.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:l}=e;const s=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:l}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:t,groupId:l});return[(0,a._X)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(s.location.search);t.set(r,e),s.replace({...s.location,search:t.toString()})}),[r,s])]}function u(e){const{defaultValue:t,queryString:l=!1,groupId:s}=e,r=f(e),[i,a]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=l.find((e=>e.default))??l[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[c,h]=g({queryString:l,groupId:s}),[u,j]=function(e){let{groupId:t}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,r]=(0,o.Nk)(l);return[s,(0,n.useCallback)((e=>{l&&r.set(e)}),[l,r])]}({groupId:s}),y=(()=>{const e=c??u;return x({value:e,tabValues:r})?e:null})();(0,d.Z)((()=>{y&&a(y)}),[y]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!x({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),j(e)}),[h,j,r]),tabValues:r}}var j=l(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var _=l(5893);function p(e){let{className:t,block:l,selectedValue:n,selectValue:i,tabValues:d}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),o=e=>{const t=e.currentTarget,l=a.indexOf(t),s=d[l].value;s!==n&&(c(t),i(s))},h=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const l=a.indexOf(e.currentTarget)+1;t=a[l]??a[0];break}case"ArrowLeft":{const l=a.indexOf(e.currentTarget)-1;t=a[l]??a[a.length-1];break}}t?.focus()};return(0,_.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":l},t),children:d.map((e=>{let{value:t,label:l,attributes:r}=e;return(0,_.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>a.push(e),onKeyDown:h,onClick:o,...r,className:(0,s.Z)("tabs__item",y.tabItem,r?.className,{"tabs__item--active":n===t}),children:l??t},t)}))})}function A(e){let{lazy:t,children:l,selectedValue:s}=e;const r=(Array.isArray(l)?l:[l]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,_.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function w(e){const t=u(e);return(0,_.jsxs)("div",{className:(0,s.Z)("tabs-container",y.tabList),children:[(0,_.jsx)(p,{...t,...e}),(0,_.jsx)(A,{...t,...e})]})}function m(e){const t=(0,j.Z)();return(0,_.jsx)(w,{...e,children:h(e.children)},String(t))}},1151:(e,t,l)=>{l.d(t,{Z:()=>d,a:()=>i});var n=l(7294);const s={},r=n.createContext(s);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);