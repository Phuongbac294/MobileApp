const CarModel = require('../model/car.model')

const Welcome =  (req, res) => {
    res.send('Welcome to the car!')
}
const getAll = async (req, res) => {
    const data = await CarModel.findAll();
    res.json(data);
}

const create = async (req, res) => {
    const data = await req.body;
    const result = await CarModel.create(data);
    res.send(`created successfully ${result}`);
}

module.exports = {
    Welcome,    
    getAll,
    create
}
