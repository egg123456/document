const fs = require('fs');
let o = {};
fs.readdir(__dirname, (err, files) => {
    if (err) throw err;
    console.log(files);
    files.forEach((item, index) => {
        console.log(item);
        fs.readFile(item, 'utf8', (err, data) => {
            if (err) throw err;
            console.log(data)
        })
    })
})