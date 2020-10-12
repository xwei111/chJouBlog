---
title: 桌面通知-Notification
date: 2020-10-12
tags: 
  - notification
  - js
author: 追旅
location: 杭州滨江 
---

## 前沿

过个十一整个人都变得懒洋洋的，上了两天班都不在状态，然后在网上乱翻东西看到了个有意思的东西：桌面通知，大概类似于手机通知、消息推送，感觉还是挺好玩的，点击下边的按钮看看效果

<SendNotic />

桌面效果如下：

![An image](../.vuepress/public/noticfication/20201012noticfication1.png)

## Notification

```Notification```使用比较简单，就像你找对象一样简单，```new```一下就好了:smile::smile::smile:，主要是了解一下```api```，```new Notification(title, options)```有两个参数，```title```为通知标题，```options```为配置项，主要配置如下：

|       属性       |    描述    |
|------------------|----------------|
|        dir       |     文本方向    | 
|        lang      |     语言        | 
|        body      |     文本内容    | 
|        icon      |     通知图标    | 
|        silent    |     是否静音    | 


```Notification``` 主要事件：

|       事件       |    描述    |
|------------------|----------------|
|        onclick   |     点击通知事件    | 
|        onclose   |     关闭通知事件    | 
|        onerror   |     错误事件    | 

实例```new Notification(title, options)```方法：

|             事件           |                    描述                |
|----------------------------|----------------------------------------|
|        requestPermission   |     当前页面向用户申请显示通知的权限    | 
|        onclose             |     关闭通知         | 

## 权限

要想向用户发送消息，需要获取用户权限，相同域名只需要获取一次权限，```Notification.permission```可以获取用户当前权限状态，一般情况下默认为```default```表示不知道用户选择，```granted```表示用户允许，```denied```则表示用户拒绝

当用户权限状态为```default```时，可以调用```Notification.requestPermission()```向用户申请权限，用户选择同意后就可以像用户推送消息了，好吧真的跟找对象一样简单，只要她同意就可以了:smile::smile::smile:

## 实现

pc端兼容性还好，现代浏览器基本都支持，为了防止有不支持的，我们还是需要先做个判断再继续，主要代码：

```js
const title = "施主，别走！！！";
const options = {
body: "施主你命犯桃花，老衲为你卜了一卦，点开看看吧",
dir: "rtl",
icon: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602504723214&di=b7527ceed00046c1a061f7952d038f7a&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F07%2F20200307221933_qjesz.thumb.400_0.jpeg"
};

// 判断浏览器是否支持
if (!("Notification" in window)) {
    alert("浏览器不支持Notification");
} else {
    // 用户权限状态
    let permission = Notification.permission;
    if (permission === "granted") {
        // 同意
        const n = new Notification(title, options);
        n.onclick = function() {
            window.open('https://chasejourney.top/divination/index.html', "_blank");
            n.close();
        };
    } else if (permission === "default") {
        // 请求权限
        Notification.requestPermission().then(res => {
        if (res === "granted") {
            // 同意
            const n = new Notification(title, options);
            n.onclick = function() {
                window.open('https://chasejourney.top/divination/index.html', "_blank");
                n.close();
            };
        }
        });
    } else {
        // 拒绝
        console.log("用户拒绝了");
    }
}
```


