const categorieController = require('../controllers/categorie.controller');
const bodyValidator = require('../middlewares/body.validator');
const categorieValidator = require('../validators/categorie.validator');

const categorieRouter = require('express').Router();

categorieRouter.route('/')
    .get(categorieController.getAll)
    .post(bodyValidator(categorieValidator),categorieController.create)

categorieRouter.route('/:id')
    .get(categorieController.getById)
    .put(bodyValidator(categorieValidator),categorieController.update)
    .delete(categorieController.delete)

module.exports = categorieRouter;