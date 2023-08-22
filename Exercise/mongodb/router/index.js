const exp = require('express')
const routes = exp.Router();

const userRoutes = require('./users');
const carRouters = require('./cars');
const chaiRouter = require('./chai');

routes.use('/users', userRoutes);
routes.use('/cars', carRouters);
routes.use('/chai', chaiRouter);

routes.get('/', (req, res) => {
    res.send('Welcome to the Route Admin')
})


module.exports = routes;