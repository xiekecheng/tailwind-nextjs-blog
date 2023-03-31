---
#title: Taro项目创建微信小程序
#date: 2020-02-16 15:11:00
#tags:
#- Taro
#- React
#categories:
#- Taro
index_img: /img/taro.webp

title: Taro项目创建微信小程序
date: '2020-02-16'
tags: []
draft: false
summary: 'Taro项目创建微信小程序'
authors: ['default']
---

### 安装及使用

#### 安装

Taro 项目基于 node，需要 node 环境>12.0.0

#### CLI 工具安装

```
# 使用 npm 安装 CLI
$ npm install -g @tarojs/cli

# OR 使用 yarn 安装 CLI
$ yarn global add @tarojs/cli

# OR 安装了 cnpm，使用 cnpm 安装 CLI
$ cnpm install -g @tarojs/cli
```

#### 查看 Taro 版本信息

```
npm info @tarojs/cli
```

### 项目初始化

使用命令创建项目模板

```
taro init myApp
```

在 package.json 中配置 start 命令

```
   "start": "npm run dev:weapp"
```

#### 安装 Taro UI

```
npm install taro-ui
注意 taroUI的库版本要与taro的相同，比如taro3.0要安装taroUI3.x的版本
```

由于引用 `node_modules` 的模块，默认不会编译，所以需要额外给 H5 配置 `esnextModules`，在 taro 项目的 `config/index.js` 中新增如下配置项：

```
h5: {
  esnextModules: ['taro-ui']
}
```

全局引用样式

```
import 'taro-ui/dist/style/index.scss' // 引入组件样式 - 方式一

```

### 路由

taro 的路由在/src/app.config.js 中配置
