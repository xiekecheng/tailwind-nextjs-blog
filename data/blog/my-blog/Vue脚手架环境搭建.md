---
#title: Vue中脚手架环境搭建
#date: 2018-06-16 13:11:00
#tags: typescript
#categories:
#- Vue
index_img: https://raw.githubusercontent.com/xiekecheng/ImageStorage/main/20210713090543.png

title: Vue中脚手架环境搭建
date: '2018-06-16'
tags: ['typescript']
draft: false
summary: 'Vue中脚手架环境搭建'
authors: ['default']
---

# 脚手架环境搭建

### 安装@vue/cli

```shell
// 全局安装脚手架工具
npm install @vue/cli -g
```

### 创建项目

```shell
// 命令行创建项目
vue create 项目名
vue create vue-project
```

可以选择 Vue2.0 和 3.0 版本,这里我们选择 Vue 2.0 版本,按回车即可

![image-20210713081249368](https://raw.githubusercontent.com/xiekecheng/ImageStorage/main/image-20210713081249368.png)

创建过程中会下载相关依赖插件,等待下载完成即可

![image-20210713081604161](https://raw.githubusercontent.com/xiekecheng/ImageStorage/main/image-20210713081604161.png)

下载创建完成会有如下提示

![image-20210713081632693](https://raw.githubusercontent.com/xiekecheng/ImageStorage/main/image-20210713081632693.png)

下载完成创建的目录结构:

![image-20210713081811328](https://raw.githubusercontent.com/xiekecheng/ImageStorage/main/image-20210713081811328.png)

## 在 Vue 中集成 axios 请求工具

安装 axios

```shell
npm install axios -S
```

在 main.js 中引入 axios

```js
// 引入axios
import axios from 'axios'
// 引入之后可以在组件中 使用this.$http  请求数据
Vue.prototype.$http = axios
```

之后可以在组件中使用 axios 进行请求,具体的使用方式可参考 [axios 使用文档](https://github.com/axios/axios)

![image-20210713082423650](https://raw.githubusercontent.com/xiekecheng/ImageStorage/main/image-20210713082423650.png)

![image-20210713082423650](/img/image-20210713082423650.png)

![image-20210713082423650](/Users/xiekecheng/Documents/HexoBlog/HexoBlog/public/img/image-20210713082423650.png)
