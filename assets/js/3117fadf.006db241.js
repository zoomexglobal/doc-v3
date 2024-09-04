"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5962],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>p});var l=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},u=Object.keys(e);for(l=0;l<u.length;l++)n=u[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(l=0;l<u.length;l++)n=u[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=l.createContext({}),o=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=o(e.components);return l.createElement(s.Provider,{value:t},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,u=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=o(n),d=r,p=g["".concat(s,".").concat(d)]||g[d]||y[d]||u;return n?l.createElement(p,a(a({ref:t},c),{},{components:n})):l.createElement(p,a({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var u=n.length,a=new Array(u);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[g]="string"==typeof e?e:r,a[1]=i;for(var o=2;o<u;o++)a[o]=n[o];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9365:(e,t,n)=>{n.d(t,{A:()=>a});var l=n(6540),r=n(53);const u={tabItem:"tabItem_Ymn6"};function a(e){let{children:t,hidden:n,className:a}=e;return l.createElement("div",{role:"tabpanel",className:(0,r.A)(u.tabItem,a),hidden:n},t)}},1470:(e,t,n)=>{n.d(t,{A:()=>T});var l=n(8168),r=n(6540),u=n(53),a=n(3104),i=n(6347),s=n(7485),o=n(1682),c=n(9466);function g(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:l,default:r}}=e;return{value:t,label:n,attributes:l,default:r}}))}function y(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??g(n);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const l=(0,i.W6)(),u=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(u),(0,r.useCallback)((e=>{if(!u)return;const t=new URLSearchParams(l.location.search);t.set(u,e),l.replace({...l.location,search:t.toString()})}),[u,l])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:l}=e,u=y(e),[a,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const l=n.find((e=>e.default))??n[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:u}))),[s,o]=p({queryString:n,groupId:l}),[g,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,u]=(0,c.Dv)(n);return[l,(0,r.useCallback)((e=>{n&&u.set(e)}),[n,u])]}({groupId:l}),b=(()=>{const e=s??g;return d({value:e,tabValues:u})?e:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:u}))throw new Error(`Can't select invalid tab value=${e}`);i(e),o(e),m(e)}),[o,m,u]),tabValues:u}}var b=n(2303);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:g}=(0,a.a_)(),y=e=>{const t=e.currentTarget,n=c.indexOf(t),l=o[n].value;l!==i&&(g(t),s(l))},d=e=>{let t=null;switch(e.key){case"Enter":y(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.A)("tabs",{"tabs--block":n},t)},o.map((e=>{let{value:t,label:n,attributes:a}=e;return r.createElement("li",(0,l.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:y},a,{className:(0,u.A)("tabs__item",h.tabItem,a?.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:l}=e;const u=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=u.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},u.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==l}))))}function k(e){const t=m(e);return r.createElement("div",{className:(0,u.A)("tabs-container",h.tabList)},r.createElement(f,(0,l.A)({},e,t)),r.createElement(v,(0,l.A)({},e,t)))}function T(e){const t=(0,b.A)();return r.createElement(k,(0,l.A)({key:String(t)},e))}},5060:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>g});var l=n(8168),r=(n(6540),n(5680)),u=n(1470),a=n(9365);const i={title:"Ticker",sidebar_label:"Ticker",sidebar_position:3},s=void 0,o={unversionedId:"v3/websocket/public/ticker",id:"v3/websocket/public/ticker",title:"Ticker",description:"Subscribe to the ticker stream.",source:"@site/docs/v3/websocket/public/ticker.mdx",sourceDirName:"v3/websocket/public",slug:"/v3/websocket/public/ticker",permalink:"/docs/v3/websocket/public/ticker",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Ticker",sidebar_label:"Ticker",sidebar_position:3},sidebar:"v3SideBar",previous:{title:"Trade",permalink:"/docs/v3/websocket/public/trade"},next:{title:"Kline",permalink:"/docs/v3/websocket/public/kline"}},c={},g=[{value:"Response Parameters",id:"response-parameters",level:3},{value:"Subscribe Example",id:"subscribe-example",level:3},{value:"Response Example",id:"response-example",level:3}],y={toc:g},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,l.A)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Subscribe to the ticker stream."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"This topic utilises the snapshot field and delta field. If a response param is not found in the message, then its value has not changed."))),(0,r.yg)("p",null,"Push frequency: Derivatives - ",(0,r.yg)("strong",{parentName:"p"},"100ms"),", Spot - ",(0,r.yg)("strong",{parentName:"p"},"real-time")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Topic:"),(0,r.yg)("br",null),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"tickers.{symbol}")),(0,r.yg)("h3",{id:"response-parameters"},"Response Parameters"),(0,r.yg)(u.A,{groupId:"market-category",mdxType:"Tabs"},(0,r.yg)(a.A,{value:"linear",label:"Linear/Inverse",default:!0,mdxType:"TabItem"},(0,r.yg)("table",{border:"0.8"},(0,r.yg)("tr",null,(0,r.yg)("th",null,"Parameter"),(0,r.yg)("th",null,"Type"),(0,r.yg)("th",null,"Comments")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"topic"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"Topic name")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"type"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"Data type. ",(0,r.yg)("code",null,"snapshot"),",",(0,r.yg)("code",null,"delta"))),(0,r.yg)("tr",null,(0,r.yg)("td",null,"cs"),(0,r.yg)("td",null,"integer"),(0,r.yg)("td",null,"Cross sequence")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"ts"),(0,r.yg)("td",null,"number"),(0,r.yg)("td",null,"The timestamp (ms) that the system generates the data")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"data"),(0,r.yg)("td",null,"array"),(0,r.yg)("td",null,"Object")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> symbol"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"Symbol name ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> ",(0,r.yg)("a",{href:"../../enum#tickdirection"},"tickDirection")),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"Tick direction ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> price24hPcnt"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"Percentage change of market price in the last 24 hours ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> lastPrice"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"Last price ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> prevPrice24h"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"Market price 24 hours ago ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> highPrice24h"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"The highest price in the last 24 hours ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> lowPrice24h"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"The lowest price in the last 24 hours ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> prevPrice1h"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"Market price an hour ago ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> markPrice"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"Mark price ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> indexPrice"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"Index price ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> openInterest"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"Open interest size ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> openInterestValue"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"Open interest value ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> turnover24h"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"Turnover for 24h ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> volume24h"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"Volume for 24h ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> nextFundingTime"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"Next funding timestamp (ms) ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> fundingRate"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"Funding rate ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> bid1Price"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"Best bid price ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> bid1Size"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"Best bid size ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> ask1Price"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"Best ask price ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> ask1Size"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"Best ask size ")))),(0,r.yg)(a.A,{value:"spot",label:"Spot",mdxType:"TabItem"},(0,r.yg)("table",{border:"0.8"},(0,r.yg)("tr",null,(0,r.yg)("th",null,"Parameter"),(0,r.yg)("th",null,"Type"),(0,r.yg)("th",null,"Comments")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"topic"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"Topic name")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"ts"),(0,r.yg)("td",null,"number"),(0,r.yg)("td",null,"The timestamp (ms) that the system generates the data")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"type"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"Data type. ",(0,r.yg)("code",null,"snapshot"))),(0,r.yg)("tr",null,(0,r.yg)("td",null,"cs"),(0,r.yg)("td",null,"integer"),(0,r.yg)("td",null,"Cross sequence")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"data"),(0,r.yg)("td",null,"array"),(0,r.yg)("td",null,"Object")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> symbol"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"Symbol name ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> lastPrice"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"Last price ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> highPrice24h"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"The highest price in the last 24 hours ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> lowPrice24h"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"The lowest price in the last 24 hours ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> prevPrice24h"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"Percentage change of market price relative to 24h ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> volume24h"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"Volume for 24h ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> turnover24h"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"Turnover for 24h ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> price24hPcnt"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"Percentage change of market price relative to 24h "))))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"subscribe-example"},"Subscribe Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'const socket = new WebSocket(\'wss://stream-testnet.zoomex.com/v3/public/linear\');\n\nsocket.onopen = function() {\n  const subscribeMsg = {\n    "op": "subscribe",\n    "args": ["tickers.BTCUSDT"]\n  };\n  socket.send(JSON.stringify(subscribeMsg));\n};\n\nsocket.onmessage = function(event) {\n};\n\nsocket.onclose = function(event) {\n};\n')),(0,r.yg)("h3",{id:"response-example"},"Response Example"),(0,r.yg)(u.A,{groupId:"market-category",mdxType:"Tabs"},(0,r.yg)(a.A,{value:"linear",label:"Linear",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'```json\n{\n    "topic": "tickers.BTCUSDT",\n    "type": "snapshot",\n    "data": {\n    "symbol": "BTCUSDT",\n    "tickDirection": "PlusTick",\n    "price24hPcnt": "0.017103",\n    "lastPrice": "17216.00",\n    "prevPrice24h": "16926.50",\n    "highPrice24h": "17281.50",\n    "lowPrice24h": "16915.00",\n    "prevPrice1h": "17238.00",\n    "markPrice": "17217.33",\n    "indexPrice": "17227.36",\n    "openInterest": "68744.761",\n    "openInterestValue": "1183601235.91",\n    "turnover24h": "1570383121.943499",\n    "volume24h": "91705.276",\n    "nextFundingTime": "1673280000000",\n    "fundingRate": "-0.000212",\n    "bid1Price": "17215.50",\n    "bid1Size": "84.489",\n    "ask1Price": "17216.00",\n    "ask1Size": "83.020"\n},\n    "cs": 24987956059,\n    "ts": 1673272861686\n}\n```\n')))))}p.isMDXComponent=!0}}]);