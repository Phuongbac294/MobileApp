const fs = require('fs');
const readFile = require('./src/lib/readFile');

 fs.readFile(
    './src/database/text.txt',
    'utf-8',
    (err, re) => {
        if (err) {console.log(err)};
        console.log('reuslt',re);
    }
 )

 readFile('personnel.js')
