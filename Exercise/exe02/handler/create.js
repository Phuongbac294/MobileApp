const read = require('./read');
const path = require('path');
const fs = require('fs');
const generateId = () => new Date().valueOf();

const create = async (file, data) => {
    const oldData = await read(file);
    console.log('old data', oldData);
    data.id = generateId();
    oldData.push(data);
    const newData = JSON.stringify(oldData);
    await fs.promises.writeFile(path.resolve(__dirname, `../database/${file}`), newData);
}

module.exports = create;