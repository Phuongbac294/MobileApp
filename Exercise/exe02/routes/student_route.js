const exp = require('express')
// const path = require('path');
const handlerFile = require('../handler/handle_file.js');

const studentRoute = exp.Router();


studentRoute.get('/', (req, res) => {
    const data = handlerFile.readFile('student.json')
    res.status(200).send(data);
});


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
    const newStudent = await req.body;
    await handlerFile.updateFile('student.json', id, newStudent)
    const data = await handlerFile.readFile('student.json');
    res.status(200).send(data)
})

studentRoute.delete('/remove/:studentId', async (req, res) => {
    const i = await parseInt(req.params.studentId);
    await handlerFile.deleteFile('student.json',i);
    const data = await handlerFile.readFile('student.json');
    res.status(200).send(data)
})
module.exports = studentRoute;