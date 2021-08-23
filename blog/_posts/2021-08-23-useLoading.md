---
title: vue3.0组合式API-useLoading
date: 2021-08-23
tags: 
  - vue3
  - 组合式API
author: 追旅
location: 杭州滨江
---

## 前言

借助```useLoading```介绍一下```react-hooks```在定义更新数据的优势，也为后续```vue```组合式API```use函数```的封装打个预防针

## 介绍

```useLoading```本身并无太大的意义，但其却体现了一种很好的思想，继续往下看

## 基础使用


```js

import useLoading from './useLoading'

const { loading, checkLoading } = useLoading()

// 开启loading
checkLoading(true)
// 关闭loading
checkLoading(false)
```

## 和react-hooks比较

和```react-hooks```做一下比较会发现使用极其的相似，但```react```更新数据的只能通过```checkLoading```，而```vue```除了```checkLoading```外还可以通过直接给```loading```赋值改变```loading```，如：```loading.value = true```，这让```vue```更新数据相对灵活，但也恰恰是这点让```vue```丢失了严谨性，这里更推荐```react-hooks```更新数据的方式

```js

import { useState } from 'react'

const [loading, checkLoading] = useState(false)

// 开启loading
checkLoading(true)
// 关闭loading
checkLoading(false)
```

## checkLoading更新数据的优势

<p style="background: #67C23A; color: #fff;">1. 更新入口明确</p>

```checkLoading```就是唯一更新方法

<p style="background: #67C23A; color: #fff;">2. 保证的数据的流动、更新为正向而非逆向</p>

```loading.value = true```就是对数据的逆向操作

后续将会有很多此类更新数据的方式，这里提前介绍一下

## 源码

```js

// loading 状态
import { ref } from '@vue/composition-api'

export default () => {
  const loading = ref(false)

  // loading切换
  const checkLoading = (value) => { loading.value = value }

  return {
    loading,
    checkLoading
  }
}

```

## 出参

| 参数        | 说明         | 类型        | 可选值        | 默认值  |
|-------------|--------------|-------------|--------------|---------|
| loading | loading状态 | Booleab | - | false |
| checkLoading      | 更新loading | Function | - | - |

