(this.webpackJsonpnookdata_v2=this.webpackJsonpnookdata_v2||[]).push([[1],{127:function(e,t,a){},129:function(e,t,a){},131:function(e,t,a){},132:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),i=a(11),o=a.n(i),l=a(51),u=a(19),s=a(18),f=a(176),m=a(177),d=a(170),p=a(8),b=a(41),v=a(58),g=a(88),E="0.1.0";function h(){if(window.localStorage.settings||(window.localStorage.settings=JSON.stringify({theme:"dark",hemisphere:"north",islandName:"ISLAND",playerName:"PLAYER",timeOffset:0,useSystemTime:!0,useTwelveHourTime:!1})),!window.localStorage.critterpedia){for(var e={bugs:[],fish:[]},t=0;t<80;t++)e.bugs.push({obtained:!1,modelled:!1}),e.fish.push({obtained:!1,modelled:!1});window.localStorage.critterpedia=JSON.stringify(e)}window.localStorage.turnips||(window.localStorage.turnips=JSON.stringify({buy:null,mon:{am:null,pm:null},tue:{am:null,pm:null},wed:{am:null,pm:null},thu:{am:null,pm:null},fri:{am:null,pm:null},sat:{am:null,pm:null},previousPattern:g.a.UNKNOWN,firstBuy:!1})),window.localStorage.dataVersion=E}function O(){}!function(e){var t,a;(t||(t=e.PreNumber||(e.PreNumber={}))).upgrade=h,(a||(a=e.ND_0_1_0||(e.ND_0_1_0={}))).upgrade=O}(n||(n={}));var w=a(43),y=Object(r.lazy)((function(){return Promise.all([a.e(0),a.e(5)]).then(a.bind(null,317))})),k=Object(r.lazy)((function(){return Promise.all([a.e(0),a.e(4),a.e(6)]).then(a.bind(null,324))})),x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e){if("serviceWorker"in navigator){if(new URL("/nookdata_v2",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/nookdata_v2","/service-worker.js");x?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):S(t,e)}))}}function S(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var N=a(104),A={MuiTextField:{variant:"filled"},MuiSelect:{variant:"filled"},MuiFormControl:{variant:"filled"},MuiDialogTitle:{style:{textAlign:"center"}}},T=(a(83),Object(N.a)({palette:{type:"dark",opacity:.3,elevations:{0:{main:"#1e1e1e"},1:{main:"#292929"},2:{main:"#2e2e2e"},3:{main:"#303030"},4:{main:"#323232"},6:{main:"#373737"},8:{main:"#393939"},12:{main:"#3e3e3e"},16:{main:"#404040"},24:{main:"#424242"}},modelled:{main:"gold",transparent:"rgba(255, 215, 0, 0.3)"},winter:{main:"#3c84c6",transparent:"rgba(60, 132, 198, 0.3)",contrastText:"rgba(0,0,0,87%)"},spring:{main:"#38761c",transparent:"rgba(56, 118, 28, 0.3)",contrastText:"rgba(0,0,0,87%)"},summer:{main:"#e69038",transparent:"rgba(230, 144, 56, 0.3)",contrastText:"rgba(0,0,0,87%)"},autumn:{main:"#b45f04",transparent:"rgba(180, 95, 4, 0.3)",contrastText:"rgba(0,0,0,87%)"},primary:{main:"#bb86fc",contrastText:"rgba(0,0,0,87%)",transparent:"rgba(187, 134, 252, 0.3)"},secondary:{main:"#03dac6",contrastText:"rgba(0,0,0,87%)"},error:{main:"#cf6679",transparent:"rgba(207, 102, 121, 0.3)"},background:{paper:"#1e1e1e",default:"#121212"},text:{primary:"rgba(255,255,255,87%)",secondary:"rgba(255,255,255,60%)",hint:"rgba(255,255,255,60%)",disabled:"rgba(255,255,255,38%)"}},zIndex:{appBar:1250},props:A}));T.overrides={MuiAppBar:{colorPrimary:{backgroundColor:T.palette.background.paper,color:T.palette.primary.main},colorSecondary:{backgroundColor:T.palette.background.paper,color:T.palette.secondary.main},colorDefault:{backgroundColor:T.palette.background.paper,color:T.palette.text.primary}},MuiDrawer:{paper:{width:240}},MuiCard:{root:{borderWidth:1,borderColor:"rgba(255, 255, 255, 8%)",borderStyle:"solid"}},MuiCardHeader:{root:{paddingBottom:0,textAlign:"center"}},MuiListItemIcon:{root:{color:T.palette.text.secondary}}};var C=T,G=Object(N.a)({palette:{type:"light",opacity:.6,elevations:{0:{main:"#ffffff"},1:{main:"#ffffff"},2:{main:"#ffffff"},3:{main:"#ffffff"},4:{main:"#ffffff"},6:{main:"#ffffff"},8:{main:"#ffffff"},12:{main:"#ffffff"},16:{main:"#ffffff"},24:{main:"#ffffff"}},modelled:{main:"#fbc02d",transparent:"rgba(251, 192, 45, 0.5)"},winter:{main:"#3c84c6",transparent:"rgba(60, 132, 198, 0.6)",contrastText:"rgba(0,0,0,87%)"},spring:{main:"#38761c",transparent:"rgba(56, 118, 28, 0.6)",contrastText:"rgba(0,0,0,87%)"},summer:{main:"#e69038",transparent:"rgba(230, 144, 56, 0.6)",contrastText:"rgba(0,0,0,87%)"},autumn:{main:"#b45f04",transparent:"rgba(180, 95, 4, 0.6)",contrastText:"rgba(0,0,0,87%)"},primary:{main:"#6200ee",contrastText:"rgba(255,255,255,87%)",transparent:"rgba(98, 0, 238, 0.5)"},secondary:{main:"#03dac6",contrastText:"rgba(0,0,0,87%)"},error:{main:"#b00020",transparent:"rgba(176, 0, 32, 0.5)"},background:{paper:"#ffffff",default:"#eeeeee"},text:{primary:"rgba(0,0,0,87%)",secondary:"rgba(0,0,0,60%)",hint:"rgba(0,0,0,60%)",disabled:"rgba(0,0,0,38%)"}},zIndex:{appBar:1250},props:A});G.overrides={MuiDrawer:{paper:{width:240}},MuiCard:{root:{borderWidth:1,borderColor:"transparent",borderStyle:"solid"}},MuiCardHeader:{root:{paddingBottom:0,textAlign:"center"}}};var L=G;C.name="dark",L.name="light";var I={light:L,dark:C};function P(){!function(){if(window.localStorage.dataVersion!==E)switch(window.localStorage.dataVersion){case void 0:n.PreNumber.upgrade();break;default:console.log("Please do not mess with your data!")}}();var e=c.a.useState((function(){return JSON.parse(window.localStorage.settings)})),t=Object(s.a)(e,2),a=t[0],i=t[1];function o(e){window.localStorage.settings=JSON.stringify(e),i(e)}var l=c.a.useMemo((function(){return function(e){return I[e]}(a.theme)}),[a]),g=c.a.useState(!1),h=Object(s.a)(g,2),O=h[0],x=h[1],S=c.a.useState(!1),N=Object(s.a)(S,2),A=N[0],T=N[1],C=c.a.useState(!1),G=Object(s.a)(C,2),L=G[0],P=G[1],U=c.a.useState(!1),_=Object(s.a)(U,2),R=_[0],K=_[1];function M(e){console.log("setUpdateReady:",e),x(e),P(e)}function W(e){console.log("setWorksOffline:",e),T(e),K(e)}return c.a.useEffect((function(){j({onUpdate:function(e){return M(!0)},onSuccess:function(e){return W(!0)}})}),[]),c.a.createElement(f.a,{theme:l},c.a.createElement(v.a,{settings:a},c.a.createElement(m.a,null),c.a.createElement(b.b,{setTheme:function(e){document.body.classList.add("no-transition"),o(Object(u.a)(Object(u.a)({},a),{},{theme:e})),setTimeout((function(){return document.body.classList.remove("no-transition")}),10)},updateReady:O,worksOffline:A},c.a.createElement(r.Suspense,{fallback:c.a.createElement(b.f,null)},c.a.createElement(p.d,null,c.a.createElement(p.b,{path:"/critterpedia/:type/:index",render:function(e){var t=e.match,a=t.params.type,n=Object(w.g)(t.params.index,-1);return"bug"!==a&&"fish"!==a||n<0||n>79?c.a.createElement(p.a,{to:"/critterpedia"}):c.a.createElement(v.b,null,c.a.createElement(y,{load:{type:a,index:n}}))}}),c.a.createElement(p.b,{path:"/critterpedia",exact:!0},c.a.createElement(v.b,null,c.a.createElement(y,null))),c.a.createElement(p.b,{path:"/critterpedia"},c.a.createElement(p.a,{to:"/critterpedia"})),c.a.createElement(p.b,{path:"/turnips"},c.a.createElement(k,null)),c.a.createElement(p.b,{path:"/loading"},c.a.createElement(b.f,null)),c.a.createElement(p.b,{path:"/test"},c.a.createElement(d.a,{onClick:function(){return M(!O)}},"Toggle ",c.a.createElement("code",null,"updateReady")," (currently ",c.a.createElement("code",null,""+O),")"),c.a.createElement(d.a,{onClick:function(){return W(!A)}},"Toggle ",c.a.createElement("code",null,"worksOffline")," (currently ",c.a.createElement("code",null,""+A),")"))))),c.a.createElement(b.i,{open:R,setOpen:K}),c.a.createElement(b.h,{open:L,setOpen:P})))}var U=a(105),_=a(101),R=a(102),K=a(37);U.a.use(R.a).use(_.a).use(K.e).init({backend:{loadPath:"/nookdata_v2/assets/i18n/{{lng}}/{{ns}}.json"},fallbackLng:"en",debug:!1,interpolation:{escapeValue:!1},supportedLngs:["en","fr"],ns:"core",defaultNS:"core"});a(131);o.a.render(c.a.createElement(r.Suspense,{fallback:c.a.createElement(b.f,null)},c.a.createElement(l.a,{basename:w.f},c.a.createElement(P,null))),document.getElementById("root"))},41:function(e,t,a){"use strict";a.d(t,"a",(function(){return g})),a.d(t,"b",(function(){return z})),a.d(t,"c",(function(){return Y})),a.d(t,"d",(function(){return V})),a.d(t,"e",(function(){return q})),a.d(t,"f",(function(){return Q})),a.d(t,"g",(function(){return ee})),a.d(t,"h",(function(){return te})),a.d(t,"i",(function(){return ae}));var n=a(159),r=a(160),c=a(161),i=a(97),o=a.n(i),l=a(0),u=a.n(l),s=a(25),f=a(156),m=a(154);function d(e){var t=e.tooltip,a=e.children;return u.a.createElement("div",{title:t},a)}function p(){var e=Object(m.a)("service").t,t=Object(s.a)();return u.a.createElement(d,{tooltip:e("service:available_update.title")},u.a.createElement(f.a,{style:{color:t.palette.success.main}}))}var b=a(158);function v(){var e=Object(m.a)("service").t;return u.a.createElement(d,{tooltip:e("service:available_update.title")},u.a.createElement(b.a,null))}var g=function(e){return u.a.createElement(u.a.Fragment,null,u.a.createElement(n.a,{position:"fixed"},u.a.createElement(r.a,null,u.a.createElement(c.a,{edge:"start",color:"inherit","aria-label":"menu",style:{marginRight:16},onClick:function(){return e.setDrawerOpen(!e.drawerOpen)}},u.a.createElement(o.a,null)),u.a.createElement("div",{style:{flexGrow:1}},e.title),e.updateReady&&u.a.createElement(p,null),e.worksOffline&&u.a.createElement(v,null))),u.a.createElement(r.a,null))},E=a(18),h=a(172),O=a(54),w=a(168),y=a(162),k=a(173),x=a(164),j=a(171),S=a(174),N=a(175),A=a(99),T=a.n(A),C=a(100),G=a.n(C),L=a(163),I=a(181),P=a(165),U=a(166),_=a(167),R=a(169),K=a(170),M=a(180),W={branch:"master",tags:[],commit:{shortHash:"3bf3358",hash:"3bf3358176227ca8c0735c92a0068fb354c0824e",date:"2021-06-03T21:39:15+01:00",message:"Fix context\nwhy is class context so bad? I don't know :D\nAlso split turnip graph but suspense doesn't do what I expected"}};function D(e){var t=e.name,a=e.avatarUrl,n=e.t;return u.a.createElement(y.a,{style:{padding:"8px 32px"},button:!0,component:"a",href:"https://github.com/Starwort/nookdata_v2/commits?author=".concat(t),target:"_blank",title:n("core:info.contrib.tooltip",{name:t})},u.a.createElement(L.a,null,u.a.createElement(I.a,{alt:n("core:alt.avatar",{name:t}),src:a})),u.a.createElement(x.a,{primary:t,secondary:n("core:info.contrib.".concat(t.toLowerCase()))}))}function F(e){var t=Object(m.a)("core").t,a=Object(s.a)();return u.a.createElement(P.a,{open:e.open,onClose:function(){return e.setOpen(!1)}},u.a.createElement(U.a,null,t("core:info.title")),u.a.createElement(_.a,null,u.a.createElement(M.a,{i18nKey:"core:info.description",t:t},"You are currently viewing NookData revision",u.a.createElement("a",{href:"https://github.com/Starwort/nookdata_v2/commit/".concat(W.commit.hash),style:{color:a.palette.primary.main,textUnderlineOffset:2}},{gitRevision:W.commit.shortHash}),"."),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement(Y,null,u.a.createElement(O.a,{variant:"subtitle1"},t("core:info.contrib.title"))),u.a.createElement(Y,null,u.a.createElement(O.a,{variant:"subtitle2"},t("core:info.contrib.subtitle")))),u.a.createElement(w.a,null,u.a.createElement(D,{name:"Starwort",avatarUrl:"https://avatars.githubusercontent.com/u/16487249",t:t}),u.a.createElement(D,{name:"EloLeChan",avatarUrl:"https://avatars.githubusercontent.com/u/83836335",t:t})),u.a.createElement(R.a,null,u.a.createElement(K.a,{onClick:function(){return e.setOpen(!1)}},t("core:ui.dismiss"))))}function J(e){var t=Object(m.a)("core").t;return u.a.createElement(P.a,{"aria-labelledby":"lang-dialogue-title",open:e.open,PaperProps:{style:{width:250}}},u.a.createElement(U.a,{style:{textAlign:"center"},id:"lang-dialogue-title"},t("core:lang.choose")),u.a.createElement(w.a,null,u.a.createElement(y.a,{style:{textAlign:"center"},button:!0,onClick:function(){return e.setLang("en")}},u.a.createElement(x.a,{primary:t("core:lang.en")})),u.a.createElement(y.a,{style:{textAlign:"center"},button:!0,onClick:function(){return e.setLang("fr")}},u.a.createElement(x.a,{primary:t("core:lang.fr")}))))}var B={"/critterpedia":{title:"core:pages.critterpedia",icon:u.a.createElement(j.a,null)}},H=10;function z(e){var t=Object(s.a)(),a=Object(h.a)(t.breakpoints.up("lg")),n=u.a.useState(!1),r=Object(E.a)(n,2),c=r[0],i=r[1];H&&(console.log(H,a),a&&!c?(H=0,i(!0)):H--);var o=Object(m.a)("core"),l=o.t,f=o.i18n,d=u.a.useState(!1),p=Object(E.a)(d,2),b=p[0],v=p[1],j=u.a.useState(!1),A=Object(E.a)(j,2),C=A[0],L=A[1],I="dark"===t.name?"light":"dark";return u.a.createElement(u.a.Fragment,null,u.a.createElement(g,{setDrawerOpen:i,drawerOpen:c,title:u.a.createElement(O.a,{variant:"h6"},u.a.createElement("div",{style:{color:t.palette.winter.main,display:"inline"}},l("title.a")),u.a.createElement("div",{style:{color:t.palette.summer.main,display:"inline"}},l("title.b"))),updateReady:e.updateReady,worksOffline:e.worksOffline}),u.a.createElement(ee,{open:c,setOpen:i},u.a.createElement(w.a,null,Object.entries(B).map((function(e){var t=Object(E.a)(e,2),a=t[0],n=t[1];return u.a.createElement(q,{key:a,to:a,icon:n.icon,primary:l(n.title)})}))),u.a.createElement("div",{style:{flexGrow:1}}),u.a.createElement(y.a,{button:!0,onClick:function(){return L(!0)}},u.a.createElement(k.a,null,u.a.createElement(S.a,null)),u.a.createElement(x.a,{primary:l("core:sidebar.about")})),u.a.createElement(y.a,{button:!0,onClick:function(){return v(!0)}},u.a.createElement(k.a,null,u.a.createElement(N.a,null)),u.a.createElement(x.a,{primary:l("core:sidebar.lang")})),u.a.createElement(y.a,{button:!0,onClick:function(){return e.setTheme(I)}},u.a.createElement(k.a,null,"dark"===I?u.a.createElement(T.a,null):u.a.createElement(G.a,null)),u.a.createElement(x.a,{primary:l("core:sidebar.theme")}))),u.a.createElement(J,{open:b,setLang:function(e){f.changeLanguage(e),v(!1)}}),u.a.createElement(F,{open:C,setOpen:L}),u.a.createElement(V,{active:c},e.children))}a(127);function Y(e){return u.a.createElement("div",{className:"centred"},e.children)}function V(e){var t=Object(s.a)(),a=Object(h.a)(t.breakpoints.up("sm"));return u.a.createElement("div",{style:{paddingLeft:240*+e.active*+a,transition:"padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms"}},e.children)}var $=a(51);function q(e){var t=e.icon,a=e.primary,n=e.to,r=e.exact,c=u.a.useMemo((function(){return u.a.forwardRef((function(e,t){return u.a.createElement($.b,Object.assign({to:n,ref:t},e,{activeClassName:"Mui-selected",exact:r}))}))}),[n]);return u.a.createElement(y.a,{button:!0,component:c},t?u.a.createElement(k.a,null,t):null,u.a.createElement(x.a,{primary:a}))}a(129);function Q(){var e=Object(s.a)();return u.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:"loader ".concat(e.name)},u.a.createElement("source",{src:"assets/shared/loading.gif.webm",type:"video/webm"}),u.a.createElement("source",{src:"assets/shared/loading.gif.mp4",type:"video/mp4"}))}var X=a(179),Z=a(182);var ee=function(e){var t=Object(s.a)(),a=void 0!==window?function(){return window.document.body}:void 0;return u.a.createElement(u.a.Fragment,null,u.a.createElement(X.a,{smUp:!0},u.a.createElement(Z.a,{variant:"temporary",container:a,anchor:"rtl"===t.direction?"right":"left",open:e.open,onClose:function(){return e.setOpen(!1)}},e.children)),u.a.createElement(X.a,{xsDown:!0},u.a.createElement(Z.a,{variant:"persistent",anchor:"rtl"===t.direction?"right":"left",open:e.open},u.a.createElement(r.a,null),e.children)))};function te(e){var t=Object(m.a)(["service","core"]).t;return u.a.createElement(P.a,{open:e.open,onClose:function(){return e.setOpen(!1)}},u.a.createElement(U.a,null,t("service:available_update.title")),u.a.createElement(_.a,null,t("service:available_update.content")),u.a.createElement(R.a,null,u.a.createElement(K.a,{variant:"text",onClick:function(){return e.setOpen(!1)}},t("core:ui.dismiss"))))}function ae(e){var t=Object(m.a)(["service","core"]).t;return u.a.createElement(P.a,{open:e.open,onClose:function(){return e.setOpen(!1)}},u.a.createElement(U.a,null,t("service:available_offline.title")),u.a.createElement(_.a,null,t("service:available_offline.content")),u.a.createElement(R.a,null,u.a.createElement(K.a,{variant:"text",onClick:function(){return e.setOpen(!1)}},t("core:ui.dismiss"))))}},43:function(e,t,a){"use strict";a.d(t,"d",(function(){return o})),a.d(t,"f",(function(){return l})),a.d(t,"c",(function(){return u})),a.d(t,"g",(function(){return s})),a.d(t,"e",(function(){return f})),a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d})),a.d(t,"h",(function(){return p}));var n,r=a(9),c=a.n(r),i=c.a.mark(p);function o(e){var t,a=null!==(t=n)&&void 0!==t?t:((n=document.createElement("div")).style.position="absolute",n.style.top="-9999px",n.style.left="-9999px",document.body.appendChild(n),n);return a.innerText=e,a.clientWidth}var l="/nookdata_v2";function u(e,t){return void 0!==e?JSON.parse(e):t}function s(e,t){var a=e?+e:t;return isNaN(a)?t:a}function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return void 0===t&&(t=e,e=0,1==a)?Array.from(Array(t).keys()):Array(Math.ceil((t-e)/a)).fill(e).map((function(e,t){return e+t*a}))}function m(e){return e.reduce((function(e,t){return e&&t}),!0)}function d(e){return JSON.parse(JSON.stringify(e))}function p(){var e,t,a,n,r,o=arguments;return c.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:for(e=o.length,t=new Array(e),a=0;a<e;a++)t[a]=o[a];if(!(t.length<1)){i.next=3;break}return i.abrupt("return");case 3:n=c.a.mark((function e(a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.map((function(e){return e[a]}));case 2:case"end":return e.stop()}}),e)})),r=0;case 5:if(!(r<t.reduce((function(e,t){var a=t.length;return Math.min(e,a)}),1/0))){i.next=10;break}return i.delegateYield(n(r),"t0",7);case 7:r++,i.next=5;break;case 10:case"end":return i.stop()}}),i)}},58:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return f})),a.d(t,"c",(function(){return m}));var n=a(18),r=a(0),c=a.n(r),i={theme:"dark",hemisphere:"north",islandName:"Gloverboia",playerName:"Starwort",timeOffset:0,useSystemTime:!0,useTwelveHourTime:!0},o=new Date,l=c.a.createContext(i),u=c.a.createContext(o);function s(e){var t=e.interval,a=e.children,r=c.a.useState(o),i=Object(n.a)(r,2),l=i[0],s=i[1];return c.a.useEffect((function(){var e=window.setInterval((function(){return s(new Date)}),null!==t&&void 0!==t?t:500);return function(){window.clearInterval(e)}}),[t]),c.a.createElement(u.Provider,{value:l},a)}function f(e){var t=e.settings,a=e.children;return c.a.createElement(l.Provider,{value:t},a)}function m(){return{time:Object(r.useContext)(u),settings:Object(r.useContext)(l)}}},83:function(e,t,a){"use strict";String.prototype.capitalise=function(){return this.charAt(0).toUpperCase()+this.slice(1)},Array.prototype.rotated=function(e){return e%=this.length,this.slice(e,this.length).concat(this.slice(0,e))},Array.prototype.rotate=function(e){for(e%=this.length;this.length&&e<0;)e+=this.length;return this.push.apply(this,this.splice(0,e)),this}},88:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"c",(function(){return K})),a.d(t,"b",(function(){return M})),a.d(t,"e",(function(){return W})),a.d(t,"d",(function(){return D})),a.d(t,"f",(function(){return F}));var n,r,c,i,o,l,u=a(18),s=a(44),f=a(9),m=a.n(f),d=a(6),p=a(23),b=a(43),v=m.a.mark(S),g=m.a.mark(T),E=m.a.mark(C),h=m.a.mark(G),O=m.a.mark(L),w=m.a.mark(I),y=m.a.mark(P);function k(e,t,a){var n=(e+t)/2*a+.5;return{min:e=Math.ceil(e*a),max:t=Math.ceil(t*a),avg:n}}function x(e,t){return null===t||e.min<=t&&t<=e.max}!function(e){e[e.FLUCTUATING=0]="FLUCTUATING",e[e.LARGE_SPIKE=1]="LARGE_SPIKE",e[e.DECREASING=2]="DECREASING",e[e.SMALL_SPIKE=3]="SMALL_SPIKE",e[e.UNKNOWN=4]="UNKNOWN",e[e.AGGREGATE=5]="AGGREGATE"}(l||(l={}));var j=(n={},Object(d.a)(n,l.FLUCTUATING,.2),Object(d.a)(n,l.LARGE_SPIKE,.5),Object(d.a)(n,l.DECREASING,.25),Object(d.a)(n,l.SMALL_SPIKE,.45),Object(d.a)(n,l.UNKNOWN,.25),Object(d.a)(n,l.AGGREGATE,.25),n);r={},Object(d.a)(r,l.FLUCTUATING,.3),Object(d.a)(r,l.LARGE_SPIKE,.05),Object(d.a)(r,l.DECREASING,.45),Object(d.a)(r,l.SMALL_SPIKE,.25),Object(d.a)(r,l.UNKNOWN,.25),Object(d.a)(r,l.AGGREGATE,.25),c={},Object(d.a)(c,l.FLUCTUATING,.15),Object(d.a)(c,l.LARGE_SPIKE,.2),Object(d.a)(c,l.DECREASING,.05),Object(d.a)(c,l.SMALL_SPIKE,.15),Object(d.a)(c,l.UNKNOWN,.25),Object(d.a)(c,l.AGGREGATE,.25),i={},Object(d.a)(i,l.FLUCTUATING,.35),Object(d.a)(i,l.LARGE_SPIKE,.25),Object(d.a)(i,l.DECREASING,.25),Object(d.a)(i,l.SMALL_SPIKE,.15),Object(d.a)(i,l.UNKNOWN,.25),Object(d.a)(i,l.AGGREGATE,.25);function S(e,t,a,n){var r,c;return m.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(r=k(.9,1.4,e),c=t.slice(a,a+n),Object(b.a)(c.map((function(e){return x(r,e)})))){i.next=4;break}return i.abrupt("return");case 4:return i.next=6,c.map((function(e){return e?{min:e,max:e,avg:e}:r}));case 6:case"end":return i.stop()}}),v)}function N(e,t){return(t-1)/e}function A(e,t){return t/e}function T(e,t,a,n){var r,c,i,o,l,u,s,f,d,p;return m.a.wrap((function(m){for(;;)switch(m.prev=m.next){case 0:r=t.slice(a,a+n),c=[],i=[.6],o=[.8],l=!1,u=0;case 6:if(!(u<n)){m.next=25;break}if(!(s=r[u])){m.next=19;break}if(f=N(e,s),!((d=A(e,s))<i[u]||f>o[u])){m.next=13;break}return m.abrupt("return");case 13:c.push({min:s,max:s,avg:s}),i[u]=f,o[u]=d,l=!0,m.next=20;break;case 19:c.push(k(i[u],o[u],e));case 20:i.push(i[u]-.1),o.push(o[u]-.04);case 22:u++,m.next=6;break;case 25:if(l)for(p=n-2;p>=0;p--)i[p]<i[p+1]&&(i[p]=i[p+1]+.04,c[p].min=Math.ceil(i[p]*e),c[p].avg=(i[p]+o[p])/2*e);return m.next=28,c;case 28:case"end":return m.stop()}}),g)}function C(e,t,a){var n,r,c,i,o,u,f,d,b,v,g,h,O,w,y,k,x,j,N,A,C,G,L,I;return m.a.wrap((function(m){for(;;)switch(m.prev=m.next){case 0:n=e/14,r=0;case 2:if(!(r<=6)){m.next=97;break}c=7-r,i=Object(s.a)(S(t,a,1,r)),m.prev=5,i.s();case 7:if((o=i.n()).done){m.next=86;break}u=o.value,f=0,d=[2,3];case 10:if(!(f<d.length)){m.next=84;break}b=d[f],g=5-(v=b),h=Object(s.a)(T(t,a,1+r,v)),m.prev=15,h.s();case 17:if((O=h.n()).done){m.next=73;break}w=O.value,y=0;case 20:if(!(y<c)){m.next=71;break}k=Object(s.a)(S(t,a,1+r+v,c-y)),m.prev=22,k.s();case 24:if((x=k.n()).done){m.next=60;break}j=x.value,N=Object(s.a)(T(t,a,8+v-y,g)),m.prev=27,N.s();case 29:if((A=N.n()).done){m.next=50;break}C=A.value,G=Object(s.a)(S(t,a,13-y,y)),m.prev=32,G.s();case 34:if((L=G.n()).done){m.next=40;break}return I=L.value,m.next=38,{pattern:l.FLUCTUATING,chance:n/c,hours:[{min:t,max:t,avg:t}].concat(Object(p.a)(u),Object(p.a)(w),Object(p.a)(j),Object(p.a)(C),Object(p.a)(I))};case 38:m.next=34;break;case 40:m.next=45;break;case 42:m.prev=42,m.t0=m.catch(32),G.e(m.t0);case 45:return m.prev=45,G.f(),m.finish(45);case 48:m.next=29;break;case 50:m.next=55;break;case 52:m.prev=52,m.t1=m.catch(27),N.e(m.t1);case 55:return m.prev=55,N.f(),m.finish(55);case 58:m.next=24;break;case 60:m.next=65;break;case 62:m.prev=62,m.t2=m.catch(22),k.e(m.t2);case 65:return m.prev=65,k.f(),m.finish(65);case 68:y++,m.next=20;break;case 71:m.next=17;break;case 73:m.next=78;break;case 75:m.prev=75,m.t3=m.catch(15),h.e(m.t3);case 78:return m.prev=78,h.f(),m.finish(78);case 81:f++,m.next=10;break;case 84:m.next=7;break;case 86:m.next=91;break;case 88:m.prev=88,m.t4=m.catch(5),i.e(m.t4);case 91:return m.prev=91,i.f(),m.finish(91);case 94:r++,m.next=2;break;case 97:case"end":return m.stop()}}),E,null,[[5,88,91,94],[15,75,78,81],[22,62,65,68],[27,52,55,58],[32,42,45,48]])}function G(e,t){var a;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null===t[0]){n.next=2;break}return n.delegateYield(C(e,t[0],t),"t0",2);case 2:a=90;case 3:if(!(a<=110)){n.next=8;break}return n.delegateYield(C(e/20,a,t),"t1",5);case 5:a++,n.next=3;break;case 8:case"end":return n.stop()}}),h)}function L(e,t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),O)}function I(e,t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),w)}function P(e,t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),y)}function U(e){return[e.buy,e.mon.am,e.mon.pm,e.tue.am,e.tue.pm,e.wed.am,e.wed.pm,e.thu.am,e.thu.pm,e.fri.am,e.fri.pm,e.sat.am,e.sat.pm]}var _=[90,36,32,27,23,18,14,9,27,23,18,14,9],R=[110,154,154,220,660,660,660,660,660,660,660,220,219];function K(e){var t,a=Object(s.a)(Object(b.h)(_,R,U(e)));try{for(a.s();!(t=a.n()).done;){var n=Object(u.a)(t.value,3),r=n[0],c=n[1],i=n[2];if(null!==i&&(i<r||i>c))return!1}}catch(o){a.e(o)}finally{a.f()}return!0}function M(e){if(!K(e))return[];var t=j[e.previousPattern],a=(e.previousPattern,e.previousPattern,e.previousPattern,U(e));return[].concat(Object(p.a)(G(t,a)),Object(p.a)(L()),Object(p.a)(I()),Object(p.a)(P()))}function W(e){if(!K(e))return l.UNKNOWN;var t=j[e.previousPattern],a=(e.previousPattern,e.previousPattern,e.previousPattern,U(e));switch([!G(t,a).next().done,!L().next().done,!I().next().done,!P().next().done]){case[!0,!1,!1,!1]:return l.FLUCTUATING;case[!1,!0,!1,!1]:return l.LARGE_SPIKE;case[!1,!1,!0,!1]:return l.DECREASING;case[!1,!1,!1,!0]:return l.SMALL_SPIKE;default:return l.UNKNOWN}}var D={buy:null,mon:{am:null,pm:null},tue:{am:null,pm:null},wed:{am:null,pm:null},thu:{am:null,pm:null},fri:{am:null,pm:null},sat:{am:null,pm:null},previousPattern:l.UNKNOWN,firstBuy:!1},F=(o={},Object(d.a)(o,l.AGGREGATE,(function(e){return"rgba(255, 255, 255, ".concat(e,")")})),Object(d.a)(o,l.FLUCTUATING,(function(e){return"rgba(255, 0, 0, ".concat(e,")")})),Object(d.a)(o,l.LARGE_SPIKE,(function(e){return"rgba(0, 255, 0, ".concat(e,")")})),Object(d.a)(o,l.DECREASING,(function(e){return"rgba(0, 255, 255, ".concat(e,")")})),Object(d.a)(o,l.SMALL_SPIKE,(function(e){return"rgba(127, 0, 255, ".concat(e,")")})),Object(d.a)(o,l.UNKNOWN,(function(e){throw new Error("wtf")})),o)}},[[132,2,3]]]);
//# sourceMappingURL=main.850455d5.chunk.js.map