const fs = require('fs');
const path = require('path');

const readFile = (filename, cb) => {
    fs.readFile(path.join(__dirname, `../database/${filename}`), 'utf8',
    (err, re) => {
        if (err) {console.log(err)}
        console.log(JSON.parse(re), re);
        cb(JSON.parse(re));
    })
}

module.exports=readFile;