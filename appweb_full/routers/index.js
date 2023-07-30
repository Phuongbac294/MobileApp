const express= require('express');

const userRouter = require('./user_route');
const orderRouter = require('./order_route');

const router = express.Router();



router.use('/user', userRouter);
router.use('/order', orderRouter);

module.exports = router;
