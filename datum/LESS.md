---
title: LESS
---

## 变量
```less
@nice-blue: #5B83AD;
@light-blue: @nice-blue + #111;
#header { color: @light-blue; }
```
```css
#header { color: #6c94be; }
```

## 混合
```less
.bordered {
    border-top: dotted 1px black;
    border-bottom: solid 2px black;
}
#menu a {
    color: #111;
    .bordered;
}
.post a {
    color: red;
    .bordered;
}
```
```css
.bordered {
    border-top: dotted 1px black;
    border-bottom: solid 2px black;
}
#menu a {
    color: #111;
    border-top: dotted 1px black;
    border-bottom: solid 2px black;
}
.post a {
    color: red;
    border-top: dotted 1px black;
    border-bottom: solid 2px black;
}
```

## 代参数混合
```less
//不传参默认值5px
.border-radius (@radius:5px) {
    border-radius: @radius;
    -moz-border-radius: @radius;
    -webkit-border-radius: @radius;
}
#header {
    .border-radius(4px);
}
.button {
    .border-radius(6px);
}
```


