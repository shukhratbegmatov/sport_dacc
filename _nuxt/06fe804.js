(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{380:function(t,e,n){t.exports=n.p+"img/Vector1.5877a65.png"},386:function(t,e,n){"use strict";n.r(e);n(4),n(50),n(22);var c={data:function(){return{isActive:!1,main_page:[],site:{},message:"",email_address:"",name:"",projects:[],menu:[]}},mounted:function(){var t=this;this.$axios.$get("main-page/",{headers:{"Accept-Language":this.$i18n.locale}}).then((function(e){t.main_page=e,t.site=e.site,t.projects=e.projects})),this.$axios.$get("main-page/",{headers:{"Accept-Language":this.$i18n.locale}}).then((function(e){t.menu=e.menu}))},methods:{application:function(){this.$axios.$post("application/",{name:this.name,email_address:this.email_address,message:this.message}).then((function(){}))}}},l=n(75),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"test_rejm"},[e("marquee",[t._v(t._s(t.$t("test")))])],1),t._v(" "),e("div",{staticClass:"head_main"},[e("header",{staticClass:"header_home"},[e("div",{staticClass:"dark_overlow"}),t._v(" "),e("Navbar"),t._v(" "),e("div",{staticClass:"nav_left_container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-6 z_index"},[e("div",{staticClass:"main_text"},[t._v("\n          "+t._s(t.site.title)+"\n         ")]),t._v(" "),e("div",{staticClass:"onas"},[e("NuxtLink",{attrs:{to:t.localePath("/centre/about-us")}},[t._v("\n            "+t._s(t.$t("about"))+"\n\n              "),e("svg",{attrs:{width:"10",height:"16",viewBox:"0 0 10 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M1.66699 1.33334L8.33366 8.00001L1.66699 14.6667",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])])],1)]),t._v(" "),e("div",{staticClass:"note col-xl-6"},[e("img",{attrs:{src:t.site.banner_image_url,alt:""}})])])])],1)]),t._v(" "),e("section",{staticClass:"container_s"},[e("div",[e("div",[e("h1",{staticClass:"sections_text"},[t._v(t._s(t.$t("services")))])]),t._v(" "),e("div",{staticClass:"card_f"},[e("div",{staticClass:"row cards_one"},t._l(t.main_page.services,(function(c){return e("div",{staticClass:"col-xl-3 col-sm-6"},[e("NuxtLink",{attrs:{to:"/"}},[e("div",{staticClass:"main_cards"},[e("div",{staticClass:"card_img"},[e("img",{attrs:{src:c.image_url,alt:""}})]),t._v(" "),e("div",{staticClass:"text_header"},[t._v("\n              "+t._s(c.title)+"\n             ")]),t._v(" "),e("div",{staticClass:"card_ellepss"},[e("img",{attrs:{src:n(380),alt:""}})])])])],1)})),0)]),t._v(" "),t.main_page.banner?e("div",{staticClass:"passport"},[e("div",{staticClass:"cridit_card"},[e("img",{attrs:{src:t.main_page.banner[0].banner_image_url,alt:""}})]),t._v(" "),e("div",{staticClass:"p_text"},[t._v(" \n           "+t._s(t.main_page.banner[0].title)+"\n       ")]),t._v(" "),e("div",{staticClass:"p_description"},[t._v("\n         "+t._s(t.main_page.banner[0].description)+"\n       ")]),t._v(" "),e("div",{staticClass:"p_link"},[e("NuxtLink",{attrs:{to:"/"}},[t._v(t._s(t.$t("more")))])],1)]):t._e()])]),t._v(" "),e("section",{staticClass:"container_s"},[e("div",[e("div",{staticClass:"data_text projectss"},[e("div",[e("h1",{staticClass:"sections_text3"},[t._v(t._s(t.$t("projects")))])]),t._v(" "),e("div",{staticClass:"all_link"},[e("NuxtLink",{attrs:{to:t.localePath("/centre/portfolio")}},[t._v("\n             "+t._s(t.$t("more_project"))+"\n           ")])],1)]),t._v(" "),t._l(t.projects,(function(n){return e("div",{key:n,staticClass:"projects"},[e("div",{staticClass:"pro_img"},[e("img",{attrs:{src:n.image[0].image_url,alt:""}})]),t._v(" "),e("div",{staticClass:"pro_title"},[t._v(t._s(n.title))])])}))],2)]),t._v(" "),e("section",{staticClass:"container_s"},[e("div",{staticClass:"cards_one"},[e("div",{staticClass:"data_text"},[e("div",[e("h1",{staticClass:"sections_text1"},[t._v(t._s(t.$t("works")))])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-3 col-sm-6"},[e("div",{staticClass:"m_contact"},[e("div",{staticClass:"m_c_main"},[e("div",{staticClass:"m_c_icon"},[e("svg",{attrs:{width:"28",height:"27",viewBox:"0 0 28 27",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M6.65616 0C6.13272 0 5.6171 0.1875 5.18741 0.53125L5.12491 0.5625L5.09366 0.59375L1.96866 3.8125L1.99991 3.84375C1.03506 4.73438 0.738189 6.06641 1.15616 7.21875C1.16006 7.22656 1.15225 7.24219 1.15616 7.25C2.00381 9.67578 4.17178 14.3594 8.40616 18.5938C12.6562 22.8438 17.4023 24.9258 19.7499 25.8438H19.7812C20.996 26.25 22.3124 25.9609 23.2499 25.1563L26.4062 22C27.2343 21.1719 27.2343 19.7344 26.4062 18.9063L22.3437 14.8438L22.3124 14.7813C21.4843 13.9531 20.0155 13.9531 19.1874 14.7813L17.1874 16.7813C16.4648 16.4336 14.7421 15.543 13.0937 13.9688C11.4569 12.4063 10.621 10.6094 10.3124 9.90625L12.3124 7.90625C13.1523 7.06641 13.1679 5.66797 12.2812 4.84375L12.3124 4.8125L12.2187 4.71875L8.21866 0.59375L8.18741 0.5625L8.12491 0.53125C7.69522 0.1875 7.1796 0 6.65616 0ZM6.65616 2C6.73038 2 6.8046 2.03516 6.87491 2.09375L10.8749 6.1875L10.9687 6.28125C10.9608 6.27344 11.0273 6.37891 10.9062 6.5L8.40616 9L7.93741 9.4375L8.15616 10.0625C8.15616 10.0625 9.3046 13.1367 11.7187 15.4375L11.9374 15.625C14.2616 17.7461 16.9999 18.9063 16.9999 18.9063L17.6249 19.1875L20.5937 16.2188C20.7655 16.0469 20.7343 16.0469 20.9062 16.2188L24.9999 20.3125C25.1718 20.4844 25.1718 20.4219 24.9999 20.5938L21.9374 23.6563C21.4765 24.0508 20.9882 24.1328 20.4062 23.9375C18.1405 23.0469 13.7382 21.1133 9.81241 17.1875C5.85538 13.2305 3.78897 8.74219 3.03116 6.5625C2.87881 6.15625 2.98819 5.55469 3.34366 5.25L3.40616 5.1875L6.43741 2.09375C6.50772 2.03516 6.58194 2 6.65616 2Z",fill:"#5761D7"}})])]),t._v(" "),e("div",{staticClass:"m_c_text"},[t._v("\n                "+t._s(t.$t("title"))+"\n              ")])]),t._v(" "),e("div",{staticClass:"m_c_description"},[t._v("\n\n                "+t._s(t.$t("description"))+"\n             ")])])]),t._v(" "),e("div",{staticClass:"col-xl-3 col-sm-6"},[e("div",{staticClass:"m_contact"},[e("div",{staticClass:"m_c_main"},[e("div",{staticClass:"m_c_icon"},[e("svg",{attrs:{width:"26",height:"26",viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M13 0C5.83203 0 0 5.83203 0 13C0 20.168 5.83203 26 13 26C20.168 26 26 20.168 26 13C26 5.83203 20.168 0 13 0ZM11.875 2.0625C11.918 2.05859 11.957 2.06641 12 2.0625V13.4062L12.2812 13.7188L20.0625 21.4688C18.1562 23.0625 15.6875 24 13 24C6.91406 24 2 19.0859 2 13C2 7.29297 6.32031 2.625 11.875 2.0625ZM14 2.0625C19.2852 2.53906 23.4609 6.71484 23.9375 12H14V2.0625ZM15.4375 14H23.9375C23.7305 16.293 22.8633 18.3945 21.4688 20.0625L15.4375 14Z",fill:"#5761D7"}})])]),t._v(" "),e("div",{staticClass:"m_c_text"},[t._v("\n                "+t._s(t.$t("title1"))+"\n              ")])]),t._v(" "),e("div",{staticClass:"m_c_description"},[t._v("\n\n                "+t._s(t.$t("description1"))+"\n             ")])])]),t._v(" "),e("div",{staticClass:"col-xl-3 col-sm-6"},[e("div",{staticClass:"m_contact"},[e("div",{staticClass:"m_c_main"},[e("div",{staticClass:"m_c_icon"},[e("svg",{attrs:{width:"28",height:"20",viewBox:"0 0 28 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M9.5 0C7.57812 0 6 1.57812 6 3.5C6 5.42188 7.57812 7 9.5 7C11.4219 7 13 5.42188 13 3.5C13 1.57812 11.4219 0 9.5 0ZM18.5 0C16.5781 0 15 1.57812 15 3.5C15 5.42188 16.5781 7 18.5 7C20.4219 7 22 5.42188 22 3.5C22 1.57812 20.4219 0 18.5 0ZM9.5 2C10.3398 2 11 2.66016 11 3.5C11 4.33984 10.3398 5 9.5 5C8.66016 5 8 4.33984 8 3.5C8 2.66016 8.66016 2 9.5 2ZM18.5 2C19.3398 2 20 2.66016 20 3.5C20 4.33984 19.3398 5 18.5 5C17.6602 5 17 4.33984 17 3.5C17 2.66016 17.6602 2 18.5 2ZM5 6C2.80078 6 1 7.80078 1 10C1 11.1133 1.47656 12.1172 2.21875 12.8438C0.886719 13.7461 0 15.2812 0 17H2C2 15.332 3.33203 14 5 14C6.66797 14 8 15.332 8 17H10C10 15.2812 9.11328 13.7461 7.78125 12.8438C8.52344 12.1172 9 11.1133 9 10C9 7.80078 7.19922 6 5 6ZM10 17C9.375 17.8359 9 18.8867 9 20H11C11 18.332 12.332 17 14 17C15.668 17 17 18.332 17 20H19C19 18.8867 18.625 17.8359 18 17C17.6602 16.5469 17.25 16.1602 16.7812 15.8438C17.5234 15.1172 18 14.1133 18 13C18 10.8008 16.1992 9 14 9C11.8008 9 10 10.8008 10 13C10 14.1133 10.4766 15.1172 11.2188 15.8438C10.75 16.1602 10.3398 16.5469 10 17ZM18 17H20C20 15.332 21.332 14 23 14C24.668 14 26 15.332 26 17H28C28 15.2812 27.1133 13.7461 25.7812 12.8438C26.5234 12.1172 27 11.1133 27 10C27 7.80078 25.1992 6 23 6C20.8008 6 19 7.80078 19 10C19 11.1133 19.4766 12.1172 20.2188 12.8438C18.8867 13.7461 18 15.2812 18 17ZM5 8C6.11719 8 7 8.88281 7 10C7 11.1172 6.11719 12 5 12C3.88281 12 3 11.1172 3 10C3 8.88281 3.88281 8 5 8ZM23 8C24.1172 8 25 8.88281 25 10C25 11.1172 24.1172 12 23 12C21.8828 12 21 11.1172 21 10C21 8.88281 21.8828 8 23 8ZM14 11C15.1172 11 16 11.8828 16 13C16 14.1172 15.1172 15 14 15C12.8828 15 12 14.1172 12 13C12 11.8828 12.8828 11 14 11Z",fill:"#5761D7"}})])]),t._v(" "),e("div",{staticClass:"m_c_text"},[t._v("\n                "+t._s(t.$t("title2"))+"\n              ")])]),t._v(" "),e("div",{staticClass:"m_c_description"},[t._v("\n\n                "+t._s(t.$t("description2"))+"\n             ")])])]),t._v(" "),e("div",{staticClass:"col-xl-3 col-sm-6"},[e("div",{staticClass:"m_contact"},[e("div",{staticClass:"m_c_main"},[e("div",{staticClass:"m_c_icon"},[e("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M11 0V12H13V0H11ZM8 0.6875C3.34766 2.33984 0 6.78516 0 12C0 18.6172 5.38281 24 12 24C18.6172 24 24 18.6172 24 12C24 6.78516 20.6523 2.33984 16 0.6875V2.84375C19.5273 4.39062 22 7.91016 22 12C22 17.5156 17.5156 22 12 22C6.48438 22 2 17.5156 2 12C2 7.91016 4.47266 4.39062 8 2.84375V0.6875Z",fill:"#5761D7"}})])]),t._v(" "),e("div",{staticClass:"m_c_text"},[t._v("\n                "+t._s(t.$t("title3"))+"\n              ")])]),t._v(" "),e("div",{staticClass:"m_c_description"},[t._v("\n\n                "+t._s(t.$t("description3"))+"\n             ")])])])]),t._v(" "),e("div",{staticClass:"subscribe"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-6"},[e("div",{staticClass:"sb_title"},[t._v("\n               "+t._s(t.$t("quiz"))+"\n             ")]),t._v(" "),e("div",{staticClass:"sb_description"},[t._v("\n              "+t._s(t.$t("quiz_description"))+"\n             ")])]),t._v(" "),e("div",{staticClass:"col-xl-6"},[e("div",{staticClass:"sb_form"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.application()}}},[e("div",{staticClass:"form_input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",placeholder:t.$t("name")},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form_input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email_address,expression:"email_address"}],attrs:{type:"text",placeholder:t.$t("email")},domProps:{value:t.email_address},on:{input:function(e){e.target.composing||(t.email_address=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form_input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{type:"text",placeholder:t.$t("message")},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form_btn"},[e("button",[t._v(t._s(t.$t("send")))])])])])])])])])]),t._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Navbar:n(378).default,Footer:n(377).default})}}]);