function outx(str, num) {
    for (var i = 0; i < num; i++) {
        process.stdout.write(str);
    }
}

function outy(str, num) {
    for (var i = 0; i < num; i++) {
        outx('   ', i);
        outx(str, 2 * num - 2 * i - 1);
        process.stdout.write('\n');
    }
}
outy(' * ', 11);
var str = 'node';

process.stdout.write(`welcome to ${str}\n`)
var users = {
    'admin': '123456',
    'zhangsan': '123123',
    'lisi': '111111'
}
let inputName = true;
let userName;
process.stdout.write('please input username');
process.stdin.on('data', (input) => {
    let data = input.toString().trim();
    console.log(Object.keys(users).indexOf(data));
    if (inputName) {
        if (Object.keys(users).indexOf(data) === -1) {
            process.stdout.write('username is not existed');
            process.stdout.write('please input username');
            inputName = true;
        } else {
            process.stdout.write('please input password');
            inputName = false;
            userName = data;
        }
    } else {
        if (data === users[userName]) {
            console.log('success log in');
            process.exit();
        } else {
            console.log('please input password');
        }
    }
})