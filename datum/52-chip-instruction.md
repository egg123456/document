---
title: 52-chip-instruction
---

# instruction format
标号： 操作码 操作数1，操作数2…… ;注释

## 四分段指令书写格式
标号字段    操作码字段   操作数字段   注释字段
START:      MOV         A,#00H      ;立即数00H传到累加器A

## explain
+ 标号：表示该语句的符号地址，可根据需要而设置。有了标号，程序中的跳转指令才能访问该语句，可使程序便于查询、修改以及跳转指令的编程。
    + 标号由1~8个ASCII码字符组成，第一个字符必须是字母，其余可以是字母、数字或下划线字符
    + 同一标号在一个程序中只能定义一次，不能重复定义
    + 不能使用汇编语言已经定义的符号作为标号，如助记符、伪指令以及寄存器的符号名称等
    + 标号可有可无，取决于本程序中的其他语句是否访问该条语句。
+ 操作码：规定了语句执行的操作，用助记符表示，是汇编语言指令中唯一不能空缺的部分
+ 操作数：用于存放指令的操作数或操作数地址。操作数的个数因指令的不同而不同。
+ 注释：用于解释指令或程序的含义。

# 寻址方式
## 立即数寻址（数是放在程序存储空间内的常数）
$ MOV A,#7AH; 把十六进制7A给累加器A

## 直接寻址
$ MOV A,32H; 把片内RAM32H地址中的值给累加器A

## 寄存器寻址
$ MOV A,R3; 把R3寄存器中的值给累机器A

## 寄存器间接寻址
$ MOV A,@R1; 把R1寄存器中的值作为地址指向的内容给累加器A

## 基址寄存器加变址寄存器寻址(是以DPTR或PC为基地址寄存器，累加器A为变址寄存器，以两者相加形成的16位数程序存储器地址寻址)
$ MOVC A,@A+DPTR; 把以两者相加形成的16位数程序存储器地址的内容给累加器A

## 相对寻址(是为解决程序转移而专门设置的，为转移指令所采用，它是以PC的当前值为基准来改变PC地址)
$ SJMP 08H; PC=PC+2+08H 因为SJMP为2字节指令

## 位寻址
> 位寻址的范围是216位的位地址空间，分为两部分：
### 内部RAM中的位寻址区中字节地址为20H-2FH,共8*16=128位
$ MOV C,40H或MOV C,(28H).0; 把40H的值给进位位C（）
### 可位寻址的11个特殊功能寄存器，功能88位
$ SETB PWS.5; 把PWS第6位F0置1
$ CLR PWS.5; 把PWS第6位F0清0

# 伪指令
指令在汇编后都产生机器码，而伪指令在汇编后都不产生机器码。
伪指令只是在汇编程序中向汇编程序发出指示信息，告诉它如何完成汇编。
## 常用伪指令
```ASM
ORG 1000H   //指明后面的程序从程序存储器的1000H单元开始存放
DS 08H      //保留08H字节单元作为存储区，供程序运行用
DB 30H,24   //定义字节数据(1008H=30H,1009H=18H)
DW 1246H,7BH    //连续单元定义字节数据(1010H=12H,1010H=46H,1011H=7BH)

U1 DATA 60H     //U1代表片内RAM的60H单元 
UX1 XDATA 60H   //UX1代表片外RAM的60H单元 
P10 BIT P1.0    //P10代表P1.0的位地址
TAB2 EQU 2000H  //TAB2的值为2000H
```




# instruction set
<table cellspacing="0" cellpadding="0" width="612" border="1" style="clear:both;font-size:10pt;"><tbody><tr><td width="173" colspan="2" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">助记符</div>
</td>
<td width="287" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">指令说明</div>
</td>
<td width="83" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">字节数</div>
</td>
<td width="69" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">周期数</div>
</td>
</tr><tr><td width="612" colspan="5" style="font-size:14px;padding:8px;line-height:28px;">
<div align="center" style="line-height:25px;"><span style="color:rgb(0,0,255);">（数据传递类指令）</span></div>
</td>
</tr><tr><td width="57" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">MOV</div>
</td>
<td width="116" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">A，Rn</div>
</td>
<td valign="top" width="287" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">寄存器传送到累加器</div>
</td>
<td width="83" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">1</div>
</td>
<td width="69" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">1</div>
</td>
</tr><tr><td width="57" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">MOV</div>
</td>
<td width="116" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">A，direct</div>
</td>
<td valign="top" width="287" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">直接地址传送到累加器</div>
</td>
<td width="83" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">2</div>
</td>
<td width="69" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">1</div>
</td>
</tr><tr><td width="57" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">MOV</div>
</td>
<td width="116" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">A，@Ri</div>
</td>
<td width="287" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">累加器传送到外部RAM(8 地址)</div>
</td>
<td width="83" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">1</div>
</td>
<td width="69" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">1</div>
</td>
</tr><tr><td width="57" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">MOV</div>
</td>
<td width="116" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">A，#data</div>
</td>
<td width="287" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">立即数传送到累加器</div>
</td>
<td width="83" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">2</div>
</td>
<td width="69" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">1</div>
</td>
</tr><tr><td width="57" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">MOV</div>
</td>
<td width="116" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">Rn，A</div>
</td>
<td width="287" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">累加器传送到寄存器</div>
</td>
<td width="83" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">1</div>
</td>
<td width="69" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">1</div>
</td>
</tr><tr><td width="57" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">MOV</div>
</td>
<td width="116" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">Rn，direct</div>
</td>
<td width="287" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">直接地址传送到寄存器</div>
</td>
<td width="83" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">2</div>
</td>
<td width="69" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">2</div>
</td>
</tr><tr><td width="57" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">MOV</div>
</td>
<td width="116" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">Rn，#data</div>
</td>
<td width="287" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">累加器传送到直接地址</div>
</td>
<td width="83" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">2</div>
</td>
<td width="69" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">1</div>
</td>
</tr><tr><td width="57" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">MOV</div>
</td>
<td width="116" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">direct，Rn</div>
</td>
<td width="287" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">寄存器传送到直接地址</div>
</td>
<td width="83" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">2</div>
</td>
<td width="69" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">1</div>
</td>
</tr><tr><td width="57" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">MOV</div>
</td>
<td width="116" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">direct，direct</div>
</td>
<td width="287" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">直接地址传送到直接地址</div>
</td>
<td width="83" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">3</div>
</td>
<td width="69" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">2</div>
</td>
</tr><tr><td width="57" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">MOV</div>
</td>
<td width="116" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">direct，A</div>
</td>
<td width="287" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">累加器传送到直接地址</div>
</td>
<td width="83" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">2</div>
</td>
<td width="69" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">1</div>
</td>
</tr><tr><td width="57" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">MOV</div>
</td>
<td width="116" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">direct，@Ri</div>
</td>
<td width="287" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">间接RAM 传送到直接地址</div>
</td>
<td width="83" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">2</div>
</td>
<td width="69" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">2</div>
</td>
</tr><tr><td width="57" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">MOV</div>
</td>
<td width="116" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">direct，#data</div>
</td>
<td width="287" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">立即数传送到直接地址</div>
</td>
<td width="83" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">3</div>
</td>
<td width="69" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">2</div>
</td>
</tr><tr><td width="57" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">MOV</div>
</td>
<td width="116" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">@Ri，A</div>
</td>
<td width="287" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">直接地址传送到直接地址</div>
</td>
<td width="83" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">1</div>
</td>
<td width="69" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">2</div>
</td>
</tr><tr><td width="57" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">MOV</div>
</td>
<td width="116" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">@Ri，direct</div>
</td>
<td width="287" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">直接地址传送到间接RAM</div>
</td>
<td width="83" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">2</div>
</td>
<td width="69" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">1</div>
</td>
</tr><tr><td width="57" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">MOV</div>
</td>
<td width="116" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">@Ri，#data</div>
</td>
<td width="287" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">立即数传送到间接RAM</div>
</td>
<td width="83" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">2</div>
</td>
<td width="69" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">2</div>
</td>
</tr><tr><td width="57" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">MOV</div>
</td>
<td width="116" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">DPTR，#data16</div>
</td>
<td width="287" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">16 位常数加载到数据指针</div>
</td>
<td width="83" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">3</div>
</td>
<td width="69" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">1</div>
</td>
</tr><tr><td width="57" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">MOVC</div>
</td>
<td width="116" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">A，@A+DPTR</div>
</td>
<td width="287" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">代码字节传送到累加器</div>
</td>
<td width="83" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">1</div>
</td>
<td width="69" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">2</div>
</td>
</tr><tr><td width="57" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">MOVC</div>
</td>
<td width="116" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">A，@A+PC</div>
</td>
<td width="287" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">代码字节传送到累加器</div>
</td>
<td width="83" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">1</div>
</td>
<td width="69" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">2</div>
</td>
</tr><tr><td width="57" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">MOVX</div>
</td>
<td width="116" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">A，@Ri</div>
</td>
<td width="287" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">外部RAM(8 地址)传送到累加器</div>
</td>
<td width="83" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">1</div>
</td>
<td width="69" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">2</div>
</td>
</tr><tr><td width="57" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">MOVX</div>
</td>
<td width="116" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">A，@DPTR</div>
</td>
<td width="287" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">外部RAM(16 地址)传送到累加器</div>
</td>
<td width="83" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">1</div>
</td>
<td width="69" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">2</div>
</td>
</tr><tr><td width="57" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">MOVX</div>
</td>
<td width="116" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">@Ri，A</div>
</td>
<td width="287" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">累加器传送到外部RAM(8 地址)</div>
</td>
<td width="83" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">1</div>
</td>
<td width="69" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">2</div>
</td>
</tr><tr><td width="57" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">MOVX</div>
</td>
<td width="116" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">@DPTR，A</div>
</td>
<td width="287" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">累加器传送到外部RAM(16 地址)</div>
</td>
<td width="83" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">1</div>
</td>
<td width="69" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">2</div>
</td>
</tr><tr><td width="57" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">PUSH</div>
</td>
<td width="116" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">direct</div>
</td>
<td width="287" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">直接地址压入堆栈</div>
</td>
<td width="83" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">2</div>
</td>
<td width="69" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">2</div>
</td>
</tr><tr><td width="57" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">POP</div>
</td>
<td width="116" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">direct</div>
</td>
<td width="287" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">直接地址弹出堆栈</div>
</td>
<td width="83" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">2</div>
</td>
<td width="69" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">2</div>
</td>
</tr><tr><td width="57" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">XCH</div>
</td>
<td width="116" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">A,Rn</div>
</td>
<td width="287" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">寄存器和累加器交换</div>
</td>
<td width="83" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">1</div>
</td>
<td width="69" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">1</div>
</td>
</tr><tr><td width="57" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">XCH</div>
</td>
<td width="116" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">A, direct</div>
</td>
<td width="287" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">直接地址和累加器交换</div>
</td>
<td width="83" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">2</div>
</td>
<td width="69" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">1</div>
</td>
</tr><tr><td width="57" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">XCH</div>
</td>
<td width="116" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">A, @Ri</div>
</td>
<td width="287" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">间接RAM 和累加器交换</div>
</td>
<td width="83" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">1</div>
</td>
<td width="69" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">1</div>
</td>
</tr><tr><td width="57" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">XCHD</div>
</td>
<td width="116" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">A, @Ri</div>
</td>
<td width="287" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">间接RAM 和累加器交换低4 位字节</div>
</td>
<td width="83" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">1</div>
</td>
<td width="69" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">1</div>
</td>
</tr><tr><td valign="top" width="612" colspan="5" style="font-size:14px;padding:8px;line-height:28px;">
<div align="center" style="line-height:25px;"><span style="color:rgb(0,0,255);">(算术运算类指令)</span></div>
</td>
</tr><tr><td width="57" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">INC</div>
</td>
<td width="116" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">A</div>
</td>
<td width="287" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">累加器加1</div>
</td>
<td width="83" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">1</div>
</td>
<td width="69" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">1</div>
</td>
</tr><tr><td width="57" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">INC</div>
</td>
<td width="116" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">Rn</div>
</td>
<td width="287" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">寄存器加1</div>
</td>
<td width="83" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">1</div>
</td>
<td width="69" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">1</div>
</td>
</tr><tr><td width="57" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">INC</div>
</td>
<td width="116" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">direct</div>
</td>
<td width="287" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">直接地址加1</div>
</td>
<td width="83" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">2</div>
</td>
<td width="69" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">1</div>
</td>
</tr><tr><td width="57" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">INC</div>
</td>
<td width="116" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">@Ri</div>
</td>
<td width="287" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">间接RAM 加1</div>
</td>
<td width="83" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">1</div>
</td>
<td width="69" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">1</div>
</td>
</tr><tr><td width="57" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">INC</div>
</td>
<td width="116" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">DPTR</div>
</td>
<td width="287" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">数据指针加1</div>
</td>
<td width="83" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">1</div>
</td>
<td width="69" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">2</div>
</td>
</tr><tr><td width="57" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">DEC</div>
</td>
<td width="116" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">A</div>
</td>
<td width="287" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">累加器减1</div>
</td>
<td width="83" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">1</div>
</td>
<td width="69" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">1</div>
</td>
</tr><tr><td width="57" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">DEC</div>
</td>
<td width="116" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">Rn</div>
</td>
<td width="287" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">寄存器减1</div>
</td>
<td width="83" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">1</div>
</td>
<td width="69" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">1</div>
</td>
</tr><tr><td width="57" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">DEC</div>
</td>
<td width="116" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">direct</div>
</td>
<td width="287" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">直接地址减1</div>
</td>
<td width="83" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">2</div>
</td>
<td width="69" style="font-size:14px;padding:8px;line-height:28px;">
<div style="line-height:25px;">2</div>
</td>
</tr></tbody></table>