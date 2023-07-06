const fs = require('fs');
// const express = require('express');

// const app = express();

const fsReadFile = async () => {
    const data = await fs.promises.readFile(
        path(_dirname, 'database/personel.json'), 'utf8'
    );
}

const fsWriteFile = async (stringData) => {
    await fs.promises.writeFile(
            path(_dirname, 'database/personel.json'),
            stringData
    );
}

const generatwId = () => new Date().valueOf(); // lấy dữ tiệu tới minicent từ năm 1970 đến bây giờ

const readAllUser = async () => {
    try {
        const dataString = await fsReadFile()
        const dataObj = JSON.parse(dataString);
        return dataObj;
    } catch (err) {
        return [];
    };
};

const getUserById = async () => {
};

const createUser = async (userData) => {
    const oldData = await readAllUser();
    userData.id = generatwId();
    const newData = [...oldData, userData];;
    const newDataConverToString = JSON.stringify(newData,null, 4); // file ko đọc được dữ liệu Obj nên phải chuyển về dư liệu text ( string) để lưu.
    await fsReadFile(newDataConverToString); // thực hiện đọc file
    
}

module.exports = { readAllUser, createUser, getUserById }