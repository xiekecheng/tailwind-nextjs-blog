---
#title: 你不知道的JavaScript读书笔记上(第一部分)
#date: 2021-10-03 17:43:00
#sticky: 100
#categories: JavaScript
index_img: https://raw.githubusercontent.com/xiekecheng/ImageStorage/main/20210713124713.png

title: 你不知道的JavaScript读书笔记上(第一部分)
date: '2021-10-03'
tags: ['JavaScript']
draft: false
summary: 'Mac环境下基于hexo+github搭建个人博客'
authors: ['default']
---

# 第二部分 this 和对象原型

## 关于 this

### 1.1 为什么要用 this

this 可以指代一个对象

## 对象

### 语法

定义对象的语法有两种形式，声明形式和构造形式

```js
// 声明形式:
var myObj = {
  name: 'jack',
  age: 18,
}

// 构造形式
var myObj = new Object()
myObj.name = 'jack'
myObj.age = 18
```

### 类型

对象是 JavaScript 的基础，在 JavaScript 中一共有六种主要类型

- string
- number
- boolean
- null
- undefined
- object

### 内置对象

- String
- Number
- Boolean
- Object
- Function
- Array
- Date
- RegExp
- Error

### 内容

在对象中，属性名永远是字符串，如果使用 string（字面量）以外的其他值作为属性名，他会自动转换成一个字符串

### 复制对象

#### 浅拷贝

使用 Object.asign 实现浅拷贝

```js
const aObj = {
  name: 'jack',
  age: 18,
}

const clone = Object.assign({ desc: '我是喵喵' }, aObj)
console.log(clone)
// { desc: '我是喵喵', name: 'jack', age: 18 }
```

使用 ...拓展运算符实现浅拷贝

```js
const aObj = {
  name: 'jack',
  age: 18,
}
const clone = { hobby: '睡觉', ...aObj }
console.log(clone)
// { hobby: '睡觉', name: 'jack', age: 18 }
```

### 不变性

有时你会希望属性或者对象是不可改变的，在 ES5 可以通过多种方式来实现。

很重要的一点是，所有的方法创建的都是浅不变形，也就是说，它们只会影响目标对象和 它的直接属性。如果目标对象引用了其他对象(数组、对象、函数，等)，其他对象的内 容不受影响，仍然是可变的:

#### 1. 对象常量

使用 writeable:false 和 configurble:false 可以创建一个真正的常量属性，不可修改，不可配置

```js
var obj = {}
Object.asign(obj, 'favorite_number', {
  value: 13,
  writable: false,
  configurable: false,
})
```

#### 2. 禁止拓展

使用 Object.preventExtensions(...) 可以禁止一个对象添加新属性并保留已有属性

```js
var obj = {
  name: 'jack',
}
// 保留原有属性,禁止拓展属性
Object.preventExtensions(obj)
obj.age = 33
console.log(obj)
// { name: 'jack' }
```

#### 3. 密封

Object.seal(...)会创建一个‘密封’的对象，这个方法实际上是会调用 Object.preventExtensions,并把所有属性标记为 configurable:false，被密封之后，不能添加新属性，也不能重新配置或删除任何现有属性（但是可以修改属性的值）

#### 4. 冻结

Object.freeze(..) 会创建一个冻结对象，这个方法实际上会在一个现有对象上调用 Object.seal(..) 并把所有“数据访问”属性标记为 writable:false，这样就无法修改它们的值。
