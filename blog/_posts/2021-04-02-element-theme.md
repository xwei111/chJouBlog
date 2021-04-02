---
title: 动态修改element-ui主题
date: 2021-04-02
tags: 
  - elelemt-ui
  - vue
  - 修改主题
author: 追旅
location: 杭州滨江
---

## 前言

ui库搭建的差不多了，接下来就是做组件的时候了，这里先做一个动态修改```element-ui```颜色的组件库

## 分析

```element-ui```提供了一个修改主题的方式（网上资料很多，这里不再赘述），就是修改```scss```变量，但这个是静态的，也就是你在代码运行前需要将这些配置都完成才能生效，项目启动成功后，我们加载的就是编译压缩后的```css```文件，如果要动态修改主题的话，通常做法就是生成一份新的样式，然后生成新的```style```标签并加入```DOM```中，覆盖之前的样式


## 实现

接收一个初始化主题色的参数```defaultColor```

```js
props: {
    defaultColor: {
      type: String
    }
}
```

为保障```element-ui```的```css```版本的正确，我们从```element-ui/package.json```中读取版本

```js
const version = require("element-ui/package.json").version; // 版本号
const url = `https://unpkg.com/element-ui@${version}/lib/theme-chalk/index.css`;
```

即使访问```CDN```也仍有可能有网络的问题，所以我们也接受动态传入```url```

```js
// 默认访问CDN资源
props: {
    url: {
      type: String,
      default: url
    }
}
```

即使动态改变主题，刷新后颜色亦会重置，所以我们接收一个```isCache```入参，决定是否缓存，缓存方案采用```localStorage```

```js
// 默认不缓存
props: {
    isCache: {
      type: Boolean,
      default: false,
    }
}
```

接下来的主要逻辑(看代码吧)：

1. 调用```getThemeCluster```获取新旧心裂颜色
2. 首次进入判断```this.chalk```是否已经缓存样式表内容，没有则调用```getCSSString```方法获取样式
3. 调用```updateStyle```更新并获取最新的样式表内容
4. 判断是否存在```id```为```chalk-style```的```style```的标签，没有则生成，有则赋值最新的样式表并加入```DOM```

## 完整代码

```vue

<template>
  <el-color-picker
    :size="size"
    v-model="theme"
    class="theme-picker"
    @change="onChange"
    :predefine="predefineColors"
    popper-class="theme-picker-dropdown"
  >
  </el-color-picker>
</template>
 
<script>
const version = require("element-ui/package.json").version; // 版本号
const url = `https://unpkg.com/element-ui@${version}/lib/theme-chalk/index.css`;
const ORIGINAL_THEME = "#409EFF";

export default {
  name: "QjdTheme",
  data() {
    return {
      chalk: "",
      theme: "",
      predefineColors: Object.freeze([
        "#409EFF",
        "#ff4500",
        "#ff8c00",
        "#ffd700",
        "#90ee90",
        "#00ced1",
        "#1e90ff",
        "#c71585",
        "rgba(255, 69, 0, 0.68)",
        "rgb(255, 120, 0)",
        "hsv(51, 100, 98)",
        "hsva(120, 40, 94, 0.5)",
        "hsl(181, 100%, 37%)",
        "hsla(209, 100%, 56%, 0.73)",
        "#c7158577",
      ]),
    };
  },
  props: {
    size: {
      type: String,
      default() {
        return "";
      },
    },
    defaultColor: {
      type: String,
    },
    isCache: {
      type: Boolean,
      default: false,
    },
    url: {
      type: String,
      default: url
    }
  },
  mounted() {
    const colorPicker = localStorage.getItem("colorPicker");
    const { defaultColor } = this;
    // 主题色优先级localStorage.getItem("colorPicker") > defaultColor > ORIGINAL_THEME
    this.theme = this.CheckIsColor(colorPicker)
      ? colorPicker
      : this.CheckIsColor(defaultColor)
      ? defaultColor
      : ORIGINAL_THEME;
  },
  watch: {
    theme(val) {
      if (typeof val !== "string" || !val) return;
      this.isCache && localStorage.setItem("colorPicker", val);
      const themeCluster = this.getThemeCluster(val.replace("#", ""));
      const originalCluster = this.getThemeCluster(
        ORIGINAL_THEME.replace("#", "")
      );
      const getHandler = (variable, id) => {
        return () => {
          const newStyle = this.updateStyle(
            this[variable],
            originalCluster,
            themeCluster
          );
          let styleTag = document.getElementById(id);
          // 判断是否已经存在标签，么有则生成
          if (!styleTag) {
            styleTag = document.createElement("style");
            styleTag.setAttribute("id", id);
            document.head.appendChild(styleTag);
          }
          // 替换为新的样式表
          styleTag.innerText = newStyle;
        };
      };

      const chalkHandler = getHandler("chalk", "chalk-style");
      // 判断是否已有样式表，没有则根据url请求样式表内容
      if (!this.chalk) {
        this.getCSSString(this.url, chalkHandler, "chalk");
      } else {
        chalkHandler();
      }
    },
  },

  methods: {
    // 清除缓存
    clearCache() {
      localStorage.removeItem("colorPicker");
    },
    // 颜色改变
    onChange(e) {
      if (e) {
        this.theme = e;
      }
    },
    // 判断是否为颜色
    CheckIsColor(bgVal) {
      if (bgVal) {
        var type = "^#[0-9a-fA-F]{6}$";
        var re = new RegExp(type);
        if (bgVal.match(re) == null) {
          type =
            "^[rR][gG][Bb][(]([\\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)[\\s]*,){2}[\\s]*(2[0-4]\\d|25[0-5]|[01]?\\d\\d?)[\\s]*[)]{1}$";
          re = new RegExp(type);
          if (bgVal.match(re) == null) {
            return false;
          } else {
            return true;
          }
        } else {
          return true;
        }
      }
    },
    // 更新主题系列色
    updateStyle(style, oldCluster, newCluster) {
      let newStyle = style;
      oldCluster.forEach((color, index) => {
        newStyle = newStyle.replace(new RegExp(color, "ig"), newCluster[index]);
      });
      return newStyle;
    },
    // 初始化时获取默认主题的样式并复制给this.chalk
    getCSSString(url, callback, variable) {
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          this[variable] = xhr.responseText.replace(/@font-face{[^}]+}/, "");
          callback();
        }
      };
      xhr.open("GET", url);
      xhr.send();
    },
    // 获取到系列色
    // 颜色这块别问了，问就是不知道
    getThemeCluster(theme) {
      const tintColor = (color, tint) => {
        let red = parseInt(color.slice(0, 2), 16);
        let green = parseInt(color.slice(2, 4), 16);
        let blue = parseInt(color.slice(4, 6), 16);

        if (tint === 0) {
          return [red, green, blue].join(",");
        } else {
          red += Math.round(tint * (255 - red));
          green += Math.round(tint * (255 - green));
          blue += Math.round(tint * (255 - blue));

          red = red.toString(16);
          green = green.toString(16);
          blue = blue.toString(16);

          return `#${red}${green}${blue}`;
        }
      };

      const shadeColor = (color, shade) => {
        let red = parseInt(color.slice(0, 2), 16);
        let green = parseInt(color.slice(2, 4), 16);
        let blue = parseInt(color.slice(4, 6), 16);

        red = Math.round((1 - shade) * red);
        green = Math.round((1 - shade) * green);
        blue = Math.round((1 - shade) * blue);

        red = red.toString(16);
        green = green.toString(16);
        blue = blue.toString(16);

        return `#${red}${green}${blue}`;
      };

      const clusters = [theme];
      for (let i = 0; i <= 9; i++) {
        clusters.push(tintColor(theme, Number((i / 10).toFixed(2))));
      }
      clusters.push(shadeColor(theme, 0.1));
      return clusters;
    },
  },
};
</script>
```

## API

### Attributes

| 参数        | 说明         | 类型        | 可选值        | 默认值  |
|-------------|--------------|-------------|--------------|---------|
| defaultColor | 默认主题 | String | - | - |
| size | 尺寸大小 | String | medium、small、mini | - |
| isCache | 是否开启缓存 | Boolean | - | false |
| url | 加载资源地址 | String | - | https://unpkg.com/element-ui@${version}/lib/theme-chalk/index.css |



### Methods
| 方法名        | 说明         | 参数     |
|---------------|--------------|---------|
| clearCache | 清楚缓存 | - |

## 结语

good good study!!!