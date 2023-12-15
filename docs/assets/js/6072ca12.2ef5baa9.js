"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[883],{4993:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>y});var n=t(2983);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),u=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(i.Provider,{value:r},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(t),f=o,y=l["".concat(i,".").concat(f)]||l[f]||d[f]||a;return t?n.createElement(y,c(c({ref:r},p),{},{components:t})):n.createElement(y,c({ref:r},p))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=f;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s[l]="string"==typeof e?e:o,c[1]=s;for(var u=2;u<a;u++)c[u]=t[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1150:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=t(2798),o=(t(2983),t(4993));const a={sidebar_position:9,sidebar_label:"useProducer"},c="useProducer",s={unversionedId:"api/use-producer",id:"api/use-producer",title:"useProducer",description:"This hook creates a state instance with the given producer, it returns the same",source:"@site/docs/api/9-use-producer.md",sourceDirName:"api",slug:"/api/use-producer",permalink:"/react-async-states/docs/api/use-producer",draft:!1,editUrl:"https://github.com/incepter/react-async-states/edit/main/packages/docs/docs/api/9-use-producer.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,sidebar_label:"useProducer"},sidebar:"tutorialSidebar",previous:{title:"useSource",permalink:"/react-async-states/docs/api/use-source"},next:{title:"React 18+",permalink:"/react-async-states/docs/api/concurrent-mode"}},i={},u=[],p={toc:u};function l(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"useproducer"},(0,o.kt)("inlineCode",{parentName:"h1"},"useProducer")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function useProducer<T>(producer: Producer<T>) {\n\n}\n")),(0,o.kt)("p",null,"This hook creates a state instance with the given producer, it returns the same\nvalue as ",(0,o.kt)("inlineCode",{parentName:"p"},"useAsyncState"),", you can see it like this (in reality, useProducer uses\nfewer hooks than useAsyncState since it only performs direct subscription\nand support only one type of configuration: the producer function) :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function useProducer<T>(producer: Producer<T>) {\n  return useAsyncState({producer}, [producer]);\n}\n")))}l.isMDXComponent=!0}}]);