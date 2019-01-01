const fs = require('fs');
fs.readdir(__dirname, (err, files) => {
    if (err) throw err;
    files.forEach((item, index) => {
        var oldPath = `${__dirname}\\${item}`;
        var newPath = `${__dirname}\\_${item}`;
        console.log(oldPath);
        console.log(newPath);
        fs.rename(oldPath, newPath, (err) => {
            if (err) throw err;
        })
    })
})