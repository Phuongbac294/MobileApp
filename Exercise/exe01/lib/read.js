const fs = require('fs');
const path = require('path');

const readFile = (fileName) => fs.readFile(
    path.resolve(__dirname,`../database/${fileName}`),
    'utf-8',
    (err, re) => {
        if (err) {console.log(err);}
        console.log('result', JSON.parse(re));
        return
    }
)

const readSyc = async (fileName) => {
try {
    const data = await fs.promises.readFile(path.resolve(__dirname, `../database/${fileName}`), `utf-8`);
    return JSON.parse(data)
} catch (err) {
    console.log('error', err);
    return []
}
}

module.exports = {
    readFile, readSyc }