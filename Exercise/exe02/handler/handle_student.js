const fs = require('fs')
const path = require('path');
const generateId = () => new Date().valueOf();

const read = async (file) => await fs.promises.readFile(path.resolve(__dirname, `../database/${file}`), 'utf8');
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

    const oldData = await readFile(file);
    console.log('old data', oldData);
    data.id = generateId();
    oldData.push(data);
    const newDataCoventString = JSON.stringify(oldData);
    await write(file, newDataCoventString);
    return 1;
}

const getFileById = async (file, id) => {
    const data = await readFile(file)
    const dataId = data.find(user => user.id === id)
    return dataId;
}

const updateById = async (file, id, updata) => {
    const data = await readFile(file);
    const index = data.findIndex(user => user.id === id)
    if (index > 0) {
        const newData = data[index];
        data[index] = {...newData, ...updata};
        const newDataCoventString = JSON.stringify(data);
        await write(file, newDataCoventString);
        return 1;
    } else { return 0; }
}

const deleteById = async (file, id) => {
    const data = await readFile(file);
    const newData = data.filter(user => user.id !== id)
    if (newData.length !== data.length) {
        const newDataCoventString = JSON.stringify(newData);
        await write(file, newDataCoventString);
        return 1;
    } else { return 0; }
}

module.exports = { readFile, createFile, getFileById, deleteById, updateById };