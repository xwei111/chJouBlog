(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{578:function(t,a,s){"use strict";s.r(a);var e=s(6),v=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("前端发展的真滴快，无论从面试、webpack、还是各大框架打包编译及打包结构都可以看到一些对资源优化的蛛丝马迹，最经典的面试题就是：url输入到页面呈现过程，除了考察过程本身，更主要的是这个过程的优化，以此过程来聊一下如何处理资源")]),t._v(" "),s("h2",{attrs:{id:"dns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns"}},[t._v("#")]),t._v(" DNS")]),t._v(" "),s("p",[t._v("这里不说DNS怎么解析的，DNS本身解析的过程成也会有各种缓存，比如：浏览器缓存、系统缓存、路由器缓存等，这个过程前端还是蛮难去接触到，但是DNS解析的越快页面呈现的也越快，这个是毫无疑问的，所以前端能做的就是帮助尽快去解析DNS")]),t._v(" "),s("p",[t._v("这里就涉及到了DNS的预解析(多页面慎用)：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 告知浏览器页面DNS需要预解析 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http-equiv")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("x-dns-prefetch-control"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("on"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 强制解析 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dns-prefetch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("//www.chasejourney.top"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dns-prefetch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("//www.baidu.com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("p",[t._v("看一下各平台的处理")]),t._v(" "),s("ul",[s("li",[t._v("京东")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 太多了，随便copy俩 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dns-prefetch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("//static.360buyimg.com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dns-prefetch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("//misc.360buyimg.com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n...\n...\n")])])]),s("ul",[s("li",[t._v("百度")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dns-prefetch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("//dss0.bdstatic.com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dns-prefetch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("//dss1.bdstatic.com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n...\n...\n")])])]),s("p",[t._v("不多举例了，可以找一些大型网站看一下")]),t._v(" "),s("h2",{attrs:{id:"http"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http"}},[t._v("#")]),t._v(" Http")]),t._v(" "),s("p",[s("code",[t._v("tcp")]),t._v("握手和挥手是为了确认保证客户端和服务端接收、发送能力，以及数据传输的安全和完整性，这里一笔带过")]),t._v(" "),s("p",[t._v("前端资源包括图片、icon、js、css等均是通过"),s("code",[t._v("http")]),t._v("请求获取的，如果能够加快资源的"),s("code",[t._v("获取")]),t._v("速度可以极大的提高页面性能，注意：这里说的"),s("code",[t._v("获取")]),t._v("而不是"),s("code",[t._v("下载")])]),t._v(" "),s("h3",{attrs:{id:"限制条件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#限制条件"}},[t._v("#")]),t._v(" 限制条件")]),t._v(" "),s("p",[t._v("我们获取资源速度的时间有以下条件：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("tcp")]),t._v("连接频率")]),t._v(" "),s("li",[t._v("文件获取方式，缓存or下载")]),t._v(" "),s("li",[t._v("下载文件大小")]),t._v(" "),s("li",[t._v("下载数量")])]),t._v(" "),s("p",[t._v("根据上述限制条件，接下来我们一一分析")]),t._v(" "),s("h3",{attrs:{id:"tcp连接频率"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp连接频率"}},[t._v("#")]),t._v(" TCP连接频率")]),t._v(" "),s("p",[t._v("说到"),s("code",[t._v("tcp")]),t._v("链接就要聊到各"),s("code",[t._v("http")]),t._v("版本的链接方式")]),t._v(" "),s("h4",{attrs:{id:"http1-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http1-0"}},[t._v("#")]),t._v(" http1.0")]),t._v(" "),s("p",[s("code",[t._v("http1.0")]),t._v("规定"),s("code",[t._v("客户端")]),t._v("和"),s("code",[t._v("服务端")]),t._v("允许建立短暂链接，每次请求需要建立新的链接，"),s("code",[t._v("服务端")]),t._v("处理完毕断开链接，当页面中资源多起来的时候，频繁的链接对服务端是极大的消耗，而且对客户端获取到资源的时间也会正常，一般情况下浏览器对同一个域名的请求上线是6-8个，超过这一数量可能会阻塞，即线头阻塞（HOLB: head of line blocking）")]),t._v(" "),s("h4",{attrs:{id:"http1-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http1-1"}},[t._v("#")]),t._v(" http1.1")]),t._v(" "),s("p",[s("code",[t._v("http1.1")]),t._v("做了一些优化：")]),t._v(" "),s("ul",[s("li",[t._v("默认开启"),s("code",[t._v("keep-alive")])])]),t._v(" "),s("p",[s("code",[t._v("http1.1")]),t._v("支持长连接，默认开启"),s("code",[t._v("Connection: keep-alive")]),t._v("，不会关闭"),s("code",[t._v("tcp")]),t._v("连接，可以继续发送"),s("code",[t._v("http")]),t._v("请求，一定程度上弥补了频繁链接的问题，但长连接不能并行发起请求，各请求依赖上一个请求的响应，所以有时候依然会造成阻塞")]),t._v(" "),s("ul",[s("li",[t._v("管线化(pipelining)")])]),t._v(" "),s("p",[s("code",[t._v("http1.1")]),t._v("管线化(pipelining)支持在一个"),s("code",[t._v("tcp")]),t._v("连接中多个"),s("code",[t._v("http")]),t._v("请求一一发送，各请求不需要等待服务器对前一个请求的响应，不过客户端在接收响应的时候还是按照发送的顺序接收的，如果前一个请求阻塞后续的请求都需要等待，所以仍会造成阻塞")]),t._v(" "),s("h4",{attrs:{id:"http2-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http2-0"}},[t._v("#")]),t._v(" http2.0")]),t._v(" "),s("p",[s("code",[t._v("http2.0")]),t._v("是基于SPDY设计的，主要有一下特点：")]),t._v(" "),s("ul",[s("li",[t._v("多路复用")])]),t._v(" "),s("p",[t._v("即共享"),s("code",[t._v("tcp")]),t._v("连接，一个"),s("code",[t._v("request")]),t._v("请求对应一个"),s("code",[t._v("id")]),t._v("，一个连接上可以有多个"),s("code",[t._v("request")]),t._v("请求，每个连接的"),s("code",[t._v("request")]),t._v("可以随机混杂在一块，接收方可以根据"),s("code",[t._v("request")]),t._v("的"),s("code",[t._v("id")]),t._v("将"),s("code",[t._v("request")]),t._v("在归属到各自不同的服务器里")]),t._v(" "),s("ul",[s("li",[t._v("新的二进制格式")])]),t._v(" "),s("p",[s("code",[t._v("http1.x")]),t._v("的解析是基于文本。基于文本协议的格式解析存在天然缺陷，文本的表现形式有多样性，要做到健壮性考虑的场景必然很多，二进制则不同，只认0和1的组合。基于这种考虑"),s("code",[t._v("http2.0")]),t._v("的协议解析决定采用二进制格式，实现方便且健壮")]),t._v(" "),s("ul",[s("li",[t._v("header压缩")])]),t._v(" "),s("p",[s("code",[t._v("http1.x")]),t._v("中header携带了很多重复复杂的信息，"),s("code",[t._v("http2.0")]),t._v("使用算法压缩了"),s("code",[t._v("header")]),t._v("，减小包的大小和数量")]),t._v(" "),s("ul",[s("li",[t._v("服务端推送")])]),t._v(" "),s("p",[t._v("采用了"),s("code",[t._v("SPDY")]),t._v("网页，如服务器向客户端推送"),s("code",[t._v("style.css")]),t._v("的同时会推送一个"),s("code",[t._v("style.js")]),t._v("，当客户端再次获取"),s("code",[t._v("style.js")]),t._v("时会从缓存中获取，不需要在发请求")]),t._v(" "),s("p",[t._v("相对于1.x版本，"),s("code",[t._v("http2.0")]),t._v("请求资源的速度会快很多")]),t._v(" "),s("h4",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("so，使用"),s("code",[t._v("http")]),t._v("的优先级如下："),s("code",[t._v("http2.0")]),t._v(" > "),s("code",[t._v("http1.1")]),t._v(" > "),s("code",[t._v("http1.0")])]),t._v(" "),s("h3",{attrs:{id:"文件获取方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件获取方式"}},[t._v("#")]),t._v(" 文件获取方式")]),t._v(" "),s("p",[t._v("毫无疑问从缓存中拿资源的效率要高于下载，这里的缓存指的是"),s("code",[t._v("http")]),t._v("缓存，而"),s("code",[t._v("http")]),t._v("缓存又分为"),s("code",[t._v("强缓存")]),t._v("和"),s("code",[t._v("协商缓存")]),t._v("简单聊一下它们的区别：")]),t._v(" "),s("p",[t._v("第一次请求到资源后，浏览器会根据请求头中的缓存标识决定是否缓存、如何缓存资源，强缓存和协商缓存都是拉取的缓存数据（协商失败则是下载新资源），区别就在于是否和服务器有交流")]),t._v(" "),s("h4",{attrs:{id:"强缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#强缓存"}},[t._v("#")]),t._v(" 强缓存")]),t._v(" "),s("p",[t._v("浏览器请求资源时会先获取缓存的请求头信息，如果"),s("code",[t._v("Cache-Control")]),t._v("和"),s("code",[t._v("expires")]),t._v("命中强缓存则拉取本地缓存")]),t._v(" "),s("h5",{attrs:{id:"expires"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#expires"}},[t._v("#")]),t._v(" expires")]),t._v(" "),s("p",[s("code",[t._v("expires")]),t._v("是http1.0的规范，它的值是一个绝对时间的GMT格式的时间字符串（如Wen, 18 Mar 2020 17:25:00 GMT），这个值表示资源的过期时间，未超过该时间则会从本地拉取缓存")]),t._v(" "),s("p",[t._v("缺点是"),s("code",[t._v("expires")]),t._v("的值是绝对时间，这对客户端和服务端时间一致性要求就比较高，一旦修改了客户端时间或客户端和服务端时间差异较大就会出现缓存混乱的问题")]),t._v(" "),s("h5",{attrs:{id:"cache-control"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cache-control"}},[t._v("#")]),t._v(" Cache-Control")]),t._v(" "),s("p",[s("code",[t._v("Cache-Control")]),t._v("是http1.1的规范，通过"),s("code",[t._v("max-age")]),t._v("来判断（如max-age=1000，表示1秒后过期），这是一个相对时间，除了max-age还有以下属性：")]),t._v(" "),s("ol",[s("li",[t._v("no-cache: 不使用强缓存，但可以使用协商缓存")]),t._v(" "),s("li",[t._v("no-store: 强缓存和协商缓存均无法使用")]),t._v(" "),s("li",[t._v("pubilc: 浏览器和代理服务器都可以对资源进行缓存")]),t._v(" "),s("li",[t._v("privite: 只有浏览器可以缓存，代理服务器不能缓存")]),t._v(" "),s("li",[t._v("s-maxage: 代理服务器的缓存有效期，同时设置max-age和s-maxage，客户端会使用max-age，代理服务器会使用s-maxage")])]),t._v(" "),s("p",[t._v("其实还有一个Pragma，不过它已经逐渐被抛弃了，这里不做过多了解了")]),t._v(" "),s("h5",{attrs:{id:"优先级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优先级"}},[t._v("#")]),t._v(" 优先级")]),t._v(" "),s("p",[t._v("Cache-Control > expires")]),t._v(" "),s("h4",{attrs:{id:"协商缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[t._v("#")]),t._v(" 协商缓存")]),t._v(" "),s("p",[t._v("当强缓存没有命中，接下来就要看是否能够命中协商缓存，所谓协商就是浏览器与服务器协商，如果资源还是老的资源没有更新变动则返回304告诉浏览器从缓存中拉取数据，主要是通过请求头中的"),s("code",[t._v("last-modified")]),t._v("和"),s("code",[t._v("etag")]),t._v("来判断是否需要重新拉取数据")]),t._v(" "),s("h5",{attrs:{id:"last-modified-if-modified-since"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#last-modified-if-modified-since"}},[t._v("#")]),t._v(" last-modified/if-modified-since")]),t._v(" "),s("p",[t._v("如果第一次请求服务器返回的头信息带有"),s("code",[t._v("last-modified")]),t._v("信息后续请求会携带"),s("code",[t._v("if-modified-since")]),t._v("，"),s("code",[t._v("last-modified")]),t._v("记录的是资源的最后修改时间，"),s("code",[t._v("if-modified-since")]),t._v("记录的是上次"),s("code",[t._v("last-modified")]),t._v("，服务器会将浏览器传过来的"),s("code",[t._v("if-modified-since")]),t._v("和资源修改时间做对比，如果时间一致则表示资源未修改返回304，拉取缓存的资源，如果时间不一致则向服务器请求新的资源，更新"),s("code",[t._v("last-modified")]),t._v("为新的修改时间")]),t._v(" "),s("p",[t._v("缺点是只能精确定秒，秒以内修改无法，假如一个文件1s内修改了n次，"),s("code",[t._v("last-modified")]),t._v("是无法捕获的。另外一个问题是只要文件被修改了，无论内容是否有变化，都会以最新的修改时间为判断依据，这就导致了一些没必要的请求，接下来的etag就是来解决这个问题的")]),t._v(" "),s("h5",{attrs:{id:"etag-if-none-match"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#etag-if-none-match"}},[t._v("#")]),t._v(" etag/if-none-match")]),t._v(" "),s("p",[t._v("和"),s("code",[t._v("last-modified")]),t._v("相同，第一次请求服务器返回的头信息携带了"),s("code",[t._v("etag")]),t._v("后续的请求会携带"),s("code",[t._v("if-none-match")]),t._v("，"),s("code",[t._v("if-none-match")]),t._v("记录的是上次的"),s("code",[t._v("eatg")]),t._v("，"),s("code",[t._v("etag")]),t._v("和"),s("code",[t._v("last-modified")]),t._v("判断同样过程相似，服务器对比浏览器传过来的"),s("code",[t._v("if-none-match")]),t._v("和当前内容的标识字符串，不同则返回新的资源和新的标识字符串")]),t._v(" "),s("h5",{attrs:{id:"与last-modified区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#与last-modified区别"}},[t._v("#")]),t._v(" 与"),s("code",[t._v("last-modified")]),t._v("区别：")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("etag")]),t._v("是唯一标识字符串，只要内容变动etag就会变化，更精确的感知内容的变化")]),t._v(" "),s("li",[t._v("即使304，由于"),s("code",[t._v("etag")]),t._v("重新生成过，服务器还是会将"),s("code",[t._v("etag")]),t._v("返回，即使这个"),s("code",[t._v("etag")]),t._v("没有变化")])]),t._v(" "),s("h5",{attrs:{id:"优先级-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优先级-2"}},[t._v("#")]),t._v(" 优先级")]),t._v(" "),s("p",[t._v("etag > last-modified")]),t._v(" "),s("h4",{attrs:{id:"下载资源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载资源"}},[t._v("#")]),t._v(" 下载资源")]),t._v(" "),s("p",[t._v("即使是下载新资源也有相应的优化方案")]),t._v(" "),s("h5",{attrs:{id:"link"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#link"}},[t._v("#")]),t._v(" link")]),t._v(" "),s("ul",[s("li",[t._v("preload")])]),t._v(" "),s("p",[t._v("preload 提供了一种声明式的命令，让浏览器提前加载指定资源(加载后并不执行)，需要执行时再执行，使用如下：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 需要使用as属性指定特定的资源类型以便浏览器为其分配一定的优先级 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("pre.css"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("preload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("as")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("不要随意使用"),s("code",[t._v("preload")]),t._v("，一旦使用"),s("code",[t._v("preload")]),t._v("无论资源是否被使用都会被提前加载，会给网页带来不必要的负担")]),t._v(" "),s("ul",[s("li",[t._v("prefetch")])]),t._v(" "),s("p",[t._v("它的作用是告诉浏览器加载下一页面可能会用到的资源，可以用来优化下一页面的加载速度，使用如下：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("pre.css"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("prefetch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[s("code",[t._v("preload")]),t._v("和"),s("code",[t._v("prefetch")]),t._v("同样适用于js:")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("pre.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("preload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("as")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("script"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("pre.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("prefetch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h5",{attrs:{id:"script"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#script"}},[t._v("#")]),t._v(" script")]),t._v(" "),s("p",[t._v("JS可能会修改DOM或CSS，所以浏览器遇到 script 标记，会唤醒 JavaScript解析器，然后就停止解析HTML，所以日常开发通常会把"),s("code",[t._v("script")]),t._v("标签放在最下边，通常遇到"),s("code",[t._v("script")]),t._v("标签就会去加载资源，我们可以通过"),s("code",[t._v("defer")]),t._v("和"),s("code",[t._v("async")]),t._v("异步加载")]),t._v(" "),s("ul",[s("li",[t._v("defer")])]),t._v(" "),s("p",[s("code",[t._v("js")]),t._v("脚本在文档加载解析完毕DOMContentLoaded执行之前完成")]),t._v(" "),s("ul",[s("li",[t._v("async")])]),t._v(" "),s("p",[t._v("加载和渲染后续文档元素的过程与"),s("code",[t._v("js")]),t._v("脚本并行进行，有很多的不确定性，可能在文档解析完毕之前也可能之后")]),t._v(" "),s("p",[t._v("defer更符合我们日常的需求，保险起见建议还是要把"),s("code",[t._v("script")]),t._v("标签放在最后")]),t._v(" "),s("h3",{attrs:{id:"文件大小"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件大小"}},[t._v("#")]),t._v(" 文件大小")]),t._v(" "),s("p",[t._v("减小文件大小同尺寸有如下操作：")]),t._v(" "),s("ol",[s("li",[t._v("压缩图片、css、js等资源")]),t._v(" "),s("li",[t._v("前端打包gzip，服务端开启gzip模式")]),t._v(" "),s("li",[t._v("拆包，将css资源抽离，同时方便缓存")]),t._v(" "),s("li",[t._v("抽离公共模块，同样也可以方便缓存")]),t._v(" "),s("li",[t._v("webpack4+生成环境默认开启"),s("code",[t._v("tree-shake")]),t._v("和"),s("code",[t._v("scope")]),t._v("模式，这些都依赖"),s("code",[t._v("import")]),t._v("的引入")]),t._v(" "),s("li",[t._v("生产关闭"),s("code",[t._v("source-map")]),t._v("，但当你需要监听生产环境问题是需要自行打包一份"),s("code",[t._v("source-map")])]),t._v(" "),s("li",[t._v("代码优化（脑补中）")])]),t._v(" "),s("h3",{attrs:{id:"下载数量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载数量"}},[t._v("#")]),t._v(" 下载数量")]),t._v(" "),s("p",[t._v("同一域名下载数量有限，所以我们通常会尽量减少文件的数量，通常有如下操作：")]),t._v(" "),s("ol",[s("li",[t._v("小图片转base64（webpack配置），或使用icon代替图片，或者使用雪碧图")]),t._v(" "),s("li",[t._v("提供静态资源服务器存储静态资源或cdn")]),t._v(" "),s("li",[t._v("动态加载，通过"),s("code",[t._v("import")]),t._v("即可实现")]),t._v(" "),s("li",[s("code",[t._v("defer")]),t._v("、"),s("code",[t._v("async")]),t._v("同样可以减少同一时间下载文件数量")])]),t._v(" "),s("h2",{attrs:{id:"wbepack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wbepack"}},[t._v("#")]),t._v(" wbepack")]),t._v(" "),s("p",[t._v("上班已经涉及到"),s("code",[t._v("webpack")]),t._v("的一些内容，这里介绍一下上述没有提到的内容")]),t._v(" "),s("h3",{attrs:{id:"hash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hash"}},[t._v("#")]),t._v(" hash")]),t._v(" "),s("p",[t._v("正确处理"),s("code",[t._v("webpack")]),t._v("的不同"),s("code",[t._v("hash")]),t._v("值，配合后续缓存策略，简单介绍一个3个"),s("code",[t._v("hash")]),t._v("值")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("hash")])])]),t._v(" "),s("p",[t._v("整体项目有变化就会变化")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("chunkhash")])])]),t._v(" "),s("p",[t._v("根据不同的入口文件解析、构建，生成哈希值，将一些共用模块和逻辑抽出，则不会受业务逻辑的变化影响")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("contenthash")])])]),t._v(" "),s("p",[t._v("当前文件内容变化才会变化，所以通常将"),s("code",[t._v("css")]),t._v("抽离出"),s("code",[t._v("js")]),t._v("，加上"),s("code",[t._v("contenthash")]),t._v("，即使"),s("code",[t._v("js")]),t._v("变化了，只要"),s("code",[t._v("css")]),t._v("没变则不会发生变化")]),t._v(" "),s("h3",{attrs:{id:"多进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多进程"}},[t._v("#")]),t._v(" 多进程")]),t._v(" "),s("ul",[s("li",[t._v("编译多进程")])]),t._v(" "),s("p",[s("code",[t._v("Happypack")]),t._v("可以开启多进程编译，加快打包编译速度")]),t._v(" "),s("ul",[s("li",[t._v("压缩多进程")])]),t._v(" "),s("p",[s("code",[t._v("UglifyjsWebpackPlugin")]),t._v("压缩是单进程，可以使用"),s("code",[t._v("TerserWebpackPlugin")]),t._v("代替")]),t._v(" "),s("h3",{attrs:{id:"公共资源抽离"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#公共资源抽离"}},[t._v("#")]),t._v(" 公共资源抽离")]),t._v(" "),s("p",[t._v("你可以通过"),s("code",[t._v("dllPlugin")]),t._v(" 或 "),s("code",[t._v("externals")]),t._v("进行静态依赖包的分离，当然我认为通过"),s("code",[t._v("externals")]),t._v("方式并通过"),s("code",[t._v("cdn")]),t._v("方式更简单、更有效一些")]),t._v(" "),s("h3",{attrs:{id:"预渲染、seo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预渲染、seo"}},[t._v("#")]),t._v(" 预渲染、seo")]),t._v(" "),s("p",[t._v("可以通过"),s("code",[t._v("prerender-spa-plugin")]),t._v("去做一些与渲染、seo的优化，又或者是骨架屏")]),t._v(" "),s("h2",{attrs:{id:"结语"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[t._v("#")]),t._v(" 结语")]),t._v(" "),s("p",[t._v("前端资源都可以算是静态资源，可以做的优化也非常多，实际情况又能落地多少既要看项目合不合适这些优化方案，也要看是否有精力去做这些优化，可以确定的是一旦形成习惯，一切水到渠成")])])}),[],!1,null,null,null);a.default=v.exports}}]);