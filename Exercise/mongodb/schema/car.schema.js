const mongoose = require('mongoose');
const { Schema } = mongoose;

const CarSchema = new Schema({
    name: String,
    company: String,
    plates: String
    // date: Date,
    // purchaseDate: Date,
    // specifications: {
    //     DRC: String,
    //     length: Number,
    //     with: Number,
    //     weight: Number,
    //     weightTotal: Number,
    //     fuel: String
    // }
});

const Car = mongoose.model('Cars', CarSchema);
module.exports = Car;