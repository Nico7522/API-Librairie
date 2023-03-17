const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');
const bodyValidator = require('../middlewares/body.validator');
const {userValidator, loginValidator} = require('../validators/user.validator');

const userRouter = require('express').Router();

userRouter.route('/')
    .get(userController.getAll)
    

userRouter.route('/:id')
    .get(userController.getById)
    .put(userController.update)
    .delete(userController.delete)

userRouter.route('/auth')
    .post(bodyValidator(userValidator), authController.register)
    
userRouter.route('/login')
    .post(bodyValidator(loginValidator),authController.login)

module.exports = userRouter;