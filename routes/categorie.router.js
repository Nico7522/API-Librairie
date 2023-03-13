const categorieController = require('../controllers/categorie.controller');

const categorieRouter = require('express').Router();

categorieRouter.route('/')
    .get(categorieController.getAll)
    .post(categorieController.create)

categorieRouter.route('/:id')
    .get(categorieController.getById)
    .put(categorieController.update)
    .delete(categorieController.delete)

module.exports = categorieRouter;