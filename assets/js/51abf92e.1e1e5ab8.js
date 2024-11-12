"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3443],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(r),c=a,k=m["".concat(o,".").concat(c)]||m[c]||u[c]||l;return r?n.createElement(k,i(i({ref:t},d),{},{components:r})):n.createElement(k,i({ref:t},d))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7399:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const l={title:"Get Exchange Broker Earning",sidebar_label:"Get Exchange Broker Earning",sidebar_position:2},i=void 0,p={unversionedId:"v3/broker/exchange-earning",id:"v3/broker/exchange-earning",title:"Get Exchange Broker Earning",description:"* Use exchange broker master account to query",source:"@site/docs/v3/broker/exchange-earning.mdx",sourceDirName:"v3/broker",slug:"/v3/broker/exchange-earning",permalink:"/docs/v3/broker/exchange-earning",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Get Exchange Broker Earning",sidebar_label:"Get Exchange Broker Earning",sidebar_position:2},sidebar:"v3SideBar",previous:{title:"Create Internal Transfer",permalink:"/docs/v3/account/create-inter-transfer"},next:{title:"Get direct customers Deposit Records",permalink:"/docs/v3/broker/sub-deposit-record"}},o={},s=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],d={toc:s},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Use exchange broker master account to query"),(0,a.kt)("li",{parentName:"ul"},"The data can support up to past 12 months until T-1"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"begin")," & ",(0,a.kt)("inlineCode",{parentName:"li"},"end")," are either entered at the same time or not entered, and latest 7 days data are returned by default"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"API rate limit: 10 req / sec")),(0,a.kt)("h3",{id:"http-request"},"HTTP Request"),(0,a.kt)("p",null,"GET ",(0,a.kt)("inlineCode",{parentName:"p"},"/private/v1/broker/earnings-info")),(0,a.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"productType"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Business type. ",(0,a.kt)("inlineCode",{parentName:"td"},"SPOT"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"DERIVATIVES"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"begin"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Start time, format: YYYYMMDD, for example, 20231201, indicating that the search time is from December 1, 2023 00:00:00 UTC (inclusive)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"end"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"End time, format: YYYYMMDD, for example, 20231201, indicating that the search time ended on December 2, 2023 at 00:00:00 UTC (not included)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"uid"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("ul",null,(0,a.kt)("li",null,"Enter sub UIDs to query specific data for the specified UID"),(0,a.kt)("li",null,"To obtain data for all sub UIDs, do not pass")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"limit"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Page quantity limit ","[",(0,a.kt)("inlineCode",{parentName:"td"},"1"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"1000"),"]"," Default: ",(0,a.kt)("inlineCode",{parentName:"td"}," 1000"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cursor"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Cursor, used for flipping pages, does not need to be passed on the first call")))),(0,a.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"coin_detail"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"Object. Rebate data for various businesses")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> product_type"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Business type. SPOT, DERIVATIVES")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> coin"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Rebate coin")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> rebate_fee"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Rebate amount")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"user_detail"),(0,a.kt)("td",{parentName:"tr",align:"left"},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"Object. Transaction details for each sub UID and each business type")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> user_id"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"UID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> product_type"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Business type. SPOT, DERIVATIVES")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> coin"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Rebate coin")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> rebate_fee"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Rebate amount")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"> dt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"date")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"next_cursor"),(0,a.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Cursor, used for flipping pages")))),(0,a.kt)("h3",{id:"request-example"},"Request Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import time\nimport hmac\nimport hashlib\nimport requests\nimport urllib.parse\n\ndef create_request(apiKey, secret, params):\n    url = 'https://openapi-testnet.zoomex.com/private/v1/broker/earnings-info'\n    timestamp = int(time.time() * 1000)\n    recv_window = 1000000\n\n    params['api_key'] = apiKey\n    params['timestamp'] = timestamp\n    params['recv_window'] = recv_window\n\n    ordered_params = '&'.join([f\"{key}={params[key]}\" for key in sorted(params.keys())])\n\n    signature = hmac.new(secret.encode('utf-8'), ordered_params.encode('utf-8'), hashlib.sha256).hexdigest()\n\n    params['sign'] = signature\n\n    headers = {\n        'X-BAPI-API-KEY': apiKey,\n        'X-BAPI-SIGN': signature,\n        'X-BAPI-TIMESTAMP': str(timestamp),\n        'X-BAPI-RECV-WINDOW': str(recv_window)\n    }\n\n    query_string = urllib.parse.urlencode(params)\n    full_url = f\"{url}?{query_string}\"\n\n    response = requests.get(full_url, headers=headers)\n\n    print(\"response status:\", response.status_code)\n    print(\"response info:\", response.json())\n    print(\"response time:\", response.elapsed.total_seconds())\n\napiKey = 'your key'\nsecret = 'your secret'\nparams = {\n    \"productType\": \"DERIVATIVES\",\n}\n\ncreate_request(apiKey, secret, params)\n")),(0,a.kt)("h3",{id:"response-example"},"Response Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "ret_code": 0,\n    "ret_msg": "OK",\n    "ext_code": "",\n    "result": {\n        "coin_detail": [\n            {\n                "product_type": "DERIVATIVES",\n                "coin": "USDT",\n                "rebate_fee": "0.845657"\n            }\n        ],\n        "user_detail": [\n            {\n                "user_id": "101479471",\n                "product_type": "DERIVATIVES",\n                "coin": "USDT",\n                "rebate_fee": "0.22783662",\n                "dt": "2024-06-12"\n            },\n            {\n                "user_id": "101479471",\n                "product_type": "DERIVATIVES",\n                "coin": "USDT",\n                "rebate_fee": "0.61782038",\n                "dt": "2024-06-11"\n            }\n        ],\n        "next_cursor": 688\n    },\n    "ext_info": null,\n    "time_now": 1718353045150\n}\n')))}u.isMDXComponent=!0}}]);