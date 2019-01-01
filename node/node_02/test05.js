var fs = require("fs");

console.log("查看 /tmp 目录");
fs.readdir("D:\\myh5\\node\\node_02", function(err, files) {
    if (err) {
        return console.error(err);
    }
    files.forEach(function(file) {
        console.log(file);
    });
});
fs.readdir("D:\\myh5\\node", function(err, files) { //node的子级文件夹与文件
    if (err) {
        return console.error(err);
    }
    files.forEach(function(file) {
        console.log(file);
    });
});