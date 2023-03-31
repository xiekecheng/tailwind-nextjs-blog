---
#title: JS中call、bind、apply使用方法
#date: 2021-10-05 13:24:00
#categories: JavaScript
index_img: https://raw.githubusercontent.com/xiekecheng/ImageStorage/main/20210713124713.png

title: JS中call、bind、apply使用方法
date: '2021-10-05'
tags: ['blog']
draft: false
summary: 'JS中call、bind、apply使用方法'
authors: ['default']
---

## JS 中 call、bind、apply 使用方法

**call 是函数的方法**，使用 fn.call 可以调用 fn 函数，和 fn() 是一样的，fn.call(‘改变 this 指向的对象’,给 fn 函数传参数)

apply('改变 this 的指向',使用==数组==给函数传参)

bind('改变 this 的指向',给函数传递参数) 不会调用该函数

call('改变 this 的指向',给函数传参) ，最后调用该函数

## Funciton 中 prototype 中的属性和方法

### Instance properties

Fcuntion.prototype.arguments

Fcuntion.prototype.caller

Fcuntion.prototype.displayName

Fcuntion.prototype.length

Fcuntion.prototype.name

### Instance mehods

Fcuntion.prototype.apply

Fcuntion.prototype.bind

Fcuntion.prototype.call

Fcuntion.prototype.toString
