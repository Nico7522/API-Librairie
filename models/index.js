const { Sequelize } = require('sequelize');
const mm_author_bookModel = require('./mm_author_book.model');

const { DB_SERVEUR, DB_DATABASE, DB_USERNAME, DB_PASSWORD } = process.env;

const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME,DB_PASSWORD, {
    host: DB_SERVEUR,
    dialect : "mysql"
});

const db = {};

db.sequelize = sequelize;

db.Book = require('./book.model')(sequelize)
db.Categorie = require('./categorie.model')(sequelize)
db.Author = require('./author.model')(sequelize)
db.User = require('./user.model')(sequelize)
db.Order = require('./order.model')(sequelize)
db.MM_Author_Book = require('./mm_author_book.model')(sequelize)

db.Book.belongsToMany(db.Categorie, { through : 'MM_Book_Categorie'})
db.Categorie.belongsToMany(db.Book, { through : 'MM_Book_Categorie'})

db.Order.belongsTo(db.User);
db.User.hasMany(db.Order);

db.Book.belongsToMany(db.Order, { through : 'MM_Order_Book'});
db.Order.belongsToMany(db.Book, { through : 'MM_Order_Book'});

db.Author.belongsToMany(db.Book, { through : db.MM_Author_Book});
db.Book.belongsToMany(db.Author, { through : db.MM_Author_Book});

module.exports = db;