const express = require('express');

const tank = express.Router();
// const Controler = require('../controler/tank.controler');
const model = require('../model/tank.model')


tank.get('/', (req, res) => {
    res.send('Welcome to the Tanks!');
})

tank.get('/add', (req, res) => {
    let query = model.getAll();
    res.send(query)
})

tank.get('/:id', (req, res) => {
    let {id} = req.params;
    model.get(id).then(data =>{res.send(data)})
})

tank.post('/add', (req, res) => {
    const data = req.body;
    tankData.push(data);
    res.send(tankData);
})

// tank.patch('/update:id', (req, res) => {
//     const data = req.body;
//     const id = req.params.id;
//     const index = tankData.findIndex(user => user.id === id);
//     if (index !== -1) {
//         tankData[index] = {...tankData[index], ...data};
//     }
//     res.send(tankData);
// })

module.exports = tank;