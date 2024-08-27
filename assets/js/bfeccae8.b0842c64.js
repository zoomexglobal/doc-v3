"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1804],{5680:(e,t,r)=>{r.d(t,{xA:()=>m,yg:()=>y});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=c(r),d=a,y=s["".concat(p,".").concat(d)]||s[d]||u[d]||o;return r?n.createElement(y,l(l({ref:t},m),{},{components:r})):n.createElement(y,l({ref:t},m))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3008:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(8168),a=(r(6540),r(5680));const o={title:"V3 API"},l=void 0,i={unversionedId:"changelog/v3",id:"changelog/v3",title:"V3 API",description:"2023-07-27",source:"@site/docs/changelog/v3.md",sourceDirName:"changelog",slug:"/changelog/v3",permalink:"/docs/changelog/v3",draft:!1,tags:[],version:"current",frontMatter:{title:"V3 API"},sidebar:"changelogSidebar"},p={},c=[{value:"2023-07-27",id:"2023-07-27",level:2},{value:"Copy Trade",id:"copy-trade",level:3},{value:"2023-09-19",id:"2023-09-19",level:2},{value:"Common parameters",id:"common-parameters",level:3}],m={toc:c},s="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(s,(0,n.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"2023-07-27"},"2023-07-27"),(0,a.yg)("h3",{id:"copy-trade"},"Copy Trade"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"REST API",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Add ","[Instrument Info]"," API"),(0,a.yg)("li",{parentName:"ul"},"Add ","[Create Order]"," API"),(0,a.yg)("li",{parentName:"ul"},"Add ","[Set Trading Stop]"," API"),(0,a.yg)("li",{parentName:"ul"},"Add ","[Get Orders]"," API"),(0,a.yg)("li",{parentName:"ul"},"Add ","[Cancel Order]"," API"),(0,a.yg)("li",{parentName:"ul"},"Add ","[Create Close Position Order]"," API"),(0,a.yg)("li",{parentName:"ul"},"Add ","[Position List]"," API"),(0,a.yg)("li",{parentName:"ul"},"Add ","[Close All Positions]"," API"),(0,a.yg)("li",{parentName:"ul"},"Add ","[Set Leverage]"," API"),(0,a.yg)("li",{parentName:"ul"},"Add ","[Get Wallet Balance]"," API"),(0,a.yg)("li",{parentName:"ul"},"Add ","[Transfer]"," API")))),(0,a.yg)("h2",{id:"2023-09-19"},"2023-09-19"),(0,a.yg)("h3",{id:"common-parameters"},"Common parameters"),(0,a.yg)("p",null,"The interface that needs to be signed must include the following parameters:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"api_key"),(0,a.yg)("li",{parentName:"ul"},"timestamp (UTC millisecond timestamp)"),(0,a.yg)("li",{parentName:"ul"},"sign (Request parameter signature)",(0,a.yg)("br",null),"Additionally, we offer optional _recv_window_ parameter (in milliseconds, with a default value of 5000) is used to specify how long the request is valid and to prevent replay attacks.")),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"Note that the timestamp parameter must comply with the following rules: server",(0,a.yg)("em",{parentName:"p"}," Time - recv")," Window<=timestamp<server",(0,a.yg)("em",{parentName:"p"}," Time+1000, where server")," Time is the Zoomex server time, which you can obtain through ",(0,a.yg)("a",{parentName:"p",href:"../v3/market/time#"},"the server time interface"),".")))}u.isMDXComponent=!0}}]);