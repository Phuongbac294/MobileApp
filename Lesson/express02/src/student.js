const exp = require('express');
const studentRoute = exp.Router();
const student = require('/student.json');

const nameRouter = require('./name.js');

studentRoute.get('/', (req, res) => {
    res.send('Hello students!');
});

studentRoute.get('/add', (req, res) => {
    
    res.json(student);
});

studentRoute.use('/name', nameRouter);


module.exports = studentRoute;