const yup = require("yup");

const authorValidator = yup.object({
  name: yup.string().required().trim(),
  surname: yup.string().required().trim(),
  birthdate: yup.date().required(),
//   books: yup.array.of(
//     yup.object({
//       id: yup.number().integer().positive().required(),
//       role: yup.string(),
//     })
//   )
});

module.exports = authorValidator;
