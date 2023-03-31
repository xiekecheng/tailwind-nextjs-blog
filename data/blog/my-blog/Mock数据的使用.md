---
#title: Mock数据简介
#date: 2020-03-19 10:11:00
#tags: npm
index_img:

title: Mock数据简介
date: '2020-03-19'
tags: ['mock']
draft: false
summary: 'Mock数据简介'
authors: ['default']
---

# 安装

## Node (CommonJS)

```
# 安装
npm install mockjs
// 使用 Mock
var Mock = require('mockjs')
var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
    }]
})
// 输出结果
console.log(JSON.stringify(data, null, 4))
```

# 语法规范

Mock.js 的语法规范包括两部分：

1. 数据模板定义规范（Data Template Definition，DTD）
2. 数据占位符定义规范（Data Placeholder Definition，DPD）

## 数据模板定义规范 DTD

数据模板的属性由 3 部分构成：属性名、生成规则、属性值

```
// name 属性名
// rule 生成规则
// value 属性值
'name'|rule:value

```

注意:

- 属性名和生成规则之间用竖线|分隔
- 生成规则是可选的
- 生成规则有 7 种格式

  1. `'name'|min-max:value`
  2. `'name'|count:value`
  3. `'name'|'min-max.dmin-dmax':value`
  4. `'name|min-max.dcount': value`
  5. `'name|count.dmin-dmax': value`
  6. `'name|count.dcount': value`
  7. `'name|+step': value`

- **生成规则的含义需要依赖属性值的类型来确定**
- 属性值可以有`@占位符`

- 属性值还指定了最终值的初始值和类型

生成规则和示例

1. 属性值是字符串 String

- `'name'|min-max:string`

通过重复`string`生成一个字符串，重复次数大于等于`min`，小于等于`max`

2. 属性值是数字 Number

3.

# Mock.Random 拓展

Mock.random 中的方法与数据模板的@占位符是对应的，另外还可以为 Math.Random 拓展方法

```
Random.extend({
    constellations: ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座'],
    constellation: function(date){
        return this.pick(this.constellations)
    }
})
Random.constellation()
// => "水瓶座"
Mock.mock('@CONSTELLATION')
// => "天蝎座"
Mock.mock({ constellation: '@CONSTELLATION'})
// => { constellation: "射手座" }
```

# Mock 语法

### Mock.mock( rurl?, rtype?, template|function(options) )

根据数据模板生成模拟数据。

- **Mock.mock( template )**

  根据数据模板生成模拟数据。

- **Mock.mock( rurl, template )**

  记录数据模板。当拦截到匹配 `rurl` 的 Ajax 请求时，将根据数据模板 `template` 生成模拟数据，并作为响应数据返回。

- **Mock.mock( rurl, function(options) )**

  记录用于生成响应数据的函数。当拦截到匹配 `rurl` 的 Ajax 请求时，函数 `function(options)` 将被执行，并把执行结果作为响应数据返回。

- **Mock.mock( rurl, rtype, template )**

  记录数据模板。当拦截到匹配 `rurl` 和 `rtype` 的 Ajax 请求时，将根据数据模板 `template` 生成模拟数据，并作为响应数据返回。

- **Mock.mock( rurl, rtype, function(options) )**

  记录用于生成响应数据的函数。当拦截到匹配 `rurl` 和 `rtype` 的 Ajax 请求时，函数 `function(options)` 将被执行，并把执行结果作为响应数据返回。

**参数的含义和默认值**如下所示：

- **参数 rurl**：可选。表示需要拦截的 URL，可以是 URL 字符串或 URL 正则。例如 `/\/domain\/list\.json/`、`'/domian/list.json'`。
- **参数 rtype**：可选。表示需要拦截的 Ajax 请求类型。例如 `GET`、`POST`、`PUT`、`DELETE` 等。
- **参数 template**：可选。表示数据模板，可以是对象或字符串。例如 `{ 'data|1-10':[{}] }`、`'@EMAIL'`。
- **参数 function(options)**：可选。表示用于生成响应数据的函数。
- **参数 options**：指向本次请求的 Ajax 选项集。
