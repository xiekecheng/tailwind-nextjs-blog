---
#title: npm切换镜像源
#date: 2021-01-12 06:11:00
#tags: npm
index_img: /img/npm.png

title: npm切换镜像源
date: '2021-01-12'
tags: ['npm']
draft: false
summary: '平时需要使用npm install下载工具时,下载的镜像源在国外,如果想要获得更快的下载速度,不妨可以将npm镜像源切换至国内的淘宝镜像源,这样可以大大提高下载速度'
authors: ['default']
---

# npm 切换镜像源常用命令

平时需要使用 npm install 下载工具时,下载的镜像源在国外,如果想要获得更快的下载速度,不妨可以将 npm 镜像源切换至国内的淘宝镜像源,这样可以大大提高下载速度,下面列出切换镜像源的命令:

查看当前镜像源

```
$ npm config get registry
=> https://registry.npmjs.org/
```

切换 npm 镜像源到淘宝

```
$ npm config set registry http://registry.npm.taobao.org/
// 使用命令 npm config get registry查看即可确认是否已更换至淘宝镜像源
$ npm config get registry
=> http://registry.npm.taobao.org/
```

切换回 npm 默认镜像源

```
$ npm config set registry https://registry.npmjs.org/
// 使用命令 npm config get registry查看即可确认是否已更换至npm默认镜像源
$ npm config get registry
=> http://registry.npm.taobao.org/
```

可以单独设置每次使用 npm 命令的镜像源,只需要添加如下参数即可:

```
$ npm --registry https://registry.npm.taobao.org install
```

使用 npx 工具切换淘宝镜像源:

```
$ npx nrm use taobao
```

切换回默认镜像源:

```
$ npx nrm use npm
```
