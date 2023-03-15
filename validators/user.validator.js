const yup = require('yup');
const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

const userValidator = yup.object({
    name: yup.string().max(50).required().trim(),
    surname: yup.string().max(50).required().trim(),
    birtdate: yup.date().required(),
    adresse: yup.string().max(100).required(),
    email: yup.string().max(100).required().email().trim(),
    phonenumber: yup.number().integer().max(10).required(),
    password: yup.string().matches(regex).min(8).max(100).required(),
    role: yup.string(),
})

module.exports = userValidator;