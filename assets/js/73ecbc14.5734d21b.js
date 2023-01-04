"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[1157],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>h});var n=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function r(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=p(t),m=l,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return t?n.createElement(h,i(i({ref:a},u),{},{components:t})):n.createElement(h,i({ref:a},u))}));function h(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var o=t.length,i=new Array(o);i[0]=m;var r={};for(var s in a)hasOwnProperty.call(a,s)&&(r[s]=a[s]);r.originalType=e,r[c]="string"==typeof e?e:l,i[1]=r;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:(e,a,t)=>{t.d(a,{Z:()=>i});var n=t(7294),l=t(6010);const o="tabItem_Ymn6";function i(e){let{children:a,hidden:t,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(o,i),hidden:t},a)}},5488:(e,a,t)=>{t.d(a,{Z:()=>m});var n=t(7462),l=t(7294),o=t(6010),i=t(2389),r=t(7392),s=t(7094),p=t(2466);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){const{lazy:a,block:t,defaultValue:i,values:d,groupId:m,className:h}=e,k=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=d??k.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),b=(0,r.l)(N,((e,a)=>e.value===a.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===i?i:i??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==f&&!N.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:y}=(0,s.U)(),[T,w]=(0,l.useState)(f),v=[],{blockElementScrollPositionUntilNextRender:C}=(0,p.o5)();if(null!=m){const e=g[m];null!=e&&e!==T&&N.some((a=>a.value===e))&&w(e)}const x=e=>{const a=e.currentTarget,t=v.indexOf(a),n=N[t].value;n!==T&&(C(a),w(n),null!=m&&y(m,String(n)))},I=e=>{let a=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const t=v.indexOf(e.currentTarget)+1;a=v[t]??v[0];break}case"ArrowLeft":{const t=v.indexOf(e.currentTarget)-1;a=v[t]??v[v.length-1];break}}a?.focus()};return l.createElement("div",{className:(0,o.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},h)},N.map((e=>{let{value:a,label:t,attributes:i}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===a?0:-1,"aria-selected":T===a,key:a,ref:e=>v.push(e),onKeyDown:I,onClick:x},i,{className:(0,o.Z)("tabs__item",c,i?.className,{"tabs__item--active":T===a})}),t??a)}))),a?(0,l.cloneElement)(k.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},k.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==T})))))}function m(e){const a=(0,i.Z)();return l.createElement(d,(0,n.Z)({key:String(a)},e))}},8742:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var n=t(7462),l=(t(7294),t(3905)),o=t(5488),i=t(5162);const r={title:"CAT1 Snapshot Generation",sidebar_label:"2. Snapshot Generation",slug:"/cat2-snapshot"},s=void 0,p={unversionedId:"cat2/cat2-snapshot",id:"cat2/cat2-snapshot",title:"CAT1 Snapshot Generation",description:"CAT1 will reach its end of life at block 2,311,760, which will occur on July 26, 2022 at around 17:00 UTC.",source:"@site/docs/cat2/cat2-snapshot.mdx",sourceDirName:"cat2",slug:"/cat2-snapshot",permalink:"/cat2-snapshot",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/cat2/cat2-snapshot.mdx",tags:[],version:"current",frontMatter:{title:"CAT1 Snapshot Generation",sidebar_label:"2. Snapshot Generation",slug:"/cat2-snapshot"},sidebar:"tutorialSidebar",previous:{title:"1. Intro and FAQ",permalink:"/cat2-intro"},next:{title:"3. Token Reissuance",permalink:"/cat2-issuance"}},u={},c=[{value:"Generate a CAT1 Snapshot",id:"generate",level:2},{value:"Export Your Data from the Snapshot",id:"export",level:2},{value:"Fix EOL Characters",id:"fix-eol",level:2},{value:"Data Cleanup",id:"cleanup",level:2},{value:"Export Data for all CATs",id:"export-all",level:2}],d={toc:c};function m(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"CAT1 will reach its end of life at block 2,311,760, which will occur on July 26, 2022 at around 17:00 UTC."),(0,l.kt)("p",{parentName:"admonition"},"For more information on this end-of-life process, see the ",(0,l.kt)("a",{parentName:"p",href:"/cat2-intro"},"Intro and FAQ page"),".")),(0,l.kt)("p",null,"This document will show CAT1 issuers how to:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Generate a snapshot of their CAT1 status. This will show the puzzle hash (address) and value of each individual token at the end-of-life block height"),(0,l.kt)("li",{parentName:"ol"},"Export their required data from the snapshot")),(0,l.kt)("p",null,"After completing this, CAT issuers will be able to proceed to the ",(0,l.kt)("a",{parentName:"p",href:"/cat2-issuance"},"Token Reissuance guide"),"."),(0,l.kt)("h2",{id:"generate"},"Generate a CAT1 Snapshot"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"We recommend that you follow this section to generate your own snapshot of your CAT1 tokens. Please note that this process could take over 40 hours to complete. For your convenience and reference, we will also publish our own snapshot, which should be identical to the snapshot that you produce.")),(0,l.kt)("p",null,"This section will show you how to install the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/CAT-addresses"},"CAT-addresses tool")," and use it to get a snapshot of the puzzle hash (address) and value of each coin of a particular CAT1. It can even obtain this info for all CAT1s on Chia's blockchain.'"),(0,l.kt)("admonition",{type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"In order to use this tool, you are required to run a fully synced Chia node. This node must be running version 1.5 or greater. Please ensure that you have satisfied both of these requirements before continuing.")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open a terminal window and ensure you have direct access to the ",(0,l.kt)("inlineCode",{parentName:"p"},"chia")," command by doing one of the following:"),(0,l.kt)(o.Z,{defaultValue:"windows",groupId:"os",values:[{label:"Windows",value:"windows"},{label:"Linux",value:"linux"},{label:"macOS",value:"macos"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"windows",mdxType:"TabItem"},(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"If you previously installed Chia from a ",(0,l.kt)("strong",{parentName:"li"},"binary build"),", then set up an alias to the ",(0,l.kt)("inlineCode",{parentName:"li"},"chia")," command:")),(0,l.kt)("admonition",{parentName:"li",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Ensure that you replace ",(0,l.kt)("inlineCode",{parentName:"p"},"<USERNAME>")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"<VERSION>")," with the actual folders")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},'Set-Alias -Name chia "C:\\Users\\<USERNAME>\\AppData\\Local\\chia-blockchain\\app-<VERSION>\\resources\\app.asar.unpacked\\daemon\\chia.exe"\n')),(0,l.kt)("ol",{parentName:"li",start:2},(0,l.kt)("li",{parentName:"ol"},"If you previously installed Chia ",(0,l.kt)("strong",{parentName:"li"},"from source"),", then navigate to the ",(0,l.kt)("inlineCode",{parentName:"li"},"chia-blockchain")," directory and activate your virtual environment:")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},".\\venv\\Scripts\\Activate.ps1\n"))),(0,l.kt)(i.Z,{value:"linux",mdxType:"TabItem"},(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"If you previously installed Chia from a ",(0,l.kt)("strong",{parentName:"p"},"binary build"),", then ensure that the ",(0,l.kt)("inlineCode",{parentName:"p"},"chia")," binary's directory is included in your ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"If you previously installed Chia ",(0,l.kt)("strong",{parentName:"p"},"from source"),", then navigate to the ",(0,l.kt)("inlineCode",{parentName:"p"},"chia-blockchain")," directory and activate your virtual environment:"))),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},". ./activate\n"))),(0,l.kt)(i.Z,{value:"macos",mdxType:"TabItem"},(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"If you previously installed Chia from a ",(0,l.kt)("strong",{parentName:"li"},"binary build"),", then set up an alias to the ",(0,l.kt)("inlineCode",{parentName:"li"},"chia")," command:")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'alias chia="/Applications/Chia.app/Contents/Resources/app.asar.unpacked/daemon/chia"\n')),(0,l.kt)("ol",{parentName:"li",start:2},(0,l.kt)("li",{parentName:"ol"},"If you previously installed Chia ",(0,l.kt)("strong",{parentName:"li"},"from source"),", then navigate to the ",(0,l.kt)("inlineCode",{parentName:"li"},"chia-blockchain")," directory and activate your virtual environment:")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},". ./activate\n"))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run the following command:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chia version\n")),(0,l.kt)("p",{parentName:"li"},"If step 1 was successful, you should see a version number in the output, such as ",(0,l.kt)("inlineCode",{parentName:"p"},"1.5.0"),". This is a requirement for the snapshot tool to work.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"From the same terminal window, create a new directory in which to install the ",(0,l.kt)("inlineCode",{parentName:"p"},"CAT-addresses")," repository (it can be in the parent directory) and run the following:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/Chia-Network/CAT-addresses.git -b main\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The following environment variables need to be set in order to use this tool:"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"FULL_NODE_HOSTNAME")," - The hostname of the full node to call the RPCs against. This can be ",(0,l.kt)("inlineCode",{parentName:"li"},"localhost"),"."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"DB_SOURCE_DIR")," - The location of the full node database on the host machine."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"START_HEIGHT")," - The height of the blockchain to start creating the snapshot from (default: ",(0,l.kt)("inlineCode",{parentName:"li"},"0"),"). If you are attempting to obtain all records for your CAT, the recommended start height is ",(0,l.kt)("inlineCode",{parentName:"li"},"1146800"),", which is just before CAT1 was introduced."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"TARGET_HEIGHT")," - The height of the blockchain to end the snapshot (no default - must be set). The recommended height is ",(0,l.kt)("inlineCode",{parentName:"li"},"2311760"),", which is the last block at which CAT1 is valid.")),(0,l.kt)("admonition",{parentName:"li",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Running this process with the recommended block heights could take over 40 hours to complete. You may wish to test it first by setting the ",(0,l.kt)("inlineCode",{parentName:"p"},"TARGET_HEIGHT")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"1146900"),". This will pull data from only 100 blocks, which should only take a few seconds.")),(0,l.kt)("p",{parentName:"li"},"In order to set these variables, you are recommended to put them into a file called ",(0,l.kt)("inlineCode",{parentName:"p"},".env")," at the root of the ",(0,l.kt)("inlineCode",{parentName:"p"},"CAT-addresses")," project. The tool will automatically read the variables in this file. For example:"),(0,l.kt)(o.Z,{defaultValue:"windows",groupId:"os",values:[{label:"Windows",value:"windows"},{label:"Linux",value:"linux"},{label:"macOS",value:"macos"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"windows",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=".env"',title:'".env"'},"FULL_NODE_HOSTNAME=localhost\nDB_SOURCE_DIR=C:\\Users\\Username\\.chia\\mainnet\\db\nSTART_HEIGHT=1146800\nTARGET_HEIGHT=2311760\n"))),(0,l.kt)(i.Z,{value:"linux",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=".env"',title:'".env"'},"FULL_NODE_HOSTNAME=localhost\nDB_SOURCE_DIR=/home/Username/.chia/mainnet/db\nSTART_HEIGHT=1146800\nTARGET_HEIGHT=2311760\n"))),(0,l.kt)(i.Z,{value:"macos",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=".env"',title:'".env"'},"FULL_NODE_HOSTNAME=localhost\nDB_SOURCE_DIR=/Users/Username/.chia/mainnet/db\nSTART_HEIGHT=1146800\nTARGET_HEIGHT=2311760\n"))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Install dependencies:"),(0,l.kt)(o.Z,{defaultValue:"windows",groupId:"os",values:[{label:"Windows",value:"windows"},{label:"Linux",value:"linux"},{label:"macOS",value:"macos"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"windows",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"python setup.py install\n"))),(0,l.kt)(i.Z,{value:"linux",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 setup.py install\n"))),(0,l.kt)(i.Z,{value:"macos",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 setup.py install\n")))),(0,l.kt)("admonition",{parentName:"li",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"The result may contain several warnings such as ",(0,l.kt)("inlineCode",{parentName:"p"},"WARNING: The wheel package is not available.")," These can be safely ignored.")),(0,l.kt)("p",{parentName:"li"},"This command may take a few minutes to complete. At the end of the output, you should see something like:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},'Finished processing dependencies for chia-transaction-exporter==0.1.dev55"\n'))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Install the ",(0,l.kt)("inlineCode",{parentName:"p"},"dotenv")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"backoff")," modules:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pip install python-dotenv\npip install backoff\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Set up the database:"),(0,l.kt)(o.Z,{defaultValue:"windows",groupId:"os",values:[{label:"Windows",value:"windows"},{label:"Linux",value:"linux"},{label:"macOS",value:"macos"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"windows",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"python setup_database.py\n"))),(0,l.kt)(i.Z,{value:"linux",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 setup_database.py\n"))),(0,l.kt)(i.Z,{value:"macos",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 setup_database.py\n")))),(0,l.kt)("admonition",{parentName:"li",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"If you receive an error message such as ",(0,l.kt)("inlineCode",{parentName:"p"},"ModuleNotFoundError: No module named 'chia'"),", then make sure you can run the ",(0,l.kt)("inlineCode",{parentName:"p"},"chia")," command from this directory and try again.")),(0,l.kt)("p",{parentName:"li"},"If this command succeeds, then it will output:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"INFO:setup_database:Setting up database\nINFO:setup_database:Database setup complete\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Start the snapshot generator:"),(0,l.kt)(o.Z,{defaultValue:"windows",groupId:"os",values:[{label:"Windows",value:"windows"},{label:"Linux",value:"linux"},{label:"macOS",value:"macos"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"windows",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"python start.py\n"))),(0,l.kt)(i.Z,{value:"linux",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 start.py\n"))),(0,l.kt)(i.Z,{value:"macos",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 start.py\n")))),(0,l.kt)("p",{parentName:"li"},"This command will show its progress according to the block height. If you used the recommended range for ",(0,l.kt)("inlineCode",{parentName:"p"},"START_HEIGHT")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"TARGET_HEIGHT")," in your ",(0,l.kt)("inlineCode",{parentName:"p"},".env")," file, then this command could take over 40 hours to complete. The reason it takes so long is it needs to process each block, one at a time. If multiple blocks were done in parallel, then there would be a chance that the results would not be accurate. By processing one block at a time, the tool will return the correct results for the range provided."),(0,l.kt)("admonition",{parentName:"li",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"You can only generate a snapshot for each block once. If you attempt to run this command over a range against which it has already been run, you will receive an error containing this message:"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre"},"sqlite3.IntegrityError: UNIQUE constraint failed: coin_create.coin_name\n")),(0,l.kt)("p",{parentName:"admonition"},"In this case, you either need to start from a higher height, or (recommended) start over. Follow the ",(0,l.kt)("a",{parentName:"p",href:"#cleanup"},"Data Cleanup section")," and try again.")))),(0,l.kt)("h2",{id:"export"},"Export Your Data from the Snapshot"),(0,l.kt)("p",null,"Once you have populated the database with a snapshot, you can run a data export."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Navigate to ",(0,l.kt)("a",{parentName:"p",href:"https://www.taildatabase.com/"},"taildatabase.com"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Search for your CAT. We'll use ",(0,l.kt)("a",{parentName:"p",href:"https://www.taildatabase.com/tail/1121996b75cce3c746369aced2c8887b02b84e95592c3dc006d82a145adf349a"},"CAT King Cole")," for this example. Note the TAIL hash, which is listed above the title of the token. In this example, it's:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"1121996b75cce3c746369aced2c8887b02b84e95592c3dc006d82a145adf349a\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Generate a CSV file containing all inner puzzle hashes and amounts for your CAT:"),(0,l.kt)(o.Z,{defaultValue:"windows",groupId:"os",values:[{label:"Windows",value:"windows"},{label:"Linux",value:"linux"},{label:"macOS",value:"macos"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"windows",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"python export.py --output-dir <OUTPUT-DIR>\\<PREFIX> --tail-hash <TAIL-HASH> --coins\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example command"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"python export.py --output-dir C:\\Users\\Username\\Chia\\CAT-addresses\\results\\CKC_ --tail-hash 1121996b75cce3c746369aced2c8887b02b84e95592c3dc006d82a145adf349a\n")))),(0,l.kt)(i.Z,{value:"linux",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 export.py --output-dir <OUTPUT-DIR>/<PREFIX> --tail-hash <TAIL-HASH> --coins\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example command"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 export.py --output-dir /home/Username/CAT-addresses/results/CKC_ --tail-hash 1121996b75cce3c746369aced2c8887b02b84e95592c3dc006d82a145adf349a\n")))),(0,l.kt)(i.Z,{value:"macos",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 export.py --output-dir <OUTPUT-DIR>/<PREFIX> --tail-hash <TAIL-HASH> --coins\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example command"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 export.py --output-dir /Users/Username/CAT-addresses/results/CKC_ --tail-hash 1121996b75cce3c746369aced2c8887b02b84e95592c3dc006d82a145adf349a\n"))))),(0,l.kt)("admonition",{parentName:"li",type:"info"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<OUTPUT-DIR>")," - a directory of your choice in which to save the CSV file"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<PREFIX>")," - a string to be prepended to the output file name"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<TAIL-HASH>")," - the TAIL hash you obtained from taildatabase.com"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--coins")," - an ",(0,l.kt)("strong",{parentName:"li"},"optional")," flag that will add information about individual coins to the output (which might be helpful for auditing purposes)\n:::"))),(0,l.kt)("p",{parentName:"li"},"This command will not create any directories, so make sure ",(0,l.kt)("inlineCode",{parentName:"p"},"<OUTPUT-DIR>")," already exists before running it. Otherwise, you will receive a ",(0,l.kt)("inlineCode",{parentName:"p"},"FileNotFoundError"),".\n:::"))),(0,l.kt)("h2",{id:"fix-eol"},"Fix EOL Characters"),(0,l.kt)("p",null,"This step is ",(0,l.kt)("strong",{parentName:"p"},"required for Windows users"),", and not needed for Linux or macOS users."),(0,l.kt)("p",null,"If you are running on Windows, the CSV file will contain an extra CR (carriage return) character at the end of each line. This will cause ",(0,l.kt)("a",{parentName:"p",href:"/cat2-issuance#secure-single"},'"Secure the Bag"')," to fail. First, you must convert the CSV file to use UNIX-style end-of-line characters."),(0,l.kt)("p",null,"The easiest way to accomplish this is with ",(0,l.kt)("inlineCode",{parentName:"p"},"dos2unix"),". This is not included with Windows, so you will need to download it from SourceForge."),(0,l.kt)("p",null,"Steps to convert the CSV file:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Visit the ",(0,l.kt)("a",{parentName:"li",href:"https://sourceforge.net/projects/dos2unix/"},"SourceForge dos2unix site"),"."),(0,l.kt)("li",{parentName:"ol"},"Click the green ",(0,l.kt)("em",{parentName:"li"},'"Download"')," button. After five seconds, the ",(0,l.kt)("inlineCode",{parentName:"li"},"dos2unix")," zip file will be downloaded to your Downloads folder."),(0,l.kt)("li",{parentName:"ol"},"Unzip the ",(0,l.kt)("inlineCode",{parentName:"li"},"dos2unix")," zip file."),(0,l.kt)("li",{parentName:"ol"},"From a PowerShell window, run:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"<path to dos2unix.exe> -o <path to CSV file>\n")),(0,l.kt)("p",null,"For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"~\\Downloads\\dos2unix\\bin\\dos2unix.exe -o .\\results\\CKC_1121996b75cce3c746369aced2c8887b02b84e95592c3dc006d82a145adf349a.1658233083.183527.csv\n")),(0,l.kt)("p",null,"This message should appear in the output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"dos2unix: converting file <CSV file> to Unix format...\n")),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"To verify that the conversion was successful, open the file. There should be no blank lines between the entries.")),(0,l.kt)("h2",{id:"cleanup"},"Data Cleanup"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Optional:")," If the application exits partway through a run, it will only have imported some blocks at a particular height. You can delete the records from the database at and above a provided height by running the following command:"),(0,l.kt)(o.Z,{defaultValue:"windows",groupId:"os",values:[{label:"Windows",value:"windows"},{label:"Linux",value:"linux"},{label:"macOS",value:"macos"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"windows",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"python clean.py --height <BLOCK-HEIGHT>\n"))),(0,l.kt)(i.Z,{value:"linux",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 clean.py --height <BLOCK-HEIGHT>\n"))),(0,l.kt)(i.Z,{value:"macos",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 clean.py --height <BLOCK-HEIGHT>\n")))),(0,l.kt)("h2",{id:"export-all"},"Export Data for all CATs"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Optional:")," If you wish to obtain the balance of all CATs on the Chia blockchain, you can run ",(0,l.kt)("inlineCode",{parentName:"p"},"export-py")," with various different options:"),(0,l.kt)(o.Z,{defaultValue:"windows",groupId:"os",values:[{label:"Windows",value:"windows"},{label:"Linux",value:"linux"},{label:"macOS",value:"macos"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"windows",mdxType:"TabItem"},(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"--tail-hash")," flag can be dropped, resulting in an output of a single CSV file containing every puzzle hash amount for every CAT on the Chia blockchain:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"python export.py --output-dir <OUTPUT-DIR>\\<PREFIX>\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"--coins")," flag can be added, which will add information about individual coins:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"python export.py --output-dir <OUTPUT-DIR>\\<PREFIX> --coins\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"--explode")," flag can be added, which will generate multiple CSV files, each of which containing a single CAT's puzzle hashes and amounts:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"python export.py --output-dir <OUTPUT-DIR>\\<PREFIX> --explode\n")),(0,l.kt)("p",null,"You can also use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--explode")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"--coins")," flags together, which will generate individual CSV files that also contain coin info.")),(0,l.kt)(i.Z,{value:"linux",mdxType:"TabItem"},(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"--tail-hash")," flag can be dropped, resulting in an output of a single CSV file containing every puzzle hash amount for every CAT on the Chia blockchain:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 export.py --output-dir <OUTPUT-DIR>/<PREFIX>\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"--coins")," flag can be added, which will add information about individual coins:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 export.py --output-dir <OUTPUT-DIR>/<PREFIX> --coins\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"--explode")," flag can be added, which will generate multiple CSV files, each of which containing a single CAT's puzzle hashes and amounts:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 export.py --output-dir <OUTPUT-DIR>/<PREFIX> --explode\n")),(0,l.kt)("p",null,"You can also use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--explode")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"--coins")," flags together, which will generate individual CSV files that also contain coin info.")),(0,l.kt)(i.Z,{value:"macos",mdxType:"TabItem"},(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"--tail-hash")," flag can be dropped, resulting in an output of a single CSV file containing every puzzle hash amount for every CAT on the Chia blockchain:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 export.py --output-dir <OUTPUT-DIR>/<PREFIX>\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"--coins")," flag can be added, which will add information about individual coins:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 export.py --output-dir <OUTPUT-DIR>/<PREFIX> --coins\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"--explode")," flag can be added, which will generate multiple CSV files, each of which containing a single CAT's puzzle hashes and amounts:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 export.py --output-dir <OUTPUT-DIR>/<PREFIX> --explode\n")),(0,l.kt)("p",null,"You can also use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--explode")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"--coins")," flags together, which will generate individual CSV files that also contain coin info."))))}m.isMDXComponent=!0}}]);