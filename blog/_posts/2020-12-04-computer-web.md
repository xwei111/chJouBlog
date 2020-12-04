---
title: 输入url发生了什么--浏览器渲染
date: 2020-12-04
tags: 
  - 计算机知识
  - 浏览器渲染
author: 追旅
location: 杭州滨江 
---

## 前言

发送http请求后，浏览器也就拿到了资源，接下来就开始渲染的工作，基本是这块了解完了，也就清楚了从输入url到页面呈现出现的大致过程

## 渲染过程

1. 解析HTML，生成DOM树，通常浏览器没有完全拿到HTML就已经开始渲染，这是一个边解析边渲染的过程
2. 解析CSS，构建CSSOM树
3. 根据CSSDOM树和DOM树生成Render树
4. 根据Render树计算各个DOM节点的几何信息（位置、大小、颜色等）
5. 根据计算的信息绘制页面

## 阻塞渲染

解析DOM过程中会遇到需要加载外部资源如（link、image），加载资源的过程并不会阻塞渲染，但是解析CSS和执行JS过程会有阻塞渲染的问题

### CSS

默认情况下CSS被视为阻塞渲染的资源:

1. Render树同时需要DOM树和CSSDOM树，DOM是必须的，如果CSSDOM未构建完成，会阻塞Render树的构建
2. JS会修改CSS，CSSDOM构建会阻塞后面js语句的执行

通常我们会将CSS放在```head```标签中，尽快加载解析CSS，网上看到了用```media```优化的方案，如下：

```html
<!-- 设置了媒体类型，会加载但不会阻塞，print声明只在打印网页时使用。 -->
<link href="print.css" rel="stylesheet" media="print">
<!-- 会在符合条件时阻塞渲染。 -->
<link href="other.css" rel="stylesheet" media="(min-width: 30em) and (orientation: landscape)">
```

```media```局限性还是比较高的，需要特定场景才可以使用，除此之外我们还可以利用前边了解到的强缓存和协商缓存，日常压缩合并啥的相信老司机都手到擒来了，这里我们介绍一下```preload```和```prefetch```

* preload

preload 提供了一种声明式的命令，让浏览器提前加载指定资源(加载后并不执行)，需要执行时再执行，使用如下：

```html
<!-- 需要使用as属性指定特定的资源类型以便浏览器为其分配一定的优先级 -->
<link href="pre.css" rel="preload" as="style">
```

不要随意使用```preload```，一旦使用```preload```无论资源是否被使用都会被提前加载，会给网页带肋不必要的负担

* prefetch

它的作用是告诉浏览器加载下一页面可能会用到的资源，可以用来优化下一页面的加载速度，使用如下：

```html
<link href="pre.css" rel="prefetch">
```

```preload```和```prefetch```同样适用于js:

```html
<link href="pre.js" rel="preload" as="script">
<link href="pre.js" rel="prefetch">
```

### JS

JS可能会修改DOM或CSS，所以浏览器遇到 script 标记，会唤醒 JavaScript解析器，然后就停止解析HTML，所以日常开发通常会把```script```标签放在最下边，通常遇到```script```标签就会去加载资源，我们可以通过```defer```和```async```异步加载

* defer

```js```脚本在文档加载解析完毕DOMContentLoaded执行之前完成

* async

加载和渲染后续文档元素的过程与```js```脚本并行进行，有很多的不确定性，可能在文档解析完毕之前也可能之后

defer更符合我们日常的需求，保险起见建议还是要把```script```标签放在最后


## 结语

废话不多说，输入url到页面呈现过程到此结束！！！

