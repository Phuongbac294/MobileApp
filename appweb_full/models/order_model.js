const OrderSchema = require('../schema/order_schema');
const BaseModel = require('../model/base_model');

class OrederModel extends BaseModel {
    constructor() {
        super();
        this.init('oreders', OrderSchema)
    }
}

module.exports = new OrederModel;