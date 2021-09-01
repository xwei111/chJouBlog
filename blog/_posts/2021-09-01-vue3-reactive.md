---
title: vue3源码之旅-reactive
date: 2021-09-01
tags: 
  - vue3
author: 追旅
location: 杭州滨江
---

## 前言

用了组合式api一段时间了，报着知其然、知其所以然的态度去阅读尤大大的代码，分享一下关于```reactive```部分，按照[官网API](https://v3.cn.vuejs.org/api/basic-reactivity.html#reactive)```reactive```部分逐个分析，为了方便理解可以参考简化后代码

[简化代码](https://github.com/xwei111/customVue3)

[vue3-reactive源码位置](https://github.com/vuejs/vue-next/blob/master/packages/reactivity/src/reactive.ts)

## Proxy

```Proxy```相信大家都不陌生了，```vue3```使用```Proxy```替代了```defineProperty```，解决了```defineProperty```带来的弊端，而```reactive```部分的实现和```Proxy```息息相关，不了解```Proxy```请看[阮一峰es6入门](https://es6.ruanyifeng.com/#docs/proxy)，接下来开始源码分析

## reactive

看一下源码中是如何定义```reactive```的

```ts
export function reactive<T extends object>(target: T): UnwrapNestedRefs<T>
export function reactive(target: object) {
  // if trying to observe a readonly proxy, return the readonly version.
  if (target && (target as Target)[ReactiveFlags.IS_READONLY]) {
    return target
  }
  return createReactiveObject(
    target,
    false,
    mutableHandlers,
    mutableCollectionHandlers,
    reactiveMap
  )
}
// createReactiveObject
function createReactiveObject(
  target: Target,
  isReadonly: boolean,
  baseHandlers: ProxyHandler<any>,
  collectionHandlers: ProxyHandler<any>,
  proxyMap: WeakMap<Target, any>
) {
  if (!isObject(target)) {
    if (__DEV__) {
      console.warn(`value cannot be made reactive: ${String(target)}`)
    }
    return target
  }
  // target is already a Proxy, return it.
  // exception: calling readonly() on a reactive object
  if (
    target[ReactiveFlags.RAW] &&
    !(isReadonly && target[ReactiveFlags.IS_REACTIVE])
  ) {
    return target
  }
  // target already has corresponding Proxy
  const existingProxy = proxyMap.get(target)
  if (existingProxy) {
    return existingProxy
  }
  // only a whitelist of value types can be observed.
  const targetType = getTargetType(target)
  if (targetType === TargetType.INVALID) {
    return target
  }
  const proxy = new Proxy(
    target,
    targetType === TargetType.COLLECTION ? collectionHandlers : baseHandlers
  )
  proxyMap.set(target, proxy)
  return proxy
}
```

```createReactiveObject```方法即为我们创造一个```reactive```的方法，此部分代码和```createReactiveObject```简化一下如下：

```js
function reactive(target) {
  return createReactiveObject(target, reactiveMap, mutableHandlers)
}
function createReactiveObject(target, proxyMap, baseHandlers) {
  // 非对象return
  if (!isObject(target)) {
    return target
  }
  // 是否已存在
  const existingProxy = proxyMap.get(target)
  // 存在返回
  if(existingProxy) return existingProxy
  // 判断类型
  const targetType = getTargetType(target)
  if (targetType === TargetType.INVALID) return target
  // 通过proxy生成新对象
  const proxy = new Proxy(target, baseHandlers)
  // 缓存数据
  proxyMap.set(target, proxy)

  return proxy
}
```

可以看到最终返回的是一个```Proxy```实例，在简化一下，```reactive```的实现如下：

```js
function reactive(target) {
  return new Proxy(target, {
    get,
    set
  })
}
```

```get```、```set```等的实现至关重要，源码中的实现还是比较复杂的，这里简化一下（尽量使用源码中的代码）：

```js
/**
* @param isReadOnly 是否只读
* @param shallow 是否为shallowReadonly、shallowReactive
*/
function createGetter(isReadOnly = false, shallow = false) {
  return function get(target, key, receiver) {
    // 判断是否为reactive
    if(key === IS_REACTIVE) return !isReadOnly
    // 判断是否为readonly
    else if(key === IS_READONLY) return isReadOnly
    // toRaw操作判断
    else if(
      key === RAW &&
      receiver === 
        (
          isReadOnly
            ? shallow
              ? shallowReadonlyMap
              : readonlyMap
            : shallow
              ? shallowReactiveMap
              : reactiveMap
        ).get(target)
    ) return target

    const result = Reflect.get(target, key, receiver)
    // shallow是否为true，若为true不在进行深度处理
    if (shallow) return result
    // 若为对象，深度处理
    if(isObject(result)) return isReadOnly ? readonly(result) : reactive(result)
    
    return result
  }
}

function createSetter() {
  return function set(target, key, value, receiver) {
    console.log(`${key}发生了改变`)
    const result = Reflect.set(target, key, value, receiver)
    return result
  }
}

const get = createGetter();
const set = createSetter();
```

此处可以看到```rective```对对象做了深度处理，简化一下```get```如下：

```js
function createGetter(isReadOnly = false, shallow = false) {
  return function get(target, key, receiver) {
    const result = Reflect.get(target, key, receiver)
    // 若为对象，深度处理
    if(isObject(result)) return isReadOnly ? readonly(result) : reactive(result)
    
    return result
  }
}
```

## readonly

当调用```readonly```方法时，```get```中```isReadOnly```将设置为true，并且```set```、```deleteProperty```等方法都将重写，阻止并提示只读

```js
const readonlyHandlers = {
  get: createGetter(true),
  set: (target, key) => {
    console.warn(
      `Set operation on key "${String(key)}" failed: target is readonly.`,
      target
    );
    return true
  },
  deleteProperty(target, key) {
    if (__DEV__) {
      console.warn(
        `Delete operation on key "${String(key)}" failed: target is readonly.`,
        target
      )
    }
    return true
  }
}
function readonly(target) {
  return createReactiveObject(target, readonlyMap, readonlyHandlers)
}
```

## shallowReactive

当调用```shallowReactive```方法时，```get```中```shallow```将设置为true，数据将不会进行深层次的处理

```js
function shallowReactive(target) {
  return createReactiveObject(target, shallowReactiveMap, shallowReactiveHandlers)
}
const shallowReactiveHandlers = {
  get: createGetter(false, true),
  set
}
```

## shallowReadonly

将```get```的```isReadOnly```、```shallow```入参同时设置为```true```

```js
function shallowReadonly(target) {
  return createReactiveObject(target, shallowReadonlyMap, shallowReadonlyHandlers)
}
const shallowReadonlyHandlers = {
  get: createGetter(true, true),
  set(target, key) {
    // readonly 的响应式对象不可以修改值
    console.warn(
      `Set operation on key "${String(key)}" failed: target is readonly.`,
      target
    );
    return true;
  },
};
```

## isReactive

当获取```IS_REACTIVE```属性时，```get```方法中会返回```!isReadOnly```，非只读即为```reactive```

```js
function isReactive(value) {
  return !!value[IS_REACTIVE]
}

```

## isReadonly

当获取```IS_READONLY```属性时，```get```方法中会返回```isReadOnly```

```js
function isReadonly(value) {
  return !!value[IS_READONLY]
}
```

## isProxy

```isProxy```即为```isReactive```或者```isReadonly```

```js
function isProxy(value) {
  return isReactive(value) || isReadonly(value)
}
```

## toRaw

```toRaw```的作用是获取原始对象，当我们调用```toRaw```方法时会去获取```value[RAW]```，```get```方法中会判断该属性并获取相应的缓存数据，若是命中则返回原始数据（对应```get```中三目运算那部分）

```js
function toRaw(value) {
  const raw = value[RAW]
  return raw ? toRaw(raw) : value
}
```

## markRaw

```markRaw```为给数据加一个标识```skip```，```createReactiveObject```中判断命中```skip```时会立即返回原始对象，永远都不会走向代理

```js
function markRaw(value) {
  def(value, SKIP, true)
  return value
}
```

## 结语

配合简化后代码看着更香
