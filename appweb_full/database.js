const mongoose = require('mongoose');
const { connect } = require('./routers');

class database {
    constructor() {
        const connect = async () => {
            await mongoose.connect(
                "mongodb+srv://Web63_atlas:Web63atlas@cluster0.wntgsqq.mongodb.net/Web63"
            )
        }
    }
}

module.exports = database;