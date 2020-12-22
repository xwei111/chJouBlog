---
title: Event Loop知识点
date: 2020-12-23
tags: 
  - js
  - Event Loop 
  - 宏任务、微任务
  - requestAnimationFrame
author: 追旅
location: 杭州滨江 
---

## 前言

整理一下事件运行机制，主要是浏览器的，node没有深究过，也说不好，就不说太多关于node的了

## Event Loop

* ```js```是```单线程```的
* 单线程任务分为```同步任务```和```异步任务```
* ```异步任务```又分为```宏任务```（MacroTask）和```微任务```（MicroTask）

上边是一些知识点，接下来说一下```Event Loop```执行过程：

<span style="color: #E6A23C;">从script开始，任务按顺序进入执行栈中，同步任务在主线程中直接被执行，遇到异步任务时，异步任务会进入异步处理模块并注册相应的回调函数，注册完成后回调函数进入任务队列（遇到微任务进入微任务队列，遇到宏任务开启一个新的宏任务队列），待同步任务执行完执行栈为空时，依次进入栈中执行，每次执行宏任务之前会检查是否存在微任务，如果存在则将微任务队列中的所有任务执行完后再执行宏任务</span>

每遇到一个宏任务会开启一个新的宏任务队列，而微任务队列只有一个，执行宏任务若发现新的微任务，会将微任务加入微任务队列，所以当开始执行一个新的宏任务时，如果微任务队列中有新的任务，先执行一遍微任务，看一个demo：

```js
console.log(1)
setTimeout(()=>{
    console.log(2)
    Promise.resolve(3).then(res=>console.log(res))
}, 0)
setTimeout(()=>{
    console.log(4)
}, 0)
Promise.resolve(5).then(res=>console.log(res))
console.log(6)
// 执行结果： 1 6 5 2 3 4
// 1 6 5 2，正常的逻辑同步=>微任务=>宏任务
// 执行4会检查微任务队列中是否存在任务，此时会发现3，所以执行3，然后执行宏任务4
```

## 宏任务&微任务

常见宏任务：

* script(全局任务)
* setTimeout
* setInterval
* setImmediate
* I/O
* UI render

常见微任务：

* Promise.then()/catch()/finally()
* MutationObserver
* process.nextTick(node.js)

区别：

|                 |      宏任务       |      微任务        |
|-----------------|-------------------|--------------------|
|      谁发起     |     node/浏览器   |      js引擎        |
|     运行先后    |         后        |         先         |
|  触发新一轮Tick |         会        |         不会       |

如果面试的时候面试官问你什么是宏任务、什么是微任务，而你已经说了很多，那就把区别在讲给他好了
  
## setTimeout&requestAnimationFrame

* setTimeout

<span style="color: #E6A23C;">W3C在 HTML标准中规定，规定要求setTimeout低于 4ms的时间间隔算为 4ms</span>

```setTimeout```(```setInterval```类似)经常用来做动画，但根据我们之前了解的```Event Loop```机制，实际上```setTimeout```并不会按照实际设置的时间执行，如下：

```js
const startTime = new Date().getTime();
setTimeout(()=>{
  console.log(`时差：${new Date().getTime()-startTime}`); //时差：1348
},1000);
for(let i = 0;i<10000;i++){
  console.log(1)
}
// 我们设定的是1s执行，实际执行时间会超过1s
```

另一个问题是刷新频率受屏幕分辨率和屏幕尺寸影响，我们无法确定屏幕的刷新频率，而```setTimeout```又只能设定一个固定值，所以我们更新动画的时间和屏幕刷新的频率会不一致，导致丢帧的问题

* requestAnimationFrame

```requestAnimationFrame(function)``` 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画，也就是说更新动画的时机由浏览器决定

另外两个优势是：

CPU节能：页面隐藏（不可见），动画停止

浏览器优化：浏览器对```requestAnimationFrame```动画进行了优化

之前看了一些```three.js```，动画几乎都是使用```requestAnimationFrame```

## 结语

桃花坞里桃花庵，桃花庵下桃花仙。 桃花仙人种桃树，又摘桃花换酒钱！好生活啊！
