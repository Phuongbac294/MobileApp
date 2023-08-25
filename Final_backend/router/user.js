const express = require('express');
const {userController} = require('../controler/index');
const { authMiddleware} = require('../middleware/auth');
const { middlewareValidate, updateUserSchema } = require('../middleware/validate');
const model = require('../model/user.model')


const user = express.Router();

user.get('/', (req, res) => {
    res.send('Welcome to the users!');
})

user.get('/danhsach', async (req, res) => {
    let data = await model.getAll();
    res.json(data);
});
user.post('/', userController.createUser);
user.get('/get', userController.getUsers);
user.get('/current',
    userController.getCurrentUser
);
user.patch('/',
    middlewareValidate(updateUserSchema),
    userController.updateUser
);
user.delete('/', userController.deleteUser);
user.get('/login', userController.login)

module.exports = user;