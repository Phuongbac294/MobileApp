const exp = require('express')
const routes = exp.Router();

const userRoutes = require('./users');
const carRouters = require('./cars')

routes.use('/users', userRoutes);
routes.use('/cars', carRouters);

routes.get('/', (req, res) => {
    res.send('Welcome to the Route Admin')
})


module.exports = routes;