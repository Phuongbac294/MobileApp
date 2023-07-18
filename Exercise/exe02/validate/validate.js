const Joi = require('joi');
// const jwt = require('jsonwebtoken');

// const privatekey = 'awfdgsjghseighgagalghgagl';

const createUserSchema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    age: Joi.number()
        .min(100)
        .max(3)
        .required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
});   

const loginUserSchema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
});

const userValidate= (req, res, next) => {
    const obj = req.body;
    const {error} = createUserSchema.validate(obj);
    if (error) {res.status(400).json(error.details)}
    next();
}

const loginValidate = (req, res, next) => {
    const {username, password} = req.body;
    const {error} = loginUserSchema.validate(username, password);
    if (error) {res.status(400).json(error.details)}
    next();
}

const validatehandler = (req, res, next) => {
    const obj = req.body;
    const {error} = Schema.validate(obj);
    if (error) {res.status(400).json(error.details)}
    next();
}

const currentValidate = (req, res, next) =>{
    console.log(req.headers.authorization);
    const [_, token] = req.headers.authorization.split(' '); // [-, token] chỉ lấy giá trị thứ 2 trong dãy.
    const userData = jwt.verify(token, privateKey);
    console.log('userData', userData);
    res.json(userData);
    next();
}

module.exports = { 
    userValidate, 
    createUserSchema,
    loginUserSchema,
    loginValidate,
    validatehandler,
    currentValidate
}