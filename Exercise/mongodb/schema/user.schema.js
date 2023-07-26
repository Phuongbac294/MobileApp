// // ORM of mongodb
const mongoose = require('mongoose');
const { Schema } = mongoose;

// ? primary server
const UserSchema = new Schema({
    name: {type: String, // String is shorthand for {type: String}
        required: true},
    age: Number,
    password: String, 
    email: String,    
    birthday: { type: Date, default: null },  
    // comment: { type: mongoose.ObjectId, ref: 'Comment' },  
}, {timestamps: true});

const User = mongoose.model('User', UserSchema);
module.exports = User;