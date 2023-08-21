const express = require('express');


const user = require('./user');
const tank = require('./tank');
const chai = require('./chai');

const { userController } = require('../controler/userController');
const { authMiddleware } = require('../middleware/auth');

const router = express.Router();

router.use('/users', user);
router.use('/chai', chai);
// router.use('/tanks', tank);

router.get('/', (req, res) => {
    res.send('Welcome to the game!');
})

module.exports = router;