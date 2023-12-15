"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[94],{4993:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>y});var r=n(2983);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),l=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},p=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=l(n),f=a,y=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(y,s(s({ref:e},p),{},{components:n})):r.createElement(y,s({ref:e},p))}));function y(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,s=new Array(o);s[0]=f;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[u]="string"==typeof t?t:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4549:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(2798),a=(n(2983),n(4993));const o={sidebar_position:2,sidebar_label:"State sharing"},s="State sharing",i={unversionedId:"tutorial/state-sharing",id:"tutorial/state-sharing",title:"State sharing",description:"Any state you create by the library is shared and will be accessible from",source:"@site/docs/tutorial/state-sharing.md",sourceDirName:"tutorial",slug:"/tutorial/state-sharing",permalink:"/react-async-states/docs/tutorial/state-sharing",draft:!1,editUrl:"https://github.com/incepter/react-async-states/edit/main/packages/docs/docs/tutorial/state-sharing.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"State sharing"},sidebar:"tutorialSidebar",previous:{title:"First steps",permalink:"/react-async-states/docs/tutorial/first-steps"},next:{title:"TL;DR",permalink:"/react-async-states/docs/api/the-whole-api"}},c={},l=[],p={toc:l};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"state-sharing"},"State sharing"),(0,a.kt)("p",null,"Any state you create by the library is shared and will be accessible from\nyour whole application without tuning or configuration."),(0,a.kt)("p",null,"Only one single instance is created in memory for a given key, if you attempt\nto recreate it, its producer and configuration will change only. It won't get created"),(0,a.kt)("p",null,"You can simply do ",(0,a.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/bold-bash-iflftb?file=/src/App.js"},"something like this"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"It just works!")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useAsyncState } from "react-async-states";\n\nfunction ComponentA() {\n  let { state, setState } = useAsyncState("tracker");\n\n  return (\n    <div>\n      <span>Last updater is {state.data}</span>\n      <button onClick={() => setState("A")}>set A</button>\n    </div>\n  );\n}\n\nfunction ComponentB() {\n  let { state, setState } = useAsyncState("tracker");\n\n  return (\n    <div>\n      <span>Last updater is {state.data}</span>\n      <button onClick={() => setState("B")}>set B</button>\n    </div>\n  );\n}\n\nexport default function App() {\n  return (\n    <>\n      <ComponentA />\n      <hr />\n      <ComponentB />\n    </>\n  );\n}\n')))}u.isMDXComponent=!0}}]);