const fs = require('fs');
const path = require('path');

const read = async (file) => { 
    const data = await fs.promises.readFile(path.join(__dirname,`../database/${file}`), 'utf-8')
    const dataObj = JSON.parse(data)
    return dataObj
}

module.exports = read;
