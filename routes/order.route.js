const orderController = require('../controllers/order.controller');
const bodyValidator = require('../middlewares/body.validator');
const orderValidator = require('../validators/order.validator');

const orderRouter = require('express').Router();

orderRouter.route('/')
    .get(orderController.getAll)
    .post(bodyValidator(orderValidator),orderController.create)

orderRouter.route('/:id')
    .get(orderController.getById)
    .put(bodyValidator(orderValidator),orderController.update)
    .delete(orderController.delete)

module.exports = orderRouter;