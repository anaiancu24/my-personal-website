(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{157:function(t,e,n){var content=n(160);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("63899b2a",content,!0,{sourceMap:!1})},158:function(t,e,n){var content=n(164);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("1c78f610",content,!0,{sourceMap:!1})},159:function(t,e,n){"use strict";var o=n(157);n.n(o).a},160:function(t,e,n){(e=n(26)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Roboto:400,700|Roboto+Mono:400,700|Caveat&display=swap);"]),e.push([t.i,'.navigation{position:fixed;top:0;z-index:1;height:50px;background-color:#fff;box-shadow:0 2px 12px 0 #e2eaf6}.navigation_wrapper{height:100%}.navigation_logo{display:flex;justify-content:space-between;align-items:center;position:relative;z-index:2;padding-top:.7rem}.navigation_logo-svg{width:90px}.navigation_hamburger{display:block}.navigation_signature{font-family:Caveat,cursive;font-size:24px}.navigation_menu{list-style:none;background:#fff;text-align:center;margin:0;padding:0;position:relative;top:-11px;max-height:0;overflow:hidden;transition:max-height .8s}.navigation_menu.active{max-height:250px}.navigation_menu-item{margin:1rem 2rem}.navigation_menu-item a{text-decoration:none;color:#1f2022;font-size:16px}.navigation_menu-item:last-child{color:#fff;cursor:pointer;background-size:300% 100%;background-image:linear-gradient(90deg,#6c63ff,#40e495,#30dd8a,#6c63ff);border-radius:16px;moz-transition:all .4s ease-in-out;transition:all .4s ease-in-out;padding:.5rem 1.5rem}.navigation_menu-item:last-child:hover{background-position:100% 0;moz-transition:all .4s ease-in-out;transition:all .4s ease-in-out}.navigation_menu-item:last-child:focus{outline:none}.navigation_menu-item:last-child a{color:#fff}@media (min-width:1024px){.navigation{height:60px;padding-top:0}.navigation--transparent{background:radial-gradient(105.59% 29604.11% at 0,at 50%,hsla(0,0%,100%,0) 0,hsla(0,0%,100%,0) 38.02%,hsla(0,0%,100%,.44) 76.46%,hsla(0,0%,100%,.44) 80.22%,hsla(0,0%,100%,.44) 86.1%,hsla(0,0%,100%,.44) 90.68%,hsla(0,0%,100%,.44) 94.6%);background:radial-gradient(105.59% 29604.11% at 0 50%,hsla(0,0%,100%,0) 15.63%,hsla(0,0%,100%,0) 38.02%,hsla(0,0%,100%,.44) 76.46%,hsla(0,0%,100%,.44) 80.22%,hsla(0,0%,100%,.44) 86.1%,hsla(0,0%,100%,.44) 90.68%,hsla(0,0%,100%,.44) 94.6%);transition:background-color .4s ease-in-out;box-shadow:none}.navigation.scroll{background-color:#fff;box-shadow:0 2px 12px 0 #e2eaf6}.navigation.scroll .navigation_signature{display:block}.navigation_wrapper{display:flex;justify-content:space-between;align-items:center}.navigation_hamburger{display:none}.navigation_logo{padding-top:0}.navigation_logo-svg,.navigation_signature{display:none}.navigation_menu{display:block;top:0;display:flex;justify-content:space-between;align-items:center;width:450px;background:none;overflow:visible}.navigation_menu-item{cursor:pointer}.navigation_menu-item a{color:#1f2022}.navigation_menu-item:last-child{margin:0}.navigation_menu-item:last-child:after{display:none}.navigation_menu-item:after{content:"";display:block;position:relative;top:14px;width:0;height:4px;background:#00ff7b;transition:width .3s}.navigation_menu-item:hover:after{width:100%}}',""]),t.exports=e},163:function(t,e,n){"use strict";var o=n(158);n.n(o).a},164:function(t,e,n){(e=n(26)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Roboto:400,700|Roboto+Mono:400,700|Caveat&display=swap);"]),e.push([t.i,".footer-wrapper{background-color:#1f2022;padding:1rem 5rem}.footer-wrapper a,.footer-wrapper p,.footer-wrapper span{color:#fff;text-decoration:none;font-size:12px}.footer-wrapper-social a{margin-right:1rem;margin-top:2rem}.footer-copyright-wrapper{background-color:#dedddd}.footer-copyright-wrapper p{margin:0;padding:1rem 0;font-size:12px}@media (min-width:1024px){.footer-wrapper{display:flex;justify-content:space-between;align-items:normal}}",""]),t.exports=e},165:function(t,e,n){var content=n(198);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("0678115c",content,!0,{sourceMap:!1})},166:function(t,e,n){var content=n(201);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("73da8582",content,!0,{sourceMap:!1})},167:function(t,e,n){var content=n(203);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("5204a906",content,!0,{sourceMap:!1})},168:function(t,e,n){var content=n(205);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("54582d3c",content,!0,{sourceMap:!1})},169:function(t,e,n){var content=n(218);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("0cb40df8",content,!0,{sourceMap:!1})},170:function(t,e,n){"use strict";var o={fetch:function(t){t.store.commit("toggle")},methods:{showNav:function(){this.$store.commit("toggle"),this.$refs.navigation_menu.classList.toggle("active")},changeNav:function(){window.scrollY>600?this.$refs.nav.classList.add("scroll"):this.$refs.nav.classList.remove("scroll")}},created:function(){window.addEventListener("scroll",this.changeNav)},destroyed:function(){window.removeEventListener("scroll",this.changeNav)}},r=(n(159),n(18)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{ref:"nav",staticClass:"navigation navigation--transparent section-100"},[n("div",{staticClass:"navigation_wrapper section-85 center"},[n("div",{staticClass:"navigation_logo"},[n("span",{staticClass:"navigation_signature"},[t._v("Ana-Maria Iancu")]),t._v(" "),n("div",{staticClass:"navigation_hamburger",on:{click:function(e){return t.showNav()}}},[n("svg",{attrs:{width:"37",height:"25",viewBox:"0 0 29 27",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("rect",{attrs:{width:"35",height:"5",rx:"3.5",fill:"rgb(0, 255, 123)"}}),t._v(" "),n("rect",{attrs:{width:"35",height:"5",rx:"3.5",fill:"rgb(0, 255, 123)"}}),t._v(" "),n("rect",{attrs:{width:"35",height:"5",rx:"3.5",fill:"rgb(0, 255, 123)"}}),t._v(" "),n("rect",{attrs:{y:"20",width:"35",height:"5",rx:"3.5",fill:"rgb(0, 255, 123)"}}),t._v(" "),n("rect",{attrs:{y:"20",width:"35",height:"5",rx:"3.5",fill:"rgb(0, 255, 123)"}}),t._v(" "),n("rect",{attrs:{y:"20",width:"35",height:"5",rx:"3.5",fill:"rgb(0, 255, 123)"}}),t._v(" "),n("rect",{attrs:{y:"10",width:"35",height:"5",rx:"3.5",fill:"rgb(0, 255, 123)"}}),t._v(" "),n("rect",{attrs:{y:"10",width:"35",height:"5",rx:"3.5",fill:"rgb(0, 255, 123)"}}),t._v(" "),n("rect",{attrs:{y:"10",width:"35",height:"5",rx:"3.5",fill:"rgb(0, 255, 123)"}})])])]),t._v(" "),n("ul",{ref:"navigation_menu",staticClass:"navigation_menu"},[n("li",{staticClass:"navigation_menu-item"},[n("nuxt-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),n("li",{staticClass:"navigation_menu-item"},[n("nuxt-link",{attrs:{to:"/#portofolio"}},[t._v("Portofolio")])],1),t._v(" "),n("nuxt-link",{attrs:{to:"/contact"}},[n("li",{staticClass:"navigation_menu-item"},[t._v("Contact me")])])],1)])])}),[],!1,null,null,null);e.a=component.exports},171:function(t,e,n){"use strict";n(163);var o=n(18),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("div",{staticClass:"footer-wrapper"},[t._m(0),t._v(" "),n("div",{staticClass:"footer-wrapper-social"},[n("span",[t._v("Follow me on social")]),n("br"),n("br"),t._v(" "),n("a",{staticClass:"icon linkedin",attrs:{href:"https://www.linkedin.com/in/anaiancu",target:"_blank"}},[n("svg",{attrs:{version:"1.1",id:"linkedin",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"32px",height:"32px",viewBox:"0 0 430.117 430.117","xml:space":"preserve",fill:"white"}},[n("g",[n("path",{attrs:{id:"LinkedIn",d:"M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707\n                                              c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21\n                                              v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824\n                                              C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463\n                                              c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z\n                                              M5.477,420.56h92.184v-277.32H5.477V420.56z"}})])])]),t._v(" "),n("a",{staticClass:"icon instagram",attrs:{href:"https://instagram.com/ana.intech/",target:"_blank"}},[n("svg",{attrs:{version:"1.1",id:"instagram",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"32px",height:"32px",viewBox:"0 0 169.063 169.063","xml:space":"preserve",fill:"white"}},[n("g",[n("path",{attrs:{d:"M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752\n                                              c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407\n                                              c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752\n                                              c17.455,0,31.656,14.201,31.656,31.655V122.407z"}}),t._v(" "),n("path",{attrs:{d:"M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561\n                                              C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561\n                                              c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z"}}),t._v(" "),n("path",{attrs:{d:"M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78\n                                              c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78\n                                              C135.661,29.421,132.821,28.251,129.921,28.251z"}})])])]),t._v(" "),n("a",{staticClass:"icon github",attrs:{href:"https://github.com/anaiancu24"}},[n("svg",{attrs:{version:"1.1",id:"github",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"32px",height:"32px",viewBox:"0 0 438.549 438.549","xml:space":"preserve",fill:"white"}},[n("g",[n("path",{attrs:{d:"M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365\n                                              c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63\n                                              c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996\n                                              c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136\n                                              c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559\n                                              c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559\n                                              c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997\n                                              c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851\n                                              c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136\n                                              c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41\n                                              c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126\n                                              c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817\n                                              c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994\n                                              c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849\n                                              c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24\n                                              c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979\n                                              c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146\n                                              c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995\n                                              c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906\n                                              C438.536,184.851,428.728,148.168,409.132,114.573z"}})])])])])]),t._v(" "),t._m(1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-wrapper-nav"},[n("a",{attrs:{href:""}},[t._v("Home |")]),t._v(" "),n("a",{attrs:{href:""}},[t._v("Portofolio |")]),t._v(" "),n("a",{attrs:{href:""}},[t._v("Contact")]),t._v(" "),n("p",[t._v("\n        Email:\n        "),n("a",{attrs:{href:"mailto:ana.iulia24@icloud.com"}},[n("span",[t._v("ana.iulia24@icloud.com")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer-copyright-wrapper center"},[e("p",[this._v("\n      Developed by Ana-Maria Iancu\n      "),e("span",[this._v("2020")])])])}],!1,null,null,null);e.a=component.exports},197:function(t,e,n){"use strict";var o=n(165);n.n(o).a},198:function(t,e,n){(e=n(26)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Roboto:400,700|Roboto+Mono:400,700|Caveat&display=swap);"]),e.push([t.i,".header{position:relative;top:-50px;background:url(/images/hero_gradient.png) no-repeat;height:450px}.header_text{position:relative;top:180px}.header_skill-circles{display:none}@media (min-width:1024px){.header{top:-40px;height:430px;background-position-x:0;padding:250px 0}.header_text{width:92vw;position:relative;top:0;text-align:right}.header_skill-circles{display:flex;justify-content:center;align-items:center;padding-left:5%}}",""]),t.exports=e},199:function(t,e,n){t.exports=n.p+"img/acf8644.JPG"},200:function(t,e,n){"use strict";var o=n(166);n.n(o).a},201:function(t,e,n){(e=n(26)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Roboto:400,700|Roboto+Mono:400,700|Caveat&display=swap);"]),e.push([t.i,".section_50-50_right img{width:300px;border-radius:8px}@media (min-width:1024px){.section_50-50_left{text-align:left;max-width:600px}}",""]),t.exports=e},202:function(t,e,n){"use strict";var o=n(167);n.n(o).a},203:function(t,e,n){(e=n(26)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Roboto:400,700|Roboto+Mono:400,700|Caveat&display=swap);"]),e.push([t.i,".section-cards_wrapper .card{box-shadow:-1px 2px 17px -6px rgba(151,152,153,.7);border-radius:65px;max-width:450px;padding:16px;margin-bottom:2rem}.section-cards_wrapper .card-image{width:200px}.section-cards_wrapper .card-title{margin:5px 0}.section-cards_wrapper .card-list{text-align:left;padding-left:22px}.section-cards_wrapper .card-list-item{margin-bottom:.5rem;line-height:1.5}.section-cards_wrapper .skills{display:flex;justify-content:center;align-items:center;flex-wrap:wrap}.section-cards_wrapper .skills-item{font-size:12px;padding:.75rem;background:#00ff7b;border-radius:65px;margin:.5rem}@media (min-width:1024px){.section-cards_wrapper{display:flex;justify-content:space-around;align-items:normal}.section-cards_wrapper .card{padding:32px;margin-bottom:0}.section-cards_wrapper .card-image{width:300px;height:180px}.section-cards_wrapper .card-title{margin:2rem 0}.section-cards_wrapper .card-list{text-align:left;padding-left:32px}.section-cards_wrapper .card-list-item{margin-bottom:1rem;line-height:2}}",""]),t.exports=e},204:function(t,e,n){"use strict";var o=n(168);n.n(o).a},205:function(t,e,n){(e=n(26)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Roboto:400,700|Roboto+Mono:400,700|Caveat&display=swap);"]),e.push([t.i,".call-to-action_button{color:#fff;cursor:pointer;background-size:300% 100%;background-image:linear-gradient(90deg,#6c63ff,#40e495,#30dd8a,#6c63ff);border-radius:16px;padding:2rem 3rem}.call-to-action_button,.call-to-action_button:hover{moz-transition:all .4s ease-in-out;transition:all .4s ease-in-out}.call-to-action_button:hover{background-position:100% 0}.call-to-action_button:focus{outline:none}",""]),t.exports=e},206:function(t,e,n){t.exports=n.p+"img/68d8545.png"},207:function(t,e,n){t.exports=n.p+"videos/b82a7f9.mp4"},208:function(t,e,n){t.exports=n.p+"img/2efd3d2.png"},209:function(t,e,n){t.exports=n.p+"img/9502641.jpg"},210:function(t,e,n){t.exports=n.p+"videos/d4c2aef.mp4"},211:function(t,e,n){t.exports=n.p+"img/749a1b1.jpg"},212:function(t,e,n){t.exports=n.p+"img/7016035.jpg"},213:function(t,e,n){t.exports=n.p+"img/2a54073.png"},214:function(t,e,n){t.exports=n.p+"videos/1ede6ac.mp4"},215:function(t,e,n){t.exports=n.p+"videos/12b9397.mp4"},216:function(t,e,n){t.exports=n.p+"img/5f9a6c6.png"},217:function(t,e,n){"use strict";var o=n(169);n.n(o).a},218:function(t,e,n){(e=n(26)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Roboto:400,700|Roboto+Mono:400,700|Caveat&display=swap);"]),e.push([t.i,".portofolio-wrapper .row{display:flex;flex-wrap:wrap;padding:0 4px}.portofolio-wrapper .column{flex:24%;max-width:24%;padding:0 4px}.portofolio-wrapper .column img,.portofolio-wrapper .column video{margin-top:8px;vertical-align:middle;width:100%}@media screen and (max-width:800px){.portofolio-wrapper .column{flex:50%;max-width:50%}}@media screen and (max-width:600px){.portofolio-wrapper .column{flex:100%;max-width:100%}}",""]),t.exports=e},220:function(t,e,n){"use strict";n.r(e);var o=n(170),r=(n(197),n(18)),c=Object(r.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header section-100 center",attrs:{id:"header"}},[e("div",{staticClass:"header_text"},[e("h2",{staticClass:"header_name"},[this._v("Hi, there!")]),this._v(" "),e("h2",{staticClass:"header_name"},[this._v("I'm Ana-Maria Iancu")]),this._v(" "),e("h1",{staticClass:"header_title"},[this._v("Full Stack Web Developer")])])])}],!1,null,null,null).exports,l=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"section_50-50 section-85 center"},[o("div",{staticClass:"section_50-50_left"},[o("h3",[t._v("Some facts about me")]),t._v(" "),o("p",[t._v("I'm a Full Stack Developer from Romania, living in Amsterdam. I'm on a mission to discover as much as possible about web. From design to development, analytics, data, machine learning, I want to know it all. ")]),t._v(" "),o("p",[t._v("I don't have any particular talents, but I do have the ability and the willing to learn new skills all the time.")]),t._v(" "),o("p",[t._v("I'm open for new projects so if you think you have something challenging, "),o("a",{attrs:{href:"/contact"}},[o("span",{staticStyle:{color:"#00ff7b"}},[t._v("let's have a chat")])]),t._v("!")])]),t._v(" "),o("div",{staticClass:"section_50-50_right"},[o("img",{attrs:{src:n(199),alt:"woman-developer-illustration"}})])])}],d=(n(200),Object(r.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),l,!1,null,null,null).exports),h={data:function(){return{cardsInfo:this.$store.state.cardsInfo}}},v=(n(202),Object(r.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-cards section-85 padding-64 center"},[n("h3",[t._v("Skills and abilities")]),t._v(" "),n("p",{staticClass:"mb-100"},[t._v("In any industry, soft skills are as important as hard skills.")]),t._v(" "),n("div",{staticClass:"section-cards_wrapper"},t._l(t.cardsInfo,(function(e,o){return n("div",{key:o,staticClass:"card"},[n("img",{staticClass:"card-image",attrs:{src:e.image,alt:e.imageAlt}}),t._v(" "),n("h4",{staticClass:"card-title"},[t._v(t._s(e.title))]),t._v(" "),n("ul",{staticClass:"card-list"},t._l(e.listItems,(function(e,o){return n("li",{key:o,staticClass:"card-list-item"},[t._v(t._s(e))])})),0),t._v(" "),n("div",{staticClass:"skills"},t._l(e.skillItems,(function(e,o){return n("div",{key:o,staticClass:"skills-item"},[n("span",[t._v(t._s(e))])])})),0)])})),0)])}),[],!1,null,null,null).exports),m=(n(204),Object(r.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"call-to-action section-85 mb-100 center"},[e("h4",{staticClass:"call-to-action_text"},[this._v("Do you have any questions or want to work together?")]),this._v(" "),e("a",{attrs:{href:"/contact"}},[e("button",{staticClass:"call-to-action_button"},[this._v("Send me a message")])])])}],!1,null,null,null).exports),f=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"portofolio section-100 padding-64 center",attrs:{id:"portofolio"}},[o("h3",[t._v("Portofolio")]),t._v(" "),o("p",{staticClass:"mb-100"},[t._v("Websites are my specialty, but I wouldn't say no to a poster, logo or intro, my guilty pleasures.")]),t._v(" "),o("div",{staticClass:"portofolio-wrapper mb-100"},[o("div",{staticClass:"row"},[o("div",{staticClass:"column"},[o("img",{staticStyle:{width:"100%"},attrs:{src:n(206)}}),t._v(" "),o("video",{staticStyle:{width:"100%"},attrs:{controls:""}},[o("source",{attrs:{src:n(207),type:"video/mp4"}})]),t._v(" "),o("img",{staticStyle:{width:"100%"},attrs:{src:n(208)}})]),t._v(" "),o("div",{staticClass:"column"},[o("img",{staticStyle:{width:"100%"},attrs:{src:n(209)}}),t._v(" "),o("video",{staticStyle:{width:"100%"},attrs:{controls:""}},[o("source",{attrs:{src:n(210),type:"video/mp4"}})]),t._v(" "),o("img",{staticStyle:{width:"100%"},attrs:{src:n(211)}}),t._v(" "),o("img",{staticStyle:{width:"100%"},attrs:{src:n(212)}})]),t._v(" "),o("div",{staticClass:"column"},[o("img",{staticStyle:{width:"100%"},attrs:{src:n(213)}}),t._v(" "),o("video",{staticStyle:{width:"100%"},attrs:{controls:""}},[o("source",{attrs:{src:n(214),type:"video/mp4"}})])]),t._v(" "),o("div",{staticClass:"column"},[o("video",{staticStyle:{width:"100%"},attrs:{controls:""}},[o("source",{attrs:{src:n(215),type:"video/mp4"}})]),t._v(" "),o("img",{staticStyle:{width:"100%"},attrs:{src:n(216)}})])])])])}],_=(n(217),Object(r.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),f,!1,null,null,null).exports),x=n(171),w={components:{Navigation:o.a,Header:c,About:d,Skills:v,CTA:m,Portofolio:_,Footer:x.a}},y=Object(r.a)(w,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Navigation"),this._v(" "),e("Header"),this._v(" "),e("About"),this._v(" "),e("Skills"),this._v(" "),e("CTA"),this._v(" "),e("Portofolio"),this._v(" "),e("CTA"),this._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.default=y.exports}}]);