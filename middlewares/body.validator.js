const { ObjectSchema } = require('yup');
const ErrorResponse = require('../utils/error.response');

/**
 * @param { ObjectSchema } yupValidator
 */

const bodyValidator = (yupValidator) => {
    return async (req, res, next) => {
        try {
            const validData = await yupValidator.noUnknown().validate(req.body, {abortEarly: false});
            req.body = validData;
            next();
        } catch (error) {
            return res.status(400).json(new ErrorResponse(error.erros))
        }
    }
}

module.exports = bodyValidator;