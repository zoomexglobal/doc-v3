"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[68],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>N});var n=i(7294);function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){l(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,l=function(e,t){if(null==e)return{};var i,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var p=n.createContext({}),d=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},u=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var i=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=d(i),c=l,N=m["".concat(p,".").concat(c)]||m[c]||k[c]||a;return i?n.createElement(N,r(r({ref:t},u),{},{components:i})):n.createElement(N,r({ref:t},u))}));function N(e,t){var i=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=i.length,r=new Array(a);r[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:l,r[1]=o;for(var d=2;d<a;d++)r[d]=i[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},8135:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>k,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var n=i(7462),l=(i(7294),i(3905));const a={title:"Enums Definitions",sidebar_label:"Enums Definitions",slug:"/copy-trade/enum"},r=void 0,o={unversionedId:"v3/copy-trade/enum",id:"v3/copy-trade/enum",title:"Enums Definitions",description:"accountType",source:"@site/docs/v3/copy-trade/enum.mdx",sourceDirName:"v3/copy-trade",slug:"/copy-trade/enum",permalink:"/docs/copy-trade/enum",draft:!1,tags:[],version:"current",frontMatter:{title:"Enums Definitions",sidebar_label:"Enums Definitions",slug:"/copy-trade/enum"},sidebar:"v3SideBar",previous:{title:"Rate Limit",permalink:"/docs/copy-trade/rate-limit"},next:{title:"Error Code",permalink:"/docs/copy-trade/error"}},p={},d=[{value:"accountType",id:"accounttype",level:3},{value:"transferStatus",id:"transferstatus",level:3},{value:"symbol",id:"symbol",level:3},{value:"orderType",id:"ordertype",level:3},{value:"side",id:"side",level:3},{value:"triggerBy",id:"triggerby",level:3},{value:"copyTradeOrderStatus",id:"copytradeorderstatus",level:3},{value:"timeInForce",id:"timeinforce",level:3},{value:"positionIdx",id:"positionidx",level:3},{value:"interval",id:"interval",level:3},{value:"tickDirection",id:"tickdirection",level:3},{value:"execType",id:"exectype",level:3},{value:"lastLiquidityInd",id:"lastliquidityind",level:3}],u={toc:d},m="wrapper";function k(e){let{components:t,...i}=e;return(0,l.kt)(m,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"accounttype"},"accountType"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CONTRACT"),"\u2003","Future account"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"COPYTRADING"),"\u2003","CopyTrading account")),(0,l.kt)("h3",{id:"transferstatus"},"transferStatus"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SUCCESS")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PENDING")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"FAILED"))),(0,l.kt)("h3",{id:"symbol"},"symbol"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"CopyTrading supports USDT Perpetual only")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"BTCUSDT")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ETHUSDT")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"XRPUSDT")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LTCUSDT")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SOLUSDT")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"..."))),(0,l.kt)("h3",{id:"ordertype"},"orderType"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Market")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Limit"))),(0,l.kt)("h3",{id:"side"},"side"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Buy")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Sell"))),(0,l.kt)("h3",{id:"triggerby"},"triggerBy"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LastPrice")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"IndexPrice")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"MarkPrice"))),(0,l.kt)("h3",{id:"copytradeorderstatus"},"copyTradeOrderStatus"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"UNKNOWN")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PendingNew")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"New")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"OpenOrderPartiallyFilled")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"OpenOrderFilled")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"OpenOrderClosing")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"OpenOrderClosedFilled")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CloseOrderPartiallyFilled")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CloseOrderFilled")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Cancelled")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Untriggered")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Triggered"))),(0,l.kt)("h3",{id:"timeinforce"},"timeInForce"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GoodTillCancel")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ImmediateOrCancel")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"FillOrKill")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PostOnly"))),(0,l.kt)("h3",{id:"positionidx"},"positionIdx"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0"),"\u2003","one-way mode"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1"),"\u2003","Buy side hedge mode"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"2"),"\u2003","Sell side hedge mode")),(0,l.kt)("h3",{id:"interval"},"interval"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1")," ",(0,l.kt)("inlineCode",{parentName:"li"},"3")," ",(0,l.kt)("inlineCode",{parentName:"li"},"5")," ",(0,l.kt)("inlineCode",{parentName:"li"},"15")," ",(0,l.kt)("inlineCode",{parentName:"li"},"30")," ",(0,l.kt)("inlineCode",{parentName:"li"},"60")," ",(0,l.kt)("inlineCode",{parentName:"li"},"120")," ",(0,l.kt)("inlineCode",{parentName:"li"},"240")," ",(0,l.kt)("inlineCode",{parentName:"li"},"360")," ",(0,l.kt)("inlineCode",{parentName:"li"},"720"),"\u2003","minute"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"D"),"\u2003","day"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"W"),"\u2003","week"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"M"),"\u2003","month")),(0,l.kt)("h3",{id:"tickdirection"},"tickDirection"),(0,l.kt)("p",null,"It indicates price fluctuation relative to the last trade."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PlusTick"),"\u2003","price rise"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ZeroPlusTick"),"\u2003","trade occurs at the same price as the previous trade, which occurred at a price higher than that for the trade preceding it"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"MinusTick"),"\u2003","price drop"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ZeroMinusTick"),"\u2003","trade occurs at the same price as the previous trade, which occurred at a price lower than that for the trade preceding it")),(0,l.kt)("h3",{id:"exectype"},"execType"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Trade")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"AdlTrade")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Funding")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"BustTrade"))),(0,l.kt)("h3",{id:"lastliquidityind"},"lastLiquidityInd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"AddedLiquidity"),"\u2003","add liquidity"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"RemovedLiquidity"),"\u2003","take liquidity"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LiquidityIndNA"),"\u2003","Liquidity not applicable")))}k.isMDXComponent=!0}}]);