(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{156:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"withParams",{enumerable:!0,get:function(){return o.default}}),e.regex=e.ref=e.len=e.req=void 0;var n,o=(n=r(173))&&n.__esModule?n:{default:n};function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var l=function(t){if(Array.isArray(t))return!!t.length;if(null==t)return!1;if(!1===t)return!0;if(t instanceof Date)return!isNaN(t.getTime());if("object"===c(t)){for(var e in t)return!0;return!1}return!!String(t).length};e.req=l;e.len=function(t){return Array.isArray(t)?t.length:"object"===c(t)?Object.keys(t).length:String(t).length};e.ref=function(t,e,r){return"function"==typeof t?t.call(e,r):r[t]};e.regex=function(t,e){return(0,o.default)({type:t},(function(t){return!l(t)||e.test(t)}))}},157:function(t,e,r){var content=r(160);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(27).default)("63899b2a",content,!0,{sourceMap:!1})},158:function(t,e,r){var content=r(164);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(27).default)("1c78f610",content,!0,{sourceMap:!1})},159:function(t,e,r){"use strict";var n=r(157);r.n(n).a},160:function(t,e,r){(e=r(26)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Roboto:400,700|Roboto+Mono:400,700|Caveat&display=swap);"]),e.push([t.i,'.navigation{position:fixed;top:0;z-index:1;height:50px;background-color:#fff;box-shadow:0 2px 12px 0 #e2eaf6}.navigation_wrapper{height:100%}.navigation_logo{display:flex;justify-content:space-between;align-items:center;position:relative;z-index:2;padding-top:.7rem}.navigation_logo-svg{width:90px}.navigation_hamburger{display:block}.navigation_signature{font-family:Caveat,cursive;font-size:24px}.navigation_menu{list-style:none;background:#fff;text-align:center;margin:0;padding:0;position:relative;top:-11px;max-height:0;overflow:hidden;transition:max-height .8s}.navigation_menu.active{max-height:250px}.navigation_menu-item{margin:1rem 2rem}.navigation_menu-item a{text-decoration:none;color:#1f2022;font-size:16px}.navigation_menu-item:last-child{color:#fff;cursor:pointer;background-size:300% 100%;background-image:linear-gradient(90deg,#6c63ff,#40e495,#30dd8a,#6c63ff);border-radius:16px;moz-transition:all .4s ease-in-out;transition:all .4s ease-in-out;padding:.5rem 1.5rem}.navigation_menu-item:last-child:hover{background-position:100% 0;moz-transition:all .4s ease-in-out;transition:all .4s ease-in-out}.navigation_menu-item:last-child:focus{outline:none}.navigation_menu-item:last-child a{color:#fff}@media (min-width:1024px){.navigation{height:60px;padding-top:0}.navigation--transparent{background:radial-gradient(105.59% 29604.11% at 0,at 50%,hsla(0,0%,100%,0) 0,hsla(0,0%,100%,0) 38.02%,hsla(0,0%,100%,.44) 76.46%,hsla(0,0%,100%,.44) 80.22%,hsla(0,0%,100%,.44) 86.1%,hsla(0,0%,100%,.44) 90.68%,hsla(0,0%,100%,.44) 94.6%);background:radial-gradient(105.59% 29604.11% at 0 50%,hsla(0,0%,100%,0) 15.63%,hsla(0,0%,100%,0) 38.02%,hsla(0,0%,100%,.44) 76.46%,hsla(0,0%,100%,.44) 80.22%,hsla(0,0%,100%,.44) 86.1%,hsla(0,0%,100%,.44) 90.68%,hsla(0,0%,100%,.44) 94.6%);transition:background-color .4s ease-in-out;box-shadow:none}.navigation.scroll{background-color:#fff;box-shadow:0 2px 12px 0 #e2eaf6}.navigation.scroll .navigation_signature{display:block}.navigation_wrapper{display:flex;justify-content:space-between;align-items:center}.navigation_hamburger{display:none}.navigation_logo{padding-top:0}.navigation_logo-svg,.navigation_signature{display:none}.navigation_menu{display:block;top:0;display:flex;justify-content:space-between;align-items:center;width:450px;background:none;overflow:visible}.navigation_menu-item{cursor:pointer}.navigation_menu-item a{color:#1f2022}.navigation_menu-item:last-child{margin:0}.navigation_menu-item:last-child:after{display:none}.navigation_menu-item:after{content:"";display:block;position:relative;top:14px;width:0;height:4px;background:#00ff7b;transition:width .3s}.navigation_menu-item:hover:after{width:100%}}',""]),t.exports=e},161:function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"alpha",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e,"alphaNum",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(e,"numeric",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(e,"between",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(e,"email",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(e,"ipAddress",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(e,"macAddress",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(e,"maxLength",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(e,"minLength",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(e,"required",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(e,"requiredIf",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(e,"requiredUnless",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(e,"sameAs",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(e,"url",{enumerable:!0,get:function(){return C.default}}),Object.defineProperty(e,"or",{enumerable:!0,get:function(){return $.default}}),Object.defineProperty(e,"and",{enumerable:!0,get:function(){return j.default}}),Object.defineProperty(e,"not",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(e,"minValue",{enumerable:!0,get:function(){return k.default}}),Object.defineProperty(e,"maxValue",{enumerable:!0,get:function(){return M.default}}),Object.defineProperty(e,"integer",{enumerable:!0,get:function(){return S.default}}),Object.defineProperty(e,"decimal",{enumerable:!0,get:function(){return z.default}}),e.helpers=void 0;var o=F(r(172)),c=F(r(175)),l=F(r(176)),f=F(r(177)),m=F(r(178)),d=F(r(179)),v=F(r(180)),h=F(r(181)),_=F(r(182)),y=F(r(183)),x=F(r(184)),w=F(r(185)),P=F(r(186)),C=F(r(187)),$=F(r(188)),j=F(r(189)),O=F(r(190)),k=F(r(191)),M=F(r(192)),S=F(r(193)),z=F(r(194)),N=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==n(t)&&"function"!=typeof t)return{default:t};var e=A();if(e&&e.has(t))return e.get(t);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in t)if(Object.prototype.hasOwnProperty.call(t,c)){var desc=o?Object.getOwnPropertyDescriptor(t,c):null;desc&&(desc.get||desc.set)?Object.defineProperty(r,c,desc):r[c]=t[c]}r.default=t,e&&e.set(t,r);return r}(r(156));function A(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return A=function(){return t},t}function F(t){return t&&t.__esModule?t:{default:t}}e.helpers=N},162:function(t,e,r){var content=r(196);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(27).default)("7e4fbe3c",content,!0,{sourceMap:!1})},163:function(t,e,r){"use strict";var n=r(158);r.n(n).a},164:function(t,e,r){(e=r(26)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Roboto:400,700|Roboto+Mono:400,700|Caveat&display=swap);"]),e.push([t.i,".footer-wrapper{background-color:#1f2022;padding:1rem 5rem}.footer-wrapper a,.footer-wrapper p,.footer-wrapper span{color:#fff;text-decoration:none;font-size:12px}.footer-wrapper-social a{margin-right:1rem;margin-top:2rem}.footer-copyright-wrapper{background-color:#dedddd}.footer-copyright-wrapper p{margin:0;padding:1rem 0;font-size:12px}@media (min-width:1024px){.footer-wrapper{display:flex;justify-content:space-between;align-items:normal}}",""]),t.exports=e},170:function(t,e,r){"use strict";var n={fetch:function(t){t.store.commit("toggle")},methods:{showNav:function(){this.$store.commit("toggle"),this.$refs.navigation_menu.classList.toggle("active")},changeNav:function(){window.scrollY>600?this.$refs.nav.classList.add("scroll"):this.$refs.nav.classList.remove("scroll")}},created:function(){window.addEventListener("scroll",this.changeNav)},destroyed:function(){window.removeEventListener("scroll",this.changeNav)}},o=(r(159),r(18)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{ref:"nav",staticClass:"navigation navigation--transparent section-100"},[r("div",{staticClass:"navigation_wrapper section-85 center"},[r("div",{staticClass:"navigation_logo"},[r("span",{staticClass:"navigation_signature"},[t._v("Ana-Maria Iancu")]),t._v(" "),r("div",{staticClass:"navigation_hamburger",on:{click:function(e){return t.showNav()}}},[r("svg",{attrs:{width:"37",height:"25",viewBox:"0 0 29 27",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("rect",{attrs:{width:"35",height:"5",rx:"3.5",fill:"rgb(0, 255, 123)"}}),t._v(" "),r("rect",{attrs:{width:"35",height:"5",rx:"3.5",fill:"rgb(0, 255, 123)"}}),t._v(" "),r("rect",{attrs:{width:"35",height:"5",rx:"3.5",fill:"rgb(0, 255, 123)"}}),t._v(" "),r("rect",{attrs:{y:"20",width:"35",height:"5",rx:"3.5",fill:"rgb(0, 255, 123)"}}),t._v(" "),r("rect",{attrs:{y:"20",width:"35",height:"5",rx:"3.5",fill:"rgb(0, 255, 123)"}}),t._v(" "),r("rect",{attrs:{y:"20",width:"35",height:"5",rx:"3.5",fill:"rgb(0, 255, 123)"}}),t._v(" "),r("rect",{attrs:{y:"10",width:"35",height:"5",rx:"3.5",fill:"rgb(0, 255, 123)"}}),t._v(" "),r("rect",{attrs:{y:"10",width:"35",height:"5",rx:"3.5",fill:"rgb(0, 255, 123)"}}),t._v(" "),r("rect",{attrs:{y:"10",width:"35",height:"5",rx:"3.5",fill:"rgb(0, 255, 123)"}})])])]),t._v(" "),r("ul",{ref:"navigation_menu",staticClass:"navigation_menu"},[r("li",{staticClass:"navigation_menu-item"},[r("nuxt-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),r("li",{staticClass:"navigation_menu-item"},[r("nuxt-link",{attrs:{to:"/#portofolio"}},[t._v("Portofolio")])],1),t._v(" "),r("nuxt-link",{attrs:{to:"/contact"}},[r("li",{staticClass:"navigation_menu-item"},[t._v("Contact me")])])],1)])])}),[],!1,null,null,null);e.a=component.exports},171:function(t,e,r){"use strict";r(163);var n=r(18),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer"},[r("div",{staticClass:"footer-wrapper"},[t._m(0),t._v(" "),r("div",{staticClass:"footer-wrapper-social"},[r("span",[t._v("Follow me on social")]),r("br"),r("br"),t._v(" "),r("a",{staticClass:"icon linkedin",attrs:{href:"https://www.linkedin.com/in/anaiancu",target:"_blank"}},[r("svg",{attrs:{version:"1.1",id:"linkedin",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"32px",height:"32px",viewBox:"0 0 430.117 430.117","xml:space":"preserve",fill:"white"}},[r("g",[r("path",{attrs:{id:"LinkedIn",d:"M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707\n                                              c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21\n                                              v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824\n                                              C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463\n                                              c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z\n                                              M5.477,420.56h92.184v-277.32H5.477V420.56z"}})])])]),t._v(" "),r("a",{staticClass:"icon instagram",attrs:{href:"https://instagram.com/ana.intech/",target:"_blank"}},[r("svg",{attrs:{version:"1.1",id:"instagram",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"32px",height:"32px",viewBox:"0 0 169.063 169.063","xml:space":"preserve",fill:"white"}},[r("g",[r("path",{attrs:{d:"M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752\n                                              c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407\n                                              c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752\n                                              c17.455,0,31.656,14.201,31.656,31.655V122.407z"}}),t._v(" "),r("path",{attrs:{d:"M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561\n                                              C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561\n                                              c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z"}}),t._v(" "),r("path",{attrs:{d:"M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78\n                                              c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78\n                                              C135.661,29.421,132.821,28.251,129.921,28.251z"}})])])]),t._v(" "),r("a",{staticClass:"icon github",attrs:{href:"https://github.com/anaiancu24"}},[r("svg",{attrs:{version:"1.1",id:"github",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"32px",height:"32px",viewBox:"0 0 438.549 438.549","xml:space":"preserve",fill:"white"}},[r("g",[r("path",{attrs:{d:"M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365\n                                              c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63\n                                              c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996\n                                              c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136\n                                              c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559\n                                              c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559\n                                              c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997\n                                              c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851\n                                              c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136\n                                              c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41\n                                              c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126\n                                              c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817\n                                              c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994\n                                              c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849\n                                              c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24\n                                              c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979\n                                              c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146\n                                              c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995\n                                              c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906\n                                              C438.536,184.851,428.728,148.168,409.132,114.573z"}})])])])])]),t._v(" "),t._m(1)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer-wrapper-nav"},[r("a",{attrs:{href:"/"}},[t._v("Home |")]),t._v(" "),r("a",{attrs:{href:"/#portofolio"}},[t._v("Portofolio |")]),t._v(" "),r("a",{attrs:{href:"/contact"}},[t._v("Contact")]),t._v(" "),r("p",[t._v("\n        Email:\n        "),r("a",{attrs:{href:"mailto:ana.iulia24@icloud.com"}},[r("span",[t._v("ana.iulia24@icloud.com")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer-copyright-wrapper center"},[e("p",[this._v("\n      Developed by Ana-Maria Iancu\n      "),e("span",[this._v("2020")])])])}],!1,null,null,null);e.a=component.exports},172:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=(0,r(156).regex)("alpha",/^[a-zA-Z]*$/);e.default=n},173:function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n="web"===t.env.BUILD?r(174).withParams:r(99).withParams;e.default=n}).call(this,r(98))},174:function(t,e,r){"use strict";(function(t){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.withParams=void 0;var n="undefined"!=typeof window?window:void 0!==t?t:{},o=n.vuelidate?n.vuelidate.withParams:function(t,e){return"object"===r(t)&&void 0!==e?e:t((function(){}))};e.withParams=o}).call(this,r(19))},175:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=(0,r(156).regex)("alphaNum",/^[a-zA-Z0-9]*$/);e.default=n},176:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=(0,r(156).regex)("numeric",/^[0-9]*$/);e.default=n},177:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(156);e.default=function(t,e){return(0,n.withParams)({type:"between",min:t,max:e},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+t<=+r&&+e>=+r}))}},178:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=(0,r(156).regex)("email",/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/);e.default=n},179:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(156),o=(0,n.withParams)({type:"ipAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!=typeof t)return!1;var e=t.split(".");return 4===e.length&&e.every(c)}));e.default=o;var c=function(t){if(t.length>3||0===t.length)return!1;if("0"===t[0]&&"0"!==t)return!1;if(!t.match(/^\d+$/))return!1;var e=0|+t;return e>=0&&e<=255}},180:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(156);e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!=typeof e)return!1;var r="string"==typeof t&&""!==t?e.split(t):12===e.length||16===e.length?e.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(o)}))};var o=function(t){return t.toLowerCase().match(/^[0-9a-f]{2}$/)}},181:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(156);e.default=function(t){return(0,n.withParams)({type:"maxLength",max:t},(function(e){return!(0,n.req)(e)||(0,n.len)(e)<=t}))}},182:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(156);e.default=function(t){return(0,n.withParams)({type:"minLength",min:t},(function(e){return!(0,n.req)(e)||(0,n.len)(e)>=t}))}},183:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(156),o=(0,n.withParams)({type:"required"},(function(t){return"string"==typeof t?(0,n.req)(t.trim()):(0,n.req)(t)}));e.default=o},184:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(156);e.default=function(t){return(0,n.withParams)({type:"requiredIf",prop:t},(function(e,r){return!(0,n.ref)(t,this,r)||(0,n.req)(e)}))}},185:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(156);e.default=function(t){return(0,n.withParams)({type:"requiredUnless",prop:t},(function(e,r){return!!(0,n.ref)(t,this,r)||(0,n.req)(e)}))}},186:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(156);e.default=function(t){return(0,n.withParams)({type:"sameAs",eq:t},(function(e,r){return e===(0,n.ref)(t,this,r)}))}},187:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=(0,r(156).regex)("url",/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i);e.default=n},188:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(156);e.default=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var t=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return e.length>0&&e.reduce((function(e,r){return e||r.apply(t,n)}),!1)}))}},189:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(156);e.default=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var t=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return e.length>0&&e.reduce((function(e,r){return e&&r.apply(t,n)}),!0)}))}},190:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(156);e.default=function(t){return(0,n.withParams)({type:"not"},(function(e,r){return!(0,n.req)(e)||!t.call(this,e,r)}))}},191:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(156);e.default=function(t){return(0,n.withParams)({type:"minValue",min:t},(function(e){return!(0,n.req)(e)||(!/\s/.test(e)||e instanceof Date)&&+e>=+t}))}},192:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(156);e.default=function(t){return(0,n.withParams)({type:"maxValue",max:t},(function(e){return!(0,n.req)(e)||(!/\s/.test(e)||e instanceof Date)&&+e<=+t}))}},193:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=(0,r(156).regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);e.default=n},194:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=(0,r(156).regex)("decimal",/^[-]?\d*(\.\d+)?$/);e.default=n},195:function(t,e,r){"use strict";var n=r(162);r.n(n).a},196:function(t,e,r){(e=r(26)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Roboto:400,700|Roboto+Mono:400,700|Caveat&display=swap);"]),e.push([t.i,"#contact{background:linear-gradient(180deg,#17b890,hsla(0,0%,100%,.99))}.contact-wrapper{position:relative;min-height:1100px;top:100px}.contact-wrapper .contact-form{min-height:390px;flex-basis:50%;padding:2rem 1rem;background:#fff;box-shadow:-1px 2px 17px 5px rgba(151,152,153,.7);border-radius:8px}.contact-wrapper .contact-form .btn-next{background-color:#6c63ff;color:#fff;padding:.5rem 2rem;font-size:16px;border-radius:8px;cursor:pointer;outline:none}.contact-wrapper .contact-form .btn-back{border:1px solid #6c63ff;padding:.5rem 2rem;font-size:16px;border-radius:8px;cursor:pointer;outline:none}.contact-wrapper .contact-form .form_steps-count{font-size:16px}.contact-wrapper .contact-form .form_steps-count .current-step{font-size:18px;font-weight:700}.contact-wrapper .contact-form .form_steps-types{display:flex;justify-content:space-evenly;align-items:center}.contact-wrapper .contact-form .form_steps-types .type{width:120px;height:150px;background:#fff;box-shadow:-1px 2px 7px 5px rgba(151,152,153,.3);border-radius:8px;padding:1rem;cursor:pointer}.contact-wrapper .contact-form .form_steps-types .type:hover{box-shadow:-1px 2px 17px 5px rgba(151,152,153,.3)}.contact-wrapper .contact-form .form_steps-types .active-type{box-shadow:-1px 2px 17px 5px rgba(151,152,153,.3);border:2px solid #6c63ff}.contact-wrapper .contact-form .form_steps .form_type-icon{height:70px}.contact-wrapper .contact-form .form-group-double{display:flex;justify-content:space-between;align-items:normal}.contact-wrapper .contact-form .form-group{text-align:left;margin:1rem .5rem}.contact-wrapper .contact-form .form-group label{margin-bottom:1rem}.contact-wrapper .contact-form .form-group input,.contact-wrapper .contact-form .form-group textarea{width:90%;height:38px;padding:0 1rem;color:#576784;font-size:16px;outline:none;border:1px solid #dedddd;border-radius:8px;cursor:pointer;margin-top:.5rem}.contact-wrapper .contact-form .form-group input:focus,.contact-wrapper .contact-form .form-group input:hover,.contact-wrapper .contact-form .form-group textarea:focus,.contact-wrapper .contact-form .form-group textarea:hover{border:1px solid #6c63ff}.contact-wrapper .contact-form .form-group #email{width:95%}.contact-wrapper .contact-form .form-group textarea{height:160px;padding:1rem;width:95%}.contact-wrapper .contact-form .btn-submit{width:90%;font-size:16px;background:#00ff7b;border-radius:8px;padding:1rem;cursor:pointer;border:none}.contact-wrapper .contact-form .btn-submit:hover{background:#00ff96}.contact-wrapper .contact-text{flex-basis:30%;text-align:left;margin-bottom:50px}.contact-wrapper .contact-text h3,.contact-wrapper .contact-text p{color:#fff}@media (min-width:1024px){.contact-wrapper{min-height:700px;top:0;display:flex;justify-content:space-between;align-items:center}.contact-wrapper .contact-text{position:relative;top:-110px;margin-bottom:0}.contact-wrapper .contact-form .form-group-double{display:flex;justify-content:space-evenly;align-items:normal}}",""]),t.exports=e},219:function(t,e,r){"use strict";r.r(e);var n=r(170),o=r(161),c={data:function(){return{types:[{icon:"/images/form_type-shortterm.svg",description:"Short-term Project"},{icon:"/images/form_type-longterm.svg",description:"Long-term Project"},{icon:"/images/form_type-hello.svg",description:"Just to say HI"}],selectedType:null}},validations:{selectedType:{required:o.required}},methods:{pickType:function(t){this.selectedType=t,this.$emit("update",{type:this.selectedType})}}},l=r(18),f=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form_steps"},[t._m(0),t._v(" "),r("h4",{staticClass:"form_steps-question"},[t._v("Why you're contacting me")]),t._v(" "),r("div",{staticClass:"form_steps-types"},t._l(t.types,(function(e){return r("div",{key:e.name,staticClass:"type",class:{"active-type":t.selectedType===e},attrs:{name:t.selectedType},on:{click:function(r){return t.pickType(e)}}},[r("div",{staticClass:"type--description"},[r("img",{staticClass:"form_type-icon",attrs:{src:e.icon,alt:"web-development"}}),t._v(" "),r("p",{staticClass:"description"},[t._v("\n            "+t._s(e.description)+"\n        ")])])])})),0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"form_steps-count"},[e("span",{staticClass:"current-step"},[this._v("1")]),this._v("/3")])}],!1,null,null,null).exports,m={data:function(){return{form:{firstname:null,lastname:null,email:null}}},methods:{submit:function(){this.$emit("update",{firstname:this.form.firstname,lastname:this.form.lastname,email:this.form.email})}},validations:{form:{firstname:{required:o.required},lastname:{required:o.required},email:{required:o.required}}}},d=Object(l.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form_steps"},[t._m(0),t._v(" "),r("h4",{staticClass:"form_steps-question mb1"},[t._v("Your details")]),t._v(" "),r("form",{staticClass:"form",on:{input:t.submit}},[r("div",{staticClass:"form-group-double"},[r("div",{staticClass:"form-group"},[r("label",{staticClass:"form-label",attrs:{for:"first_name"}},[t._v("First name")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.$v.form.firstname.$model,expression:"$v.form.firstname.$model"}],staticClass:"form-control",attrs:{type:"text",placeholder:"First name",id:"first_name",name:"firstname"},domProps:{value:t.$v.form.firstname.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.form.firstname,"$model",e.target.value)}}}),t._v(" "),t.$v.form.firstname.$error?r("div",{staticClass:"error"},[t._v("field is required")]):t._e()]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{staticClass:"form-label",attrs:{for:"last_name"}},[t._v("Last name")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.$v.form.lastname.$model,expression:"$v.form.lastname.$model"}],staticClass:"form-control",attrs:{placeholder:"Last name",rows:"3",id:"last_name",name:"lastname"},domProps:{value:t.$v.form.lastname.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.form.lastname,"$model",e.target.value)}}}),t._v(" "),t.$v.form.lastname.$error?r("div",{staticClass:"error"},[t._v("field is required")]):t._e()])]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{staticClass:"form-label",attrs:{for:"address"}},[t._v("Email")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.$v.form.email.$model,expression:"$v.form.email.$model"}],staticClass:"form-control",attrs:{placeholder:"example@example.com",rows:"3",id:"email",name:"email"},domProps:{value:t.$v.form.email.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.form.email,"$model",e.target.value)}}}),t._v(" "),t.$v.form.email.$error?r("div",{staticClass:"error"},[t._v("field is required")]):t._e()])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"form_steps-count"},[e("span",{staticClass:"current-step"},[this._v("2")]),this._v("/3")])}],!1,null,"08cb91d5",null).exports,v={data:function(){return{form:{message:null}}},methods:{submit:function(){this.$emit("update",{message:this.form.message})}},validations:{form:{message:{required:o.required}}}},h={name:"FormWizard",components:{FormType:f,FormData:d,FormMessage:Object(l.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form_steps"},[t._m(0),t._v(" "),r("h4",{staticClass:"form_steps-question mb1"},[t._v("Ask me anything")]),t._v(" "),r("form",{staticClass:"form",on:{input:t.submit}},[r("div",{staticClass:"form-group"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.$v.form.message.$model,expression:"$v.form.message.$model"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Write something..",id:"message",name:"message"},domProps:{value:t.$v.form.message.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.form.message,"$model",e.target.value)}}}),t._v(" "),t.$v.form.message.$error?r("div",{staticClass:"error"},[t._v("field is required")]):t._e()])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"form_steps-count"},[e("span",{staticClass:"current-step"},[this._v("3")]),this._v("/3")])}],!1,null,"4e807628",null).exports},data:function(){return{currentStepNumber:1,length:3,form:{type:{name:null,description:null},firstname:null,lastname:null,email:null,message:null}}},computed:{progress:function(){return this.currentStepNumber/this.length*100}},methods:{goBack:function(){this.currentStepNumber--},goNext:function(){this.currentStepNumber++},processStep:function(t){Object.assign(this.form,t)}}},_={components:{FormWizard:Object(l.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[1===t.currentStepNumber?r("FormType",{on:{update:t.processStep}}):t._e(),t._v(" "),2===t.currentStepNumber?r("FormData",{on:{update:t.processStep}}):t._e(),t._v(" "),3===t.currentStepNumber?r("FormMessage",{on:{update:t.processStep}}):t._e(),t._v(" "),r("form",{attrs:{name:"ContactFormWizard",method:"POST","data-netlify":"true"}},[r("input",{attrs:{type:"hidden",name:"form-name",value:"ContactFormWizard"}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.type.description,expression:"form.type.description"}],attrs:{name:"type",type:"hidden"},domProps:{value:t.form.type.description},on:{input:function(e){e.target.composing||t.$set(t.form.type,"description",e.target.value)}}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.firstname,expression:"form.firstname"}],attrs:{name:"firstname",type:"hidden"},domProps:{value:t.form.firstname},on:{input:function(e){e.target.composing||t.$set(t.form,"firstname",e.target.value)}}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.lastname,expression:"form.lastname"}],attrs:{name:"lastname",type:"hidden"},domProps:{value:t.form.lastname},on:{input:function(e){e.target.composing||t.$set(t.form,"lastname",e.target.value)}}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],attrs:{name:"email",type:"hidden"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],attrs:{name:"message",type:"hidden"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}}),t._v(" "),3==t.currentStepNumber?r("button",{staticClass:"btn-submit",attrs:{type:"submit"}},[t._v("Submit")]):t._e()]),t._v(" "),r("div",{staticClass:"buttons mt-50"},[t.currentStepNumber>1?r("button",{staticClass:"btn-back",on:{click:t.goBack}},[t._v("Back\n      ")]):t._e(),t._v(" "),t.currentStepNumber<3?r("button",{staticClass:"btn-next",on:{click:t.goNext}},[t._v("Next")]):t._e()])],1)}),[],!1,null,null,null).exports}},y=(r(195),Object(l.a)(_,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contact-wrapper section-85 padding-64 center"},[this._m(0),this._v(" "),e("div",{staticClass:"contact-form"},[e("FormWizard")],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contact-text"},[e("h3",[this._v("Send me a message")]),this._v(" "),e("p",[this._v("If you have any questions, would like to work together or just want to say hi, please use the form on the right to send me a message."),e("br"),this._v("In case you hate forms, just "),e("a",{attrs:{href:"mailto:ana.iulia24@icloud.com"}},[e("span",{staticStyle:{color:"#6C63FF"}},[this._v("send me an email")])]),this._v(".")])])}],!1,null,null,null).exports),x=r(171),w={components:{Navigation:n.a,ContactForm:y,Footer:x.a}},P=Object(l.a)(w,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"contact"}},[e("Navigation"),this._v(" "),e("ContactForm"),this._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.default=P.exports}}]);