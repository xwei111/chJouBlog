---
title: vue3源码之旅-effectScope
date: 2022-09-13
tags: 
  - vue3
author: 追旅
location: 杭州滨江
---

## 前言

```effectScope```作用是```捕获其中所创建的响应式副作用 (即计算属性和侦听器)，这样捕获到的副作用可以一起处理```，与```effect```、```computed```、```watch```都有关联，不熟悉这部分的同学参考之前的源码分析

[vue3源码之旅-effect](https://juejin.cn/post/7005461615235563556)

[vue3源码之旅-computed](https://juejin.cn/post/7005814704144662536)

[vue3源码之旅-watch](https://juejin.cn/post/7011025857309327368)

上篇文章了解了```effectScope```如何使用，这次一起了解```effectScope```是如何设计的（换了电脑忘记之前vue```down```的是哪个版本的了，目前这个版本是```3.2.39```，和之前有些许差异）

## 源码

```ts
import { ReactiveEffect } from './effect'
import { warn } from './warning'

let activeEffectScope: EffectScope | undefined

export class EffectScope {
  active = true
  effects: ReactiveEffect[] = []
  cleanups: (() => void)[] = []
  parent: EffectScope | undefined
  scopes: EffectScope[] | undefined
  private index: number | undefined

  constructor(detached = false) {
    if (!detached && activeEffectScope) {
      this.parent = activeEffectScope
      this.index =
        (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(
          this
        ) - 1
    }
  }

  run<T>(fn: () => T): T | undefined {
    if (this.active) {
      const currentEffectScope = activeEffectScope
      try {
        activeEffectScope = this
        return fn()
      } finally {
        activeEffectScope = currentEffectScope
      }
    } else if (__DEV__) {
      warn(`cannot run an inactive effect scope.`)
    }
  }

  on() {
    activeEffectScope = this
  }

  off() {
    activeEffectScope = this.parent
  }

  stop(fromParent?: boolean) {
    if (this.active) {
      let i, l
      for (i = 0, l = this.effects.length; i < l; i++) {
        this.effects[i].stop()
      }
      for (i = 0, l = this.cleanups.length; i < l; i++) {
        this.cleanups[i]()
      }
      if (this.scopes) {
        for (i = 0, l = this.scopes.length; i < l; i++) {
          this.scopes[i].stop(true)
        }
      }
      if (this.parent && !fromParent) {
        const last = this.parent.scopes!.pop()
        if (last && last !== this) {
          this.parent.scopes![this.index!] = last
          last.index = this.index!
        }
      }
      this.active = false
    }
  }
}

export function effectScope(detached?: boolean) {
  return new EffectScope(detached)
}

export function recordEffectScope(
  effect: ReactiveEffect,
  scope: EffectScope | undefined = activeEffectScope
) {
  if (scope && scope.active) {
    scope.effects.push(effect)
  }
}

export function getCurrentScope() {
  return activeEffectScope
}

export function onScopeDispose(fn: () => void) {
  if (activeEffectScope) {
    activeEffectScope.cleanups.push(fn)
  } else if (__DEV__) {
    warn(
      `onScopeDispose() is called when there is no active effect scope` +
        ` to be associated with.`
    )
  }
}
```

源码并不复杂，主要是记录```effect```子父级关系、在```strop```时清除相关副作用 & 执行用户下一步动作

### constructor

1. 若```detached```为```false```表示子父级关联，若为```true```则断开子父级关联
2. 若```activeEffectScope```存在表示在此之前已经执行过,存在父级

所以两者均满足条件时，记录```parent```、将当前```EffectScope```加入父级并且记录当前```EffectScope```在父级中的位置```index```


### run

1. 执行```run```前需根据```active```判断当前```EffectScope```是否处于激活状态
2. 暂存上个```activeEffectScope```为```currentEffectScope```
3. 执行```fn```阶段保证```activeEffectScope```为当前```EffectScope```，避免后续若执行```onScopeDispose```时```activeEffectScope```错乱
4. 执行完毕```finally```阶段重新将```activeEffectScope```赋值为上一个```EffectScope```，保证初始化阶段子父级关系正确

执行阶段通过```activeEffectScope```的巧妙，既保证了当前阶段的正常执行，又可以让后续的```EffectScope```能正确记录子父级关系

### stop

1. 为防止重复执行，同样需要判断当前```EffectScope```是否处于激活状态
2. 停止在```recordEffectScope```阶段记录的```effect```，即调用```effect```中的```stop```，新版本中```effect```引入了```recordEffectScope```记录```effect```，
3. 执行```onScopeDispose```阶段```cleanups```收集用户定义的动作
4. 停止```scopes```收集的子集```EffectScope```
5. 取消父级对对当前```EffectScope```引用，若移除的最后一个不是当前```EffectScope```，将父级中当前索引位置值赋值为```last```，改变```last```中记录的```index```

### effectScope

返回```EffectScope```实例

### recordEffectScope

添加当前```effect```，```effect```中会调用```recordEffectScope```收集```effect```，```watch```和```computed```均通过```effect```实现，这里也呼应了官网对```EffectScope```的解释：```捕获其中所创建的响应式副作用 (即计算属性和侦听器)，这样捕获到的副作用可以一起处理```

### getCurrentScope

获取当前```EffectScope```

### onScopeDispose

这里会收集用户```stop```需要执行的动作：

```js
activeEffectScope.cleanups.push(fn)
```

当执行```stop```时触发用户动作，```run```阶段的操作保证了```activeEffectScope```为当前```EffectScope```，不会发生混乱


## 结语

之前的源码分析时还没有这部分，所以在```effect```中没有看到```EffectScope```的影子，但大逻辑应该不影响，不熟悉的依然可以参考那部分源码分析

