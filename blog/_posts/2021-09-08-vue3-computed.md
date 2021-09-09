---
title: vue3源码之旅-computed
date: 2021-09-08
tags: 
  - vue3
author: 追旅
location: 杭州滨江
---

## 前言

今天分享```computed```，```computed```和```effect```、```ref```、```reactive```息息相关，不了解这些的话翻一下之前的分享

## computed

根据官网的解释，```computed```接受一个 getter 函数或者，接受一个具有 get 和 set 函数的对象，看一下源码中的设计

```js
const NOOP = () => {}

function computed(getterOrOptions) {
  let getter
  let setter
  if(isFunction(getterOrOptions)) {
    // 若为函数，将setter设置为空函数，此时获得的值只读
    getter = getterOrOptions
    setter = NOOP
  } else {
    getter = getterOrOptions.get
    setter = getterOrOptions.set
  }

  const cRef = new ComputedRefImpl(
    getter,
    setter,
    isFunction(getterOrOptions) || !getterOrOptions.set // getterOrOptions为函数或者getterOrOptions.set不存在即为只读
  )

  return cRef

}
```

上述代码基本和官网描述一致，接下来看一下```ComputedRefImpl```，这里是```computed```的核心逻辑

## ComputedRefImpl

```js
class ComputedRefImpl{

  dep = undefined
  _value = null
  _dirty = true
  effect = null
  __v_isRef = true
  __v_isReadonly = false

  constructor(getter, _setter, isReadonly = false) {
    // 设置当前effect，activeEffect变为当前实例，添加自定义scheduler
    // 当触发ref或者reactive的get方法时，将会添加此effect，触发set时会触发自定义的scheduler,将_dirty设置为true即解锁
    this.effect = new ReactiveEffect(getter, () => {
      // 值发生改变触发了triggerEffects时执行次函数： 解锁
      if(!this._dirty) {
        this._dirty = true
      }
    })
    this._setter = _setter
    this.__v_isReadonly = isReadonly
  }

  get value() {
    const self = toRaw(this)
    // 收集computed依赖
    trackRefValue(self)
    // 只有值发生改变时才解锁
    // 若依赖值为发生改变则直接返回原缓存值
    if (self._dirty) {
      // 锁死
      self._dirty = false
      // 将值设置为run的执行结果也就是传入的getter的执行结果
      self._value = self.effect.run()
    }
    // 返回值
    return self._value
  }

  set value(newValue) {
    // 触发传入的setter
    this._setter(newValue)
  }
}
```

代码注释已经非常详细了，不在解释了。有意思的地方还是在```effect```部分，```ComputedRefImpl```初始化阶段就会定义新的```effect```，新的依赖生成且会被```track```收集，通过自定义的```scheduler```达到解锁的目的

## 案例

以下边```demo```为例分析一下

```js
const test = ref(0)
// 生成新的依赖
const result = computed(() => test.value + 1)
// 1. 收集result相关依赖
// 2. 获取result.value时调用了test.value，test.dep会收集当前依赖
// 3. 锁死
console.log('result-----1', result.value) // 1
// 给test.value赋值时会触发依赖，开锁
test.value = 2
// 开锁后执行run方法，调用fn也就是getter获取新值后锁死
console.log('result-----2', result.value) // 3
// getter为function，表示只读，无法赋值
result.value = 8
console.log('result-----3', result.value) // 3
console.log(isRef(result)) // true
```

可参考简化代码中的```index2.html```

## 结语

常与同好争高下
