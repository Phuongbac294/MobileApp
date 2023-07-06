const exp = require('express');
const studentRoute = exp.Router();
const student = require('/student.json');

studentRoute.get('/', (req, res) => {
    res.send('Hello students!');
});

studentRoute.get('/add', (req, res) => {
    
    res.json(student);
});

module.exports = studentRoute;