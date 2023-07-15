const fs = require('fs');
const path = require('path');

const fsRead = async () => await fs.promises.readFile(path.resolve(__dirname,`../database/teacher.json`), 'utf8');
const fsWrite = async (string) => await fs.promises.writeFile(path.resolve(__dirname,'../database/teacher.json'), string);
const generateId = () => new Date().valueOf();

// handle logic
const readAll = async () => {
    try {
        const dataString = await fsRead()   ;
        const dataObj = JSON.parse(dataString);
        console.log(dataObj);
        return dataObj;
    } catch (e) {
        return [];
    }
}

// create a new user
const createTeacher = async (userData) => {
    const oldData = await readAll();
    userData.id = generateId();
    oldData.push(userData);
    console.log('olddata', oldData);
    const newDataConvertToString = JSON.stringify(oldData);
    await fsWrite(newDataConvertToString);
    return;
}

// get one user
const getById = async (id) => {
    const dataUser = await readAll();
    const userFounded = dataUser.find(user => user.id === id);
    return userFounded;
}

 // update a user
 const update = async (id, newDataUpdate) => {
     const dataUser = await readAll(); // đọc file
     const index = dataUser.findIndex(user => user.id === id); // tìm dư liệu trong mảng theo id
    if (index !== -1) { // true
     const oldData = dataUser[index]; // lây phần từ ctuwf mẳng theo id tìm được
     dataUser[index] = {...oldData, ...newDataUpdate}; // update phần từ
     const newDataConvertToString = JSON.stringify(dataUser, null, 4); // tạo mảng mới 
     await fsWrite(newDataConvertToString);
     return 1;
    } else { return 0; };
 } 

 // delete a user
 const deleteTeacher = async (id) => {
     const oldData = await readAll(); // đọc file
     const newData = oldData.filter(i => i.id !== id) // tạo dư liệu mới trong mảng bỏ phần tử có id
    if (newData.length === oldData.length) { // true
        return 0;
    } else { 
        const newDataConvertToString = JSON.stringify(newData, null, 4); // tạo mảng mới 
        await fsWrite(newDataConvertToString);
        return 0; };
 }

module.exports = {
    readAll,
    getById,
    createTeacher,
    update,
    deleteTeacher
}