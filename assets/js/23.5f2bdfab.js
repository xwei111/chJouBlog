(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{637:function(e,t,l){"use strict";l.r(t);l(26);var n={data:function(){return{vl:!1,isBlack:!1,isBuling:!1}},watch:{vl:function(e){var t=document.getElementsByClassName("vuepress-blog-theme-content")[0];this.setFilter(t,e,"grayscale(1)")},isBlack:function(e){var t=document.documentElement,l=document.getElementsByClassName("footer")[0];this.setFilter(t,e,"invert(1)"),this.setFilter(l,e,"invert(1)"),this.setImg(e)},isBuling:function(e){document.getElementsByClassName("vuepress-blog-theme-content")[0].style.animation=e?"hue 3s infinite linear":""}},methods:{setFilter:function(e,t,l){e.style.filter=t?l:"",e.style["-webkit-filter"]=t?l:"",e.style["-moz-filter"]=t?l:"",e.style["-ms-filter"]=t?l:"",e.style["-o-filter"]=t?l:""},setImg:function(e){var t=document.getElementsByTagName("head")[0];if(e){var l=document.createElement("style");l.type="text/css",l.innerHTML="img{filter: invert(1);}",l.id="stly",t.appendChild(l)}else t.removeChild(document.getElementById("stly"))}}},i=l(10),s=Object(i.a)(n,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("p",[e._v("一键置灰:")]),e._v(" "),l("el-switch",{model:{value:e.vl,callback:function(t){e.vl=t},expression:"vl"}}),e._v(" "),l("p",[e._v("以下demo在移动端体验更好")]),e._v(" "),l("p",[e._v("暗黑模式:")]),e._v(" "),l("el-switch",{model:{value:e.isBlack,callback:function(t){e.isBlack=t},expression:"isBlack"}}),e._v(" "),l("p",[e._v("blingbling模式:")]),e._v(" "),l("el-switch",{model:{value:e.isBuling,callback:function(t){e.isBuling=t},expression:"isBuling"}})],1)}),[],!1,null,null,null);t.default=s.exports}}]);