(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{614:function(t,s,a){"use strict";a.r(s);var n=a(12),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("整理一下事件运行机制，主要是浏览器的，node没有深究过，也说不好，就不说太多关于node的了")]),t._v(" "),a("h2",{attrs:{id:"event-loop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#event-loop"}},[t._v("#")]),t._v(" Event Loop")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("js")]),t._v("是"),a("code",[t._v("单线程")]),t._v("的")]),t._v(" "),a("li",[t._v("单线程任务分为"),a("code",[t._v("同步任务")]),t._v("和"),a("code",[t._v("异步任务")])]),t._v(" "),a("li",[a("code",[t._v("异步任务")]),t._v("又分为"),a("code",[t._v("宏任务")]),t._v("（MacroTask）和"),a("code",[t._v("微任务")]),t._v("（MicroTask）")])]),t._v(" "),a("p",[t._v("上边是一些知识点，接下来说一下"),a("code",[t._v("Event Loop")]),t._v("执行过程：")]),t._v(" "),a("p",[a("span",{staticStyle:{color:"#E6A23C"}},[t._v("从script开始，任务按顺序进入执行栈中，同步任务在主线程中直接被执行，遇到异步任务时，异步任务会进入异步处理模块并注册相应的回调函数，注册完成后回调函数进入任务队列（遇到微任务进入微任务队列，遇到宏任务开启一个新的宏任务队列），待同步任务执行完执行栈为空时，依次进入栈中执行，每次执行宏任务之前会检查是否存在微任务，如果存在则将微任务队列中的所有任务执行完后再执行宏任务")])]),t._v(" "),a("p",[t._v("每遇到一个宏任务会开启一个新的宏任务队列，而微任务队列只有一个，执行宏任务若发现新的微任务，会将微任务加入微任务队列，所以当开始执行一个新的宏任务时，如果微任务队列中有新的任务，先执行一遍微任务，看一个demo：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    Promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nPromise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行结果： 1 6 5 2 3 4")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1 6 5 2，正常的逻辑同步=>微任务=>宏任务")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行4会检查微任务队列中是否存在任务，此时会发现3，所以执行3，然后执行宏任务4")]),t._v("\n")])])]),a("h2",{attrs:{id:"宏任务-微任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#宏任务-微任务"}},[t._v("#")]),t._v(" 宏任务&微任务")]),t._v(" "),a("p",[t._v("常见宏任务：")]),t._v(" "),a("ul",[a("li",[t._v("script(全局任务)")]),t._v(" "),a("li",[t._v("setTimeout")]),t._v(" "),a("li",[t._v("setInterval")]),t._v(" "),a("li",[t._v("setImmediate")]),t._v(" "),a("li",[t._v("I/O")]),t._v(" "),a("li",[t._v("UI render")])]),t._v(" "),a("p",[t._v("常见微任务：")]),t._v(" "),a("ul",[a("li",[t._v("Promise.then()/catch()/finally()")]),t._v(" "),a("li",[t._v("MutationObserver")]),t._v(" "),a("li",[t._v("process.nextTick(node.js)")])]),t._v(" "),a("p",[t._v("区别：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th"),t._v(" "),a("th",[t._v("宏任务")]),t._v(" "),a("th",[t._v("微任务")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("谁发起")]),t._v(" "),a("td",[t._v("node/浏览器")]),t._v(" "),a("td",[t._v("js引擎")])]),t._v(" "),a("tr",[a("td",[t._v("运行先后")]),t._v(" "),a("td",[t._v("后")]),t._v(" "),a("td",[t._v("先")])]),t._v(" "),a("tr",[a("td",[t._v("触发新一轮Tick")]),t._v(" "),a("td",[t._v("会")]),t._v(" "),a("td",[t._v("不会")])])])]),t._v(" "),a("p",[t._v("如果面试的时候面试官问你什么是宏任务、什么是微任务，而你已经说了很多，那就把区别在讲给他好了")]),t._v(" "),a("h2",{attrs:{id:"settimeout-requestanimationframe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#settimeout-requestanimationframe"}},[t._v("#")]),t._v(" setTimeout&requestAnimationFrame")]),t._v(" "),a("ul",[a("li",[t._v("setTimeout")])]),t._v(" "),a("p",[a("span",{staticStyle:{color:"#E6A23C"}},[t._v("W3C在 HTML标准中规定，规定要求setTimeout低于 4ms的时间间隔算为 4ms")])]),t._v(" "),a("p",[a("code",[t._v("setTimeout")]),t._v("("),a("code",[t._v("setInterval")]),t._v("类似)经常用来做动画，但根据我们之前了解的"),a("code",[t._v("Event Loop")]),t._v("机制，实际上"),a("code",[t._v("setTimeout")]),t._v("并不会按照实际设置的时间执行，如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" startTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("时差：")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("startTime"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//时差：1348")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 我们设定的是1s执行，实际执行时间会超过1s")]),t._v("\n")])])]),a("p",[t._v("另一个问题是刷新频率受屏幕分辨率和屏幕尺寸影响，我们无法确定屏幕的刷新频率，而"),a("code",[t._v("setTimeout")]),t._v("又只能设定一个固定值，所以我们更新动画的时间和屏幕刷新的频率会不一致，导致丢帧的问题")]),t._v(" "),a("ul",[a("li",[t._v("requestAnimationFrame")])]),t._v(" "),a("p",[a("code",[t._v("requestAnimationFrame(function)")]),t._v(" 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画，也就是说更新动画的时机由浏览器决定")]),t._v(" "),a("p",[t._v("另外两个优势是：")]),t._v(" "),a("p",[t._v("CPU节能：页面隐藏（不可见），动画停止")]),t._v(" "),a("p",[t._v("浏览器优化：浏览器对"),a("code",[t._v("requestAnimationFrame")]),t._v("动画进行了优化")]),t._v(" "),a("p",[t._v("之前看了一些"),a("code",[t._v("three.js")]),t._v("，动画几乎都是使用"),a("code",[t._v("requestAnimationFrame")])]),t._v(" "),a("h2",{attrs:{id:"结语"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[t._v("#")]),t._v(" 结语")]),t._v(" "),a("p",[t._v("桃花坞里桃花庵，桃花庵下桃花仙。 桃花仙人种桃树，又摘桃花换酒钱！好生活啊！")])])}),[],!1,null,null,null);s.default=e.exports}}]);