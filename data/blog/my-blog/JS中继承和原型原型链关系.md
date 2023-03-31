---
#title: 继承和原型、原型链
#date: 2021-9-30 10:11:00
#tags:
#categories:
#- Vue
index_img: /img/webpack-vue.jpeg

title: 继承和原型、原型链
date: '2021-9-30'
tags: ['JavaScript']
draft: false
summary: 'Mac环境下基于hexo+github搭建个人博客'
authors: ['default']
---

## 继承

### 使用 ES6 中的 class 实现继承，可以继承父类属性和方法

```
class Person {
	constructor(name, age) {
		this.name = name
		this.age = age
	}
	introduce(name, age, desc) {
		console.log(`我是${this.name},我今年${this.age}岁了，${this.desc}`)
	}
}


class Student extends Person {
	constructor(name, age, desc) {
		// 需要使用super调用父类构造方法才可以在构造函数中使用this
		super(name, age)
		this.desc = desc
	}


}

const student = new Student('小明', 18, '小明是个好学生')
student.introduce()
```

### 原型，原型链

对象中有 `__proto__` ,当前对象没有的属性或方法，会从原型链中去找

```

```
