const fs = require('fs');
var projectName;
process.stdout.write('please input projectName');
process.stdin.on('data', (data) => {
    projectName = data.toString().trim();
    fs.mkdirSync(`D:\\myh5\\project\\${projectName}`, (err) => { //注意斜杠转义
        if (err) throw err;
    });
    fs.mkdirSync(`D:\\myh5\\project\\${projectName}\\build`, (err) => { //注意斜杠转义
        if (err) throw err;
    });
    fs.mkdirSync(`D:\\myh5\\project\\${projectName}\\public\\`, (err) => { //注意斜杠转义
        if (err) throw err;
    });
    fs.mkdirSync(`D:\\myh5\\project\\${projectName}\\public\\js`, (err) => { //注意斜杠转义
        if (err) throw err;
    });
    fs.mkdirSync(`D:\\myh5\\project\\${projectName}\\public\\css`, (err) => { //注意斜杠转义
        if (err) throw err;
    });
    fs.mkdirSync(`D:\\myh5\\project\\${projectName}\\public\\img`, (err) => { //注意斜杠转义
        if (err) throw err;
    });
    // fs.mkdir(`D:\\myh5\\project\\${projectName}\\public\\index.html`, (err) => { //注意斜杠转义
    //     if (err) throw err;
    // });//不能直接创建文件,只会创建目录
});