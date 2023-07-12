const Joi = require("joi");

const createUserSchema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required(),
    age: Joi.number()
        .max(100)
        .min(1)
        .required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })

})

const validate = (schema) => {
    const result = schema.validate(schema);
    console.log('result', result);
}

module.exports = {
    createUserSchema,
    validate
}