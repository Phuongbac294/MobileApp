const TankSchema= require('../database/tank.schema');
const BaseModel = require('./base.model');

class TankModel extends BaseModel {
    constructor() {
        super();
        this.init('tanks', TankSchema)
    }
}

module.exports = new TankModel();