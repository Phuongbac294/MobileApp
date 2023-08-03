const exp = require('express')
const {userController} = require('../controller/index');

const userRoutes = exp.Router();

userRoutes.get('/', (req, res) => {
    res.send("Welcome to User")
})

userRoutes.post('/', userController.createUser);
userRouter.get('/', userController.getUsers);
userRouter.get('/current',
    userController.getCurrentUser
);
userRouter.patch('/',
    middlewareValidate(updateUserSchema),
    userController.updateUser
);
userRouter.delete('/', userController.deleteUser);


module.exports = userRoutes;