---
#title: Docker常用命令
#date: 2019-07-14 19:24:00
#tags:
#- web
#categories:
#- web
index_img: /img/dockericon.jpeg

title: Docker常用命令
date: '2019-07-14'
tags: ['web']
draft: false
summary: 'Mac环境下基于hexo+github搭建个人博客'
authors: ['default']
---

## learn docker

## 帮助命令

`docker version` 查看 docker 客户端和服务的版本

`docker info` 查看 docker 的基本信息,例如有多少容器,多少镜像,docker 个目录等

`docker —help` 查看 docker 的帮助信息

## 镜像命令

1. `docker images` 查看本地主机上的所有镜像

2. `docker rmi` 删除本地的镜像, 可以加上`-f` 参数进行强制删除

   `$ docker rmi -f tomcat`

3. `docker search` 根据镜像名称搜索远程仓库中的镜像

4. `docker pull` 搜索到某个镜像之后可以从远程拉取镜像,类似 github 的 pull 功能

## 容器命令

1. `docker run [OPTIONS] IMAGE [COMMAND] [ARG...]` 可以基于某个镜像运行一个容器

> `-d`:启动容器,并且后台运行
> `-i`:以交互模式运行容器
> `-t`:为容器重新分配一个伪输入终端
> `-P`:随机端口映射
> `-p`:指定端口映射
> `-v`:建立宿主机与容器目录的同步
> `--name="myTomcat"`为容器指定一个名称(如果不指定,则有个随机的名字)

1. 进入容器后可以通过`exit`命令退出容器
2. `docker ps` 通过该命令可查看正在运行的容器信息
