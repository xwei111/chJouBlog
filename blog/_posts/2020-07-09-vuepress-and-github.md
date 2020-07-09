---
title: vuepress和github快速搭建博客、技术文档
date: 2020-07-09
tags: 
  - vue
  - vuepress
  - github
  - git
author: 追旅
location: 杭州滨江 
---

## 前言

怎么会突然开始写文档了呢，因为前几天开会Boss提了技术小伙伴需要自己写一些技术文章，并拿出一些钱来鼓励写文档，然后就突然感觉自己很low，工作了这么多年，早该写文档了，却浑浑噩噩不知觉。大梦初醒，抄起我的小本本就开始搞，工欲善其事必先利其器，我们就从博客开始。

## 为什么选vuepress

VuePress 是一个静态网站生成器，是尤大大写vue文档而开发的，特点如下：

* 快速搭建
* 配置少、性能高
* 默认主题及自定义主题，可发挥程度高
* markdown拓展
* 自带 pwa

vue又是我比较喜欢的前端框架，所以vuepress是的首选，接下来我们将开始搭建。

## 开始搭建

* 准备工作

我们将用yarn来演示，所以先来一点准备工作，安装[node.js](https://nodejs.org/en/)，安装yarn
```js
npm install yarn -g
```

ok，有了node和yarn后我们就可以开开心心的玩耍了。假如你只是想尝试玩一下的话，右边链接 [vuepress快速上手](https://www.vuepress.cn/guide/getting-started.html) 。

* 新建并进入一个文件夹

```js
mkdir myDocs

cd myDocs
```

* 初始化项目
```js
npm init
```
这个过程会让你填写一个项目信息，如果你不想填无脑回车就好

* 安装vuepress
```js
yarn add vuepress -D
```
安装完毕后myDocs下多了node_modules和yarn.lock，这些文件在我们提交的时候是不需要提交的(特别是node_modules)，新建.gitignore,将后续可能会产生的不需要提交的文件加进去，如下(根据实际项目配置)
```js
/node_modules
/npm-debug.log*
/yarn-error.log
/yarn.lock
/package-lock.json
```
* 目录结构

```js
.
├── docs
│   ├── .vuepress (可选，用于存放全局的配置、组件、静态资源等)
│   │   ├── components (可选，该目录中的 Vue 组件将会被自动注册为全局组件)
│   │   ├── theme (可选，用于存放本地主题)
│   │   │   └── Layout.vue
│   │   ├── public (可选，静态资源目录)
│   │   ├── styles (可选，用于存放样式相关的文件)
│   │   │   ├── index.styl (可选，将会被自动应用的全局样式文件)
│   │   │   └── palette.styl(可选，用于重写默认颜色常量，或者设置新的 stylus 颜色常量)
│   │   ├── templates (可选，存储 HTML 模板文件)
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js (可选，配置文件的入口文件)
│   │   └── enhanceApp.js (可选，客户端应用的增强)
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json
```

这是官方的目录结构，为了方便管理，项目看起来更整洁，所有的配置以及md文档都放在了docs下，很多是可选的，如果不涉及自定义主题很多文件我们是不需要的，我们只需要config.js配置文件和README.md即可，生成目录如下

```js
myDocs
├── .gitignore
├── docs
│   ├── .vuepress
│   │   └── config.js
│   └── README.md
├── package.json
└── yarn.lock

```
* 配置config.js

```js
module.exports = {
    title: '个人博客',
    description: '分享笔记，技术博客',
}
```
具体配置见 [vuepress配置](https://www.vuepress.cn/config/)

ok，我们的博客已经初步搭建完毕，在package.json中加入命令
```js
"scripts": {
    "start": "npm run dev",
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
}
```
在README中贴一些散文然后执行```yarn start```看看效果吧

![An image](../.vuepress/public/vuepressAndgithub/20200709vuepressandgithub-1.png)

GOOD!!! 终于有了自己的博客了。

好吧，真正的战斗才刚刚打响！！！！

## 进一步完善

我们已经初步完成一个博客，但是我们可能有很多文章要写，肯定不会每次都搭个博客，这时我们就需要认真的看一下[vuepress配置](https://www.vuepress.cn/config/)

通过配置文档我们可以知道，我们可以使用vuepress默认主题，配置首页，导航栏等等一系列操作，ok我们先配置首页，开启```ctrl+c```  ```ctrl+v```大法，在README.md加入

```js
---
home: true
heroImage: /mine.jpg
heroText: 我的博客
tagline: 博客副标题
actionText: 查看 →
actionLink: /foo
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML
footer: MIT Licensed | Copyright © 2018-present Evan You
---
```

在public中加入mine.jpg图片，创建bar.md和foo.md

```js
myDocs
├── .gitignore
├── docs
│   ├── .vuepress
│   │   ├── config.js
│   │   └── public
│   │       └── mine.jpg
│   ├── bar.md
│   ├── foo.md
│   └── README.md
├── package.json
└── yarn.lock

```

配置config.js

```js
module.exports = {
    title: '个人博客',
    description: '分享笔记，技术博客',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
        ],
        sidebar: [
            { title: 'Foo', path: '/foo' },
            { title: 'Bar', path: '/bar' }
        ]
    }
}
```
ok，```yarn start``` 看看效果

![An image](../.vuepress/public/vuepressAndgithub/20200709vuepressandgithub-2.png)
![An image](../.vuepress/public/vuepressAndgithub/20200709vuepressandgithub-3.png)

哎呦，不错哦！！！

现在看起来似乎有模有样了！但是有人说了，这个看起来默认主题看起来一点逼格也没有，完全配不上我的帅气，小姐姐看到这个都再也不想理我了。ok满足你！！！

## 主题

终于到了主题了，vuepress默认主题似乎更适合写一些开发文档，对于个人博客来讲过于板正。但vuepress完全可以满足你的任何意淫，```自定义主题```，这也是我超喜欢vuepress的原因之一，给你最大的发挥空间。

如果你没时间来开发要主题，No Problem ！！！给你提供现成的！！！

* First Blood   

vuepress亲情推荐博客主题：[@vuepress/theme-blog](https://vuepress-theme-blog.ulivz.com/)，本博客就是使用该主题

安装

```js
yarn add @vuepress/theme-blog -D
```

使用
```js
module.exports = {
  theme: '@vuepress/blog',
  themeConfig: {
    // 请参考文档来查看所有可用的选项。
  }
}
```
主题使用方法都一样，之后不再列举

* Double Kill

文档主题：[vuepress-theme-bulma](https://github.com/nakorndev/vuepress-theme-bulma) 、[demo](https://vuepress-theme-bulma.nakorn.dev/)

* Triple kill 

简洁风：[vuepress-theme-api] https://github.com/sqrthree/vuepress-theme-api、[demo](https://blog.sqrtthree.com/vuepress-theme-api/)

* Quadra kill

个性：[vuepress-theme-indigo-material](https://github.com/zhhlwd/vuepress-theme-indigo-material)、[demo](https://zhhlwd.gitee.io/)

* Penta kill

prefect: [portfolio-vuepress](https://github.com/forestryio/portfolio-vuepress)

![An image](../.vuepress/public/vuepressAndgithub/20200709vuepressandgithub-4.png)













