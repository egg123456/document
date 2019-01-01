var arr = [];
const fs = require('fs');
for (var i = 1; i < 7; i++) {
    arr[arr.length] = fs.readFileSync(`./sucai/${i}.txt`, 'utf8');
}
var fps = 60;
var current = 0;
var render = () => {
    // process.stdout.write('\033')
    if (current == arr.length) current = 0;
    process.stdout.write(arr[current]);
}
setInterval(render, 1000 / 100)