const fs = require('fs');
const path = require('path');

const generateId = () => new Date().valueOf();

const fsRead = async (file) => await fs.promises.readFile(path.rerovle(__dirname, `../database/${file}`), 'utf8');
const fsWrite = async (file, data) => await fs.promises.writeFile(path.rerovle(__dirname, `../database/${file}`), data);

const readFile = async (file) => {
    try {
        const dataString = await fsRead(file);
        const dataObject = JSON.parse(dataString);
        return dataObject;

    } catch (err) {
        return []};
}

readFile('userData.json');
const createFile = async (file, newData) => {
    try {
        const oldData = await readFile(file);
        newData.id = generateId();
        oldData.push(newData);
        const dataString = JSON.stringify(oldData);
        await fsWrite(file, dataString);
        return true;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    readFile,
    createFile
}