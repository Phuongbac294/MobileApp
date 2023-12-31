const exp = require('express')
const path = require('path')
const userRouter = exp.Router();
const jwt = require('jsonwebtoken');
const read = require('../handler/read.js');
const create = require('../handler/create.js');
const getId = require('../handler/getId.js');
const update = require('../handler/update.js');
const deleter = require('../handler/delete.js');
const login = require('../handler/login.js');
const {userValidate, validatehandler, createUserSchema, loginUserSchema, loginValidate, currentValidate} = require('../validate/validate.js');
const { getById } = require('../handler/handle_teacher.js');

const privatekey = 'awfdgsjghseighgagalghgagl';

const authMiddleware =  (req, res) =>{      
    try {
        const usertoken = req.headers.authorization;
        // console.log(usertoken);
        const [_, token] = usertoken.split(' '); // [-, token] chỉ lấy giá trị thứ 2 trong dãy bẳng cách tách chuỗi.
        console.log(token);
        const userData = jwt.verify(token, privatekey);                
        req.user = userData;
        next();
    } catch (err) {
        res.status(403).json({message:"user not found token"})            
    }      
}

userRouter.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'../database/user.json'));
});

userRouter.get('/add', async (req, res) => {
    const data = await read('user.json');
    res.status(200).json(data);
});

userRouter.post('/add', userValidate, async (req, res) => {
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
        res.status(404).json({ message: 'User not found id' });        
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

userRouter.post('/login', 
    loginValidate,
    async (req, res) => {
        const user = await login(req.body);
        console.log(user);
        if (user) {
            var token = jwt.sign(user, privatekey);
            res.json(token);
            return 1;
        } else {
            res.status(403).send({message:"user not found login"});
        }
        
})

userRouter.get('/userlogin/current', authMiddleware,    
    async (req, res) => {
        const data = await getById(req.user.id)
        res.status(200).json(data);
}
);

module.exports = userRouter;