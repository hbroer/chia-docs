"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[544],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),p=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,m=d["".concat(i,".").concat(u)]||d[u]||h[u]||r;return n?o.createElement(m,s(s({ref:t},c),{},{components:n})):o.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<r;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5675:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const r={title:"Wallet Protocol",slug:"/wallet-protocol"},s=void 0,l={unversionedId:"protocol/wallet-protocol",id:"protocol/wallet-protocol",title:"Wallet Protocol",description:"This protocol is a bidirectional protocol for communication between full nodes and wallets in the Chia system.",source:"@site/docs/protocol/wallet-protocol.md",sourceDirName:"protocol",slug:"/wallet-protocol",permalink:"/wallet-protocol",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/protocol/wallet-protocol.md",tags:[],version:"current",frontMatter:{title:"Wallet Protocol",slug:"/wallet-protocol"},sidebar:"tutorialSidebar",previous:{title:"Pool Protocol 1.0 Specification",permalink:"/pool-protocol-specification"},next:{title:"Chia Installation Guide",permalink:"/chia-installation-guide"}},i={},p=[{value:"Privacy Protocol",id:"privacy-protocol",level:2},{value:"Fast Sync Protocol (recommended)",id:"fast-sync-protocol-recommended",level:2},{value:"request_puzzle_solution",id:"request_puzzle_solution",level:2},{value:"respond_puzzle_solution",id:"respond_puzzle_solution",level:2},{value:"reject_puzzle_solution",id:"reject_puzzle_solution",level:2},{value:"send_transaction",id:"send_transaction",level:2},{value:"transaction_ack",id:"transaction_ack",level:2},{value:"new_peak_wallet",id:"new_peak_wallet",level:2},{value:"request_block_header",id:"request_block_header",level:2},{value:"respond_block_header",id:"respond_block_header",level:2},{value:"reject_header_request",id:"reject_header_request",level:2},{value:"request_removals",id:"request_removals",level:2},{value:"respond_removals",id:"respond_removals",level:2},{value:"reject_removals_request",id:"reject_removals_request",level:2},{value:"request_additions",id:"request_additions",level:2},{value:"respond_additions",id:"respond_additions",level:2},{value:"reject_additions_request",id:"reject_additions_request",level:2},{value:"request_header_blocks",id:"request_header_blocks",level:2},{value:"reject_header_blocks",id:"reject_header_blocks",level:2},{value:"respond_header_blocks",id:"respond_header_blocks",level:2},{value:"register_for_ph_updates",id:"register_for_ph_updates",level:2},{value:"respond_to_ph_updates",id:"respond_to_ph_updates",level:2},{value:"register_for_coin_updates",id:"register_for_coin_updates",level:2},{value:"respond_to_coin_updates",id:"respond_to_coin_updates",level:2},{value:"coin_state_update",id:"coin_state_update",level:2},{value:"request_children",id:"request_children",level:2},{value:"respond_children",id:"respond_children",level:2},{value:"request_ses_info",id:"request_ses_info",level:2},{value:"respond_ses_info",id:"respond_ses_info",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This protocol is a bidirectional protocol for communication between full nodes and wallets in the Chia system.\nThis is also sometimes referred to as the light client protocol."),(0,a.kt)("p",null,"The wallet protocol contains two sub protocols by which a wallet can sync transaction from a node."),(0,a.kt)("h2",{id:"privacy-protocol"},"Privacy Protocol"),(0,a.kt)("p",null,"The first is the privacy protocol, where the wallet downloads each header and checks the filter for transactions. It is more private,\nbut much slower."),(0,a.kt)("h2",{id:"fast-sync-protocol-recommended"},"Fast Sync Protocol (recommended)"),(0,a.kt)("p",null,"The second is the fast sync protocol, where the wallet directly asks the node to look for certain coin ids or puzzle\nhashes. It has less privacy but is much faster. The following is the flow for syncing for a wallet that any wallet\ndeveloper should follow. It is important to connect to several random nodes to increase security. This sync protocol\nshould be very fast for users who don't have many transactions."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Perform a DNS lookup to obtain random node IPS: ",(0,a.kt)("inlineCode",{parentName:"li"},"dig dns-introducer.chia.net"),"."),(0,a.kt)("li",{parentName:"ol"},"Connect to a few nodes, to ensure the server does not omit transactions. The nodes will send a ",(0,a.kt)("inlineCode",{parentName:"li"},"new_peak_wallet")," message with their claimed peaks."),(0,a.kt)("li",{parentName:"ol"},"Download a weight proof from one of the nodes (or several) with the heaviest peak"),(0,a.kt)("li",{parentName:"ol"},"Verify the weight proof to make sure the claimed peak is correct"),(0,a.kt)("li",{parentName:"ol"},"Subscribe to first 100 puzzle hashes for our key (both observer and non-observer)"),(0,a.kt)("li",{parentName:"ol"},"Validate the puzzle hash subscription state returned from the full node. This requires making sure the block in which these coins are included is part of the chain of SubEpochSummaries. Only the block hashes have to be checked here. Furthermore, a few block headers (around 30-50) should be validated after this block to make sure it is properly buried."),(0,a.kt)("li",{parentName:"ol"},"From step 5, we obtain all coin IDs which we are interested in, and we restore any CAT wallets for coins which have our puzzle hash in the hint."),(0,a.kt)("li",{parentName:"ol"},"Subscribe to interesting coin IDs"),(0,a.kt)("li",{parentName:"ol"},"Validate the coin subscription returned from the full node, similar to how it's done in step 5")),(0,a.kt)("h1",{id:"protocol-messages"},"Protocol Messages"),(0,a.kt)("h2",{id:"request_puzzle_solution"},"request_puzzle_solution"),(0,a.kt)("p",null,"A request from the wallet to the full node for the puzzle and solution of a certain spent coin ID."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class RequestPuzzleSolution(Streamable):\n    coin_name: bytes32  # ID of the spent coin\n    height: uint32      # Spent height\n")),(0,a.kt)("h2",{id:"respond_puzzle_solution"},"respond_puzzle_solution"),(0,a.kt)("p",null,"A response to a ",(0,a.kt)("inlineCode",{parentName:"p"},"request_puzzle_solution")," request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"\nclass RespondPuzzleSolution(Streamable):\n    response: PuzzleSolutionResponse\n\nclass PuzzleSolutionResponse(Streamable):\n    coin_name: bytes32\n    height: uint32\n    puzzle: Program\n    solution: Program\n")),(0,a.kt)("h2",{id:"reject_puzzle_solution"},"reject_puzzle_solution"),(0,a.kt)("p",null,"A rejection to a ",(0,a.kt)("inlineCode",{parentName:"p"},"request_puzzle_solution")," request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class RejectPuzzleSolution(Streamable):\n    coin_name: bytes32\n    height: uint32\n")),(0,a.kt)("h2",{id:"send_transaction"},"send_transaction"),(0,a.kt)("p",null,"A message by which a wallet can send a transaction to the mempool and broadcast it to the network. The full node\nwill attempt to include it into the mempool."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class SendTransaction(Streamable):\n    transaction: SpendBundle\n")),(0,a.kt)("h2",{id:"transaction_ack"},"transaction_ack"),(0,a.kt)("p",null,"A response to a ",(0,a.kt)("inlineCode",{parentName:"p"},"send_transaction")," message. After attempting to include the transaction, the mempool inclusion status\nis returned, with an optional english error string in case it did not succeed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class MempoolInclusionStatus(IntEnum):\n    SUCCESS = 1  # Transaction added to mempool\n    PENDING = 2  # Transaction not yet added to mempool\n    FAILED = 3  # Transaction was invalid and dropped\n\nclass TransactionAck(Streamable):\n    txid: bytes32\n    status: uint8  # MempoolInclusionStatus\n    error: Optional[str]\n")),(0,a.kt)("h2",{id:"new_peak_wallet"},"new_peak_wallet"),(0,a.kt)("p",null,"A notification from the full node to the wallet that the blockchain's peak has changed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class NewPeakWallet(Streamable):\n    header_hash: bytes32       # New peak of the blockchain\n    height: uint32             # New peak's height\n    weight: uint128            # New peak's weight\n    fork_point_with_previous_peak: uint32\n")),(0,a.kt)("h2",{id:"request_block_header"},"request_block_header"),(0,a.kt)("p",null,"A request from the wallet to the full node for a HeaderBlock at a specific height."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class RequestBlockHeader(Streamable):\n    height: uint32  # Height of the header block\n")),(0,a.kt)("h2",{id:"respond_block_header"},"respond_block_header"),(0,a.kt)("p",null,"A response to a ",(0,a.kt)("inlineCode",{parentName:"p"},"request_block_header")," request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class RespondBlockHeader(Streamable):\n    header_block: HeaderBlock\n")),(0,a.kt)("h2",{id:"reject_header_request"},"reject_header_request"),(0,a.kt)("p",null,"A rejection to a ",(0,a.kt)("inlineCode",{parentName:"p"},"request_block_header")," request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class RejectHeaderRequest(Streamable):\n    height: uint32\n")),(0,a.kt)("h2",{id:"request_removals"},"request_removals"),(0,a.kt)("p",null,"A request from the wallet to the full node for the removals (removed coins) of a certain block. If ",(0,a.kt)("inlineCode",{parentName:"p"},"coin_names")," is None,\nwe are requesting all removals in the block. Otherwise, we are requesting only these specific removal coin IDs."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class RequestRemovals(Streamable):\n    height: uint32        # Height of the block\n    header_hash: bytes32  # Header hash of the block\n    coin_names: Optional[List[bytes32]]\n")),(0,a.kt)("h2",{id:"respond_removals"},"respond_removals"),(0,a.kt)("p",null,"A response to a ",(0,a.kt)("inlineCode",{parentName:"p"},"request_removals")," request. If ",(0,a.kt)("inlineCode",{parentName:"p"},"coin_names")," is None, all removals are returned, and ",(0,a.kt)("inlineCode",{parentName:"p"},"proofs")," is set\nto None. Otherwise, only the requested coins are returned, (id to coin tuples) and a proof is returned for each\ncoin id (id to proof tuples). The proofs are merkle set inclusion proofs. See ",(0,a.kt)("inlineCode",{parentName:"p"},"merkle_set.py")," in chia-blockchain\nfor more info on how to verify these proofs."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class RespondRemovals(Streamable):\n    height: uint32\n    header_hash: bytes32\n    coins: List[Tuple[bytes32, Optional[Coin]]]\n    proofs: Optional[List[Tuple[bytes32, bytes]]]\n")),(0,a.kt)("h2",{id:"reject_removals_request"},"reject_removals_request"),(0,a.kt)("p",null,"A rejection to a ",(0,a.kt)("inlineCode",{parentName:"p"},"request_removals")," request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class RejectRemovalsRequest(Streamable):\n    height: uint32\n    header_hash: bytes32\n")),(0,a.kt)("h2",{id:"request_additions"},"request_additions"),(0,a.kt)("p",null,"A request from the wallet to the full node for the additions (added coins) of a certain block. If ",(0,a.kt)("inlineCode",{parentName:"p"},"puzzle_hashes")," is\nNone, we are requesting all additions in the block. Otherwise, we are requeting only additions which have this puzzle hash."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class RequestAdditions(Streamable):\n    height: uint32\n    header_hash: Optional[bytes32]\n    puzzle_hashes: Optional[List[bytes32]]\n")),(0,a.kt)("h2",{id:"respond_additions"},"respond_additions"),(0,a.kt)("p",null,"A response to a ",(0,a.kt)("inlineCode",{parentName:"p"},"request_additions")," request. If ",(0,a.kt)("inlineCode",{parentName:"p"},"puzzle_hashes")," is None, all additions are returned, and ",(0,a.kt)("inlineCode",{parentName:"p"},"proofs")," is set\nto None. Otherwise, only the requested coins are returned, (puzzle_hash to list of coin tuples, since multiple coins\ncan have the same puzzle hash) and a proof is returned for each\ncoin (puzzle_hash, proof, proof2 tuples). The proofs are merkle set inclusion proofs. See ",(0,a.kt)("inlineCode",{parentName:"p"},"merkle_set.py")," in chia-blockchain\nfor more info on how to verify these proofs. ",(0,a.kt)("inlineCode",{parentName:"p"},"proof")," refers to a proof of the puzzle hash in the merkle set, and\n",(0,a.kt)("inlineCode",{parentName:"p"},"proof2")," is the merkle proof of ",(0,a.kt)("inlineCode",{parentName:"p"},"sha256(concatenation of coin ids)")," for each puzzle hash, in the merkle set. Both are\nincluded as elements in the merkle set for each block."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class RespondAdditions(Streamable):\n    height: uint32\n    header_hash: bytes32\n    coins: List[Tuple[bytes32, List[Coin]]]     # puzzle hash => List[Coin] with that puzzle hash\n    proofs: Optional[List[Tuple[bytes32, bytes, Optional[bytes]]]]  # Puzzle hash. proof, proof2\n")),(0,a.kt)("h2",{id:"reject_additions_request"},"reject_additions_request"),(0,a.kt)("p",null,"A rejection to a ",(0,a.kt)("inlineCode",{parentName:"p"},"request_additions")," request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class RejectAdditionsRequest(Streamable):\n    height: uint32\n    header_hash: bytes32\n")),(0,a.kt)("h2",{id:"request_header_blocks"},"request_header_blocks"),(0,a.kt)("p",null,"A request from the wallet to the full node for a list of consecutive header blocks, inclusive."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class RequestHeaderBlocks(Streamable):\n    start_height: uint32\n    end_height: uint32\n")),(0,a.kt)("h2",{id:"reject_header_blocks"},"reject_header_blocks"),(0,a.kt)("p",null,"A rejection for a ",(0,a.kt)("inlineCode",{parentName:"p"},"request_header_blocks")," request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class RejectHeaderBlocks(Streamable):\n    start_height: uint32\n    end_height: uint32\n")),(0,a.kt)("h2",{id:"respond_header_blocks"},"respond_header_blocks"),(0,a.kt)("p",null,"A response to a ",(0,a.kt)("inlineCode",{parentName:"p"},"request_header_blocks")," request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class RespondHeaderBlocks(Streamable):\n    start_height: uint32\n    end_height: uint32\n    header_blocks: List[HeaderBlock]\n")),(0,a.kt)("h2",{id:"register_for_ph_updates"},"register_for_ph_updates"),(0,a.kt)("p",null,"A request from the wallet to the full node to register for updates to a puzzle hash. This is part of the fast sync\nprotocol. Whenever a new coin with one of these puzzle hashes (or hint) is created or spent, the full node will send a notification\nto the wallet (",(0,a.kt)("inlineCode",{parentName:"p"},"coin_state_update"),"). Also, a one time notification is sent back with all the updates (",(0,a.kt)("inlineCode",{parentName:"p"},"respond_to_ph_updates"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class RegisterForPhUpdates(Streamable):\n    puzzle_hashes: List[bytes32]\n    min_height: uint32\n")),(0,a.kt)("h2",{id:"respond_to_ph_updates"},"respond_to_ph_updates"),(0,a.kt)("p",null,"A one-time response to ",(0,a.kt)("inlineCode",{parentName:"p"},"register_for_ph_updates")," with all the confirmation or spent heights, and all the CoinStates.\nCoinState is an object that shows a change in a coin. if ",(0,a.kt)("inlineCode",{parentName:"p"},"spent_height")," is not None, that means the coin was spent.\nIf ",(0,a.kt)("inlineCode",{parentName:"p"},"created_height")," is not None, that means the coin was created but not spent. If both are None, it means the\ncoin was reverted (reorged out of the chain) and no longer exists."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class RespondToPhUpdates(Streamable):\n    puzzle_hashes: List[bytes32]\n    min_height: uint32\n    coin_states: List[CoinState]\n\nclass CoinState(Streamable):\n    coin: Coin\n    spent_height: Optional[uint32]\n    created_height: Optional[uint32]\n`\n")),(0,a.kt)("h2",{id:"register_for_coin_updates"},"register_for_coin_updates"),(0,a.kt)("p",null,"A request from the wallet to the full node to register for updates to a coin ID. This is part of the fast sync\nprotocol. Whenever a new coin with one of these coin IDs is created or spent, the full node will send a notification\nto the wallet (",(0,a.kt)("inlineCode",{parentName:"p"},"coin_state_update"),"). Also, a one time notification is sent back with all the updates (",(0,a.kt)("inlineCode",{parentName:"p"},"respond_to_coin_updates"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class RegisterForCoinUpdates(Streamable):\n    coin_ids: List[bytes32]\n    min_height: uint32\n")),(0,a.kt)("h2",{id:"respond_to_coin_updates"},"respond_to_coin_updates"),(0,a.kt)("p",null,"A one-time response to ",(0,a.kt)("inlineCode",{parentName:"p"},"register_for_coin_updates")," with all the confirmation or spent heights, and all the CoinStates."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class RespondToCoinUpdates(Streamable):\n    coin_ids: List[bytes32]\n    min_height: uint32\n    coin_states: List[CoinState]\n")),(0,a.kt)("h2",{id:"coin_state_update"},"coin_state_update"),(0,a.kt)("p",null,"This is an update but not in response to a request. The full node will send the update whenever a new block\nis confirmed which contains removals or additions that are interesting to the wallet."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class CoinStateUpdate(Streamable):\n    height: uint32\n    fork_height: uint32\n    peak_hash: bytes32\n    items: List[CoinState]\n")),(0,a.kt)("h2",{id:"request_children"},"request_children"),(0,a.kt)("p",null,"A request from the wallet to the node for the children of a certain (spent) coin ID."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class RequestChildren(Streamable):\n    coin_name: bytes32\n")),(0,a.kt)("h2",{id:"respond_children"},"respond_children"),(0,a.kt)("p",null,"A response to a ",(0,a.kt)("inlineCode",{parentName:"p"},"request_children")," request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class RespondChildren(Streamable):\n    coin_states: List[CoinState]\n")),(0,a.kt)("h2",{id:"request_ses_info"},"request_ses_info"),(0,a.kt)("p",null,"A request from the wallet to the full node for SubEpochSummary heights. This is used for the fast sync protocol,\nto know where sub epochs start and end."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class RequestSESInfo(Streamable):\n    start_height: uint32\n    end_height: uint32\n")),(0,a.kt)("h2",{id:"respond_ses_info"},"respond_ses_info"),(0,a.kt)("p",null,"A response to a ",(0,a.kt)("inlineCode",{parentName:"p"},"request_ses_info")," request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class RespondSESInfo(Streamable):\n    reward_chain_hash: List[bytes32]\n    heights: List[List[uint32]]\n")))}d.isMDXComponent=!0}}]);