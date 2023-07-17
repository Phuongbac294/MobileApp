const fs = require('fs')
const path = require('path');
const generateId = () => new Date().valueOf();

const read = async (file) => await fs.promises.readFile(path.join(__dirname, `../database/${file}`), 'utf8');
const write = async (file, string) => await fs.promises.writeFile(path.join(__dirname, `../database/${file}`), string);

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
    const oldData = await readFile(file);
    data.id = generateId();
    oldData.push(data);
    const newDataConvertToString = JSON.stringify(oldData);
    await write(file, newDataConvertToString);
    return;
}

const getFileById = async (file, id) => {
    const data = await readFile(file)
    console.log('datafile', data);
    const dataId = data.find(user => user.id === id)
    console.log('dataId', dataId);
    return dataId;
}

const updateFile = async (file, id, newData) => {
    const oldData = await readFile(file);
    const index = oldData.findIndex(data => data.id === id);
    if (index !== -1) {
        const updata = oldData[index];
        oldData[index] = {...updata, ...newData};
        const newDataConvertToString = JSON.stringify(oldData, null, 2);
        await write(file, newDataConvertToString);
        return 1;
    } else { return 0; }
}

const deleteFile = async (file, id) => {
    const oldData = await readFile(file);
    const newData = oldData.filter(i => i.id !== id);
    if (newData.length !== oldData.length) {
        const newDataConvertToString = JSON.stringify(newData, null, 2);
        await write(file, newDataConvertToString);
        return 1;
    } else { return 0; }
}

module.exports = {readFile, createFile, getFileById, updateFile, deleteFile}