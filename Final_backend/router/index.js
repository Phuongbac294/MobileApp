const express = require('express');


const user = require('./user');
const tank = require('./tank');
const chai = require('./chai');
const car = require('./car');

const router = express.Router();

router.use('/users', user);
router.use('/chai', chai);
router.use('/tanks', tank);
router.use('/cars', car);

router.get('/', (req, res) => {
    res.send('Welcome to the game!');
})

module.exports = router;