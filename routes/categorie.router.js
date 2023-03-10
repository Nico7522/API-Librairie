const categorieController = require('../controllers/categorie.controller');

const categorieRouter = require('express').Router();

categorieRouter.route('/')
    .get(categorieController.getAll)
    .post()

categorieRouter.route('/:id')
    .get()
    .put()
    .delete()

module.exports = categorieRouter;