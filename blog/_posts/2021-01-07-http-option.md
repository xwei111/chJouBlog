---
title: 简单请求&复杂请求
date: 2021-01-07
tags: 
  - http
  - 简单请求
  - 复杂请求
author: 追旅
location: 杭州滨江 
---

## 前言

long long ago，再一次与后端联调过程中遇到了一个问题，明明我只发送了一条请求，但是```google```上却显示两条请求，年轻的我一脸的蒙蔽，问后端大佬，大佬也不清楚。没办法，只能自己分析了，打开```F12```在```Network```可以看到其中一条请求的请求方式是```OPTIONS```，查阅资料看到[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/OPTIONS)将```OPTIONS```请求称之为```预检请求```，用来检测实际请求是否可以被服务器所接受

那什么时候触发```预检请求```，通过[阮一峰的跨域资源共享CORS详解](http://www.ruanyifeng.com/blog/2016/04/cors.html)我们可以知道```CORS```分为```简单请求```和```复杂请求```，而当请求为```复杂请求```时则会先触发```预检请求```，得到服务器的肯定回答后才付出真正的请求

## 简单请求、复杂请求

同时满足以下条件的是```简单请求```：

1. 请求方式是以下三种之一：

* GET
* POST
* HEAD

2. Http头信息不超出以下字段：

* Accept
* Accept-Language
* Content-Language
* Last-Event-ID
* Content-Type: 只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain

不同时满足以上条件的均是```复杂请求```

## CORS

* Access-Control-Allow-Origin: 设置跨域源，如果为*则表示允许任何源访问
* Access-Control-Max-Age： 设置预检的过期时间
* Access-Control-Allow-Credentials：是否允许发送```cookie```，默认请求是不携带```cookie```的，但是如果需要请求携带```cookie```则需要请这个设置为```true```，同时前端```ajax```请求也需要将```withCredentials```设置为```true```

## 结语

今天有点短，日常开发遇到了知道是怎么回事就好！
