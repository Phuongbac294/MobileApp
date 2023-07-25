const exp = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
// const handler = require('./handle_user');

const app = exp();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const teacherRoute = require('./routes/teacher_route.js');
const userRoute = require('./routes/user_route.js');
const studentRoute = require('./routes/student_route.js');


// uses route
app.use('/student', studentRoute);
app.use('/teacher', teacherRoute);
app.use('/user', userRoute);


// home

app.get('/', (req, res) => {
    res.send('Welcome to the world')
});

app.get('/pan', (req, res) => {
    res.sendFile(path.join(__dirname, './pan.html'));
})
app.post('/', (req, res) => {
    res.send('Welcome to the methold')
});


app.listen(3001, (req, res) => {
    console.log('Server is running on port 3000')
});