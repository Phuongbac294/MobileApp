const exp = require('express')
// const {userController} = require('../controller');

const userRoutes = exp.Router();

userRoutes.get('/', (req, res) => {
    res.send("Welcome to User")
})

// // userRoutes.get('/', userController.createUser);
// userRoutes.post('/', (req, res)=>{});
// userRoutes.patch('/', (req, res)=>{});
// userRoutes.update('/', (req, res)=>{});
// userRoutes.delete('/', (req, res)=>{});


module.exports = userRoutes;