(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{543:function(t,s,a){t.exports=a.p+"assets/img/20201103quickdraw5.fa6b3091.jpg"},595:function(t,s,a){t.exports=a.p+"assets/img/20201103quickdraw4.4ffc3cc6.jpg"},596:function(t,s,a){t.exports=a.p+"assets/img/20201103quickdraw1.48e39e4c.jpg"},597:function(t,s,a){t.exports=a.p+"assets/img/20201103quickdraw3.ba60e381.jpg"},598:function(t,s,a){t.exports=a.p+"assets/img/20201103quickdraw2.fe10ea9c.jpg"},668:function(t,s,a){"use strict";a.r(s);var n=a(20),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),n("p",[t._v("快绘是一款快速绘图的小工具，属于小众产品，做这个的理由是前段时间在微信上搜名片类小程序，如递名片、腾讯名片和酷咖名片等都只有固定的几个字段、固定的布局没有太大的扩展性，感觉不是甚好用，然后就有了一个思路，做一款可自定义布局的名片小程序，后来做着做着发现其实海报也可以做，在大图的制作商还有很多局限性(小程序各种bug各种坑导致绘画可见区域不是很大)，记录一下自己开发小程序的感想&坑&瓶颈，扫下边二维码可以体验")]),t._v(" "),n("p",[n("img",{attrs:{src:a(543),alt:"An image"}})]),t._v(" "),n("h2",{attrs:{id:"技术"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#技术"}},[t._v("#")]),t._v(" 技术")]),t._v(" "),n("p",[t._v("微信小程序+云开发，主要涉及canvas，"),n("a",{attrs:{href:"https://github.com/Kujiale-Mobile/Painter",target:"_blank",rel:"noopener noreferrer"}},[t._v("painter"),n("OutboundLink")],1),t._v("是一款不错的画图工具，云开发的好处是可以免费使用小程序的数据库和储存空间，但实际上此次开发我只用的到了数据库来存储用户信息和绘图"),n("code",[t._v("JSON")]),t._v("数据")]),t._v(" "),n("h2",{attrs:{id:"模块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#模块"}},[t._v("#")]),t._v(" 模块")]),t._v(" "),n("p",[t._v("快绘目前有4大模块：模板模块、绘图模块、登录模块、我的模块")]),t._v(" "),n("ul",[n("li",[t._v("模板模块")])]),t._v(" "),n("p",[t._v("目前只用两个名片模板，后期期望能提供更多的模板，分为海报和名片两大类，分为不同的主题，可通过主题搜索模板")]),t._v(" "),n("img",{staticStyle:{width:"50%"},attrs:{src:a(595)}}),t._v(" "),n("ul",[n("li",[t._v("绘图模块")])]),t._v(" "),n("p",[t._v("这里是最主要的功能汇集区域，但由于小程序canvas各种问题，绘画区域目前没有满屏")]),t._v(" "),n("img",{staticStyle:{width:"50%"},attrs:{src:a(596)}}),t._v(" "),n("ul",[n("li",[t._v("登录模块")])]),t._v(" "),n("p",[t._v("登录主要是手机用户的非敏感信息（个人小程序限制还是比较多的），登录后用户才能永久性保存制作的作品")]),t._v(" "),n("img",{staticStyle:{width:"50%"},attrs:{src:a(597)}}),t._v(" "),n("ul",[n("li",[t._v("我的模块")])]),t._v(" "),n("p",[t._v("展示用的个人信息和作品")]),t._v(" "),n("img",{staticStyle:{width:"50%"},attrs:{src:a(598)}}),t._v(" "),n("p",[t._v("期望拓展功能模块：目前还缺少引导模块，对这块没了解的不知道如何操作、提供一个市场模块，用户可以发布自己的作品到市场，免费或者付费、绘图区域过小，绘制大图不友好、暂未设置图层关系")]),t._v(" "),n("h2",{attrs:{id:"功能"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#功能"}},[t._v("#")]),t._v(" 功能")]),t._v(" "),n("p",[t._v("有了"),n("a",{attrs:{href:"https://github.com/Kujiale-Mobile/Painter",target:"_blank",rel:"noopener noreferrer"}},[t._v("painter"),n("OutboundLink")],1),t._v("可以帮助解决canvas自适应、选中子元素、生成图片等大部分关于绘画方面的功能，我们只需要通过处理"),n("code",[t._v("JSON")]),t._v("数据来实现自己想要的功能，但是由于小程序canvas层级问题、"),n("code",[t._v("bindlongtap")]),t._v("事件不生效、滚动是不触发页面滚动，还是妥协了画布满屏、长按2s可移动等功能，下边介绍一下其他功能")]),t._v(" "),n("ul",[n("li",[t._v("授权登录")])]),t._v(" "),n("p",[t._v("登录会将用户的一些非敏感信息（头像、昵称等）存到"),n("code",[t._v("users")]),t._v("集合中，用户每次登录去"),n("code",[t._v("users")]),t._v("集合中查询用户信息，如果存在则不存在用户再次授权登录，达到一次登录即永久登录的效果，登录后用户即可将自己的作品保存至我的")]),t._v(" "),n("ul",[n("li",[t._v("添加元素")])]),t._v(" "),n("p",[t._v("目前我们支持添加"),n("code",[t._v("文本")]),t._v("、"),n("code",[t._v("图片")]),t._v("、"),n("code",[t._v("矩形")])]),t._v(" "),n("ul",[n("li",[t._v("保存图片")])]),t._v(" "),n("p",[t._v("保存图片至本地和至我的，保存到我的需要用户授权登录，登录后我们会将用户的绘图数据存在数据库中")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 保存至本地")]),t._v("\nwx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("saveImageToPhotosAlbum")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 保存至我的")]),t._v("\ndb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("collection")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cards'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" data "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("ul",[n("li",[t._v("移动整个画布")])]),t._v(" "),n("p",[t._v("这是一个妥协的功能，本想着是长按2s后可以移动画布，但是"),n("code",[t._v("bindlongtap")]),t._v("事件不生效，改用显示移动图标，拖动移动图标移动画布")]),t._v(" "),n("ul",[n("li",[t._v("移动修改元素")])]),t._v(" "),n("p",[t._v("点击元素后，弹出元素可以修改的属性，拖动元素可以移动，移动动停止后更新位置属性")]),t._v(" "),n("ul",[n("li",[t._v("画布正位")])]),t._v(" "),n("p",[t._v("鉴于画布移动后很难移动到原来的问题，提供一键归为功能")]),t._v(" "),n("ul",[n("li",[t._v("预览")])]),t._v(" "),n("p",[t._v("由于画布层级问题，我们只能用"),n("code",[t._v("cover-view")]),t._v("和"),n("code",[t._v("cover-image")]),t._v("来实现")]),t._v(" "),n("ul",[n("li",[t._v("分享")])]),t._v(" "),n("p",[t._v("分享区别临时分享和永久分享")]),t._v(" "),n("h2",{attrs:{id:"技术难点及思考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#技术难点及思考"}},[t._v("#")]),t._v(" 技术难点及思考")]),t._v(" "),n("h3",{attrs:{id:"canvas的问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#canvas的问题"}},[t._v("#")]),t._v(" canvas的问题")]),t._v(" "),n("ul",[n("li",[t._v("层级问题")])]),t._v(" "),n("p",[t._v("绘图区域是"),n("code",[t._v("canvas")]),t._v("，起初设想是至少占满屏，配置属性部分通过"),n("code",[t._v("fixed")]),t._v("定位浮动在上边，由于"),n("code",[t._v("canvas")]),t._v("的层级问题，只能有"),n("code",[t._v("cover-view")]),t._v("、"),n("code",[t._v("cover-image")]),t._v("、"),n("code",[t._v("button")]),t._v("等标签可以覆盖，配置属性模块"),n("code",[t._v("input")]),t._v("标签层级问题无法解决")]),t._v(" "),n("ul",[n("li",[t._v("bindlongtap方法不生效")])]),t._v(" "),n("p",[t._v("制作大图手机屏幕是肯定不够的，所以整个"),n("code",[t._v("canvas")]),t._v("必定要可移动，避免和子元素的移动冲突，采用长按2s移动画布，但是"),n("code",[t._v("bindlongtap")]),t._v("事件不生效")]),t._v(" "),n("p",[t._v("思考： 关于"),n("code",[t._v("canvas")]),t._v("的各种问题测试的时候，朋友提了个方案：由于操作的都是"),n("code",[t._v("JSON")]),t._v("数据并不是图片，完全可以用普通标签（"),n("code",[t._v("view")]),t._v("等）在页面实现布局，只需要生成图片的时候使用"),n("code",[t._v("canvas")]),t._v("即可，这个方案完全可行，层级和长按事件都可以解决，制作大图上体验也会更好")]),t._v(" "),n("h3",{attrs:{id:"临时分享"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#临时分享"}},[t._v("#")]),t._v(" 临时分享")]),t._v(" "),n("p",[t._v("其实这个部分的分享完全可以不做，但本着解决问题的想法还是去实现了一下，对于正在编辑的作品，并没有这些操作的数据保存到数据库，别人点击这个分享链接进来后看不到实际分享出去的画面，体验非常的不好")]),t._v(" "),n("p",[t._v("怎么处理这个问题，我想起了游戏中的游客模式，游客并不想登录，也不想保存图片至我的，只是编辑后就分享了出去，由于分享的链接参数无法存储大量的数据，所以就需要新建一个集合"),n("code",[t._v("timeCards")]),t._v("存储临时分享的数据，然后分享的链接只带上唯一标识"),n("code",[t._v("id")]),t._v("即可，每次点击分享链接进来的时候通过"),n("code",[t._v("id")]),t._v("去查询"),n("code",[t._v("timeCards")]),t._v("存储的绘画数据即可")]),t._v(" "),n("p",[t._v("但临时数据不可能一直存在所以就引出了定时删除数据库数据的定时任务，微信小程序提供了"),n("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/wxcloud/guide/functions/triggers.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("定时触发器"),n("OutboundLink")],1),t._v("，可以使用这个来定时触发删除临时数据的任务，接下来看一下具体操作")]),t._v(" "),n("ol",[n("li",[t._v("分享时要存储绘画数据和分享时间")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// createTime 分享时的时间，取服务端时间")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" db "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" wx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cloud"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("database")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("collection")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'timeCards'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("createTime")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" db"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("serverDate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[t._v("新建云函数，超过3天的数据删除")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 云函数入口文件")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" cloud "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wx-server-sdk'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncloud"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("env")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" cloud"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DYNAMIC_CURRENT_ENV")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" day "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 云函数入口函数")]),t._v("\nexports"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("main")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" db "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cloud"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("database")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" arr "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" db"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("collection")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'timeCards'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" currentTime "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTime")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" data "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" res\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" deleteArr "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createTime "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" time "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("createTime"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTime")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" offstTime "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" currentTime "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 收集超过3天的数据")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("offstTime "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" day"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        deleteArr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" deleteArr\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    db"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("collection")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'timeCards'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("doc")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("ol",{attrs:{start:"3"}},[n("li",[t._v("在config.json中配置触发器")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('{\n  "triggers": [\n    {\n      "name": "timeCards",\n      "type": "timer",\n      "config": "0 0 0 * * ? *" // cron表达式，每天0点0分0秒触发\n    }\n  ]\n}\n')])])]),n("ol",{attrs:{start:"4"}},[n("li",[t._v("上传云函数和触发器")])]),t._v(" "),n("p",[t._v("云函数目录右键，可以看到上传云函数和上传触发器操作")]),t._v(" "),n("h2",{attrs:{id:"结语"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[t._v("#")]),t._v(" 结语")]),t._v(" "),n("p",[t._v("其实这是我第一次使用云开发，对于前端还是很友好的。")]),t._v(" "),n("p",[t._v("有了想法就该去动手实现！！！")])])}),[],!1,null,null,null);s.default=e.exports}}]);