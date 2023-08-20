const mongoose = require('mongoose');
const {Schema} = mongoose;

const TankSchema = new Schema ({
    date: Date,
    tank1: { level: Number,
            pre: Number,
            temp: Number,
            Mw: Number,        
            },
    tank2: { level: Number,
        pre: Number,
        temp: Number,
        Mw: Number,        
        },
    MW: Number,
})

const Tanks = mongoose.model('tanks', TankSchema);

module.exports = Tanks;