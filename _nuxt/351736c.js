(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{378:function(t,n,l){"use strict";l.r(n);l(22),l(2),l(1);var e={data:function(){return{isActive:!1,menu:[],isOpen:!1,logo:{}}},mounted:function(){var t=this;this.$axios.$get("main-page/",{headers:{"Accept-Language":this.$i18n.locale}}).then((function(n){t.menu=n.menu,t.logo=n.site}))},computed:{availableLocales:function(){var t=this;return this.$i18n.locales.filter((function(i){return i.code!==t.$i18n.locale}))}}},c=l(75),component=Object(c.a)(e,(function(){var t=this,n=t._self._c;return n("nav",{staticClass:"navbar_main"},[n("div",{staticClass:"mobile_menu",class:{show:t.isOpen}},[n("ul",{staticClass:"nav"},t._l(t.menu,(function(l,e){return n("li",{key:e,staticClass:"nav-item"},[n("a",{staticClass:"nav-link"},[t._v(t._s(l.title))]),t._v(" "),n("ul",{staticClass:"child_menu z_index1"},t._l(l.child,(function(l,e){return n("li",{key:e},[n("NuxtLink",{attrs:{to:t.localePath("/".concat(l.url))}},[t._v(t._s(l.title))])],1)})),0)])})),0)]),t._v(" "),n("div",{staticClass:"nav_brand"},[n("NuxtLink",{attrs:{to:t.localePath("/")}},[n("img",{attrs:{src:t.logo.logo_url,alt:"",width:"90px"}})])],1),t._v(" "),n("div",{staticClass:"navbar_border"}),t._v(" "),n("div",{staticClass:"navbar_bottom_border"}),t._v(" "),n("div",{staticClass:"nav_links"},[n("ul",{staticClass:"nav"},t._l(t.menu,(function(l,e){return n("li",{key:e,staticClass:"nav-item"},[n("NuxtLink",{staticClass:"nav-link",attrs:{to:t.localePath("/".concat(l.url))}},[t._v(t._s(l.title)+"  ")]),t._v(" "),0!=l.child.length?n("ul",{staticClass:"child_menu z_index1"},t._l(l.child,(function(l,e){return n("li",{key:e},[n("NuxtLink",{attrs:{to:t.localePath("/".concat(l.url))}},[t._v(t._s(l.title))])],1)})),0):t._e()],1)})),0)]),t._v(" "),n("div",{staticClass:"main_language"},[n("button",{on:{click:function(n){t.isActive=!t.isActive}}},[n("svg",{attrs:{width:"15",height:"14",viewBox:"0 0 15 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.25225 13.75C11.2549 13.75 14.4996 10.7279 14.4996 7C14.4996 3.27208 11.2549 0.25 7.25225 0.25C3.24964 0.25 0.00488281 3.27208 0.00488281 7C0.00488281 10.7279 3.24964 13.75 7.25225 13.75ZM9.51142 11.8114C11.3774 11.0502 12.7158 9.37499 12.8735 7.39374C12.2108 7.73038 11.3752 8.00636 10.4227 8.19847C10.3028 9.60074 9.97622 10.8528 9.51142 11.8114ZM4.99308 2.18865C3.42503 2.82824 2.22962 4.1133 1.79424 5.68301C1.98076 5.84783 2.29838 6.05054 2.78169 6.25061C3.14311 6.40021 3.56457 6.53483 4.03552 6.64731C4.07833 4.90436 4.43664 3.33617 4.99308 2.18865ZM5.72273 8.43307C5.84893 9.52562 6.11295 10.4651 6.44634 11.1638C6.68312 11.66 6.92335 11.9686 7.10875 12.133C7.17468 12.1914 7.22241 12.2226 7.25225 12.2386C7.28209 12.2226 7.32982 12.1914 7.39576 12.133C7.58116 11.9686 7.82138 11.66 8.05816 11.1638C8.39155 10.4651 8.65558 9.52562 8.78177 8.43307C8.28869 8.47692 7.77699 8.5 7.25226 8.5C6.72752 8.5 6.21581 8.47692 5.72273 8.43307ZM4.08182 8.19847C4.20172 9.60073 4.52828 10.8528 4.99309 11.8114C3.12705 11.0502 1.78874 9.37499 1.63102 7.39373C2.29369 7.73037 3.12931 8.00636 4.08182 8.19847ZM8.86251 6.9172C8.35469 6.97065 7.81534 7 7.25226 7C6.68917 7 6.14982 6.97065 5.64199 6.9172C5.65257 5.24806 5.98225 3.80878 6.44634 2.83624C6.68312 2.34005 6.92335 2.03137 7.10875 1.86704C7.17469 1.80859 7.22241 1.77744 7.25225 1.76137C7.28209 1.77744 7.32982 1.80859 7.39576 1.86704C7.58116 2.03137 7.82138 2.34005 8.05816 2.83624C8.52225 3.80878 8.85193 5.24806 8.86251 6.9172ZM10.469 6.64731C10.4262 4.90437 10.0679 3.33617 9.51142 2.18865C11.0795 2.82824 12.2749 4.1133 12.7103 5.68301C12.5237 5.84784 12.2061 6.05055 11.7228 6.25061C11.3614 6.40022 10.9399 6.53483 10.469 6.64731Z",fill:"white"}})]),t._v(" "),"uz"==t.$i18n.locale?n("span",[t._v("O'zbek")]):t._e(),t._v(" "),"ru"==t.$i18n.locale?n("span",[t._v("Рус")]):t._e(),t._v(" "),"en"==t.$i18n.locale?n("span",[t._v("English")]):t._e()]),t._v(" "),t.isActive?n("div",[n("div",{staticClass:"lang_menu"},[n("div",{staticClass:"list_lang"},t._l(t.availableLocales,(function(l){return n("div",{key:l.code},[n("NuxtLink",{attrs:{to:t.switchLocalePath(l.code)}},[t._v(t._s(l.name))])],1)})),0)])]):t._e()]),t._v(" "),n("div",{staticClass:"hambur"},[n("div",{class:{open:t.isOpen},attrs:{id:"nav-icon2"},on:{click:function(n){t.isOpen=!t.isOpen}}},[n("span"),t._v(" "),n("span"),t._v(" "),n("span"),t._v(" "),n("span"),t._v(" "),n("span"),t._v(" "),n("span")])])])}),[],!1,null,null,null);n.default=component.exports}}]);