---
#title: hexo博客搭建
#date: 2019-04-16 09:11:00
index_img: /img/Hexo-Cover.png
#tags:
#- blog
#categories:

title: hexo博客搭建
date: '2019-04-16'
tags: ['blog']
draft: false
summary: 'Mac环境下基于hexo+github搭建个人博客'
authors: ['default']
---

# Mac 环境下基于 hexo+github 搭建个人博客

## `1安装HomeBrew`

```text
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

查看是否安装成功: brew --version

### 安装 git

用 brew 安装 Git,如果已安装,则忽略该步骤

```
git --version //查看是否安装成功
```

### 使用 brew 安装 nvm

`brew install nvm`

### 创建.nvm 文件

`mkdir ~/.nvm`

在 ~/.bash_profile 或者 ~/.zshrc 中添加下面命令

```
export NVM_DIR="$HOME/.nvm"
[ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"  # This loads nvm
[ -s "/usr/local/opt/nvm/etc/bash_completion" ] && . "/usr/local/opt/nvm/etc/bash_completion"  # This loads nvm bash_completion
```

source 一下

```
Source ~/.zshrc
```

### 4.安装 node

通过 nvm 安装 node

```text
nvm ls-remote                   #查看node所有版本
nvm install v12.12.0            #安装你要的版本
nvm use v12.12.0                #使用指定的版本
nvm alias default v12.12.0      #默认版本，每次打开终端，都自动使用该版本
```

安装是否成功：node -v 、npm -v

查看 nvm 使用帮助:

```
nvm
```

### 5.安装配置 Hexo

###### 利用 npm 命令安装

```
npm install -g hexo-cli
```

###### 初始化 Hexo

创建文件夹来存放博客 `mkdir [folder]`

```
mkdir MyHexoBlog
```

###### hexo 初始化

```
hexo init MyHexoBlog
```

### 本地启动

```
hexo g
hexo s
```

### 本地启动效果如下:

```
启动成功后，浏览器访问： http:localhost:4000
```

### ![image-20210515161040198](/Users/xiekecheng/Library/Application Support/typora-user-images/image-20210515161040198.png)

### hexo 常用命令如下

```
#服务器
hexo init                       #初始化hexo
hexo g                          #等于hexo generate =>生成静态页面到public目录
hexo s                          #等于hexo server =>启动hexo服务，通过4000端口访问。
hexo n 文章名称                  #等于hexo new "文章名称" =>新建文章。
hexo p                          #等于hexo publish
hexo d                          #等于hexo deploy =>目录部署到GitHub。

hexo clean                      #清除缓存，网页正常情况下忽略此条命令
hexo generate --watch           #监视文件变动

hexo d -g                       #生成部署合并为一条命令
```

### 6.关联 github

github.com 申请账户

创建仓库 Repository name: `xiekecheng.github.io` 与用户名一致

### 安装自动部署插件

```
npm install hexo-deployer-git --save
```

#### 发布到 Github 中

修改 \_config.yml 文件 配置

```
# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
  type: git
  branch: master
  repo: https://github.com/gallenzhang/gallenzhang.github.io.git
```

生成静态网页并部署

```
hexo d -g
```

### 错误提示

如果部署的时候出现 "ERROR Deployer not found: git" 错误提示，那是因为没有安装`hexo-deployer-git`插件。输入下面的命令，安装下插件重新试一下就好了。

```
npm install hexo-deployer-git --save
```

### 7.通过 Github 网址来访问

浏览器中输入 xiekecheng.github.io 可以看到已部署成功

![image-20210515170312113](/Users/xiekecheng/Library/Application Support/typora-user-images/image-20210515170312113.png)

### 8.博文参考

hexo 搭建参考于`https://zhuanlan.zhihu.com/p/192376753`

:smile:
