---
title: web components
date: 2021-10-28
tags: 
  - web components
author: 追旅
location: 杭州滨江
---

## 前言

10月份忙了一段业务，将自己理解的一些开发思想落地的业务中，也有了不少的收获。身为一个技术，自是有着一步跟不上步步跟不上的觉悟，so，马不停蹄的去了解了```web components```一下，说实话用下来感觉不是很顺手，主要还是诸多```api```不了

## 由来

三大框架```vue```、```react```、```angular```并驾齐驱，但是有个问题就是组件之间不通用，很多优秀的```ui```库会做三个版本让开发者使用，解决了一些问题，但这样的做法无疑是对资源的浪费，而且维护成本高，需要对各个版本库单独维护，为了解决这样的问题，```web components```应运而生，让组件的变得更加通用，一次开发即可多处使用

## 核心概念

如果你使用过```vue```的模板语法，你会发现```web components```处处都有```vue```的影子，其实```vue```也有一部分是参考了```web components```，介绍几个重点概念：

* Custom elements

即：自定义元素，```web components```允许我们自定义组件，就像是```vue```一样，写一个组件然后使用，如：

```js
class XwButton extends HTMLElement { }
window.customElements.define('xw-button', XwButton)
```

定义完成后就可以在```html```中使用：

```html
<xw-button></xw-button>
```

* Shadow DOM

可以将组件与其他文档分离开来，作为独立的一部分，保持私有性，无需担心```js```和```css```与其他部分冲突

```js
this._shadowRoot = this.attachShadow({ mode: 'closed' })
```

* HTML templates

```web components```提供了```<template>```、```<slot>```两个标签，这两个标签只是标记模板，而```slot```功能类似```vue```中的插槽

其实还有很多```api```，参考[web components](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components)

接下来用来一个```demo```来看一下```web components```是如何完成一个组件的

## Button

[demo](http://chasejourney.top/web-components/)

```button```组件写的比较简单，代码也有相应的注释，如下：

```js
const buttonTemplate = document.createElement('template');
// 内容模板
buttonTemplate.innerHTML = `
  <style>
    :host {
      display: inline-block; 
      padding: 5px 15px;
      box-sizing:border-box; 
      border:1px solid var(--borderColor, #ccc); 
      font-size: 14px; 
      color: var(--fontColor,#333);  
      border-radius: var(--borderRadius,.25em); 
      cursor: pointer;
    }
    :host([type="primary"]) {
      background: #409EFF;
      border-color: #409EFF;
      color: #fff;
    }
    :host([type="success"]) {
      background: #67C23A;
      border-color: #67C23A;
      color: #fff;
    }
    :host([type="warning"]) {
      background: #E6A23C;
      border-color: #E6A23C;
      color: #fff;
    }
    :host([type="error"]) {
      background: #F56C6C;
      border-color: #F56C6C;
      color: #fff;
    }
    :host([disabled]) {
      opacity: .5;
      cursor: not-allowed;
    }
    :host([text]) {
      padding: 0;
      border: none;
      background: none;
    }
    :host([text][type="primary"]) {
      padding: 0;
      border: none;
      background: none;
      color: #409EFF;
    }
    :host([text][type="success"]) {
      padding: 0;
      border: none;
      background: none;
      color: #67C23A;
    }
    :host([text][type="warning"]) {
      padding: 0;
      border: none;
      background: none;
      color: #E6A23C;
    }
    :host([text][type="error"]) {
      padding: 0;
      border: none;
      background: none;
      color: #F56C6C;
    }
    .xw-button {
      background:none; 
      outline:0; 
      border:0; 
      width:100%;
      height:100%;
      padding:0;
      user-select: none;
      cursor: unset;
    }
  </style>
  <div
    class="xw-button"
  >
    <slot></slot>
  </div>
`

class XwButton extends HTMLElement {
  constructor() {
    super()
    // 创建影子DOM（与主文档DOM分开呈现）
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    // 添加元素
    this._shadowRoot.appendChild(buttonTemplate.content.cloneNode(true))
  }
}
// 自定义元素
window.customElements.define('xw-button', XwButton)

```

```class```部分很好理解，```css```部分有一个点要解释一下就是```:host```可以理解为代表整个```shadow Dom```容器，全局不可以在使用通配符重写```marging```和```padding```样式，否则会影响```shadow Dom```容器内部样式

这里简单的写了个```button```，但说实话样式部分写起来蛮累的

## Input

如下：

[demo](http://chasejourney.top/web-components/)

```input```组件加了自定义事件和状态

* 自定义事件

```js
this.$input.addEventListener('input', e => {
  e.stopPropagation()
  const { target: { value } } = e
  // dispatchEvent用来分发事件， CustomEvent自定义时间，可以携带一个参数
  this.dispatchEvent(new CustomEvent('input', { detail: { value } }))
})
```

监听了```input```时间，并且抛出一个新的```input```事件，且将```vue```值传出去，在```html```中使用如下：

```html
<!-- html -->
<xw-input oninput="onInput(event)"></xw-input>
<!-- js -->
<script>
  const onInput = (event) => console.log('input', event.detail)
</script>
```
```vue```中使用如下:

```vue
<template>
  <div>
    <xw-input id="webInput" defaultValue="123"></xw-input>
    {{ value }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: '123'
    }
  },
  mounted() {
    document.getElementById('webInput').addEventListener('input', e => {
      const { target: { value } } = e
      this.value = value
    })
  }
}
</script>
```

## 其他常用方法

* observedAttributes、attributeChangedCallback

```observedAttributes```返回一个数组，当数组中数据发生变化时在```attributeChangedCallback```中会监听到数据的变化、

```js
class XwInput extends HTMLElement {
  constructor() {
    super()
  }

  get value() {
    return this.$input.value
  }

  set value(value) {
    this.$input.value = value
  }

  static get observedAttributes() {
    // 监听value属性的变化
    return ['value']
  }

  attributeChangedCallback(key, oldVal, newVal) {
    // value变化触发事件
    console.log(key, oldVal, newVal)
  }

}
```

* connectedCallback

自定义元素初次连接到```DOM```时触发

## 优劣

* 优势

1. 原生，无需额外插件
2. 无需编译
3. 标准的css/js/html
4. 跨平台、跨框架
5. 维护成本低

* 劣势

1. 有兼容性，现在浏览器已支持
2. 有学习成本，原生基础要扎实

## 结语

目前只是简单的做了尝试，了解了一些```api```，还是需要在业务开发中操刀一些（已经可以在生产在使用）

