const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema ({
    email: String,
    password: String
})

const Users = mongoose.model('users', UserSchema);

module.exports =Users;