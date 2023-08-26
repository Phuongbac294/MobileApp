const moment = require('moment');
const model = require('../model/chai.model');

const getChai = async (req, res) => {
    let query = await model.getAll();
    res.json(query);
}

const createChai = async (req, res) => {
    let data = await req.body;
    let query = await model.create(data);
    res.json(query);
}

const updateChai = async (req, res) => {
    let id = await req.params.id;
    let data = await req.body;
    let query = await model.update(id, data);
    res.json(query);
}

const deleteChai = async (req, res) => {
    let id = await req.params.id;
    await model.delete(id);
    res.send('success');
}

module.exports = {
    getChai,
    createChai,
    updateChai,
    deleteChai
}

