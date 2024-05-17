"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7669],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var r=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var o=r.createContext({}),s=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):u(u({},e),t)),n},c=function(t){var e=s(t.components);return r.createElement(o.Provider,{value:e},t.children)},d="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,o=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),d=s(n),p=l,m=d["".concat(o,".").concat(p)]||d[p]||k[p]||a;return n?r.createElement(m,u(u({ref:e},c),{},{components:n})):r.createElement(m,u({ref:e},c))}));function m(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,u=new Array(a);u[0]=p;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[d]="string"==typeof t?t:l,u[1]=i;for(var s=2;s<a;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(t,e,n)=>{n.d(e,{Z:()=>u});var r=n(7294),l=n(6010);const a={tabItem:"tabItem_Ymn6"};function u(t){let{children:e,hidden:n,className:u}=t;return r.createElement("div",{role:"tabpanel",className:(0,l.Z)(a.tabItem,u),hidden:n},e)}},4866:(t,e,n)=>{n.d(e,{Z:()=>N});var r=n(7462),l=n(7294),a=n(6010),u=n(2466),i=n(6550),o=n(1980),s=n(7392),c=n(12);function d(t){return function(t){return l.Children.map(t,(t=>{if(!t||(0,l.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:e,label:n,attributes:r,default:l}}=t;return{value:e,label:n,attributes:r,default:l}}))}function k(t){const{values:e,children:n}=t;return(0,l.useMemo)((()=>{const t=e??d(n);return function(t){const e=(0,s.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,n])}function p(t){let{value:e,tabValues:n}=t;return n.some((t=>t.value===e))}function m(t){let{queryString:e=!1,groupId:n}=t;const r=(0,i.k6)(),a=function(t){let{queryString:e=!1,groupId:n}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:e,groupId:n});return[(0,o._X)(a),(0,l.useCallback)((t=>{if(!a)return;const e=new URLSearchParams(r.location.search);e.set(a,t),r.replace({...r.location,search:e.toString()})}),[a,r])]}function f(t){const{defaultValue:e,queryString:n=!1,groupId:r}=t,a=k(t),[u,i]=(0,l.useState)((()=>function(t){let{defaultValue:e,tabValues:n}=t;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const r=n.find((t=>t.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:e,tabValues:a}))),[o,s]=m({queryString:n,groupId:r}),[d,f]=function(t){let{groupId:e}=t;const n=function(t){return t?`docusaurus.tab.${t}`:null}(e),[r,a]=(0,c.Nk)(n);return[r,(0,l.useCallback)((t=>{n&&a.set(t)}),[n,a])]}({groupId:r}),b=(()=>{const t=o??d;return p({value:t,tabValues:a})?t:null})();(0,l.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:u,selectValue:(0,l.useCallback)((t=>{if(!p({value:t,tabValues:a}))throw new Error(`Can't select invalid tab value=${t}`);i(t),s(t),f(t)}),[s,f,a]),tabValues:a}}var b=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(t){let{className:e,block:n,selectedValue:i,selectValue:o,tabValues:s}=t;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,u.o5)(),k=t=>{const e=t.currentTarget,n=c.indexOf(e),r=s[n].value;r!==i&&(d(e),o(r))},p=t=>{let e=null;switch(t.key){case"Enter":k(t);break;case"ArrowRight":{const n=c.indexOf(t.currentTarget)+1;e=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(t.currentTarget)-1;e=c[n]??c[c.length-1];break}}e?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},e)},s.map((t=>{let{value:e,label:n,attributes:u}=t;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===e?0:-1,"aria-selected":i===e,key:e,ref:t=>c.push(t),onKeyDown:p,onClick:k},u,{className:(0,a.Z)("tabs__item",g.tabItem,u?.className,{"tabs__item--active":i===e})}),n??e)})))}function h(t){let{lazy:e,children:n,selectedValue:r}=t;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const t=a.find((t=>t.props.value===r));return t?(0,l.cloneElement)(t,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},a.map(((t,e)=>(0,l.cloneElement)(t,{key:e,hidden:t.props.value!==r}))))}function y(t){const e=f(t);return l.createElement("div",{className:(0,a.Z)("tabs-container",g.tabList)},l.createElement(v,(0,r.Z)({},t,e)),l.createElement(h,(0,r.Z)({},t,e)))}function N(t){const e=(0,b.Z)();return l.createElement(y,(0,r.Z)({key:String(e)},t))}},9597:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(7462),l=(n(7294),n(3905)),a=n(4866),u=n(5162);const i={title:"\u67e5\u8a62\u6700\u65b0\u884c\u60c5\u4fe1\u606f",sidebar_label:"\u67e5\u8a62\u6700\u65b0\u884c\u60c5\u4fe1\u606f",sidebar_position:6},o=void 0,s={unversionedId:"v3/market/tickers",id:"v3/market/tickers",title:"\u67e5\u8a62\u6700\u65b0\u884c\u60c5\u4fe1\u606f",description:"\u53ef\u7372\u53d6\u5230\u5feb\u7167\u7684\u6700\u65b0\u5e02\u5834\u50f9\u683c\uff0c\u6700\u4f73\u8cb7\u8ce3\u50f9\u683c\uff0c\u4ee5\u53ca\u904e\u53bb\u6642\u9593\u5167\u7684\u4ea4\u6613\u91cf\u7b49.",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/market/tickers.mdx",sourceDirName:"v3/market",slug:"/v3/market/tickers",permalink:"/docs/zh-TW/v3/market/tickers",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"\u67e5\u8a62\u6700\u65b0\u884c\u60c5\u4fe1\u606f",sidebar_label:"\u67e5\u8a62\u6700\u65b0\u884c\u60c5\u4fe1\u606f",sidebar_position:6},sidebar:"v3SideBar",previous:{title:"Order Book (\u6df1\u5ea6)",permalink:"/docs/zh-TW/v3/market/orderbook"},next:{title:"\u67e5\u8a62\u6b77\u53f2\u8cc7\u91d1\u8cbb\u7387",permalink:"/docs/zh-TW/v3/market/history-fund-rate"}},c={},d=[{value:"HTTP\u8acb\u6c42",id:"http\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],k={toc:d},p="wrapper";function m(t){let{components:e,...n}=t;return(0,l.kt)(p,(0,r.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u53ef\u7372\u53d6\u5230\u5feb\u7167\u7684\u6700\u65b0\u5e02\u5834\u50f9\u683c\uff0c\u6700\u4f73\u8cb7\u8ce3\u50f9\u683c\uff0c\u4ee5\u53ca\u904e\u53bb\u6642\u9593\u5167\u7684\u4ea4\u6613\u91cf\u7b49."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u8986\u84cb\u7bc4\u570d:  USDT\u6c38\u7e8c / \u53cd\u5411\u5408\u7d04"))),(0,l.kt)("h3",{id:"http\u8acb\u6c42"},"HTTP\u8acb\u6c42"),(0,l.kt)("p",null,"GET ",(0,l.kt)("inlineCode",{parentName:"p"},"/cloud/trade/v3/market/tickers")),(0,l.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"../enum#category"},"category")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7522\u54c1\u985e\u578b. ",(0,l.kt)("inlineCode",{parentName:"td"},"linear"),",",(0,l.kt)("inlineCode",{parentName:"td"},"inverse"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"../enum#symbol"},"symbol")),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u7a31")))),(0,l.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,l.kt)(a.Z,{groupId:"market-category",mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"linear",label:"Linear/Inverse",default:!0,mdxType:"TabItem"},(0,l.kt)("table",{border:"0.8"},(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c3\u6578"),(0,l.kt)("th",null,"\u985e\u578b"),(0,l.kt)("th",null,"\u8aaa\u660e")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"category"),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"\u7522\u54c1\u985e\u578b")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"list"),(0,l.kt)("td",null,"array"),(0,l.kt)("td",null,"Object")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"> symbol"),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"\u5408\u7d04\u540d\u7a31 ")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"> lastPrice"),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"\u6700\u65b0\u5e02\u5834\u6210\u4ea4\u50f9 ")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"> indexPrice"),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"\u6307\u6578\u50f9\u683c ")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"> markPrice"),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"\u6a19\u8a18\u50f9\u683c ")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"> prevPrice24h"),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"24\u5c0f\u6642\u524d\u7684\u6574\u9ede\u5e02\u50f9 ")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"> price24hPcnt"),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"\u5e02\u5834\u50f9\u683c\u76f8\u5c0d24h\u524d\u8b8a\u5316\u7684\u767e\u5206\u6bd4 ")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"> highPrice24h"),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"\u6700\u8fd124\u5c0f\u6642\u7684\u6700\u9ad8\u50f9 ")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"> lowPrice24h"),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"\u6700\u8fd124\u5c0f\u6642\u7684\u6700\u4f4e\u50f9 ")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"> prevPrice1h"),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"1\u5c0f\u6642\u524d\u7684\u6574\u9ede\u5e02\u50f9 ")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"> openInterest"),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"\u672a\u5e73\u5009\u5408\u7d04\u7684\u6578\u91cf ")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"> openInterestValue"),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"\u672a\u5e73\u5009\u5408\u7d04\u7684\u50f9\u503c ")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"> turnover24h"),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"\u6700\u8fd124\u5c0f\u6642\u6210\u4ea4\u984d ")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"> volume24h"),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"\u6700\u8fd124\u5c0f\u6642\u6210\u4ea4\u91cf ")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"> fundingRate"),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"\u8cc7\u91d1\u8cbb\u7387 ")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"> nextFundingTime"),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"\u4e0b\u6b21\u7d50\u7b97\u8cc7\u91d1\u8cbb\u7528\u7684\u6642\u9593 (\u6beb\u79d2) ")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"> ask1Size"),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"\u8cb71\u50f9\u7684\u6578\u91cf ")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"> bid1Price"),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"\u8cb71\u50f9 ")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"> ask1Price"),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"\u8ce31\u50f9 ")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"> bid1Size"),(0,l.kt)("td",null,"string"),(0,l.kt)("td",null,"\u8cb71\u50f9\u7684\u6578\u91cf "))))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"GET /cloud/trade/v3/market/tickers?category=inverse&symbol=BTCUSD HTTP/1.1\nHost: openapi-testnet.zoomex.com\n")),(0,l.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "category": "inverse",\n        "list": [\n            {\n                "symbol": "BTCUSD",\n                "lastPrice": "16597.00",\n                "indexPrice": "16598.54",\n                "markPrice": "16596.00",\n                "prevPrice24h": "16464.50",\n                "price24hPcnt": "0.008047",\n                "highPrice24h": "30912.50",\n                "lowPrice24h": "15700.00",\n                "prevPrice1h": "16595.50",\n                "openInterest": "373504107",\n                "openInterestValue": "22505.67",\n                "turnover24h": "2352.94950046",\n                "volume24h": "49337318",\n                "fundingRate": "-0.001034",\n                "nextFundingTime": "1672387200000",\n                "predictedDeliveryPrice": "",\n                "basisRate": "",\n                "deliveryFeeRate": "",\n                "deliveryTime": "0",\n                "ask1Size": "1",\n                "bid1Price": "16596.00",\n                "ask1Price": "16597.50",\n                "bid1Size": "1",\n                "basis": ""\n            }\n        ]\n    },\n    "retExtInfo": {},\n    "time": 1672376496682\n}\n')))}m.isMDXComponent=!0}}]);