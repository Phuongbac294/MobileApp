const exp = require('express');
const studentRoute = exp.Router();

studentRoute.get('/', (req, res) => {
    res.send('Hello students!');
});

studentRoute.get('/add', (req, res) => {
    res.send('Nhập tên bạn vào')
});

module.exports = studentRoute;