const fs = require('fs');
const readSyc = require('./src/lib/readFile');

//  fs.readFile(
//     './src/database/text.txt',
//     'utf-8',
//     (err, re) => {
//         if (err) {console.log(err)};
//         console.log('reuslt',re);
//     }
//  )
const main = async () => {
    const data = readSyc('personnel.json', (reuslt) => {
       console.log('result',reuslt);
    });
    console.log('data',data);

    const dataResult = await readSyc('personnel.json');
    console.log('dataResult',dataResult);
}


main();