const bookController = require('../controllers/book.controller');
const bodyValidator = require('../middlewares/body.validator');
const authJwt = require('../middlewares/jwt-middleware');
const bookValidator = require('../validators/book.validator');

const bookRouter = require('express').Router();


bookRouter.route('/')
    .get(authJwt(["User"]) ,bookController.getAll)
    .post(bodyValidator(bookValidator),bookController.create)

bookRouter.route('/:id')
    .get(bookController.getById)
    .put(bookController.update)
    .delete(bookController.delete);


module.exports = bookRouter;