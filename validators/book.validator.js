const yup = require("yup");

const bookValidator = yup.object({
  title: yup.string().max(50).required().trim(),
  price: yup.number().nullable().positive(),
  authors: yup.array().of(
    yup.object({
      id: yup.number().integer().positive().required(),
      role: yup.string(),
    })
  ),
  categories: yup.array().of(yup.number().integer().positive()),
});

module.exports = bookValidator;
