"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3453],{5680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>y});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),g=p(r),u=a,y=g["".concat(s,".").concat(u)]||g[u]||m[u]||i;return r?n.createElement(y,l(l({ref:t},d),{},{components:r})):n.createElement(y,l({ref:t},d))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[g]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},28:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(8168),a=(r(6540),r(5680));const i={title:"Withdraw",sidebar_label:"Withdraw",sidebar_position:5},l=void 0,o={unversionedId:"v3/account/withdraw",id:"v3/account/withdraw",title:"Withdraw",description:"* Make sure you have whitelisted your wallet address in address book",source:"@site/docs/v3/account/withdraw.mdx",sourceDirName:"v3/account",slug:"/v3/account/withdraw",permalink:"/docs/v3/account/withdraw",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Withdraw",sidebar_label:"Withdraw",sidebar_position:5},sidebar:"v3SideBar",previous:{title:"Get Coin Info",permalink:"/docs/v3/account/coin-info"},next:{title:"Withdraw internal",permalink:"/docs/v3/account/withdraw-internal"}},s={},p=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],d={toc:p},g="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(g,(0,n.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},"Make sure you have whitelisted your wallet address in address book"),(0,a.yg)("li",{parentName:"ul"},"Can query by the master UID's api key ",(0,a.yg)("strong",{parentName:"li"},"only")))),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"API rate limit: 1 req / sec")),(0,a.yg)("h3",{id:"http-request"},"HTTP Request"),(0,a.yg)("p",null,"POST ",(0,a.yg)("inlineCode",{parentName:"p"},"/private/v1/asset/withdraw/create")),(0,a.yg)("h3",{id:"request-parameters"},"Request Parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Required"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Comments"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"coin"),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("strong",{parentName:"td"},"true")),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"coin")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"chain"),(0,a.yg)("td",{parentName:"tr",align:"left"},"true"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"chain name")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"address"),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("strong",{parentName:"td"},"true")),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Wallet address")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"tag"),(0,a.yg)("td",{parentName:"tr",align:"left"},"false"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"tag ",(0,a.yg)("ul",null,(0,a.yg)("li",null,"If a tag is filled in when adding an address, then this field must be passed"),(0,a.yg)("li",null,(0,a.yg)("strong",{parentName:"td"},"Note"),": If the chain does not support tag/memo, please remove the tag/memo from the address book and do not pass the tag field when calling the interface")))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"amount"),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("strong",{parentName:"td"},"true")),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Withdrawal amount")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"requestId"),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("strong",{parentName:"td"},"true")),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Custom ID, globally unique, used for idempotent verification. ",(0,a.yg)("li",null,"The combination of letters (case sensitive) and numbers can be pure letters or pure numbers, with a length between 1-64 characters"))))),(0,a.yg)("h3",{id:"response-parameters"},"Response Parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Comments"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"withdraw_id"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Withdrawal ID")))),(0,a.yg)("h3",{id:"request-example"},"Request Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},"import time\nimport hmac\nimport hashlib\nimport uuid\nimport requests\nimport json\n\ndef create_transfer_request(apiKey, secret, body):\n    url = 'https://openapi-testnet.zoomex.com/private/v1/asset/withdraw/create'\n    timestamp = int(time.time() * 1000)\n    recv_window = 1000000\n\n    body['api_key'] = apiKey\n    body['timestamp'] = timestamp\n    body['recv_window'] = recv_window\n\n    ordered_params = '&'.join([f\"{key}={body[key]}\" for key in sorted(body.keys())])\n\n    signature = hmac.new(secret.encode('utf-8'), ordered_params.encode('utf-8'), hashlib.sha256).hexdigest()\n\n    body['sign'] = signature\n\n    headers = {\n        'X-BAPI-API-KEY': apiKey,\n        'X-BAPI-SIGN': signature,\n        'X-BAPI-TIMESTAMP': str(timestamp),\n        'X-BAPI-RECV-WINDOW': str(recv_window),\n        'Content-Type': 'application/json'\n    }\n\n    response = requests.post(url, headers=headers, data=json.dumps(body))\n\n    print(\"response status:\", response.status_code)\n    print(\"response info:\", response.json())\n    print(\"response time:\", response.elapsed.total_seconds())\n\napiKey = 'your key'\nsecret = 'your secret'\ntransferId = uuid.uuid4().hex\nbody = {\n    \"coin\":\"USDT\",\n    \"chain\": \"your chain\",\n    \"address\": \"your address\",\n    \"amount\":\"1\",\n    \"sub_user_id\":\"162119745\",\n    \"requestId\":transferId,\n}\n\ncreate_transfer_request(apiKey, secret, body)\n")),(0,a.yg)("h3",{id:"response-example"},"Response Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "success",\n    "result": {\n        "withdraw_id": "10195"\n    },\n    "retExtInfo": null,\n    "time": 1672196571239\n}\n')))}m.isMDXComponent=!0}}]);