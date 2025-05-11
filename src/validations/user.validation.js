const Joi = require('joi');

exports.validateUser = (data) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
    });
    return schema.validate(data);
};