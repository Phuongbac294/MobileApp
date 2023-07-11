const fs = require('fs');
const path = require('path');

const fsRead = async (file) => await fs.promises.readFile(path.resolve(__dirname, `./database/${file}`), 'utf-8');
const fsWrite = async (file, string) => await fs.promises.writeFile(path.resolve(__dirname, `./database/${file}`), string);
// const generateId = () => new Date().valueOf();

// handle logic
const readAllUser = async (user) => {
    try {
        const dataString = await fsRead(user);
        const dataObj = JSON.parse(dataString);
        console.log('readAllUser', dataObj);
        return dataObj;
    } catch (e) {
        return [];
    }
}

// get one user
const getUserById = async (id) => {

}

// create a new user
const createUser = async (file, userData) => {
    const oldData = await fsRead(file);
    console.log('oldData',oldData);
    // userData.id = generateId();
    const newData = [...oldData, userData];
    console.log(newData);
    const newDataConvertToString = JSON.stringify(newData);
    await fsWrite(file, newDataConvertToString);
}


module.exports = {
    fsRead,
    fsWrite,
    readAllUser,
    getUserById,
    createUser
}