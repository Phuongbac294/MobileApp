const exp = require('express')
const model = require('../controller/car.controller')

const carRouters = exp.Router();

carRouters.get('/', model.Welcome)
carRouters.get('/add', model.getAll)
carRouters.post('/add', model.create)

module.exports = carRouters;