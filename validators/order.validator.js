const yup = require ('yup');

const orderValidator = yup.object({
    status: yup.string().required().max(20).trim(),
    books: yup.array().of(yup.number().integer().positive()),
    UserId: yup.number().integer().positive(),
})

module.exports = orderValidator;