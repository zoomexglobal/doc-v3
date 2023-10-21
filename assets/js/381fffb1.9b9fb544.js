"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7635],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),b=a,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(7462),a=n(7294),o=n(6010),l=n(2466),s=n(6550),i=n(1980),c=n(7392),u=n(12);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function b(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[l,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[i,c]=m({queryString:n,groupId:r}),[p,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),f=(()=>{const e=i??p;return b({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!b({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),k(e)}),[c,k,o]),tabValues:o}}var f=n(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),r=c[n].value;r!==s&&(p(t),i(r))},b=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:b,onClick:d},l,{className:(0,o.Z)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":s===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=k(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},a.createElement(g,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return a.createElement(y,(0,r.Z)({key:String(t)},e))}},6020:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),o=n(4866),l=n(5162);const s={title:"Connect",sidebar_label:"Connect",slug:"/v3/ws/connect"},i=void 0,c={unversionedId:"v3/websocket/wss-authentication",id:"v3/websocket/wss-authentication",title:"Connect",description:"WebSocket public channel:",source:"@site/docs/v3/websocket/wss-authentication.mdx",sourceDirName:"v3/websocket",slug:"/v3/ws/connect",permalink:"/docs/v3/ws/connect",draft:!1,tags:[],version:"current",frontMatter:{title:"Connect",sidebar_label:"Connect",slug:"/v3/ws/connect"},sidebar:"v3SideBar",previous:{title:"Get Wallet Balance",permalink:"/docs/v3/account/wallet-balance"},next:{title:"Orderbook",permalink:"/docs/v3/websocket/public/orderbook"}},u={},p=[{value:"Authentication",id:"authentication",level:2},{value:"IP Limits",id:"ip-limits",level:2},{value:"Public channel - Args limits",id:"public-channel---args-limits",level:2},{value:"How to Send the Heartbeat Packet",id:"how-to-send-the-heartbeat-packet",level:2},{value:"How to Subscribe to Topics",id:"how-to-subscribe-to-topics",level:2},{value:"Understanding WebSocket Filters",id:"understanding-websocket-filters",level:3},{value:"Understanding WebSocket Filters: Unsubscription",id:"understanding-websocket-filters-unsubscription",level:3},{value:"Understanding the Subscription Response",id:"understanding-the-subscription-response",level:2}],d={toc:p},b="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(b,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"WebSocket public channel:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Mainnet:"),(0,a.kt)("br",null),"\nUSDT perpetual: ",(0,a.kt)("inlineCode",{parentName:"p"},"wss://stream.zoomex.com/v3/public/linear"),(0,a.kt)("br",null),"\nInverse contract: ",(0,a.kt)("inlineCode",{parentName:"p"},"wss://stream.zoomex.com/v3/public/inverse"),(0,a.kt)("br",null))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Testnet:"),(0,a.kt)("br",null),"\nUSDT perpetual: ",(0,a.kt)("inlineCode",{parentName:"p"},"wss://stream-testnet.zoomex.com/v3/public/linear"),(0,a.kt)("br",null),"\nInverse contract: ",(0,a.kt)("inlineCode",{parentName:"p"},"wss://stream-testnet.zoomex.com/v3/public/inverse"),(0,a.kt)("br",null)))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"WebSocket private channel:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Mainnet:"),(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"wss://stream.zoomex.com/v3/private"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Testnet:"),(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"wss://stream-testnet.zoomex.com/v3/private")))),(0,a.kt)("h2",{id:"authentication"},"Authentication"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("b",null,"Public")," topics do not require authentication. The following section applies to ",(0,a.kt)("b",null,"private")," topics only."),(0,a.kt)("p",null,"Apply for authentication when establishing a connection."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "req_id": "10001", // optional\n    "op": "auth",\n    "args": [\n        "api_key",\n        1662350400000, // expires; is greater than your current timestamp\n        "signature"\n    ]\n}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Successful authentication sample response")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "ret_msg": "",\n    "op": "auth",\n    "conn_id": "cejreaspqfh3sjdnldmg-p"\n}\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Example signature algorithms can be found ",(0,a.kt)("a",{parentName:"p",href:"../../v3/intro"},"here"),".")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Due to network complexity, your may get disconnected at any time. Please follow the instructions below to ensure that you receive WebSocket messages on time:"),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"Keep connection alive by ",(0,a.kt)("a",{parentName:"li",href:"connect#how-to-send-the-heartbeat-packet"},"sending the heartbeat packet")),(0,a.kt)("li",{parentName:"ol"},"Reconnect as soon as possible if disconnected"))),(0,a.kt)("h2",{id:"ip-limits"},"IP Limits"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Do not frequently connect and disconnect the connection."),(0,a.kt)("li",{parentName:"ul"},"Do not build over 500 connections in 5 minutes. This is counted separately per WebSocket endpoint.")),(0,a.kt)("h2",{id:"public-channel---args-limits"},"Public channel - Args limits"),(0,a.kt)("p",null,'For one public connection, you cannot have length of "args" array over 21,000 characters.'),(0,a.kt)("h2",{id:"how-to-send-the-heartbeat-packet"},"How to Send the Heartbeat Packet"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"How to Send")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'// req_id is a customised ID, which is optional\nws.send(JSON.stringify({"req_id": "100001", "op": "ping"}));\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Pong message example of public channels")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "ret_msg": "pong",\n    "conn_id": "465772b1-7630-4fdc-a492-e003e6f0f260",\n    "req_id": "",\n    "op": "ping"\n}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Pong message example of private channels")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "req_id": "test",\n    "op": "pong",\n    "args": [\n        "1675418560633"\n    ],\n    "conn_id": "cfcb4ocsvfriu23r3er0-1b"\n}\n')),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"To avoid network or program issues, we recommend that you send the ",(0,a.kt)("code",null,"ping")," heartbeat packet every ",(0,a.kt)("b",null,"20")," seconds to maintain the WebSocket connection.")),(0,a.kt)("h2",{id:"how-to-subscribe-to-topics"},"How to Subscribe to Topics"),(0,a.kt)("h3",{id:"understanding-websocket-filters"},"Understanding WebSocket Filters"),(0,a.kt)("p",null,"How to subscribe with a filter"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'// Subscribing level 1 orderbook\n{\n    "req_id": "test", // optional\n    "op": "subscribe",\n    "args": [\n        "orderbook.1.BTCUSDT"\n    ]\n}\n')),(0,a.kt)("p",null,"Subscribing with multiple symbols and topics is supported."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "req_id": "test", // optional\n    "op": "subscribe",\n    "args": [\n        "orderbook.1.BTCUSDT",\n        "publicTrade.BTCUSDT",\n        "orderbook.1.ETHUSDT"\n    ]\n}\n')),(0,a.kt)("h3",{id:"understanding-websocket-filters-unsubscription"},"Understanding WebSocket Filters: Unsubscription"),(0,a.kt)("p",null,"You can dynamically subscribe and unsubscribe from topics without unsubscribing from the WebSocket like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "op": "unsubscribe",\n    "args": [\n        "publicTrade.ETHUSD"\n    ],\n    "req_id": "customised_id"\n}\n')),(0,a.kt)("h2",{id:"understanding-the-subscription-response"},"Understanding the Subscription Response"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Topic subscription response message example")),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"private",label:"Private",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "ret_msg": "",\n    "op": "subscribe",\n    "conn_id": "cejreassvfrsfvb9v1a0-2m"\n}\n'))),(0,a.kt)(l.Z,{value:"public-future",label:"Linear/Inverse",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "ret_msg": "",\n    "conn_id": "3cd84cb1-4d06-4a05-930a-2efe5fc70f0f",\n    "req_id": "",\n    "op": "subscribe"\n}\n')))))}m.isMDXComponent=!0}}]);