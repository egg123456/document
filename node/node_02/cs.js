console.log('hello node');
// console.assert(true === false, "判断条件不成立")
console.log(__filename);
console.log(__dirname);
console.info('hello world');
console.error('error');
console.log(process.execPath);

process.on('exit', function(code) {

    // 以下代码永远不会执行
    setTimeout(function() {
        console.log("该代码不会执行");
    }, 0);

    console.log('退出码为:', code);
});
console.log("程序执行结束");

process.argv.forEach(function(val, index, array) {
    console.log(index + ': ' + val);
});
console.log(process.execPath);

// 输出当前目录
console.log('当前目录: ' + process.cwd());

// 输出当前版本
console.log('当前版本: ' + process.version);

// 输出内存使用情况
console.log(process.memoryUsage());