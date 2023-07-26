const exp = require('express')
const routes = exp.Router();

const userRoutes = require('./users');

routes.use('/users', userRoutes);

module.exports = routes;