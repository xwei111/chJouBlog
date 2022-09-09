---
title: vue3之effectScope强大功能
date: 2022-09-09
tags: 
  - vue3
  - compositionApi
author: 追旅
location: 杭州滨江
---

## 前言

```effectScope```是个强大的```api```，官网原话：```创建一个 effect 作用域，可以捕获其中所创建的响应式副作用 (即计算属性和侦听器)，这样捕获到的副作用可以一起处理```，在[RFC](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0041-reactivity-effect-scope.md)对其有更详细的解释，在[vueuse](https://vueuse.org/shared/createGlobalState/)库中更有对其的妙用

## 为什么要EffectScope

[RFC](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0041-reactivity-effect-scope.md)中已经对其做了解释，就是为了方便处理副作用，手动收集、清理副作用如下：

收集

```js
const disposables = []

const counter = ref(0)
const doubled = computed(() => counter.value * 2)

disposables.push(() => stop(doubled.effect))

const stopWatch1 = watchEffect(() => {
  console.log(`counter: ${counter.value}`)
})

disposables.push(stopWatch1)

const stopWatch2 = watch(doubled, () => {
  console.log(doubled.value)
})

disposables.push(stopWatch2)
```

清除

```js
disposables.forEach((f) => f())
disposables = []
```

上述过程需人工进行，对于复杂的逻辑收集成本较高，忘记收集也可能造成内存泄漏等问题。所以设计```EffectScope```处理该问题，对于开发库的同学更友好

## EffectScope使用

```js
function effectScope(detached?: boolean): EffectScope

interface EffectScope {
  run<T>(fn: () => T): T | undefined // 如果作用域不活跃就为 undefined
  stop(): void
}
```

### 子父EffectScope

```detached```表示是否阻断和父级的联系，若为```true```则表示与父级断开关联，执行父级```stop```方法时会递归停止子集的监听，但子集```detached```为```true```时则不会停止，如下：

```js
let nestedScope
let childScope

const parentScope = effectScope()

parentScope.run(() => {
  const doubled = computed(() => counter.value * 2)
  // 与父级断开链接
  nestedScope = effectScope(true /* detached */)
  nestedScope.run(() => {
    watch(doubled, () => console.log('nestedScope', doubled.value))
  })
  // 父级断开监听也会断开
  childScope = effectScope()
  childScope.run(() => {
    watch(doubled, () => console.log('childScope', doubled.value))
  })

  watchEffect(() => console.log('Count: ', doubled.value))
})

// 停止parentScope、childScope监听
parentScope.stop()

// 停止nestedScope监听
nestedScope.stop()
```

### onScopeDispose

停止监听时触发改函数```onScopeDispose```，作用类似```onUnmounted```

```js
import { onScopeDispose } from 'vue'

const scope = effectScope()

scope.run(() => {
  onScopeDispose(() => {
    console.log('cleaned!')
  })
})
// 停止监听，触发onScopeDispose
scope.stop()
```

## 性能提升

对于特定场景使用```EffectScope```性能更好更合理

```js
function useMouse() {
  const x = ref(0)
  const y = ref(0)

  function handler(e) {
    x.value = e.x
    y.value = e.y
  }

  window.addEventListener('mousemove', handler)

  onUnmounted(() => {
    window.removeEventListener('mousemove', handler)
  })

  return { x, y }
}
```

对于```useMouse```获取坐标如果多个组件使用则会添加多个监听，增加性能成本，这个时候使用```EffectScope```更友好

```js
function useMouse() {
  const x = ref(0)
  const y = ref(0)

  function handler(e) {
    x.value = e.x
    y.value = e.y
  }

  window.addEventListener('mousemove', handler)

  onScopeDispose(() => {
    window.removeEventListener('mousemove', handler)
  })

  return { x, y }
}

function createSharedComposable(composable) {
  let subscribers = 0
  let state, scope

  const dispose = () => {
    if (scope && --subscribers <= 0) {
      scope.stop()
      state = scope = null
    }
  }

  return (...args) => {
    subscribers++
    if (!state) {
      scope = effectScope(true)
      state = scope.run(() => composable(...args))
    }
    onScopeDispose(dispose)
    return state
  }
}

const useSharedMouse = createSharedComposable(useMouse)

export default useSharedMouse
```

这样无论多少组件使用，只会进行一次监听，不使用时同时清除监听

## 灵活的状态管理

获取坐标```demo```已经可以表现出```EffectScope```状态管理的作用，我们可以模拟```store```完成一套更灵活的状态管理又或用于子父组件、兄弟组件、全局通信

创建函数统一管理状态

```js
// useGlobalState
import { effectScope } from '@vue/composition-api'

export default run => {
  let isChange = false
  let state
  const scope = effectScope(true)
  return () => {
    // 防止重复触发
    if (!isChange) {
      state = scope.run(run)
      isChange = true
    }
    return state
  }
}
```

创建```store```

```js
// store.js
import { computed, ref } from '@vue/composition-api'
import useGlobalState from './useGlobalState'

export default useGlobalState(
  () => {
    // state
    const count = ref(0)
    // getters
    const doubleCount = computed(() => count.value * 2)
    // actions
    function increment() {
      count.value++
    }
    return { count, doubleCount, increment }
  }
)
```

在不同组件使用

```js
// A.vue
import useStore from '@/hooks/useStore'
const { count, doubleCount, increment } = useStore()
// B.vue
import useStore from '@/hooks/useStore'
const { count, doubleCount, increment } = useStore()
```

在A/B组件获取的```count```、```doubleCount```数据一致，所以```effectScope```同时提供新的的状态管理方式，某种场景可以替代```vuex```

若是为了完成数据持久化，加入缓存即可。```vueuse```已经提供这种状态管理方式[createGlobalState](https://vueuse.org/shared/createGlobalState/)，若能够满足需求，直接使用即可

## 结语

时刻准备着

