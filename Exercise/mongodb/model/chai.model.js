const Chai = require('../schema/user.schema');
const baseModel = require('./base.model');


class ChaiModel extends BaseModel {
  
    async getAll(req, res) {        
        const query = await Chai.find()
        res.send(query.exec());
    }

    async createChai(req, res) {
        const data = await req.body;
        const query = await Chai.insertOne(data);
        res.send(query.exec());
        
    }
}



module.exports = new ChaiModel(Chai);