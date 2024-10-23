"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2606],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>c});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),m=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},k="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),k=m(n),s=a,c=k["".concat(p,".").concat(s)]||k[s]||u[s]||l;return n?r.createElement(c,i(i({ref:e},d),{},{components:n})):r.createElement(c,i({ref:e},d))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[k]="string"==typeof t?t:a,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6900:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const l={title:"\u67e5\u8a62\u6b77\u53f2\u8cc7\u91d1\u8cbb\u7387",sidebar_label:"\u67e5\u8a62\u6b77\u53f2\u8cc7\u91d1\u8cbb\u7387",sidebar_position:7},i=void 0,o={unversionedId:"v3/market/history-fund-rate",id:"v3/market/history-fund-rate",title:"\u67e5\u8a62\u6b77\u53f2\u8cc7\u91d1\u8cbb\u7387",description:"\u67e5\u8a62\u8cc7\u91d1\u8cbb\u7387\uff0c\u6bcf\u500bsymbol\u7684\u8cc7\u91d1\u8cbb\u7387\u7522\u751f\u9031\u671f\u4e0d\u540c\u3002\u5047\u8a2d\u8cc7\u91d1\u8cbb\u7387\u70ba8\u5c0f\u6642\uff0c\u7576\u524d\u6642\u9593\u662fUTC12\u9ede\uff0c\u5247\u8fd4\u56de\u7684\u662f\u4e0a\u4e00\u500b\u7d50\u7b97\u5373UTC8\u9ede\u7522\u751f\u7684\u8cc7\u91d1\u8cbb\u7387\u3002\u5982\u8981\u67e5\u8a62symbol\u7684\u8cc7\u91d1\u8cbb\u7387\u6642\u9593\u9593\u9694\uff0c\u8acb\u67e5\u8a62\u53ef\u4ea4\u6613\u7522\u54c1\u898f\u683c\u63a5\u53e3",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/market/history-fund-rate.mdx",sourceDirName:"v3/market",slug:"/v3/market/history-fund-rate",permalink:"/docs/zh-TW/v3/market/history-fund-rate",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"\u67e5\u8a62\u6b77\u53f2\u8cc7\u91d1\u8cbb\u7387",sidebar_label:"\u67e5\u8a62\u6b77\u53f2\u8cc7\u91d1\u8cbb\u7387",sidebar_position:7},sidebar:"v3SideBar",previous:{title:"\u67e5\u8a62\u6700\u65b0\u884c\u60c5\u4fe1\u606f",permalink:"/docs/zh-TW/v3/market/tickers"},next:{title:"\u67e5\u8a62\u5e73\u53f0\u6210\u4ea4\u6b77\u53f2",permalink:"/docs/zh-TW/v3/market/recent-trade"}},p={},m=[{value:"HTTP\u8acb\u6c42",id:"http\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],d={toc:m},k="wrapper";function u(t){let{components:e,...n}=t;return(0,a.kt)(k,(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u67e5\u8a62\u8cc7\u91d1\u8cbb\u7387\uff0c\u6bcf\u500bsymbol\u7684\u8cc7\u91d1\u8cbb\u7387\u7522\u751f\u9031\u671f\u4e0d\u540c\u3002\u5047\u8a2d\u8cc7\u91d1\u8cbb\u7387\u70ba8\u5c0f\u6642\uff0c\u7576\u524d\u6642\u9593\u662fUTC12\u9ede\uff0c\u5247\u8fd4\u56de\u7684\u662f\u4e0a\u4e00\u500b\u7d50\u7b97\u5373UTC8\u9ede\u7522\u751f\u7684\u8cc7\u91d1\u8cbb\u7387\u3002\u5982\u8981\u67e5\u8a62symbol\u7684\u8cc7\u91d1\u8cbb\u7387\u6642\u9593\u9593\u9694\uff0c\u8acb\u67e5\u8a62",(0,a.kt)("a",{parentName:"p",href:"instrument#"},"\u53ef\u4ea4\u6613\u7522\u54c1\u898f\u683c"),"\u63a5\u53e3"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u8986\u84cb\u7bc4\u570d: USDT\u6c38\u7e8c / \u53cd\u5411\u6c38\u7e8c"))),(0,a.kt)("admonition",{title:"\u6642\u9593\u5165\u53c2\u898f\u5247",type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u53ea\u50b3",(0,a.kt)("inlineCode",{parentName:"li"},"startTime"),"\u6703\u5831\u932f"),(0,a.kt)("li",{parentName:"ul"},"\u53ea\u50b3",(0,a.kt)("inlineCode",{parentName:"li"},"endTime"),"\uff0c\u5247\u8fd4\u56deendTime\u5f80\u524d\u7684200\u689d\u6578\u64da"),(0,a.kt)("li",{parentName:"ul"},"\u90fd\u4e0d\u50b3\uff0c\u8fd4\u56de\u7576\u524d\u6642\u9593\u7684\u5f80\u524d200\u689d\u6578\u64da"))),(0,a.kt)("h3",{id:"http\u8acb\u6c42"},"HTTP\u8acb\u6c42"),(0,a.kt)("p",null,"GET ",(0,a.kt)("inlineCode",{parentName:"p"},"/cloud/trade/v3/market/funding/history")),(0,a.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"../enum#category"},"category")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7522\u54c1\u985e\u578b. ",(0,a.kt)("inlineCode",{parentName:"td"},"linear"),",",(0,a.kt)("inlineCode",{parentName:"td"},"inverse"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"symbol"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u7a31")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"startTime"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u958b\u59cb\u6642\u9593\u6233 (\u6beb\u79d2)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"endTime"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7d50\u675f\u6642\u9593\u6233 (\u6beb\u79d2)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"limit"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6bcf\u9801\u6578\u91cf\u9650\u5236. ","[",(0,a.kt)("inlineCode",{parentName:"td"},"1"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"200"),"]",". \u9ed8\u8a8d: ",(0,a.kt)("inlineCode",{parentName:"td"},"200"))))),(0,a.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"category"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7522\u54c1\u985e\u578b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"list"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"Object")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> symbol"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u7a31")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> fundingRate"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8cc7\u91d1\u8cbb\u7387")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> fundingRateTimestamp"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8cc7\u91d1\u8cbb\u7387\u6642\u9593\u6233 (\u6beb\u79d2)")))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"GET /cloud/trade/v3/market/funding/history?category=linear&symbol=ETHUSDT&limit=1 HTTP/1.1\nHost: openapi-testnet.zoomex.com\n")),(0,a.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n        "category": "linear",\n        "list": [\n            {\n                "symbol": "ETHUSDT",\n                "fundingRate": "0.0001",\n                "fundingRateTimestamp": "1672041600000"\n            }\n        ]\n    },\n    "retExtInfo": {},\n    "time": 1672051897447\n}\n')))}u.isMDXComponent=!0}}]);