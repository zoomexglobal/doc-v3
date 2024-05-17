"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3312],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(n),c=a,k=d["".concat(l,".").concat(c)]||d[c]||u[c]||o;return n?r.createElement(k,i(i({ref:t},m),{},{components:n})):r.createElement(k,i({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9134:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"Introduction",sidebar_name:"Introduction"},i=void 0,s={unversionedId:"v3/intro",id:"v3/intro",title:"Introduction",description:"Zoomex V3 Open API allow users to select different collections to build their API model.",source:"@site/docs/v3/intro.mdx",sourceDirName:"v3",slug:"/v3/intro",permalink:"/docs/v3/intro",draft:!1,tags:[],version:"current",frontMatter:{title:"Introduction",sidebar_name:"Introduction"},sidebar:"v3SideBar",next:{title:"Copy Trade",permalink:"/docs/category/copy-trade"}},l={},p=[{value:"Authentication",id:"authentication",level:2},{value:"Parameters for Authenticated Endpoints",id:"parameters-for-authenticated-endpoints",level:3},{value:"Create A Request",id:"create-a-request",level:3},{value:"Common response parameters",id:"common-response-parameters",level:2}],m={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Zoomex V3 Open API allow users to select different collections to build their API model."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Copy Trade:")," You must be ",(0,a.kt)("strong",{parentName:"li"},"Master Trader")," to use this API.")),(0,a.kt)("h2",{id:"authentication"},"Authentication"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Please visit Zoomex's ",(0,a.kt)("a",{href:"https://testnet.zoomex.com/en-US/user-center/api-manage"}," ",(0,a.kt)("b",null,"testnet"))," or ",(0,a.kt)("a",{href:"https://www.zoomex.com/en-US/user-center/api-manage"}," ",(0,a.kt)("b",null,"mainnet"))," to generate an API key")),(0,a.kt)("p",null,"REST API Base Endpoint:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Testnet:"),(0,a.kt)("br",null),(0,a.kt)("a",{parentName:"li",href:"https://openapi-testnet.zoomex.com"},"https://openapi-testnet.zoomex.com")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Mainnet"),":",(0,a.kt)("br",null),(0,a.kt)("a",{parentName:"li",href:"https://openapi.zoomex.com"},"https://openapi.zoomex.com"))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"All requests made to ",(0,a.kt)("strong",{parentName:"li"},"private")," endpoints MUST be authenticated."),(0,a.kt)("li",{parentName:"ul"},"Requests made to ",(0,a.kt)("strong",{parentName:"li"},"public")," endpoints DO NOT require additional authentication."))),(0,a.kt)("h3",{id:"parameters-for-authenticated-endpoints"},"Parameters for Authenticated Endpoints"),(0,a.kt)("p",null,"The following parameters must be used for authentication:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"api_key")," - api key"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"timestamp")," - UTC timestamp in milliseconds"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sign")," - a signature derived from the request's parameters",(0,a.kt)("br",null))),(0,a.kt)("p",null,"We also provide ",(0,a.kt)("inlineCode",{parentName:"p"},"recv_window")," (unit in millisecond and default value is 5,000) to specify how long an HTTP request is valid. It is also used to prevent replay attacks."),(0,a.kt)("p",null,"A smaller ",(0,a.kt)("inlineCode",{parentName:"p"},"recv_window")," is more secure, but your request may fail if the transmission time is greater than your ",(0,a.kt)("inlineCode",{parentName:"p"},"recv_window"),"."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Please make sure that the timestamp parameter adheres to the ",(0,a.kt)("strong",{parentName:"p"},"following rule"),":",(0,a.kt)("br",null),"\n",(0,a.kt)("em",{parentName:"p"},"server_time - recv_window <= timestamp < server_time + 1000"),(0,a.kt)("br",null),"\nserver_time stands for Zoomex server time, which can be queried via the ",(0,a.kt)("a",{parentName:"p",href:"../v3/market/time#"},"Server Time endpoint"),".")),(0,a.kt)("h3",{id:"create-a-request"},"Create A Request"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"To assist in diagnosing advanced network problems, you may consider adding ",(0,a.kt)("inlineCode",{parentName:"p"},"cdn-request-id")," to your request headers. Its value should be unique for each request.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Basic steps:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"timestamp + API key + (recv_window) + (queryString | jsonBodyString)")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use the HMAC_SHA256 or RSA_SHA256 algorithm to sign the string in step 1, and convert it to a hex string (HMAC_SHA256) / base64 (RSA_SHA256) to obtain the sign parameter.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Append the sign parameter to request header, and send the HTTP request. Note: the plain text for GET and POST requests is different. Please refer to blew examples.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Demo"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import requests\nimport time\nimport hashlib\nimport hmac\nimport uuid\n\napi_key=\'XXXXXXXX\'\nsecret_key=\'XXXXXXXX\'\nhttpClient=requests.Session()\nrecv_window=str(5000)\nurl="https://openapi-testnet.zoomex.com"\n\ndef HTTP_Request(endPoint,method,payload,Info):\n   global time_stamp\n   time_stamp=str(int(time.time() * 10 ** 3))\n   signature=genSignature(payload)\n   headers = {\n       \'X-BAPI-API-KEY\': api_key,\n       \'X-BAPI-SIGN\': signature,\n       \'X-BAPI-SIGN-TYPE\': \'2\',\n       \'X-BAPI-TIMESTAMP\': time_stamp,\n       \'X-BAPI-RECV-WINDOW\': recv_window,\n       \'Content-Type\': \'application/json\'\n   }\n   if(method=="POST"):\n       response = httpClient.request(method, url+endPoint, headers=headers, data=payload)\n   else:\n       response = httpClient.request(method, url+endPoint+"?"+payload, headers=headers)\n   print(response.text)\n   print(Info + " Elapsed Time : " + str(response.elapsed))\ndef genSignature(payload):\n   param_str= time_stamp+ api_key + recv_window + payload\n   hash = hmac.new(bytes(secret_key, "utf-8"), param_str.encode("utf-8"),hashlib.sha256)\n   signature = hash.hexdigest()\n   return signature\n\n#POST Create Order\nendpoint="/cloud/trade/v3/order/create"\nmethod="POST"\norderLinkId=uuid.uuid4().hex\nparams=\'{"category":"linear","symbol": "BTCUSDT","side": "Buy","positionIdx": 0,"orderType": "Market","qty": "0.001","price": "","timeInForce": "GTC","orderLinkId": "\' + orderLinkId + \'"}\'\nHTTP_Request(endpoint,method,params,"Create")\n\n#GET history Orders\nendpoint="/cloud/trade/v3/order/history"\nmethod="GET"\nparams=\'category=linear&symbol=BTCUSDT\'\nHTTP_Request(endpoint,method,params,"history")\n')))),(0,a.kt)("h2",{id:"common-response-parameters"},"Common response parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"retCode"),(0,a.kt)("td",{parentName:"tr",align:"left"},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"Success/Error code")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"retMsg"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Success/Error msg. Can be ",(0,a.kt)("inlineCode",{parentName:"td"},"OK"),",",(0,a.kt)("inlineCode",{parentName:"td"},"success"),",",(0,a.kt)("inlineCode",{parentName:"td"},"Success")," for Success message")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"result"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,a.kt)("td",{parentName:"tr",align:null},"Business data result")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"retExtInfo"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,a.kt)("td",{parentName:"tr",align:null},"Extend info. Most of time, it is ",(0,a.kt)("inlineCode",{parentName:"td"},"{}"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"time"),(0,a.kt)("td",{parentName:"tr",align:"left"},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"Current timestamp (ms)")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "success",\n    "result": {},\n    "retExtInfo": {},\n    "time": 1690180896378\n}\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Due to historical reasons, the attributes returned in the list object of the result object in the response body of the ","[Get Open Orders(real-time)]"," (./order/open order/#) start with uppercase letters. Please be careful when docking!"))))}u.isMDXComponent=!0}}]);