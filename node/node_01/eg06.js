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
    // console.log(users[admin])
    if (inputName) {
        if (Object.keys(users).indexOf(data) === -1) {
            process.stdout.write('username is existed');
            process.stdout.write('please input username');
            inputName = true;
        } else {
            process.stdin.write('please input password');
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