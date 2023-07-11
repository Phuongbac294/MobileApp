const exp = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const handler = require('./handle_user');

const app = exp();
const teacherRoute = exp.Router();
const userRoute = exp.Router();

const student = require('./routes/student_route.js');

// route teacher
teacherRoute.get('/', (req, res) => {
    res.send('Welcome to the teacher')
});
teacherRoute.post('/', (req, res) => {
    console.log('Teacher', req.body);
    res.json(req.body);
})

// route user
userRoute.get('/', async (req, res) => {
    const data = await handler.readAllUser();
    res.status(200).json(data);
});
userRoute.get('/:userId', async (req, res) =>{
    const userFounded = await handler.getUserById(req.params.userId)
    if (userFounded) {
        res.status(200).json(userFounded);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
})

userRoute.get('/name/:userName', async (req, res) =>{
    const userFounded = await handler.getUserByName(req.params.userName)
    if (userFounded) {
        res.status(200).json(userFounded);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
})

userRoute.post('/', async (req, res) => {
    const newDataBody = req.body; // user mới dc lấy từ body
    console.log(req.body);
    await handler.createUser(newDataBody);
    const data = await handler.readAllUser();
    res.status(200).json(data);
})
userRoute.patch('/:userId', async (req, res) => {
    const newDataUpdate = req.body; // user mới dc lấy từ body
    await handler.updateUser(req.params.userId, newDataUpdate);
    res.status(200).send('Updated user')
})
userRoute.delete('/:userId', async (req, res) => {
    const newData = req.body; 
    await handler.deleteUser(req.params.userId, newData);
    res.status(200).send('Deleted user')
})


// uses route
app.use('/student', student);
app.use('/teacher', teacherRoute);
app.use('/user', userRoute);


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// home

app.get('/', (req, res) => {
    res.send('Welcome to the world')
});

const users = [
    { name: 'user1', age: 28, id: 1 },
    { name: 'user2', age: 29, id: 2 },
    { name: 'user3', age: 30, id: 3 },
]
app.get('/users', (req, res) => {
        res.json(users);
})

app.get('/users/add', (req, res) => {
    users.push({ name: 'user4', age: 23, id: 4 });
    res.json(users);
})

app.get('/pan', (req, res) => {
    res.sendFile(path.join(__dirname, './pan.html'));
})
app.post('/', (req, res) => {
    res.send('Welcome to the methold')
});


app.listen(3000, (req, res) => {
    console.log('Server is running on port 3000')
});