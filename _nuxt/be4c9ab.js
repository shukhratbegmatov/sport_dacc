(window.webpackJsonp=window.webpackJsonp||[]).push([[8,2,3],{377:function(t,l,n){"use strict";n.r(l);var e={name:"IndexPage",data:function(){return{footer:[],componey_info:[],footer1:[],contacts:{}}},mounted:function(){var t=this;this.$axios.$get("footer/",{headers:{"Accept-Language":this.$i18n.locale}}).then((function(l){t.footer=l.menus[0],t.footer1=l.menus[3],t.componey_info=l.company_info[0]})),this.$axios.$get("contact/",{headers:{"Accept-Language":this.$i18n.locale}}).then((function(l){t.contacts=l[0]}))}},C=n(75),component=Object(C.a)(e,(function(){var t=this,l=t._self._c;return l("div",{staticClass:"m_footer"},[l("footer",[l("div",[l("div",{staticClass:"row"},[l("div",{staticClass:"col-xl-6"},[l("div",[l("img",{attrs:{src:t.componey_info.logo_url,width:"90px",alt:""}})]),t._v(" "),l("div",{staticClass:"footer_description"},[t._v("\n            "+t._s(t.componey_info.short_description)+"\n          ")]),t._v(" "),l("div",{staticClass:"footer_messanger"},[l("div",{staticClass:"f_links"},[l("a",{attrs:{href:"#"}},[l("svg",{attrs:{width:"20",height:"19",viewBox:"0 0 20 19",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{d:"M18.5526 0.997069C18.3006 1.00879 18.0633 1.08203 17.8524 1.16406H17.8494C17.6356 1.24902 16.619 1.67676 15.075 2.32422C13.5311 2.97461 11.5272 3.81836 9.53791 4.65625C5.56526 6.3291 1.65999 7.97558 1.65999 7.97558L1.70686 7.95801C1.70686 7.95801 1.43733 8.0459 1.15608 8.23926C1.01252 8.33301 0.854321 8.46191 0.716626 8.66406C0.578931 8.86621 0.467602 9.17676 0.508618 9.49609C0.576001 10.0381 0.927564 10.3633 1.17952 10.542C1.4344 10.7236 1.67756 10.8086 1.67756 10.8086H1.68342L5.34553 12.042C5.50959 12.5693 6.46174 15.6982 6.69026 16.4189C6.82502 16.8496 6.95686 17.1191 7.12092 17.3242C7.20002 17.4297 7.29377 17.5176 7.4051 17.5879C7.44905 17.6143 7.49592 17.6348 7.5428 17.6523C7.55745 17.6611 7.57209 17.6641 7.58967 17.667L7.55159 17.6582C7.5633 17.6611 7.57209 17.6699 7.58088 17.6728C7.61018 17.6816 7.63069 17.6846 7.66877 17.6904C8.24885 17.8662 8.71467 17.5059 8.71467 17.5059L8.74104 17.4853L10.9031 15.5166L14.5272 18.2969L14.6092 18.332C15.3651 18.6631 16.1297 18.4785 16.534 18.1533C16.9412 17.8252 17.0994 17.4062 17.0994 17.4062L17.1258 17.3389L19.9266 2.99219C20.0057 2.63769 20.0262 2.30664 19.9383 1.98437C19.8504 1.66211 19.6248 1.36035 19.3524 1.19922C19.077 1.03515 18.8045 0.98535 18.5526 0.997069ZM18.4764 2.53515C18.4735 2.58203 18.4823 2.57617 18.4617 2.66699V2.67578L15.6873 16.873C15.6756 16.8936 15.6551 16.9375 15.5994 16.9814C15.5408 17.0283 15.494 17.0576 15.2508 16.9609L10.8182 13.5625L8.14045 16.0029L8.70295 12.4111C8.70295 12.4111 15.6463 5.93945 15.9451 5.66113C16.244 5.38281 16.1444 5.32422 16.1444 5.32422C16.1649 4.98437 15.6932 5.22461 15.6932 5.22461L6.56135 10.8818L6.55842 10.8672L2.18147 9.39355V9.39062C2.17854 9.39062 2.17268 9.38769 2.16975 9.38769C2.17268 9.38769 2.19319 9.3789 2.19319 9.3789L2.21663 9.36719L2.24006 9.3584C2.24006 9.3584 6.14827 7.71191 10.1209 6.03906C12.1102 5.20117 14.1141 4.35742 15.6551 3.70703C17.1961 3.05957 18.3358 2.58496 18.4002 2.55859C18.4617 2.53515 18.4324 2.53515 18.4764 2.53515Z",fill:"white"}})])])]),t._v(" "),l("div",{staticClass:"f_links"},[l("a",{attrs:{href:"#"}},[l("svg",{attrs:{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{d:"M5.60156 0.75C2.93848 0.75 0.75 2.93555 0.75 5.60156V12.3984C0.75 15.0615 2.93555 17.25 5.60156 17.25H12.3984C15.0615 17.25 17.25 15.0645 17.25 12.3984V5.60156C17.25 2.93848 15.0645 0.75 12.3984 0.75H5.60156ZM5.60156 2.25H12.3984C14.2529 2.25 15.75 3.74707 15.75 5.60156V12.3984C15.75 14.2529 14.2529 15.75 12.3984 15.75H5.60156C3.74707 15.75 2.25 14.2529 2.25 12.3984V5.60156C2.25 3.74707 3.74707 2.25 5.60156 2.25ZM13.4297 3.89062C13.0518 3.89062 12.75 4.19238 12.75 4.57031C12.75 4.94824 13.0518 5.25 13.4297 5.25C13.8076 5.25 14.1094 4.94824 14.1094 4.57031C14.1094 4.19238 13.8076 3.89062 13.4297 3.89062ZM9 4.5C6.52441 4.5 4.5 6.52441 4.5 9C4.5 11.4756 6.52441 13.5 9 13.5C11.4756 13.5 13.5 11.4756 13.5 9C13.5 6.52441 11.4756 4.5 9 4.5ZM9 6C10.667 6 12 7.33301 12 9C12 10.667 10.667 12 9 12C7.33301 12 6 10.667 6 9C6 7.33301 7.33301 6 9 6Z",fill:"white"}})])])]),t._v(" "),l("div",{staticClass:"f_links"},[l("a",{attrs:{href:"#"}},[l("svg",{attrs:{width:"12",height:"22",viewBox:"0 0 12 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{d:"M8.44043 0.5C5.48393 0.5 3.75 2.06163 3.75 5.61963V8.75H0V12.5H3.75V21.5H7.5V12.5H10.5L11.25 8.75H7.5V6.25391C7.5 4.91366 7.93707 4.25 9.19482 4.25H11.25V0.653809C10.8945 0.605809 9.85868 0.5 8.44043 0.5Z",fill:"white"}})])])]),t._v(" "),l("div",{staticClass:"f_links"},[l("a",{attrs:{href:"#"}},[l("svg",{attrs:{width:"20",height:"16",viewBox:"0 0 20 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{d:"M10 0.5C7.17578 0.5 4.67969 0.792969 3.15625 1.01562C1.89648 1.2002 0.879883 2.14941 0.648438 3.40625C0.452148 4.47559 0.25 6.04004 0.25 8C0.25 9.95996 0.452148 11.5244 0.648438 12.5938C0.879883 13.8506 1.89648 14.8027 3.15625 14.9844C4.68555 15.207 7.19043 15.5 10 15.5C12.8096 15.5 15.3145 15.207 16.8438 14.9844C18.1035 14.8027 19.1201 13.8506 19.3516 12.5938C19.5479 11.5215 19.75 9.9541 19.75 8C19.75 6.0459 19.5508 4.47852 19.3516 3.40625C19.1201 2.14941 18.1035 1.2002 16.8438 1.01562C15.3203 0.792969 12.8242 0.5 10 0.5ZM10 2C12.7246 2 15.1592 2.27832 16.6328 2.49219C17.2656 2.58594 17.7607 3.06348 17.875 3.6875C18.0566 4.67773 18.25 6.14551 18.25 8C18.25 9.85156 18.0566 11.3223 17.875 12.3125C17.7607 12.9365 17.2686 13.417 16.6328 13.5078C15.1533 13.7217 12.707 14 10 14C7.29297 14 4.84375 13.7217 3.36719 13.5078C2.73438 13.417 2.23926 12.9365 2.125 12.3125C1.94336 11.3223 1.75 9.85742 1.75 8C1.75 6.13965 1.94336 4.67773 2.125 3.6875C2.23926 3.06348 2.73145 2.58594 3.36719 2.49219C4.83789 2.27832 7.27539 2 10 2ZM7.75 3.71094V12.2891L8.875 11.6562L14.125 8.65625L15.25 8L14.125 7.34375L8.875 4.34375L7.75 3.71094ZM9.25 6.28906L12.2266 8L9.25 9.71094V6.28906Z",fill:"white"}})])])])])]),t._v(" "),l("div",{staticClass:"col-xl-6"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-xl-3"},[l("div",{staticClass:"f_head"},[t._v(t._s(t.footer.title))]),t._v(" "),t._l(t.footer.child,(function(n){return l("div",{staticClass:"f_links_m"},[l("NuxtLink",{attrs:{to:t.localePath("/".concat(n.url))}},[t._v("\n                  "+t._s(n.title)+"\n                ")])],1)}))],2),t._v(" "),l("div",{staticClass:"col-xl-4"},[l("div",{staticClass:"f_head"},[t._v(t._s(t.footer1.title))]),t._v(" "),t._l(t.footer1.child,(function(n){return l("div",{staticClass:"f_links_m"},[l("NuxtLink",{attrs:{to:t.localePath("/".concat(n.url))}},[t._v("\n                  "+t._s(n.title)+"\n                ")])],1)}))],2),t._v(" "),l("div",{staticClass:"col-xl-5"},[l("div",{staticClass:"footer_cards"},[l("div",{staticClass:"f_tel"},[t._v(t._s(t.$t("phone"))+": "+t._s(t.contacts.phone_number))]),t._v(" "),l("div",{staticClass:"f_email"},[t._v(t._s(t.$t("email"))+": "+t._s(t.contacts.email_address))]),t._v(" "),l("div",{staticClass:"f_address"},[t._v(t._s(t.$t("address"))+": "+t._s(t.contacts.address))])])])])])])])])])}),[],!1,null,null,null);l.default=component.exports;installComponents(component,{Footer:n(377).default})},378:function(t,l,n){"use strict";n.r(l);n(22),n(2),n(1);var e={data:function(){return{isActive:!1,menu:[],isOpen:!1,logo:{}}},mounted:function(){var t=this;this.$axios.$get("main-page/",{headers:{"Accept-Language":this.$i18n.locale}}).then((function(l){t.menu=l.menu,t.logo=l.site}))},computed:{availableLocales:function(){var t=this;return this.$i18n.locales.filter((function(i){return i.code!==t.$i18n.locale}))}}},C=n(75),component=Object(C.a)(e,(function(){var t=this,l=t._self._c;return l("nav",{staticClass:"navbar_main"},[l("div",{staticClass:"mobile_menu",class:{show:t.isOpen}},[l("ul",{staticClass:"nav"},t._l(t.menu,(function(n,e){return l("li",{key:e,staticClass:"nav-item"},[l("a",{staticClass:"nav-link"},[t._v(t._s(n.title))]),t._v(" "),l("ul",{staticClass:"child_menu z_index1"},t._l(n.child,(function(n,e){return l("li",{key:e},[l("NuxtLink",{attrs:{to:t.localePath("/".concat(n.url))}},[t._v(t._s(n.title))])],1)})),0)])})),0)]),t._v(" "),l("div",{staticClass:"nav_brand"},[l("NuxtLink",{attrs:{to:t.localePath("/")}},[l("img",{attrs:{src:t.logo.logo_url,alt:"",width:"90px"}})])],1),t._v(" "),l("div",{staticClass:"navbar_border"}),t._v(" "),l("div",{staticClass:"navbar_bottom_border"}),t._v(" "),l("div",{staticClass:"nav_links"},[l("ul",{staticClass:"nav"},t._l(t.menu,(function(n,e){return l("li",{key:e,staticClass:"nav-item"},[l("NuxtLink",{staticClass:"nav-link",attrs:{to:t.localePath("/".concat(n.url))}},[t._v(t._s(n.title)+"  ")]),t._v(" "),0!=n.child.length?l("ul",{staticClass:"child_menu z_index1"},t._l(n.child,(function(n,e){return l("li",{key:e},[l("NuxtLink",{attrs:{to:t.localePath("/".concat(n.url))}},[t._v(t._s(n.title))])],1)})),0):t._e()],1)})),0)]),t._v(" "),l("div",{staticClass:"main_language"},[l("button",{on:{click:function(l){t.isActive=!t.isActive}}},[l("svg",{attrs:{width:"15",height:"14",viewBox:"0 0 15 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.25225 13.75C11.2549 13.75 14.4996 10.7279 14.4996 7C14.4996 3.27208 11.2549 0.25 7.25225 0.25C3.24964 0.25 0.00488281 3.27208 0.00488281 7C0.00488281 10.7279 3.24964 13.75 7.25225 13.75ZM9.51142 11.8114C11.3774 11.0502 12.7158 9.37499 12.8735 7.39374C12.2108 7.73038 11.3752 8.00636 10.4227 8.19847C10.3028 9.60074 9.97622 10.8528 9.51142 11.8114ZM4.99308 2.18865C3.42503 2.82824 2.22962 4.1133 1.79424 5.68301C1.98076 5.84783 2.29838 6.05054 2.78169 6.25061C3.14311 6.40021 3.56457 6.53483 4.03552 6.64731C4.07833 4.90436 4.43664 3.33617 4.99308 2.18865ZM5.72273 8.43307C5.84893 9.52562 6.11295 10.4651 6.44634 11.1638C6.68312 11.66 6.92335 11.9686 7.10875 12.133C7.17468 12.1914 7.22241 12.2226 7.25225 12.2386C7.28209 12.2226 7.32982 12.1914 7.39576 12.133C7.58116 11.9686 7.82138 11.66 8.05816 11.1638C8.39155 10.4651 8.65558 9.52562 8.78177 8.43307C8.28869 8.47692 7.77699 8.5 7.25226 8.5C6.72752 8.5 6.21581 8.47692 5.72273 8.43307ZM4.08182 8.19847C4.20172 9.60073 4.52828 10.8528 4.99309 11.8114C3.12705 11.0502 1.78874 9.37499 1.63102 7.39373C2.29369 7.73037 3.12931 8.00636 4.08182 8.19847ZM8.86251 6.9172C8.35469 6.97065 7.81534 7 7.25226 7C6.68917 7 6.14982 6.97065 5.64199 6.9172C5.65257 5.24806 5.98225 3.80878 6.44634 2.83624C6.68312 2.34005 6.92335 2.03137 7.10875 1.86704C7.17469 1.80859 7.22241 1.77744 7.25225 1.76137C7.28209 1.77744 7.32982 1.80859 7.39576 1.86704C7.58116 2.03137 7.82138 2.34005 8.05816 2.83624C8.52225 3.80878 8.85193 5.24806 8.86251 6.9172ZM10.469 6.64731C10.4262 4.90437 10.0679 3.33617 9.51142 2.18865C11.0795 2.82824 12.2749 4.1133 12.7103 5.68301C12.5237 5.84784 12.2061 6.05055 11.7228 6.25061C11.3614 6.40022 10.9399 6.53483 10.469 6.64731Z",fill:"white"}})]),t._v(" "),"uz"==t.$i18n.locale?l("span",[t._v("O'zbek")]):t._e(),t._v(" "),"ru"==t.$i18n.locale?l("span",[t._v("Рус")]):t._e(),t._v(" "),"en"==t.$i18n.locale?l("span",[t._v("English")]):t._e()]),t._v(" "),t.isActive?l("div",[l("div",{staticClass:"lang_menu"},[l("div",{staticClass:"list_lang"},t._l(t.availableLocales,(function(n){return l("div",{key:n.code},[l("NuxtLink",{attrs:{to:t.switchLocalePath(n.code)}},[t._v(t._s(n.name))])],1)})),0)])]):t._e()]),t._v(" "),l("div",{staticClass:"hambur"},[l("div",{class:{open:t.isOpen},attrs:{id:"nav-icon2"},on:{click:function(l){t.isOpen=!t.isOpen}}},[l("span"),t._v(" "),l("span"),t._v(" "),l("span"),t._v(" "),l("span"),t._v(" "),l("span"),t._v(" "),l("span")])])])}),[],!1,null,null,null);l.default=component.exports},390:function(t,l,n){"use strict";n.r(l);var e={name:"IndexPage",data:function(){return{managements:[],show_modals:{},isShow:!1}},mounted:function(){var t=this;this.$axios.$get("staff-department/",{headers:{"Accept-Language":this.$i18n.locale}}).then((function(l){t.managements=l}))},methods:{shows:function(t){this.show_modals=t,this.isShow=!0}}},C=n(75),component=Object(C.a)(e,(function(){var t=this,l=t._self._c;return l("div",[l("div",{staticClass:"modal_show_f",class:{shows:t.isShow}},[l("div",{staticClass:"modal_show"},[l("div",{staticClass:"ex_btn_f"},[l("button",{staticClass:"exit_modal",on:{click:function(l){t.isShow=!1}}},[l("svg",{attrs:{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{d:"M24.841 1.22084L14.0005 12.0613L3.16002 1.22084C2.89929 0.982243 2.55656 0.853446 2.20322 0.861275C1.84989 0.869104 1.5132 1.01296 1.26329 1.26286C1.01339 1.51277 0.869535 1.84946 0.861706 2.20279C0.853877 2.55612 0.982674 2.89886 1.22127 3.15959L12.0563 14.0001L1.21852 24.8378C1.08611 24.964 0.980266 25.1154 0.907204 25.2831C0.834143 25.4508 0.795339 25.6313 0.793074 25.8142C0.790809 25.9971 0.825129 26.1786 0.894015 26.3481C0.962901 26.5175 1.06496 26.6714 1.1942 26.8009C1.32344 26.9303 1.47725 27.0326 1.64659 27.1017C1.81593 27.1708 1.99738 27.2054 2.18027 27.2034C2.36316 27.2014 2.54381 27.1628 2.71159 27.09C2.87937 27.0172 3.0309 26.9116 3.15727 26.7793L14.0005 15.9416L24.841 26.7821C25.1017 27.0207 25.4445 27.1495 25.7978 27.1416C26.1511 27.1338 26.4878 26.99 26.7377 26.7401C26.9876 26.4902 27.1315 26.1535 27.1393 25.8001C27.1472 25.4468 27.0184 25.1041 26.7798 24.8433L15.9393 14.0028L26.7798 3.15959C26.9122 3.0334 27.018 2.88202 27.0911 2.71435C27.1641 2.54667 27.2029 2.36608 27.2052 2.18319C27.2075 2.0003 27.1732 1.8188 27.1043 1.64937C27.0354 1.47993 26.9333 1.32598 26.8041 1.19656C26.6748 1.06713 26.521 0.964851 26.3517 0.895725C26.1824 0.826598 26.0009 0.792022 25.818 0.794028C25.6351 0.796034 25.4545 0.834581 25.2867 0.907405C25.1189 0.980229 24.9674 1.08586 24.841 1.21809V1.22084Z",fill:"black"}})])])]),t._v(" "),l("div",{staticClass:"modal_cards"},[l("div",{staticClass:"c_card_img"},[l("img",{attrs:{src:t.show_modals.image_url,alt:""}})]),t._v(" "),l("div",{staticClass:"main_textt"},[l("div",{staticClass:"m_card_leader"},[t._v(t._s(t.show_modals.title))]),t._v(" "),"Vacant Vacant Vacant"!=t.show_modals.full_name&&"Vakant Vakant Vakant"!=t.show_modals.full_name&&"Вакант Вакант Вакант"!=t.show_modals.full_name?l("div",{staticClass:"m_card_leader_name"},[t._v(t._s(t.show_modals.full_name))]):l("div",{staticClass:"m_card_leader_name"},[t._v("Vacant")]),t._v(" "),l("div",{staticClass:"main_mail modal_borders"},[l("div",{staticClass:"mail"},[l("div",[l("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{d:"M4.5 3.75V11.25H1.5V21H14.25V18H22.5V8.25H17.25V3.75H4.5ZM6 5.25H15.75V8.25H9V11.25H6V5.25ZM10.5 9.75H21V16.5H14.25V11.25H10.5V9.75ZM17.25 11.25V12.75H19.5V11.25H17.25ZM3 12.75H4.5H9.75H12.75V13.585L8.2207 16.4004C8.01145 16.5309 7.7393 16.5316 7.5293 16.4004L3 13.5864V12.75ZM12.75 15.3516V19.5H3V15.353L6.73682 17.6748C7.08782 17.8931 7.482 18.0029 7.875 18.0029C8.268 18.0029 8.66147 17.8931 9.01172 17.6733L12.75 15.3516Z",fill:"#5A46D5"}})])]),t._v(" "),l("div",{staticClass:"email_name"},[t._v("\n                "+t._s(t.$t("email"))),l("br"),t._v("\n                  "+t._s(t.show_modals.email_address)+"\n              ")])]),t._v(" "),l("div",{staticClass:"mail"},[l("div",[l("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{d:"M4.49187 0.25C4.0993 0.25 3.71258 0.390625 3.39031 0.648438L3.34344 0.671875L3.32 0.695313L0.976249 3.10938L0.999687 3.13281C0.276054 3.80078 0.0533975 4.7998 0.366874 5.66406C0.369804 5.66992 0.363945 5.68164 0.366874 5.6875C1.00262 7.50684 2.62859 11.0195 5.80437 14.1953C8.99187 17.3828 12.5514 18.9443 14.3122 19.6328H14.3356C15.2468 19.9375 16.2341 19.7207 16.9372 19.1172L19.3044 16.75C19.9255 16.1289 19.9255 15.0508 19.3044 14.4297L16.2575 11.3828L16.2341 11.3359C15.613 10.7148 14.5114 10.7148 13.8903 11.3359L12.3903 12.8359C11.8483 12.5752 10.5563 11.9072 9.32 10.7266C8.09246 9.55469 7.46551 8.20703 7.23406 7.67969L8.73406 6.17969C9.36394 5.54981 9.37566 4.50098 8.71062 3.88281L8.73406 3.85938L8.66375 3.78906L5.66375 0.695313L5.64031 0.671875L5.59344 0.648438C5.27117 0.390625 4.88445 0.25 4.49187 0.25ZM4.49187 1.75C4.54754 1.75 4.6032 1.77637 4.65594 1.82031L7.65594 4.89063L7.72625 4.96094C7.72039 4.95508 7.77019 5.03418 7.67937 5.125L5.80437 7L5.45281 7.32813L5.61687 7.79688C5.61687 7.79688 6.4782 10.1025 8.28875 11.8281L8.45281 11.9688C10.196 13.5596 12.2497 14.4297 12.2497 14.4297L12.7184 14.6406L14.945 12.4141C15.0739 12.2852 15.0505 12.2852 15.1794 12.4141L18.2497 15.4844C18.3786 15.6133 18.3786 15.5664 18.2497 15.6953L15.9528 17.9922C15.6071 18.2881 15.2409 18.3496 14.8044 18.2031C13.1052 17.5352 9.8034 16.085 6.85906 13.1406C3.89129 10.1729 2.34148 6.80664 1.77312 5.17188C1.65887 4.86719 1.7409 4.41602 2.0075 4.1875L2.05437 4.14063L4.32781 1.82031C4.38055 1.77637 4.43621 1.75 4.49187 1.75Z",fill:"#5A46D5"}})])]),t._v(" "),l("div",{staticClass:"email_name"},[t._v("\n                "+t._s(t.$t("phone"))),l("br"),t._v("\n                "+t._s(t.show_modals.phone_number)+"\n              ")])])])])]),t._v(" "),l("div",{staticClass:"modal_description"},[t._v("\n                "+t._s(t.show_modals.tasks)+"\n            ")])])]),t._v(" "),l("div",{staticClass:"test_rejm"},[l("marquee",[t._v(t._s(t.$t("test")))])],1),t._v(" "),l("div",{staticClass:"managements"},[l("div",{staticClass:"cards_one_f"},[l("div",[l("div",{staticClass:"cards_one"},[l("Navbar"),t._v(" "),l("div",{staticClass:"nav_left_container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-xl-6"},[l("div",{staticClass:"main_text"},[t._v("\n            "+t._s(t.$t("departments"))+"\n          ")])])])])],1),t._v(" "),l("div",{staticClass:"manage_f"},[l("section",t._l(t.managements,(function(n){return l("div",{staticClass:"managements_cards"},[l("div",{staticClass:"card_m"},[l("div",{staticClass:"border_center"}),t._v(" "),l("div",{staticClass:"border_left"}),t._v(" "),l("div",{staticClass:"c_card_img"},[l("img",{attrs:{src:n.image_url,alt:""}})]),t._v(" "),l("div",{staticClass:"main_textt"},[l("div",{staticClass:"m_card_leader"},[t._v(t._s(n.title))]),t._v(" "),"Vacant Vacant Vacant"!=n.full_name&&"Vakant Vakant Vakant"!=n.full_name&&"Вакант Вакант Вакант"!=n.full_name?l("div",{staticClass:"m_card_leader_name"},[t._v(t._s(n.full_name))]):l("div",{staticClass:"m_card_leader_name"},[t._v("Vacant")]),t._v(" "),l("div",{staticClass:"main_mail"},[l("div",{staticClass:"mail"},[l("div",[l("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{d:"M4.5 3.75V11.25H1.5V21H14.25V18H22.5V8.25H17.25V3.75H4.5ZM6 5.25H15.75V8.25H9V11.25H6V5.25ZM10.5 9.75H21V16.5H14.25V11.25H10.5V9.75ZM17.25 11.25V12.75H19.5V11.25H17.25ZM3 12.75H4.5H9.75H12.75V13.585L8.2207 16.4004C8.01145 16.5309 7.7393 16.5316 7.5293 16.4004L3 13.5864V12.75ZM12.75 15.3516V19.5H3V15.353L6.73682 17.6748C7.08782 17.8931 7.482 18.0029 7.875 18.0029C8.268 18.0029 8.66147 17.8931 9.01172 17.6733L12.75 15.3516Z",fill:"#5A46D5"}})])]),t._v(" "),l("div",{staticClass:"email_name"},[t._v("\n                "+t._s(t.$t("email"))),l("br"),t._v("\n                  "+t._s(n.email_address)+"\n              ")])]),t._v(" "),l("div",{staticClass:"mail"},[l("div",[l("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{d:"M4.49187 0.25C4.0993 0.25 3.71258 0.390625 3.39031 0.648438L3.34344 0.671875L3.32 0.695313L0.976249 3.10938L0.999687 3.13281C0.276054 3.80078 0.0533975 4.7998 0.366874 5.66406C0.369804 5.66992 0.363945 5.68164 0.366874 5.6875C1.00262 7.50684 2.62859 11.0195 5.80437 14.1953C8.99187 17.3828 12.5514 18.9443 14.3122 19.6328H14.3356C15.2468 19.9375 16.2341 19.7207 16.9372 19.1172L19.3044 16.75C19.9255 16.1289 19.9255 15.0508 19.3044 14.4297L16.2575 11.3828L16.2341 11.3359C15.613 10.7148 14.5114 10.7148 13.8903 11.3359L12.3903 12.8359C11.8483 12.5752 10.5563 11.9072 9.32 10.7266C8.09246 9.55469 7.46551 8.20703 7.23406 7.67969L8.73406 6.17969C9.36394 5.54981 9.37566 4.50098 8.71062 3.88281L8.73406 3.85938L8.66375 3.78906L5.66375 0.695313L5.64031 0.671875L5.59344 0.648438C5.27117 0.390625 4.88445 0.25 4.49187 0.25ZM4.49187 1.75C4.54754 1.75 4.6032 1.77637 4.65594 1.82031L7.65594 4.89063L7.72625 4.96094C7.72039 4.95508 7.77019 5.03418 7.67937 5.125L5.80437 7L5.45281 7.32813L5.61687 7.79688C5.61687 7.79688 6.4782 10.1025 8.28875 11.8281L8.45281 11.9688C10.196 13.5596 12.2497 14.4297 12.2497 14.4297L12.7184 14.6406L14.945 12.4141C15.0739 12.2852 15.0505 12.2852 15.1794 12.4141L18.2497 15.4844C18.3786 15.6133 18.3786 15.5664 18.2497 15.6953L15.9528 17.9922C15.6071 18.2881 15.2409 18.3496 14.8044 18.2031C13.1052 17.5352 9.8034 16.085 6.85906 13.1406C3.89129 10.1729 2.34148 6.80664 1.77312 5.17188C1.65887 4.86719 1.7409 4.41602 2.0075 4.1875L2.05437 4.14063L4.32781 1.82031C4.38055 1.77637 4.43621 1.75 4.49187 1.75Z",fill:"#5A46D5"}})])]),t._v(" "),l("div",{staticClass:"email_name"},[t._v("\n                "+t._s(t.$t("phone"))),l("br"),t._v("\n                "+t._s(n.phone_number)+"\n              ")])])])]),t._v(" "),l("div",{staticClass:"m_buttons"},[l("button",{on:{click:function(l){return t.shows(n)}}},[t._v(t._s(t.$t("bt_text")))])])])])})),0)])])]),t._v(" "),l("Footer")],1)])}),[],!1,null,null,null);l.default=component.exports;installComponents(component,{Navbar:n(378).default,Footer:n(377).default})}}]);