const fs = require('fs');
// const path = require('path');

const fsRead = async () => await fs.promises.readFile('user.json', 'utf8');
const fsWrite = async (string) => await fs.promises.writeFile('user.json', string);
const generateId = () => new Date().valueOf();

// handle logic
const readAllUser = async () => {
    try {
        const dataString = await fsRead();
        const dataObj = JSON.parse(dataString);
        return dataObj;
    } catch (e) {
        return [];
    }
}


// get one user
const getUserById = async (id) => {
    const dataUser = await readAllUser();
    const userFounded = dataUser.find(user => user.id === id);
    return userFounded;
}

const getUserByName = async (name) => {
    const dataUser = await readAllUser();
    const userFounded = dataUser.find(user => user.name === name);
    return userFounded;
}

// create a new user
const createUser = async (userData) => {
    const oldData = await readAllUser();
    // userData.id = generateId();
    const newData = [...oldData, userData];
    console.log(newData);
    const newDataConvertToString = JSON.stringify(newData);
    await fsWrite(newDataConvertToString);
}
 // update a user
 const updateUser = async (id, newDataUpdate) => {
     const dataUser = await readAllUser(); // đọc file
     const index = dataUser.findIndex(user => user.id === id); // tìm dư liệu trong mảng theo id
    if (index !== -1) { // true
     const oldData = dataUser[index]; // lây phần từ ctuwf mẳng theo id tìm được
     dataUser[index] = {...oldData, newDataUpdate}; // update phần từ
     const newDataConvertToString = JSON.stringify(dataUser, null, 4); // tạo mảng mới 
     await fsWrite(newDataConvertToString);
     return 1;
    } else { return 0; };
 } 

 // delete a user
 const deleteUser = async (id) => {
     const oldData = await readAllUser(); // đọc file
     const newData = oldData.filter(i => i.id !== id) // tạo dư liệu mới trong mảng bỏ phần tử có id
    if (newData.length === oldData.length) { // true
        return 0;
    } else { 
        const newDataConvertToString = JSON.stringify(newData, null, 4); // tạo mảng mới 
        await fsWrite(newDataConvertToString);
        return 0; };
 }

module.exports = {
    fsRead,
    fsWrite,
    readAllUser,
    getUserById,
    createUser,
    getUserByName,
    updateUser,
    deleteUser
}