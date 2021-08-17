---
title: vue3.0组合式API-useTimeout
date: 2021-08-17
tags: 
  - vue3
  - 组合式API
author: 追旅
location: 杭州滨江
---

## 前言

之前分享很多次组合式API，今天将实践出的一些内容分享一下，先从一个简单的```useTimeout```开始

## 由来

```setTimeout```大家一定不陌生，但是在使用过程中却很少去做组件卸载时清空定时器的操作，原因种种吧，追旅在此对```setTimeout```做一个简单的封装，大家也顺便了解一下组合式API带来丝滑体验

## 介绍

```useTimeout```是对```setTimeout```的封装，主要优化是组件卸载时会清除定时器

## 使用

```js

import useTimeout from '@/hooks/useTimeout'

const { perTimeout } = useTimeout()

perTimeout(() => console.log('test'), 1000)
```

## 出参

| 参数        | 说明         | 类型        | 可选值        | 默认值  |
|-------------|--------------|-------------|--------------|---------|
| perTimeout | 优化后setTimeout | Function(callback, time) | - | - |

### PerTimeout  Params

| 参数        | 说明         | 类型        | 可选值        | 默认值  |
|-------------|--------------|-------------|--------------|---------|
| callback | 回调函数 | Function | - | - |
| time | 延时时间 | Number | - | 0 |

## 源码

源码很简单，这里直接贴出来

```js
import { ref, onUnmounted } from '@vue/composition-api'

/**
 * 场景：适用于setTimeout，使用完毕组件卸载时清除setTimeout
 * @param callback 执行主函数
 * @param time 时间
 */

export default () => {
  const timer = ref(null)
  const perTimeout = (callback = null, time = 0) => {
    timer.value = setTimeout(() => {
      callback && callback()
    }, time)
    return timer.value
  }
  // 组件卸载若存在清除
  onUnmounted(() => {
    if (timer.value) {
      clearTimeout(timer.value)
      timer.value = null
    }
  })

  return {
    perTimeout
  }
}

```

## 结语

以```useTimeout```为引子，开启我们一系列的组合式API的封装

## 扩展

最近看《天道》电视剧，感触挺多的，很多观点和男女主不谋而合：

* 传统观念的死结就在一个‘靠’字上，在家靠父母，出门靠朋友，靠上帝、靠菩萨、靠皇恩……总之靠什么都行，就是别靠自己，所以就只能在精神上跪着

* 如果我的价值只能让我穷困潦倒，那穷空潦倒就是我的价值

追旅对母亲的诸多教导中记得最深的是：爹有不如娘有，娘有不如怀揣，所以结婚、买房都在自己的努力下完成，让自己在人格和物质上独立，感恩母亲
