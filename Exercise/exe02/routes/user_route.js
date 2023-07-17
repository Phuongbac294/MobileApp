const exp = require('express')
const path = require('path')
const userRouter = exp.Router();
const read = require('../handler/read.js');
const create = require('../handler/create.js');
const getId = require('../handler/getId.js');
const update = require('../handler/update.js');
const deleter = require('../handler/delete.js');


userRouter.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'../database/user.json'));
});

userRouter.get('/add', async (req, res) => {
    const data = await read('user.json');
    res.status(200).json(data);
});

userRouter.post('/add', async (req, res) => {
    const data = req.body;
    await create('user.json', data);
    const newData = await read('user.json');
    res.status(200).json(newData);
})

userRouter.get('/:userId', async (req, res) =>{
    const id = await parseInt(req.params.userId);
    // console.log(id);
    const user = await getId('user.json', id);
    // console.log('user.json', user);
    if (user) {
        res.status(200).json(user);        
    } else {
        res.status(404).json({ message: 'User not found' });        
    }
})


userRouter.patch('/update/:userId', async (req, res) =>{
    const id = await parseInt(req.params.userId);
    const newData = await req.body;
    await update('user.json', id, newData)
    const updateData = await read('user.json')
    res.status(200).json(updateData);
})


userRouter.delete('/delete/:userId', async (req, res) => {
    const id = await parseInt(req.params.userId);
    await deleter('user.json', id);
    const data = await read('user.json')
    res.status(200).json(data)
})

module.exports = userRouter;