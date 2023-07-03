const fs = require('fs');
const path = require('path');

// const read = (filename, cb) => {
//     fs.readFile(path.join(__dirname, `../database/${filename}`), 'utf8',
//     (err, re) => {
//         if (err) {console.log(err)}
//         // console.log(JSON.parse(re), re);
//         cb(JSON.parse(re))
//     })
// }

const readSyc = async(filename) => {
    try {
        const data =  await fs.promises.readFile(
        path.resolve(__dirname, `../database/${filename}`),
        'utf8');
            return JSON.parse(data);
    }
    catch (err) {
        console.log(err);
        return[]
    }
}
module.exports= readSyc;
