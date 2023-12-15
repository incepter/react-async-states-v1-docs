"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[994],{4993:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(2983);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||l;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8265:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(2798),r=(n(2983),n(4993));const l={sidebar_position:1,sidebar_label:"The producer function"},i="The producer function",o={unversionedId:"api/producer-function",id:"api/producer-function",title:"The producer function",description:"What is a producer function?",source:"@site/docs/api/1-producer-function.md",sourceDirName:"api",slug:"/api/producer-function",permalink:"/react-async-states/docs/api/producer-function",draft:!1,editUrl:"https://github.com/incepter/react-async-states/edit/main/packages/docs/docs/api/1-producer-function.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"The producer function"},sidebar:"tutorialSidebar",previous:{title:"TL;DR",permalink:"/react-async-states/docs/api/the-whole-api"},next:{title:"Create source",permalink:"/react-async-states/docs/api/create-source"}},p={},s=[{value:"What is a producer function?",id:"what-is-a-producer-function",level:2},{value:"What do you need with the producer ?",id:"what-do-you-need-with-the-producer-",level:3},{value:"Producer <code>props</code>:",id:"producer-props",level:2},{value:"<code>payload</code>",id:"payload",level:3},{value:"<code>lastSuccess</code>",id:"lastsuccess",level:3},{value:"<code>args</code>",id:"args",level:3},{value:"<code>isAborted</code>",id:"isaborted",level:3},{value:"<code>abort</code>",id:"abort",level:3},{value:"<code>onAbort</code>",id:"onabort",level:3},{value:"Run from producer: <code>Producer effects</code>",id:"run-from-producer-producer-effects",level:2},{value:"<code>props.run</code>",id:"propsrun",level:3},{value:"<code>props.runp</code>",id:"propsrunp",level:3},{value:"<code>props.emit</code>",id:"propsemit",level:3},{value:"<code>props.select</code>",id:"propsselect",level:3}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"the-producer-function"},"The producer function"),(0,r.kt)("h2",{id:"what-is-a-producer-function"},"What is a producer function?"),(0,r.kt)("p",null,"The producer function is the function that returns the state's value,\nhere is its declaration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export type Producer<T, E = unknown, R = unknown, A extends unknown[]> =\n  ((props: ProducerProps<T, E, R, A>) => (T | Promise<T> | Generator<any, T, any>));\n\n// T: data type, E: error type, R: abort reason type\n")),(0,r.kt)("p",null,"So it can be:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A regular function returning a value."),(0,r.kt)("li",{parentName:"ul"},"A pure function returning a value based on the previous value (aka reducer)."),(0,r.kt)("li",{parentName:"ul"},"A generator (must return the state value)."),(0,r.kt)("li",{parentName:"ul"},"An asynchronous function using ",(0,r.kt)("inlineCode",{parentName:"li"},"async/await"),"."),(0,r.kt)("li",{parentName:"ul"},"A regular function returning a ",(0,r.kt)("inlineCode",{parentName:"li"},"Promise")," object."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"undefined"),".")),(0,r.kt)("p",null,"The main goal and purpose is to ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," your function,\nso it will receive a single object argument with the following properties:"),(0,r.kt)("p",null,"where:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"payload")),(0,r.kt)("td",{parentName:"tr",align:null},"The merged payload from all subscribers. This allows the producer to gather data from multiple places.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lastSuccess")),(0,r.kt)("td",{parentName:"tr",align:null},"The last success state")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"args")),(0,r.kt)("td",{parentName:"tr",align:null},"The arguments that the ",(0,r.kt)("inlineCode",{parentName:"td"},"run")," function was given when ran")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"isAborted")),(0,r.kt)("td",{parentName:"tr",align:null},"A function returns a boolean indicating whether the current run has been cancelled (by dependency change, unmount or user action)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"abort")),(0,r.kt)("td",{parentName:"tr",align:null},"Imperatively abort the producer while processing it, this may be helpful only if you are working with generators")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onAbort")),(0,r.kt)("td",{parentName:"tr",align:null},"Registers a callback that will be fired when the abort is invoked (like aborting a fetch request if the user aborts or component unmounts)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"run")),(0,r.kt)("td",{parentName:"tr",align:null},"runs an async state or a producer and returns the abort function of that run")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"runp")),(0,r.kt)("td",{parentName:"tr",align:null},"runs an async state or a producer and returns a promise of its state")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"emit")),(0,r.kt)("td",{parentName:"tr",align:null},"set the state from the producer after its resolve, this to support intervals and incoming events from an external system (like ws, sse...)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"select")),(0,r.kt)("td",{parentName:"tr",align:null},"returns the state of the desired async state, by key or source")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getState")),(0,r.kt)("td",{parentName:"tr",align:null},"gets the current state. May be useful with emit")))),(0,r.kt)("p",null,"We believe that these properties will solve all sort of possible use cases.\nIn fact, your function will run while having access to payload from the render,\nand can be merged imperatively anytime using ",(0,r.kt)("inlineCode",{parentName:"p"},"mergePayload"),"."),(0,r.kt)("p",null,"Your function will be notified with the cancellation by registering an ",(0,r.kt)("inlineCode",{parentName:"p"},"onAbort"),"\ncallback, you can exploit this to abort an ",(0,r.kt)("inlineCode",{parentName:"p"},"AbortController")," which will lead\nyour fetches to be cancelled, or to clear a timeout, for example."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"isAborted")," function that returns a boolean that is truthy if\nthis current run is aborted, you may want to use it before calling a callback\nreceived from payload or execution arguments. If using a generator, only\nyielding is sufficient, since the library internally checks on cancellation\nbefore stepping any further in the generator."),(0,r.kt)("p",null,"The following functions are all supported by the library:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// retrives current user, his permissions and allowed stores before resolving\nfunction* getCurrentUser(props) {\n  // abort logic\n  const controller = new AbortController();\n  props.onAbort(() =>controller.abort());\n\n  const {signal} = controller;\n  const userData = yield fetchCurrentUser({signal});\n  const [permissions, stores] = yield Promise.all([\n    fetchUserPermissions(userData.id, {signal}),\n    fetchUserStores(userData.id, {signal}),\n  ]);\n\n  return {userData, permissions, stores};\n}\n\nasync function getCurrentUserPosts(props) {\n  // [...] abort logic\n  return await fetchUserPosts(props.payload.principal.id, {signal});\n}\n\nasync function getTransactionsList(props) {\n  // [...] abort logic\n  return await fetchUserTransactions(\n    props.payload.principal.id,\n    {query: props.payload.queryString, signal}\n  );\n}\n\nfunction timeout(props) {\n  let timeoutId;\n  props.onAbort(() => clearTimeout(timeoutId));\n  \n  return new Promise(function resolver(resolve) {\n    const callback = () => resolve(invokeIfPresent(props.payload.callback));\n    timeoutId = setTimeout(callback, props.payload.delay);\n  });\n}\n\nfunction reducer(props) {\n  const action = props.args[0];\n  switch(action.type) {\n    case type1: return {...props.lastSuccess.data, ...action.newData};\n    case type2: return {...action.data};\n    case type3: return fetchSomething()\n    // mixed sync and async reducers is possible\n  }\n}\n")),(0,r.kt)("p",null,"You can even omit the producer function, if you attempt to run it,\nit will simply call setState and imperatively change the current state with\neither the value or the updater that it received."),(0,r.kt)("h3",{id:"what-do-you-need-with-the-producer-"},"What do you need with the producer ?"),(0,r.kt)("p",null,"Generally, to define your state, you'd need three optional properties:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"key")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The unique identifier of the async state")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"producer")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Producer<T, E, R, A>")),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the state value of type ",(0,r.kt)("inlineCode",{parentName:"td"},"T"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"configuration")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ProducerConfig")),(0,r.kt)("td",{parentName:"tr",align:null},"The configuration of the state")))),(0,r.kt)("p",null,"The supported configuration is:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"initialValue")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"T or  ((cache: Record<string, CachedState<T, E, R, A>>) => T)")),(0,r.kt)("td",{parentName:"tr",align:null},"The initial value or the initializer of the state (status = ",(0,r.kt)("inlineCode",{parentName:"td"},"initial"),"), the initializer receives the cache as unique parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"runEffect")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"oneOf('debounce', 'throttle', undefined)")),(0,r.kt)("td",{parentName:"tr",align:null},"An effect to apply when running the producer, can be used to debounce or throttle")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"runEffectDurationMs")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number > 0"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},"The debounce/throttle duration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"resetStateOnDispose")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to reset the state to its initial state when all subscribers unsubscribe or to keep it. Default to ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"skipPendingDelayMs")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number > 0")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},"The duration under which a state update with a pending status may be skipped. The component in this case won't render with a pending status if it gets updated to something else under that duration.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"keepPendingForMs")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number > 0")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},"Once you step in a pending status, it will stay in pending state for this duration. This is supported to push the user experience to newer challenges")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"skipPendingStatus")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Entirely disable the pending status of this state. this state won't step into a pending status")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cacheConfig")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CacheConfig<T, E, R, A>")),(0,r.kt)("td",{parentName:"tr",align:null},"The cache config")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hideFromDevtools")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Hide this state from the devtools")))),(0,r.kt)("p",null,"Here is the internal declaration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"\nexport type ProducerConfig<T, E = unknown, R = unknown, A extends unknown[]> = {\n  skipPendingStatus?: boolean,\n  initialValue?: T | ((cache: Record<string, CachedState<T, E, R, A>>) => T),\n  cacheConfig?: CacheConfig<T, E, R>,\n  runEffectDurationMs?: number,\n  runEffect?: RunEffect,\n  skipPendingDelayMs?: number,\n  keepPendingForMs?: number,\n  resetStateOnDispose?: boolean,\n\n  // dev only\n  hideFromDevtools?: boolean,\n}\n\n")),(0,r.kt)("p",null,"The supported cache config is:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"enabled")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to enable cache or not")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hash")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(args?: any[], payload?: Record<string, any> or null) => string")),(0,r.kt)("td",{parentName:"tr",align:null},"a function to calculate a hash for a producer run (from args and payload)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getDeadline")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(currentState: State<T, E, R, A>) => number")),(0,r.kt)("td",{parentName:"tr",align:null},"returns the deadline after which the cache is invalid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"load")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"() => {[id: string]: CachedState<T, E, R, A>}")),(0,r.kt)("td",{parentName:"tr",align:null},"loads the cached data when the async state instance is created")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"persist")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(cache: {[id: string]: CachedState<T, E, R, A>}) => void")),(0,r.kt)("td",{parentName:"tr",align:null},"a function to persist the whole cache, called when state is updated to success")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onCacheLoad")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onCacheLoad?({cache, setState}): void")),(0,r.kt)("td",{parentName:"tr",align:null},"a callback called when the cache loads, useful when asynchronously loading cache")))),(0,r.kt)("p",null,"Here is a small example of the usage of cache config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'  // Creates a producer that will fetch cities by country\n  // and caches them\n  createSource("cities", citiesProducer, {\n    cacheConfig: {\n      enabled: true,\n      hash: (args, payload) =>  `cities-${args[0]}`, // args[0] = countryId\n      getDeadline: (state) => state.data.headers.expiresAt || 5000,\n      load: () => JSON.parse(localStorage.getItem("cities-cache")),\n      persist : cache => localStorage.setItem("cities-cache", JSON.stringify(cache)),\n    }\n  });\n\n  const posts = {\n    key: "posts",\n    producer: postsProducer,\n    config: {\n      cacheConfig: {\n        enabled: true, getDeadline: () => 50000,\n        hash: (args, payload) => "posts",\n        load: () => JSON.parse(localStorage.getItem("posts-cache")),\n        persist: cache => localStorage.setItem("posts-cache", JSON.stringify(cache)),\n      }\n    }\n  };\n')),(0,r.kt)("h2",{id:"producer-props"},"Producer ",(0,r.kt)("inlineCode",{parentName:"h2"},"props"),":"),(0,r.kt)("p",null,"The producer receives a single argument (called either ",(0,r.kt)("inlineCode",{parentName:"p"},"props")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"argv"),")."),(0,r.kt)("h3",{id:"payload"},(0,r.kt)("inlineCode",{parentName:"h3"},"payload")),(0,r.kt)("p",null,"The payload is gathered from the following from all subscribers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Either from ",(0,r.kt)("inlineCode",{parentName:"li"},"useAsyncState")," configuration object"),(0,r.kt)("li",{parentName:"ul"},"Or from ",(0,r.kt)("inlineCode",{parentName:"li"},"useAsyncState().mergePayload({...})")),(0,r.kt)("li",{parentName:"ul"},"Or ",(0,r.kt)("inlineCode",{parentName:"li"},"source.mergePayload"))),(0,r.kt)("p",null,"So it gives the producer the power of grabbing something from the anywhere."),(0,r.kt)("h3",{id:"lastsuccess"},(0,r.kt)("inlineCode",{parentName:"h3"},"lastSuccess")),(0,r.kt)("p",null,"This represents the last success ",(0,r.kt)("inlineCode",{parentName:"p"},"State")," registered by the library."),(0,r.kt)("p",null,"This is useful to use ",(0,r.kt)("inlineCode",{parentName:"p"},"reducers")," by the library or if you want to append\nthe last data with the new one (like infinite list etc)"),(0,r.kt)("h3",{id:"args"},(0,r.kt)("inlineCode",{parentName:"h3"},"args")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"args")," property is array of ",(0,r.kt)("inlineCode",{parentName:"p"},"arguments")," that the ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," function received\nwhen invoked."),(0,r.kt)("h3",{id:"isaborted"},(0,r.kt)("inlineCode",{parentName:"h3"},"isAborted")),(0,r.kt)("p",null,"A function returning a boolean indicating whether this run was aborted and not\nrelevant anymore (dependencies change/unmount)."),(0,r.kt)("h3",{id:"abort"},(0,r.kt)("inlineCode",{parentName:"h3"},"abort")),(0,r.kt)("p",null,"The same as ",(0,r.kt)("inlineCode",{parentName:"p"},"useAsyncState().abort")," function. Its goal is to mark the current\nrun as aborted (also invokes registered abort callbacks)."),(0,r.kt)("h3",{id:"onabort"},(0,r.kt)("inlineCode",{parentName:"h3"},"onAbort")),(0,r.kt)("p",null,"This allows the producer to be notified when the run is being aborted."),(0,r.kt)("p",null,"This can be used for all types of asynchronous cancellations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cancel fetch requests"),(0,r.kt)("li",{parentName:"ul"},"Cancel timeouts and intervals"),(0,r.kt)("li",{parentName:"ul"},"Cancel workers ..")),(0,r.kt)("h2",{id:"run-from-producer-producer-effects"},"Run from producer: ",(0,r.kt)("inlineCode",{parentName:"h2"},"Producer effects")),(0,r.kt)("p",null,"The producer function may select a state or run another, and either\ncare about its resolve value or not (same applies for the abort fn)."),(0,r.kt)("p",null,"This open us new horizons for the library as you can combine these features\nfor a more control in your app. "),(0,r.kt)("h3",{id:"propsrun"},(0,r.kt)("inlineCode",{parentName:"h3"},"props.run")),(0,r.kt)("p",null,"This function runs the given producer/async state. It can run:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"Source")," object"),(0,r.kt)("li",{parentName:"ul"},"A plain ",(0,r.kt)("inlineCode",{parentName:"li"},"Producer")),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," representing a state key.")),(0,r.kt)("p",null,"This function returns the ",(0,r.kt)("inlineCode",{parentName:"p"},"AbortFn")," of the execution, so it can be chained and\nregistered via ",(0,r.kt)("inlineCode",{parentName:"p"},"props.onAbort(props.run(...))")," for cascading cancellations."),(0,r.kt)("p",null,"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"run: <T>(input: ProducerPropsRunInput<T>, config: ProducerPropsRunConfig | null, ...args: any[] ) => AbortFn\n")),(0,r.kt)("p",null,"Where:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ProducerPropsRunInput")," may be a string, a source object, or a producer."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ProducerPropsRunConfig")," a configuration object:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Prop"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Usage"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lane")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},"Describes the ",(0,r.kt)("a",{parentName:"td",href:"/docs/api/use-async-state#lane"},"lane")," that will be ran")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fork")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fork")," is only relevant working with source or by a string key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"payload")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ [id: string]: any }")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"payload")," is only relevant (for now) when passing a producer function")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"...args"),", the ",(0,r.kt)("inlineCode",{parentName:"li"},"props.args")," of the resulting running producer.")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"props.run")," function returns its ",(0,r.kt)("inlineCode",{parentName:"p"},"AbortFn"),", so you can register it (if you care)\nin ",(0,r.kt)("inlineCode",{parentName:"p"},"props.onAbort(props.run(...))"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Running an async state by key or source or key will result in an update to\nall its subscribers.")),(0,r.kt)("h3",{id:"propsrunp"},(0,r.kt)("inlineCode",{parentName:"h3"},"props.runp")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"props.runp")," is similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"props.run"),", but rather than returning the abort\nfunction, it will return a ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise")," of the resulting state so you can wait it\nin the caller producer."),(0,r.kt)("p",null,"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"runp: <T>(input: ProducerPropsRunInput<T>, config: ProducerPropsRunConfig | null, ...args: any[] ) => Promise<State<T>> | undefined\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"async function weatherProducer(props) {\n  const location = await props.runp(fetchCurrentLocationProducer);\n  const weather = await props.runp(fetchWeather, null, location.data);\n  props.run(sendUsageDataProducer, null, {weather, location}); // <- props.run\n  return {weather, location};\n}\n\n")),(0,r.kt)("h3",{id:"propsemit"},(0,r.kt)("inlineCode",{parentName:"h3"},"props.emit")),(0,r.kt)("p",null,"The emit function changes the state from the producer, but only works after the\nproducer resolves (or else you get a warning, without effect)."),(0,r.kt)("p",null,"It was built to support subscriptions from the producer, to websocket and/or workers"),(0,r.kt)("p",null,"Its signature is the same as useAsyncState's ",(0,r.kt)("inlineCode",{parentName:"p"},"replaceState"),". It changes the state\ninstantly and imperatively to the desired value."),(0,r.kt)("p",null,"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"emit: (updater: T | StateFunctionUpdater<T>, status: Status) => void\n")),(0,r.kt)("p",null,"This feature allows the following easily:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// this is a producer that updates each second\n// Why adding an onAbort even if the producer itself is synchronous ?\n// The abort functions are garanteed to be run, if it is aborted, or the next time you run\n// or when you call abort directly\nfunction intervalProducer(props) {\n  let intervalId = setInterval(() => props.emit(old => old.data + 1), 1000);\n  props.onAbort(() => clearInterval(intervalId));\n  return props.args[0] ?? 0;\n}\n")),(0,r.kt)("p",null,"And this is what it takes to implement a websocket gateway in your client application"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'function brokerProducer(props) {\n  return new Promise((resolve, reject) => {\n    const ws = new WebSocket("ws://localhost:9091");\n    ws.addEventListener("error", (message) => {\n      reject({connected: false, error: message}); // <- first fulfillement with a rejection\n    });\n    ws.addEventListener("open", () => {\n      resolve({ws, connected: true}); // <- first resolve, props.emit doesn\'t work until this is called\n    });\n    ws.addEventListener("close", message => {\n      props.emit(message, "error"); // <- transition to error state \n    });\n    ws.addEventListener("message", (message) => {\n      const jsonData = JSON.parse(message.data);\n      const {to} = jsonData;\n      if (to) {\n        props.run(to, null, jsonData); // run another producer with the received message\n      }\n    });\n    props.onAbort(() => ws.close());\n  });\n}\n')),(0,r.kt)("h3",{id:"propsselect"},(0,r.kt)("inlineCode",{parentName:"h3"},"props.select")),(0,r.kt)("p",null,"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"select: <T>(input: AsyncStateKeyOrSource<T>) => State<T> | undefined\n")),(0,r.kt)("p",null,"Simply decodes your source object, or retrieves your async state by key\nand gives you its actual state, a pure read mode, no subscription."))}u.isMDXComponent=!0}}]);