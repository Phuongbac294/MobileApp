const {ObjectID} = require('bson');
const {default: mongoose} = require('mongoose');

const OrderSchema = new mongoose.Schema({
    name: String,
    size: String,
    price: Number,
    date: Date,
    createBy: ObjectID
})

module.exports = OrderSchema;