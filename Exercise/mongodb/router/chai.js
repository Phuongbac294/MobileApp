const exp = require('express');
const {chaiController} = require('../controller/index');

const chaiRouter = exp.Router();

chaiRouter.get('/', (req, res) => {res.send('Welcome to the chaiRouter')});

chaiRouter.get('/all', chaiController.getAll);
chaiRouter.post('/', chaiController.createChai);

module.exports = chaiRouter;