"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9607],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>k});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),p=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(r),s=n,k=u["".concat(d,".").concat(s)]||u[s]||c[s]||l;return r?a.createElement(k,o(o({ref:t},m),{},{components:r})):a.createElement(k,o({ref:t},m))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=s;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},715:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const l={title:"V3 API"},o=void 0,i={unversionedId:"changelog/v3",id:"changelog/v3",title:"V3 API",description:"2023-07-27",source:"@site/docs/changelog/v3.md",sourceDirName:"changelog",slug:"/changelog/v3",permalink:"/docs/changelog/v3",draft:!1,tags:[],version:"current",frontMatter:{title:"V3 API"},sidebar:"changelogSidebar"},d={},p=[{value:"2023-07-27",id:"2023-07-27",level:2},{value:"market",id:"market",level:3},{value:"Copy Trade",id:"copy-trade",level:3},{value:"2023-09-19",id:"2023-09-19",level:2},{value:"Common parameters",id:"common-parameters",level:3},{value:"2024-5-17",id:"2024-5-17",level:2},{value:"Order",id:"order",level:3},{value:"2024-5-24",id:"2024-5-24",level:2},{value:"Market",id:"market-1",level:3},{value:"order",id:"order-1",level:3}],m={toc:p},u="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"2023-07-27"},"2023-07-27"),(0,n.kt)("h3",{id:"market"},"market"),(0,n.kt)("p",null,"1\u3001REST API"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Modify ","[Get Orderbook]"," API limit change to 500")),(0,n.kt)("h3",{id:"copy-trade"},"Copy Trade"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"REST API",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Add ","[Instrument Info]"," API"),(0,n.kt)("li",{parentName:"ul"},"Add ","[Create Order]"," API"),(0,n.kt)("li",{parentName:"ul"},"Add ","[Set Trading Stop]"," API"),(0,n.kt)("li",{parentName:"ul"},"Add ","[Get Orders]"," API"),(0,n.kt)("li",{parentName:"ul"},"Add ","[Cancel Order]"," API"),(0,n.kt)("li",{parentName:"ul"},"Add ","[Create Close Position Order]"," API"),(0,n.kt)("li",{parentName:"ul"},"Add ","[Position List]"," API"),(0,n.kt)("li",{parentName:"ul"},"Add ","[Close All Positions]"," API"),(0,n.kt)("li",{parentName:"ul"},"Add ","[Set Leverage]"," API"),(0,n.kt)("li",{parentName:"ul"},"Add ","[Get Wallet Balance]"," API"),(0,n.kt)("li",{parentName:"ul"},"Add ","[Transfer]"," API"),(0,n.kt)("li",{parentName:"ul"},"Add ","[Spot create order]"," API")))),(0,n.kt)("h2",{id:"2023-09-19"},"2023-09-19"),(0,n.kt)("h3",{id:"common-parameters"},"Common parameters"),(0,n.kt)("p",null,"The interface that needs to be signed must include the following parameters:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"api_key"),(0,n.kt)("li",{parentName:"ul"},"timestamp (UTC millisecond timestamp)"),(0,n.kt)("li",{parentName:"ul"},"sign (Request parameter signature)",(0,n.kt)("br",null),"Additionally, we offer optional _recv_window_ parameter (in milliseconds, with a default value of 5000) is used to specify how long the request is valid and to prevent replay attacks.")),(0,n.kt)("h2",{id:"2024-5-17"},"2024-5-17"),(0,n.kt)("h3",{id:"order"},"Order"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"REST API",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Add ","[Spot create order]"," API")))),(0,n.kt)("h2",{id:"2024-5-24"},"2024-5-24"),(0,n.kt)("h3",{id:"market-1"},"Market"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"REST API",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Add ","[Spot insturment info]"," API"),(0,n.kt)("li",{parentName:"ul"},"Add ","[Spot kline]"," API"),(0,n.kt)("li",{parentName:"ul"},"Add ","[Spot orderbook]"," API"),(0,n.kt)("li",{parentName:"ul"},"Add ","[Spot recent trade]"," API"),(0,n.kt)("li",{parentName:"ul"},"Add ","[Spot tickers]"," API")))),(0,n.kt)("h3",{id:"order-1"},"order"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"REST API",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Add ","[Spot amend order]"," API"),(0,n.kt)("li",{parentName:"ul"},"Add ","[Spot cancel all]"," API"),(0,n.kt)("li",{parentName:"ul"},"Add ","[Spot cancel order]"," API"),(0,n.kt)("li",{parentName:"ul"},"Add ","[Spot open order]"," API")))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Note that the timestamp parameter must comply with the following rules: server",(0,n.kt)("em",{parentName:"p"}," Time - recv")," Window<=timestamp<server",(0,n.kt)("em",{parentName:"p"}," Time+1000, where server")," Time is the Zoomex server time, which you can obtain through ",(0,n.kt)("a",{parentName:"p",href:"../v3/market/time#"},"the server time interface"),".")))}c.isMDXComponent=!0}}]);