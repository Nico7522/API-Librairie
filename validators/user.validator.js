const yup = require("yup");
const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const phoneNumberRegex = /^[0-9]{9}$/

const userValidator = yup.object({
  name: yup.string().max(50).required('ee').trim(),
  surname: yup.string().max(50).required('dd').trim(),
  birtdate: yup.date().required('dd'),
  adresse: yup.string().max(100).required('dd'),
  email: yup.string().max(100).required().email('invalid email').trim(),
  phonenumber: yup.string().matches(phoneNumberRegex, 'invalid phone number').required(),

  password: yup.string().matches(regex).min(8).max(100).required('psw')
});

const loginValidator = yup.object({
  email: yup.string().max(100).required().email().trim(),
  password: yup.string().matches(regex).min(8).max(100).required(),
});

module.exports = { userValidator, loginValidator };
