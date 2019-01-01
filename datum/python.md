---
title: python
---
> Python自带的学习文档  命令行:Python3 -m pydoc -p 8888
localhost:8888 即可查看
## base
+ 标识符:由字母开头下划线开头,其他为由数字 下划线 字母组成,大小敏感
+ 保留字:Python 的标准库提供了一个 keyword 模块，可以输出当前版本的所有关键字： 
+ 注释: 单行注释由#开头
+ 多行语句:Python 通常是一行写完一条语句，但如果语句很长，我们可以使用反斜杠(\)来实现多行语句，例如：
```js
total = item_one + \
        item_two + \
        item_three
```
在 [], {}, 或 () 中的多行语句，不需要使用反斜杠(\


## input print
+ input("\n\n按下 enter 键后退出。")
+ 换行输出 print( x )       不换行输出 print( x, end=" " )
    + print("我叫%s,今年%d岁"%('eg',23))

## import 与 from...import
+ 在 python 用 import 或者 from...import 来导入相应的模块。
+ 将整个模块(somemodule)导入，格式为： import somemodule
+ 从某个模块中导入某个函数,格式为： from somemodule import somefunction
+ 从某个模块中导入多个函数,格式为： from somemodule import firstfunc, secondfunc, thirdfunc
+ 将某个模块中的全部函数导入，格式为： from somemodule import *
tips: as 简化导入路径 例如:import part1.my_package.init_test as p (导入的东西在代码中可用p代替)

## 数据类型
Number（数字）
String（字符串）
List（列表）
Tuple（元组）
Set（集合）
Dictionary（字典）
> tips:内置的 type() 函数可以用来查询变量所指的对象类型。isinstance(a, int) //true/false
isinstance 和 type 的区别在于：
    type()不会认为子类是一种父类类型。
    isinstance()会认为子类是一种父类类型。

## 字符串
>Python中的字符串用单引号 ' 或双引号 " 括起来，同时使用反斜杠 \ 转义特殊字符。
1. 反斜杠可以用来转义，使用r可以让反斜杠不发生转义。
2. 字符串可以用+运算符连接在一起，用*运算符重复。
3. Python中的字符串有两种索引方式，从左往右以0开始，从右往左以-1开始。
4. Python中的字符串不能改变。

## 列表
> 列表是写在方括号 [] 之间、用逗号分隔开的元素列表。列表被截取后返回一个包含所需元素的新列表
1. List写在方括号之间，元素用逗号隔开。
2. 和字符串一样，list可以被索引和切片。
3. List可以使用+操作符进行拼接。
4. List中的元素是可以改变的。

## Tuple（元组）
> 元组（tuple）与列表类似，不同之处在于元组的元素不能修改。元组写在小括号 () 里，元素之间用逗号隔开。 
1. 与字符串一样，元组的元素不能修改。
2. 元组也可以被索引和切片，方法一样。
3. 注意构造包含0或1个元素的元组的特殊语法规则。
4. 元组也可以使用+操作符进行拼接。

## Set（集合）
> 集合是一个无序的不重复元素的序列,可以使用大括号 { } 或者 set() 函数创建集合.基本功能是进行成员关系测试和删除重复元素。
a = set('abracadabra')
b = set('alacazam')
print(a)                                   {'b', 'a', 'c', 'r', 'd'}
print(b)                                   {'z', 'm', 'a', 'l', 'c'}
print(a - b)     # a 和 b 的差集            {'b', 'd', 'r'}
print(a | b)     # a 和 b 的并集            {'l', 'r', 'a', 'c', 'z', 'm', 'b', 'd'}
print(a & b)     # a 和 b 的交集            {'a', 'c'}
print(a ^ b)     # a 和 b 中不同时存在的元素  {'l', 'r', 'z', 'm', 'b', 'd'}


## Dictionary（字典）
> 字典是一种映射类型，字典用"{ }"标识，它是一个无序的键(key) : 值(value)对集合.列表是有序的对象集合，字典是无序的对象集合。两者之间的区别在于：字典当中的元素是通过键来存取的，而不是通过偏移存取。


## 逻辑运算符
print(true and false)
print(true or false)
print(not false)

## 特殊操作符
name|description
---|---
is|判断内存地址
is not|...
in|判断是否包含
not in|...

# 正则
+ 元字符
    + .  匹配除换行付以外的任意字符
    + \w 匹配字母,数字,下划线以及汉字
    + \s 匹配空白符
    + \d 匹配数字
    + \b 匹配单词的开始或结束
    + ＾ 匹配字符串的开始
    + $  匹配字符串的结尾
+ 限定符
    + ＊　重复任意次
    + ＋　至少重复一次
    + ？　重复０次或１次
    + ｛ｎ｝重复ｎ次
    + ｛ｎ，｝重复ｎ次及ｎ次以上
    + ｛ｎ，m｝重复ｎ次到ｍ次
## 正则对象
> import re
+ search 只匹配第一个
+ findall 匹配所有


# function
## built-in function
> abs() 	dict() 	help() 	min() 	setattr()
all() 	dir() 	hex() 	next() 	slice()
any() 	divmod() 	id() 	object() 	sorted()
ascii() 	enumerate() 	input() 	oct() 	staticmethod()
bin() 	eval() 	int() 	open() 	str()
bool() 	exec() 	isinstance() 	ord() 	sum()
bytearray() 	filter() 	issubclass() 	pow() 	super()
bytes() 	float() 	iter() 	print() 	tuple()
callable() 	format() 	len() 	property() 	type()
chr() 	frozenset() 	list() 	range() 	vars()
classmethod() 	getattr() 	locals() 	repr() 	zip()
compile() 	globals() 	map() 	reversed() 	__import__()
complex() 	hasattr() 	max() 	round() 	 
delattr() 	hash() 	memoryview() 	set()
name|description
---|---
ord()|查询ascll码值
chr()|以ascll码值查询对应的字符
id()|查询变量存放的地址(Python中变量指定的数值或字符串相同时,地址相同)
range(n)|表示0~n1 这个范围 类似[0,1,2....n1]


# oop
## 结构
```py
# class objname(parentclass1,parentclass2...):
class objname(object):              # 可有多个继承 查找执行顺序从左至右
    name = 'eg'                     # 类变量 实例可以访问但不可修改
    def __init__(self,n,age):       # 构造函数(重写了父类的构造函数) 默认首参为self指向实例 调用时不必传入系统自传
        self.n = n    
        self.__age = age            # 私有变量 实例
    def print_n(self):              # 公有函数
        print('共有函数',self.n,self.name,self.__age)
    
    def __print(self):
        print('私有函数',self.n)

    def invoke_print(self):
        self.__print()              # 类中的含糊是调用也在名前加self

yy = objname('yy',22)
print(yy.n)
print(yy.name)
# print(yy.__age)   # error 'objname' abject has no attribute '__age
print(yy._objname__age)             # 所谓的隐私属性就讲变量换了 但版本不同换的方式也不同
print(objname.name)    # error type object 'objname' has no attribute '__age'
# print(objname.n)    # error type object 'objname' has no attribute '__age'
# print(objname.__age)    # error type object 'objname' has no attribute '__age'
# print(objname._objname__age) # Error: type object 'objname' has no attribute '_objname__age'

yy.print_n()
objname.print_n(yy)
# objname.print_n()   # TypeError: print_n() missing 1 required positional argument: 'self'
# yy.__print()       # AttributeError: 'objname' object has no attribute '__print'
# objname.__print()   # AttributeError: type object 'objname' has no attribute '__print'

yy.invoke_print()
objname.invoke_print(yy)
# objname.invoke_print()  # TypeError: invoke_print() missing 1 required positional argument: 'self' 
```
+ 子类中调用父类方法: parentclass.method()
+ 子类重写父类的方法: 重新定义相同名字的函数即可 如 __init__()
+ super():可调用所用父类的同名方法 如 super().__intitle__()
+ 类的__slots__定义的限制属性仅对当前类实例起作用，对继承的子类是不起作用的
tips: Python 类中没有硬性的访问权限设置

## 类的特殊变量
name|description
---|---
__slots__|限制动态添加的属性名
__str__|能作用于str()函数
__repr__|通常等同与__str__
__iter__|能用于for ... in循环 (与__next__共同使用)
__getitem__|可以像list一样通过下标访问
__setitem__|
__delitem__|
__getattr__|当查找没定义的属性是调用此函数
__call__|对象s  s()时调用此函数  allable()函数可以判断一个对象是否是“可调用”对象。


> 线程是最小的执行单元，而进程由至少一个线程组成。如何调度进程和线程，完全由操作系统决定，程序自己不能决定什么时候执行，执行多长时间。


# Python 工程结构
> 项目文件夹 => 包文件夹(包含__init__.py模块的才能成为包,不然就是一个文件) => 模块文件 => 类 => 方法and变量
+ __init__.py是在模块导入时运行的(即import时)
+ 编码规范
    + 包:lower_with_under
    + 模块:Lowe_with_under
    + 类: HelloWorld(大驼峰)
    + 函数: lower_with_under
    + 常量: CAPS_WITH_UNDER (全大写加下划线)
    + 前面加下划线表示 私有

__file__ 当前模块的文件路径
