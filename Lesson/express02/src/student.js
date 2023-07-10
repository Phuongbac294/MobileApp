const exp = require('express');
const studentRoute = exp.Router();

const nameRouter = require('./name.js');

studentRoute.get('/', (req, res) => {
    res.send('Hello students!');
});

studentRoute.get('/add', (req, res) => {
    res.send('Nhập tên bạn vào')
});

studentRoute.use('/name', nameRouter);


module.exports = studentRoute;