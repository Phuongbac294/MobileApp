const exp = require('express')
const path = require('path')
const userRouter = exp.Router();
const read = require('../handler/read.js');
const handler = require('../handler/handle_user.js')

userRouter.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'../database/user.json'));
});

userRouter.get('/add', async (req, res) => {
    const data = await read('user.json');
    res.status(200).json(data);
});
userRouter.get('/:userId', async (req, res) =>{
    const userFounded = await handler.getUserById(req.params.userId)
    if (userFounded) {
        res.status(200).json(userFounded);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
})

userRouter.get('/name/:userName', async (req, res) =>{
    const userFounded = await handler.getUserByName(req.params.userName)
    if (userFounded) {
        res.status(200).json(userFounded);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
})

userRouter.post('/', async (req, res) => {
    const newDataBody = req.body; // user mới dc lấy từ body
    console.log(req.body);
    await handler.createUser(newDataBody);
    const data = await handler.readAllUser();
    res.status(200).json(data);
})
userRouter.patch('/:userId', async (req, res) => {
    const newDataUpdate = req.body; // user mới dc lấy từ body
    await handler.updateUser(req.params.userId, newDataUpdate);
    res.status(200).send('Updated user')
})
userRouter.delete('/:userId', async (req, res) => {
    const newData = req.body; 

    await handler.deleteUser(req.params.userId, newData);
    res.status(200).send('Deleted user')
})

module.exports = userRouter;