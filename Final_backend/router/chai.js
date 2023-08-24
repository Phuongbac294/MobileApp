const express = require('express');
const model = require('../model/chai.model')

const chai = express.Router();

chai.get('/', (req, res) => {
    res.send('Welcome to the Chai!');
})

chai.get('/danhsach', (req, res) => {});
chai.post('/create', async (req, res) => {
    let data = await req.body;
    let query = await model.create(data);
    res.json(query);
});

// chai.patch('/update', (req, res) => {});

// chai.delete('/delete', (req, res) => {});

module.exports = chai;