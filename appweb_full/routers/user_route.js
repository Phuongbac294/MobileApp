const express = require('express');

const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    res.send('Welcome userName');
})

module.exports = userRouter;