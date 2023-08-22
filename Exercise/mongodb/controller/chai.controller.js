const ChaiModel = require('../model/chai.model');

const getAll = async (req, res) => {
    const data = await ChaiModel.get()
    res.json(data);
}

const createChai = async (req, res) => {
    const newdata = await req.body;
    const Chai = await ChaiModel.create(newdata);
    
}

module.exports = {
    getAll,
    createChai,
}