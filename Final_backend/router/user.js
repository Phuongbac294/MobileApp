const express = require('express');

const user = express.Router();
const usersData = require('../database/user.json')

user.get('/', (req, res) => {
    res.send('Welcome to the users!');
})

user.get('/danhsach', (req, res) => {
    const data = usersData;
    res.send(data);
})

user.post('/danhsach/add', (req, res) => {
    const newUser = req.body;    
    usersData.push(newUser);
    res.send(usersData);
})

user.put('/danhsach/update/:email', (req, res) => {
    const email = req.params;
    const data = req.body;
    const index = usersData.findIndex(user => user.email === email);
    if (index !== -1) {
        usersData[index] ={...usersData[index], ...data}       
    } else {return 0;};
    res.send(usersData);
})

user.delete('/danhsach/delete', (req, res) => {
    const email = req.body;
    const newdata = usersData.filter(user => user.email !== email);
    if (newdata.length > usersData.length) {
        usersData = newdata;       
    } else {return 0;};
    res.send(usersData);
})

module.exports = user;