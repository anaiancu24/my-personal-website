(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{162:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return o.default}}),t.regex=t.ref=t.len=t.req=void 0;var n,o=(n=r(179))&&n.__esModule?n:{default:n};function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var l=function(e){if(Array.isArray(e))return!!e.length;if(null==e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===c(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=l;t.len=function(e){return Array.isArray(e)?e.length:"object"===c(e)?Object.keys(e).length:String(e).length};t.ref=function(e,t,r){return"function"==typeof e?e.call(t,r):r[e]};t.regex=function(e,t){return(0,o.default)({type:e},(function(e){return!l(e)||t.test(e)}))}},163:function(e,t,r){var content=r(166);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(36).default)("63899b2a",content,!0,{sourceMap:!1})},164:function(e,t,r){var content=r(169);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(36).default)("1c78f610",content,!0,{sourceMap:!1})},165:function(e,t,r){"use strict";r(163)},166:function(e,t,r){(t=r(35)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Roboto:400,700|Roboto+Mono:400,700|Caveat&display=swap);"]),t.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&family=Open+Sans&display=swap);"]),t.push([e.i,'.navigation{position:absolute;top:0;z-index:1;height:50px;background-color:#fff;box-shadow:0 2px 12px 0 #e2eaf6}.navigation_wrapper{height:100%}.navigation_logo{display:flex;justify-content:space-between;align-items:center;position:relative;z-index:2;padding-top:.7rem}.navigation_logo-svg{width:90px}.navigation_hamburger{display:block}.navigation_signature{font-family:"Caveat",cursive;font-size:24px}.navigation_menu{list-style:none;background:#fff;text-align:center;margin:0;padding:0;position:relative;top:-11px;max-height:0;overflow:hidden;transition:max-height .8s}.navigation_menu.active{max-height:250px}.navigation_menu-item{margin:1rem 2rem}.navigation_menu-item a{text-decoration:none;color:#1f2022;font-size:16px}.navigation_menu-item:last-child{color:#fff;cursor:pointer;background-size:300% 100%;background:#1e9cf9;border-radius:8px;moz-transition:all .4s ease-in-out;transition:all .4s ease-in-out;padding:.5rem 1.5rem}.navigation_menu-item:last-child:hover{background-position:100% 0;moz-transition:all .4s ease-in-out;transition:all .4s ease-in-out}.navigation_menu-item:last-child:focus{outline:none}.navigation_menu-item:last-child a{color:#fff}@media(min-width:1024px){.navigation{height:60px;padding-top:0}.navigation--transparent,.navigation.scroll{background-color:#fff;box-shadow:0 2px 12px 0 #e2eaf6}.navigation.scroll .navigation_signature{display:block}.navigation_wrapper{display:flex;justify-content:center;align-items:center}.navigation_hamburger{display:none}.navigation_logo{padding-top:0}.navigation_logo-svg,.navigation_signature{display:none}.navigation_menu{display:block;top:0;display:flex;justify-content:center;align-items:center;width:450px;background:none;overflow:visible}.navigation_menu-item{cursor:pointer}.navigation_menu-item a{color:#1f2022}.navigation_menu-item:last-child{margin:0}.navigation_menu-item:last-child:after{display:none}.navigation_menu-item:after{content:"";display:block;position:relative;top:14px;width:0;height:4px;background:#1e9cf9;transition:width .3s}.navigation_menu-item:hover:after{width:100%}}',""]),e.exports=t},167:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return $.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return j.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return C.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return k.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return M.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return z.default}}),t.helpers=void 0;var n=N(r(178)),o=N(r(181)),c=N(r(182)),l=N(r(183)),f=N(r(184)),m=N(r(185)),d=N(r(186)),v=N(r(187)),h=N(r(188)),_=N(r(189)),y=N(r(190)),x=N(r(191)),w=N(r(192)),P=N(r(193)),$=N(r(194)),j=N(r(195)),C=N(r(196)),O=N(r(197)),k=N(r(198)),M=N(r(199)),z=N(r(200)),S=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};desc.get||desc.set?Object.defineProperty(t,r,desc):t[r]=e[r]}return t.default=e,t}(r(162));function N(e){return e&&e.__esModule?e:{default:e}}t.helpers=S},168:function(e,t,r){"use strict";r(164)},169:function(e,t,r){(t=r(35)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Roboto:400,700|Roboto+Mono:400,700|Caveat&display=swap);"]),t.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&family=Open+Sans&display=swap);"]),t.push([e.i,".footer-wrapper{background-color:#1f2022;padding:1rem 5rem}.footer-wrapper a,.footer-wrapper p,.footer-wrapper span{color:#fff;text-decoration:none;font-size:12px}.footer-wrapper-social a{margin-right:1rem;margin-top:2rem}.footer-copyright-wrapper{background-color:#dedddd}.footer-copyright-wrapper p{margin:0;padding:1rem 0;font-size:12px}@media(min-width:1024px){.footer-wrapper{display:flex;justify-content:space-between;align-items:normal}}",""]),e.exports=t},170:function(e,t,r){"use strict";var n={fetch:function(e){e.store.commit("toggle")},methods:{showNav:function(){this.$store.commit("toggle"),this.$refs.navigation_menu.classList.toggle("active")}}},o=(r(165),r(22)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{ref:"nav",staticClass:"navigation navigation--transparent section-100"},[r("div",{staticClass:"navigation_wrapper section-85 center"},[r("div",{staticClass:"navigation_logo"},[r("div",{staticClass:"navigation_hamburger",on:{click:function(t){return e.showNav()}}},[r("svg",{attrs:{width:"37",height:"25",viewBox:"0 0 29 27",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("rect",{attrs:{width:"35",height:"5",rx:"3.5",fill:"rgb(0, 255, 123)"}}),e._v(" "),r("rect",{attrs:{width:"35",height:"5",rx:"3.5",fill:"rgb(0, 255, 123)"}}),e._v(" "),r("rect",{attrs:{width:"35",height:"5",rx:"3.5",fill:"rgb(0, 255, 123)"}}),e._v(" "),r("rect",{attrs:{y:"20",width:"35",height:"5",rx:"3.5",fill:"rgb(0, 255, 123)"}}),e._v(" "),r("rect",{attrs:{y:"20",width:"35",height:"5",rx:"3.5",fill:"rgb(0, 255, 123)"}}),e._v(" "),r("rect",{attrs:{y:"20",width:"35",height:"5",rx:"3.5",fill:"rgb(0, 255, 123)"}}),e._v(" "),r("rect",{attrs:{y:"10",width:"35",height:"5",rx:"3.5",fill:"rgb(0, 255, 123)"}}),e._v(" "),r("rect",{attrs:{y:"10",width:"35",height:"5",rx:"3.5",fill:"rgb(0, 255, 123)"}}),e._v(" "),r("rect",{attrs:{y:"10",width:"35",height:"5",rx:"3.5",fill:"rgb(0, 255, 123)"}})])])]),e._v(" "),r("ul",{ref:"navigation_menu",staticClass:"navigation_menu"},[r("li",{staticClass:"navigation_menu-item"},[r("nuxt-link",{attrs:{to:"/"}},[e._v("Home")])],1),e._v(" "),r("li",{staticClass:"navigation_menu-item"},[r("nuxt-link",{attrs:{to:"/#portofolio"}},[e._v("Portofolio")])],1),e._v(" "),r("nuxt-link",{attrs:{to:"/contact"}},[r("li",{staticClass:"navigation_menu-item"},[e._v("Contact")])])],1)])])}),[],!1,null,null,null);t.a=component.exports},171:function(e,t,r){"use strict";r(168);var n=r(22),component=Object(n.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"footer"},[t("div",{staticClass:"footer-wrapper"},[this._m(0),this._v(" "),t("div",{staticClass:"footer-wrapper-social"},[t("span",[this._v("Follow me on social")]),t("br"),t("br"),this._v(" "),t("a",{staticClass:"icon linkedin",attrs:{href:"https://www.linkedin.com/in/anaiancu",target:"_blank"}},[t("svg",{attrs:{version:"1.1",id:"linkedin",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"32px",height:"32px",viewBox:"0 0 430.117 430.117","xml:space":"preserve",fill:"white"}},[t("g",[t("path",{attrs:{id:"LinkedIn",d:"M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707\n                                              c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21\n                                              v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824\n                                              C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463\n                                              c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z\n                                              M5.477,420.56h92.184v-277.32H5.477V420.56z"}})])])]),this._v(" "),t("a",{staticClass:"icon github",attrs:{href:"https://github.com/anaiancu24"}},[t("svg",{attrs:{version:"1.1",id:"github",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"32px",height:"32px",viewBox:"0 0 438.549 438.549","xml:space":"preserve",fill:"white"}},[t("g",[t("path",{attrs:{d:"M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365\n                                              c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63\n                                              c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996\n                                              c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136\n                                              c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559\n                                              c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559\n                                              c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997\n                                              c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851\n                                              c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136\n                                              c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41\n                                              c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126\n                                              c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817\n                                              c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994\n                                              c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849\n                                              c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24\n                                              c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979\n                                              c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146\n                                              c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995\n                                              c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906\n                                              C438.536,184.851,428.728,148.168,409.132,114.573z"}})])])])])]),this._v(" "),this._m(1)])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"footer-wrapper-nav"},[r("a",{attrs:{href:"/"}},[e._v("Home |")]),e._v(" "),r("a",{attrs:{href:"/#portofolio"}},[e._v("Portofolio |")]),e._v(" "),r("a",{attrs:{href:"/contact"}},[e._v("Contact")]),e._v(" "),r("p",[e._v("\n        Email:\n        "),r("a",{attrs:{href:"mailto:ana.iulia24@icloud.com"}},[r("span",[e._v("ana.iulia24@icloud.com")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"footer-copyright-wrapper center"},[t("p",[this._v("\n      Developed by Ana-Maria Iancu\n      "),t("span",[this._v("2020")])])])}],!1,null,null,null);t.a=component.exports},172:function(e,t,r){var content=r(202);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(36).default)("7e4fbe3c",content,!0,{sourceMap:!1})},178:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(162).regex)("alpha",/^[a-zA-Z]*$/);t.default=n},179:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===e.env.BUILD?r(180).withParams:r(111).withParams;t.default=n}).call(this,r(110))},180:function(e,t,r){"use strict";(function(e){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!=typeof window?window:void 0!==e?e:{},o=n.vuelidate?n.vuelidate.withParams:function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))};t.withParams=o}).call(this,r(23))},181:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(162).regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=n},182:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(162).regex)("numeric",/^[0-9]*$/);t.default=n},183:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(162);t.default=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))}},184:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(162).regex)("email",/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/);t.default=n},185:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(162),o=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!=typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(c)}));t.default=o;var c=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},186:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(162);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!=typeof t)return!1;var r="string"==typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(o)}))};var o=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},187:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(162);t.default=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))}},188:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(162);t.default=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))}},189:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(162),o=(0,n.withParams)({type:"required"},(function(e){return"string"==typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t.default=o},190:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(162);t.default=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},191:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(162);t.default=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},192:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(162);t.default=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))}},193:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(162).regex)("url",/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i);t.default=n},194:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(162);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))}},195:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(162);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))}},196:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(162);t.default=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))}},197:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(162);t.default=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))}},198:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(162);t.default=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))}},199:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(162).regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=n},200:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(162).regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=n},201:function(e,t,r){"use strict";r(172)},202:function(e,t,r){(t=r(35)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Roboto:400,700|Roboto+Mono:400,700|Caveat&display=swap);"]),t.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&family=Open+Sans&display=swap);"]),t.push([e.i,"#contact{background-image:url(/images/gradient_bg.jpg);background-size:cover}.contact-wrapper{position:relative;min-height:1100px;top:100px}.contact-wrapper .contact-form{min-height:390px;flex-basis:50%;padding:2rem 1rem;background:#fff;box-shadow:-1px 2px 17px 5px rgba(151,152,153,.7);border-radius:8px}.contact-wrapper .contact-form .btn-next{background-color:#121212;color:#fff;padding:.5rem 2rem;font-size:16px;border-radius:8px;cursor:pointer;outline:none}.contact-wrapper .contact-form .btn-back{border:1px solid #121212;padding:.5rem 2rem;font-size:16px;border-radius:8px;cursor:pointer;outline:none;background:#fff}.contact-wrapper .contact-form .form_steps-count{font-size:16px}.contact-wrapper .contact-form .form_steps-count .current-step{font-size:18px;font-weight:700}.contact-wrapper .contact-form .form_steps-types{display:flex;justify-content:space-evenly;align-items:center}.contact-wrapper .contact-form .form_steps-types .type{width:120px;height:150px;background:#fff;box-shadow:-1px 2px 7px 5px rgba(151,152,153,.3);border-radius:8px;padding:1rem;cursor:pointer}.contact-wrapper .contact-form .form_steps-types .type:hover{box-shadow:-1px 2px 17px 5px rgba(151,152,153,.3)}.contact-wrapper .contact-form .form_steps-types .active-type{box-shadow:-1px 2px 17px 5px rgba(151,152,153,.3);border:2px solid #6c63ff}.contact-wrapper .contact-form .form_steps .form_type-icon{height:70px}.contact-wrapper .contact-form .form-group-double{display:flex;justify-content:space-between;align-items:normal}.contact-wrapper .contact-form .form-group{text-align:left;margin:1rem .5rem}.contact-wrapper .contact-form .form-group label{margin-bottom:1rem}.contact-wrapper .contact-form .form-group input,.contact-wrapper .contact-form .form-group textarea{width:90%;height:38px;padding:0 1rem;color:#576784;font-size:16px;outline:none;border:1px solid #dedddd;border-radius:8px;cursor:pointer;margin-top:.5rem}.contact-wrapper .contact-form .form-group input:focus,.contact-wrapper .contact-form .form-group input:hover,.contact-wrapper .contact-form .form-group textarea:focus,.contact-wrapper .contact-form .form-group textarea:hover{border:1px solid #6c63ff}.contact-wrapper .contact-form .form-group #email{width:95%}.contact-wrapper .contact-form .form-group textarea{height:160px;padding:1rem;width:95%}.contact-wrapper .contact-form .btn-submit{font-size:16px;background:#121212;border-radius:8px;padding:1rem 1.5rem;cursor:pointer;border:none;color:#fff}.contact-wrapper .contact-text{flex-basis:30%;text-align:left;margin-bottom:50px}.contact-wrapper .contact-text h3,.contact-wrapper .contact-text p{color:#fff}@media(min-width:1024px){.contact-wrapper{min-height:700px;top:0;display:flex;justify-content:space-between;align-items:center}.contact-wrapper .contact-text{position:relative;top:-110px;margin-bottom:0}.contact-wrapper .contact-form .form-group-double{display:flex;justify-content:space-evenly;align-items:normal}}",""]),e.exports=t},230:function(e,t,r){"use strict";r.r(t);var n=r(170),o=r(167),c={data:function(){return{types:[{icon:"/images/form_type-shortterm.svg",description:"Short-term Project"},{icon:"/images/form_type-longterm.svg",description:"Long-term Project"},{icon:"/images/form_type-hello.svg",description:"Just to say HI"}],selectedType:null}},validations:{selectedType:{required:o.required}},methods:{pickType:function(e){this.selectedType=e,this.$emit("update",{type:this.selectedType})}}},l=r(22),f=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form_steps"},[e._m(0),e._v(" "),r("h4",{staticClass:"form_steps-question"},[e._v("Why you're contacting me")]),e._v(" "),r("div",{staticClass:"form_steps-types"},e._l(e.types,(function(t){return r("div",{key:t.name,staticClass:"type",class:{"active-type":e.selectedType===t},attrs:{name:e.selectedType},on:{click:function(r){return e.pickType(t)}}},[r("div",{staticClass:"type--description"},[r("img",{staticClass:"form_type-icon",attrs:{src:t.icon,alt:"web-development"}}),e._v(" "),r("p",{staticClass:"description"},[e._v("\n            "+e._s(t.description)+"\n        ")])])])})),0)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"form_steps-count"},[t("span",{staticClass:"current-step"},[this._v("1")]),this._v("/3")])}],!1,null,null,null).exports,m={data:function(){return{form:{firstname:null,lastname:null,email:null}}},methods:{submit:function(){this.$emit("update",{firstname:this.form.firstname,lastname:this.form.lastname,email:this.form.email})}},validations:{form:{firstname:{required:o.required},lastname:{required:o.required},email:{required:o.required}}}},d=Object(l.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form_steps"},[e._m(0),e._v(" "),r("h4",{staticClass:"form_steps-question mb1"},[e._v("Your details")]),e._v(" "),r("form",{staticClass:"form",on:{input:e.submit}},[r("div",{staticClass:"form-group-double"},[r("div",{staticClass:"form-group"},[r("label",{staticClass:"form-label",attrs:{for:"first_name"}},[e._v("First name")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.form.firstname.$model,expression:"$v.form.firstname.$model"}],staticClass:"form-control",attrs:{type:"text",placeholder:"First name",id:"first_name",name:"firstname"},domProps:{value:e.$v.form.firstname.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.form.firstname,"$model",t.target.value)}}}),e._v(" "),e.$v.form.firstname.$error?r("div",{staticClass:"error"},[e._v("field is required")]):e._e()]),e._v(" "),r("div",{staticClass:"form-group"},[r("label",{staticClass:"form-label",attrs:{for:"last_name"}},[e._v("Last name")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.form.lastname.$model,expression:"$v.form.lastname.$model"}],staticClass:"form-control",attrs:{placeholder:"Last name",rows:"3",id:"last_name",name:"lastname"},domProps:{value:e.$v.form.lastname.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.form.lastname,"$model",t.target.value)}}}),e._v(" "),e.$v.form.lastname.$error?r("div",{staticClass:"error"},[e._v("field is required")]):e._e()])]),e._v(" "),r("div",{staticClass:"form-group"},[r("label",{staticClass:"form-label",attrs:{for:"address"}},[e._v("Email")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.form.email.$model,expression:"$v.form.email.$model"}],staticClass:"form-control",attrs:{placeholder:"example@example.com",rows:"3",id:"email",name:"email"},domProps:{value:e.$v.form.email.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.form.email,"$model",t.target.value)}}}),e._v(" "),e.$v.form.email.$error?r("div",{staticClass:"error"},[e._v("field is required")]):e._e()])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"form_steps-count"},[t("span",{staticClass:"current-step"},[this._v("2")]),this._v("/3")])}],!1,null,"08cb91d5",null).exports,v={data:function(){return{form:{message:null}}},methods:{submit:function(){this.$emit("update",{message:this.form.message})}},validations:{form:{message:{required:o.required}}}},h={name:"FormWizard",components:{FormType:f,FormData:d,FormMessage:Object(l.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form_steps"},[e._m(0),e._v(" "),r("h4",{staticClass:"form_steps-question mb1"},[e._v("Ask me anything")]),e._v(" "),r("form",{staticClass:"form",on:{input:e.submit}},[r("div",{staticClass:"form-group"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.$v.form.message.$model,expression:"$v.form.message.$model"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Write something..",id:"message",name:"message"},domProps:{value:e.$v.form.message.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.form.message,"$model",t.target.value)}}}),e._v(" "),e.$v.form.message.$error?r("div",{staticClass:"error"},[e._v("field is required")]):e._e()])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"form_steps-count"},[t("span",{staticClass:"current-step"},[this._v("3")]),this._v("/3")])}],!1,null,"4e807628",null).exports},data:function(){return{currentStepNumber:1,length:3,form:{type:{name:null,description:null},firstname:null,lastname:null,email:null,message:null}}},computed:{progress:function(){return this.currentStepNumber/this.length*100}},methods:{goBack:function(){this.currentStepNumber--},goNext:function(){this.currentStepNumber++},processStep:function(e){Object.assign(this.form,e)}}},_={components:{FormWizard:Object(l.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[1===e.currentStepNumber?r("FormType",{on:{update:e.processStep}}):e._e(),e._v(" "),2===e.currentStepNumber?r("FormData",{on:{update:e.processStep}}):e._e(),e._v(" "),3===e.currentStepNumber?r("FormMessage",{on:{update:e.processStep}}):e._e(),e._v(" "),r("form",{attrs:{name:"ContactFormWizard",method:"POST","data-netlify":"true"}},[r("input",{attrs:{type:"hidden",name:"form-name",value:"ContactFormWizard"}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.type.description,expression:"form.type.description"}],attrs:{name:"type",type:"hidden"},domProps:{value:e.form.type.description},on:{input:function(t){t.target.composing||e.$set(e.form.type,"description",t.target.value)}}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.firstname,expression:"form.firstname"}],attrs:{name:"firstname",type:"hidden"},domProps:{value:e.form.firstname},on:{input:function(t){t.target.composing||e.$set(e.form,"firstname",t.target.value)}}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.lastname,expression:"form.lastname"}],attrs:{name:"lastname",type:"hidden"},domProps:{value:e.form.lastname},on:{input:function(t){t.target.composing||e.$set(e.form,"lastname",t.target.value)}}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],attrs:{name:"email",type:"hidden"},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.message,expression:"form.message"}],attrs:{name:"message",type:"hidden"},domProps:{value:e.form.message},on:{input:function(t){t.target.composing||e.$set(e.form,"message",t.target.value)}}}),e._v(" "),3==e.currentStepNumber?r("button",{staticClass:"btn-submit",attrs:{type:"submit"}},[e._v("Submit")]):e._e()]),e._v(" "),r("div",{staticClass:"buttons mt-50"},[e.currentStepNumber>1?r("button",{staticClass:"btn-back",on:{click:e.goBack}},[e._v("Back\n      ")]):e._e(),e._v(" "),e.currentStepNumber<3?r("button",{staticClass:"btn-next",on:{click:e.goNext}},[e._v("Next")]):e._e()])],1)}),[],!1,null,null,null).exports}},y=(r(201),Object(l.a)(_,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"contact-wrapper section-85 padding-64 center"},[this._m(0),this._v(" "),t("div",{staticClass:"contact-form"},[t("FormWizard")],1)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"contact-text"},[t("h3",[this._v("Send me a message")]),this._v(" "),t("p",[this._v("If you have any questions, would like to work together or just want to say hi, please use the form on the right to send me a message."),t("br"),this._v("In case you hate forms, just "),t("a",{attrs:{href:"mailto:ana.iulia24@icloud.com"}},[t("span",{staticStyle:{color:"#121212"}},[this._v("send me an email")])]),this._v(".")])])}],!1,null,null,null).exports),x=r(171),w={components:{Navigation:n.a,ContactForm:y,Footer:x.a}},P=Object(l.a)(w,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"contact"}},[t("Navigation"),this._v(" "),t("ContactForm"),this._v(" "),t("Footer")],1)}),[],!1,null,null,null);t.default=P.exports}}]);