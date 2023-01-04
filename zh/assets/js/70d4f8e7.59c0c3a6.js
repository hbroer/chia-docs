"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[122],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(a),h=n,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||i;return a?r.createElement(m,l(l({ref:t},p),{},{components:a})):r.createElement(m,l({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:n,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6086:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const i={title:"Storage - Chia Farming Workload Analysis",slug:"/chia-farming-workload"},l=void 0,o={unversionedId:"resources/chia-farming-workload",id:"resources/chia-farming-workload",title:"Storage - Chia Farming Workload Analysis",description:"Jonmichael Hands, VP Storage, Chia Network. For comments and questions reach out to @storagejm on keybase, or @LebanonJon on Twitter",source:"@site/docs/resources/chia-farming-workload.md",sourceDirName:"resources",slug:"/chia-farming-workload",permalink:"/zh/chia-farming-workload",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/resources/chia-farming-workload.md",tags:[],version:"current",frontMatter:{title:"Storage - Chia Farming Workload Analysis",slug:"/chia-farming-workload"},sidebar:"tutorialSidebar",previous:{title:"References",permalink:"/zh/references"},next:{title:"FAQ",permalink:"/zh/faq"}},s={},d=[{value:"Abstract",id:"abstract",level:2},{value:"Proof of space verification",id:"proof-of-space-verification",level:2},{value:"Storage workload profile",id:"storage-workload-profile",level:2},{value:"Average IO Size per request",id:"average-io-size-per-request",level:3},{value:"Calculated data read and disk bandwidth",id:"calculated-data-read-and-disk-bandwidth",level:3},{value:"Hard drive rated workloads",id:"hard-drive-rated-workloads",level:3},{value:"Measured data",id:"measured-data",level:2},{value:"Measurement tools",id:"measurement-tools",level:3},{value:"System configuration",id:"system-configuration",level:3},{value:"Data durability, uncorrectable bit error rate, and Chia farming",id:"data-durability-uncorrectable-bit-error-rate-and-chia-farming",level:2},{value:"UBER of standard storage devices",id:"uber-of-standard-storage-devices",level:3},{value:"UBER in Chia",id:"uber-in-chia",level:3},{value:"What happens when an error occurs?",id:"what-happens-when-an-error-occurs",level:3},{value:"Summary",id:"summary",level:2},{value:"Resources",id:"resources",level:2}],p={toc:d};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Jonmichael Hands, VP Storage, Chia Network. For comments and questions reach out to @storage_jm on ",(0,n.kt)("a",{parentName:"p",href:"https://keybase.io/team/chia_network.public"},"keybase"),", or ",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/LebanonJon"},"@LebanonJon")," on Twitter"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1AJP8j673qfbxxju87SjGs174DMVFpzjS/edit?usp=sharing&ouid=108662600751303250659&rtpof=true&sd=true"},"Model")," in Excel"),(0,n.kt)("h2",{id:"abstract"},"Abstract"),(0,n.kt)("p",null,"Chia uses a consensus called proof of space and time, in which participants prove to the network that they are storing a certain amount of data through a process called farming."),(0,n.kt)("p",null,"Farmers respond to network challenges to earn rewards for securing the Chia network, which involves generating proofs of space from stored data. The protocol for farming and harvesting was designed for quick and efficient verification of proofs of space while minimizing disk io (input/output). A harvester service checks plot files for partial proofs of space when a challenge is received. There is a plot filter designed to significantly reduce the amount of disk io required by requiring that a hash of the plot id and challenge contains a certain amount of zeros. We will explore the theoretical disk io requirements based on the protocols, and look at measured disk utilization during a real farming workload. The Chia farming workload differs from traditional enterprise or consumer storage use cases since the data stored in plot files contains no user data. The Chia farming workload is read-only, completely random distribution, and a low amount of data transferred between the device and host. Data durability (defined as the probability of not losing user data) and error rate requirements for Chia are significantly reduced compared to storing user data and may constitute a new class of storage media and promote used hardware that otherwise would not be suitable."),(0,n.kt)("h2",{id:"proof-of-space-verification"},"Proof of space verification"),(0,n.kt)("p",null,"The proof of space construction and the ",(0,n.kt)("a",{parentName:"p",href:"/proof-of-space"},"Proof of Space page")," contains the details on the format for plot files. A plot file size is determined by a k value where each plot is made up of 7 tables each with 2^k entries. When a challenge arrives the plot filter is applied to reduce the disk io by the value of the plot filter constant, which is currently set to 512. The probability of a plot being accessed each challenge, which happens on the signage point interval time, is 1/512. The probability of an individual disk being accessed can be found with the binomial distribution function cumulative probability with a probability per plot, n trials equal to the number of plots on the disk (probability of X successes \u2265 1) per signage point. The amount of IOPS (input/output operations per second) can be estimated by determining the mean of the plot filter passes per day and multiplying by the number of seeks required for a proof quality check. In the pooling protocol a pool operator requests several partial proofs of space per day per drive to verify that the pool participant is indeed storing as much data as they claim. The bandwidth and amount of data transferred can be estimated by looking at the average blocksize of the read requests multiplied by the IOPS."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Constants in proof of space that were chosen for Chia")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Signage point time (seconds): 9.375"),(0,n.kt)("li",{parentName:"ul"},"Plot filter: 512"),(0,n.kt)("li",{parentName:"ul"},"K value minimum: 32"),(0,n.kt)("li",{parentName:"ul"},"IO Proof quality check: 9 read requests"),(0,n.kt)("li",{parentName:"ul"},"IO Full proof of space (and partial request from pool): 64 read requests"),(0,n.kt)("li",{parentName:"ul"},"Partials per day: set by pool operators, estimated at 300 for reference"),(0,n.kt)("li",{parentName:"ul"},"Average IO size per request (kB): 14")),(0,n.kt)("h2",{id:"storage-workload-profile"},"Storage workload profile"),(0,n.kt)("p",null,"We can estimate the storage workload on a given drive capacity (measured in TB, terabytes) by knowing the k size selected and n number of plots that fit on the drive."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Drive size (TB)"),(0,n.kt)("th",{parentName:"tr",align:"right"},"4"),(0,n.kt)("th",{parentName:"tr",align:"right"},"8"),(0,n.kt)("th",{parentName:"tr",align:"right"},"10"),(0,n.kt)("th",{parentName:"tr",align:"right"},"12"),(0,n.kt)("th",{parentName:"tr",align:"right"},"14"),(0,n.kt)("th",{parentName:"tr",align:"right"},"16"),(0,n.kt)("th",{parentName:"tr",align:"right"},"18"),(0,n.kt)("th",{parentName:"tr",align:"right"},"20"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"k value"),(0,n.kt)("td",{parentName:"tr",align:"right"},"32"),(0,n.kt)("td",{parentName:"tr",align:"right"},"32"),(0,n.kt)("td",{parentName:"tr",align:"right"},"32"),(0,n.kt)("td",{parentName:"tr",align:"right"},"32"),(0,n.kt)("td",{parentName:"tr",align:"right"},"32"),(0,n.kt)("td",{parentName:"tr",align:"right"},"32"),(0,n.kt)("td",{parentName:"tr",align:"right"},"32"),(0,n.kt)("td",{parentName:"tr",align:"right"},"32")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Number of plots"),(0,n.kt)("td",{parentName:"tr",align:"right"},"36"),(0,n.kt)("td",{parentName:"tr",align:"right"},"73"),(0,n.kt)("td",{parentName:"tr",align:"right"},"91"),(0,n.kt)("td",{parentName:"tr",align:"right"},"110"),(0,n.kt)("td",{parentName:"tr",align:"right"},"128"),(0,n.kt)("td",{parentName:"tr",align:"right"},"146"),(0,n.kt)("td",{parentName:"tr",align:"right"},"165"),(0,n.kt)("td",{parentName:"tr",align:"right"},"183")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"k value"),(0,n.kt)("td",{parentName:"tr",align:"right"},"34"),(0,n.kt)("td",{parentName:"tr",align:"right"},"34"),(0,n.kt)("td",{parentName:"tr",align:"right"},"34"),(0,n.kt)("td",{parentName:"tr",align:"right"},"34"),(0,n.kt)("td",{parentName:"tr",align:"right"},"34"),(0,n.kt)("td",{parentName:"tr",align:"right"},"34"),(0,n.kt)("td",{parentName:"tr",align:"right"},"34"),(0,n.kt)("td",{parentName:"tr",align:"right"},"34")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Number of plots"),(0,n.kt)("td",{parentName:"tr",align:"right"},"8"),(0,n.kt)("td",{parentName:"tr",align:"right"},"17"),(0,n.kt)("td",{parentName:"tr",align:"right"},"21"),(0,n.kt)("td",{parentName:"tr",align:"right"},"25"),(0,n.kt)("td",{parentName:"tr",align:"right"},"30"),(0,n.kt)("td",{parentName:"tr",align:"right"},"34"),(0,n.kt)("td",{parentName:"tr",align:"right"},"38"),(0,n.kt)("td",{parentName:"tr",align:"right"},"43")))),(0,n.kt)("p",null,"Events per day, plots passing filter = signage points per day \u2715 n plots / filter constant\nnumber of reads =(Events per day, plots passing filter \u2715 IO Proof quality check) +(IO Full proof of space \u2715 Partials per day",(0,n.kt)("br",{parentName:"p"}),"\n","IOPS average =number of reads per day / 86400 seconds\nMB read per day = Number of reads \u2715 average IO size per request (kB) / 1000",(0,n.kt)("br",{parentName:"p"}),"\n","Bandwidth = IOPS ","*"," Block Size"),(0,n.kt)("h3",{id:"average-io-size-per-request"},"Average IO Size per request"),(0,n.kt)("p",null,"An IO kernel trace was taken on a sample of drives to determine the block size requests on the block layer (commands sent directly to the drive over the SATA interface), and found that the majority of the IO commands sent were 12 and 16kB transfers. This will likely change very slightly with different storage hardware, operating systems, storage devices, drivers, and filesystems."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"iosize_hist",src:a(6733).Z,title:"iosize_hist",width:"1027",height:"461"})),(0,n.kt)("p",null,"Measured data from ext4 filesystem in Linux resulted in an average blocksize of\n13.9kB with n=44 drives of capacity 18TB\n14.5kB with n=94 drives capacity ranging from 8-18TB"),(0,n.kt)("h3",{id:"calculated-data-read-and-disk-bandwidth"},"Calculated data read and disk bandwidth"),(0,n.kt)("p",null,"Chia Farming Total Amount of data read per day per drive capacity"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"data_per_day",src:a(8061).Z,title:"data_per_day",width:"1244",height:"856"})),(0,n.kt)("p",null,"Bandwidth and amount of data read are all directly proportional to the number of io requests required for the proof quality checks and partial proof of space generation. K=32 with a difficulty of 1 is the theoretical maximum bandwidth for Chia farming. It is typical for a pool operator to automatically adjust the difficulty to target enough partials per day to get an accurate estimate of the farming capacity, without a significant increase in io on the device."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"bw_drive",src:a(8600).Z,title:"bw_drive",width:"1244",height:"856"})),(0,n.kt)("p",null,"As expected, bandwidth per drive scales with the number of plots per drive (which is increased when a higher capacity disk is used) and increases with difficulty. K=34 offers a reduction in io requirements by reducing the number of plots per disk."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"prob_access",src:a(9199).Z,title:"prob_access",width:"1244",height:"856"})),(0,n.kt)("h3",{id:"hard-drive-rated-workloads"},"Hard drive rated workloads"),(0,n.kt)("p",null,"Hard disk drive reliability is rated at a specified amount of data read and written per year, expressed in TB/year. Common 3.5in HDDs used in Chia farming are rated at 200-550TB per year workload depending on the drive model and recommended use case. The amount of data written for Chia is often just the size of the drive, because plots are generated on ephemeral storage and then sequentially copied over to the drive. The amount of data read can be calculated by looking at the bandwidth of the drive and multiplying it by time. In the worst case, with the largest hard drive on the market today at 20TB, full of k=32 plots, at difficulty 1 pooling would read an average of 2.1GB per day, or 750 GB per year. This is 0.37% of the rated workload assuming a 200TB/year - Chia is an extremely light workload compared to typical end-user workloads (e.g. NAS, file or object storage, video streaming)."),(0,n.kt)("h2",{id:"measured-data"},"Measured data"),(0,n.kt)("p",null,"Data was collected across a sample size of drives of varying capacity, as detailed in the system configuration. The duration of the measured data was 48 hours with a scraping period of 5s."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"capacity"),(0,n.kt)("th",{parentName:"tr",align:null},"Sample Size"),(0,n.kt)("th",{parentName:"tr",align:null},"bandwidth (kB/s)"),(0,n.kt)("th",{parentName:"tr",align:null},"IOPS"),(0,n.kt)("th",{parentName:"tr",align:null},"blocksize (kB)"),(0,n.kt)("th",{parentName:"tr",align:null},"latency (ms)"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"8"),(0,n.kt)("td",{parentName:"tr",align:null},"3"),(0,n.kt)("td",{parentName:"tr",align:null},"3.45"),(0,n.kt)("td",{parentName:"tr",align:null},"0.23"),(0,n.kt)("td",{parentName:"tr",align:null},"14.76"),(0,n.kt)("td",{parentName:"tr",align:null},"5.18")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10"),(0,n.kt)("td",{parentName:"tr",align:null},"2"),(0,n.kt)("td",{parentName:"tr",align:null},"4.17"),(0,n.kt)("td",{parentName:"tr",align:null},"0.28"),(0,n.kt)("td",{parentName:"tr",align:null},"14.72"),(0,n.kt)("td",{parentName:"tr",align:null},"7.04")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"12"),(0,n.kt)("td",{parentName:"tr",align:null},"16"),(0,n.kt)("td",{parentName:"tr",align:null},"5.03"),(0,n.kt)("td",{parentName:"tr",align:null},"0.34"),(0,n.kt)("td",{parentName:"tr",align:null},"14.69"),(0,n.kt)("td",{parentName:"tr",align:null},"7.11")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"14"),(0,n.kt)("td",{parentName:"tr",align:null},"2"),(0,n.kt)("td",{parentName:"tr",align:null},"6.02"),(0,n.kt)("td",{parentName:"tr",align:null},"0.41"),(0,n.kt)("td",{parentName:"tr",align:null},"14.72"),(0,n.kt)("td",{parentName:"tr",align:null},"5.21")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"16"),(0,n.kt)("td",{parentName:"tr",align:null},"27"),(0,n.kt)("td",{parentName:"tr",align:null},"6.20"),(0,n.kt)("td",{parentName:"tr",align:null},"0.44"),(0,n.kt)("td",{parentName:"tr",align:null},"14.14"),(0,n.kt)("td",{parentName:"tr",align:null},"6.27")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"18"),(0,n.kt)("td",{parentName:"tr",align:null},"44"),(0,n.kt)("td",{parentName:"tr",align:null},"7.46"),(0,n.kt)("td",{parentName:"tr",align:null},"0.51"),(0,n.kt)("td",{parentName:"tr",align:null},"14.57"),(0,n.kt)("td",{parentName:"tr",align:null},"5.53")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Total"),(0,n.kt)("td",{parentName:"tr",align:null},"94"),(0,n.kt)("td",{parentName:"tr",align:null},"6.46"),(0,n.kt)("td",{parentName:"tr",align:null},"0.45"),(0,n.kt)("td",{parentName:"tr",align:null},"14.48"),(0,n.kt)("td",{parentName:"tr",align:null},"6.02")))),(0,n.kt)("p",null,"We compare the modeled metrics of an 18TB drive to the measure data collected"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Metric"),(0,n.kt)("th",{parentName:"tr",align:null},"Estimated/Modeled"),(0,n.kt)("th",{parentName:"tr",align:null},"Measured"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Bandwidth per drive (kB/s)"),(0,n.kt)("td",{parentName:"tr",align:null},"4.59 kB/s"),(0,n.kt)("td",{parentName:"tr",align:null},"7.46 kB/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"IOPS"),(0,n.kt)("td",{parentName:"tr",align:null},"0.33"),(0,n.kt)("td",{parentName:"tr",align:null},"0.51")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Disk busy time"),(0,n.kt)("td",{parentName:"tr",align:null},"0.136%"),(0,n.kt)("td",{parentName:"tr",align:null},"0.24%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Latency per request (ms)"),(0,n.kt)("td",{parentName:"tr",align:null},"4.3"),(0,n.kt)("td",{parentName:"tr",align:null},"6.02")))),(0,n.kt)("p",null,"Disk IOPS"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"IOPS",src:a(7731).Z,title:"IOPS",width:"1861",height:"1307"})),(0,n.kt)("p",null,"Disk bandwidth"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"bw",src:a(3701).Z,title:"bw",width:"1859",height:"1300"})),(0,n.kt)("p",null,"Latency"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"latency",src:a(8414).Z,title:"latency",width:"1854",height:"1761"})),(0,n.kt)("p",null,"Disk Utilization"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"disk_busy",src:a(5649).Z,title:"disk_busy",width:"1854",height:"1133"})),(0,n.kt)("p",null,"CPU Busy Time"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"cpu busy time",src:a(6524).Z,title:"cpu",width:"464",height:"226"})),(0,n.kt)("p",null,"System CPU Utilization"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"system utilization",src:a(8340).Z,title:"cpu",width:"1871",height:"410"})),(0,n.kt)("p",null,"Network Traffic (Chia harvester only)"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"network",src:a(2432).Z,title:"network traffic",width:"1866",height:"404"})),(0,n.kt)("h3",{id:"measurement-tools"},"Measurement tools"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://grafana.com/"},"Grafana")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://prometheus.io/docs/guides/node-exporter/"},"Node Exporter")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://prometheus.io/"},"Prometheus")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Open-CAS/standalone-linux-io-tracer"},"Standalone Linux IO Tracer")),(0,n.kt)("li",{parentName:"ul"},"dstat, iostat (sysstat)")),(0,n.kt)("h3",{id:"system-configuration"},"System configuration"),(0,n.kt)("p",null,"Measured data collected from the following system"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Motherboard: Intel R1208WFTYS\nIntel Xeon Gold 6140 CPU, 128GB DDR4 @ 2400MT/s\nHBA: LSI 9300-8e\nJBOD: Supermicro 90 Bay, SuperChassis 946ED-R2KJBOD\nDrive Models:\nSeagate Exos x16 16TB, Firmware SN03\nWD HC550 18TB, Firmware: PCGNW232WDC\nWD WD120EDAZ: 8, 10, 12, 14TB, Firmware: 81.00A81\n")),(0,n.kt)("h2",{id:"data-durability-uncorrectable-bit-error-rate-and-chia-farming"},"Data durability, uncorrectable bit error rate, and Chia farming"),(0,n.kt)("p",null,'UBER is defined as "A metric for the rate of occurrence of data errors, equal to the number of data errors per bits read."\nIn HDD and SSD, UBER is generally reflected in lifetime values for an entire population, but the actual rates of error and rate of increase are dependent on many factors including time, temperature, and amount of wear on the storage media. In SSDs this is adjusted for and measured per the JESD218B specification which defines UBER for SSDs using "The\nnumerator is the total count of data errors detected over the full TBW rating for the population of SSDs, or the sample of SSDs in the endurance verification."'),(0,n.kt)("h3",{id:"uber-of-standard-storage-devices"},"UBER of standard storage devices"),(0,n.kt)("p",null,"Consumer HDDs are rated for less than 1 error per 10",(0,n.kt)("sup",null,"14")," (sometimes shown as UBER of 10",(0,n.kt)("sup",null,"-14"),"). This means that if a consumer reads on 800TB of data, they would expect a single read error on average."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Device"),(0,n.kt)("th",{parentName:"tr",align:null},"UBER"),(0,n.kt)("th",{parentName:"tr",align:null},"Data read per error"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Consumer HDD"),(0,n.kt)("td",{parentName:"tr",align:null},"10","-","14"),(0,n.kt)("td",{parentName:"tr",align:null},"800 TB")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Enterprise HDD"),(0,n.kt)("td",{parentName:"tr",align:null},"10","-","15"),(0,n.kt)("td",{parentName:"tr",align:null},"8 PB")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SSD"),(0,n.kt)("td",{parentName:"tr",align:null},"10","-","17"),(0,n.kt)("td",{parentName:"tr",align:null},"800 PB")))),(0,n.kt)("h3",{id:"uber-in-chia"},"UBER in Chia"),(0,n.kt)("p",null,"In a storage system containing user data, an uncorrectable read error on a single storage device is handled by redundancy or parity, generally through RAID, erasure code, mirror, or backup of the data. Plot files contain random cryptographic hashes. If a device containing plots fails, no useful data is lost. Therefore, the best practice for Chia is not to include any data protection. If there is a single uncorrectable read error somewhere on the storage device, we could therefore calculate the probability of reading that LBA (logical block address) by using the estimated amount of data read per day in the Chia farming workload - because the reads are perfectly random, each read request coming from the harvester service will have an equal probability of being accessed."),(0,n.kt)("p",null,"Using the UBER and the estimated amount of data read per day with Chia farming, we can approximate the number of years it would take to encounter an error while farming Chia."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"UBER",src:a(7067).Z,title:"UBER",width:"1200",height:"742"})),(0,n.kt)("h3",{id:"what-happens-when-an-error-occurs"},"What happens when an error occurs?"),(0,n.kt)("p",null,"Each k=32 plot file contains around 4.3 billion proofs. Depending on where the error occurs, in metadata, table 1, etc. there are a certain amount of proofs within a plot file that will be corrupted. In the absolute worst case that an entire plot file gets corrupted. A more likely case would just be that a certain percentage of proofs are corrupt, and the likelihood of reading those given the amount of data read per day in the Chia farming workload is extremely low. If the uncorrectable read error collides with a lookup for a partial proof of space, the farmer would fail that single request for a partial proof of space or proof quality check. This would lower the user\u2019s estimated capacity for a short duration, but then revert to the mean. In other words, an error in Chia farming is not catastrophic. Chia farming workload is a very good fit for a storage device with a higher error rate, potentially even with an UBER of greater than 10",(0,n.kt)("sup",null,"-13 "),"."),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,"Chia is a light workload for a hard drive, 309 times lower disk busy time than an example hyperscale data center workload","[2]",". Plot files contain random cryptographic hashes that can easily be created and no user data, removing data durability requirements for data storage in Chia farming. Proof of space is a novel use case for hard drives and can accept storage media with a high UBER compared to typical consumer and enterprise workloads. Chia farming will constitute a new class of storage that is optimized for high capacity, write once / read many, low power, and high error rate. Chia farming is a great fit for hard drive technology optimized for sequential write only, such as SMR (Shingled Magnetic Recording), and in the future NVMe ZNS (Zoned Name Spaces) paired with high capacity storage of a lower media grade. Chia farming would be an ideal use case for used storage, given the storage media is high enough capacity to maintain a competitive TCO compared to new more power-efficient disks."),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://www.jedec.org/standards-documents/jesd218b01"},"JEDEC "),"JESD218B.01 SOLID STATE DRIVE (SSD) REQUIREMENTS AND ENDURANCE TEST METHOD"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://www.usenix.org/system/files/fast21-pan.pdf"},"Facebook\u2019s Tectonic Filesystem: Efficiency from Exascale"))))}c.isMDXComponent=!0},3701:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/bw-873a300af25d7147fb8dcb19f2979bb8.png"},8600:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/bw_drive-07b3cb42e0a93978256f609a441c466a.png"},8340:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/cpu-4d37c79ab38c06322e3cfacba6775ebe.png"},6524:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/cpu1-88fa0b4b9b174a63da789a05aae7179b.png"},8061:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/data_per_day-63d731accc72197842f1076e5f7c7b7b.png"},5649:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/disk_busy-30e336f99ead8b64b141c1435abdef53.png"},7731:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/iops-73e6fe55c4999e2d6839ddaa4017bddf.png"},6733:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/iosize_hist-190219243e9e76c2bc5bb8d9145983e7.png"},8414:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/latency-660c0a26ba53ce3873f0cf30ba293a4f.png"},2432:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/net-a524b6533296a516877749e576e4c0de.png"},9199:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/prob_access-430f862506ceef20bba0cd6de8c9fea0.png"},7067:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/uber-09f9747bd8e9eb88c1981b038bafab88.png"}}]);