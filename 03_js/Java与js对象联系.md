## Java对象的三大特征：继承，重载，多态
+ 继承：子类继承父类的共有属性和共有方法

+ 重载; java重载发生在同一类中，即在类中可以创建方法名相同，但是方法参数列表不同（参数类型、参数个数至少一种不同即可）的方法，具体调用哪个方法由传递给函数的参数列表决定。

+ 多态：父类可以被多个子类继承，子类可以有自己的属性和方法(也即是鸟与一只鸟的关系，鸟有千万种，但都是鸟类)(自传)

## Object 对象
> Object 对象自身用处不大，不过在了解其他类之前，还是应该了解它。因为 ECMAScript 中的 Object 对象与 Java 中的 java.lang.Object 相似，ECMAScript 中的所有对象都由这个对象继承而来，Object 对象中的所有属性和方法都会出现在其他对象中，所以理解了 Object 对象，就可以更好地理解其他对象。
### Object 对象具有下列属性：
  + constructor
    对创建对象的函数的引用（指针）。对于 Object 对象，该指针指向原始的 Object() 函数。
  + Prototype
    对该对象的对象原型的引用。对于所有的对象，它默认返回 Object 对象的一个实例。
### Object 对象还具有几个方法：
  + hasOwnProperty(property)
    判断对象是否有某个特定的属性。必须用字符串指定该属性。（例如，o.hasOwnProperty("name")）
  + IsPrototypeOf(object)
    判断该对象是否为另一个对象的原型。
  + PropertyIsEnumerable
    判断给定的属性是否可以用 for...in 语句进行枚举。
  + ToString()
    返回对象的原始字符串表示。对于 Object 对象，ECMA-262 没有定义这个值，所以不同的 ECMAScript 实现具有不同的值。
  + ValueOf()
    返回最适合该对象的原始值。对于许多对象，该方法返回的值都与 ToString() 的返回值相同。
> 注释：上面列出的每种属性和方法都会被其他对象覆盖。

```JS
var person={firstname:"Bill", lastname:"Gates", id:5566};
var person={
firstname : "Bill",
lastname  : "Gates",
id        :  5566
};对象声明

name=person.lastname;
name=person["lastname"];对象属性调用的两种方法

var carname=new String;
var x=      new Number;
var y=      new Boolean;
var cars=   new Array;
var person= new Object;
JavaScript 变量均为对象。当您声明一个变量时，就创建了一个新的对象
```
