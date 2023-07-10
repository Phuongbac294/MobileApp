const fs = require('fs');

const readFile = (fileName) => fs.readFile(
    `./database/${fileName}`,
    'utf-8',
    (err, re) => {
        if (err) {console.log(err);}
        console.log('result', re);
    }
)

readFile('text.txt');


