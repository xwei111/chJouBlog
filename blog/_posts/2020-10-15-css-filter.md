---
title: 神奇的css-filter
date: 2020-10-15
tags: 
  - css
  - filter
author: 追旅
location: 杭州滨江 
---

## 前言

css有很多有意思的且强大的属性，```filter```绝对其中一个，除了某些老古董，绝大的浏览器都已经支持，一起来看看神奇的```filter```吧

## filter属性

### blur模糊度

```blur```设置高斯模糊，默认为0，值越大越模糊

<css-filter-Blur title="模糊值" kind="blur" unit="px" :defaultValue="5" />

### brightness亮度

```brightness```设置亮度，默认为1，值越大越小越黑

<css-filter-Blur title="亮度" kind="brightness" :defaultValue="160"  :max="500"/>

### contrast对比度

```brightness```设置对比度，默认为1，当值为0时图像全黑

<css-filter-Blur title="对比度" kind="contrast" :defaultValue="500"  :max="1000"/>

### grayscale灰度

```grayscale```设置灰度，默认为0，当值为100时图像全灰

<css-filter-Blur title="灰度" kind="grayscale" :defaultValue="100" />

### hue-rotate颜色旋转

```hue-rotate```表示颜色旋转度，默认为0deg，超过360deg的值相当于又绕一圈

<css-filter-Blur title="旋转值" kind="hue-rotate" unit="deg" :defaultValue="180" :max="360" />

### invert反色

```invert```设置反转值，默认0，范围0-100，100时颜色完全反转

<css-filter-Blur title="反色值" kind="invert" :defaultValue="100" :max="100" />

### opacity透明度

```opacity```设置透明度，默认100，范围0-100，0时隐藏

<css-filter-Blur title="透明度" kind="opacity" :defaultValue="50" :max="100" />

### saturate饱和度

```saturate```设置饱和度，最小为0，没有最大值

<css-filter-Blur title="饱和度" kind="saturate" :defaultValue="500" :max="1000" />

### sepia褐色

```sepia```设置照片颜色为褐色，类似怀旧功能，默认为0

<css-filter-Blur title="饱和度" kind="sepia" :defaultValue="80" :max="100" />

### drop-shadow阴影

与```box-shadow```不同的是```drop-shadow```可以给图片非透明部分添加阴影，如下：

```css
.box_shadow { box-shadow: 0px 0px 10px #f00; }
.drop_shadow { filter: drop-shadow(0px 0px 10px #f00); }
```
<css-filter-Shadow />

这个还是比较实用的

## 一键更改主题

一键更改主题基本原理就是给```html```、```body```添加```filter```，虽然目前现代浏览器均支持```filter```效果，但是当```filter```不为```none```的时候，如果该元素或者其子元素具有 ```absolute``` 或 ```fixed```属性，那么它会为其创建一个新的容器，浮动元素会以新容器定位，最终导致定位错位。网上有的```filter```说加在```html```就好，我尝试了Google、Edge和Firefox，只有Google表现正常，Edge需要加载```body```上，而Firefox无论加在```html```、```body```上都会出现错位，最合适的方式就是针对需要的元素添加```filter```，对于更加古董的浏览器我们就不考虑了，移动端用自己手机试了一下基本没有遇到问题，体验更好一点。以本博客为例，只需要给class为```vuepress-blog-theme-content```元素添加即可达到效果，动态添加：

```js
// 一键置灰
const el = document.getElementsByClassName('vuepress-blog-theme-content')[0];
el.style['filter'] = 'grayscale(1)'
el.style['-webkit-filter'] = 'grayscale(1)'
el.style['-moz-filter'] = 'grayscale(1)'
el.style['-ms-filter'] = 'grayscale(1)'
el.style['-o-filter'] = 'grayscale(1)'
```

<css-filter-SwitchGray />

## 动画

配合动画在看一下，比较简单不过多解释了

```css
/* button颜色反转变化 */
@keyframes hue {
  from { -webkit-filter: hue-rotate(0deg); }
  to { -webkit-filter: hue-rotate(-360deg); }
}
/* 字体模糊度缩放 */
@keyframes scale {
    0% { letter-spacing: -5px; filter: blur(3px); }
    50% { filter: blur(5px); }
    100% { letter-spacing: 5px; filter: blur(0); color: #000; }
}
```

<css-filter-AnimateFliter />

## 结语

还有很多很多很多的事情要做，over !


