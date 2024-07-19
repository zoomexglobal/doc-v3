"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4281],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:e},c),{},{components:n})):r.createElement(f,i({ref:e},c))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[d]="string"==typeof t?t:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},198:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"\u5283\u8f49 (\u55ae\u5e33\u865f\u5167)",sidebar_label:"\u5283\u8f49 (\u55ae\u5e33\u865f\u5167)",sidebar_position:16},i=void 0,l={unversionedId:"v3/account/create-inter-transfer",id:"v3/account/create-inter-transfer",title:"\u5283\u8f49 (\u55ae\u5e33\u865f\u5167)",description:"\u5275\u5efa\u55ae\u5e33\u865f\u4e0b\u5e33\u6236\u985e\u578b\u9593\u7684\u5283\u8f49\u64cd\u4f5c",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/account/create-inter-transfer.mdx",sourceDirName:"v3/account",slug:"/v3/account/create-inter-transfer",permalink:"/docs/zh-TW/v3/account/create-inter-transfer",draft:!1,tags:[],version:"current",sidebarPosition:16,frontMatter:{title:"\u5283\u8f49 (\u55ae\u5e33\u865f\u5167)",sidebar_label:"\u5283\u8f49 (\u55ae\u5e33\u865f\u5167)",sidebar_position:16},sidebar:"v3SideBar",previous:{title:"\u5e33\u6236\u985e\u578b\u9593\u53ef\u5283\u8f49\u7684\u5e63\u7a2e",permalink:"/docs/zh-TW/v3/account/transferable-coin"},next:{title:"\u67e5\u8a62\u4ee3\u7406\u5546\u8fd4\u4f63\u4fe1\u606f",permalink:"/docs/zh-TW/v3/broker/exchange-earning"}},p={},s=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],c={toc:s},d="wrapper";function u(t){let{components:e,...n}=t;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5275\u5efa\u55ae\u5e33\u865f\u4e0b",(0,a.kt)("a",{parentName:"p",href:"../enum#accounttype"},"\u5e33\u6236\u985e\u578b"),"\u9593\u7684\u5283\u8f49\u64cd\u4f5c"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u6bcf\u500b\u5e33\u6236\u985e\u578b\u6709\u5176\u53ef\u63a5\u53d7\u7684\u5e63\u7a2e\u9650\u5236, \u6bd4\u5982, \u4f60\u7121\u6cd5\u5c07USDC\u5f9e",(0,a.kt)("inlineCode",{parentName:"li"},"SPOT"),"\u5283\u8f49\u81f3",(0,a.kt)("inlineCode",{parentName:"li"},"CONTRACT"),"\u3002\u8a73\u60c5\u8acb\u53c3\u8003",(0,a.kt)("a",{parentName:"li",href:"transferable-coin#"},"\u53ef\u5283\u8f49\u5e63\u7a2e"),"\u63a5\u53e3."),(0,a.kt)("li",{parentName:"ul"},"\u8cc7\u91d1\u8cec\u6236\u8f49\u51fa\u76ee\u524d\u50c5\u652f\u6301\u52a0\u5bc6\u8ca8\u5e63\uff0c\u4e0d\u652f\u6301\u6cd5\u5b9a\u8ca8\u5e63."))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"API\u983b\u7387: 1\u6b21/\u79d2")),(0,a.kt)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,a.kt)("p",null,"POST ",(0,a.kt)("inlineCode",{parentName:"p"},"/private/v1/asset/transfer/single-account-transfer")),(0,a.kt)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"transferId"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"UUID. \u8acb\u81ea\u884c\u624b\u52d5\u751f\u6210UUID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"coin"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5e63\u7a2e")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"amount"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5283\u5165\u6578\u91cf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"../enum#accounttype"},"fromAccountType")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8f49\u51fa\u8cec\u6236\u985e\u578b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"../enum#accounttype"},"toAccountType")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8f49\u5165\u8cec\u6236\u985e\u578b")))),(0,a.kt)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"transferId"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"UUID")))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import time\nimport hmac\nimport hashlib\nimport uuid\nimport requests\nimport json\n\ndef create_transfer_request(apiKey, secret, body):\n    url = 'https://openapi-testnet.zoomex.com/private/v1/asset/transfer/single-account-transfer'\n    timestamp = int(time.time() * 1000)\n    recv_window = 1000000\n\n    body['api_key'] = apiKey\n    body['timestamp'] = timestamp\n    body['recv_window'] = recv_window\n\n    ordered_params = '&'.join([f\"{key}={body[key]}\" for key in sorted(body.keys())])\n\n    signature = hmac.new(secret.encode('utf-8'), ordered_params.encode('utf-8'), hashlib.sha256).hexdigest()\n\n    body['sign'] = signature\n\n    headers = {\n        'X-BAPI-API-KEY': apiKey,\n        'X-BAPI-SIGN': signature,\n        'X-BAPI-TIMESTAMP': str(timestamp),\n        'X-BAPI-RECV-WINDOW': str(recv_window),\n        'Content-Type': 'application/json'\n    }\n\n    response = requests.post(url, headers=headers, data=json.dumps(body))\n\n    print(\"\u54cd\u5e94\u72b6\u6001:\", response.status_code)\n    print(\"\u54cd\u5e94\u4fe1\u606f:\", response.json())\n    print(\"\u54cd\u5e94\u65f6\u95f4:\", response.elapsed.total_seconds())\n\napiKey = 'your key'\nsecret = 'your secret'\ntransferId = uuid.uuid4().hex\nbody = {\n    \"requestId\":transferId,\n    \"coin\":\"USDT\",\n    \"amount\":\"1\",\n    \"fromAccountType\":\"CONTRACT\",\n    \"toAccountType\":\"SPOT\",\n}\n\ncreate_transfer_request(apiKey, secret, body)\n\n")),(0,a.kt)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n"ret_code": 0,\n"ret_msg": "OK",\n"ext_code": "",\n"result": {\n"transfer_id": "87c18caa-539a-449e-99cc-c39e4329bcc5"\n},\n"ext_info": null,\n"time_now": 1721037889588\n}\n')))}u.isMDXComponent=!0}}]);