(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{562:function(v,_,e){"use strict";e.r(_);var t=e(6),o=Object(t.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"前言"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[v._v("#")]),v._v(" 前言")]),v._v(" "),_("p",[v._v("long long ago，再一次与后端联调过程中遇到了一个问题，明明我只发送了一条请求，但是"),_("code",[v._v("google")]),v._v("上却显示两条请求，年轻的我一脸的蒙蔽，问后端大佬，大佬也不清楚。没办法，只能自己分析了，打开"),_("code",[v._v("F12")]),v._v("在"),_("code",[v._v("Network")]),v._v("可以看到其中一条请求的请求方式是"),_("code",[v._v("OPTIONS")]),v._v("，查阅资料看到"),_("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/OPTIONS",target:"_blank",rel:"noopener noreferrer"}},[v._v("MDN"),_("OutboundLink")],1),v._v("将"),_("code",[v._v("OPTIONS")]),v._v("请求称之为"),_("code",[v._v("预检请求")]),v._v("，用来检测实际请求是否可以被服务器所接受")]),v._v(" "),_("p",[v._v("那什么时候触发"),_("code",[v._v("预检请求")]),v._v("，通过"),_("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2016/04/cors.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("阮一峰的跨域资源共享CORS详解"),_("OutboundLink")],1),v._v("我们可以知道"),_("code",[v._v("CORS")]),v._v("分为"),_("code",[v._v("简单请求")]),v._v("和"),_("code",[v._v("复杂请求")]),v._v("，而当请求为"),_("code",[v._v("复杂请求")]),v._v("时则会先触发"),_("code",[v._v("预检请求")]),v._v("，得到服务器的肯定回答后才付出真正的请求")]),v._v(" "),_("h2",{attrs:{id:"简单请求、复杂请求"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#简单请求、复杂请求"}},[v._v("#")]),v._v(" 简单请求、复杂请求")]),v._v(" "),_("p",[v._v("同时满足以下条件的是"),_("code",[v._v("简单请求")]),v._v("：")]),v._v(" "),_("ol",[_("li",[v._v("请求方式是以下三种之一：")])]),v._v(" "),_("ul",[_("li",[v._v("GET")]),v._v(" "),_("li",[v._v("POST")]),v._v(" "),_("li",[v._v("HEAD")])]),v._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[v._v("Http头信息不超出以下字段：")])]),v._v(" "),_("ul",[_("li",[v._v("Accept")]),v._v(" "),_("li",[v._v("Accept-Language")]),v._v(" "),_("li",[v._v("Content-Language")]),v._v(" "),_("li",[v._v("Last-Event-ID")]),v._v(" "),_("li",[v._v("Content-Type: 只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain")])]),v._v(" "),_("p",[v._v("不同时满足以上条件的均是"),_("code",[v._v("复杂请求")])]),v._v(" "),_("h2",{attrs:{id:"cors"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cors"}},[v._v("#")]),v._v(" CORS")]),v._v(" "),_("ul",[_("li",[v._v("Access-Control-Allow-Origin: 设置跨域源，如果为*则表示允许任何源访问")]),v._v(" "),_("li",[v._v("Access-Control-Max-Age： 设置预检的过期时间")]),v._v(" "),_("li",[v._v("Access-Control-Allow-Credentials：是否允许发送"),_("code",[v._v("cookie")]),v._v("，默认请求是不携带"),_("code",[v._v("cookie")]),v._v("的，但是如果需要请求携带"),_("code",[v._v("cookie")]),v._v("则需要请这个设置为"),_("code",[v._v("true")]),v._v("，同时前端"),_("code",[v._v("ajax")]),v._v("请求也需要将"),_("code",[v._v("withCredentials")]),v._v("设置为"),_("code",[v._v("true")])])]),v._v(" "),_("h2",{attrs:{id:"结语"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[v._v("#")]),v._v(" 结语")]),v._v(" "),_("p",[v._v("今天有点短，日常开发遇到了知道是怎么回事就好！")])])}),[],!1,null,null,null);_.default=o.exports}}]);