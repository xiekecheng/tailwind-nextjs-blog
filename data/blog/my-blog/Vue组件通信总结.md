---
#title: Vue组件间通信总结
#date: 2021-9-16 12:11:00
#tags:
#categories:
#- Vue
index_img: /img/webpack-vue.jpeg

title: Vue组件间通信总结
date: '2021-9-16'
tags: ['blog']
draft: false
summary: 'Vue组件间通信总结'
authors: ['default']
---

## 父子组件通信方法

### 1、props 和$emit

父组件通过 props 传值给子组件

```
// 父组件   :list="list" 传递list给子组件
<template>
  <div>
    <List :list="list" />
    <Input @getChildData="getChildData" />
  </div>
</template>

<script>
import List from "./List.vue";
import Input from "./Input.vue";
export default {
  data() {
    return {
      list: [
        { id: 1, name: "jack" },
        { id: 2, name: "tom" },
        { id: 3, name: "rose" },
      ],
    };
  },
  components: {
    List,
    Input,
  },
  methods: {
    getChildData(data) {
      console.log(data);
      this.list.push({ id: Math.random(), name: data });
    },
  },
};
</script>

<style lang="scss" scoped></style>

// 子组件: 定义props接收父组件传递的值，定义接收值的类型   list: Array

<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id" v-text="item.name"></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
  },
};
</script>

<style lang="scss" scoped></style>

```

子组件传值给父组件

```$
// 子组件
<template>
  <div>
    <input type="text" v-model="str" />
    <button @click="add" @>添加</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      str: "",
    };
  },
  methods: {
    add() {
      this.$emit("getChildData", "aaa");
    },
  },
};
</script>

<style lang="scss" scoped></style>

```

### 2、$attrs和$listeners

上一种通过 props 和$emit来实现父子通信会来带一个问题，当父子组件跨多层级通信时有有许多不便，比如，A组件下有子组件B组件，B组件有子组件C，当A组件想要和C组件进行通信时，需要再传递props，会比较麻烦，这时可以使用$attrs 和$listeners 来解决

```

```

### 3、$parent和$children

使用$children可以获取当前组件的子组件实例，进而可以修改子组件的属性或者调用子组件的方法，在有多个子组件的情况下，$children 是一个数组，使用$parent 则反之

```

```
