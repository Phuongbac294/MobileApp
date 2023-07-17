const Joi = require('joi');

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

const validate = (schema, obj) => {
    const {error} = schema.validate(obj);
    if (error) return error;
}
// -> { value: { username: 'abc', birth_year: 1994 } }

// schema.validate({});
// -> { value: {}, error: '"username" is required' }

// Also -

// try {
//     const value = await schema.validateAsync({ username: 'abc', birth_year: 1994 });
// }
// catch (err) { }

module.exports = { validate, createUserSchema}