"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1033],{5680:(e,t,r)=>{r.d(t,{xA:()=>m,yg:()=>g});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,g=u["".concat(p,".").concat(d)]||u[d]||c[d]||i;return r?n.createElement(g,o(o({ref:t},m),{},{components:r})):n.createElement(g,o({ref:t},m))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1280:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(8168),a=(r(6540),r(5680));const i={title:"\u67e5\u8a62\u4ee3\u7406\u5546\u76f4\u5ba2\u8a0a\u606f",sidebar_label:"\u67e5\u8a62\u4ee3\u7406\u5546\u76f4\u5ba2\u8a0a\u606f",sidebar_position:4},o=void 0,l={unversionedId:"v3/broker/member-info",id:"v3/broker/member-info",title:"\u67e5\u8a62\u4ee3\u7406\u5546\u76f4\u5ba2\u8a0a\u606f",description:"API\u983b\u7387: 300\u6b21/\u5206",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/broker/member-info.mdx",sourceDirName:"v3/broker",slug:"/v3/broker/member-info",permalink:"/docs/zh-TW/v3/broker/member-info",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\u67e5\u8a62\u4ee3\u7406\u5546\u76f4\u5ba2\u8a0a\u606f",sidebar_label:"\u67e5\u8a62\u4ee3\u7406\u5546\u76f4\u5ba2\u8a0a\u606f",sidebar_position:4},sidebar:"v3SideBar",previous:{title:"\u67e5\u8a62\u4ee3\u7406\u5546\u76f4\u5ba2\u7684\u5145\u503c\u7d00\u9304",permalink:"/docs/zh-TW/v3/broker/sub-deposit-record"},next:{title:"\u67e5\u8a62\u4ee3\u7406\u5546\u5168\u90e8\u76f4\u5ba2\u8a0a\u606f",permalink:"/docs/zh-TW/v3/broker/query-direct-user-list"}},p={},s=[{value:"HTTP \u8acb\u6c42",id:"http-\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],m={toc:s},u="wrapper";function c(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"API\u983b\u7387: 300\u6b21/\u5206")),(0,a.yg)("h3",{id:"http-\u8acb\u6c42"},"HTTP \u8acb\u6c42"),(0,a.yg)("p",null,"GET ",(0,a.yg)("inlineCode",{parentName:"p"},"/private/v1/broker/member-info")),(0,a.yg)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.yg)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,a.yg)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.yg)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"uid"),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("strong",{parentName:"td"},"true")),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"\u76f4\u5ba2UID")))),(0,a.yg)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,a.yg)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,a.yg)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"is_valid"),(0,a.yg)("td",{parentName:"tr",align:"left"},"integer"),(0,a.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u76f4\u5ba2\uff0c0\uff1a\u5426\uff1b1\uff1a\u662f")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"signup_time"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"\u6210\u70ba\u76f4\u5ba2\u6642\u9593")))),(0,a.yg)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},"import time\nimport hmac\nimport hashlib\nimport requests\nimport urllib.parse\n\ndef create_request(apiKey, secret, params):\n    url = 'https://openapi-testnet.zoomex.com/private/v1/broker/member-info'\n    timestamp = int(time.time() * 1000)\n    recv_window = 1000000\n\n    params['api_key'] = apiKey\n    params['timestamp'] = timestamp\n    params['recv_window'] = recv_window\n\n    ordered_params = '&'.join([f\"{key}={params[key]}\" for key in sorted(params.keys())])\n\n    signature = hmac.new(secret.encode('utf-8'), ordered_params.encode('utf-8'), hashlib.sha256).hexdigest()\n\n    params['sign'] = signature\n\n    headers = {\n        'X-BAPI-API-KEY': apiKey,\n        'X-BAPI-SIGN': signature,\n        'X-BAPI-TIMESTAMP': str(timestamp),\n        'X-BAPI-RECV-WINDOW': str(recv_window)\n    }\n\n    query_string = urllib.parse.urlencode(params)\n    full_url = f\"{url}?{query_string}\"\n\n    response = requests.get(full_url, headers=headers)\n\n    print(\"\u54cd\u5e94\u72b6\u6001:\", response.status_code)\n    print(\"\u54cd\u5e94\u4fe1\u606f:\", response.json())\n    print(\"\u54cd\u5e94\u65f6\u95f4:\", response.elapsed.total_seconds())\n\napiKey = 'your key'\nsecret = 'your secret'\nparams = {\n    \"uid\": 101479471,\n}\n\ncreate_request(apiKey, secret, params)\n")),(0,a.yg)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "ret_code": 0,\n    "ret_msg": "OK",\n    "ext_code": "",\n    "result": {\n        "is_valid": 1,\n        "signup_time": "2024-06-11 04:16:58 +0000 UTC"\n    },\n    "ext_info": null,\n    "time_now": 1719238958533\n}\n')))}c.isMDXComponent=!0}}]);