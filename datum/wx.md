---
title: wx
---

### structure
document|descript
---|---
app.json|是对当前小程序的全局配置、包括小程序的所有页面路径、界面表现、网络超时时间、底部tab等。
page.json|用来表示pages/logs目录下的logs.json及是对应页面的app.json相关设置
WXML|就是另类的html
WXss|另类的css使用@import语句可以导入外联样式到此wxss
js|就是JavaScript使用微信提供的各种API
project.config.json|项目的配置文件
tips: 小程序会默认打开app.json中配置的的一个页面

### 小程序的尺寸单位
rpx 整个屏幕的总宽度是750rpx
[link](https://github.com/justjavac/awesome-wechat-weapp)

### keywords
场景值：从什么情况下进入小程序（群聊会话中的小程序消息卡片中进入，值为1008）
tab切换与页面周期函数：A hide B onload onshow        a onUnload B onload onshow      a onUnload B onload onshow
require：暂不支持绝对路径

### wxml 引用
WXML 提供两种文件引用方式import和include。
import 可以在该文件中使用目标文件定义的template，但不会 import目标文件 import 的 template。
include 可以将目标文件除了 &lt;template/> &lt;wxs/> 外的整个代码引入，相当于是拷贝到 include 位置

### 常用组件
view 类似 div
scroll-view 滚动组件
swipper  轮播组件
text 类似 span
navigator 类似 a

## 隐藏滚动条
```css
::webkit-scrollerbar{
    width:0;
    height:0;
    color:transparent;
}
```


### 数据绑定
<view> {{ message }} </view>
<view wx:if="{{condition}}"> </view>
<view hidden="{{flag ? true : false}}"> Hidden </view>
<view> {{a + b}} </view>
<view wx:if="{{length > 5}}"> </view>
<view>{{"hello" + name}}</view>
<view>{{object.key}} {{array[0]}}</view>
<view wx:for="{{[zero, 1, 2, 3, 4]}}"> {{item}} </view>
<template is="objectCombine" data="{{for: a, bar: b}}"></template>

也可以用扩展运算符 ... 来将一个对象展开
<template is="objectCombine" data="{{...obj1, ...obj2, e: 5}}"></template>


### 事件绑定和冒泡
事件绑定的写法同组件的属性，以 key、value 的形式。

key 以bind或catch开头，然后跟上事件的类型，如bindtap、catchtouchstart。自基础库版本 1.5.0 起，bind和catch后可以紧跟一个冒号，其含义不变，如bind:tap、、catch:touchstart。
value 是一个字符串，需要在对应的 Page 中定义同名的函数。不然当触发事件的时候会报错。

bind事件绑定不会阻止冒泡事件向上冒泡，catch事件绑定可以阻止冒泡事件向上冒泡。

### event
<table>
<thead>
<tr>
<th>类型</th>
<th>触发条件</th>
<th>最低版本</th>
</tr>
</thead>
<tbody>
<tr>
<td>touchstart</td>
<td>手指触摸动作开始</td>
<td></td>
</tr>
<tr>
<td>touchmove</td>
<td>手指触摸后移动</td>
<td></td>
</tr>
<tr>
<td>touchcancel</td>
<td>手指触摸动作被打断，如来电提醒，弹窗</td>
<td></td>
</tr>
<tr>
<td>touchend</td>
<td>手指触摸动作结束</td>
<td></td>
</tr>
<tr>
<td>tap</td>
<td>手指触摸后马上离开</td>
<td></td>
</tr>
<tr>
<td>longpress</td>
<td>手指触摸后，超过350ms再离开，如果指定了事件回调函数并触发了这个事件，tap事件将不被触发</td>
<td><a href="../../compatibility.html" title="基础库 1.5.0 开始支持，低版本需做兼容处理。">1.5.0</a></td>
</tr>
<tr>
<td>longtap</td>
<td>手指触摸后，超过350ms再离开（推荐使用longpress事件代替）</td>
<td></td>
</tr>
<tr>
<td>transitionend</td>
<td>会在 WXSS transition 或 wx.createAnimation 动画结束后触发</td>
<td></td>
</tr>
<tr>
<td>animationstart</td>
<td>会在一个 WXSS animation 动画开始时触发</td>
<td></td>
</tr>
<tr>
<td>animationiteration</td>
<td>会在一个 WXSS animation 一次迭代结束时触发</td>
<td></td>
</tr>
<tr>
<td>animationend</td>
<td>会在一个 WXSS animation 动画完成时触发</td>
<td></td>
</tr>
<tr>
<td>touchforcechange</td>
<td>在支持 3D Touch 的 iPhone 设备，重按时会触发</td>
<td><a href="../../compatibility.html" title="基础库 1.9.90 开始支持，低版本需做兼容处理。">1.9.90</a></td>
</tr>
</tbody>
</table>


## 不检验合法域名
设置->项目设置->不检验合法域名

## html 解析插件
```js
https://github.com/icindy/wxparse
```

## json在线
```js
json.parse.online.fr
```

## 免费接口
[豆瓣书籍](https;//developers.douban.com/wiki/?title=book_v2)
[快递查询](https;//api.apiopen.top/EmailSearch?number=1012002)
[随机单句诗词推荐](https://api.apiopen.top/singlePoetry)
[搜索古诗词](https://api.apiopen.top/searchPoetry)
[音乐搜索接口](https://api.apiopen.top/searchMusic)
[音乐详情接口](https://api.apiopen.top/musicDetails)