const fs = require('fs');
var data = 'eg071234567890';
// fs.writeFile('eg07.js', data, (err) => {
//     if (err) throw err;
// })
fs.appendFile('eg07.js', data, (err) => {
    if (err) throw err;
})