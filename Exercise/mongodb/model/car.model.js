const model = require('../schema/car.schema')

class CarModel {
    constructor(){};

    findAll() {       
        const data = this.model.find();
        return data.exec()      
    }

    create(data) {
        const query = this.model.create(data);
        return query.exec()
    }
}


module.exports = CarModel;