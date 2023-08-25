const exp = require('express');
const {Controller} = require('../model/chai.model');

const chaiRouter = exp.Router();

chaiRouter.get('/', (req, res) => {res.send('Welcome to the chaiRouter')});

chaiRouter.get('/all', Controller.getAll);
chaiRouter.post('/', Controller.createChai);

module.exports = chaiRouter;