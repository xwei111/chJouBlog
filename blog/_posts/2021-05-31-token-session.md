---
title: 登录校验-session、token
date: 2021-05-31
tags: 
  - node
  - token
  - session
  - jsonwebtoken
author: 追旅
location: 杭州滨江
---

## 前言

小一个月没有写博客了，因为最近一直在忙项目和低代码平台的研究，低代码的服务端是用node去实现的，碰到的第一个问题就是登录校验的问题，这里做一下分享

## session

先简单了解一下```session```，```http```请求是无状态的，通常不做任何配置的情况下，客户端和服务端处于互相不认识的情况下去交流，就好比网聊只知道对方的网名```客户端```、```服务端```，但是坏人很多，网聊是很危险的，我会暴露一些基本信息给你，但是想了解更多的前提是你得让我知道你是谁，```session```的作用就是```客户端```获取```服务端```信任的方式

接下来，以```express```为例简单介绍一下```session```验证流程

### 设置session

```js
// 借助express-session中间件设置session
const session=require("express-session");

app.use(session({
    secret: "secret", // 秘钥 
    cookie: { maxAge: 8 * 1000 }, // cookie，默认{ path: '/', httpOnly: true, secure: false, maxAge: null }
    resave: false, // 强制保存，即使session没有被修改也要重新保存
    saveUninitialized: false // 强制初始化
}))

```

### 登录存储信息

```js
// 初次登录存储用户信息至session
router.get('/login', (req, res, next) => {
  req.session.user = 'user'
  res.json({
    code: 200,
    message: '登录成功'
  })
})
```

### 登录后接口校验

```js
// 为需要登录后调用的接口添加校验
router.get('/list', (req, res, next) => {
  const { session: { user } } = req
  res.json({
    code: user ? 200 : 403,
    message: user ? 'success' : '请重新登录'
  })
})
// 通常会用中间件方式统一处理
app.use((req, res, next) => {
  const { url, session: { user } } = req;
  if(url.indexOf('/login') > -1) {
    next()
  } else {
    if(user) {
      next()
    } else {
      res.json({
        code: 403,
        message: '请重新登录'
      })
    }
  }
})
```

### 更新session

```js
// 为了体验优化，通常对应积极用户会主动更新session过期时间，结合上边中间件，如下处理
app.use((req, res, next) => {
  const { url, session: { user } } = req;
  if(url.indexOf('/login') > -1) {
    next()
  } else {
    if(user) {
      req.session._garbage = Date();
      req.session.touch();
      next()
    } else {
      res.json({
        code: 403,
        message: '请重新登录'
      })
    }
  }
})

```

### 删除session

```js
// 退出登录，清除session
router.get('/loginOut', (req, res, next) => {
  req.session.destroy();
  res.json({
    code: 200,
    message: '退出成功'
  })
})
```

大致流程如此，通常```session```配合数据库做一些持久化的方案，这里不做深究，简单总结一下：

* ```session```的更新较为灵活，有许多较为成熟的框架
* 前后端都是需要存储信息的，当用户量大时，服务端开销比较大
* ```cookie``` + ```session```有跨域问题，服务端需设置```Access-Control-Allow-Origin```，同时前端需设置```withCredentials```
* ```session```信息存储在当前服务器，分布式需做```session```共享机制（只是知道）
* ```cookie```信息有CSRF安全问题

## token

与```session```不同的是```token```并不需要服务端存储，更像是宵禁时的口令，口令对了就可以通过，否则不允许通过，还是以```express```为例介绍一下大致流程

### 登录生成token

```js
// 可以按一定的规则加密生成token
// 这里使用jsonwebtoken生成token，jsonwebtoken的使用不在这里详细介绍
// 将token返回前端
const sign = (jtJson = {}, options = {}) => {
  const token = jwt.sign({ iss: 'lesscode', ...jtJson}, "secret", { expiresIn: 60 * 60 * 24, ...options})
  return token
}

router.get('/login', (req, res, next) => {
  const { body: { user, pass } } = req;
  const token = sign({ user })
  res.json({
    code: 200,
    data: { token, user },
    message: '登录成功'
  })
})
```

### 前端拿到token

```ts
// 前端从登录接口获取token并存入localStorage
// 后续接口请求携带token
const request = async (
  url: string,
  options: optionsTypes
): Promise<dataTypes> => {
  const userInfo: string | null = localStorage.getItem("userInfo");
  const headers: headersTypes = {};
  if (userInfo) {
    // token存在则加入请求头
    const { token } = JSON.parse(userInfo) ?? {};
    headers.token = token;
  }
  const res: dataTypes = await selfFetch(baseUrl + url, {
    ...options,
    headers,
  });
  const { code, message } = res ?? {};

  if (code === 403) {
    store.commit("set_loginVisible", true);
    store.commit("set_userInfo", {});
    localStorage.clear();
  } else if (code !== 200) {
    ElMessage.error(message);
  }
  return res;
};
```

### 服务端校验token

```js
// 如同session一样，添加token校验中间件，对必要接口进行身份验证
const verResult = (req, res, next) => {
  const { url, headers: { token } } = req
  // 登录、通用接口跳过校验
  if(url.indexOf('/user/') > -1 || url.indexOf('/common/') > -1) {
    next()
  } else {
    if(!token) {
      // token不存在重新登录
      setJson(res, 403, "请登录", null)
    } else {
      const { iat, exp, message = '' } = jwt.verify(token, 'secret', (error, decoded) => {
        if(error) {
          if(error.name === 'TokenExpiredError') {
            return {
              iat: 1,
              exp: 0,
              message: "token已过期"
            }
          } else if (error.name === 'JsonWebTokenError') {
            return {
              iat: 1,
              exp: 0,
              message: "token无效"
            }
          }
        } else {
          return decoded
        }
      })
      // token过期或者无效重新登录
      if(iat < exp) {
        next()
      } else {
        setJson(res, 403, message, null)
      }
    }
  }
}
app.use(verResult)
```
### 更新token

这里有一些问题：

1. ```token```作为一种权限验证指标时间越短越好
2. ```token```一旦生成过期时间无法更改

但实际问题是，频繁登录一定会打击用户的使用积极性，所以就必须针对活跃用户去做一些无感更新```token```的操作，期初的想法当然是想和```session```一样，当用户调用一次接口就返回一个新```token```，看起来好像没有什么大问题，但是却引起了更大的安全问题，假设```token```在一分钟后过即将过期，再一分钟内接口被调用了```10000```次，那这里就会产生```10000```个新的token，也就是同时存在了```10000```把钥匙可以打开服务端的大门，所以这个方案是不可行的，这里分享个优化方案

#### refresh_token

在用户初始登录时生成两个```token```: ```access_token```和```refresh_token```，```access_token```过期时间较短，比如只有5分钟（毕竟越短越安全），```refresh_token```过期时间有7天，接口校验使用```access_token```，如果```access_token```过期的话使用```refresh_token```获取新的```access_token```，后续使用新的```access_token```，但如果```refresh_token```也过期了，用户必须重新登录

简单总结一下：

* 无状态，符合resetful api原则
* 扩展新好，对分布式较为友好
* 一次性，一旦```token```签发不可更改，若需要做更新续签，需要额外逻辑，需要自行实现
* 数据较大、不宜存储敏感数据

## 结语

最后自己也有个问题，```req.session._garbage```方法具体是做什么的，看起来好像是更新```session```有效期开始时间，但是把```express-session```源码down下来也没有找到该方法，期望大佬得解答
