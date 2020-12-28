(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{678:function(v,_,e){"use strict";e.r(_);var c=e(11),o=Object(c.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[v._v("#")]),v._v(" 前言")]),v._v(" "),e("p",[v._v("垃圾回收就是对无用数据的回收，为啥回收呢？很简单，因为占内存。在64位系统下"),e("code",[v._v("V8")]),v._v("（一种js引擎）最多分配"),e("code",[v._v("1.4G")]),v._v("，32位系统更少，只有"),e("code",[v._v("0.7G")])]),v._v(" "),e("h2",{attrs:{id:"栈回收"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#栈回收"}},[v._v("#")]),v._v(" 栈回收")]),v._v(" "),e("p",[v._v("对于"),e("code",[v._v("栈")]),v._v("来说，当"),e("code",[v._v("ESP")]),v._v("指针（记录调用栈当前执行状态的指针）下移时，"),e("code",[v._v("栈")]),v._v("顶端的"),e("code",[v._v("执行上下文")]),v._v("会自动被销毁，即被回收，"),e("code",[v._v("执行上下文")]),v._v("包含"),e("code",[v._v("this")]),v._v("、"),e("code",[v._v("词法环境")])]),v._v(" "),e("p",[e("code",[v._v("闭包")]),v._v("中的变量不会随着函数执行完毕而清除，会一直保留着，直到这个"),e("code",[v._v("闭包")]),v._v("被清除")]),v._v(" "),e("h2",{attrs:{id:"堆回收"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#堆回收"}},[v._v("#")]),v._v(" 堆回收")]),v._v(" "),e("p",[e("code",[v._v("V8")]),v._v("将对堆内存分为"),e("code",[v._v("新生代")]),v._v("和"),e("code",[v._v("老生代")])]),v._v(" "),e("ul",[e("li",[v._v("新生代： 临时内存，大部分对象生存时间很短，64 位和 32 位系统下分别为 32MB 和 16MB")]),v._v(" "),e("li",[v._v("老生代： 常驻内存，对象存活时间较长")])]),v._v(" "),e("p",[e("code",[v._v("新生代")]),v._v(" + "),e("code",[v._v("老生代")]),v._v(" = "),e("code",[v._v("堆内存")])]),v._v(" "),e("h3",{attrs:{id:"新生代"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新生代"}},[v._v("#")]),v._v(" 新生代")]),v._v(" "),e("p",[e("code",[v._v("新生代")]),v._v("空间分为"),e("code",[v._v("from space")]),v._v("和"),e("code",[v._v("to space")]),v._v("，"),e("code",[v._v("from space")]),v._v("表示正在使用的内存，"),e("code",[v._v("to space")]),v._v("表示正在空闲的内存")]),v._v(" "),e("p",[e("code",[v._v("新生代")]),v._v("使用"),e("code",[v._v("Scavenge算法")]),v._v("，如下：")]),v._v(" "),e("p",[v._v("进行垃圾回收时，"),e("code",[v._v("V8")]),v._v("会对"),e("code",[v._v("from space")]),v._v("检查一遍，存活的对象复制一份到"),e("code",[v._v("to space")]),v._v("中，按顺序从头放置，非存活的对象直接回收，然后将"),e("code",[v._v("from space")]),v._v("和"),e("code",[v._v("to space")]),v._v("角色对调，因为现在"),e("code",[v._v("to space")]),v._v("变成了被使用的内存，而"),e("code",[v._v("from space")]),v._v("变成了空闲的内存，如此循环往复")]),v._v(" "),e("p",[v._v("为什么使用"),e("code",[v._v("Scavenge算法")]),v._v("：")]),v._v(" "),e("p",[v._v("对象在堆空间位置可能非常散乱，并且堆内存是连续分配的，后续遇到稍微大点的对象则无法分配空间（这种现象称之为"),e("code",[v._v("内存碎片")]),v._v("），而"),e("code",[v._v("Scavenge算法")]),v._v("则解决了这个问题")]),v._v(" "),e("ul",[e("li",[v._v("晋升")])]),v._v(" "),e("p",[e("code",[v._v("晋升")]),v._v("指的是"),e("code",[v._v("新生代")]),v._v("中经历过多次回收依然存在的对象，会"),e("code",[v._v("晋升")]),v._v("到"),e("code",[v._v("老生代")]),v._v("中，产生"),e("code",[v._v("晋升")]),v._v("的情况如下：")]),v._v(" "),e("ol",[e("li",[v._v("已经经历过一次"),e("code",[v._v("Scavenge")]),v._v("回收")]),v._v(" "),e("li",[v._v("占用"),e("code",[v._v("to space")]),v._v("空间大于"),e("code",[v._v("25%")])])]),v._v(" "),e("h3",{attrs:{id:"老生代"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#老生代"}},[v._v("#")]),v._v(" 老生代")]),v._v(" "),e("p",[e("code",[v._v("老生代")]),v._v("垃圾回收主要非两步：")]),v._v(" "),e("ol",[e("li",[v._v("标记-清除")])]),v._v(" "),e("p",[v._v("标记指的是遍历所有的对象，对它们做上标记。然后对"),e("code",[v._v("使用中")]),v._v("和"),e("code",[v._v("被强引用")]),v._v("的变量取消标记。剩下的则是需要被删除的，在清除阶段进行清除")]),v._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[v._v("整理")])]),v._v(" "),e("p",[v._v("整理内存碎片，把存活的对象全部向一端靠拢")]),v._v(" "),e("h3",{attrs:{id:"增量标记"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#增量标记"}},[v._v("#")]),v._v(" 增量标记")]),v._v(" "),e("p",[e("code",[v._v("V8")]),v._v("在进行垃圾回收的时候会阻塞业务逻辑，即js执行需要停下来等待（也称之为"),e("code",[v._v("全停顿")]),v._v("），如果垃圾多任务重会非常的影响性能，为了避免这种问题，"),e("code",[v._v("V8")]),v._v("采取了"),e("code",[v._v("增量标记")]),v._v("的方法："),e("code",[v._v("将原本一口气完成的标记任务分成多个很小的部分去完成，每完成一个小任务就停下来，让js执行一会，然后在继续执行")])]),v._v(" "),e("h2",{attrs:{id:"结语"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[v._v("#")]),v._v(" 结语")]),v._v(" "),e("p",[v._v("了解了一些皮毛")])])}),[],!1,null,null,null);_.default=o.exports}}]);