"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9726],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=p(a),s=r,k=c["".concat(d,".").concat(s)]||c[s]||m[s]||l;return a?n.createElement(k,i(i({ref:e},u),{},{components:a})):n.createElement(k,i({ref:e},u))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[c]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},4861:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={title:"\u67e5\u8a62\u9322\u5305\u9918\u984d",sidebar_label:"\u67e5\u8a62\u9322\u5305\u9918\u984d",sidebar_position:1},i=void 0,o={unversionedId:"v3/account/wallet-balance",id:"v3/account/wallet-balance",title:"\u67e5\u8a62\u9322\u5305\u9918\u984d",description:"HTTP \u8acb\u6c42",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/account/wallet-balance.mdx",sourceDirName:"v3/account",slug:"/v3/account/wallet-balance",permalink:"/docs/zh-TW/v3/account/wallet-balance",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u67e5\u8a62\u9322\u5305\u9918\u984d",sidebar_label:"\u67e5\u8a62\u9322\u5305\u9918\u984d",sidebar_position:1},sidebar:"v3SideBar",previous:{title:"\u67e5\u8a62\u5e73\u5009\u76c8\u8667",permalink:"/docs/zh-TW/v3/position/close-pnl"},next:{title:"\u67e5\u8a62\u8cc7\u7522\u4fe1\u606f (\u73fe\u8ca8)",permalink:"/docs/zh-TW/v3/account/asset-info"}},d={},p=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],u={toc:p},c="wrapper";function m(t){let{components:e,...a}=t;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,r.kt)("p",null,"GET ",(0,r.kt)("inlineCode",{parentName:"p"},"/cloud/trade/v3/account/wallet-balance")),(0,r.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"../enum#accounttype"},"accountType")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e33\u6236\u985e\u578b. ",(0,r.kt)("ul",null,(0,r.kt)("li",null,"\u666e\u901a\u5e33\u6236: ",(0,r.kt)("inlineCode",{parentName:"td"},"CONTRACT"),"(\u671f\u8ca8)")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"coin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e63\u7a2e\u540d\u7a31 ",(0,r.kt)("ul",null,(0,r.kt)("li",null,"\u4e0d\u50b3\u5247\u8fd4\u56de\u975e\u96f6\u8cc7\u7522\u4fe1\u606f"),(0,r.kt)("li",null,"\u53ef\u4ee5\u50b3\u591a\u500b\u5e63\u9032\u884c\u67e5\u8a62\uff0c\u4ee5\u9017\u865f\u5206\u9694")))))),(0,r.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"list"),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> totalEquity"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8cec\u6236\u7dad\u5ea6\u63db\u7b97\u6210usd\u7684\u8cc7\u7522\u6de8\u503c\uff1aAccount Margin Balance Base Coin + Account Option Value Base Coin\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> totalWalletBalance"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8cec\u6236\u7dad\u5ea6\u63db\u7b97\u6210usd\u7684\u7522\u9322\u5305\u9918\u984d\uff1a\u2211 Asset Wallet Balance By USD value of each asset\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> totalMarginBalance"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8cec\u6236\u7dad\u5ea6\u63db\u7b97\u6210usd\u7684\u4fdd\u8b49\u91d1\u9918\u984d\uff1atotalWalletBalance + totalPerpUPL\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> totalAvailableBalance"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8cec\u6236\u7dad\u5ea6\u63db\u7b97\u6210usd\u7684\u53ef\u7528\u9918\u984d\uff1aRM\uff1atotalMarginBalance - totalInitialMargin\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> totalInitialMargin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8cec\u6236\u7dad\u5ea6\u63db\u7b97\u6210usd\u7684\u7e3d\u521d\u59cb\u4fdd\u8b49\u91d1\uff1a\u2211 Asset Total Initial Margin Base Coin\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> totalMaintenanceMargin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8cec\u6236\u7dad\u5ea6\u63db\u7b97\u6210usd\u7684\u7e3d\u7dad\u6301\u4fdd\u8b49\u91d1: \u2211 Asset Total Maintenance Margin Base Coin\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"> coin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"arrays"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e63\u7a2e\u5217\u8868")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> coin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e63\u7a2e\u540d\u7a31\uff0c\u4f8b\u5982 BTC\uff0cETH\uff0cUSDT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> equity"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7576\u524d\u5e63\u7a2e\u7684\u8cc7\u7522\u6de8\u503c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> usdValue"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7576\u524d\u5e63\u7a2e\u6298\u7b97\u6210 usd \u7684\u50f9\u503c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> walletBalance"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7576\u524d\u5e63\u7a2e\u7684\u9322\u5305\u9918\u984d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> availableToWithdraw"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7576\u524d\u5e63\u7a2e\u7684\u53ef\u5283\u8f49\u63d0\u73fe\u91d1\u984d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> totalOrderIM"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee5\u7576\u524d\u5e63\u7a2e\u7d50\u7b97\u7684\u8a02\u55ae\u59d4\u8a17\u9810\u4f54\u7528\u4fdd\u8b49\u91d1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> totalPositionIM"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee5\u7576\u524d\u5e63\u7a2e\u7d50\u7b97\u7684\u6240\u6709\u5009\u4f4d\u8d77\u59cb\u4fdd\u8b49\u91d1\u6c42\u548c + \u6240\u6709\u5009\u4f4d\u7684\u9810\u4f54\u7528\u5e73\u5009\u624b\u7e8c\u8cbb.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> totalPositionMM"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee5\u7576\u524d\u5e63\u7a2e\u7d50\u7b97\u7684\u6240\u6709\u5009\u4f4d\u7dad\u6301\u4fdd\u8b49\u91d1\u6c42\u548c.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> unrealisedPnl"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee5\u7576\u524d\u5e63\u7a2e\u7d50\u7b97\u7684\u6240\u6709\u5009\u4f4d\u7684\u672a\u7d50\u76c8\u8667\u4e4b\u548c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> cumRealisedPnl"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee5\u7576\u524d\u5e63\u7a2e\u7d50\u7b97\u7684\u6240\u6709\u5009\u4f4d\u7684\u7d2f\u8a08\u5df2\u7d50\u76c8\u8667\u4e4b\u548c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},">> bonus"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ad4\u9a57\u91d1.")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"GET /cloud/trade/v3/account/wallet-balance?accountType=CONTRACT HTTP/1.1\nHost: openapi-testnet.zoomex.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1672125440406\nX-BAPI-RECV-WINDOW: 5000\n")),(0,r.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "list": [\n            {\n                "accountType": "CONTRACT",\n                "accountIMRate": "",\n                "accountMMRate": "",\n                "totalEquity": "",\n                "totalWalletBalance": "",\n                "totalMarginBalance": "",\n                "totalAvailableBalance": "",\n                "totalPerpUPL": "",\n                "totalInitialMargin": "",\n                "totalMaintenanceMargin": "",\n                "accountLTV": "",\n                "coin": [\n                    {\n                        "coin": "BTC",\n                        "equity": "0",\n                        "usdValue": "",\n                        "walletBalance": "0",\n                        "borrowAmount": "",\n                        "availableToBorrow": "",\n                        "availableToWithdraw": "0",\n                        "accruedInterest": "",\n                        "totalOrderIM": "0",\n                        "totalPositionIM": "0",\n                        "totalPositionMM": "",\n                        "unrealisedPnl": "0",\n                        "cumRealisedPnl": "0.12384551"\n                    },\n                    {\n                        "coin": "ETH",\n                        "equity": "0.30050274",\n                        "usdValue": "",\n                        "walletBalance": "0.30050274",\n                        "borrowAmount": "",\n                        "availableToBorrow": "",\n                        "availableToWithdraw": "0.30050274",\n                        "accruedInterest": "",\n                        "totalOrderIM": "0",\n                        "totalPositionIM": "0",\n                        "totalPositionMM": "",\n                        "unrealisedPnl": "0",\n                        "cumRealisedPnl": "0"\n                    },\n                    {\n                        "coin": "EOS",\n                        "equity": "900.3811056",\n                        "usdValue": "",\n                        "walletBalance": "900.3811056",\n                        "borrowAmount": "",\n                        "availableToBorrow": "",\n                        "availableToWithdraw": "900.3811056",\n                        "accruedInterest": "",\n                        "totalOrderIM": "0",\n                        "totalPositionIM": "0",\n                        "totalPositionMM": "",\n                        "unrealisedPnl": "0",\n                        "cumRealisedPnl": "0"\n                    },\n                    {\n                        "coin": "XRP",\n                        "equity": "1100.7278334",\n                        "usdValue": "",\n                        "walletBalance": "1100.7278334",\n                        "borrowAmount": "",\n                        "availableToBorrow": "",\n                        "availableToWithdraw": "1100.7278334",\n                        "accruedInterest": "",\n                        "totalOrderIM": "0",\n                        "totalPositionIM": "0",\n                        "totalPositionMM": "",\n                        "unrealisedPnl": "0",\n                        "cumRealisedPnl": "0"\n                    },\n                    {\n                        "coin": "USDT",\n                        "equity": "60028.59717864",\n                        "usdValue": "",\n                        "walletBalance": "59991.29717864",\n                        "borrowAmount": "",\n                        "availableToBorrow": "",\n                        "availableToWithdraw": "55992.23760272",\n                        "accruedInterest": "",\n                        "totalOrderIM": "0",\n                        "totalPositionIM": "3999.05957592",\n                        "totalPositionMM": "",\n                        "unrealisedPnl": "37.3",\n                        "cumRealisedPnl": "-59483.31410791"\n                    }\n                ]\n            }\n        ]\n    },\n    "retExtInfo": {},\n    "time": 1696667951890\n}\n')))}m.isMDXComponent=!0}}]);