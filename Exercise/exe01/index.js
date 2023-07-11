const exp = require('express');

const app = exp();

const fs = require('fs');
const path = require('path');
const handle = require('./handle_user')

const content = 'hello world, world!';
fs.writeFile('text.txt', content, (err) => {
    if (err) {console.error(err);}
})

const readAllStudent = async (fileName) => {
    try {
        const data = await fs.promises.readFile(path.resolve(__dirname,`./database/${fileName}`), 'utf-8');
        // console.log('data', JSON.parse(data));
        return JSON.parse(data);
    } catch (e) {
        return [];
    }
}

const createStudent = async (data, fileName) => {
    const allStudent = await readAllStudent(fileName);
    allStudent.push(data);
    const dataSave = JSON.stringify(allStudent, null, 4);
    // console.log('dataSave', JSON.parse(dataSave));
    await fs.promises.writeFile(path.resolve(__dirname,`./database/${fileName}`), dataSave);
}

const newStudent = {
    name: "student 5",
    age: 22
}
 const main = async (data, fileName) => {
    await createStudent(data, fileName);
    const dataResult = await readAllStudent(fileName);
    console.log('dataResult', dataResult);

 }

const read = handle.readAllUser('student.json');

console.log(read);
app.get('/', (req, res) => {
    res.send(read);
})


//  main(newStudent, 'student.json')

// const {readFile, readSyc} = require('./lib/read')
// const main = async () => {
//     const data = readFile('teacher.json', (result) => {
//         console.log('result', result);});
//     console.log('data', data);

//     const dataResult = await readSyc('student.json');
//     console.log('dataResult', dataResult);
// }
// main();

app.listen(3002, () => {
    console.log('server is running');
})