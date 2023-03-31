---
#title: JavaScript数组去重方法
#date: 2021-10-08 19:24:00
#categories: JavaScript
index_img: https://raw.githubusercontent.com/xiekecheng/ImageStorage/main/20210713124713.png

title: JavaScript数组去重方法
date: '2021-10-08'
tags: ['blog']
draft: false
summary: 'JavaScript数组去重方法'
authors: ['default']
---

# 4 种数组去重方法

```js
const originArr = [1, 2, 3, 4, 10, 13, 25, 3, 2, 1]

// 使用filter去重
const NoRepeat = originArr.filter((ele, index, arr) => {
  return arr.indexOf(ele) == index
})
console.log('NoRepeat', NoRepeat)

// 使用set去重
const NoRepeat2 = Array.from(new Set(originArr))
console.log('NoRepeat2', NoRepeat2)

// 使用indexOf去重
const NoRepeat3 = []
originArr.forEach((ele, index, ar) => {
  // console.log(ele);
  if (NoRepeat3.indexOf(ele) === -1) {
    NoRepeat3.push(ele)
  }
})
console.log('NoRepeat3', NoRepeat3)

const NoRepeat4 = []
// 使用includes去重
originArr.forEach((ele, index) => {
  if (!NoRepeat4.includes(ele)) {
    NoRepeat4.push(ele)
  }
})
console.log('NoRepeat4', NoRepeat4)

console.log('使用newSet', [...new Set(originArr)])
```

## 数组排序

### 选择排序

原理：选取待排序的数字为最小值，每轮比较之后，确定最小值，然后与待排序的数交换位置

```js
function selectionSort(arr) {
  let temp
  let minIndex
  for (let i = 0; i < arr.length; i++) {
    // const element = arr[i];
    // minVal = arr[i]
    minIndex = i
    // minVal = arr[i]
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
        // minVal = arr[j]
      }
    }
    // 将记录的最小值与比对的位置交换位置
    temp = arr[minIndex]
    arr[minIndex] = arr[i]
    arr[i] = temp
    console.log(arr[i])
  }
  // return arr
  console.log(arr)
}
```

### 快速排序

原理：从数组中选择一个数做基准数(baseVal)，声明左数组（leftArr）和右数组（rightArr），遍历待排序数组，若值小于基准数，则 push 进 leftArr，若大于基准数，则 push 进 rightArr，最后采用递归遍历数组的方式，quickSort(leftArr).concat(baseVal,rightArr)即可得到排序后的数组

```js
function quickSort(arr) {
  // console.log(arr);
  // console.log(arr.length);
  let length = arr.length
  if (length <= 1) {
    return arr
  }
  const baseVal = arr[0]
  const leftArr = []
  const rightArr = []
  for (let i = 0; i < length; i++) {
    if (arr[i] < baseVal) {
      leftArr.push(arr[i])
    } else if (arr[i] > baseVal) {
      rightArr.push(arr[i])
    }
  }
  console.log('leftArr,rightArr', leftArr, rightArr)
  return quickSort(leftArr).concat(baseVal, quickSort(rightArr))
}
```

### 冒泡排序

冒泡排序是经典的排序算法之一，通过两层 for 循环，通过两两比较的方式来互换元素位置，每轮循环确定一个最大或最小值的位置，最终即可完成排序。

```js
function bubbleSort(arr) {
  let temp
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  console.log(arr)
}
```
