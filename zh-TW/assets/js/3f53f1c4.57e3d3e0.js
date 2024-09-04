"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6418],{5680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>s});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var g=n.createContext({}),p=function(e){var t=n.useContext(g),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(g.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,s=d["".concat(g,".").concat(u)]||d[u]||y[u]||l;return a?n.createElement(s,i(i({ref:t},c),{},{components:a})):n.createElement(s,i({ref:t},c))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8355:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(8168),r=(a(6540),a(5680));const l={title:"\u4ea4\u6613\u54e1\u7372\u53d6\u9322\u5305\u4f59\u984d",sidebar_label:"\u4ea4\u6613\u54e1\u7372\u53d6\u9322\u5305\u4f59\u984d",sidebar_position:1,slug:"/copy-trade/account/wallet"},i=void 0,o={unversionedId:"v3/copy-trade/rest-trade/account/wallet",id:"v3/copy-trade/rest-trade/account/wallet",title:"\u4ea4\u6613\u54e1\u7372\u53d6\u9322\u5305\u4f59\u984d",description:"\u4ea4\u6613\u54e1\u7372\u53d6\u8ddf\u55ae\u5e33\u6236\u7684\u9322\u5305\u4f59\u984d",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/copy-trade/rest-trade/account/wallet.mdx",sourceDirName:"v3/copy-trade/rest-trade/account",slug:"/copy-trade/account/wallet",permalink:"/docs/zh-TW/copy-trade/account/wallet",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u4ea4\u6613\u54e1\u7372\u53d6\u9322\u5305\u4f59\u984d",sidebar_label:"\u4ea4\u6613\u54e1\u7372\u53d6\u9322\u5305\u4f59\u984d",sidebar_position:1,slug:"/copy-trade/account/wallet"},sidebar:"v3SideBar",previous:{title:"\u4ea4\u6613\u54e1\u8a2d\u7f6e\u5e36\u55ae\u69d3\u687f",permalink:"/docs/zh-TW/copy-trade/position/leverage"},next:{title:"\u4ea4\u6613\u54e1\u5283\u8f49\u8cc7\u91d1",permalink:"/docs/zh-TW/copy-trade/account/transfer"}},g={},p=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u8fd4\u56de\u53c3\u6578",id:"\u8fd4\u56de\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],c={toc:p},d="wrapper";function y(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"\u4ea4\u6613\u54e1\u7372\u53d6\u8ddf\u55ae\u5e33\u6236\u7684\u9322\u5305\u4f59\u984d"),(0,r.yg)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,r.yg)("p",null,"GET ",(0,r.yg)("inlineCode",{parentName:"p"},"/cloud/contract/v3/private/copytrading/wallet/balance")),(0,r.yg)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,r.yg)("p",null,"\u7121"),(0,r.yg)("h3",{id:"\u8fd4\u56de\u53c3\u6578"},"\u8fd4\u56de\u53c3\u6578"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"coin"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5e63\u7a2e\u985e\u578b")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"equity"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7528\u6236\u8cc7\u7522 (wallet_balance + unrealised_pnl)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"availableBalance"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u7528\u4f59\u984d = wallet balance - used margin")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"usedMargin"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5df2\u7528\u4fdd\u8b49\u91d1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"orderMargin"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u59d4\u6258\u9810\u5360\u7528\u4fdd\u8b49\u91d1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"positionMargin"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5009\u4f4d\u4fdd\u8b49\u91d1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"walletBalance"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u9322\u5305\u4f59\u984d")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"realisedPnl"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7576\u65e5\u5df2\u7d50\u76c8\u8667")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"unrealisedPnl"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u672a\u7d50\u76c8\u8667")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"cumRealisedPnl"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7d2f\u8a08\u5df2\u7d50\u76c8\u8667")))),(0,r.yg)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"curl --location --request GET 'https://openapi-testnet.zoomex.com/cloud/contract/v3/private/copytrading/wallet/balance?timestamp=1689842868793&api_key=XXXXX&recv_window=5000&sign=XXXXX'\n")),(0,r.yg)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "success",\n    "result": {\n        "availableBalance": "15790.73687204",\n        "usedMargin": "1305.7048",\n        "orderMargin": "0",\n        "positionMargin": "1305.7048",\n        "walletBalance": "17096.44167204",\n        "realisedPnl": "2857.55887356",\n        "unrealisedPnl": "-78.86",\n        "cumRealisedPnl": "3096.44167204",\n        "coin": "USDT",\n        "equity": "17017.58167204"\n    }\n}\n')))}y.isMDXComponent=!0}}]);