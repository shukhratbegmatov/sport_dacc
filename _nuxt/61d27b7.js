(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{390:function(t,l,n){"use strict";n.r(l);var _={name:"IndexPage",data:function(){return{managements:[],show_modals:{},isShow:!1}},mounted:function(){var t=this;this.$axios.$get("staff-department/",{headers:{"Accept-Language":this.$i18n.locale}}).then((function(l){t.managements=l}))},methods:{shows:function(t){this.show_modals=t,this.isShow=!0}}},e=n(75),component=Object(e.a)(_,(function(){var t=this,l=t._self._c;return l("div",[l("div",{staticClass:"modal_show_f",class:{shows:t.isShow}},[l("div",{staticClass:"modal_show"},[l("div",{staticClass:"ex_btn_f"},[l("button",{staticClass:"exit_modal",on:{click:function(l){t.isShow=!1}}},[l("svg",{attrs:{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{d:"M24.841 1.22084L14.0005 12.0613L3.16002 1.22084C2.89929 0.982243 2.55656 0.853446 2.20322 0.861275C1.84989 0.869104 1.5132 1.01296 1.26329 1.26286C1.01339 1.51277 0.869535 1.84946 0.861706 2.20279C0.853877 2.55612 0.982674 2.89886 1.22127 3.15959L12.0563 14.0001L1.21852 24.8378C1.08611 24.964 0.980266 25.1154 0.907204 25.2831C0.834143 25.4508 0.795339 25.6313 0.793074 25.8142C0.790809 25.9971 0.825129 26.1786 0.894015 26.3481C0.962901 26.5175 1.06496 26.6714 1.1942 26.8009C1.32344 26.9303 1.47725 27.0326 1.64659 27.1017C1.81593 27.1708 1.99738 27.2054 2.18027 27.2034C2.36316 27.2014 2.54381 27.1628 2.71159 27.09C2.87937 27.0172 3.0309 26.9116 3.15727 26.7793L14.0005 15.9416L24.841 26.7821C25.1017 27.0207 25.4445 27.1495 25.7978 27.1416C26.1511 27.1338 26.4878 26.99 26.7377 26.7401C26.9876 26.4902 27.1315 26.1535 27.1393 25.8001C27.1472 25.4468 27.0184 25.1041 26.7798 24.8433L15.9393 14.0028L26.7798 3.15959C26.9122 3.0334 27.018 2.88202 27.0911 2.71435C27.1641 2.54667 27.2029 2.36608 27.2052 2.18319C27.2075 2.0003 27.1732 1.8188 27.1043 1.64937C27.0354 1.47993 26.9333 1.32598 26.8041 1.19656C26.6748 1.06713 26.521 0.964851 26.3517 0.895725C26.1824 0.826598 26.0009 0.792022 25.818 0.794028C25.6351 0.796034 25.4545 0.834581 25.2867 0.907405C25.1189 0.980229 24.9674 1.08586 24.841 1.21809V1.22084Z",fill:"black"}})])])]),t._v(" "),l("div",{staticClass:"modal_cards"},[l("div",{staticClass:"c_card_img"},[l("img",{attrs:{src:t.show_modals.image_url,alt:""}})]),t._v(" "),l("div",{staticClass:"main_textt"},[l("div",{staticClass:"m_card_leader"},[t._v(t._s(t.show_modals.title))]),t._v(" "),"Vacant Vacant Vacant"!=t.show_modals.full_name&&"Vakant Vakant Vakant"!=t.show_modals.full_name&&"Вакант Вакант Вакант"!=t.show_modals.full_name?l("div",{staticClass:"m_card_leader_name"},[t._v(t._s(t.show_modals.full_name))]):l("div",{staticClass:"m_card_leader_name"},[t._v("Vacant")]),t._v(" "),l("div",{staticClass:"main_mail modal_borders"},[l("div",{staticClass:"mail"},[l("div",[l("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{d:"M4.5 3.75V11.25H1.5V21H14.25V18H22.5V8.25H17.25V3.75H4.5ZM6 5.25H15.75V8.25H9V11.25H6V5.25ZM10.5 9.75H21V16.5H14.25V11.25H10.5V9.75ZM17.25 11.25V12.75H19.5V11.25H17.25ZM3 12.75H4.5H9.75H12.75V13.585L8.2207 16.4004C8.01145 16.5309 7.7393 16.5316 7.5293 16.4004L3 13.5864V12.75ZM12.75 15.3516V19.5H3V15.353L6.73682 17.6748C7.08782 17.8931 7.482 18.0029 7.875 18.0029C8.268 18.0029 8.66147 17.8931 9.01172 17.6733L12.75 15.3516Z",fill:"#5A46D5"}})])]),t._v(" "),l("div",{staticClass:"email_name"},[t._v("\n                "+t._s(t.$t("email"))),l("br"),t._v("\n                  "+t._s(t.show_modals.email_address)+"\n              ")])]),t._v(" "),l("div",{staticClass:"mail"},[l("div",[l("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{d:"M4.49187 0.25C4.0993 0.25 3.71258 0.390625 3.39031 0.648438L3.34344 0.671875L3.32 0.695313L0.976249 3.10938L0.999687 3.13281C0.276054 3.80078 0.0533975 4.7998 0.366874 5.66406C0.369804 5.66992 0.363945 5.68164 0.366874 5.6875C1.00262 7.50684 2.62859 11.0195 5.80437 14.1953C8.99187 17.3828 12.5514 18.9443 14.3122 19.6328H14.3356C15.2468 19.9375 16.2341 19.7207 16.9372 19.1172L19.3044 16.75C19.9255 16.1289 19.9255 15.0508 19.3044 14.4297L16.2575 11.3828L16.2341 11.3359C15.613 10.7148 14.5114 10.7148 13.8903 11.3359L12.3903 12.8359C11.8483 12.5752 10.5563 11.9072 9.32 10.7266C8.09246 9.55469 7.46551 8.20703 7.23406 7.67969L8.73406 6.17969C9.36394 5.54981 9.37566 4.50098 8.71062 3.88281L8.73406 3.85938L8.66375 3.78906L5.66375 0.695313L5.64031 0.671875L5.59344 0.648438C5.27117 0.390625 4.88445 0.25 4.49187 0.25ZM4.49187 1.75C4.54754 1.75 4.6032 1.77637 4.65594 1.82031L7.65594 4.89063L7.72625 4.96094C7.72039 4.95508 7.77019 5.03418 7.67937 5.125L5.80437 7L5.45281 7.32813L5.61687 7.79688C5.61687 7.79688 6.4782 10.1025 8.28875 11.8281L8.45281 11.9688C10.196 13.5596 12.2497 14.4297 12.2497 14.4297L12.7184 14.6406L14.945 12.4141C15.0739 12.2852 15.0505 12.2852 15.1794 12.4141L18.2497 15.4844C18.3786 15.6133 18.3786 15.5664 18.2497 15.6953L15.9528 17.9922C15.6071 18.2881 15.2409 18.3496 14.8044 18.2031C13.1052 17.5352 9.8034 16.085 6.85906 13.1406C3.89129 10.1729 2.34148 6.80664 1.77312 5.17188C1.65887 4.86719 1.7409 4.41602 2.0075 4.1875L2.05437 4.14063L4.32781 1.82031C4.38055 1.77637 4.43621 1.75 4.49187 1.75Z",fill:"#5A46D5"}})])]),t._v(" "),l("div",{staticClass:"email_name"},[t._v("\n                "+t._s(t.$t("phone"))),l("br"),t._v("\n                "+t._s(t.show_modals.phone_number)+"\n              ")])])])])]),t._v(" "),l("div",{staticClass:"modal_description"},[t._v("\n                "+t._s(t.show_modals.tasks)+"\n            ")])])]),t._v(" "),l("div",{staticClass:"test_rejm"},[l("marquee",[t._v(t._s(t.$t("test")))])],1),t._v(" "),l("div",{staticClass:"managements"},[l("div",{staticClass:"cards_one_f"},[l("div",[l("div",{staticClass:"cards_one"},[l("Navbar"),t._v(" "),l("div",{staticClass:"nav_left_container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-xl-6"},[l("div",{staticClass:"main_text"},[t._v("\n            "+t._s(t.$t("departments"))+"\n          ")])])])])],1),t._v(" "),l("div",{staticClass:"manage_f"},[l("section",t._l(t.managements,(function(n){return l("div",{staticClass:"managements_cards"},[l("div",{staticClass:"card_m"},[l("div",{staticClass:"border_center"}),t._v(" "),l("div",{staticClass:"border_left"}),t._v(" "),l("div",{staticClass:"c_card_img"},[l("img",{attrs:{src:n.image_url,alt:""}})]),t._v(" "),l("div",{staticClass:"main_textt"},[l("div",{staticClass:"m_card_leader"},[t._v(t._s(n.title))]),t._v(" "),"Vacant Vacant Vacant"!=n.full_name&&"Vakant Vakant Vakant"!=n.full_name&&"Вакант Вакант Вакант"!=n.full_name?l("div",{staticClass:"m_card_leader_name"},[t._v(t._s(n.full_name))]):l("div",{staticClass:"m_card_leader_name"},[t._v("Vacant")]),t._v(" "),l("div",{staticClass:"main_mail"},[l("div",{staticClass:"mail"},[l("div",[l("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{d:"M4.5 3.75V11.25H1.5V21H14.25V18H22.5V8.25H17.25V3.75H4.5ZM6 5.25H15.75V8.25H9V11.25H6V5.25ZM10.5 9.75H21V16.5H14.25V11.25H10.5V9.75ZM17.25 11.25V12.75H19.5V11.25H17.25ZM3 12.75H4.5H9.75H12.75V13.585L8.2207 16.4004C8.01145 16.5309 7.7393 16.5316 7.5293 16.4004L3 13.5864V12.75ZM12.75 15.3516V19.5H3V15.353L6.73682 17.6748C7.08782 17.8931 7.482 18.0029 7.875 18.0029C8.268 18.0029 8.66147 17.8931 9.01172 17.6733L12.75 15.3516Z",fill:"#5A46D5"}})])]),t._v(" "),l("div",{staticClass:"email_name"},[t._v("\n                "+t._s(t.$t("email"))),l("br"),t._v("\n                  "+t._s(n.email_address)+"\n              ")])]),t._v(" "),l("div",{staticClass:"mail"},[l("div",[l("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{d:"M4.49187 0.25C4.0993 0.25 3.71258 0.390625 3.39031 0.648438L3.34344 0.671875L3.32 0.695313L0.976249 3.10938L0.999687 3.13281C0.276054 3.80078 0.0533975 4.7998 0.366874 5.66406C0.369804 5.66992 0.363945 5.68164 0.366874 5.6875C1.00262 7.50684 2.62859 11.0195 5.80437 14.1953C8.99187 17.3828 12.5514 18.9443 14.3122 19.6328H14.3356C15.2468 19.9375 16.2341 19.7207 16.9372 19.1172L19.3044 16.75C19.9255 16.1289 19.9255 15.0508 19.3044 14.4297L16.2575 11.3828L16.2341 11.3359C15.613 10.7148 14.5114 10.7148 13.8903 11.3359L12.3903 12.8359C11.8483 12.5752 10.5563 11.9072 9.32 10.7266C8.09246 9.55469 7.46551 8.20703 7.23406 7.67969L8.73406 6.17969C9.36394 5.54981 9.37566 4.50098 8.71062 3.88281L8.73406 3.85938L8.66375 3.78906L5.66375 0.695313L5.64031 0.671875L5.59344 0.648438C5.27117 0.390625 4.88445 0.25 4.49187 0.25ZM4.49187 1.75C4.54754 1.75 4.6032 1.77637 4.65594 1.82031L7.65594 4.89063L7.72625 4.96094C7.72039 4.95508 7.77019 5.03418 7.67937 5.125L5.80437 7L5.45281 7.32813L5.61687 7.79688C5.61687 7.79688 6.4782 10.1025 8.28875 11.8281L8.45281 11.9688C10.196 13.5596 12.2497 14.4297 12.2497 14.4297L12.7184 14.6406L14.945 12.4141C15.0739 12.2852 15.0505 12.2852 15.1794 12.4141L18.2497 15.4844C18.3786 15.6133 18.3786 15.5664 18.2497 15.6953L15.9528 17.9922C15.6071 18.2881 15.2409 18.3496 14.8044 18.2031C13.1052 17.5352 9.8034 16.085 6.85906 13.1406C3.89129 10.1729 2.34148 6.80664 1.77312 5.17188C1.65887 4.86719 1.7409 4.41602 2.0075 4.1875L2.05437 4.14063L4.32781 1.82031C4.38055 1.77637 4.43621 1.75 4.49187 1.75Z",fill:"#5A46D5"}})])]),t._v(" "),l("div",{staticClass:"email_name"},[t._v("\n                "+t._s(t.$t("phone"))),l("br"),t._v("\n                "+t._s(n.phone_number)+"\n              ")])])])]),t._v(" "),l("div",{staticClass:"m_buttons"},[l("button",{on:{click:function(l){return t.shows(n)}}},[t._v(t._s(t.$t("bt_text")))])])])])})),0)])])]),t._v(" "),l("Footer")],1)])}),[],!1,null,null,null);l.default=component.exports;installComponents(component,{Navbar:n(378).default,Footer:n(377).default})}}]);