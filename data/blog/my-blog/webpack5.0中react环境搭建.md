---
#title: 基于Webpack5.0搭建React环境
#date: 2021-03-16 16:11:00
#tags:
#- Webpack
#- React
#categories:
#- Webpack
index_img: /img/webpack-react.png

title: 基于Webpack5.0搭建React环境
date: '2021-03-16'
tags: ['Webpack', 'React']
draft: false
summary: '基于Webpack5.0搭建React环境'
authors: ['default']
---

## Webpack 介绍

常识: 目前市场还在使用 v4

趋势: v5 简单很多, 性能更好 ; vite 呼声很高

相关: rollup, gulp....

知识: 入口, 出口, loaders, plugins, WDS, HMR, 生产与开发分离

扩展: 工程层面的性能( 代码打包优化, 构建速度优化 )

### 项目文件结构

```
react-cnode
├─ config
│  ├─ webpack.common.js
│  ├─ webpack.dev.js
│  └─ webpack.prod.js
├─ public
│  ├─ favicon.ico
│  └─ index.html
├─ src
│  ├─ App.jsx
│  └─ main.js
├─ README.md
├─ babel.config.json
├─ package-lock.json
└─ package.json

```

### 需要安装的包

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
```

##### App.jsx

```jsx
import React from 'react'
function App() {
  return (
    <div>
      <h1>hello webpack</h1>
    </div>
  )
}

export default App
```

##### mian.js

```js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'

ReactDOM.render(<App></App>, document.getElementById('app'))
```

##### config/webpack.prod.js

```js
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      // css文件处理
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      // 图片压缩
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {},
          },
        ],
      },
    ],
  },
  plugins: [
    // css文件抽离 - 生产环境
    new MiniCssExtractPlugin({
      filename: './static/css/[name].[chunkhash].css',
      chunkFilename: '[id].[chunkhash].css',
    }),
    new HtmlWebpackPlugin({
      title: 'development',
      template: './public/index.html',
      favicon: './public/favicon.ico',
      scriptLoading: 'blocking',
      inject: 'body',
    }),
  ],
  //   treeShaking
})
```

##### webpack.dev.js

```js
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public',
    port: 9002,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'development',
      template: './public/index.html',
      favicon: './public/favicon.ico',
      // scriptLoading: "blocking",
      // inject: "body",
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx'],
      exclude: 'node_modules',
      threads: false,
    }),
  ],
  module: {
    rules: [
      // css文件解析
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      // 图片解析
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
})
```

##### webpack.common.js

```js
const path = require('path')
const ProgressPlugin = require('progress-webpack-plugin')
const HappyPack = require('happypack')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const {
//     VueLoaderPlugin
// } = require('vue-loader')

module.exports = {
  entry: {
    // 文件抽离
    'react-vendors': ['react', 'react-dom'],
    app: {
      // import: './src/index.js',
      import: path.resolve(__dirname, '../src/main.js'),
      dependOn: 'react-vendors',
    },
  },
  output: {
    // 要使用相对路径
    filename: './static/js/[name].[chunkhash].js',
    // filename: './static/js/[name].js',

    path: path.resolve(__dirname, '../dist'),
    // 外部服务器serve
    // publicPath: '/',
    clean: true,
    // charset:true
    chunkFilename: '[id].js',
  },
  plugins: [
    // new BundleAnalyzerPlugin()
    new HappyPack({
      loaders: ['babel-loader'],
    }),
    new ProgressPlugin(true),
  ],
  module: {
    rules: [
      // 开启多线程来加载并编译.js代码
      {
        test: /\.(js|jsx)$/i,
        use: [
          {
            loader: 'happypack/loader',
            options: {
              threads: 3,
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
}
```

##### package.json

用到的依赖包

```json
  "devDependencies": {
    "@babel/core": "^7.15.0",
    "@babel/plugin-proposal-decorators": "^7.14.5",
    "@babel/plugin-syntax-dynamic-import": "^7.8.3",
    "@babel/preset-env": "^7.15.0",
    "@babel/preset-react": "^7.14.5",
    "babel-loader": "^8.2.2",
    "eslint": "^7.32.0",
    "eslint-plugin-react": "^7.24.0",
    "eslint-plugin-react-hooks": "^4.2.0",
    "eslint-webpack-plugin": "^3.0.1",
    "happypack": "^5.0.1",
    "html-webpack-plugin": "^5.3.2",
    "progress-webpack-plugin": "^1.0.12",
    "sass": "^1.37.5",
    "webpack": "^5.48.0",
    "webpack-cli": "^4.7.2",
    "webpack-dev-server": "^3.11.2"
  },
  "dependencies": {
    "@loadable/component": "^5.15.0",
    "axios": "^0.21.1",
    "css-loader": "^6.2.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "style-loader": "^3.2.1"
  }
```

##### package.json 添加脚本命令 start 开发环境 build 是构建

```
    "start": "webpack serve --open --config config/webpack.dev.js",
    "build": "webpack --config config/webpack.prod.js"
```

##### babel 配置文件 babel.config.json

```json
{
  "presets": [
    ["@babel/preset-react", {}],
    ["@babel/preset-env", {}]
  ],
  "plugins": [
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ],
    ["@babel/plugin-syntax-dynamic-import"]
  ]
}
```

##### eslint 配置

- .eslintrc.js

```
// 解决ESLint报错常用的五种方案
// 1、找到eslint的配置文件，修改eslint规则
// 2、使用eslint注释的方式，临时关闭对代码的检测
// 3、在webpack中找到eslint的插件或eslint-loader进行exclude
// 4、使用.eslintignore临时忽略对代码的检测
// 5、老老实实地把eslint错误的改好（建议的做法）

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  plugins: [ "react", "react-hooks" ],
  // 指定检测选项
  parserOptions: {
      ecmaVersion: 6,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true
      }
  },
  env: {
    es6: true,
    browser: true,
    node: true
  },
  // 用户自定义修改ESLint规则
  // ESLint检测代码有三种检测级别：error=2红色报错，warn=1黄色警告，off=0关闭这条规则。
  rules: {
    // "semi": 0,
    // "semi": "off",
    // "no-console": "error"
    "react/prop-types": "off",
    "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
    "react-hooks/exhaustive-deps": "warn" // 检查 effect 的依赖
  }
}

```
