---
#title: eggjs配置跨域
#date: 2022-05-19 21:27:00
#tags:
#- web
#categories:
#- web
index_img: /img/dockericon.jpeg

title: eggjs配置跨域
date: '2022-05-19'
tags: ['web']
draft: false
summary: 'eggjs配置跨域'
authors: ['default']
---

##### 1. 安装依赖包

```sh
npm i egg-cors --save
```

##### 2.在 plugin.js 中配置开启 cors

```js
exports.cors = {
  enable: true,
  package: 'egg-cors',
}
```

##### 3.在 config.default.js 配置跨域

```js
// 配置跨域
exports.security = {
  csrf: {
    enable: false,
    ignoreJSON: true,
  },
  domainWhiteList: ['http://localhost:8080'], //配置跨域白名单 不配置domainWhiteList则是对所有域名都可以跨域
}
exports.cors = {
  origin: '*',
  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
}
```
