---
#title: 基于Webpack构建Vue开发环境
#date: 2020-12-16 16:11:00
#tags:
#- Vue
#- Webpack
#categories:
#- Webpack
index_img: /img/webpack-vue.jpeg

title: 基于Webpack构建Vue开发环境
date: '2020-12-16'
tags: ['Vue']
draft: false
summary: '基于Webpack构建Vue开发环境'
authors: ['default']
---

### 搭建 webpack 环境

[webpack 官网](<(https://webpack.docschina.org/guides/getting-started/)>)

## 基本安装

首先我们创建一个目录，初始化 npm，然后 [在本地安装 webpack](https://webpack.docschina.org/guides/installation#local-installation)，接着安装 [webpack-cli](https://github.com/webpack/webpack-cli)（此工具用于在命令行中运行 webpack）：

```sh
mkdir webpack-demo
cd webpack-demo
npm init -y
npm install webpack webpack-cli --save-dev
```

创建以下目录结构、文件和内容：

- **project**

```
  webpack-demo
  |- package.json
+ |- index.html
+ |- favicon.ico
+ |- /src
+   |- main.js
```

使用到的

```
webpack-merge
eslint-webpack-plugin
html-webpack-plugin //   npm i --save-dev html-webpack-plugin
mini-css-extract-plugin
@babel/preset-env
@babel/preset-react
webpack-dev-server  // 使用devServer  serve命令
progress-webpack-plugin  //构建,进度显示百分比%
happypack  //加速构建
npm install -D babel-loader @babel/core @babel/preset-env webpack  // babel编译器

eslint-plugin-react
=>
```

### vue 中的 loader 插件引用

```sh
npm install -D vue-loader vue-template-compiler
```

### webpack 配置

```js
// webpack.config.js
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  module: {
    rules: [
      // ... 其它规则
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin(),
  ],
}
```

### 配置 sass

例如，为了通过 Sass/SCSS 编译我们的 `<style>` 标签：

```sh
npm install -D sass-loader node-sass
```

webpack 配置

```js
module.exports = {
  module: {
    rules: [
      // ... 忽略其它规则

      // 普通的 `.scss` 文件和 `*.vue` 文件中的
      // `<style lang="scss">` 块都应用它
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  // 插件忽略
}
```

现在，除了能够 `import 'style.scss'`，我们还可以在 Vue 组件中使用 SCSS：

```html
<style lang="scss">
  /* 在这里撰写 SCSS */
</style>
```

注意 `sass-loader` 会默认处理不基于缩进的 `scss` 语法。为了使用基于缩进的 `sass` 语法，你需要向这个 loader 传递选项

```js
// webpack.config.js -> module.rules
{
  test: /\.sass$/,
  use: [
    'vue-style-loader',
    'css-loader',
    {
      loader: 'sass-loader',
      options: {
        indentedSyntax: true,
        // sass-loader version >= 8
        sassOptions: {
          indentedSyntax: true
        }
      }
    }
  ]
}
```

## Babel

```
npm install -D babel-core babel-loader
```

配置 webpack

```js
// webpack.config.js -> module.rules
{
  test: /\.js?$/,
  loader: 'babel-loader'
}
```

## Pub

模板的处理会稍微有些不同，因为绝大多数 webpack 的模板类 loader，诸如 `pug-loader`，会返回一个模板函数而不是一个编译好的 HTML 字符串。所以我们需要使用一个返回原始的 HTML 字符串的 loader，例如 `pug-plain-loader`，而不是使用 `pug-loader`。

```sh
npm install -D pug pug-plain-loader
```

```js
// webpack.config.js -> module.rules
{
  test: /\.pug$/,
  loader: 'pug-plain-loader'
}
```

然后你可以写：

```html
<template lang="pug"> div h1 Hello world! </template>
```

## stylelint

[stylelint](https://stylelint.io/) 支持在 Vue 单文件组件的样式部分的代码校验。

另一个选项是使用 [stylelint-webpack-plugin](https://github.com/webpack-contrib/stylelint-webpack-plugin):

```sh
npm install -D stylelint-webpack-plugin
```

请确保它是作为一个插件运用的:

```js
// webpack.config.js
const StyleLintPlugin = require('stylelint-webpack-plugin')
module.exports = {
  // ... 其它选项
  plugins: [
    new StyleLintPlugin({
      files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}'],
    }),
  ],
}
```
