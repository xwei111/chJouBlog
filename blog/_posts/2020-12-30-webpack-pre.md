---
title: webpack配置&优化
date: 2020-12-30
tags: 
  - webpack
author: 追旅
location: 杭州滨江 
---

## 前言

今天了解一下```webpack```的配置以及日常开发过程中的优化

## webpack核心概念

* mode: 模式，通常有生产（```production```）和开发（```development```）模式
* entry: 入口，可以为字符串、数组或对象，数组表示多入口
* output: 出口，path表示打包后文件位置，filename为输入文件名，可以为：```bundle.js```或```[name].js```，通常避免缓存会携带```hash```值
* module(loader): 模块转换器，用于把模块原内容按照需求转换成新内容，```webpack```本身只支持```js```，对于其他文件则需要通过```loader```处理
* plugins: 插件，在```webpack```构建的特定时机注入扩展逻辑改变构建结果或者做自己需要做的事情

```js
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].[chunkhash].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [ "style-loader", "css-loader" ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
}
```

## webpack配置优化

### output.filename

```js
// 输出文件添加chunkhash避免缓存，分离出去的css添加contenthash，后边讨论一下hash值得区别
output: {
  filename: [name].[chunkhash].js
}
```

### devtool

```js
// 生产环境关闭sourcemap
{
  devtool: process.env.NODE_ENV === "production" ? false : "cheap-module-eval-source-map"
}
```

### resolve.extensions

```js
// 导入文件自动携带后缀，按配置先后顺序匹配
resolve: {
  extensions: ['.js', '.vue', '.json']
}
// 例如 import Test from './test'，匹配顺序test.js > test.vue > test.json
```

### resolve.alias

```js
// 配置导入模块别名
resolve: {
  alias: { 
    '@': resolve('src') 
  }
}
// 引入src文件下内容：import xxx from '@/xxx'
```

### resolve.modules

```js
// 配置解析模块的优先路径，默认为node_modules，即：先查找./node_modules，没有的话查找../node_modules，可以直接指定路径
resolve: {
  modules: [path.resolve(__dirname, 'node_modules')]
}
```

### lodear exclude/include/cacheDirectory

```js
// 缩小匹配文件范围，提升编译速度
// exclude：排除不需要编译的大文件
// include: 包含，需要检测的
// cacheDirectory: 缓存编译结果
module: {
  rules: [
    {
      test: /\.jsx?$/,
      use: 'babel-loader?cacheDirectory',
      exclude: /node_modules/,
      include: path.join(__dirname, 'src)
    }
  ]
}
```

### externals

```js
// 不打包第三方资源，通过script引入
// 也可以通过html-webpack-externals-plugin完成
{
  externals: {
    vue: 'Vue
  }
}
<script src="https://cdn.bootcdn.net/ajax/libs/vue/2.6.12/vue.min.js"></script>
```

## 优化插件

### HappyPack

```js
// webpack是单线程的，HappyPack可以将任务分为多个子进程，加快构建速度
const HappyPack = require('happypack');
{
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['HappyPack/loader?id=vue'] // 把对.vue文件的处理转交给id为vue的HappyPack实例
      },
      {
        test: /\.js$/,
        include: [resolve('src'), resolve('test')],
        use: ['HappyPack/loader?id=js']
      }
    ]
  },
  plugins: [
    new HappyPack({
      id: 'vue',
      loaders: [ { loader: 'vue-loader', options: vueLoaderConfig } ],
      threads: 5 // 开启进程数，默认3个
    }),
    new HappyPack({
      id: 'js',
      loaders: [ { loader: 'babel-loader' } ],
      threads: 5
    }),
  ]
}
```

### UglifyJsPlugin

```js
// uglifyjs-webpack-plugin可以压缩js，还有缓存、开启多进程构建
// terser-webpack-plugin也可以压缩js，功能和uglifyjs-webpack-plugin差不多
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
{
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
        cache: true,
        parallel: true // 开启多进程
      }),
    ],
  },
};
```

### splitChunks

```js
// 分离代码，某些特定模块（可以理解为公共模块）抽离出，不会因为业务逻辑的变化而变化（为了更好的缓存）
// 默认提取的公共文件不小于30kb（minSize默认30000），小于30kb则不会提取（多一个文件请求，性能上得不偿失）
// 4.0之前 CommonsChunkPlugin
new webpack.optimize.CommonsChunkPlugin(options)
// webpack4.0
{
  optimization: {
    splitChunks: {
      chunks: 'all' // async表示异步块  initial表示非异步块 all表示所有
    }
  }
}
```

### HtmlWebpackPlugin

```js
// 生成html，压缩html
const HtmlWebpackPlugin = require('html-webpack-plugin');
{
  plugins: [
    new HtmlWebpackPlugin({
      title: 'demo',
      template: path.resolve(__dirname, "index.html")
    })
  ]
}
```

### MiniCssExtractPlugin

```js
// 抽离css，css通常使用contenthash，避免js改动哈希值的变化
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
{
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `[name].[contenthash].css`,
      chunkFilename: `[id].css`
    })
  ]
}
```

### CleanWebpackPlugin

```js
// 每次打包前清除上次打包内容
{
  plugins: [ new CleanWebpackPlugin() ]
}
```

### image-webpack-loader

```js
// 压缩图片
{
  test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
  use: [
    "file-loader",
    "image-webpack-loader"
  ]
}
```

### CompressionWebpackPlugin

```js
// Gzip压缩
const CompressionWebpackPlugin = require('compression-webpack-plugin')
{
  plugins: [
    new CompressionWebpackPlugin(options)
  ]
}
```

## 三个hash区别

* ```hash```：整体项目有变化就会变化
* ```chunkhash```：根据不同的入口文件解析、构建，生成哈希值，将一些共用模块和逻辑抽出，则不会受业务逻辑的变化影响
* ```contenthash```： 当前文件内容变化才会变化，所以通常将```css```抽离出```js```，加上```contenthash```，即使```js```变化了，只要```css```没变则不会发生变化

其实这些hash的出现是为了更好的缓存，或者说最小化的更新资源

## tree shaking

```tree shaking```：移除打包时未被引用的代码，针对的是```ES6```模块中```export```和```import```的静态结构特性，生产环境下默认开启

```js
// util.js
export const add = (a, b) => a + b;
export const min = (a, b) => a - b;
// index.js  -------- require引用无论util.js中方法是否被使用均会被打包
const fns = require('./util.js)
// index.js  -------- import引用打包只会返回被引用的，压缩时（uglifyjs-webpack-plugin）会将没有引用的代码剔除
import { add } from './util.js' // min方法压缩后会被剔除掉
```

## scope hoisting

```scope hoisting```: 被称之为```作用域提升```，原理就是分析模块间的依赖关系，尽可能的将一些零散的模块合并到一个函数中，可以让代码文件更小，运行更快，webpack3+支持

```scope hoisting```同样需要使用```ES6```模块化语句，同理```tree shaking```

```js
// 使用
{
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
}
```

## 动态加载

```js
// splitChunks配合使用实现异步加载资源
// 旧
require.ensure()
// 新
import() // import('./a.js').then(res=>consolg.log(res))

// import()只是对值得引用，类似require，属于运行时调用，而import是编译时调用，例子如下
// test.js
export let num = 1;
export const add = () => num++;
// index.js import()
import('./test').then(({num, add})=>{
  console.log(num) // 1
  add()
  console.log(num) // 1
})
// index.js import
import { num, add } from './test';
console.log(num) //1
add()
console.log(num) // 2
```

## 结语

未完待续。。。