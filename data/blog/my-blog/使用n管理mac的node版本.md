---
#title: 使用n管理mac的node版本
#date: 2019-07-14 19:24:00
#categories: Node
index_img: /img/node.jpeg

title: 使用n管理mac的node版本
date: '2019-07-14'
tags: []
draft: false
summary: '在mac电脑开发环境中，node在不同版本可能会造成一些开发问题，此时，需要一个能够切换node版本的工具'
authors: ['default']
---

在 mac 电脑开发环境中，node 在不同版本可能会造成一些开发问题，此时，需要一个能够切换 node 版本的工具，在 mac 中，常用管理 node 的工具有 nvm 和 n，下面介绍使用 n 来管理 mac 电脑中的 nodejs 版本

#### 1、安装

使用 npm 命令安装 n，如不清楚 npm 的使用，查看[nodeJS 官网](https://nodejs.org/en/download/)和[npm 快速入门](https://www.npmjs.cn/getting-started/installing-node/)

```
npm install -g n
```

#### 2、安装指定 node 版本

```
n 12.1.0  // 下载安装node 12.1.0
n lastest // 下载安装node最新版本
n lts //下载安装node 长期维护版本
```

#### 3、切换 node 版本号,按箭头选择版本，按回车切换到版本号

```
n  // 列出安装的node版本

    node/10.14.1
  ο node/16.9.0
Use up/down arrow keys to select a version, return key to install, d to delete, q to quit
```

#### 4、删除指定 node 版本

```
// 删除node中12.1.0版本
n rm 12.1.0
//删除当前版本外的其他版本
n prune
// 卸载当前已安装的node
n uninstall
```

#### 5、查看下载的 node 版本列表

```
n ls

node/10.14.1
node/16.9.0
```

#### 6、修改 n 获取 node 的镜像源

因为 n 获取 node 的源路径是 node 官网，该服务器部署在国外，会造成访问慢的问题，此时我们可以将 n 的镜像源设置为淘宝镜像，命令如下：

```
export N_NODE_DOWNLOAD_MIRROR=https://npm.taobao.org/mirrors/node
```
