+ 变量输出
```php
// 
{$name}
//数组值输出
{$data.name}
{$data.email}
{$data['name']}
{$data['email']}
// 对象属性值输出
{$data:name}
{$data:email}
//系统变量输出以**{$Think** 打头
{$Think.server.script_name} // 输出$_SERVER['SCRIPT_NAME']变量
{$Think.session.user_id} // 输出$_SESSION['user_id']变量
{$Think.get.pageNumber} // 输出$_GET['pageNumber']变量
{$Think.cookie.name}  // 输出$_COOKIE['name']变量
//常量输出
{$Think.const.APP_PATH}
{$Think.APP_PATH}
//配置参数输出
{$Think.config.default_module}
{$Think.config.default_controller}
//语言变量输出
{$Think.lang.page_error}
{$Think.lang.var_error}
```

+ 带参数函数结果输出
```php
//单参数
{$data.name|md5} //<?php echo (md5($data['name'])); ?>
//多参数
{$create_time|date="y-m-d",###} //### 代表$create_time在函数参数中的位置，这里是第二位（可调）
// 多函数过滤
{$name|md5|strtoupper|substr=0,3} //<?php echo (substr(strtoupper(md5($name)),0,3)); ?>
{:substr(strtoupper(md5($name)),0,3)}
```

+ 默认值
```php
{$user.nickname|default="这家伙很懒，什么也没留下"}
{$Think.get.name|default="名称为空"}
{$Think.get.name|getName|default="名称为空"}
```

+ 运算
```php
{$a+$b}
{$a-$b}
{$a*$b}
{$a/$b}
{$a%$b}
{$a++} 或 {++$a}
{$a--} 或 {--$a}
{$a+$b*10+$c}
// 三目
{$status? '正常' : '错误'}
{$info['status']? $info['msg'] : $info['error']}
{$info.status? $info.msg : $info.error }

{$user['score']|myFun*10} //错误的 函数不支持
```

+ 模板注释
```php
// Single line
{/* 注释内容 */ }
{// 注释内容 } 

//
```


# [内置标签](https://www.kancloud.cn/manual/thinkphp5/125017)

## 循环输出标签
+ volist(name,id,offset,length,key,mod)
```php
//循环输出用户的编号和姓名：
{volist name="list" id="data"}
{$data.id}:{$data.name}<br/>
{/volist}

//支持输出查询结果中的部分数据，例如输出其中的第5～15条记录
{volist name="list" id="vo" offset="5" length='10'}
{$vo.name}
{/volist}

//输出偶数记录
{volist name="list" id="vo" mod="2" }
{eq name="mod" value="1"}{$vo.name}{/eq}
{/volist}

//为空的时候输出提示：
{volist name="list" id="vo" empty="暂时没有数据" }
{$vo.id}|{$vo.name}
{/volist}
```
+ foreach(name,item,key)
```php
{foreach name="list" item="vo" key="k" }
   {$k}|{$vo}
{/foreach}
``php

+ f o r 
```php
{for start="开始值" end="结束值" comparison="" step="步进值" name="循环变量名" }
{/for}
```

## 条件判断标签
+ switch
```php
{switch name="User.level"}
    {case value="1"}value1{/case}
    {case value="2"}value2{/case}
    {default /}default
{/switch}
```

+ if
```php
{if condition="($name == 1) OR ($name > 100) "} content1
{elseif condition="$name eq 2"/}content2
{else /} content3
{/if}
```

+ in  notin
```php
{in name="id" value="1,2,3"}
id在范围内
{/in}

{notin name="id" value="1,2,3"}
id不在范围内
{/notin}
```

## 资源加载
{load href="/static/js/common.js" /}
{load href="/static/css/style.css" /}
并且支持同时加载多个资源文件，例如：
{load href="/static/js/common.js,/static/css/style.css" /}



