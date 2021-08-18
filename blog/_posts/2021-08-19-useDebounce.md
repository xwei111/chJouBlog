---
title: vue3.0组合式API-useDebounce
date: 2021-08-19
tags: 
  - vue3
  - 组合式API
author: 追旅
location: 杭州滨江
---

## 前言

昨天哥们要用到防抖功能，在我俩的讨论中最后实现了```useDebounce```

## 介绍

```useDebounce```是在```useTimeout```基础上对防抖功能的实现，```useTimeout```是我们分享的第一个```use```函数，不了解的请先看[useTimeout](https://chasejourney.top/chJouBlog/2021/08/17/usetimeout/)

## 基础使用

```js

import useDebounce from '@/hooks/useDebounce'

const { run } = useDebounce()
// input数据实时改变触发接口调用，添加防抖优化
const inputHandle = val => run(() => request({ id: val }), 500)
```

## 出参

| 参数        | 说明         | 类型        | 可选值        | 默认值  |
|-------------|--------------|-------------|--------------|---------|
| run | 防抖函数 | Function(fn, wait) | - | - |
| cancel      | 取消定时器方法 | Function | - | null |

### Run Params

| 参数        | 说明         | 类型        | 可选值        | 默认值  |
|-------------|--------------|-------------|--------------|---------|
| fn | 执行主函数 | Function | - | - |
| wait | 防抖时间 | Number | - | 300 |

## 源码

```js
import useTimeout from './useTimeout'

export default () => {
  const { perTimeout, timer } = useTimeout()
  // 主动取消定时器
  const cancel = () => {
    if (!timer.value) return
    clearTimeout(timer.value)
    timer.value = null
  }
  /**
  * 场景：防抖函数
  * @param fn 执行主函数
  * @param wait 防抖时间
  */
  const run = (fn, wait = 300) => {
    cancel()
    if (!timer.value) timer.value = perTimeout(() => fn && fn(), wait)
  }

  return {
    run,
    cancel
  }
}
```

## 为什么借助useTimeout

```useTimeout```里已经做了对```setTimeout```组件卸载时的优化，```useDebounce```使用了```useTimeout```也就具备了```useTimeout```本身带来的优势，这也是组合式API带来的魅力

## 结语

```hooks```也可以分为功能性的、逻辑性的和业务性的，后续分享的```hooks```逻辑和功能性也都复杂起来
