const yup = require('yup')

const categorieValidator = yup.object({
    name: yup.string().max(50).required().trim(),
    books: yup.array().of(yup.number().integer().positive()),

})

module.exports = categorieValidator;