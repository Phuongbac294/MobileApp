const fs = require('fs');

const fsRead = async () => await fs.promises.readFile('./src/student.json', 'utf-8');
const fsWrite = async (stringData) => await fs.promises.writeFile('./src/student.json', stringData);
const generateId = () => new Date().valueOf();

const readAllUser = async () => {
    try {
        const dataString = await fsRead();
        const dataObj = JSON.parse(dataString);
        return dataObj;
    } catch (e) {
        console.log(e);
        return [];
    }
}

const getUserById = async (id) => {

}

const createUser = async (userData) => {
    const oldData = await readAllUser();
    // oldData.push(userData);
    userData.id = generateId();
    const newData = [...oldData, userData];
    const newDataConvertToString = JSON.stringify(newData, null, 4);
    await fsWrite(newDataConvertToString);
}

module.exports = {
    fsRead,
    fsWrite,
    readAllUser,
    getUserById,
    createUser
}