const exp = require('express')
// const path = require('path');
const handlerFile = require('../handler/handle_student.js');

const studentRoute = exp.Router();


studentRoute.get('/', async (req, res) => {
    const data = await handlerFile.readFile('student.json');
    console.log('data', data);
    res.status(200).send(data);
});

studentRoute.post('/add', async (req, res) =>{
    const newData = await req.body;
    console.log(newData);
    await handlerFile.createFile('student.json', newData);
    const result = await handlerFile.readFile('student.json');
    res.status(200).send(result);
});


module.exports = studentRoute;