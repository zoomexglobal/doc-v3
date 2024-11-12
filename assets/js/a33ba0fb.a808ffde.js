"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1985],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),o=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=o(r),c=a,f=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return r?n.createElement(f,l(l({ref:t},d),{},{components:r})):n.createElement(f,l({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:a,l[1]=p;for(var o=2;o<i;o++)l[o]=r[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7115:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var n=r(7462),a=(r(7294),r(3905));const i={title:"Get direct user detail",sidebar_label:"Get direct user detail",sidebar_position:6},l=void 0,p={unversionedId:"v3/broker/query-direct-user-detail",id:"v3/broker/query-direct-user-detail",title:"Get direct user detail",description:"API rate limit: 5 req / sec",source:"@site/docs/v3/broker/query-direct-user-detail.mdx",sourceDirName:"v3/broker",slug:"/v3/broker/query-direct-user-detail",permalink:"/docs/v3/broker/query-direct-user-detail",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Get direct user detail",sidebar_label:"Get direct user detail",sidebar_position:6},sidebar:"v3SideBar",previous:{title:"Get all direct customers information",permalink:"/docs/v3/broker/query-direct-user-list"},next:{title:"Connect",permalink:"/docs/v3/ws/connect"}},s={},o=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],d={toc:o},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"API rate limit: 5 req / sec")),(0,a.kt)("h3",{id:"http-request"},"HTTP Request"),(0,a.kt)("p",null,"GET ",(0,a.kt)("inlineCode",{parentName:"p"},"/private/v1/broker/query-direct-user-detail")),(0,a.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"uid"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"UID of the invitee, Return all when not inputting UID, return specified UID data when inputting.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"begin"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Start time of invitation\uff0cformat as\uff1aYYYY-MM-DD HH:MI:SS Note: The start and end times are either empty or not empty.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"end"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"End time of invitation\uff0cformat as\uff1aYYYY-MM-DD HH:MI:SS The start and end times are either empty or not empty.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"coin"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Coin to be queried. Default: USDT")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"limit"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Page quantity limit ","[1, 1000]"," Default: 200")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cursor"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Cursor, used for flipping pages, does not need to be passed on the first call")))),(0,a.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"user_id"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"UID of the invitee")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"created_at"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Join time")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"rebate_rate"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Rebate ratio")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"coin"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Deposit coin")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"deposits"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Accumulated amount of deposit in USDT")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"trading_amount"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Total trading Volume")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"net_exec_fee"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Accumulated Amount of trading fee in USDT, If there is no any fee, 0 will be returned")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"invited_code"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Affiliate invite code that the invitee registered/recalled via")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"vip_level"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Invitee VIP level, e.g. Vip1. If there is no any VIP level, VIP0 will be returned")))),(0,a.kt)("h3",{id:"request-example"},"Request Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import time\nimport hmac\nimport hashlib\nimport requests\nimport urllib.parse\n\ndef create_request(apiKey, secret, params):\n    url = 'https://openapi-testnet.zoomex.com/private/v1/broker/query-direct-user-detail'\n    timestamp = int(time.time() * 1000)\n    recv_window = 1000000\n\n    params['api_key'] = apiKey\n    params['timestamp'] = timestamp\n    params['recv_window'] = recv_window\n\n    ordered_params = '&'.join([f\"{key}={params[key]}\" for key in sorted(params.keys())])\n\n    signature = hmac.new(secret.encode('utf-8'), ordered_params.encode('utf-8'), hashlib.sha256).hexdigest()\n\n    params['sign'] = signature\n\n    headers = {\n        'X-BAPI-API-KEY': apiKey,\n        'X-BAPI-SIGN': signature,\n        'X-BAPI-TIMESTAMP': str(timestamp),\n        'X-BAPI-RECV-WINDOW': str(recv_window)\n    }\n\n    query_string = urllib.parse.urlencode(params)\n    full_url = f\"{url}?{query_string}\"\n\n    response = requests.get(full_url, headers=headers)\n\n    print(\"response status:\", response.status_code)\n    print(\"response info:\", response.json())\n    print(\"response time:\", response.elapsed.total_seconds())\n\napiKey = 'your key'\nsecret = 'your secret'\nparams = {\n    \"uid\": 103920528,\n}\n\ncreate_request(apiKey, secret, params)\n")),(0,a.kt)("h3",{id:"response-example"},"Response Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "ret_code": 0,\n    "ret_msg": "OK",\n    "ext_code": "",\n    "result": {\n        "user_detail": [\n            {\n                "user_id": "103920528",\n                "created_at": "2024-11-08 12:39:44",\n                "deposits": "0",\n                "net_exec_fee": "0",\n                "rebate_rate": "25",\n                "vip_level": "VIP0",\n                "invited_code": "ZX900303",\n                "trading_amount": "0",\n                "coin": "USDT"\n            }\n        ],\n        "next_cursor": 1588\n    },\n    "ext_info": null,\n    "time_now": 1731113120877\n}\n')))}u.isMDXComponent=!0}}]);