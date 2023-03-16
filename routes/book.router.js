const bookController = require('../controllers/book.controller');
const bodyValidator = require('../middlewares/body.validator');
const authJwt = require('../middlewares/jwt-middleware');
const bookValidator = require('../validators/book.validator');

const bookRouter = require('express').Router();
const multer = require('multer');
const uuid = require('uuid')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/bookcover')
    },
    filename: (req, file, cb) => {
        const name = uuid.v4();
        const ext = file.originalname.split('.').at(-1);
        cb(null, name + '.' + ext)
    }
});

const upload = multer({ storage })


bookRouter.route('/')
    // .get(authJwt(["User"]) ,bookController.getAll)
    .get(bookController.getAll)
    .post(bodyValidator(bookValidator),bookController.create)

bookRouter.route('/:id')
    .get(bookController.getById)
    .put(bodyValidator(bookValidator),bookController.update)
    .delete(bookController.delete);

bookRouter.route('/:id/updatecover')
    .patch(upload.single('cover'),bookController.updateCover)


module.exports = bookRouter;