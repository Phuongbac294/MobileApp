const exp = require('express')
// const path = require('path');
const handlerFile = require('../handler/handle_student.js');

const studentRoute = exp.Router();


studentRoute.get('/', async (req, res) => {
    const data = await handlerFile.readFile('student.json')
    res.status(200).send(data);
});

studentRoute.post('/add', async (req, res) => {
    const newdata = await req.body;
    console.log('new data', newdata);
    await handlerFile.createFile('student.json', newdata)
    const student = await handlerFile.readFile('student.json');
    console.log('student', student);
    res.status(200).send(student);
})

studentRoute.get('/:studentId', async (req, res) => {
    const id = await parseInt(req.params.studentId);
    console.log("id",id);
    const data = await handlerFile.getFileById('student.json', id);
    console.log('data',data);
    res.status(200).send(data);
})
studentRoute.patch('/update/:studentId', async (req, res) => {
    const i = await req.params.studentId;
    const id = parseInt(i);
    console.log(id);
    const newStudent = await req.body;
    console.log('newStudent', newStudent);
    await handlerFile.updateById('student.json', id, newStudent)
    const data = await handlerFile.readFile('student.json');
    res.status(200).send(data)
})

studentRoute.delete('/remove/:studentId', async (req, res) => {
    const i = await parseInt(req.params.studentId);
    await handlerFile.deleteById('student.json',i);
    const data = await handlerFile.readFile('student.json');
    res.status(200).send(data)
})
module.exports = studentRoute;