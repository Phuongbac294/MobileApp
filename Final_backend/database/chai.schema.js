const mongoose = require('mongoose');
const {Schema} = mongoose;

const ChaiSchema = new Schema ({
    date: Date,
    LPG12: Number,
    LPG45: Number,
    MW: Number,
})

module.exports = ChaiSchema;