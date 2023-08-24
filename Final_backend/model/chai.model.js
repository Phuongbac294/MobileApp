const mongoose = require('mongoose');
const ChaiSchema = require('../database/chai.schema');
const BaseModel = require('./base.model')

class ChaiModel extends BaseModel {
    constructor() {
        super();
        this.init('chais', ChaiSchema)
    }

    // get(){
    //     let query = this.model.find();
    //     return query.exec()
    // }

    // create(data) {
    //     let result = this.model.create(data);
    //     return result
    // }

    // update(id, data) {
    //     let result = this.model.updateOne({_id: id}, data);
    //     return result
    // }

    // delete(id) {
    //     let result = this.model.deleteOne({_id: id});
    //     return result
    // }
    
}

module.exports = new ChaiModel();