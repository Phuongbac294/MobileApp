const express = require('express');

const tank = express.Router();
const tankData = require('../database/tank.json')
const Controler = require('../controler/tank.controler');


tank.get('/', (req, res) => {
    res.send('Welcome to the Tanks!');
})

tank.get('/tonghop', Controler.getAll())

tank.post('/add', (req, res) => {
    const data = req.body;
    tankData.push(data);
    res.send(tankData);
})

tank.patch('/update:id', (req, res) => {
    const data = req.body;
    const id = req.params.id;
    const index = tankData.findIndex(user => user.id === id);
    if (index !== -1) {
        tankData[index] = {...tankData[index], ...data};
    }
    res.send(tankData);
})

module.exports = tank;