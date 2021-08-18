---
title: vue3.0组合式API-useCharts
date: 2021-08-20
tags: 
  - vue3
  - 组合式API
author: 追旅
location: 杭州滨江
---

## 前言

继续组合式api的分享，今天分享```useCharts```

## 介绍

```useCharts```是针对```echarts```图表类公共逻辑的抽离，```useCharts```只是一个基类，比如```useBar```是在当前业务场景下基于```useCharts```封装的

<p style="background: #67C23A; color: #fff;">默认图表会初始化chart，窗口变化会重新绘画保证图表自适应，组件卸载时会取消chart绑定的事件，置空chart实例，取消监听的窗口resize事件</p>

后续使用到的配置数据如下：

```js

// 仪表盘-option
const option = {
  series: [{
    type: 'gauge',
    progress: { show: true, width: 20 },
    color: ['#25BECD'],
    splitLine: { show: false },
    axisTick: { show: false },
    axisLabel: { show: false },
    axisLine: { lineStyle: { width: 20 } },
    detail: {
      valueAnimation: true,
      fontSize: 30,
      fontWeight: 'normal',
      offsetCenter: [0, '30%'],
      formatter: '{value}%',
    },
    data: [{ value: 0 }]
  }]
}
```

## 基础使用

```js

import useCharts from '@/hooks/useCharts'

// id为dom-id选择器
useCharts({
  option,
  id: 'custom_test'
})
```

## 异步初始化

通常我们需要从接口获取到数据后再进行初始化

```js

import useCharts from '@/hooks/useCharts'
import useAsync from '@/hooks/useAsync'
import useTimeout from '@/hooks/useTimeout'
// 这里用到了我们之前封装的useAsync和useTimeout
// setDataSource: 更新series配置中的data
// chartInit: 手动初始化chart
const { perTimeout } = useTimeout()
const {
  chartInit,
  setDataSource
} = useCharts({
  option,
  id: 'custom_test',
  isInit: false
})
// 调用接口获取数据
const { doResult, loading } = useAsync({
  request,
  init: false,
  successCallBack: ({ code, data }) => {
    code === '0' && setDataSource(data)
    code === '0' && perTimeout(chartInit())
  }
})
// 需要获取dom，所以在onMounted调用接口
onMounted(() => doResult(params))
```

## 非自适应

对于有些图表并不需要随着窗口的变化而变化，将```isResize```设置为```false```即可

```js

import useCharts from '@/hooks/useCharts'

// id为dom-id选择器
useCharts({
  option,
  id: 'custom_test'，
  isResize: false
})
```

## charts事件

根据目前业务场景，```useCharts```暂时提供了```mouseover```和```mouseout```两个事件，若无法满足可自行扩展

```js

useCharts({
  option,
  id: 'custom_test'，
  mouseover: () => console.log('mouseover'),
  mouseout: () =>  console.log('mouseout')
})
```

## 手动重绘

```js

// 当需要重新绘画时调用chartResize即可
const { chartResize } = useCharts({
  option,
  id: 'custom_test',
})

const rePayHandle = () => chartResize()

```

## 手动清空

```js

// 当需要清空时调用chartClear即可，chartClear会将绑定的事件、charts实例清空
const { chartClear } = useCharts({
  option,
  id: 'custom_test',
})

const rePayHandle = () => chartClear()

```

## 入参

| 参数        | 说明         | 类型        | 可选值        | 默认值  |
|-------------|--------------|-------------|--------------|---------|
| option | chart配置，以echarts为准 | Object | - | - |
| id | 元素id选择器 | String | - | - |
| isInit | 是否初始化 | Boolean | - | true |
| isResize | 是否随窗口变化而重绘 | Boolean | - | true |
| mouseover | echarts-mouseover事件，具体参考echarts | Function | - | - |
| mouseout | echarts-mouseout事件，具体参考echarts | Function | - | - |

## 出参

| 参数        | 说明         | 类型        | 可选值        | 默认值  |
|-------------|--------------|-------------|--------------|---------|
| chartInit | 手动初始化chart方法 | Function | - | - |
| chartResize | 手动更新chart方法 | Function | - | - |
| chartClear | 手动清空方法 | Function | - | - |
| setxData | 柱状图设置x轴数据方法（该方法内置在useBar中）| Function(dataSource) | - | - |
| setDataSource | 更新数据方法，这里的数据指的是饼图数据、柱状图Y轴数据等 | Function(dataSource, index = 0) | - | - |
| setOption | 更新option配置方法 | Function(data) | - | - |


## 结语

之后我们继续分享基于```useCharts```封装的```useBar```，```useBar```是对追旅目前业务里的柱状图的封装


