const authorController = require('../controllers/author.controller');
const bodyValidator = require('../middlewares/body.validator');
const authorValidator = require('../validators/author.validator');

const authorRouter = require('express').Router();

authorRouter.route('/')
    .get(authorController.getAll)
    .post(bodyValidator(authorValidator),authorController.create)

authorRouter.route('/:id')
    .get(authorController.getById)
    .put(bodyValidator(authorValidator),authorController.update)
    .delete(authorController.delete)

module.exports = authorRouter;