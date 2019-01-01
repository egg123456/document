# linux command

### base 

command|description
---|---
cd|切换目录
ls -l|查看目录下的文件及权限
cp|cp -a file1 file2 #连同文件的所有特性把文件file1复制成文件file2 
mv|mv file1 file2 file3 dir # 把文件file1、file2、file3移动到目录dir中
rm|rm -i file # 删除文件file，在删除之前会询问是否进行该操作  rm -fr dir # 强制删除目录dir中的所有文件 
ps|ps aux # 查看系统所有的进程数据 
kill|kill -signal PID  用于向某个工作（%jobnumber）或者是某个PID（数字）传送一个信号
file|file filename  用于判断接在file命令后的文件的基本数据
tar|压缩：tar -jcv -f filename.tar.bz2 要被处理的文件或目录名称  查询：tar -jtv -f filename.tar.bz2  解压：tar -jxv -f filename.tar.bz2 -C 欲解压缩的目录 
cat|cat text | less # 查看text文件中的内容 
vim|文本编辑
gcc|gcc -o test test.c -lm -std=c99 # 把源文件test.c按照c99标准编译成可执行程序test gcc -S test.c  # 把源文件test.c转换为相应的汇编程序源文件test.s 
tIME|检测程序执行时间








