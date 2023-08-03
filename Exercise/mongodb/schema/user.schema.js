// // ORM of mongodb
const mongoose = require('mongoose');
const { Schema } = mongoose;

// ? primary server
const UserSchema = new Schema({
    name: {type: String, // String is shorthand for {type: String}
        required: true,
        index: true,
        unique: true,},
    age: Number,
    password: String, 
    email: String,
    phone: String,     
    birthday: { type: Date, 
        default: null },  
    // comment: { type: mongoose.ObjectId, ref: 'Comment' },  
    company: {name: String, 
        position: String,
        power: String},
}, {timestamps: true});

const User = mongoose.model('User', UserSchema);
module.exports = User;