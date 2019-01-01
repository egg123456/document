var msg = 'hello';
process.stdout.write(`${msg} world`);

var arr = [];
arr[arr.length] = `
＞ ＜
 ▽`;
arr[arr.length] = `
＞ ＜
  @`;
var fps = 60;
var current = 0;
var render = () => {
    process.stdout.write('\033|23');
    process.stdout.write('\033|0f');
    if (current == arr.length) current = 0;
    process.stdout.write(arr[current]);
}
setInterval(render, 1000 / 60)