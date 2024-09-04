"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[311],{5680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>p});var l=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=l.createContext({}),o=function(e){var t=l.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=o(e.components);return l.createElement(g.Provider,{value:t},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,g=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),y=o(n),c=r,p=y["".concat(g,".").concat(c)]||y[c]||d[c]||a;return n?l.createElement(p,u(u({ref:t},s),{},{components:n})):l.createElement(p,u({ref:t},s))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,u=new Array(a);u[0]=c;var i={};for(var g in t)hasOwnProperty.call(t,g)&&(i[g]=t[g]);i.originalType=e,i[y]="string"==typeof e?e:r,u[1]=i;for(var o=2;o<a;o++)u[o]=n[o];return l.createElement.apply(null,u)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9365:(e,t,n)=>{n.d(t,{A:()=>u});var l=n(6540),r=n(53);const a={tabItem:"tabItem_Ymn6"};function u(e){let{children:t,hidden:n,className:u}=e;return l.createElement("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,u),hidden:n},t)}},1470:(e,t,n)=>{n.d(t,{A:()=>P});var l=n(8168),r=n(6540),a=n(53),u=n(3104),i=n(6347),g=n(7485),o=n(1682),s=n(9466);function y(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:l,default:r}}=e;return{value:t,label:n,attributes:l,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??y(n);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const l=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,g.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(l.location.search);t.set(a,e),l.replace({...l.location,search:t.toString()})}),[a,l])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:l}=e,a=d(e),[u,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const l=n.find((e=>e.default))??n[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:a}))),[g,o]=p({queryString:n,groupId:l}),[y,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,a]=(0,s.Dv)(n);return[l,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:l}),b=(()=>{const e=g??y;return c({value:e,tabValues:a})?e:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:u,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),o(e),m(e)}),[o,m,a]),tabValues:a}}var b=n(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:n,selectedValue:i,selectValue:g,tabValues:o}=e;const s=[],{blockElementScrollPositionUntilNextRender:y}=(0,u.a_)(),d=e=>{const t=e.currentTarget,n=s.indexOf(t),l=o[n].value;l!==i&&(y(t),g(l))},c=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t)},o.map((e=>{let{value:t,label:n,attributes:u}=e;return r.createElement("li",(0,l.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>s.push(e),onKeyDown:c,onClick:d},u,{className:(0,a.A)("tabs__item",f.tabItem,u?.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:l}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==l}))))}function k(e){const t=m(e);return r.createElement("div",{className:(0,a.A)("tabs-container",f.tabList)},r.createElement(h,(0,l.A)({},e,t)),r.createElement(v,(0,l.A)({},e,t)))}function P(e){const t=(0,b.A)();return r.createElement(k,(0,l.A)({key:String(t)},e))}},8417:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>g,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>y});var l=n(8168),r=(n(6540),n(5680)),a=n(1470),u=n(9365);const i={title:"\u67e5\u8a62\u6700\u65b0\u884c\u60c5\u4fe1\u606f",sidebar_label:"\u67e5\u8a62\u6700\u65b0\u884c\u60c5\u4fe1\u606f",sidebar_position:6},g=void 0,o={unversionedId:"v3/market/tickers",id:"v3/market/tickers",title:"\u67e5\u8a62\u6700\u65b0\u884c\u60c5\u4fe1\u606f",description:"\u53ef\u7372\u53d6\u5230\u5feb\u7167\u7684\u6700\u65b0\u5e02\u5834\u50f9\u683c\uff0c\u6700\u4f73\u8cb7\u8ce3\u50f9\u683c\uff0c\u4ee5\u53ca\u904e\u53bb\u6642\u9593\u5167\u7684\u4ea4\u6613\u91cf\u7b49.",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/v3/market/tickers.mdx",sourceDirName:"v3/market",slug:"/v3/market/tickers",permalink:"/docs/zh-TW/v3/market/tickers",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"\u67e5\u8a62\u6700\u65b0\u884c\u60c5\u4fe1\u606f",sidebar_label:"\u67e5\u8a62\u6700\u65b0\u884c\u60c5\u4fe1\u606f",sidebar_position:6},sidebar:"v3SideBar",previous:{title:"Order Book (\u6df1\u5ea6)",permalink:"/docs/zh-TW/v3/market/orderbook"},next:{title:"\u67e5\u8a62\u6b77\u53f2\u8cc7\u91d1\u8cbb\u7387",permalink:"/docs/zh-TW/v3/market/history-fund-rate"}},s={},y=[{value:"HTTP\u8acb\u6c42",id:"http\u8acb\u6c42",level:3},{value:"\u8acb\u6c42\u53c3\u6578",id:"\u8acb\u6c42\u53c3\u6578",level:3},{value:"\u97ff\u61c9\u53c3\u6578",id:"\u97ff\u61c9\u53c3\u6578",level:3},{value:"\u8acb\u6c42\u793a\u4f8b",id:"\u8acb\u6c42\u793a\u4f8b",level:3},{value:"\u97ff\u61c9\u793a\u4f8b",id:"\u97ff\u61c9\u793a\u4f8b",level:3}],d={toc:y},c="wrapper";function p(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,l.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"\u53ef\u7372\u53d6\u5230\u5feb\u7167\u7684\u6700\u65b0\u5e02\u5834\u50f9\u683c\uff0c\u6700\u4f73\u8cb7\u8ce3\u50f9\u683c\uff0c\u4ee5\u53ca\u904e\u53bb\u6642\u9593\u5167\u7684\u4ea4\u6613\u91cf\u7b49."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"\u8986\u84cb\u7bc4\u570d:  \u73fe\u8ca8 / USDT\u6c38\u7e8c / \u53cd\u5411\u5408\u7d04"))),(0,r.yg)("h3",{id:"http\u8acb\u6c42"},"HTTP\u8acb\u6c42"),(0,r.yg)("p",null,"GET ",(0,r.yg)("inlineCode",{parentName:"p"},"/cloud/trade/v3/market/tickers")),(0,r.yg)("h3",{id:"\u8acb\u6c42\u53c3\u6578"},"\u8acb\u6c42\u53c3\u6578"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c3\u6578"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u9700"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u985e\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u8aaa\u660e"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"../enum#category"},"category")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"true")),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7522\u54c1\u985e\u578b. ",(0,r.yg)("inlineCode",{parentName:"td"},"spot"),",",(0,r.yg)("inlineCode",{parentName:"td"},"linear"),",",(0,r.yg)("inlineCode",{parentName:"td"},"inverse"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"../enum#symbol"},"symbol")),(0,r.yg)("td",{parentName:"tr",align:"left"},"false"),(0,r.yg)("td",{parentName:"tr",align:"left"},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5408\u7d04\u540d\u7a31")))),(0,r.yg)("h3",{id:"\u97ff\u61c9\u53c3\u6578"},"\u97ff\u61c9\u53c3\u6578"),(0,r.yg)(a.A,{groupId:"market-category",mdxType:"Tabs"},(0,r.yg)(u.A,{value:"linear",label:"Linear/Inverse",default:!0,mdxType:"TabItem"},(0,r.yg)("table",{border:"0.8"},(0,r.yg)("tr",null,(0,r.yg)("th",null,"\u53c3\u6578"),(0,r.yg)("th",null,"\u985e\u578b"),(0,r.yg)("th",null,"\u8aaa\u660e")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"category"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u7522\u54c1\u985e\u578b")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"list"),(0,r.yg)("td",null,"array"),(0,r.yg)("td",null,"Object")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> symbol"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u5408\u7d04\u540d\u7a31 ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> lastPrice"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u6700\u65b0\u5e02\u5834\u6210\u4ea4\u50f9 ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> indexPrice"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u6307\u6578\u50f9\u683c ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> markPrice"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u6a19\u8a18\u50f9\u683c ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> prevPrice24h"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"24\u5c0f\u6642\u524d\u7684\u6574\u9ede\u5e02\u50f9 ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> price24hPcnt"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u5e02\u5834\u50f9\u683c\u76f8\u5c0d24h\u524d\u8b8a\u5316\u7684\u767e\u5206\u6bd4 ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> highPrice24h"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u6700\u8fd124\u5c0f\u6642\u7684\u6700\u9ad8\u50f9 ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> lowPrice24h"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u6700\u8fd124\u5c0f\u6642\u7684\u6700\u4f4e\u50f9 ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> prevPrice1h"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"1\u5c0f\u6642\u524d\u7684\u6574\u9ede\u5e02\u50f9 ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> openInterest"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u672a\u5e73\u5009\u5408\u7d04\u7684\u6578\u91cf ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> openInterestValue"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u672a\u5e73\u5009\u5408\u7d04\u7684\u50f9\u503c ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> turnover24h"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u6700\u8fd124\u5c0f\u6642\u6210\u4ea4\u984d ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> volume24h"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u6700\u8fd124\u5c0f\u6642\u6210\u4ea4\u91cf ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> fundingRate"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u8cc7\u91d1\u8cbb\u7387 ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> nextFundingTime"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u4e0b\u6b21\u7d50\u7b97\u8cc7\u91d1\u8cbb\u7528\u7684\u6642\u9593 (\u6beb\u79d2) ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> ask1Size"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u8cb71\u50f9\u7684\u6578\u91cf ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> bid1Price"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u8cb71\u50f9 ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> ask1Price"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u8ce31\u50f9 ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> bid1Size"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u8cb71\u50f9\u7684\u6578\u91cf ")))),(0,r.yg)(u.A,{value:"spot",label:"Spot",mdxType:"TabItem"},(0,r.yg)("table",{border:"0.8"},(0,r.yg)("tr",null,(0,r.yg)("th",null,"\u53c3\u6578"),(0,r.yg)("th",null,"\u985e\u578b"),(0,r.yg)("th",null,"\u8aaa\u660e")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"category"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u7522\u54c1\u985e\u578b")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"list"),(0,r.yg)("td",null,"array"),(0,r.yg)("td",null,"Object")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> symbol"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u5408\u7d04\u540d\u7a31 ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> bid1Price"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u8cb71\u50f9 ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> bid1Size"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u8cb71\u50f9\u7684\u6578\u91cf ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> ask1Price"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u8ce31\u50f9 ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> ask1Size"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u8ce31\u50f9\u7684\u6578\u91cf ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> lastPrice"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u6700\u65b0\u5e02\u5834\u6210\u4ea4\u50f9 ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> prevPrice24h"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"24\u5c0f\u6642\u524d\u7684\u6574\u9ede\u5e02\u50f9 ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> price24hPcnt"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u5e02\u5834\u50f9\u683c\u76f8\u5c0d24h\u524d\u8b8a\u5316\u7684\u767e\u5206\u6bd4 ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> highPrice24h"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u6700\u8fd124\u5c0f\u6642\u7684\u6700\u9ad8\u50f9 ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> lowPrice24h"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u6700\u8fd124\u5c0f\u6642\u7684\u6700\u4f4e\u50f9 ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> turnover24h"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u6700\u8fd124\u5c0f\u6642\u6210\u4ea4\u984d ")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"> volume24h"),(0,r.yg)("td",null,"string"),(0,r.yg)("td",null,"\u6700\u8fd124\u5c0f\u6642\u6210\u4ea4\u91cf "))))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"\u8acb\u6c42\u793a\u4f8b"},"\u8acb\u6c42\u793a\u4f8b"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"GET /cloud/trade/v3/market/tickers?category=inverse&symbol=BTCUSD HTTP/1.1\nHost: openapi-testnet.zoomex.com\n")),(0,r.yg)("h3",{id:"\u97ff\u61c9\u793a\u4f8b"},"\u97ff\u61c9\u793a\u4f8b"),(0,r.yg)(a.A,{groupId:"market-category",mdxType:"Tabs"},(0,r.yg)(u.A,{value:"inverse",label:"Linear",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n    "category": "inverse",\n    "list": [\n        {\n            "symbol": "BTCUSD",\n            "lastPrice": "16597.00",\n            "indexPrice": "16598.54",\n            "markPrice": "16596.00",\n            "prevPrice24h": "16464.50",\n            "price24hPcnt": "0.008047",\n            "highPrice24h": "30912.50",\n            "lowPrice24h": "15700.00",\n            "prevPrice1h": "16595.50",\n            "openInterest": "373504107",\n            "openInterestValue": "22505.67",\n            "turnover24h": "2352.94950046",\n            "volume24h": "49337318",\n            "fundingRate": "-0.001034",\n            "nextFundingTime": "1672387200000",\n            "predictedDeliveryPrice": "",\n            "basisRate": "",\n            "deliveryFeeRate": "",\n            "deliveryTime": "0",\n            "ask1Size": "1",\n            "bid1Price": "16596.00",\n            "ask1Price": "16597.50",\n            "bid1Size": "1",\n            "basis": ""\n        }\n    ]\n},\n    "retExtInfo": {},\n    "time": 1672376496682\n}\n'))),(0,r.yg)(u.A,{value:"spot",label:"Spot",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'```json\n{\n    "retCode": 0,\n    "retMsg": "OK",\n    "result": {\n    "category": "spot",\n    "list": [\n{\n    "symbol": "BTCUSDT",\n    "bid1Price": "20517.96",\n    "bid1Size": "2",\n    "ask1Price": "20527.77",\n    "ask1Size": "1.862172",\n    "lastPrice": "20533.13",\n    "prevPrice24h": "20393.48",\n    "price24hPcnt": "0.0068",\n    "highPrice24h": "21128.12",\n    "lowPrice24h": "20318.89",\n    "turnover24h": "243765620.65899866",\n    "volume24h": "11801.27771",\n    "usdIndexPrice": "20784.12009279"\n}\n    ]\n},\n    "retExtInfo": {},\n    "time": 1673859087947\n}\n```\n')))))}p.isMDXComponent=!0}}]);