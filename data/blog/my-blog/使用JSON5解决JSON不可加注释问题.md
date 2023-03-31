---
#title: 使用JSON5解决JSON不可加注释问题
#date: 2021-10-20 10:36:00
#categories:
#tags:
#- JSON

title: 使用JSON5解决JSON不可加注释问题
date: '2021-10-20'
tags: ['blog']
draft: false
summary: '使用JSON5解决JSON不可加注释问题'
authors: ['default']
---

在 JSON 定义中，对 KEY 都需要加双引号“”，并且不可以添加注释，那么当我们想要给 JSON 字符串添加注释，并且 key 不用加上双引号，这样比较符合我们的书写习惯，那么该如何解决呢？这时可以使用到 JSON5

<!-- more -->

# 安装

使用 npm 安装 json5

```sh
npm i json5 --save
```

# JSON5 常用 API

### JSON5.parse()

Parses a JSON5 string, constructing the JavaScript value or object described by the string. An optional reviver function can be provided to perform a transformation on the resulting object before it is returned.

#### Syntax

```
JSON5.parse(text[, reviver])
```

#### Parameters

- `text`: The string to parse as JSON5.
- `reviver`: If a function, this prescribes how the value originally produced by parsing is transformed, before being returned.

#### Return value

The object corresponding to the given JSON5 text.

### JSON5.stringify()

Converts a JavaScript value to a JSON5 string, optionally replacing values if a replacer function is specified, or optionally including only the specified properties if a replacer array is specified.

#### Syntax

```
JSON5.stringify(value[, replacer[, space]])
JSON5.stringify(value[, options])
```

#### Parameters

- `value`: The value to convert to a JSON5 string.
- `replacer`: A function that alters the behavior of the stringification process, or an array of String and Number objects that serve as a whitelist for selecting/filtering the properties of the value object to be included in the JSON5 string. If this value is null or not provided, all properties of the object are included in the resulting JSON5 string.
- `space`: A String or Number object that's used to insert white space into the output JSON5 string for readability purposes. If this is a Number, it indicates the number of space characters to use as white space; this number is capped at 10 (if it is greater, the value is just 10). Values less than 1 indicate that no space should be used. If this is a String, the string (or the first 10 characters of the string, if it's longer than that) is used as white space. If this parameter is not provided (or is null), no white space is used. If white space is used, trailing commas will be used in objects and arrays.

- options: An object with the following properties:

  `replacer`: Same as the `replacer` parameter.

  `space`: Same as the `space` parameter.

  `quote`: A String representing the quote character to use when serializing strings.

#### Return value

A JSON5 string representing the value.

# 使用

可以在 vscode 中安装`JSON5 syntax`插件来识别 json5 文件

```json
// test.json5
{
  "name": "jack", // 名称
  "age": 18, // 年龄
  "hobby": "football" // 爱好
}
```

```js
// testJSON5.js
const fs = require('fs')
const path = require('path')
const JSON5 = require('json5')
// 读取json5文件,utf-8编码格式
const json = fs.readFileSync(path.resolve(__dirname,'./test.json5'))

// 使用json5解析成Object
cosnt obj = JSON5.parse(json)

```
