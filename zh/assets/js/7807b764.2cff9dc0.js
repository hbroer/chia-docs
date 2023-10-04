"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[3002],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>p});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(a),h=r,p=d["".concat(s,".").concat(h)]||d[h]||m[h]||o;return a?n.createElement(p,l(l({ref:t},c),{},{components:a})):n.createElement(p,l({ref:t},c))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),r=a(7294),o=a(6010),l=a(2466),i=a(6550),s=a(1980),u=a(7392),c=a(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,u]=p({queryString:a,groupId:n}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),k=(()=>{const e=s??d;return h({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var k=a(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==i&&(d(t),s(n))},h=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:m},l,{className:(0,o.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},r.createElement(g,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},4134:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var n=a(7462),r=(a(7294),a(3905)),o=a(4866),l=a(5162);const i={slug:"/guides/simulator-user-guide",title:"Simulator User Guide"},s=void 0,u={unversionedId:"guides/simulator-user-guide",id:"guides/simulator-user-guide",title:"Simulator User Guide",description:"This document will guide you through the process of setting up Chia's Simulator. For additional technical resources, see the following:",source:"@site/docs/guides/simulator-user-guide.md",sourceDirName:"guides",slug:"/guides/simulator-user-guide",permalink:"/zh/guides/simulator-user-guide",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/guides/simulator-user-guide.md",tags:[],version:"current",frontMatter:{slug:"/guides/simulator-user-guide",title:"Simulator User Guide"},sidebar:"guides",previous:{title:"Offers - CLI",permalink:"/zh/guides/offers-cli-tutorial"},next:{title:"Seeder User Guide",permalink:"/zh/guides/seeder-user-guide"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup instructions",id:"setup-instructions",level:2},{value:"Create the simulator",id:"create-the-simulator",level:3},{value:"Configure the environment",id:"configure-the-environment",level:3},{value:"Usage instructions",id:"usage-instructions",level:2},{value:"Start the simulator",id:"start-the-simulator",level:3},{value:"Start your Chia wallet",id:"start-your-chia-wallet",level:3},{value:"Show node status",id:"show-node-status",level:3},{value:"Show simulator status",id:"show-simulator-status",level:3},{value:"Farm a new block",id:"farm-a-new-block",level:3},{value:"Edit the configuration",id:"edit-the-configuration",level:3},{value:"Manage auto farming",id:"manage-auto-farming",level:3}],m={toc:d},h="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(h,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document will guide you through the process of setting up Chia's Simulator. For additional technical resources, see the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/simulator-rpc"},"Simulator RPC API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/simulator-cli"},"Simulator CLI Reference"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"It is possible to run the simulator and either Chia's testnet or mainnet simultaneously. This is because the simulator will use its own ports and directories.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"The simulator is included in the ",(0,r.kt)("inlineCode",{parentName:"p"},"chia-blockchain")," GitHub repository (the same repository that contains Chia's node, and farmer code). To install this repository, see our instructions to ",(0,r.kt)("a",{parentName:"p",href:"/installation#from-source"},"install Chia from source"),"."),(0,r.kt)("p",null,"After you have installed from source and have activated your virtual environment (you should see ",(0,r.kt)("inlineCode",{parentName:"p"},"(venv)")," on the left side of your command prompt), you are all set to install the simulator."),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"If you installed Chia from the binary installation file, you cannot use this installation to run the simulator. Instead, follow the instructions linked above to create a new installation from source, then return to this guide.")),(0,r.kt)("h2",{id:"setup-instructions"},"Setup instructions"),(0,r.kt)("p",null,"The simulator commands can all be accessed under ",(0,r.kt)("inlineCode",{parentName:"p"},"chia dev sim"),". For a full list of the simulator commands, see our ",(0,r.kt)("a",{parentName:"p",href:"/simulator-cli"},"Simulator CLI Reference"),"."),(0,r.kt)("h3",{id:"create-the-simulator"},"Create the simulator"),(0,r.kt)("p",null,"Run the following command and follow the prompts to create the simulator:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chia dev sim create\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Detailed command instructions"),(0,r.kt)("p",null,"If you do not already have any keys in your OS keychain, you will be prompted to create one:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"No keys in keychain. Press 'q' to quit, or press any other key to generate a new key.\n")),(0,r.kt)("p",null,"After pressing any key (other than ",(0,r.kt)("inlineCode",{parentName:"p"},"q"),"), a new public/private key pair will be generated:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Generating private key\n")),(0,r.kt)("p",null,"If you already have one or more keys installed, you will be prompted to select one:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Fingerprints:\nIf you already used one of these keys, select that fingerprint to skip the plotting process. Otherwise, select any key below.\n1) 3339549250\n2) 1239193935\n3) 378808701\nChoose a simulator key [1-3] ('q' to quit, or 'g' to generate a new key): 2\n")),(0,r.kt)("p",null,"This command will create several k-19 plots. These plots are significantly smaller than the k-32 plots used on mainnet (8 MiB vs 100 GiB). They will take less than a minute to create on most computers."),(0,r.kt)("p",null,"This command will also install a new version of Chia that contains a config file that is already set up for the simulator to run on its own ports. The last output of this command should look like the following (the path listed will depend on your user ID and OS):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Configuration Wizard Complete.\nStarting Simulator now...\n\n\nDaemon not started yet\nStarting daemon\nchia_full_node_simulator: started\nPlease wait, generating genesis block.\nFarmed 1 Transaction blocks\nBlock Height is now: 1\nGenesis block generated, exiting.\n\nMake sure your CHIA_ROOT Environment Variable is set to: C:\\Users\\<user>\\.chia\\simulator\\main\n"))),(0,r.kt)("h3",{id:"configure-the-environment"},"Configure the environment"),(0,r.kt)("p",null,"Now that you have created the simulator, you can set the ",(0,r.kt)("inlineCode",{parentName:"p"},"CHIA_ROOT")," environment variable to point to the simulator's installation directory. This will enable you to run the simulator from outside of ",(0,r.kt)("inlineCode",{parentName:"p"},"chia-blockchain"),":"),(0,r.kt)(o.Z,{defaultValue:"windows",groupId:"os",values:[{label:"Windows",value:"windows"},{label:"Linux / MacOS",value:"linux/macos"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"$env:CHIA_ROOT='~/.chia/simulator/main'\n"))),(0,r.kt)(l.Z,{value:"linux/macos",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export CHIA_ROOT='~/.chia/simulator/main'\n")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"By setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"CHIA_ROOT")," path to the simulator in the current shell window (rather than globally), this enables you to run the simulator in tandem with a full node running on either the testnet or on mainnet. This is because the simulator uses different ports than a normal full node.")),(0,r.kt)("h2",{id:"usage-instructions"},"Usage instructions"),(0,r.kt)("p",null,"This section will cover the basic commands for using the simulator."),(0,r.kt)("h3",{id:"start-the-simulator"},"Start the simulator"),(0,r.kt)("p",null,"Run the following command to start the simulator:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chia dev sim start\n")),(0,r.kt)("p",null,"This command is the equivalent of ",(0,r.kt)("inlineCode",{parentName:"p"},"chia start node")," on testnet and mainnet."),(0,r.kt)("h3",{id:"start-your-chia-wallet"},"Start your Chia wallet"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You will need to have your ",(0,r.kt)("inlineCode",{parentName:"p"},"CHIA_ROOT")," set before using this command, otherwise it will try to connect to your mainnet or testnet node.")),(0,r.kt)("p",null,"Run the following command to start the wallet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chia start wallet\n")),(0,r.kt)("h3",{id:"show-node-status"},"Show node status"),(0,r.kt)("p",null,"Run the following command to verify that the Chia node is running and synced:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chia show -s\n")),(0,r.kt)("p",null,"When connected to the simulator, the result will show that the network is ",(0,r.kt)("inlineCode",{parentName:"p"},"simulator0")," (and if newly created, the block height is 1)."),(0,r.kt)("p",null,"This is an example of what the output should look like:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Detailed command output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Network: simulator0    Port: 50127   RPC Port: 16872\nNode ID: 5e4775f1f7d7db43d9d4b5685a15959b52042e40918112053c5e99f59cb8afb7\nGenesis Challenge: eb8c4d20b322be8d9fddbf9412016bdffe9a2901d7edb0e364e94266d0e095f7\nCurrent Blockchain Status: Full Node Synced\n\nPeak: Hash: 2d42fe5b2fe275994542a3884e93d0ddd4271f46f61731cc8e523253f3d54474\n      Time: Fri May 19 2023 17:24:38 China Standard Time                  Height:          1\n\nEstimated network space: 84.355 MiB\nCurrent difficulty: 1024\nCurrent VDF sub_slot_iters: 1024\n\n  Height: |   Hash:\n        1 | b60936d7c4c7583ccbb4ddb173cefcb50ca10f8d49cee1c9bfc2f55337449b66\n"))),(0,r.kt)("h3",{id:"show-simulator-status"},"Show simulator status"),(0,r.kt)("p",null,"Run the following command to obtain the status of the network, along with your farming address and balance (21 million TXCH from the prefarm):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chia dev sim status\n")),(0,r.kt)("p",null,"This is an example of what the output should look like:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Detailed command output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Network: simulator0    Port: 50127   RPC Port: 16872\nNode ID: 5e4775f1f7d7db43d9d4b5685a15959b52042e40918112053c5e99f59cb8afb7\nGenesis Challenge: eb8c4d20b322be8d9fddbf9412016bdffe9a2901d7edb0e364e94266d0e095f7\nCurrent Blockchain Status: Full Node Synced\n\nPeak: Hash: 2d42fe5b2fe275994542a3884e93d0ddd4271f46f61731cc8e523253f3d54474\n      Time: Fri May 19 2023 17:24:38 China Standard Time                  Height:          1\n\nEstimated network space: 84.355 MiB\nCurrent difficulty: 1024\nCurrent VDF sub_slot_iters: 1024\n\n  Height: |   Hash:\n        1 | b60936d7c4c7583ccbb4ddb173cefcb50ca10f8d49cee1c9bfc2f55337449b66\n\nCurrent Farming address: txch1wn0jp4q6n3eafeee2qj4khw8svdqnvj4hxvzffl9pjrv5wvzf5gsvyz908, with a balance of: 21000000.0 TXCH.\n"))),(0,r.kt)("h3",{id:"farm-a-new-block"},"Farm a new block"),(0,r.kt)("p",null,"You can farm a new block with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chia dev sim farm\n")),(0,r.kt)("p",null,"You can also send the farming reward to a specific address:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chia dev sim farm --target-address <address>\n")),(0,r.kt)("p",null,"And farm multiple blocks at once:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chia dev sim farm --blocks 5\n")),(0,r.kt)("p",null,"For more info on this command, see the ",(0,r.kt)("a",{parentName:"p",href:"/simulator-cli#farm"},"CLI documentation"),"."),(0,r.kt)("h3",{id:"edit-the-configuration"},"Edit the configuration"),(0,r.kt)("p",null,"The simulator's config is stored in ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.chia/simulator/main/config/config.yaml"),". Just as with mainnet and testnet, if you make changes to this config, you will need to restart the simulator for the changes to take effect. This will not affect your regular Chia node."),(0,r.kt)("h3",{id:"manage-auto-farming"},"Manage auto farming"),(0,r.kt)("p",null,"By default, as soon as a new spend bundle enters the mempool, a new block will be farmed. In certain cases this may not be the desired behavior. To disable auto farming, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chia dev sim autofarm off\n")),(0,r.kt)("p",null,"This action will take effect immediately, and there is no need to restart the simulator."),(0,r.kt)("p",null,"Similarly, you can turn auto farming back on:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chia dev sim autofarm on\n")))}p.isMDXComponent=!0}}]);