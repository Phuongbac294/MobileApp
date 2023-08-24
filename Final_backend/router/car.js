const express = require('express');
const model = require('../model/car.model');


const carRouters = express.Router();

carRouters.get('/', (req, res) => {
    res.send('wellcome to the Car');
});

carRouters.get('/add', async (req, res) => {
    let query = await model.getAll();
    res.json(query);
})

carRouters.post('/create', async (req, res) => {
    let data = await req.body;
    let query = await model.create(data);
    res.json(query);
})

carRouters.patch('/update/:id', async (req, res) => {
    let id = req.params;
    let data = await req.body;
    // console.log(`id: ${id}, data: ${data}`);
    let query = await model.update(id, data);
    res.json(query);
});

carRouters.delete('/delete/:id', async (req, res) => {
    let id = req.params;
    await model.delete(id);
    res.send('success');
})

module.exports = carRouters;