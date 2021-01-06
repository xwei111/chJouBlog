(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{553:function(t,v,e){t.exports=e.p+"assets/img/20201130computer3.000ee81d.png"},599:function(t,v,e){"use strict";e.r(v);var _=e(12),a=Object(_.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"前言"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),_("p",[t._v("TCP连接成功后就可以发送http请求，然后服务端返回相应的资源，之后就会四次挥手断开连接")]),t._v(" "),_("h2",{attrs:{id:"http版本差异"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http版本差异"}},[t._v("#")]),t._v(" HTTP版本差异")]),t._v(" "),_("p",[t._v("HTTP是TCP/IP模型中的应用层协议，不同版本的http发起请求过程不尽相同：")]),t._v(" "),_("h3",{attrs:{id:"http1-0"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http1-0"}},[t._v("#")]),t._v(" http1.0")]),t._v(" "),_("p",[t._v("每次发起请求时会连接TCP，服务器响应后TCP会断开连接")]),t._v(" "),_("h3",{attrs:{id:"http1-1"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http1-1"}},[t._v("#")]),t._v(" http1.1")]),t._v(" "),_("ul",[_("li",[t._v("管线化(pipelining)")])]),t._v(" "),_("p",[t._v("http1.1管线化(pipelining)支持在一个TCP连接中多个http请求一一发送，各请求不需要等待服务器对前一个请求的响应，不过客户端在接收响应的时候还是按照发送的顺序接收的，如果前一个请求阻塞后续的请求都需要等待，所以仍会造成阻塞，即线头阻塞（HOLB: head of line blocking）")]),t._v(" "),_("ul",[_("li",[t._v("长连接")])]),t._v(" "),_("p",[t._v("http1.1支持长连接，默认开启Connection: keep-alive，不会关闭TCP连接，可以继续发送http请求，但长连接不能并行发起请求，各请求依赖上一个请求的响应，所以有时候依然会造成阻塞")]),t._v(" "),_("p",[t._v("所以http1.1没有完全的解决HOLB问题")]),t._v(" "),_("h3",{attrs:{id:"http2-0"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http2-0"}},[t._v("#")]),t._v(" http2.0")]),t._v(" "),_("p",[t._v("http2.0是基于SPDY设计的，主要有一下特点：")]),t._v(" "),_("ul",[_("li",[t._v("多路复用")])]),t._v(" "),_("p",[t._v("即共享TCP连接，一个request请求对于一个id，一个连接上可以有多个request请求，每个连接的request可以随机混杂在一块，接收方可以根据request的id将request在归属到各自不同的服务器里")]),t._v(" "),_("ul",[_("li",[t._v("新的二进制格式")])]),t._v(" "),_("p",[t._v("HTTP1.x的解析是基于文本。基于文本协议的格式解析存在天然缺陷，文本的表现形式有多样性，要做到健壮性考虑的场景必然很多，二进制则不同，只认0和1的组合。基于这种考虑HTTP2.0的协议解析决定采用二进制格式，实现方便且健壮")]),t._v(" "),_("ul",[_("li",[t._v("header压缩")])]),t._v(" "),_("p",[t._v("http1.x中header携带了很多重复复杂的信息，http2.0使用算法压缩了header，减小包的大小和数量")]),t._v(" "),_("ul",[_("li",[t._v("服务端推送")])]),t._v(" "),_("p",[t._v("采用了SPDY网页，如服务器向客户端推送style.css的同时会推送一个style.js，当客户端再次获取style.js时会从缓存中获取，不需要在发请求")]),t._v(" "),_("p",[t._v("相对于1.x版本，http2.0请求资源的速度会快很多")]),t._v(" "),_("h2",{attrs:{id:"发送http请求"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#发送http请求"}},[t._v("#")]),t._v(" 发送HTTP请求")]),t._v(" "),_("p",[t._v("一个请求报文由请求行、请求头、空行、正文组成，空行表示：请求头结束，接下来是正文，如下是一个完整的请求报文：")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("GET /index.css HTTP/1.1  // 请求行（请求方法 + url + 协议版本）\nHost: locahost:8001 // 以下到空行为请求头\nConnection: keep-alive\nUser-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36\nAccept: */*\nReferer: http://locahost:8001\nAccept-Encoding: gzip, deflate\nAccept-Language: zh-CN,zh;q=0.9,en;q=0.8,ko;q=0.7\nCookie: sessionId=e5a74d-3871-4817-a073-49d1bc241\n                         // 此处是空行表示请求头到此结束\nid=1&test=2 // 请求正文\n")])])]),_("p",[t._v("http1.1请求方法有：")]),t._v(" "),_("ul",[_("li",[t._v("GET（通常用来请求资源）")]),t._v(" "),_("li",[t._v("POST（通常用来添加）")]),t._v(" "),_("li",[t._v("DELETE（通常用来删除）")]),t._v(" "),_("li",[t._v("PUT（通常用来更新，这里的更新可以理解为替换资源）")]),t._v(" "),_("li",[t._v("PATCH（通常用来更新部分资源）")]),t._v(" "),_("li",[t._v("HEAD（类似于GET, 但是不返回body信息，用于检查对象是否存在，以及得到对象的元数据）")]),t._v(" "),_("li",[t._v("OPTIONS（预检，询问服务器是否允许访问）")]),t._v(" "),_("li",[t._v("TRACE（回显服务器收到的请求，主要用于测试或诊断）")])]),t._v(" "),_("p",[t._v("非简单请求会触发预检（options请求），详看阮一峰的"),_("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2016/04/cors.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("跨域资源共享 CORS 详解"),_("OutboundLink")],1)]),t._v(" "),_("h2",{attrs:{id:"服务端响应"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#服务端响应"}},[t._v("#")]),t._v(" 服务端响应")]),t._v(" "),_("p",[t._v("第一次发送请求后服务端响应请求，响应状态码一般有如下分类：")]),t._v(" "),_("ul",[_("li",[t._v("1xx: 指示信息，表示请求已接收，继续处理")]),t._v(" "),_("li",[t._v("2xx: 成功，操作被成功接收并处理")]),t._v(" "),_("li",[t._v("3xx: 重定向")]),t._v(" "),_("li",[t._v("4xx: 客户端错误")]),t._v(" "),_("li",[t._v("5xx: 服务端错误")])]),t._v(" "),_("p",[t._v("常见状态码：")]),t._v(" "),_("ul",[_("li",[t._v("200: 请求成功")]),t._v(" "),_("li",[t._v("201: 已创建")]),t._v(" "),_("li",[t._v("202: 已接收")]),t._v(" "),_("li",[t._v("204: 服务器处理成功，但没有返回内容。在未更新网页的情况下，可确保浏览器继续显示当前文档")]),t._v(" "),_("li",[t._v("301: 永久移动")]),t._v(" "),_("li",[t._v("302: 临时移动")]),t._v(" "),_("li",[t._v("304: 资源未改变（协商缓存）")]),t._v(" "),_("li",[t._v("400: 客户端语法错误")]),t._v(" "),_("li",[t._v("403: 拒绝请求")]),t._v(" "),_("li",[t._v("404: 资源找不到")]),t._v(" "),_("li",[t._v("500: 服务器内部错误")]),t._v(" "),_("li",[t._v("501: 服务器不支持请求功能")]),t._v(" "),_("li",[t._v("505: 服务器不支持请求协议版本")])]),t._v(" "),_("h2",{attrs:{id:"浏览器缓存-http缓存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存-http缓存"}},[t._v("#")]),t._v(" 浏览器缓存(HTTP缓存)")]),t._v(" "),_("p",[t._v("第一次请求到资源后，浏览器会根据请求头中的缓存标识决定是否缓存、如何缓存资源，之后会引出两个概念强缓存和协商缓存，强缓存和协商缓存都是拉取的缓存数据，区别就在于是否和服务器有交流")]),t._v(" "),_("h3",{attrs:{id:"强缓存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#强缓存"}},[t._v("#")]),t._v(" 强缓存")]),t._v(" "),_("p",[t._v("浏览器请求资源时会先获取缓存的请求头信息，如果"),_("code",[t._v("Cache-Control")]),t._v("和"),_("code",[t._v("expires")]),t._v("命中强缓存则拉取本地缓存")]),t._v(" "),_("h4",{attrs:{id:"expires"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#expires"}},[t._v("#")]),t._v(" expires")]),t._v(" "),_("p",[_("code",[t._v("expires")]),t._v("是http1.0的规范，它的值是一个绝对时间的GMT格式的时间字符串（如Wen, 18 Mar 2020 17:25:00 GMT），这个值表示资源的过期时间，未超过该时间则会从本地拉取缓存")]),t._v(" "),_("p",[t._v("缺点是"),_("code",[t._v("expires")]),t._v("的值是绝对时间，这对客户端和服务端时间一致性要求就比较高，一旦修改了客户端时间或客户端和服务端时间差异较大就会出现缓存混乱的问题")]),t._v(" "),_("h4",{attrs:{id:"cache-control"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cache-control"}},[t._v("#")]),t._v(" Cache-Control")]),t._v(" "),_("p",[_("code",[t._v("Cache-Control")]),t._v("是http1.1的规范，通过"),_("code",[t._v("max-age")]),t._v("来判断（如max-age=1000，表示1秒后过期），这是一个相对时间，除了max-age还有以下属性：")]),t._v(" "),_("ol",[_("li",[t._v("no-cache: 不使用强缓存，但可以使用协商缓存")]),t._v(" "),_("li",[t._v("no-store: 强缓存和协商缓存均无法使用")]),t._v(" "),_("li",[t._v("pubilc: 浏览器和代理服务器都可以对资源进行缓存")]),t._v(" "),_("li",[t._v("privite: 只有浏览器可以缓存，代理服务器不能缓存")]),t._v(" "),_("li",[t._v("s-maxage: 代理服务器的缓存有效期，同时设置max-age和s-maxage，客户端会使用max-age，代理服务器会使用s-maxage")])]),t._v(" "),_("p",[t._v("其实还有一个Pragma，不过它已经逐渐被抛弃了，这里不做过多了解了")]),t._v(" "),_("h4",{attrs:{id:"优先级"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#优先级"}},[t._v("#")]),t._v(" 优先级")]),t._v(" "),_("p",[t._v("Cache-Control > expires")]),t._v(" "),_("h3",{attrs:{id:"协商缓存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[t._v("#")]),t._v(" 协商缓存")]),t._v(" "),_("p",[t._v("当强缓存没有命中，接下来就要看是否能够命中协商缓存，所谓协商就是浏览器与服务器协商，如果资源还是老的资源没有更新变动则返回304告诉浏览器从缓存中拉取数据，主要是通过请求头中的"),_("code",[t._v("last-modified")]),t._v("和"),_("code",[t._v("etag")]),t._v("来判断是否需要重新拉取数据")]),t._v(" "),_("h4",{attrs:{id:"last-modified-if-modified-since"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#last-modified-if-modified-since"}},[t._v("#")]),t._v(" last-modified/if-modified-since")]),t._v(" "),_("p",[t._v("如果第一次请求服务器返回的头信息带有"),_("code",[t._v("last-modified")]),t._v("信息后续请求会携带"),_("code",[t._v("if-modified-since")]),t._v("，"),_("code",[t._v("last-modified")]),t._v("记录的是资源的最后修改时间，"),_("code",[t._v("if-modified-since")]),t._v("记录的是上次"),_("code",[t._v("last-modified")]),t._v("，服务器会将浏览器传过来的"),_("code",[t._v("if-modified-since")]),t._v("和资源修改时间做对比，如果时间一致则表示资源未修改返回304，拉取缓存的资源，如果时间不一致则向服务器请求新的资源，更新"),_("code",[t._v("last-modified")]),t._v("为新的修改时间")]),t._v(" "),_("p",[t._v("缺点是只能精确定秒，秒以内修改无法，假如一个文件1s内修改了n次，"),_("code",[t._v("last-modified")]),t._v("是无法捕获的。另外一个问题是只要文件被修改了，无论内容是否有变化，都会以最新的修改时间为判断依据，这就导致了一些没必要的请求，接下来的etag就是来解决这个问题的")]),t._v(" "),_("h4",{attrs:{id:"etag-if-none-match"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#etag-if-none-match"}},[t._v("#")]),t._v(" etag/if-none-match")]),t._v(" "),_("p",[t._v("和"),_("code",[t._v("last-modified")]),t._v("相同，第一次请求服务器返回的头信息携带了"),_("code",[t._v("etag")]),t._v("后续的请求会携带"),_("code",[t._v("if-none-match")]),t._v("，"),_("code",[t._v("if-none-match")]),t._v("记录的是上次的"),_("code",[t._v("eatg")]),t._v("，"),_("code",[t._v("etag")]),t._v("和"),_("code",[t._v("last-modified")]),t._v("判断同样过程相似，服务器对比浏览器传过来的"),_("code",[t._v("if-none-match")]),t._v("和当前内容的标识字符串，不同则返回新的资源和新的标识字符串")]),t._v(" "),_("h4",{attrs:{id:"与last-modified区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#与last-modified区别"}},[t._v("#")]),t._v(" 与"),_("code",[t._v("last-modified")]),t._v("区别：")]),t._v(" "),_("ol",[_("li",[_("code",[t._v("etag")]),t._v("是唯一标识字符串，只要内容变动etag就会变化，更精确的感知内容的变化")]),t._v(" "),_("li",[t._v("即使304，由于"),_("code",[t._v("etag")]),t._v("重新生成过，服务器还是会将"),_("code",[t._v("etag")]),t._v("返回，即使这个"),_("code",[t._v("etag")]),t._v("没有变化")])]),t._v(" "),_("h4",{attrs:{id:"优先级-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#优先级-2"}},[t._v("#")]),t._v(" 优先级")]),t._v(" "),_("p",[t._v("etag > last-modified")]),t._v(" "),_("h3",{attrs:{id:"图解流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#图解流程"}},[t._v("#")]),t._v(" 图解流程")]),t._v(" "),_("p",[_("img",{attrs:{src:e(553),alt:"An image"}})]),t._v(" "),_("h2",{attrs:{id:"断开tcp连接"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#断开tcp连接"}},[t._v("#")]),t._v(" 断开TCP连接")]),t._v(" "),_("p",[t._v("之前TCP部分已经讨论过了，不在赘述。")])])}),[],!1,null,null,null);v.default=a.exports}}]);