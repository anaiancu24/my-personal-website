(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{163:function(t,e,o){var content=o(166);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(36).default)("63899b2a",content,!0,{sourceMap:!1})},164:function(t,e,o){var content=o(169);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(36).default)("1c78f610",content,!0,{sourceMap:!1})},165:function(t,e,o){"use strict";o(163)},166:function(t,e,o){(e=o(35)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Roboto:400,700|Roboto+Mono:400,700|Caveat&display=swap);"]),e.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&family=Open+Sans&display=swap);"]),e.push([t.i,'.navigation{position:absolute;top:0;z-index:1;height:50px;background-color:#fff;box-shadow:0 2px 12px 0 #e2eaf6}.navigation_wrapper{height:100%}.navigation_logo{display:flex;justify-content:space-between;align-items:center;position:relative;z-index:2;padding-top:.7rem}.navigation_logo-svg{width:90px}.navigation_hamburger{display:block}.navigation_signature{font-family:"Caveat",cursive;font-size:24px}.navigation_menu{list-style:none;background:#fff;text-align:center;margin:0;padding:0;position:relative;top:-11px;max-height:0;overflow:hidden;transition:max-height .8s}.navigation_menu.active{max-height:250px}.navigation_menu-item{margin:1rem 2rem}.navigation_menu-item a{text-decoration:none;color:#1f2022;font-size:16px}.navigation_menu-item:last-child{color:#fff;cursor:pointer;background-size:300% 100%;background:#1e9cf9;border-radius:8px;moz-transition:all .4s ease-in-out;transition:all .4s ease-in-out;padding:.5rem 1.5rem}.navigation_menu-item:last-child:hover{background-position:100% 0;moz-transition:all .4s ease-in-out;transition:all .4s ease-in-out}.navigation_menu-item:last-child:focus{outline:none}.navigation_menu-item:last-child a{color:#fff}@media(min-width:1024px){.navigation{height:60px;padding-top:0}.navigation--transparent,.navigation.scroll{background-color:#fff;box-shadow:0 2px 12px 0 #e2eaf6}.navigation.scroll .navigation_signature{display:block}.navigation_wrapper{display:flex;justify-content:center;align-items:center}.navigation_hamburger{display:none}.navigation_logo{padding-top:0}.navigation_logo-svg,.navigation_signature{display:none}.navigation_menu{display:block;top:0;display:flex;justify-content:center;align-items:center;width:450px;background:none;overflow:visible}.navigation_menu-item{cursor:pointer}.navigation_menu-item a{color:#1f2022}.navigation_menu-item:last-child{margin:0}.navigation_menu-item:last-child:after{display:none}.navigation_menu-item:after{content:"";display:block;position:relative;top:14px;width:0;height:4px;background:#1e9cf9;transition:width .3s}.navigation_menu-item:hover:after{width:100%}}',""]),t.exports=e},168:function(t,e,o){"use strict";o(164)},169:function(t,e,o){(e=o(35)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Roboto:400,700|Roboto+Mono:400,700|Caveat&display=swap);"]),e.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&family=Open+Sans&display=swap);"]),e.push([t.i,".footer-wrapper{background-color:#1f2022;padding:1rem 5rem}.footer-wrapper a,.footer-wrapper p,.footer-wrapper span{color:#fff;text-decoration:none;font-size:12px}.footer-wrapper-social a{margin-right:1rem;margin-top:2rem}.footer-copyright-wrapper{background-color:#dedddd}.footer-copyright-wrapper p{margin:0;padding:1rem 0;font-size:12px}@media(min-width:1024px){.footer-wrapper{display:flex;justify-content:space-between;align-items:normal}}",""]),t.exports=e},170:function(t,e,o){"use strict";var n={fetch:function(t){t.store.commit("toggle")},methods:{showNav:function(){this.$store.commit("toggle"),this.$refs.navigation_menu.classList.toggle("active")}}},r=(o(165),o(22)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nav",{ref:"nav",staticClass:"navigation navigation--transparent section-100"},[o("div",{staticClass:"navigation_wrapper section-85 center"},[o("div",{staticClass:"navigation_logo"},[o("div",{staticClass:"navigation_hamburger",on:{click:function(e){return t.showNav()}}},[o("svg",{attrs:{width:"37",height:"25",viewBox:"0 0 29 27",fill:"none"}},[o("rect",{attrs:{width:"35",height:"5",rx:"3.5",fill:"#1e9cf9"}}),t._v(" "),o("rect",{attrs:{width:"35",height:"5",rx:"3.5",fill:"#1e9cf9"}}),t._v(" "),o("rect",{attrs:{width:"35",height:"5",rx:"3.5",fill:"#1e9cf9"}}),t._v(" "),o("rect",{attrs:{y:"20",width:"35",height:"5",rx:"3.5",fill:"#1e9cf9"}}),t._v(" "),o("rect",{attrs:{y:"20",width:"35",height:"5",rx:"3.5",fill:"#1e9cf9"}}),t._v(" "),o("rect",{attrs:{y:"20",width:"35",height:"5",rx:"3.5",fill:"#1e9cf9"}}),t._v(" "),o("rect",{attrs:{y:"10",width:"35",height:"5",rx:"3.5",fill:"#1e9cf9"}}),t._v(" "),o("rect",{attrs:{y:"10",width:"35",height:"5",rx:"3.5",fill:"#1e9cf9"}}),t._v(" "),o("rect",{attrs:{y:"10",width:"35",height:"5",rx:"3.5",fill:"#1e9cf9"}})])])]),t._v(" "),o("ul",{ref:"navigation_menu",staticClass:"navigation_menu"},[o("li",{staticClass:"navigation_menu-item"},[o("nuxt-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),o("li",{staticClass:"navigation_menu-item"},[o("nuxt-link",{attrs:{to:"/#portofolio"}},[t._v("Portfolio")])],1),t._v(" "),o("nuxt-link",{attrs:{to:"/contact"}},[o("li",{staticClass:"navigation_menu-item"},[t._v("Contact")])])],1)])])}),[],!1,null,null,null);e.a=component.exports},171:function(t,e,o){"use strict";o(168);var n=o(22),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer"},[e("div",{staticClass:"footer-wrapper"},[this._m(0),this._v(" "),e("div",{staticClass:"footer-wrapper-social"},[e("span",[this._v("Follow me on social")]),e("br"),e("br"),this._v(" "),e("a",{staticClass:"icon linkedin",attrs:{href:"https://www.linkedin.com/in/anaiancu",target:"_blank"}},[e("svg",{attrs:{version:"1.1",id:"linkedin",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"32px",height:"32px",viewBox:"0 0 430.117 430.117","xml:space":"preserve",fill:"white"}},[e("g",[e("path",{attrs:{id:"LinkedIn",d:"M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707\n                                              c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21\n                                              v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824\n                                              C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463\n                                              c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z\n                                              M5.477,420.56h92.184v-277.32H5.477V420.56z"}})])])]),this._v(" "),e("a",{staticClass:"icon github",attrs:{href:"https://github.com/anaiancu24"}},[e("svg",{attrs:{version:"1.1",id:"github",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"32px",height:"32px",viewBox:"0 0 438.549 438.549","xml:space":"preserve",fill:"white"}},[e("g",[e("path",{attrs:{d:"M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365\n                                              c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63\n                                              c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996\n                                              c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136\n                                              c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559\n                                              c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559\n                                              c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997\n                                              c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851\n                                              c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136\n                                              c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41\n                                              c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126\n                                              c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817\n                                              c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994\n                                              c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849\n                                              c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24\n                                              c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979\n                                              c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146\n                                              c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995\n                                              c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906\n                                              C438.536,184.851,428.728,148.168,409.132,114.573z"}})])])])])]),this._v(" "),this._m(1)])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"footer-wrapper-nav"},[o("a",{attrs:{href:"/"}},[t._v("Home |")]),t._v(" "),o("a",{attrs:{href:"/#portofolio"}},[t._v("Portfolio |")]),t._v(" "),o("a",{attrs:{href:"/contact"}},[t._v("Contact")]),t._v(" "),o("p",[t._v("\n        Email:\n        "),o("a",{attrs:{href:"mailto:ana.iulia24@icloud.com"}},[o("span",[t._v("ana.iulia24@icloud.com")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer-copyright-wrapper center"},[e("p",[this._v("\n      Developed by Ana-Maria Iancu\n      "),e("span",[this._v("2021")])])])}],!1,null,null,null);e.a=component.exports},173:function(t,e,o){var content=o(204);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(36).default)("0678115c",content,!0,{sourceMap:!1})},174:function(t,e,o){var content=o(207);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(36).default)("73da8582",content,!0,{sourceMap:!1})},175:function(t,e,o){var content=o(209);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(36).default)("5204a906",content,!0,{sourceMap:!1})},176:function(t,e,o){var content=o(211);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(36).default)("54582d3c",content,!0,{sourceMap:!1})},177:function(t,e,o){var content=o(225);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(36).default)("0cb40df8",content,!0,{sourceMap:!1})},203:function(t,e,o){"use strict";o(173)},204:function(t,e,o){(e=o(35)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Roboto:400,700|Roboto+Mono:400,700|Caveat&display=swap);"]),e.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&family=Open+Sans&display=swap);"]),e.push([t.i,".header{position:relative;top:-100px;height:350px}.header_text{position:relative;top:180px}@media(min-width:1024px){.header{top:unset;height:550px;padding:250px 100px 0;background-position-x:70%;background-position-y:100%;background-image:url(/images/illustration_ana_memoji.jpg);background-repeat:no-repeat}.header_text{width:92vw;position:relative;top:50px;text-align:left}}",""]),t.exports=e},205:function(t,e,o){t.exports=o.p+"img/illust_peace_ana.bbe3c67.png"},206:function(t,e,o){"use strict";o(174)},207:function(t,e,o){(e=o(35)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Roboto:400,700|Roboto+Mono:400,700|Caveat&display=swap);"]),e.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&family=Open+Sans&display=swap);"]),e.push([t.i,".section_50-50{background-image:url(/images/gradient_bg.jpg);background-size:cover;padding:20px 30px;overflow-x:hidden}.section_50-50_right img{width:200px;border-radius:8px}.section_50-50 .about-cta{text-align:right}@media(min-width:1024px){.section_50-50{padding:50px 150px}.section_50-50_left{text-align:left;max-width:500px;padding:40px;border-radius:30px;-webkit-backdrop-filter:blur(50px);backdrop-filter:blur(50px);box-shadow:0 10px 25px 0 rgba(32,32,32,.5);background-image:linear-gradient(145deg,hsla(0,0%,100%,.65) 2%,hsla(0,0%,95.3%,.17) 99%)}.section_50-50_right img{width:400px}}",""]),t.exports=e},208:function(t,e,o){"use strict";o(175)},209:function(t,e,o){(e=o(35)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Roboto:400,700|Roboto+Mono:400,700|Caveat&display=swap);"]),e.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&family=Open+Sans&display=swap);"]),e.push([t.i,".skills{display:flex;justify-content:center;align-items:center;flex-wrap:wrap}.skills-item{font-size:12px;padding:.75rem;background:#dda6f8;border-radius:65px;margin:.5rem}.section-cards_wrapper .card{box-shadow:-1px 2px 17px -6px rgba(151,152,153,.7);border-radius:16px;max-width:450px;padding:16px;margin-bottom:2rem;position:relative;height:700px}.section-cards_wrapper .card-image{width:200px}.section-cards_wrapper .card-title{margin:5px 0}.section-cards_wrapper .card-list{text-align:left;padding-left:22px}.section-cards_wrapper .card-list-item{margin-bottom:.5rem;line-height:1.5}.section-cards_wrapper .skills{position:absolute;bottom:16px}@media(min-width:1024px){.section-cards_wrapper{display:flex;justify-content:space-around;align-items:normal}.section-cards_wrapper .card{padding:32px;margin-bottom:0}.section-cards_wrapper .card-image{width:300px;height:180px}.section-cards_wrapper .card-title{margin:2rem 0}.section-cards_wrapper .card-list{text-align:left;padding-left:32px}.section-cards_wrapper .card-list-item{margin-bottom:1rem;line-height:2}}",""]),t.exports=e},210:function(t,e,o){"use strict";o(176)},211:function(t,e,o){(e=o(35)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Roboto:400,700|Roboto+Mono:400,700|Caveat&display=swap);"]),e.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&family=Open+Sans&display=swap);"]),e.push([t.i,".call-to-action_button{color:#fff;cursor:pointer;background-size:300% 100%;background:#1e9cf9;border-radius:8px;padding:1rem 2rem}.call-to-action_button,.call-to-action_button:hover{moz-transition:all .4s ease-in-out;transition:all .4s ease-in-out}.call-to-action_button:hover{background-position:100% 0}.call-to-action_button:focus{outline:none}.small{padding:.7rem 1.5rem;font-size:16px}",""]),t.exports=e},212:function(t,e,o){t.exports=o.p+"videos/frontend_3.f411297.mp4"},213:function(t,e,o){t.exports=o.p+"videos/portofolio_intro1.f0f39b8.mp4"},214:function(t,e,o){t.exports=o.p+"videos/portofolio_intro4.77e6332.mp4"},215:function(t,e,o){t.exports=o.p+"img/portofolio_poster1.79730bd.jpg"},216:function(t,e,o){t.exports=o.p+"videos/portofolio_intro3.266e3e4.mp4"},217:function(t,e,o){t.exports=o.p+"videos/portofolio_intro2.b9ea1ba.mp4"},218:function(t,e,o){t.exports=o.p+"img/portofolio_logo1.e56e259.jpg"},219:function(t,e,o){t.exports=o.p+"img/frontend_1.726558c.gif"},220:function(t,e,o){t.exports=o.p+"img/frontend_2.dbb8e6e.gif"},221:function(t,e,o){t.exports=o.p+"img/chrome_store.8ddf430.png"},222:function(t,e,o){t.exports=o.p+"img/port_booksmart.efca712.gif"},223:function(t,e,o){t.exports=o.p+"img/skillshare.55d5133.png"},224:function(t,e,o){"use strict";o(177)},225:function(t,e,o){(e=o(35)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Roboto:400,700|Roboto+Mono:400,700|Caveat&display=swap);"]),e.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&family=Open+Sans&display=swap);"]),e.push([t.i,".portofolio{padding:20px;max-width:320px}.portofolio-wrapper{display:flex;justify-content:center;align-items:center;margin:0 auto}.portofolio-wrapper .button-toggle-container{display:flex;justify-content:center;align-items:center;background-color:#fff;box-shadow:0 2px 12px 0 #e2eaf6;border-radius:8px;flex-wrap:wrap}.portofolio-wrapper .button-toggle-container .button-toggle{border-radius:8px;font-size:16px;color:#576784;background:#fff;padding:16px 20px;outline:none;cursor:pointer;flex-basis:50%}.portofolio-wrapper .button-toggle-container .selected{background:#1e9cf9;color:#fff}.portofolio-wrapper .row{display:flex;flex-wrap:wrap;padding:0 4px}.portofolio-wrapper .column{flex:32%;max-width:32%;padding:0 4px}.portofolio-wrapper .column img,.portofolio-wrapper .column video{margin-top:8px;vertical-align:middle;width:100%}@media screen and (max-width:800px){.portofolio-wrapper .column{flex:50%;max-width:50%}}@media screen and (max-width:600px){.portofolio-wrapper .column{flex:100%;max-width:100%}}.portofolio-item .booksmart-gif,.portofolio-wrapper .frontend3{max-width:300px}.portofolio .chrome-store-img{width:200px}.portofolio .skillshare-pres img{max-width:300px}.portofolio .section_50-50{padding:0}.portofolio .section_50-50 img{height:300px}@media(min-width:1024px){.portofolio{padding:0;max-width:unset}.portofolio-item .booksmart-gif{max-width:1000px}.portofolio-wrapper .button-toggle-container{width:-webkit-max-content;width:-moz-max-content;width:max-content}.portofolio-wrapper .button-toggle-container .button-toggle{flex-basis:unset}.portofolio .section_50-50{padding:0;justify-content:center}.portofolio .section_50-50 img{height:500px}.portofolio .section_50-50 .content{width:80%;text-align:left;margin:0 auto}.portofolio .frontend3{max-width:800px}.portofolio .skillshare-pres{max-width:1000px;margin:100px auto}.portofolio .skillshare-pres img{max-width:1000px}}.skills{display:flex;justify-content:center;align-items:center;flex-wrap:wrap}.skills-item{font-size:12px;padding:.75rem;background:#dda6f8;border-radius:65px;margin:.5rem}.section-cards_wrapper .card{box-shadow:-1px 2px 17px -6px rgba(151,152,153,.7);border-radius:16px;max-width:450px;padding:16px;margin-bottom:2rem;position:relative;height:700px}.section-cards_wrapper .card-image{width:200px}.section-cards_wrapper .card-title{margin:5px 0}.section-cards_wrapper .card-list{text-align:left;padding-left:22px}.section-cards_wrapper .card-list-item{margin-bottom:.5rem;line-height:1.5}.section-cards_wrapper .skills{position:absolute;bottom:16px}@media(min-width:1024px){.section-cards_wrapper{display:flex;justify-content:space-around;align-items:normal}.section-cards_wrapper .card{padding:32px;margin-bottom:0}.section-cards_wrapper .card-image{width:300px;height:180px}.section-cards_wrapper .card-title{margin:2rem 0}.section-cards_wrapper .card-list{text-align:left;padding-left:32px}.section-cards_wrapper .card-list-item{margin-bottom:1rem;line-height:2}}",""]),t.exports=e},227:function(t,e,o){"use strict";o.r(e);var n=o(170),r=(o(203),o(22)),l=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"header section-100 center",attrs:{id:"header"}},[o("div",{staticClass:"header_text"},[o("h2",{staticClass:"header_name backInRight delay-2s"},[t._v("Ana-Maria Iancu")]),t._v(" "),o("h1",{staticClass:"header_title backInRight delay-3s"},[t._v("Full Stack Web Developer")]),t._v(" "),o("div",{staticClass:"footer-wrapper-social"},[o("a",{staticClass:"icon linkedin",attrs:{href:"https://www.linkedin.com/in/anaiancu",target:"_blank"}},[o("svg",{attrs:{width:"48px",height:"48px",viewBox:"0 0 48 48",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[o("title",[t._v("14206930261556105324")]),t._v(" "),o("g",{attrs:{id:"Website",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[o("g",{attrs:{id:"Desktop-HD",transform:"translate(-123.000000, -576.000000)"}},[o("g",{attrs:{id:"14206930261556105324",transform:"translate(123.000000, 576.000000)"}},[o("path",{attrs:{d:"M0,24 C0,10.7452 10.7452,0 24,0 C37.2548,0 48,10.7452 48,24 C48,37.2548 37.2548,48 24,48 C10.7452,48 0,37.2548 0,24 Z",id:"Path",fill:"#0077B5","fill-rule":"nonzero"}}),t._v(" "),o("path",{attrs:{d:"M17.3188,14.8227 C17.3188,16.3918 16.1377,17.6473 14.2412,17.6473 L14.2064,17.6473 C12.3805,17.6473 11.2,16.3918 11.2,14.8227 C11.2,13.2204 12.4164,12 14.277,12 C16.1377,12 17.2835,13.2204 17.3188,14.8227 Z M16.9605,19.8778 L16.9605,36.2196 L11.5216,36.2196 L11.5216,19.8778 L16.9605,19.8778 Z M36.5752,36.2196 L36.5754,26.8497 C36.5754,21.8303 33.8922,19.4941 30.3131,19.4941 C27.4254,19.4941 26.1325,21.0802 25.4107,22.1929 L25.4107,19.8783 L19.9711,19.8783 C20.0428,21.4117 19.9711,36.22 19.9711,36.22 L25.4107,36.22 L25.4107,27.0934 C25.4107,26.605 25.446,26.1178 25.5898,25.7681 C25.9829,24.7924 26.8779,23.7822 28.3805,23.7822 C30.3494,23.7822 31.1365,25.2807 31.1365,27.4767 L31.1365,36.2196 L36.5752,36.2196 Z",id:"Shape",fill:"#FFFFFF"}})])])])])]),t._v(" "),o("a",{staticClass:"icon github",attrs:{href:"https://github.com/anaiancu24"}},[o("svg",{attrs:{width:"48px",height:"48px",viewBox:"0 0 48 48",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[o("title",[t._v("5782357641556105320")]),t._v(" "),o("g",{attrs:{id:"Website",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[o("g",{attrs:{id:"Desktop-HD",transform:"translate(-187.000000, -576.000000)",fill:"#161514","fill-rule":"nonzero"}},[o("g",{attrs:{id:"5782357641556105320",transform:"translate(187.000000, 576.000000)"}},[o("path",{attrs:{d:"M24.0002,0 C10.747,0 0,11.0169 0,24.6076 C0,35.4799 6.87679,44.7039 16.4128,47.9577 C17.6123,48.1855 18.0526,47.4239 18.0526,46.7739 C18.0526,46.1872 18.0304,44.2487 18.02,42.1925 C11.3431,43.6811 9.93424,39.2891 9.93424,39.2891 C8.84249,36.4448 7.26945,35.6885 7.26945,35.6885 C5.09192,34.1613 7.43359,34.1926 7.43359,34.1926 C9.84363,34.3662 11.1126,36.7285 11.1126,36.7285 C13.2532,40.4904 16.7272,39.4028 18.0967,38.7741 C18.3121,37.1836 18.9341,36.0981 19.6205,35.4836 C14.2897,34.8613 8.6859,32.7513 8.6859,23.3224 C8.6859,20.6358 9.62345,18.4406 11.1587,16.7174 C10.9095,16.0976 10.088,13.5947 11.3912,10.2052 C11.3912,10.2052 13.4066,9.54387 17.993,12.7276 C19.9074,12.1824 21.9606,11.9089 24.0002,11.8996 C26.0398,11.9089 28.0946,12.1824 30.0126,12.7276 C34.5934,9.54387 36.606,10.2052 36.606,10.2052 C37.9123,13.5947 37.0905,16.0976 36.8413,16.7174 C38.3801,18.4406 39.3113,20.6358 39.3113,23.3224 C39.3113,32.7738 33.6968,34.8548 28.3525,35.464 C29.2133,36.2276 29.9804,37.7252 29.9804,40.021 C29.9804,43.3135 29.9526,45.9634 29.9526,46.7739 C29.9526,47.4288 30.3846,48.1961 31.6011,47.9544 C41.132,44.697 48,35.4762 48,24.6076 C48,11.0169 37.2546,0 24.0002,0 Z",id:"Path"}}),t._v(" "),o("path",{attrs:{d:"M9.16085,35.1623 C9.10809,35.2833 8.92085,35.3196 8.75027,35.2365 C8.57652,35.157 8.47893,34.992 8.53526,34.8706 C8.58683,34.7459 8.77447,34.7112 8.94782,34.7947 C9.12197,34.8742 9.22115,35.0408 9.16085,35.1623 Z",id:"Path"}}),t._v(" "),o("path",{attrs:{d:"M10.1312,36.263 C10.0169,36.3707 9.79358,36.3207 9.64205,36.1504 C9.48535,35.9806 9.456,35.7534 9.57183,35.6441 C9.68965,35.5363 9.90624,35.5868 10.0633,35.7566 C10.22,35.9285 10.2506,36.1541 10.1312,36.263 Z",id:"Path"}}),t._v(" "),o("path",{attrs:{d:"M11.0757,37.6663 C10.9289,37.77 10.6889,37.6728 10.5406,37.4561 C10.3938,37.2394 10.3938,36.9796 10.5437,36.8755 C10.6925,36.7714 10.9289,36.865 11.0793,37.0801 C11.2257,37.3004 11.2257,37.5602 11.0757,37.6663 Z",id:"Path"}}),t._v(" "),o("path",{attrs:{d:"M12.3697,39.0219 C12.2384,39.1692 11.9588,39.1297 11.7541,38.9287 C11.5446,38.7322 11.4863,38.4534 11.618,38.3062 C11.7509,38.1585 12.0321,38.2001 12.2384,38.3994 C12.4463,38.5955 12.5098,38.8763 12.3697,39.0219 Z",id:"Path"}}),t._v(" "),o("path",{attrs:{d:"M14.1548,39.8091 C14.0969,40 13.8276,40.0867 13.5562,40.0056 C13.2853,39.9221 13.108,39.6986 13.1627,39.5057 C13.219,39.3137 13.4896,39.2233 13.7629,39.31 C14.0334,39.3932 14.2112,39.6151 14.1548,39.8091 Z",id:"Path"}}),t._v(" "),o("path",{attrs:{d:"M16.1153,39.9552 C16.122,40.1561 15.892,40.3228 15.6071,40.3264 C15.3207,40.3329 15.089,40.1703 15.0859,39.9726 C15.0859,39.7696 15.3108,39.6046 15.5972,39.5998 C15.882,39.5941 16.1153,39.7555 16.1153,39.9552 Z",id:"Path"}}),t._v(" "),o("path",{attrs:{d:"M17.9397,39.6392 C17.9738,39.8353 17.7759,40.0366 17.493,40.0903 C17.2149,40.1419 16.9575,40.0209 16.9222,39.8264 C16.8877,39.6255 17.0892,39.4241 17.3669,39.3721 C17.6501,39.3221 17.9036,39.4399 17.9397,39.6392 Z",id:"Path"}})])])])])])])]),t._v(" "),o("div",{staticClass:"header_illust"})])}),[],!1,null,null,null).exports,c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section_50-50 center"},[n("div",{staticClass:"section_50-50_right"},[n("img",{attrs:{src:o(205),alt:"woman-developer-illustration"}})]),t._v(" "),n("div",{staticClass:"section_50-50_left"},[n("h3",[t._v("About me")]),t._v(" "),n("p",[t._v("I'm a Full Stack Developer and a Digital Marketing\nenthusiast. I'm on a mission to discover as much as possible about web. From design to development, analytics, data, machine learning, I want to know it all. ")]),t._v(" "),n("p",[t._v("With a background in marketing, I gained valuable\nskills such as data analysis, SEO, UI/UX, branding,\ngrowth hacking, social media and many more from \nworking in different projects. ")]),t._v(" "),n("p",[t._v("I am skilled at writing well-designed, testable and \nefficient code using current best practices in \nWeb development. ")]),t._v(" "),n("p",[t._v("I'm open for new projects so if you think you have something challenging, let's have a chat!")]),t._v(" "),n("div",{staticClass:"about-cta"},[n("a",{attrs:{href:"/contact"}},[n("button",{staticClass:"call-to-action_button small"},[t._v("Contact")])])])])])}],d=(o(206),Object(r.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),c,!1,null,null,null).exports),h={data:function(){return{cardsInfo:this.$store.state.cardsInfo}}},m=(o(208),Object(r.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"section-cards section-85 padding-64 center"},[o("h3",[t._v("Skills and abilities")]),t._v(" "),o("p",{staticClass:"mb-100"},[t._v("In any industry, soft skills are as important as hard skills.")]),t._v(" "),o("div",{staticClass:"section-cards_wrapper"},t._l(t.cardsInfo,(function(e,n){return o("div",{key:n,staticClass:"card"},[o("img",{staticClass:"card-image",attrs:{src:e.image,alt:e.imageAlt}}),t._v(" "),o("h4",{staticClass:"card-title"},[t._v(t._s(e.title))]),t._v(" "),o("ul",{staticClass:"card-list"},t._l(e.listItems,(function(e,n){return o("li",{key:n,staticClass:"card-list-item"},[t._v(t._s(e))])})),0),t._v(" "),o("div",{staticClass:"skills"},t._l(e.skillItems,(function(e,n){return o("div",{key:n,staticClass:"skills-item"},[o("span",[t._v(t._s(e))])])})),0)])})),0)])}),[],!1,null,null,null).exports),v=(o(210),Object(r.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"call-to-action section-85 mb-100 center"},[e("h4",{staticClass:"call-to-action_text"},[this._v("Do you have any questions or want to work together?")]),this._v(" "),e("a",{attrs:{href:"/contact"}},[e("button",{staticClass:"call-to-action_button"},[this._v("Contact me")])])])}],!1,null,null,null).exports),f=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"section_50-50-right"},[o("div",{staticClass:"content"},[o("h4",[t._v("Flexible, reusable and long-lasting solutions")]),t._v(" "),o("p",[t._v("\n              Focused on creating and building solutions that offer a great\n              user experience and increase the conversion rates.\n            ")]),t._v(" "),o("div",{staticClass:"skills"},[o("p",[t._v("Stack and tools used:")]),t._v(" "),o("div",{staticClass:"skills-item"},[o("span",[t._v("HTML")])]),t._v(" "),o("div",{staticClass:"skills-item"},[o("span",[t._v("SASS")])]),t._v(" "),o("div",{staticClass:"skills-item"},[o("span",[t._v("Javascript")])]),t._v(" "),o("div",{staticClass:"skills-item"},[o("span",[t._v("Vue.js")])]),t._v(" "),o("div",{staticClass:"skills-item"},[o("span",[t._v("Ajax")])]),t._v(" "),o("div",{staticClass:"skills-item"},[o("span",[t._v("PHP")])]),t._v(" "),o("div",{staticClass:"skills-item"},[o("span",[t._v("Hubspot integration")])]),t._v(" "),o("div",{staticClass:"skills-item"},[o("span",[t._v("REST API")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section_50-50",staticStyle:{background:"none"}},[n("div",{staticClass:"section_50-50-left"},[n("img",{attrs:{src:o(219)}})]),t._v(" "),n("div",{staticClass:"section_50-50-right"},[n("div",{staticClass:"content"},[n("h4",[t._v("Customised websites and landing pages")]),t._v(" "),n("p",[t._v("\n              Focused on performance, responsiveness, cross-browser\n              compatibility and design implementation.\n            ")]),t._v(" "),n("div",{staticClass:"skills"},[n("p",[t._v("Stack and tools used:")]),t._v(" "),n("div",{staticClass:"skills-item"},[n("span",[t._v("HTML")])]),t._v(" "),n("div",{staticClass:"skills-item"},[n("span",[t._v("SASS")])]),t._v(" "),n("div",{staticClass:"skills-item"},[n("span",[t._v("Javascript")])]),t._v(" "),n("div",{staticClass:"skills-item"},[n("span",[t._v("jQuery")])]),t._v(" "),n("div",{staticClass:"skills-item"},[n("span",[t._v("Plugins")])])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section_50-50",staticStyle:{background:"none"}},[n("div",{staticClass:"section_50-50-left"},[n("div",{staticClass:"content"},[n("h4",[t._v("Websites and landing pages using CMS builders")]),t._v(" "),n("p",[t._v("\n              Focused on performance, responsiveness, cross-browser\n              compatibility and design implementation.\n            ")]),t._v(" "),n("div",{staticClass:"skills"},[n("p",[t._v("Stack and tools used:")]),t._v(" "),n("div",{staticClass:"skills-item"},[n("span",[t._v("Wordpress")])]),t._v(" "),n("div",{staticClass:"skills-item"},[n("span",[t._v("Wix")])]),t._v(" "),n("div",{staticClass:"skills-item"},[n("span",[t._v("CSS")])]),t._v(" "),n("div",{staticClass:"skills-item"},[n("span",[t._v("Plugins")])])])])]),t._v(" "),n("div",{staticClass:"section_50-50-right"},[n("img",{attrs:{src:o(220)}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"portofolio-item"},[n("div",{staticClass:"default-width"},[n("p",[t._v("\n            As a side project, I've built my first Chrome Extension using\n            Vue.js, and soon after that, it got published! "),n("br"),t._v("I needed an\n            easier way to save pages in folders, as I find the default\n            bookmarks functionality very user-unfriendly. "),n("br"),t._v("Give it a try!\n            Rates, reviews, feedback much appreciated.\n          ")]),t._v(" "),n("div",[n("a",{attrs:{href:"https://chrome.google.com/webstore/detail/booksmart/nlffaabjkkfkehhdmcljfpcipffhhkbj?hl=en",target:"_blank"}},[n("img",{staticClass:"chrome-store-img",attrs:{src:o(221)}})])])]),t._v(" "),n("img",{staticClass:"booksmart-gif",attrs:{src:o(222)}}),t._v(" "),n("div",{staticClass:"skills"},[n("p",[t._v("Stack and tools used:")]),t._v(" "),n("div",{staticClass:"skills-item"},[n("span",[t._v("Vue.js")])]),t._v(" "),n("div",{staticClass:"skills-item"},[n("span",[t._v("SASS")])]),t._v(" "),n("div",{staticClass:"skills-item"},[n("span",[t._v("Chrome Web Store")])])]),t._v(" "),n("div",{staticClass:"skills"},[n("p",[t._v("\n            Check source code\n            "),n("a",{attrs:{href:"https://github.com/anaiancu24/vue-booksmart",target:"_blank"}},[t._v("here")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"skillshare-pres"},[e("h3",[this._v("Web Fundamentals everyone should know")]),this._v(" "),e("p",[this._v("\n      This 30 min course covers the bare-bone-basics of HTML, CSS and SEO code\n      optimisation. "),e("br"),this._v("I recommend it to anyone who works with websites,\n      blogs, landing pages , but doesn’t want to go too much in depth. I only\n      go through the web concepts that everyone should know these days.\n      "),e("br"),this._v("Enjoy!\n    ")]),this._v(" "),e("a",{attrs:{href:"https://www.skillshare.com/r/profile/Ana-Maria-Iancu/525218",target:"_blank"}},[e("img",{attrs:{src:o(223)}})])])}],_={data:function(){return{frontend:!0,backend:!1,chromeExt:!1,other:!1}},methods:{showFrontend:function(){this.frontend=!0,this.backend=!1,this.chromeExt=!1,this.other=!1},showBackend:function(){this.frontend=!1,this.backend=!0,this.chromeExt=!1,this.other=!1},showChromeExt:function(){this.frontend=!1,this.backend=!1,this.chromeExt=!0,this.other=!1},showOther:function(){this.frontend=!1,this.backend=!1,this.chromeExt=!1,this.other=!0}}},x=(o(224),Object(r.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"portofolio section-100 padding-64 center mb-100",attrs:{id:"portofolio"}},[n("h3",{staticClass:"mb-50"},[t._v("Portfolio")]),t._v(" "),n("div",{staticClass:"portofolio-wrapper"},[n("div",{staticClass:"button-toggle-container mb-50"},[n("button",{staticClass:"button-toggle",class:{selected:t.frontend},on:{click:t.showFrontend}},[t._v("\n        Web Development\n      ")]),t._v(" "),n("button",{staticClass:"button-toggle",class:{selected:t.chromeExt},on:{click:t.showChromeExt}},[t._v("\n        Chrome Extension\n      ")]),t._v(" "),n("button",{staticClass:"button-toggle",class:{selected:t.other},on:{click:t.showOther}},[t._v("\n        Other\n      ")])])]),t._v(" "),n("div",{staticClass:"portofolio-wrapper"},[t.frontend?n("div",{staticClass:"portofolio-items"},[n("div",{staticClass:"mb-50",staticStyle:{background:"none"}},[t._m(0),t._v(" "),n("div",{staticClass:"section_50-50-left"},[n("video",{staticClass:"frontend3",attrs:{muted:"",autoplay:""},domProps:{muted:!0}},[n("source",{attrs:{src:o(212),type:"video/mp4"}})])])]),t._v(" "),t._m(1),t._v(" "),t._m(2)]):t._e(),t._v(" "),t.backend?n("div",{staticClass:"portofolio-items"}):t._e(),t._v(" "),t.chromeExt?n("div",{staticClass:"portofolio-items"},[t._m(3)]):t._e(),t._v(" "),t.other?n("div",{staticClass:"portofolio-items"},[n("div",{staticClass:"portofolio-item"},[n("div",{staticClass:"row"},[n("div",{staticClass:"column"},[n("video",{staticStyle:{width:"100%"},attrs:{muted:"",autoplay:""},domProps:{muted:!0}},[n("source",{attrs:{src:o(213),type:"video/mp4"}})]),t._v(" "),n("video",{staticStyle:{width:"100%"},attrs:{muted:"",autoplay:""},domProps:{muted:!0}},[n("source",{attrs:{src:o(214),type:"video/mp4"}})])]),t._v(" "),n("div",{staticClass:"column"},[n("img",{staticStyle:{width:"100%"},attrs:{src:o(215)}}),t._v(" "),n("video",{staticStyle:{width:"100%"},attrs:{muted:"",autoplay:""},domProps:{muted:!0}},[n("source",{attrs:{src:o(216),type:"video/mp4"}})])]),t._v(" "),n("div",{staticClass:"column"},[n("video",{staticStyle:{width:"100%"},attrs:{muted:"",autoplay:""},domProps:{muted:!0}},[n("source",{attrs:{src:o(217),type:"video/mp4"}})]),t._v(" "),n("img",{staticStyle:{width:"100%"},attrs:{src:o(218)}})])])])]):t._e()]),t._v(" "),t._m(4)])}),f,!1,null,null,null).exports),w=o(171),C={components:{Navigation:n.a,Header:l,About:d,Skills:m,CTA:v,Portofolio:x,Footer:w.a}},k=Object(r.a)(C,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Navigation"),this._v(" "),e("Header"),this._v(" "),e("About"),this._v(" "),e("Skills"),this._v(" "),e("CTA"),this._v(" "),e("Portofolio"),this._v(" "),e("CTA"),this._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.default=k.exports}}]);