"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[269],{4993:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(2983);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(f,i(i({ref:n},l),{},{components:t})):r.createElement(f,i({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8428:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=t(2798),o=(t(2983),t(4993));const a={sidebar_position:99,sidebar_label:"React 18+"},i="React 18+",s={unversionedId:"api/concurrent-mode",id:"api/concurrent-mode",title:"React 18+",description:"Components suspension",source:"@site/docs/api/99-concurrent-mode.md",sourceDirName:"api",slug:"/api/concurrent-mode",permalink:"/react-async-states-v1-docs/docs/api/concurrent-mode",draft:!1,editUrl:"https://github.com/incepter/react-async-states-v1-docs/edit/main/packages/docs/docs/api/99-concurrent-mode.md",tags:[],version:"current",sidebarPosition:99,frontMatter:{sidebar_position:99,sidebar_label:"React 18+"},sidebar:"tutorialSidebar",previous:{title:"useProducer",permalink:"/react-async-states-v1-docs/docs/api/use-producer"},next:{title:"Application",permalink:"/react-async-states-v1-docs/docs/application/"}},c={},p=[{value:"Components suspension",id:"components-suspension",level:2},{value:"Tearing",id:"tearing",level:2},{value:"Transitions",id:"transitions",level:2}],l={toc:p};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"react-18"},(0,o.kt)("inlineCode",{parentName:"h1"},"React 18+")),(0,o.kt)("h2",{id:"components-suspension"},"Components suspension"),(0,o.kt)("p",null,"React's concurrent features and components suspension is\nsupported by the library actually in ",(0,o.kt)("inlineCode",{parentName:"p"},"useAsyncState")," or other hooks: It returns a\n",(0,o.kt)("inlineCode",{parentName:"p"},"read")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"read(suspend?: boolean = true, throwError?: boolean = true);\n")),(0,o.kt)("p",null,"This function enable the react's concurrent feature: ",(0,o.kt)("inlineCode",{parentName:"p"},"Component suspension")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"Error boundary"),"."),(0,o.kt)("p",null,"So calling read requires you to have a ",(0,o.kt)("inlineCode",{parentName:"p"},"Suspense")," and/or ",(0,o.kt)("inlineCode",{parentName:"p"},"ErrorBoundary"),"\nup in your tree."),(0,o.kt)("p",null,"You can pass this function to a child component that will read the data and\nsuspend if pending."),(0,o.kt)("p",null,"To suspend a component when it is pending, you can do the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function MyComponent() {\n  const {read} = useAsyncState(config, deps);\n  \n  // later, in this component or another:\n  const selectedStateValue = read();\n}\n")),(0,o.kt)("p",null,"This can be useful if you want to pass the read function to a child component\nto suspend only itself."),(0,o.kt)("h2",{id:"tearing"},"Tearing"),(0,o.kt)("p",null,"The library performs an optimistic lock, so everytime a subscribed component\nrenders, it will check the current version in the instance, if different, it\nwill schedule an update."),(0,o.kt)("h2",{id:"transitions"},"Transitions"),(0,o.kt)("p",null,"If your producer isn't used with a ",(0,o.kt)("inlineCode",{parentName:"p"},"runEffect"),", then the transition to the\n",(0,o.kt)("inlineCode",{parentName:"p"},"pending")," state is scheduled immediately in a sync way. So you may benefit\nfrom ",(0,o.kt)("inlineCode",{parentName:"p"},"useTransition")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"startTransition")," APIs."))}u.isMDXComponent=!0}}]);
