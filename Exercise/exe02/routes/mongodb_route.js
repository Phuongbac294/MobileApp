const exp = require('express');

const mongodbRouter = exp.Router();

// const {MongoClient} = require('mongodb');
// const mongoose = require('mongoose');

// mongodb connect
// mongoose.connect('mongodb+srv://Web63_atlas:Web63@cluster0.wntgsqq.mongodb.net/')

// 7 primary value

// const StudentSchema = new Schema({
//     name: String,
//     age: Number,
//     email: String,
//     note: String,
//     birthDay: {type: Date,default: null},
// })

// const Student = mongoose.model('student', StudentSchema);
// const db = {};

// const connectToDB = async () => {
//     const client = new MongoClient('mongodb+srv://Web63_atlas:Web63@cluster0.wntgsqq.mongodb.net/')
//     await client.connect();
//     console.log("db connet");

// }
mongodbRouter.get('/', (req, res) => {
    res.send('Welcome moogodb server')
});

module.exports = mongodbRouter;