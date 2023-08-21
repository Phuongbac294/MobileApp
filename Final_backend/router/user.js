const express = require('express');
const {userController} = require('../controler/userController');
const { authMiddleware} = require('../middleware/auth');
const { middlewareValidate, updateUserSchema } = require('../middleware/validate');


const user = express.Router();

user.get('/', (req, res) => {
    res.send('Welcome to the users!');
})

user.get('/add', userController.createUser);
user.get('/danhsach', userController.getUsers());

user.patch('/update', middlewareValidate(updateUserSchema), userController.updateUser());

user.delete('/delete', userController.deleteUser());

module.exports = user;