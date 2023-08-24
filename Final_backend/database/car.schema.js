const mongoose = require('mongoose');
const {Schema} = mongoose;

const CarSchema = new Schema ({
    name: String,
    company: String,
    plates: String
})

module.exports = CarSchema;