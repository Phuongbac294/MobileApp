const express = require('express');

const chai = express.Router();

chai.get('/', (req, res) => {
    res.send('Welcome to the chai!');
})

module.exports = chai;