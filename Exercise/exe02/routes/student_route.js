const exp = require('express')
const path = require('path');

const studentRoute = exp.Router();

studentRoute.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'../database/student.json'));
});



module.exports = studentRoute;