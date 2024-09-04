"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7808],{5680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>y});var a=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),o=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=o(e.components);return a.createElement(i.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),g=o(r),d=n,y=g["".concat(i,".").concat(d)]||g[d]||m[d]||l;return r?a.createElement(y,s(s({ref:t},u),{},{components:r})):a.createElement(y,s({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,s=new Array(l);s[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[g]="string"==typeof e?e:n,s[1]=p;for(var o=2;o<l;o++)s[o]=r[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},258:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var a=r(8168),n=(r(6540),r(5680));const l={title:"Create Subaccount Transfer",sidebar_label:"Create Subaccount Transfer",sidebar_position:2},s=void 0,p={unversionedId:"v3/asset/sub-member-transfer",id:"v3/asset/sub-member-transfer",title:"Create Subaccount Transfer",description:"Transfers funds between the parent and child (sub) accounts.",source:"@site/docs/v3/asset/sub-member-transfer.mdx",sourceDirName:"v3/asset",slug:"/v3/asset/sub-member-transfer",permalink:"/docs/v3/asset/sub-member-transfer",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Create Subaccount Transfer",sidebar_label:"Create Subaccount Transfer",sidebar_position:2},sidebar:"v3SideBar",previous:{title:"Error Code",permalink:"/docs/copy-trade/error"},next:{title:"Get Internal Transfer Records",permalink:"/docs/v3/asset/transfer-list"}},i={},o=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],u={toc:o},g="wrapper";function m(e){let{components:t,...r}=e;return(0,n.yg)(g,(0,a.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Transfers funds between the parent and child (sub) accounts."),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},"The transfer is processed asynchronously, and the transfer result is obtained through the request ",(0,n.yg)("a",{parentName:"li",href:"../asset/transfer-list"},"Transfer Records")," interface."),(0,n.yg)("li",{parentName:"ul"},"This interface can only be used for transfer between parent and child accounts."),(0,n.yg)("li",{parentName:"ul"},"A subaccount can only be attributed to a parent account."))),(0,n.yg)("h3",{id:"http-request"},"HTTP Request"),(0,n.yg)("p",null,"POST ",(0,n.yg)("inlineCode",{parentName:"p"},"/private/v1/asset/sub-member/transfer")),(0,n.yg)("h3",{id:"request-parameters"},"Request Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Required"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Comments"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"request_id"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("strong",{parentName:"td"},"true")),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Transfer request UUID, globally unique, used for idempotent verification")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"coin"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("strong",{parentName:"td"},"true")),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Currency type")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"amount"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("strong",{parentName:"td"},"true")),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Exchange to amount")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"sub_user_id"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("strong",{parentName:"td"},"true")),(0,n.yg)("td",{parentName:"tr",align:"left"},"int32"),(0,n.yg)("td",{parentName:"tr",align:null},"Subaccount")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"../asset/enum#transfertype-type"},"type")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("strong",{parentName:"td"},"true")),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Determines the direction of transfer")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"../asset/enum#accounttype-account_type"},"account_type")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("strong",{parentName:"td"},"true")),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Transfer account type")))),(0,n.yg)("h3",{id:"response-parameters"},"Response Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Comments"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"transfer_id"),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Transfer result ID")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"request_id"),(0,n.yg)("td",{parentName:"tr",align:"left"},"string"),(0,n.yg)("td",{parentName:"tr",align:null},"Transfer request ID")))),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"request-example"},"Request Example"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},'POST /private/v1/asset/sub-member/transfer HTTP/1.1\nX-BAPI-API-KEY: 0b2XYJpi8bi9tZPhft\nX-BAPI-SIGN: ac6aae0cab89873a3635874af169a9224674a5e06f7e411cbbbb9d2f6905eae3\nX-BAPI-TIMESTAMP: 1724600349557\nX-BAPI-RECV-WINDOW: 1000000\nHost: openapi-testnet.zoomex.com\nContent-Type: application/json\n\n{\n    "request_id": "6481da3c-5eff-45d9-90e8-72b3da105533",\n    "sub_user_id": 103741450,\n    "coin": "USDT",\n    "amount": "10",\n    "type": "IN",\n    "account_type": "SPOT"\n}\n')),(0,n.yg)("h3",{id:"response-example"},"Response Example"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "ret_code": 0,\n    "ret_msg": "OK",\n    "result": {\n        "transfer_id": "d5c3f1e3-097c-4532-9f4d-3b2990bdcd85",\n        "request_id": "6481da3c-5eff-45d9-90e8-72b3da105533"\n    }\n}\n')))}m.isMDXComponent=!0}}]);