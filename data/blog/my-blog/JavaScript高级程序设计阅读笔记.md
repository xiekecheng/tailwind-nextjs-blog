---
#title: JavaScript高级程序设计阅读笔记
#date: 2023-01-07 18:11:00
#tags:
#categories:
index_img: /img/book.jpg

title: JavaScript高级程序设计阅读笔记
date: '2023-01-07'
tags: ['JavaScript']
draft: false
summary: 'JavaScript高级程序设计阅读笔记'
authors: ['default']
---

## 垃圾回收机制

#### 1.标记清理

原理:在上下文中标记一个变量是否在上下文中,清理不在上下文中的变量

#### 2.引用计数

原理: 标记每个变量的引用次数,当次数为 0 时,清理该变量,

问题: 如果两个变量相互引用,会导致无法回收,进而导致内存泄露

总结: 目前主流垃圾回收机制是使用标记清理

# 基本引用类型

## Date

创建日期对象,使用 new 操作符来调用 Date 构造函数

```
let now = new Date

Date.now()
```

日期格式化方法 Date 类型有几个专门用于格式化日期的方法，它们都会返回字符串：

> toDateString()显示日期中的周几、月、日、年（格式特定于实现）；
>
> toTimeString()显示日期中的时、分、秒和时区（格式特定于实现）；
>
> toLocaleDateString()显示日期中的周几、月、日、年（格式特定于实现和地区）；
>
> toLocaleTimeString()显示日期中的时、分、秒（格式特定于实现和地区）；
>
> toUTCString()显示完整的 UTC 日期（格式特定于实现）。 这些方法的输出与 toLocaleString()和 toString()一样，会因浏览器而异。因此不能用于在 用户界面上一致地显示日期。

## RegExp

ECMAScript 通过 RegExp 类型支持正则表达式。正则表达式使用类似 Perl 的简洁语法来创建：

```
let expression = /pattern/flags;
```

> g：全局模式，表示查找字符串的全部内容，而不是找到第一个匹配的内容就结束
>
> i：不区分大小写，表示在查找匹配时忽略 pattern 和字符串的大小写。
>
> m：多行模式，表示查找到一行文本末尾时会继续查找。
>
> y：粘附模式，表示只查找从 lastIndex 开始及之后的字符串。
>
> u：Unicode 模式，启用 Unicode 匹配。
>
> s：dotAll 模式，表示元字符.匹配任何字符（包括\n 或\r）。
