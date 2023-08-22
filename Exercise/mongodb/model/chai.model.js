const ChaiSchema = require('../schema/user.schema');


class ChaiModel {
    constructor () {
        super();
        this.init('chai', ChaiSchema)
    }

    async getAll(req, res) {
        let query = await 
        this.model.find();
        res.send(query);
    }
}



module.exports = new ChaiModel;