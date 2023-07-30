const mongoose = require('mongoose');

const userSchema = require

class UserModel {
    constructor() {
        this.model = mongoose.model('users', userSchema);
    }

    findByUsernameAndPassword(username, password) {
        const query = this.model.findOne({ username: username, password: password});
        return query.exec();
    }
}