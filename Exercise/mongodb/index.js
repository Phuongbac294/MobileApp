const exp = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
// router
const router = require('./router/index')
const {connect} = require('./model/connect');

var app = exp();

//config body-parser (parserbody) req.body
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// config cors 
app.use(cors()); // chạy dự án thực tế sẽ tắt đi

app.use('/', router);

connect();

// const CommentSchema = new Schema({
//     content: {type: String, required: true},
//     authorize: Number, // Number
//     note: String, // String
// }, { timestamps: true });


// const Comment = mongoose.model('Comment', CommentSchema);

// mongodb logic
// const createUser = async (req, res) => {
//     const newUser = await req.body;
//     const newStudent = new Student(newUser);
//     await newStudent.save();
//     res.status(201).send('create user success');
// }

// const getAllUser = async (req, res) => {
//     const allUser = await Student.find(req.query);
//     res.json(allUser);
// }

// const getById = async (req, res) => {
//     const userFounded = await Student.findOne({_id: req.params.userId});
//     res.json(userFounded);
// }

// const updateUser = async (req, res) => {
//     const userFounded = await Student.findOneAndUpdate({_id: req.params.userId}, req.body);
//     res.json(userFounded);
// }

// const deleteUserById = async (req, res) => {
//     try {
//         await Student.findOneAndDelete({_id: req.params.userId});
//         res.status(204).send("delete user success");
//     } catch (err) {
//         res.status(404).send(err)
//     }
// }

// const handleComment = (req, res) => {
//     Comment.create(req.body)
//     .then (() => {res.send('create comment success')})
//     .catch (err =>{res.status(500).send(err)});
// }
//router
// app.get('/', getAllUser);
// app.post('/user', createUser);
// app.get('/user/:userId', getById);
// app.patch('/user/update/:userId', updateUser);
// app.delete('/user/delete/:userId', deleteUserById);
// app.post('/comment', handleComment);

//
app.listen(3002, (req,res) => {
    console.log('listening on http://localhost:3002');
})