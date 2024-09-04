"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4546],{5680:(e,t,r)=>{r.d(t,{xA:()=>o,yg:()=>c});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},o=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,o=g(e,["components","mdxType","originalType","parentName"]),y=d(r),s=a,c=y["".concat(p,".").concat(s)]||y[s]||m[s]||l;return r?n.createElement(c,i(i({ref:t},o),{},{components:r})):n.createElement(c,i({ref:t},o))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=s;var g={};for(var p in t)hasOwnProperty.call(t,p)&&(g[p]=t[p]);g.originalType=e,g[y]="string"==typeof e?e:a,i[1]=g;for(var d=2;d<l;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},3068:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>g,toc:()=>d});var n=r(8168),a=(r(6540),r(5680));const l={title:"Order",sidebar_label:"Order",sidebar_position:3},i=void 0,g={unversionedId:"v3/websocket/private/order",id:"v3/websocket/private/order",title:"Order",description:"Subscribe to the order stream to see changes to your orders in real-time.",source:"@site/docs/v3/websocket/private/order.mdx",sourceDirName:"v3/websocket/private",slug:"/v3/websocket/private/order",permalink:"/docs/v3/websocket/private/order",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Order",sidebar_label:"Order",sidebar_position:3},sidebar:"v3SideBar",previous:{title:"Execution",permalink:"/docs/v3/websocket/private/execution"},next:{title:"Wallet",permalink:"/docs/v3/websocket/private/wallet"}},p={},d=[{value:"Response Parameters",id:"response-parameters",level:3},{value:"Subscribe Example",id:"subscribe-example",level:3},{value:"Stream Example",id:"stream-example",level:3}],o={toc:d},y="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(y,(0,n.A)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Subscribe to the order stream to see changes to your orders in ",(0,a.yg)("strong",{parentName:"p"},"real-time"),"."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"All-In-One Topic:")," ",(0,a.yg)("inlineCode",{parentName:"p"},"order"),(0,a.yg)("br",null),"\n",(0,a.yg)("strong",{parentName:"p"},"Categorised Topic:")," ",(0,a.yg)("inlineCode",{parentName:"p"},"order.spot"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"order.linear"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"order.inverse")),(0,a.yg)("h3",{id:"response-parameters"},"Response Parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Comments"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"id"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Message ID")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"topic"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Topic name")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"creationTime"),(0,a.yg)("td",{parentName:"tr",align:"left"},"number"),(0,a.yg)("td",{parentName:"tr",align:null},"Data created timestamp (ms)")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"data"),(0,a.yg)("td",{parentName:"tr",align:"left"},"array"),(0,a.yg)("td",{parentName:"tr",align:null},"Object")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> category"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Product type ",(0,a.yg)("ul",null,(0,a.yg)("li",null,"Normal account: ",(0,a.yg)("inlineCode",{parentName:"td"},"spot"),", ",(0,a.yg)("inlineCode",{parentName:"td"},"linear"),", ",(0,a.yg)("inlineCode",{parentName:"td"},"inverse"),".")))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> orderId"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Order ID")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> orderLinkId"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"User customised order ID")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> symbol"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Symbol name")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> price"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Order price")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> qty"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Order qty")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> side"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Side. ",(0,a.yg)("inlineCode",{parentName:"td"},"Buy"),",",(0,a.yg)("inlineCode",{parentName:"td"},"Sell"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> ",(0,a.yg)("a",{parentName:"td",href:"../../enum#positionidx"},"positionIdx")),(0,a.yg)("td",{parentName:"tr",align:"left"},"integer"),(0,a.yg)("td",{parentName:"tr",align:null},"Position index. Used to identify positions in different position modes")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> ",(0,a.yg)("a",{parentName:"td",href:"../../enum#orderstatus"},"orderStatus")),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Order status")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> ",(0,a.yg)("a",{parentName:"td",href:"../../enum#canceltype"},"cancelType")),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Cancel type")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> ",(0,a.yg)("a",{parentName:"td",href:"../../enum#rejectreason"},"rejectReason")),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Reject reason.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> avgPrice"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Average filled price. If unfilled, it is ",(0,a.yg)("inlineCode",{parentName:"td"},'""')," ",(0,a.yg)("ul",null,(0,a.yg)("li",null,'If a partially filled order, and the final orderStatus is Cancelled, then avgPrice is "0"')))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> leavesQty"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"The remaining qty not executed.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> leavesValue"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"The remaining value not executed.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> cumExecQty"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Cumulative executed order qty")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> cumExecValue"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Cumulative executed order value")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> cumExecFee"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Cumulative executed trading fee.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> ",(0,a.yg)("a",{parentName:"td",href:"../../enum#timeinforce"},"timeInForce")),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Time in force")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> orderType"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Order type. ",(0,a.yg)("inlineCode",{parentName:"td"},"Market"),",",(0,a.yg)("inlineCode",{parentName:"td"},"Limit"),". For TP/SL order, it means the order type after triggered")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> ",(0,a.yg)("a",{parentName:"td",href:"../../enum#stopordertype"},"stopOrderType")),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Stop order type")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> orderIv"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Implied volatility")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> triggerPrice"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Trigger price. If ",(0,a.yg)("inlineCode",{parentName:"td"},"stopOrderType"),"=",(0,a.yg)("em",{parentName:"td"},"TrailingStop"),", it is activate price. Otherwise, it is trigger price")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> takeProfit"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Take profit price")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> stopLoss"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Stop loss price")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> tpslMode"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"TP/SL mode, ",(0,a.yg)("inlineCode",{parentName:"td"},"Full"),": entire position for TP/SL. ",(0,a.yg)("inlineCode",{parentName:"td"},"Partial"),": partial position tp/sl.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> tpLimitPrice"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"The limit order price when take profit price is triggered")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> slLimitPrice"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"The limit order price when stop loss price is triggered")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> ",(0,a.yg)("a",{parentName:"td",href:"../../enum#triggerby"},"tpTriggerBy")),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"The price type to trigger take profit")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> ",(0,a.yg)("a",{parentName:"td",href:"../../enum#triggerby"},"slTriggerBy")),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"The price type to trigger stop loss")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> triggerDirection"),(0,a.yg)("td",{parentName:"tr",align:"left"},"integer"),(0,a.yg)("td",{parentName:"tr",align:null},"Trigger direction. ",(0,a.yg)("inlineCode",{parentName:"td"},"1"),": rise, ",(0,a.yg)("inlineCode",{parentName:"td"},"2"),": fall")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> ",(0,a.yg)("a",{parentName:"td",href:"../../enum#triggerby"},"triggerBy")),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"The price type of trigger price")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> lastPriceOnCreated"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Last price when place the order")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> reduceOnly"),(0,a.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,a.yg)("td",{parentName:"tr",align:null},"Reduce only. ",(0,a.yg)("inlineCode",{parentName:"td"},"true")," means reduce position size")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> closeOnTrigger"),(0,a.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,a.yg)("td",{parentName:"tr",align:null},"Close on trigger.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> placeType"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Place type")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> createdTime"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Order created timestamp (ms)")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"> updatedTime"),(0,a.yg)("td",{parentName:"tr",align:"left"},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"Order updated timestamp (ms)")))),(0,a.yg)("h3",{id:"subscribe-example"},"Subscribe Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "op": "subscribe",\n    "args": [\n        "order"\n    ]\n}\n')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'var url = require(\'url\');\nvar WebSocket = require(\'ws\');\nvar crypto = require(\'crypto\');\nvar endpoint = "wss://stream-testnet.zoomex.com/v3/private"\nconsole.log(\'attempting to connect to WebSocket %j\', endpoint);\nvar client = new WebSocket(endpoint);\nconst apiKey="XXXXXXXXX";\nconst apiSecret="XXXXXXXXX";\nclient.on(\'open\', function () {\n    console.log(\'"open" event!\');\n    console.log(\'WebSocket Client Connected\');\n    const expires = new Date().getTime() + 10000;\n    const signature = crypto.createHmac("sha256", apiSecret).update("GET/realtime" + expires).digest("hex");\n    const payload={\n        op: "auth",\n        args: [apiKey, expires.toFixed(0), signature],\n    }\n    client.send(JSON.stringify(payload));\n    setInterval(()=>{client.ping()}, 30000);\n    client.ping();\n    client.send(JSON.stringify({"op": "subscribe", "args": [\'order\']}));\n});\n\nclient.on(\'message\', function (data) {\n    console.log(\'"message" event! %j\', JSON.parse(Buffer.from(data).toString()));\n});\nclient.on(\'ping\', function (data, flags) {\n    console.log("ping received");\n});\nclient.on(\'pong\', function (data, flags) {\n    console.log("pong received");\n});\n')),(0,a.yg)("h3",{id:"stream-example"},"Stream Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "5923240c6880ab-c59f-420b-9adb-3639adc9dd90",\n    "topic": "order",\n    "creationTime": 1672364262474,\n    "data": [\n        {\n            "symbol": "ETHUSDT",\n            "orderId": "5cf98598-39a7-459e-97bf-76ca765ee020",\n            "side": "Sell",\n            "orderType": "Market",\n            "cancelType": "UNKNOWN",\n            "price": "72.5",\n            "qty": "1",\n            "orderIv": "",\n            "timeInForce": "IOC",\n            "orderStatus": "Filled",\n            "orderLinkId": "",\n            "lastPriceOnCreated": "",\n            "reduceOnly": false,\n            "leavesQty": "",\n            "leavesValue": "",\n            "cumExecQty": "1",\n            "cumExecValue": "75",\n            "avgPrice": "75",\n            "blockTradeId": "",\n            "positionIdx": 0,\n            "cumExecFee": "0.358635",\n            "createdTime": "1672364262444",\n            "updatedTime": "1672364262457",\n            "rejectReason": "EC_NoError",\n            "stopOrderType": "",\n            "tpslMode": "",\n            "triggerPrice": "",\n            "takeProfit": "",\n            "stopLoss": "",\n            "tpTriggerBy": "",\n            "slTriggerBy": "",\n            "tpLimitPrice": "",\n            "slLimitPrice": "",\n            "triggerDirection": 0,\n            "triggerBy": "",\n            "closeOnTrigger": false,\n            "category": "linear",\n            "placeType": "price"\n        }\n    ]\n}\n')))}m.isMDXComponent=!0}}]);