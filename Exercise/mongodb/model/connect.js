const mongoose = require('mongoose');
function connect() {
    
    mongoose.connect('mongodb+srv://Web63_atlas:Web63atlas@cluster0.wntgsqq.mongodb.net/',{ useNewUrlParser: true, useUnifiedTopology: true })
    // mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    mongoose.connection.on('error', error => console.log('error connect db', error))
    mongoose.connection.once('open', () => console.log(`Connect to saving DB successfully!!!`))
}

module.exports = { connect }