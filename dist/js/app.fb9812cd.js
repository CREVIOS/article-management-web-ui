(function(e){function t(t){for(var a,o,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)o=s[l],r[o]&&d.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},o={app:0},r={app:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-390992d8":"28f43f44","chunk-3b568076":"c517d5a7"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-390992d8":1,"chunk-3b568076":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-390992d8":"c37f8be1","chunk-3b568076":"c60d0e2e"}[e]+".css",r=c.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===r))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===a||l===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.request=a,delete o[e],f.parentNode.removeChild(f),n(i)},f.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(f)}).then(function(){o[e]=0}));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise(function(t,n){a=r[e]=[t,n]});t.push(a[2]=i);var u,l=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(e),u=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+a+": "+o+")");i.type=a,i.request=o,n[1](i)}r[e]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:d})},12e4);d.onerror=d.onload=u,l.appendChild(d)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1e1f":function(e,t,n){"use strict";n("456d"),n("ac6a");var a=n("d4ec"),o=n("bee2"),r=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(a["a"])(this,e),this.endpoint=t,this.parameters=n}return Object(o["a"])(e,[{key:"setParameters",value:function(e){var t=this;return Object.keys(e).forEach(function(n){t.parameters[n]=e[n]}),this}},{key:"setParameter",value:function(e,t){return this.parameters[e]=t,this}},{key:"removeParameters",value:function(e){var t=this;return e.forEach(function(e){delete t.parameters[e]}),this}},{key:"removeParameter",value:function(e){return delete this.parameters[e],this}},{key:"submit",value:function(e,t){arguments.length>2&&void 0!==arguments[2]&&arguments[2];var n={method:e};return"get"!=e.toLowerCase()&&n.body,fetch(t+this.getParameterString(),n)}},{key:"all",value:function(){return this.submit("get","/".concat(this.endpoint))}},{key:"find",value:function(e){return this.submit("get","/".concat(this.endpoint,"/").concat(e))}},{key:"create",value:function(e){return this.submit("post","/".concat(this.endpoint),e)}},{key:"update",value:function(e,t){return this.submit("put","/".concat(this.endpoint,"/").concat(e),t)}},{key:"destroy",value:function(e){return this.submit("delete","/".concat(this.endpoint,"/").concat(e))}},{key:"getParameterString",value:function(){var e=this,t=Object.keys(this.parameters),n=t.filter(function(t){return!!e.parameters[t]}).map(function(t){return"".concat(t,"=").concat(e.parameters[t])});return 0===n.length?"":"?".concat(n.join("&"))}}]),e}();t["a"]=r},"458f":function(e,t,n){},5452:function(e,t,n){"use strict";var a=n("fb7c"),o=n.n(a);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),o=n("a65d"),r=n.n(o);n("c789");a["a"].use(r.a,{position:"bottom-left",duration:5e3}),a["a"].toasted.register("error_message","That didn't work! Please try again.",{singleton:!0,action:{text:"done",onClick:function(e,t){t.goAway(0)}},icon:"error"}),a["a"].toasted.register("loading_message",function(e){return e.message?e.message:"Loading..."},{singleton:!0,action:{text:"cancel",onClick:function(e,t){t.goAway(0)}},icon:"sync",className:"rotating"});var i=n("2f62");a["a"].use(i["a"]);var s,c,u=n("8c4f"),l=[{path:"/articles",name:"home.index",component:function(){return n.e("chunk-390992d8").then(n.bind(null,"8a00"))},meta:{title:"Home",auth:!0}},{path:"/",name:"login.index",component:function(){return n.e("chunk-3b568076").then(n.bind(null,"e426"))},meta:{title:"Login",guest:!0}}],d="SET",f=function(e,t){var n=e.commit;n(d,t)},h={setUser:f},m={},g=n("ade3"),p=(n("f751"),Object(g["a"])({},d,function(e,t){Object.assign(e,t)})),v={email:null,name:null,level:null,position:null,articlesEdited:0,articlesEditing:0},b={namespaced:!0,actions:h,getters:m,mutations:p,state:v},y="CHECK",k="LOGIN",w="LOGOUT",_=n("5b0b"),j=function(e){var t=e.commit;t(y)},O=function(e,t){var n=e.commit,o=a["a"].toasted.show("Requesting code...",{icon:"sync",className:"rotating"});(new _["a"]).requestCode(t).then(function(e){return e.json()}).then(function(e){console.log(e),e.error?(o.goAway(0),a["a"].toasted.show("".concat(e.error.message),{icon:"error"})):e.email?(n(y,!0),o.goAway(0),a["a"].toasted.show("Code sent to ".concat(e.email),{icon:"mail"})):(n(y,!1),a["a"].toasted.global.error_message())}).catch(function(e){console.log(e)})},T=function(e,t){var n=e.commit,o=a["a"].toasted.global.loading_message({message:"Logging in..."});(new _["a"]).login(t.email,t.code).then(function(e){return e.json()}).then(function(e){console.log(e),e.error?a["a"].toasted.show("Error: ".concat(e.error.error)):e.user?(n(k,e),o.goAway(0),a["a"].toasted.show("Logged in as ".concat(t.email),{icon:"how_to_reg"}),a["a"].router.push({name:"home.index"})):(n(y,!1),a["a"].toasted.global.error_message())}).catch(function(e){console.log(e)})},A=function(e,t){var n=e.commit,o=a["a"].toasted.global.loading_message({message:"Verifying previous session..."});(new _["a"]).verifyToken(t).then(function(e){return e.json()}).then(function(e){if(o.goAway(0),e.user){var r=e.user;n(k,{user:r,authToken:t}),a["a"].toasted.show("Logged in with previous session",{icon:"person"}),a["a"].router.push({name:"home.index"})}else a["a"].toasted.show("Please log in again",{icon:"domain_disabled"}),n(w)})},E=function(e){var t=e.commit;t(w),a["a"].router.push({name:"login.index"})},C={check:j,requestCode:O,login:T,logout:E,verifyToken:A},x=n("e8df"),P=n.n(x),S=n("a78e"),L=n.n(S),R=(s={},Object(g["a"])(s,y,function(e,t){e.codeRequested=t}),Object(g["a"])(s,k,function(e,t){var n=t.user,a=t.authToken;console.log(n,a),e.authenticated=!0,e.authToken=a,G.dispatch("user/setUser",n),L.a.set("authToken",a,{expires:1})}),s),q={email:null,code:null,codeRequested:!1,authenticated:!1,authToken:""},I={namespaced:!0,actions:C,getters:P.a,mutations:R,state:q},N="ARTICLES",M="ACTIVEARTICLE",U=function(e,t){var n=e.commit,o=a["a"].toasted.global.loading_message({message:"Fetching articles..."});G.state.auth.authToken||a["a"].toasted.global.error_message(),(new _["a"]).fetchArticles(G.state.auth.authToken,t).then(function(e){return e.json()}).then(function(e){console.log(e),e.error?a["a"].toasted.show("Error: ".concat(e.error.error)):e instanceof Array?(n(N,e),o.goAway(0)):a["a"].toasted.global.error_message()}).catch(function(e){console.log(e)})},$=function(e,t){var n=e.commit;t||a["a"].toasted.global.error_message(),n(M,t)},D={list:U,setActive:$},H=(c={},Object(g["a"])(c,N,function(e,t){e.articles=t}),Object(g["a"])(c,M,function(e,t){t&&(e.activeArticle=t)}),c),B={articles:[],filteredArticles:[],states:["All","Published","Ready to Publish","Final Review","In Review","Passed Data Check","Failed Data Check","Technical Review","Revisions Requested","Submitted","Rejected"],activeArticle:null},F={namespaced:!0,actions:D,getters:void 0,mutations:H,state:B},V=!1;a["a"].use(i["a"]);var G=new i["a"].Store({modules:{user:b,auth:I,articles:F},state:{title:String},mutations:{updateTitle:function(e,t){e.title="AMS - ".concat(t)}},strict:V});a["a"].use(u["a"]);var J=new u["a"]({routes:l});J.beforeEach(function(e,t,n){G.commit("updateTitle",e.meta.title),e.matched.some(function(e){return e.meta.auth})&&!G.state.auth.authenticated?n({name:"login.index"}):e.matched.some(function(e){return e.meta.guest})&&G.state.auth.authenticated?n({name:"home.index"}):n()}),a["a"].router=J;n("88ce");var K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-header"),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)},z=[],Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[e._m(0),n("h1",{attrs:{id:"title"}},[e._v(e._s(this.$store.state.title))]),e.user.name?n("user-info-dropdown",{attrs:{user:e.user}}):e._e()],1)},W=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{attrs:{href:"/"}},[n("img",{attrs:{src:"//assets.ysjournal.com/img/head-transparent.png"}})])}],X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"root"},[n("span",{staticClass:"position"},[e._v(e._s(e.user.position))]),n("span",{staticClass:"name"},[e._v(e._s(e.user.name))])])},Y=[],Z={name:"UserInfoDropdown",props:{user:{}}},ee=Z,te=(n("940a"),n("2877")),ne=Object(te["a"])(ee,X,Y,!1,null,"1b2e087e",null);ne.options.__file="UserInfoDropdown.vue";var ae=ne.exports,oe={name:"Header",components:{UserInfoDropdown:ae},data:function(){return{user:this.$store.state.user}}},re=oe,ie=(n("5452"),Object(te["a"])(re,Q,W,!1,null,null,null));ie.options.__file="Header.vue";var se=ie.exports,ce={name:"ArticleManagement",components:{VHeader:se},computed:{}},ue=ce,le=(n("5c0b"),Object(te["a"])(ue,K,z,!1,null,null,null));le.options.__file="App.vue";var de=le.exports;a["a"].config.productionTip=!1,new a["a"]({el:"#app",router:J,store:G,render:function(e){return e(de)}})},"5b0b":function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return u});n("f751");var a=n("d4ec"),o=n("bee2"),r=n("99de"),i=n("7e84"),s=n("262e"),c=(n("cadf"),n("551c"),n("097d"),n("1e1f")),u=function(t){function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{callback:""};return Object(a["a"])(this,n),Object(r["a"])(this,Object(i["a"])(n).call(this,e?"https://ysj-article-management.herokuapp.com":"http://localhost:8000",t))}return Object(s["a"])(n,t),Object(o["a"])(n,[{key:"requestCode",value:function(e){var t={email:e};return Object.assign(this.parameters,t),console.log(t),this.submit("get","".concat(this.endpoint,"/authentication/authenticate"),t)}},{key:"login",value:function(e,t){var n={email:e,key:t};return Object.assign(this.parameters,n),this.submit("get","".concat(this.endpoint,"/authentication/authenticate"),n)}},{key:"verifyToken",value:function(e){var t={authToken:e};return Object.assign(this.parameters,t),this.submit("get","".concat(this.endpoint,"/authentication/authenticate"),t)}},{key:"fetchArticles",value:function(e,t){var n={authToken:e,q:t};return Object.assign(this.parameters,n),this.submit("get","".concat(this.endpoint,"/articles/list"))}}]),n}(c["a"])}).call(this,n("4362"))},"5c0b":function(e,t,n){"use strict";var a=n("458f"),o=n.n(a);o.a},"81bf":function(e,t,n){},"88ce":function(e,t,n){},"940a":function(e,t,n){"use strict";var a=n("81bf"),o=n.n(a);o.a},e8df:function(e,t){},fb7c:function(e,t,n){}});
//# sourceMappingURL=app.fb9812cd.js.map