const exp = require('express');
const name = exp.Router();

name.get('/', (req, res) => {
    res.send('Hello Phuong');
});

module.exports = name;