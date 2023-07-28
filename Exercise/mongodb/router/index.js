const exp = require('express')
const routes = exp.Router();

const userRoutes = require('./users');

routes.use('/users', userRoutes);

routes.get('/', (req, res) => {
    res.send('Welcome to the Route Admin')
})


module.exports = routes;