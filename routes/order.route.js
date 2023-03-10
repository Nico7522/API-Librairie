const orderController = require('../controllers/order.controller');

const orderRouter = require('express').Router();

orderRouter.route('/')
    .get(orderController.getAll)
    .post(orderController.create)

orderRouter.route('/:id')
    .get(orderController.getById)
    .put(orderController.update)
    .delete(orderController.delete)

module.exports = orderRouter;