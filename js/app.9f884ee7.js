(function(t){function e(e){for(var s,r,o=e[0],l=e[1],u=e[2],d=0,f=[];d<o.length;d++)r=o[d],n[r]&&f.push(n[r][0]),n[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);c&&c(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},n={app:0},i=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var c=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("64a9"),n=a.n(s);n.a},"1eb5":function(t,e,a){},"4e97":function(t,e,a){t.exports=a.p+"img/founder.sam.99a461e1.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("uziday-navbar",{class:[t.uzidayNavbar?"is-activated-navbar-comp":""]}),a("router-view")],1)},i=[],r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"uziday-comp"},[a("nav",{staticClass:"level uziday-has-background-primary navbar anywhere-navbar is-light is-fixed-top"},[a("a",{staticClass:"level-item has-text-centered"},[a("p",{staticClass:"title-website title is-4 has-text-white"},[t._v("UziDay")])])])])])}],l={},u=l,c=a("2877"),d=Object(c["a"])(u,r,o,!1,null,null,null);d.options.__file="UziDayNavbar.vue";var f=d.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Adsense",{attrs:{"data-ad-client":"ca-pub-9709610050212024","data-ad-slot":"1234567890"}})],1)},p=[],v={},h=v,b=Object(c["a"])(h,m,p,!1,null,null,null);b.options.__file="UziDayFooterAds.vue";var g=b.exports,_={mounted:function(){var t=this,e=document.querySelector(".FoundersComp").offsetHeight,a=document.body.offsetHeight-e;window.scrollY>=a?this.uzidayNavbar=!0:this.uzidayNavbar=!1,this.stylingNavbar(),window.onresize=function(){return t.stylingNavbar()},document.querySelector("html").style["overflow-x"]="hidden"},created:function(){},components:{uzidayNavbar:f,uzidayFooterAds:g},data:function(){return{uzidayNavbar:!1}},methods:{stylingNavbar:function(){var t=this;document.querySelector(".FoundersComp").offsetHeight;window.onscroll=function(){var e=document.querySelector(".FoundersComp").offsetHeight,a=document.body.offsetHeight-e;window.scrollY>=a?t.uzidayNavbar=!0:t.uzidayNavbar=!1}}}},y=_,C=(a("034f"),Object(c["a"])(y,n,i,!1,null,null,null));C.options.__file="App.vue";var x=C.exports,w=a("8c4f"),z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("section",{staticClass:"hero is-white is-fullheight"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container is-fullhd"},[a("br"),a("br"),a("br"),a("div",{staticClass:"columns"},[a("uziday-presentation-column-component"),a("uziday-logo-column-component")],1)])])]),a("uziday-founders-component")],1)},k=[],S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"column has-text-justified",staticStyle:{padding:"0px 20px 0px 20px !important"}},[t._m(0),t._m(1),a("br"),t._m(2),a("br"),a("hr"),a("br"),a("p",{staticClass:"small has-text-weight-bold has-text-grey"},[t._v("\n\t\t\tTe gustó? Inscríbete a nuestro sistema UziDay E-mail Notifications y te estaremos informando (No Spam)\n\t\t")]),a("br"),a("button",{staticClass:"button is-fullwidth has-text-weight-semibold",on:{click:function(e){t.openMailChimp()}}},[t._v("\n\t\t\t¡ Quiero inscribirme !\n\t\t")]),a("br"),a("hr"),a("p",{staticClass:"title is-3 has-text-grey-dark"},[t._v("\n\t\t\tUse your time, use UziDay\n\t\t")])])])},O=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"is-hidden-desktop"},[a("br")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"title has-text-grey-dark has-text-weight-normal is-3"},[t._v("\n\t\tHaz tu día realmente "),a("span",{staticClass:"has-text-weight-bold"},[t._v("productivo!")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"title is-4 has-text-weight-normal"},[t._v("\n\t\t\tCon "),a("span",{staticClass:"has-text-weight-bold"},[t._v("UziDay")]),t._v(" podrás sacarle todo el jugo a tus 24 horas. Dime, ¿cuantas veces no has querido tener más "),a("span",{staticClass:"has-text-weight-bold"},[t._v("tiempo?")])])}],j={methods:{openMailChimp:function(){window.open("https://mailchi.mp/d3bc4cb8c456/uziday-notifications")}}},F=j,N=Object(c["a"])(F,S,O,!1,null,null,null);N.options.__file="UziDayPresentationColumn.vue";var E=N.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"column is-5 has-text-centered"},[a("div",{staticClass:"columns is-gapless"},[a("div",{staticClass:"column is-12 is-hidden-touch"},[a("center",[a("div",{staticClass:"animated faster fadeInRight",staticStyle:{padding:"0px 20px 0px 20px !important"}},[a("img",{staticClass:"image",staticStyle:{"border-radius":"10px",float:"right",width:"100%"},attrs:{src:t.assets.brandLogo,alt:""}})])])],1),a("div",{staticClass:"column is-hidden-desktop"},[a("center",[a("div",{staticClass:"animated faster fadeInRight",staticStyle:{padding:"0px 5px 10px 5px !important"}},[a("img",{staticClass:"image",staticStyle:{"border-radius":"10px",width:"100%"},attrs:{src:t.assets.brandLogo,alt:""}})])])],1)])])},U=[],D=a("92a5"),I=a.n(D),A=a("4e97"),H=a.n(A),M=a("e9bb"),P=a.n(M),T={brandLogo:I.a},q={sami:H.a,lauti:P.a},L={created:function(){this.assets=T},data:function(){return{assets:null}}},G=L,J=Object(c["a"])(G,$,U,!1,null,null,null);J.options.__file="UziDayLogoColumn.vue";var R=J.exports,Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"uziday-comp"},[a("div",{staticClass:"FoundersComp"},[a("section",{staticClass:"hero is-fullheight"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("br"),a("br"),a("div",{staticClass:"columns is-multiline"},[a("div",{staticClass:"column is-5 has-text-centered"},[a("div",{staticClass:"box founder"},[a("center",[a("figure",{staticClass:"image is-128x128"},[a("img",{staticClass:"is-rounded",attrs:{src:t.founders.sami}})])]),a("br"),a("span",{staticClass:"subtitle is-3"},[t._v("\n\t\t\t\t\t\t\t\t\tSamuel Garcia\n\t\t\t\t\t\t\t\t")]),a("br"),a("span",{staticClass:"small has-text-grey"},[t._v("CEO")]),a("hr"),a("p",[t._v("\n\t\t  \t\t\t\t\t\t\tSoy un chico colombiano de 14 años de edad al cual le apasiona el mundo tech\n\t\t  \t\t\t\t\t\t")]),a("a",{attrs:{href:"https://github.com/mrzamii",target:"_blank"}},[t._v("@MrZamii")]),a("br"),a("br"),a("founders-social-networks",{attrs:{founder:"sami"}}),t._v("\n\t  \t\t\t\t\t\t\t \n\t  \t\t\t\t\t\t\t"),a("div",{staticClass:"tag is-primary"},[t._v("Founder")])],1)]),a("div",{staticClass:"column is-2"}),a("div",{staticClass:"column is-5 has-text-centered"},[a("div",{staticClass:"box founder"},[a("center",[a("figure",{staticClass:"image is-128x128"},[a("img",{staticClass:"is-rounded",attrs:{src:t.founders.lauti}})])]),a("br"),a("span",{staticClass:"subtitle is-3"},[t._v("\n\t\t\t\t\t\t\t\t\tLautaro Umpierrez\n\t\t\t\t\t\t\t\t")]),a("br"),a("span",{staticClass:"small has-text-grey"},[t._v("CTO")]),a("hr"),a("p",[t._v("\n\t\t  \t\t\t\t\t\t\tSoy un chico uruguayo de 14 años de edad.Un completo apasionado de la programación!\n\t\t  \t\t\t\t\t\t")]),a("a",{attrs:{href:"https://github.com/lautaumpierrez",target:"_blank"}},[t._v("@lautaumpierrez")]),a("br"),a("br"),a("founders-social-networks",{attrs:{founder:"lauti"}}),t._v("\n\t  \t\t\t\t\t\t\t \n\t  \t\t\t\t\t\t\t"),a("div",{staticClass:"tag is-primary"},[t._v("CoFounder")])],1)])])])])])])])},Q=[],Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"level"},[t.currentFounder.facebook?a("div",{staticClass:"socialNetworkItem has-text-centered level-item"},[a("a",{staticClass:"button small is-info",attrs:{href:t.currentFounder.facebook,target:"_blank"}},[a("i",{staticClass:"fab fa-facebook-f"}),t._v("\n\t\t\t \n\t\t\tFacebook\n\t\t")])]):t._e(),t.currentFounder.instagram?a("div",{staticClass:"socialNetworkItem has-text-centered level-item"},[a("a",{staticClass:"button small is-danger",attrs:{href:t.currentFounder.instagram,target:"_blank"}},[a("i",{staticClass:"fab fa-instagram"}),t._v("\n\t\t\t \n\t\t\tInstagram\n\t\t")])]):t._e(),t.currentFounder.github?a("div",{staticClass:"socialNetworkItem level-item"},[a("a",{staticClass:"button small is-dark",attrs:{href:t.currentFounder.github,target:"_blank"}},[a("i",{staticClass:"fab fa-github"}),t._v("\n\t\t\t \n\t\t\tGithub\n\t\t")])]):t._e()])},B=[],K={props:["founder"],data:function(){return{founders:{sami:{facebook:"",instagram:"https://www.instagram.com/mrzamii/",github:"https://github.com/mrzamii"},lauti:{facebook:"",instagram:"https://www.instagram.com/lautaumpierrez/",github:"https://github.com/lautaumpierrez"}}}},computed:{currentFounder:function(){return this.founders[this.founder]}}},V=K,W=Object(c["a"])(V,Z,B,!1,null,null,null);W.options.__file="UziDaySocialNetworksFounders.vue";var X=W.exports,tt={created:function(){this.founders=q},data:function(){return{founders:null}},components:{foundersSocialNetworks:X}},et=tt,at=Object(c["a"])(et,Y,Q,!1,null,null,null);at.options.__file="UziDayFounders.vue";var st=at.exports,nt={components:{"uziday-founders-component":st,"uziday-logo-column-component":R,"uziday-presentation-column-component":E}},it=nt,rt=(a("cccb"),Object(c["a"])(it,z,k,!1,null,null,null));rt.options.__file="Home.vue";var ot=rt.exports,lt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ut=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an about page")])])}],ct={},dt=ct,ft=Object(c["a"])(dt,lt,ut,!1,null,null,null);ft.options.__file="About.vue";var mt=ft.exports;s["a"].use(w["a"]);var pt=new w["a"]({routes:[{path:"/",name:"home",component:ot},{path:"/about",name:"about",component:mt}]}),vt=a("2f62");s["a"].use(vt["a"]);var ht=new vt["a"].Store({state:{},mutations:{},actions:{}}),bt=a("d78e"),gt=a.n(bt);a("eb46"),a("4b3c"),a("1eb5");s["a"].use(a("395c")),s["a"].use(gt.a.Adsense),s["a"].use(gt.a.InArticleAdsense),s["a"].use(gt.a.InFeedAdsense),s["a"].config.productionTip=!1,new s["a"]({router:pt,store:ht,render:function(t){return t(x)}}).$mount("#app")},"64a9":function(t,e,a){},"92a5":function(t,e,a){t.exports=a.p+"img/brandImage.1.e3e3510f.png"},cccb:function(t,e,a){"use strict";var s=a("d563"),n=a.n(s);n.a},d563:function(t,e,a){},e9bb:function(t,e,a){t.exports=a.p+"img/founder.lauti.a1787946.png"}});
//# sourceMappingURL=app.9f884ee7.js.map