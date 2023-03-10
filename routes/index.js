const router = require('express').Router();
const authorRouter = require('./author.route');
const bookRouter = require('./book.router');
const categorieRouter = require('./categorie.router');
const orderRouter = require('./order.route');
const userRouter = require('./user.route');

router.use('/book', bookRouter)
router.use('/categorie', categorieRouter)
router.use('/author', authorRouter)
router.use('/user', userRouter)
router.use('/order', orderRouter)

module.exports = router;