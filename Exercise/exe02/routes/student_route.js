const exp = require('express')
// const path = require('path');
const handlerFile = require('../handler/handle_file.js');

const studentRoute = exp.Router();


studentRoute.get('/', (req, res) => {
    const data = handlerFile.readFile('student.json')
    res.status(200).send(data);
});



module.exports = studentRoute;