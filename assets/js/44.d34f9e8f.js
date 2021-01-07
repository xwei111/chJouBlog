(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{610:function(e,v,_){"use strict";_.r(v);var t=_(12),o=Object(t.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h2",{attrs:{id:"前言"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),_("p",[e._v("long long ago，再一次与后端联调过程中遇到了一个问题，明明我只发送了一条请求，但是"),_("code",[e._v("google")]),e._v("上却显示两条请求，年轻的我一脸的蒙蔽，问后端大佬，大佬也不清楚。没办法，只能自己分析了，打开"),_("code",[e._v("F12")]),e._v("在"),_("code",[e._v("Network")]),e._v("可以看到其中一条请求的请求方式是"),_("code",[e._v("OPTIONS")]),e._v("，查阅资料看到"),_("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/OPTIONS",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN"),_("OutboundLink")],1),e._v("将"),_("code",[e._v("OPTIONS")]),e._v("请求称之为"),_("code",[e._v("预检请求")]),e._v("，用来检测实际请求是否可以被服务器所接受")]),e._v(" "),_("p",[e._v("那什么时候触发"),_("code",[e._v("预检请求")]),e._v("，通过"),_("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2016/04/cors.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("阮一峰的跨域资源共享CORS详解"),_("OutboundLink")],1),e._v("我们可以知道"),_("code",[e._v("CORS")]),e._v("分为"),_("code",[e._v("简单请求")]),e._v("和"),_("code",[e._v("复杂请求")]),e._v("，而当请求为"),_("code",[e._v("复杂请求")]),e._v("时则会先触发"),_("code",[e._v("预检请求")]),e._v("，得到服务器的肯定回答后才付出真正的请求")]),e._v(" "),_("h2",{attrs:{id:"简单请求、复杂请求"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#简单请求、复杂请求"}},[e._v("#")]),e._v(" 简单请求、复杂请求")]),e._v(" "),_("p",[e._v("同时满足以下条件的是"),_("code",[e._v("简单请求")]),e._v("：")]),e._v(" "),_("ol",[_("li",[e._v("请求方式是以下三种之一：")])]),e._v(" "),_("ul",[_("li",[e._v("GET")]),e._v(" "),_("li",[e._v("POST")]),e._v(" "),_("li",[e._v("HEAD")])]),e._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[e._v("Http头信息不超出以下字段：")])]),e._v(" "),_("ul",[_("li",[e._v("Accept")]),e._v(" "),_("li",[e._v("Accept-Language")]),e._v(" "),_("li",[e._v("Content-Language")]),e._v(" "),_("li",[e._v("Last-Event-ID")]),e._v(" "),_("li",[e._v("Content-Type: 只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain")])]),e._v(" "),_("p",[e._v("不同时满足以上条件的均是"),_("code",[e._v("复杂请求")])]),e._v(" "),_("h2",{attrs:{id:"cors"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cors"}},[e._v("#")]),e._v(" CORS")]),e._v(" "),_("ul",[_("li",[e._v("Access-Control-Allow-Origin: 设置跨域源，如果为*则表示允许任何源访问")]),e._v(" "),_("li",[e._v("Access-Control-Max-Age： 设置预检的过期时间")]),e._v(" "),_("li",[e._v("Access-Control-Allow-Credentials：是否允许发送"),_("code",[e._v("cookie")]),e._v("，默认请求是不携带"),_("code",[e._v("cookie")]),e._v("的，但是如果需要请求携带"),_("code",[e._v("cookie")]),e._v("则需要请这个设置为"),_("code",[e._v("true")]),e._v("，同时前端"),_("code",[e._v("ajax")]),e._v("请求也需要将"),_("code",[e._v("withCredentials")]),e._v("设置为"),_("code",[e._v("true")])])]),e._v(" "),_("h2",{attrs:{id:"结语"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[e._v("#")]),e._v(" 结语")]),e._v(" "),_("p",[e._v("今天有点短，日常开发遇到了知道是怎么回事就好！")])])}),[],!1,null,null,null);v.default=o.exports}}]);