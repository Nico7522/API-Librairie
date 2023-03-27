const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');
const bodyValidator = require('../middlewares/body.validator');
const {userValidator, loginValidator} = require('../validators/user.validator');

const userRouter = require('express').Router();
const multer = require('multer');
const uuid = require('uuid');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/avatar')
    },
    filename: (req, file, cb) => {
        const name = uuid.v4();
        const ext = file.originalname.split('.').at(-1);
        cb(null, name + '.' + ext)
    }
})

const upload = multer({ storage })

userRouter.route('/')
    .get(userController.getAll)
    

userRouter.route('/:id')
    .get(userController.getById)
    .put(userController.update)
    .delete(userController.delete)

userRouter.route('/:id/updateavatar')
    .patch(upload.single('avatar'), userController.updateAvatar)

userRouter.route('/auth')
    .post(bodyValidator(userValidator), authController.register)
    
userRouter.route('/login')
    .post(bodyValidator(loginValidator),authController.login)

module.exports = userRouter;