"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2932],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),o=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=o(r),c=n,f=u["".concat(p,".").concat(c)]||u[c]||d[c]||s;return r?a.createElement(f,l(l({ref:t},m),{},{components:r})):a.createElement(f,l({ref:t},m))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,l=new Array(s);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var o=2;o<s;o++)l[o]=r[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},1565:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>o});var a=r(7462),n=(r(7294),r(3905));const s={title:"Create Subaccount Transfer",sidebar_label:"Create Subaccount Transfer",sidebar_position:2},l=void 0,i={unversionedId:"v3/asset/sub-member-transfer",id:"v3/asset/sub-member-transfer",title:"Create Subaccount Transfer",description:"Transfers funds between the parent and child (sub) accounts.",source:"@site/docs/v3/asset/sub-member-transfer.mdx",sourceDirName:"v3/asset",slug:"/v3/asset/sub-member-transfer",permalink:"/docs/v3/asset/sub-member-transfer",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Create Subaccount Transfer",sidebar_label:"Create Subaccount Transfer",sidebar_position:2},sidebar:"v3SideBar",previous:{title:"Error Code",permalink:"/docs/copy-trade/error"},next:{title:"Get Internal Transfer Records",permalink:"/docs/v3/asset/transfer-list"}},p={},o=[{value:"HTTP Request",id:"http-request",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Example",id:"response-example",level:3}],m={toc:o},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Transfers funds between the parent and child (sub) accounts."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"A subaccount can only be attributed to a parent account.")),(0,n.kt)("h3",{id:"http-request"},"HTTP Request"),(0,n.kt)("p",null,"POST ",(0,n.kt)("inlineCode",{parentName:"p"},"/private/v1/asset/sub-member/transfer")),(0,n.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"transfer_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.uuidgenerator.net/dev-corner"},"UUID"),". which is unique across the platform")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"coin"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Currency type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"amount"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Exchange to amount")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"sub_user_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"int32"),(0,n.kt)("td",{parentName:"tr",align:null},"Subaccount")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"../asset/enum#transfertype-type"},"type")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Determines the direction of transfer")))),(0,n.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"transfer_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"UUID, which is unique across the platform")))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"request-example"},"Request Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'    def your_method(apiKey, secretKey):\n        timestamp = int(time.time() * 10 ** 3)\n        url = \'https://openapi-testnet.zoomex.com/private/v1/asset/sub-member/transfer\'\n        method = "POST"\n        params = {\n            "api_key": apiKey,\n            "timestamp": str(timestamp),\n            "recv_window": "5000",\n            "amount": "20",\n            "sub_user_id": "1524613",\n            "transfer_id": "d1fc12d2-c0c1-4954-8ca0-09d3343a246a",\n            "type": "IN",\n            "timestamp": "1690945245201",\n            "coin": "USDT"\n        }\n        param_str = \'\'\n        for key in sorted(params.keys()):\n            v = params[key]\n            if isinstance(params[key], bool):\n                if params[key]:\n                    v = \'true\'\n                else:\n                    v = \'false\'\n            param_str += key + \'=\' + v + \'&\'\n        param_str = param_str[:-1]\n        hash = hmac.new(secretKey, param_str.encode("utf-8"), hashlib.sha256)\n        signature = hash.hexdigest()\n        sign_real = {\n            "sign": signature\n        }\n        param_str = quote_plus(param_str, safe="=&")\n        full_param_str = f"{param_str}&sign={sign_real[\'sign\']}"\n        urllib3.disable_warnings()\n        s = requests.session()\n        s.keep_alive = False\n        response = requests.request(method, f"{url}?{full_param_str}", verify=False)\n\n    def main():\n        apiKey = "Your key"\n        secret = b"Your secret"\n        your_method(apiKey, secret)\n\n')),(0,n.kt)("h3",{id:"response-example"},"Response Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ret_code": 0,\n  "ret_msg": "OK",\n  "ext_code": "",\n  "result": {\n    "transfer_id": "d1fc12d2-c0c1-4954-8ca0-09d3343a246a"\n  },\n  "ext_info": null,\n  "time_now": 1690945245984,\n  "rate_limit_status": 19,\n  "rate_limit_reset_ms": 1690945245984,\n  "rate_limit": 1\n}\n')))}d.isMDXComponent=!0}}]);