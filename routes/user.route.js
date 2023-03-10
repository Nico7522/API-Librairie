const userController = require('../controllers/user.controller');

const userRouter = require('express').Router();

userRouter.route('/')
    .get(userController.getAll)
    .post(userController.create)

userRouter.route('/:id')
    .get(userController.getById)
    .put(userController.update)
    .delete(userController.delete)

module.exports = userRouter;