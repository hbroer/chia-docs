"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[5646],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=o,m=c["".concat(l,".").concat(d)]||c[d]||h[d]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2551:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={title:"Node Syncing",slug:"/node-syncing"},i=void 0,s={unversionedId:"reference-client/node-syncing",id:"reference-client/node-syncing",title:"Node Syncing",description:"Port forwarding port 8444 can solve many sync issues and it helps improve Chia's network health.",source:"@site/docs/reference-client/node-syncing.md",sourceDirName:"reference-client",slug:"/node-syncing",permalink:"/zh/node-syncing",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/reference-client/node-syncing.md",tags:[],version:"current",frontMatter:{title:"Node Syncing",slug:"/node-syncing"},sidebar:"tutorialSidebar",previous:{title:"Check if Things are Working",permalink:"/zh/check-if-things-are-working"},next:{title:"Key Management",permalink:"/zh/chia-key-management"}},l={},u=[{value:"Port Forwarding Settings",id:"port-forwarding-settings",level:2},{value:"Why forward port 8444?",id:"why-forward-port-8444",level:2},{value:"Speed up connecting to nodes",id:"speed-up-connecting-to-nodes",level:2},{value:"Dealing With Carrier-Grade NAT",id:"dealing-with-carrier-grade-nat",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Port forwarding port 8444 can solve many sync issues and it helps improve Chia's network health."),(0,o.kt)("p",null,"Port 8444 is the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Port_%28computer_networking%29"},"port")," through which other Chia computers can communicate with your PC. When you set up port forwarding on port 8444, the Chia software on your computer can quickly talk to other PCs, link up, and start downloading and syncing with the Chia blockchain."),(0,o.kt)("p",null,"The network is undergoing rapid growth and expansion. Many of the newly arrived Chia peers (computers) do not open up port 8444. It makes it very hard for the network. So please port forward on port 8444!"),(0,o.kt)("p",null,"Use ",(0,o.kt)("a",{parentName:"p",href:"https://portchecker.co/"},"this port checker")," to check if your router's port 8444 is closed."),(0,o.kt)("h1",{id:"what-to-do"},"What to Do"),(0,o.kt)("p",null,"Port forwarding is done on your router. How you set it up depends on your router's make and model. Look through your router's manual or just search for \"",(0,o.kt)("inlineCode",{parentName:"p"},"<your router name and model>"),' how to port forward" to get started.'),(0,o.kt)("p",null,"When you port forward you want to allow outside IP addresses to connect to your main node (computer) through port 8444 to the Chia software."),(0,o.kt)("h2",{id:"port-forwarding-settings"},"Port Forwarding Settings"),(0,o.kt)("p",null,"Most routers will ask you from where you are allowing and to what you are connecting to. You want to set up port forwarding to allow any outside connection to connect to the IP address of your main node on your network through port 8444. Router manufacturers might call the settings different things, but the concept is always the same: Outside computers connecting through port 8444 to your computer."),(0,o.kt)("p",null,"Here are the settings most routers will ask for:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Set connection type to ",(0,o.kt)("em",{parentName:"li"},"TCP")," or ",(0,o.kt)("em",{parentName:"li"},"TCP & UDP")),(0,o.kt)("li",{parentName:"ul"},'Destination (or Forwarding) IP address - This is your main node (computer) IP address on your internal network; search online on how to do this for your type of computer. If you search for "what is my IP address" it will give you your external IP address, this is not the one you want.'),(0,o.kt)("li",{parentName:"ul"},"Originating (or From) IP address - Set this to all or sometimes just an asterisk may be used ",(0,o.kt)("inlineCode",{parentName:"li"},"*"))),(0,o.kt)("h2",{id:"why-forward-port-8444"},"Why forward port 8444?"),(0,o.kt)("p",null,"All peers (computers) with a closed port 8444 are completely dependent on pc peers with open port 8444. They are the only PCs they can talk to. If you got 1,000 nodes with an open port 8444, but 20,000 nodes with a closed port 8444, trying to sync, it will only just be able to theoretically have enough IP's estimated 3,000 can sync at a time, while the other wait for another open Chia user with open port 8444. Right now (Mid April '20) it seems that number is even much worse. And it causes a scenario where there just isn't enough open port 8444 peers to serve all the closed port 8444 peers. The only way around this is to ensure that you got an open port 8444."),(0,o.kt)("p",null,"If you somehow are able to open up your port 8444 you will quickly have peers connecting to you and have a much easier time to get connections established."),(0,o.kt)("h2",{id:"speed-up-connecting-to-nodes"},"Speed up connecting to nodes"),(0,o.kt)("p",null,"If you would like to speed up connecting to other nodes and syncing, add one of these introducer nodes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"North Asia ",(0,o.kt)("inlineCode",{parentName:"li"},"introducer-apne.chia.net:8444")),(0,o.kt)("li",{parentName:"ul"},"South Asia ",(0,o.kt)("inlineCode",{parentName:"li"},"introducer-apse.chia.net:8444")),(0,o.kt)("li",{parentName:"ul"},"Western North America: ",(0,o.kt)("inlineCode",{parentName:"li"},"introducer-or.chia.net:8444")),(0,o.kt)("li",{parentName:"ul"},"Eastern North America ",(0,o.kt)("inlineCode",{parentName:"li"},"introducer-va.chia.net:8444")),(0,o.kt)("li",{parentName:"ul"},"Europe: ",(0,o.kt)("inlineCode",{parentName:"li"},"introducer-eu.chia.net:8444"))),(0,o.kt)("p",null,"There is a public node share the available 8444 peers every hour."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://chia.keva.app"},"chia.keva.app"))),(0,o.kt)("p",null,"These can be added in the GUI via the button, or via the CLI with ",(0,o.kt)("inlineCode",{parentName:"p"},"chia show -a PEER_ADDRESS:PORT")," where ",(0,o.kt)("inlineCode",{parentName:"p"},"PORT")," will usually be 8444."),(0,o.kt)("h1",{id:"detailed-explanation"},"Detailed explanation"),(0,o.kt)("p",null,"A regular pc can communicate ",(0,o.kt)("strong",{parentName:"p"},"out")," with endless ports-- if the user is sending a signal out -- pc opens a port -- signal goes out, pc closes the port.\nChia uses port 8444 as instant verified communication. So an open port can allow instant communication and start the blockchain sync. Signal comes in on port 8444- that Chia pc is verified, then ",(0,o.kt)("strong",{parentName:"p"},"both"),' user\'s pc, opens their own "communication ports ex port 8421" and that new user can now sync and now they are linked together forming part of Chia mesh.'),(0,o.kt)("p",null,"If the users port 8444 is closed, the users pc has to start sending multiple signals out and hope that a pc with open port 8444 will link with them, then the sync starts. (1) pc can only link up a few pc and with so many other Chia users coming on board, they all have to wait. Keep in mind, Chia is built on a mesh network, the blockchain is shared among all the users, not from central pc."),(0,o.kt)("h2",{id:"dealing-with-carrier-grade-nat"},"Dealing With Carrier-Grade NAT"),(0,o.kt)("p",null,"Opened port 8444 on your router but still not getting connections? With the exhaustion of the IPv4 space, it's increasingly common for ISPs to use ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Carrier-grade_NAT"},"Carrier-Grade NAT")," (CGN, CG-NAT, NAT444) to put multiple customers behind a single IP address. In this case, even if you open 8444 on your router, other nodes will not be able to connect to you. There are a couple options:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Ask your ISP for a dedicated IP address. They\'ll probably want more money, and may require you to upgrade to a "business" plan.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Establish a VPN tunnel through the NAT to a cloud server with a public IP address. It's easier than it sounds, and can cost as little as $3-5 a month for a cheap cloud server (some common cloud server providers: AWS, GCP, Digital Ocean, Vultr, Hetzner, Linode). When selecting a provider and server size, pay careful attention to bandwidth; a Chia fullnode isn't too demanding, but can require several GB per day. 1 TB per month is typical of lower-cost VPSs and should be plenty (do keep an eye on it though, bandwidth overage costs can be expensive!)."))),(0,o.kt)("p",null,"Setting up a VPN used to be a daunting task, but ",(0,o.kt)("a",{parentName:"p",href:"https://www.wireguard.com"},"Wireguard")," has greatly simplified it. The summary is you run Wireguard on both your home server and the cloud server:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the cloud server is configured to listen for VPN connections from your home server, and route all traffic incoming on 8444 to your home server, while also routing outgoing traffic from your home server to the internet."),(0,o.kt)("li",{parentName:"ul"},'the home server is configured to route all internet traffic (but not local) through the cloud server, while periodically sending a "keepalive" packet to ensure the connection stays open.')),(0,o.kt)("p",null,"Here is a more detailed write-up with ",(0,o.kt)("a",{parentName:"p",href:"https://www.kmr.me/posts/wireguard/"},"example wireguard configuration"),"."))}c.isMDXComponent=!0}}]);