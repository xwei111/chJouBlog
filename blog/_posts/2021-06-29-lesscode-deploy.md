---
title: 低代码平台前后端部署
date: 2021-06-29
tags: 
  - nginx
  - 码云
  - jenkins
  - node
  - mongodb
author: 追旅
location: 杭州滨江
---

## 前言

趁着现有的阿里云服务器，将自己前段时间撸的低代码平台部署一下，记录一下部署后低代码的改动

前端资源还是放在```码云```上，```github```网络hold不住，源码： https://gitee.com/xwei111/lesscode-show.git

[访问地址](http://47.98.126.233:8001/#/)

## 前端部署

上篇已经介绍了```jenkins```的部署，按部就班就ok了，不在多说

## 跨域

### 旧

```js
// 开始的时候在node端设置
res.header("Access-Control-Allow-Origin", "*");
```

### 新

```js
// 生产ngxin配置反向代理
location ^~/lesscode/ {
  proxy_pass http://47.98.126.233:3000;
}
// 本地开发webpakc代理
// baseUrl等修改
// 上传图片等资源地址修改
devServer: {
  proxy: {
    "/lesscode": {
      target: "http://47.98.126.233:3000",
      changeOrigin: true,
    },
  },
}
```

## 数据库

### 旧

之前使用的是[MongoDB Atlas](https://account.mongodb.com/account/login?n=%2Fv2&nextHash=%23org%2F60a4abbd1773566e8a5d2340%2Fprojects)线上数据库

```js
const mongodbUrl = `mongodb+srv://xxx:xxxxx@lesscode.4pxcv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
```

### 新

部署```node```服务端后，数据库查询经常失败，查询比较慢，改为```linux```上安装```mongodb```

* 安装

```js
// 安装后默认启动了，端口默认为27017，通过service启动、停止、重启、查看状态
apt-get install mongodb
// 链接mongodb
mongo
// monggodb相关命令
use [dbName]
show dbs
show collections
db.createCollection([name], [options])
```

* 链接

```js
// localhost表示linux当前ip地址
const mongodbUrl = `mongodb://localhost:27017/lesscode`
```

## node服务部署

```node```同样使用```jenkins```部署，步骤如下：

1. ```linux```根目录下创建```www```文件夹，此处作为```node```服务部署地址
2. 配置```jenkins```，大部分和```web```端配置相同，删除```构建```和```构建后```操作
3. 在```构建环境```的```Send files or execute commands over SSH after the build runs```处添加如下脚本：

```
cd /www/lesscode-server/
rm -rf *
cp -r /var/lib/jenkins/workspace/lesscode-server/* /www/lesscode-server/
cd /www/lesscode-server/
cnpm install
```
4. 点击```立即构建```即可

暂时是这样的方案，了解到了更好的方案再去优化

## pm2

* 安装

```js
npm install pm2 -g
// pm2相关命令
pm2 list
pm2 stop xx
pm2 start xx
pm2 restart xx
```

* 启动node服务

```js
// 开启watch，部署时若代码变化自动重启pm2
pm2 start ./bin/www --watch
```

## 结语

暂时改动就这么多，后续改善了在补充文档
