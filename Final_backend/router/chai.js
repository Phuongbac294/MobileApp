const express = require('express');
// const model = require('../model/chai.model')
const controller = require('../controler/chaiController')

const chai = express.Router();

chai.get('/', (req, res) => {
    res.send('Welcome to the Chai!');
})

chai.get('/add', controller.getChai);
chai.post('/create',controller.createChai);

// chai.patch('/update', (req, res) => {});

// chai.delete('/delete', (req, res) => {});

module.exports = chai;