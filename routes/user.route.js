const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');

const userRouter = require('express').Router();

userRouter.route('/')
    .get(userController.getAll)
    

userRouter.route('/:id')
    .get(userController.getById)
    .put(userController.update)
    .delete(userController.delete)

userRouter.route('/auth')
    .post(authController.register)
    
userRouter.route('/login')
    .post(authController.login)

module.exports = userRouter;