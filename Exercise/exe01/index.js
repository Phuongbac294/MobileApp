// const exp = require('express');

// const app = express();

const fs = require('fs');
const path = require('path');

const readAllStudent = async (fileName) => {
    try {
        const data = await fs.promises.readFile(path.resolve(__dirname,`./database/${fileName}`), 'utf-8');
        console.log('data', JSON.parse(data));
        return JSON.parse(data);
    } catch (e) {
        return [];
    }
}

const createStudent = async (data, fileName) => {
    const allStudent = await readAllStudent(fileName);
    allStudent.push(data);
    const dataSave = JSON.stringify(allStudent, null, 4);
    await fs.promises.writeFile(path.resolve(__dirname,`./database/${fileName}`), 'utf-8', dataSave);
}

const newStudent = {
    name: "qwe",
    age: 23
}
 const main = async (data, fileName) => {
    await createStudent(data, fileName);
    const dataResult = await readAllStudent(fileName);
    console.log('dataResult', dataResult);

 }

 main(newStudent, 'student.json')

// const {readFile, readSyc} = require('./lib/read')
// const main = async () => {
//     const data = readFile('teacher.json', (result) => {
//         console.log('result', result);});
//     console.log('data', data);

//     const dataResult = await readSyc('student.json');
//     console.log('dataResult', dataResult);
// }
// main();