---
title: 小程序快绘开发有感
date: 2020-11-03
tags: 
  - 微信小程序
  - 云开发
author: 追旅
location: 杭州滨江 
---

## 前言

快绘是一款快速绘图的小工具，属于小众产品，做这个的理由是前段时间在微信上搜名片类小程序，如递名片、腾讯名片和酷咖名片等都只有固定的几个字段、固定的布局没有太大的扩展性，感觉不是甚好用，然后就有了一个思路，做一款可自定义布局的名片小程序，后来做着做着发现其实海报也可以做，在大图的制作商还有很多局限性(小程序各种bug各种坑导致绘画可见区域不是很大)，记录一下自己开发小程序的感想&坑&瓶颈，扫下边二维码可以体验

![An image](../.vuepress/public/quickdraw/20201103quickdraw5.jpg)

## 技术

微信小程序+云开发，主要涉及canvas，[painter](https://github.com/Kujiale-Mobile/Painter)是一款不错的画图工具，云开发的好处是可以免费使用小程序的数据库和储存空间，但实际上此次开发我只用的到了数据库来存储用户信息和绘图```JSON```数据

## 模块

快绘目前有4大模块：模板模块、绘图模块、登录模块、我的模块

* 模板模块

目前只用两个名片模板，后期期望能提供更多的模板，分为海报和名片两大类，分为不同的主题，可通过主题搜索模板

<img style="width: 50%;" src="../.vuepress/public/quickdraw/20201103quickdraw4.jpg" />

* 绘图模块

这里是最主要的功能汇集区域，但由于小程序canvas各种问题，绘画区域目前没有满屏

<img style="width: 50%;" src="../.vuepress/public/quickdraw/20201103quickdraw1.jpg" />

* 登录模块

登录主要是手机用户的非敏感信息（个人小程序限制还是比较多的），登录后用户才能永久性保存制作的作品

<img style="width: 50%;" src="../.vuepress/public/quickdraw/20201103quickdraw3.jpg" />

* 我的模块

展示用的个人信息和作品

<img style="width: 50%;" src="../.vuepress/public/quickdraw/20201103quickdraw2.jpg" />

期望拓展功能模块：目前还缺少引导模块，对这块没了解的不知道如何操作、提供一个市场模块，用户可以发布自己的作品到市场，免费或者付费、绘图区域过小，绘制大图不友好、暂未设置图层关系

## 功能

有了[painter](https://github.com/Kujiale-Mobile/Painter)可以帮助解决canvas自适应、选中子元素、生成图片等大部分关于绘画方面的功能，我们只需要通过处理```JSON```数据来实现自己想要的功能，但是由于小程序canvas层级问题、```bindlongtap```事件不生效、滚动是不触发页面滚动，还是妥协了画布满屏、长按2s可移动等功能，下边介绍一下其他功能

* 授权登录

登录会将用户的一些非敏感信息（头像、昵称等）存到```users```集合中，用户每次登录去```users```集合中查询用户信息，如果存在则不存在用户再次授权登录，达到一次登录及永久登录的效果，登录后用户即可将自己的作品保存至我的

* 添加元素

目前我们支持添加```文本```、```图片```、```矩形```

* 保存图片

保存图片至本地和至我的，保存到我的需要用户授权登录，登录后我们会将用户的绘图数据存在数据库中

```js
// 保存至本地
wx.saveImageToPhotosAlbum()
// 保存至我的
db.collection('cards').add({ data })
```

* 移动整个画布

这是一个妥协的功能，本想着是长按2s后可以移动画布，但是```bindlongtap```事件不生效，改用显示移动图标，拖动移动图标移动画布

* 移动修改元素

点击元素后，弹出元素可以修改的属性，拖动元素可以移动，移动动停止后更新位置属性

* 画布正位

鉴于画布移动后很难移动到原来的问题，提供一键归为功能

* 预览

由于画布层级问题，我们只能用```cover-view```和```cover-image```来实现

* 分享

分享区别临时分享和永久分享

## 技术难点及思考

### canvas的问题

* 层级问题

绘图区域是```canvas```，期初设想是至少占满屏，配置属性部分通过```fixed```定位浮动在上边，由于```canvas```的层级问题，只能有```cover-view```、```cover-image```、```button```等标签可以覆盖，配置属性模块```input```标签层级问题无法解决

* bindlongtap方法不生效

制作大图手机屏幕是肯定不够的，所以整个```canvas```必定要可移动，避免和子元素的移动冲突，采用长按2s移动画布，但是```bindlongtap```事件不生效

思考： 关于```canvas```的各种问题测试的时候，朋友提了个方案：由于操作的都是```JSON```数据并不是图片，完全可以用普通标签（```view```等）在页面实现布局，只需要生成图片的时候使用```canvas```即可，这个方案完全可行，层级和长按事件都可以解决，制作大图上体验也会更好

### 临时分享

其实这个部分的分享完全可以不做，但本着解决问题的想法还是去实现了一下，对于正在编辑的作品，并没有这些操作的数据保存到数据库，别人点击这个分享链接进来后看不到实际分享出去的画面，体验非常的不好

怎么处理这个问题，我想起了游戏中的游客模式，游客并不想登录，也不想保存图片至我的，只是编辑后就分享了出去，由于分享的链接参数无法存储大量的数据，所以唯一的办法就是新建一个集合```timeCards```存储临时分享的数据，然后分享的链接只带上唯一标识```id```即可，每次点击分享链接进来的时候通过```id```去查询```timeCards```存储的绘画数据即可


但临时数据不可能一直存在所以就引出了定时删除数据库数据的定时任务，微信小程序提供了[定时触发器](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/guide/functions/triggers.html)，可以使用这个来定时触发删除临时数据的任务，接下来看一下具体操作

1. 分享时要存储绘画数据和分享时间

```js
// createTime 分享时的时间，取服务端时间
const db = wx.cloud.database();
db.collection('timeCards').add({
  data: { ...data, createTime: db.serverDate()}
}).then()
```

2. 新建云函数，超过3天的数据删除

```js
// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const day = 60 * 60 * 24 * 3 * 1000
// 云函数入口函数
exports.main = async (event, context) => {
  const db = cloud.database()
  const arr = await db.collection('timeCards').get().then(res=>{
    const currentTime = new Date().getTime()
    const { data } = res
    let deleteArr = []
    data.map(e=>{
      const { createTime } = e
      const time = new Date(createTime).getTime()
      const offstTime = currentTime - time;
      // 收集超过3天的数据
      if(offstTime > day) {
        deleteArr.push(e._id)
      }
    })
    return deleteArr
  })
  arr.map(item=>{
    db.collection('timeCards').doc(item).remove()
  })
  
}
```
3. 在config.json中配置触发器

```
{
  "triggers": [
    {
      "name": "timeCards",
      "type": "timer",
      "config": "0 0 0 * * ? *" // cron表达式，每天0点0分0秒触发
    }
  ]
}
```

4. 上传云函数和触发器

云函数目录邮件，可以看到上传云函数和上传触发器操作

## 结语

其实这是我第一次使用云开发，对于前端还是很友好的。

有了想法就该去动手实现！！！

