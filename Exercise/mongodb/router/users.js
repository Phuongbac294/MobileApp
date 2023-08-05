const exp = require('express')
const {userController} = require('../controller/index');

const userRouters = exp.Router();

userRouters.get('/', (req, res) => {
    res.send("Welcome to User")
})
userRouters.get('/all', userController.getAll)

userRouters.post('/', userController.createUser);
userRouters.get('/get', userController.getUsers);
userRouters.get('/current',
    userController.getCurrentUser
);
// userRouters.patch('/',
//     middlewareValidate(updateUserSchema),
//     userController.updateUser
// );
userRouters.delete('/', userController.deleteUser);


module.exports = userRouters;