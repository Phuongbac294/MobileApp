const fs = require('fs')
const path = require('path');
const generateId = () => new Date().valueOf();

const read = async (file) => await fs.promises.readFile(path.join(__dirname, `../database/${file}`), 'utf8');
const write = async (file, data) => await fs.promises.writeFile(path.join(__dirname, `../database/${file}`), data);

const readFile = async (file) => {
    try {
        const dataString = await read(file);
        const dataObj = JSON.parse(dataString);
        return dataObj;
    } catch (err) {
        return [];
    }
};

const createFile = async (file, data) => {
    const oldData = await readFile(file)
    data.id = generateId();
    oldData.push(data);
    const newDataConvertToString = JSON.stringify(oldData);
    await write(file, newDataConvertToString);
    return;
}

const getFileById = async (file, id) => {
    const data = await readFile(file)
    const dataId = data.find(user => user.id === id)
    return dataId;
}

module.exports = {readFile, createFile, getFileById}