"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[394],{5680:(e,t,a)=>{a.d(t,{xA:()=>o,yg:()=>u});var r=a(6540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),d=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,o=g(e,["components","mdxType","originalType","parentName"]),y=d(a),s=n,u=y["".concat(p,".").concat(s)]||y[s]||m[s]||l;return a?r.createElement(u,i(i({ref:t},o),{},{components:a})):r.createElement(u,i({ref:t},o))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=s;var g={};for(var p in t)hasOwnProperty.call(t,p)&&(g[p]=t[p]);g.originalType=e,g[y]="string"==typeof e?e:n,i[1]=g;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},9703:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>g,toc:()=>d});var r=a(8168),n=(a(6540),a(5680));const l={title:"Get Closed PnL",sidebar_label:"Get Closed PnL (2 years)",sidebar_position:11},i=void 0,g={unversionedId:"v3/position/close-pnl",id:"v3/position/close-pnl",title:"Get Closed PnL",description:"Query user's closed profit and loss records. The results are sorted by createdTime in descending order.",source:"@site/docs/v3/position/close-pnl.mdx",sourceDirName:"v3/position",slug:"/v3/position/close-pnl",permalink:"/docs/v3/position/close-pnl",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Get Closed PnL",sidebar_label:"Get Closed PnL (2 years)",sidebar_position:11},sidebar:"v3SideBar",previous:{title:"Get Execution (2 years)",permalink:"/docs/v3/position/execution"},next:{title:"Get Coin Exchange Records",permalink:"/docs/v3/account/exchange"}},p={},d=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],o={toc:d},y="wrapper";function m(e){let{components:t,...a}=e;return(0,n.yg)(y,(0,r.A)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Query user's closed profit and loss records. The results are sorted by ",(0,n.yg)("inlineCode",{parentName:"p"},"createdTime")," in descending order."),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"},"Normal account covers: USDT perpetual / Inverse contract"))),(0,n.yg)("h3",{id:"http-request"},"HTTP Request"),(0,n.yg)("p",null,"GET ",(0,n.yg)("inlineCode",{parentName:"p"},"/cloud/trade/v3/position/closed-pnl")),(0,n.yg)("h3",{id:"request-parameters"},"Request Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Required"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Comments"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"../enum#category"},"category")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("strong",{parentName:"td"},"true")),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Product type ",(0,n.yg)("ul",null,(0,n.yg)("li",null,"Normal account: ",(0,n.yg)("inlineCode",{parentName:"td"},"linear"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"inverse"),". ",(0,n.yg)("em",{parentName:"td"},"Please note that ",(0,n.yg)("inlineCode",{parentName:"em"},"category")," is ",(0,n.yg)("strong",{parentName:"em"},"not")," involved with business logic"))))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"symbol"),(0,n.yg)("td",{parentName:"tr",align:"left"},"false"),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Symbol name")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"startTime"),(0,n.yg)("td",{parentName:"tr",align:"left"},"false"),(0,n.yg)("td",{parentName:"tr",align:"left"},"integer"),(0,n.yg)("td",{parentName:"tr",align:null},"The start timestamp (ms)")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"endTime"),(0,n.yg)("td",{parentName:"tr",align:"left"},"false"),(0,n.yg)("td",{parentName:"tr",align:"left"},"integer"),(0,n.yg)("td",{parentName:"tr",align:null},"The end timestamp (ms)")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"limit"),(0,n.yg)("td",{parentName:"tr",align:"left"},"false"),(0,n.yg)("td",{parentName:"tr",align:"left"},"integer"),(0,n.yg)("td",{parentName:"tr",align:null},"Limit for data size per page. ","[",(0,n.yg)("inlineCode",{parentName:"td"},"1"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"100"),"]",". Default: ",(0,n.yg)("inlineCode",{parentName:"td"},"50"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"cursor"),(0,n.yg)("td",{parentName:"tr",align:"left"},"false"),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Cursor. Use the ",(0,n.yg)("inlineCode",{parentName:"td"},"nextPageCursor")," token from the response to retrieve the next page of the result set")))),(0,n.yg)("h3",{id:"response-parameters"},"Response Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Comments"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"category"),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Product type")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"list"),(0,n.yg)("td",{parentName:"tr",align:"left"},"array"),(0,n.yg)("td",{parentName:"tr",align:null},"Object")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"> symbol"),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Symbol name")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"> orderId"),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Order ID")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"> side"),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"Buy"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"Side"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"> qty"),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Order qty")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"> orderPrice"),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Order price")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"> orderType"),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Order type. ",(0,n.yg)("inlineCode",{parentName:"td"},"Market"),",",(0,n.yg)("inlineCode",{parentName:"td"},"Limit"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"> execType"),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Exec type. ",(0,n.yg)("inlineCode",{parentName:"td"},"Trade"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"BustTrade"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"SessionSettlePnL"),", ",(0,n.yg)("inlineCode",{parentName:"td"},"Settle"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"> closedSize"),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Closed size")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"> cumEntryValue"),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Cumulated Position value")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"> avgEntryPrice"),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Average entry price")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"> cumExitValue"),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Cumulated exit position value")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"> avgExitPrice"),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Average exit price")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"> closedPnl"),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Closed PnL")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"> fillCount"),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"The number of fills in a single order")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"> leverage"),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"leverage")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"> createdTime"),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"The created time (ms)")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"> updatedTime"),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"The updated time (ms)")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"nextPageCursor"),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Refer to the ",(0,n.yg)("inlineCode",{parentName:"td"},"cursor")," request parameter")))),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"request-example"},"Request Example"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"GET /cloud/trade/v3/position/closed-pnl?category=linear&limit=1 HTTP/1.1\nHost: openapi-testnet.zoomex.com\nX-BAPI-SIGN: XXXXX\nX-BAPI-API-KEY: XXXXX\nX-BAPI-TIMESTAMP: 1672284128523\nX-BAPI-RECV-WINDOW: 5000\n")),(0,n.yg)("h3",{id:"response-example"},"Response Example"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "nextPageCursor": "5a373bfe-188d-4913-9c81-d57ab5be8068%3A1672214887231423699%2C5a373bfe-188d-4913-9c81-d57ab5be8068%3A1672214887231423699",\n        "category": "linear",\n        "list": [\n            {\n                "symbol": "ETHUSDT",\n                "orderType": "Market",\n                "leverage": "3",\n                "updatedTime": "1672214887236",\n                "side": "Sell",\n                "orderId": "5a373bfe-188d-4913-9c81-d57ab5be8068",\n                "closedPnl": "-47.4065323",\n                "avgEntryPrice": "1194.97516667",\n                "qty": "3",\n                "cumEntryValue": "3584.9255",\n                "createdTime": "1672214887231423699",\n                "orderPrice": "1122.95",\n                "closedSize": "3",\n                "avgExitPrice": "1180.59833333",\n                "execType": "Trade",\n                "fillCount": "4",\n                "cumExitValue": "3541.795"\n            }\n        ]\n    },\n    "retExtInfo": {},\n    "time": 1672284129153\n}\n')))}m.isMDXComponent=!0}}]);