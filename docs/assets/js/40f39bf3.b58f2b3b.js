"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[335],{4993:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(2983);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),i=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=i(e.components);return n.createElement(u.Provider,{value:r},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=i(t),f=o,m=l["".concat(u,".").concat(f)]||l[f]||d[f]||s;return t?n.createElement(m,a(a({ref:r},p),{},{components:t})):n.createElement(m,a({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=f;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c[l]="string"==typeof e?e:o,a[1]=c;for(var i=2;i<s;i++)a[i]=t[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7320:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var n=t(2798),o=(t(2983),t(4993));const s={sidebar_position:8,sidebar_label:"useSource"},a="useSource",c={unversionedId:"api/use-source",id:"api/use-source",title:"useSource",description:"This hook allows simple subscription to a source object, it returns the same",source:"@site/docs/api/8-use-source.md",sourceDirName:"api",slug:"/api/use-source",permalink:"/react-async-states-v1-docs/docs/api/use-source",draft:!1,editUrl:"https://github.com/incepter/react-async-states-v1-docs/edit/main/packages/docs/docs/api/8-use-source.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,sidebar_label:"useSource"},sidebar:"tutorialSidebar",previous:{title:"useRun & useRunLane",permalink:"/react-async-states-v1-docs/docs/api/use-run"},next:{title:"useProducer",permalink:"/react-async-states-v1-docs/docs/api/use-producer"}},u={},i=[],p={toc:i};function l(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usesource"},(0,o.kt)("inlineCode",{parentName:"h1"},"useSource")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function useSource<T>(src: Source<T>, lane?: string) {\n  return useAsyncState({srouce: src, lane}, [src, lane]);\n}\n")),(0,o.kt)("p",null,"This hook allows simple subscription to a source object, it returns the same\nvalue as ",(0,o.kt)("inlineCode",{parentName:"p"},"useAsyncState"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function useSource<T>(src: Source<T>, lane?: string) {\n  return useAsyncState({source: src}, [src]);\n}\n")))}l.isMDXComponent=!0}}]);
