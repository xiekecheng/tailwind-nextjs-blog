---
#title: Vue的Vue-Router集成与使用
#date: 2019-03-16 06:11:00
#tags: Vue-Router
#categories:
#- Vue
index_img: /img/vue-router.jpeg

title: Vue的Vue-Router集成与使用
date: '2019-03-16'
tags: ['Vue']
draft: false
summary: 'Vue的Vue-Router集成与使用'
authors: ['default']
---

# Vue-Router 集成与使用

### 安装 Vue-Router

```sh
npm install router -S
```

### 在 Vue 中导入 Vue-Router

在脚手架环境中与 main.js 同级目录下新建 router.js ,添加以下代码

```
import Vue from 'vue'
import VueRouter from 'vue-router'
// 注册并使用第三方插件  这样一位,在当前Vue环境中多了以下的API
// 1. 多了两个内置组件: <router-link> , <router-view>
// 2. 在组件实例对象上多了两个内置API: $route  $router
Vue.use(VueRouter)
```

路由跳转

```js
// 字符串
router.push('home')

// 对象
router.push({ path: 'home' })

// 命名的路由
router.push({ name: 'user', params: { userId: '123' } })

// 带查询参数，变成 /register?plan=private
router.push({ path: 'register', query: { plan: 'private' } })
```

原生 BOM 路由跳转

```
// 前进
history.forward()
// 后退
history.back()


// 刷新
history.go(0) 或者 history.go() // 相当于刷新
history.go(-1)  // 相当于 history.back()
history.go(1) // history.forward()

```
