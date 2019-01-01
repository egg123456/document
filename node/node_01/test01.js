const buf = Buffer.from('hello world', 'ascii');

console.log(buf.toString());

// 输出 68656c6c6f20776f726c64
console.log(buf.toString('hex'));

// 输出 aGVsbG8gd29ybGQ=
console.log(buf.toString('base64'));

process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});