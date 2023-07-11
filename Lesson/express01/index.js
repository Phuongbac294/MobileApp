const fs = require('fs');                           // khai báo biến sử dụng thư viện fs
const path = require('path');
const generateId = () => new Date().valueOf();
// const readSyc = require('./src/lib/readFile');      // Khai báo biến sử dụng hàm theo đường dẫn

//  fs.readFile(  // Đọc file
//     './src/database/text.txt', // đường dẫn tương đối
//     'utf-8', 
//     (err, re) => { // function 
//         if (err) {console.log(err)}; // nếu lỗi thì ...
//         console.log('reuslt',re); // không lỗi thực hiện ...
//     }
//  )

// const readFile = async () => {
//     const data = readSyc('personnel.json', (reuslt) => {
//         console.log('result',reuslt);
//     });
//     console.log('data',data);
    
//     const dataResult = await readSyc('personnel.json');
//     console.log('dataResult',dataResult);
// }

const readAll = async (fileName) => {
    try {
        const data = await fs.promises.readFile(
            path.resolve(__dirname, `./src/database/${fileName}`),
            'utf-8'
            );
        return JSON.parse(data);
        // console.log('readAll', JSON.parse(data));
    } catch (err) {
        return [];
    }
};

const  createFile = async (fileName, studentData) => {
    try {
        const allStudent = await readAll(fileName);
        studentData.id = generateId()
        allStudent.push(studentData);
        const dataSave = JSON.stringify(allStudent, null, 4);
        await fs.promises.writeFile(
                    path.resolve(__dirname, `./src/database/${fileName}`),
                    dataSave
                )
        return console.log('createStudent', JSON.parse(dataSave));
    } catch (err) {
        return [];
    }
}

const updateFile = async (fileName, id, newUpdate) => {
    try {
        const data = await readAll(fileName);
        const dataId = data.find(user => user.id === id);
        // console.log(dataId);
        const dataUpdate = {...dataId, newUpdate};
        console.log(dataUpdate);
        data = [...data, dataUpdate];
        const dataSave = JSON.stringify(data, null, 4);
        await fs.promises.write(path.resolve(__dirname, `./src/database/${fileName}`), dataSave);
    } catch (err) {console.log(err);}
}
const newPersonnel = {
        name: "Nguyễn Sỹ Chí",
        positions: "Phó giám đốc",
        year: "1973" ,
        address: "Bắc Ninh",
        telephone: "0914999028",
        email: "nguyensychi@gmail.com"
}





// readAll('student.json');
// createFile('student.json', {name: "hoc", age: 19});
// createFile('personnel.json', newPersonnel);
updateFile('personnel.json', "3", {name: "hoc"})