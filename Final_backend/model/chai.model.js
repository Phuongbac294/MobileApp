const model = require('../database/chai.json');

class ChaiModel {
    constructor() {}
    async get(req, res) {
        const data = await this.model.find();
        res.json(data.exec());
    }
}

module.exports = ChaiModel;