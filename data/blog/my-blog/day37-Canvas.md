---
#title: Canvas
#date: 2021-06-28 09:11:00
#tags: canvas
index_img: /img/Canvas-logo-792x576.jpeg

title: Canvas
date: '2021-06-28'
tags: ['blog']
draft: false
summary: 'canvas是html5的一个标签，代表一个画布，可以在上面进行绘画、动画等操作。'
authors: ['default']
---

# Canvas

## 简介

canvas 是 html5 的一个标签，代表一个画布，可以在上面进行绘画、动画等操作。画布默认大小是 300\*150。

canvas 标签本省只是画布，要实现上面有文字、线条等呈现，需要使用 js 实现。总之，画布上一切的呈现，都需要使用 js 来实现。canvas 标签本质上就是一张图片，只是一张空白图片。

画布大小不能使用样式控制，用样式调整的是一个可视区域，其实真实的大小，还是一样的，只是在画布上画内容的话，会等比例放大。调整画布大小，需要在标签上直接添加 width 和 height 属性。

canvas 标签也是可以放文字的，只是当 canvas 标签不被浏览器支持的时候，会显示，例如 ie8。

# canvas 简单使用

1. 获取 canvas 元素

   ```js
   var canvas = document.querySelector('canvas')
   ```

2. 获取 canvas 元素工具箱 - 上下文

   ```js
   var ctx = canvas.getContext('2d')
   ```

3. 画图形

   先确定起始点

   ```js
   ctx.moveTo(x轴坐标, y轴坐标)
   ```

   从起始点开始画直线

   ```javascript
   ctx.lineTo(200, 20)
   ```

   描边

   ```javascript
   ctx.stroke()
   ```

   填充颜色

   ```js
   ctx.fill()
   ```

   想告诉 canvas 绘制的下条凸显和之前没关系,则使用

   ```js
   ctx.beginPath()
   结尾使用
   ctx.closePath()
   ```

#### 画虚线

```
ctx.setLineDash(参数);
// 参数：
/*
	数组 - 虚线方案，在数组中描述线条和空白的长度，然后不停的重复
	两个值，第一个值是线条长度，第二个值是空白长度 - 重复
	三个值，第一个值是线条长度，第二个值空白长度，第三个值是线条的长度；接下来是第二个值的空白长度，第二个值是线条的长度，第三个值是空白的长度 - 重复
	四个值，第一个值是线条长度，第二个值是空白长度，第三个值是线条的长度，第四个值是空白长度 - 重复

总结：
数组中有奇数个元素，那重复的个数就是 2*奇数个
数组中有偶数个元素，那重复的个数就是偶数个
*/
```

#### 获取虚线的方法

```js
ctx.getLineDash()
// 获取到的是一个数组，数组中记录了一段不重复的虚线方案
```

#### 实现纯色的颜色渐变

```js
var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
ctx.lineWidth = 2
for (var i = 0; i < 256; i++) {
  ctx.beginPath()
  ctx.moveTo(100 + i, 100)
  ctx.lineTo(100 + i + 1, 100)
  // ctx.lineTo(150,120)
  ctx.strokeStyle = `rgb(255,${255 - i},${255 - i})`
  ctx.closePath()
  ctx.stroke()
}
```

#### 画弧线

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        canvas {
            border: 1px solid black;
        }
    </style>
</head>

<body>
    <canvas width ="600" height ="300"> </canvas>
    <script>

        var canvas = document.querySelector('canvas');
        var ctx = canvas.getContext('2d');
        ctx.lineWidth = 2;
        ctx.moveTo(100,100);
        ctx.arc(100, 100, 100, 0, 60 * Math.PI / 180);
        ctx.stroke()
        ctx.fill()
    </script>
</body>
</html>
```

#### 画矩形

画矩形需要设置起点和矩形的宽高

```js
ctx.rect(起点x,起点y,宽,高)
ctx.stroke()

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        canvas {
            border: 1px solid black;
        }
    </style>
</head>

<body>
    <canvas width ="600" height ="300"> </canvas>
    <script>
        var canvas = document.querySelector('canvas');
        var ctx = canvas.getContext('2d');
        ctx.lineWidth = 2;
        ctx.fillRect(100,100,200,100)
    </script>
</body>
</html>
```

直接绘制矩形并描边

```js
ctx.strockRect(起点x, 起点y, 宽, 高)
ctx.strokeRect(100, 100, 200, 100)
```

直接绘制矩形并填充

```js
ctx.strockRect(起点x, 起点y, 宽, 高)
ctx.fillRect(100, 100, 200, 100)
```

#### 绘制等分圆形

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        canvas {
            border: 1px solid black;
        }
    </style>
</head>

<body>
    <canvas width="600" height="300"> </canvas>
    <script>
        var canvas = document.querySelector('canvas');
        var ctx = canvas.getContext('2d');
        // 设置线段宽度
        ctx.lineWidth = 2;

        // 半径
        var r = 100
        // 分成4等分
        var num = 4;
        var startArc = 0;
        for (var i = 1; i <= 4; i++) {
            ctx.beginPath();
            // 设置画笔放在圆心
            ctx.moveTo(100, 100);
            // 设置填空的颜色
            ctx.fillStyle = getColor();
            // 画弧线
            ctx.arc(100, 100, r, startArc, (i * 360 / num) * Math.PI / 180);
            ctx.closePath();
            // 描边
            ctx.stroke();
            // 填充
            ctx.fill();
            // 将末尾的角度设置为开始的角度,方便下次循环取值
            startArc =  (i * 360 / num) * Math.PI / 180;
        }

        // 获取随机颜色
        function getColor() {
            var c = '#';
            for (var i = 0; i < 6; i++) {
                c += Math.floor(Math.random() * 16).toString(16);
            }
            return c;
        }
    </script>
</body>

</html>
```

![](https://raw.githubusercontent.com/xiekecheng/ImageStorage/main/20210608185638.png)

#### 画饼图

```js
    <script>
        var canvas = document.querySelector('canvas');
        var ctx = canvas.getContext('2d');
        // 设置线段宽度
        ctx.lineWidth = 2;
        var width = ctx.canvas.width;
        var height = ctx.canvas.height;

        //设置圆心
        var x = width/2;
        var y = height/2;

        // 半径
        var r = 100;
        var arr = [22,18,31,17,123];
        // 获取数组里的数的总和
        var total = arr.reduce((a,b)=>a+b);
        var startArc = 0;
        arr.forEach(v=>{
            ctx.beginPath();
            ctx.moveTo(x,y);
            ctx.fillStyle = getColor()
            var endArc = startArc+v/total*360*Math.PI/180;
            ctx.arc(x,y,r,startArc,endArc);
            ctx.closePath()
            ctx.stroke()
            ctx.fill()
            startArc=endArc;
        })

        // 获取随机颜色
        function getColor() {
            var c = '#';
            for (var i = 0; i < 6; i++) {
                c += Math.floor(Math.random() * 16).toString(16);
            }
            return c;
        }
    </script>
```

效果如下图

![image-20210608195527042](https://raw.githubusercontent.com/xiekecheng/ImageStorage/main/image-20210608195527042.png)

#### 画文字

画文字用到的方法和属性

```js
//文字大小
ctx.font = '字号大小 字体'

//例
ctx.font = 'bold 48px serif'
ctx.strokeText('Hello world', 50, 100)

//画文字
ctx.strokeText(文本, 文字开始x, 文字开始y) // 描边
ctx.fillText(文本, 文字开始x, 文字开始y) // 填充文字

//上下对齐方式
ctx.textBaseLine = 值
// 取值：
/*
默认是baseline
bottom：底线对齐
top：顶线对齐
middle：中线对齐
*/

//左右对齐方式
ctx.textAlign = 值
// 取值：基于我们设置的文字坐标来对齐的
/*
left - 默认值，左对齐
right - 右对齐
*/

//获取文本内容总宽度
ctx.measureText(文本内容)
// 获取到一个对象，其中包含width属性就是文字的宽度
ctx.measureText(文本内容).width
//计算方式是字的个数乘fontsize
```

画文字代码

```js
<script>
  var canvas = document.querySelector('canvas'); var ctx = canvas.getContext('2d'); // 设置线段宽度
  ctx.lineWidth = 2; // 获取canvas宽高 var width = ctx.canvas.width; var height = ctx.canvas.height;
  ctx.font = '48px serif' ctx.strokeText('我是天下第一帅',100,100);
</script>
```

效果如下:

![image-20210608201325182](https://raw.githubusercontent.com/xiekecheng/ImageStorage/main/image-20210608201325182.png)

#### 使用 Echarts 绘制饼图

[echart官网]: https://echarts.apache.org/zh/index.html

[Echarts 官网](https://echarts.apache.org/zh/index.html)

利用 Echarts,代入数据即可生成美观好看的折线图..柱状图,饼图之类的图形

```js
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>ECharts</title>
    <!-- 引入 echarts.js -->
    <!-- <script src="./js/echarts.min.js"></script> -->
    <!-- 可通过cdn引入echarts.js文件 -->
    <script src="https://cdn.jsdelivr.net/npm/echarts@5.1.1/dist/echarts.min.js"></script>
</head>

<body>
    <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
    <div id="main" style="width: 900px;height:600px;"></div>
    <script type="text/javascript">
        // import * as echarts from 'echarts';
        // var echarts = require('echarts');
        var chartDom = document.getElementById('main');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
            legend: {
                top: 'bottom'
            },
            toolbox: {
                show: true,
                feature: {
                    mark: {
                        show: true
                    },
                    dataView: {
                        show: true,
                        readOnly: false
                    },
                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                }
            },
            series: [{
                name: '年龄分布',
                type: 'pie',
                radius: [50, 250],
                center: ['50%', '50%'],
                roseType: 'area',
                itemStyle: {
                    borderRadius: 8
                },
                // var arr = [22,18,31,17,42,32,15,22,30];
                data: [{
                        value: 22,
                        name: '15-20岁'
                    },
                    {
                        value: 18,
                        name: '20-25岁'
                    },
                    {
                        value: 31,
                        name: '25-30岁'
                    },
                    {
                        value: 17,
                        name: '30-35岁'
                    },
                    {
                        value: 42,
                        name: '35-40岁'
                    },
                    {
                        value: 32,
                        name: '40-45岁'
                    },
                    {
                        value: 15,
                        name: '45-50岁'
                    },
                    {
                        value: 22,
                        name: '50-55岁'
                    },
                    {
                        value: 30,
                        name: '55-60岁'
                    }
                ]
            }]
        };

        option && myChart.setOption(option);
    </script>
</body>

</html>
```

效果图:

![image-20210608205136100](https://raw.githubusercontent.com/xiekecheng/ImageStorage/main/image-20210608205136100.png)

正文

## 参考

[^1]: 参考资料 1
[^2]: 参考资料 2
[^1]: 参考资料:
