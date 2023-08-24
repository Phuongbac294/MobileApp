const CarSchema= require('../database/car.schema');
const BaseModel = require('./base.model');

class CarModel extends BaseModel {
    constructor() {
        super();
        this.init('cars', CarSchema)
    }
}

module.exports = new CarModel();