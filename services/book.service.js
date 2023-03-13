const BookDTO = require("../dto/book.dto");
const { Author, Categorie } = require("../models");
const db = require("../models");

const bookService = {
  getAll: async () => {
    const { rows, count } = await db.Book.findAndCountAll({
      distinct: true,
      include: [Author, Categorie],
    });
    return {
      books: rows.map(book => new BookDTO(book)),
      count
    }
  },

  getById: async (id) => {
    const book = await db.Book.findByPk(id, {
      include: [Author, Categorie]
    })
    return book ? new BookDTO(book): null;
  },

  create: async (bookToCreate) => {
    const transaction = await db.sequelize.transaction();
    let book;
    try {
      book = await db.Book.create(bookToCreate, { transaction });
      for (const author of bookToCreate.authors) {
        await book.addAuthor(author.id, {
          through: { role: author.role },
          transaction,
        });
      }
      await transaction.commit();
      const finalBook = await db.Book.findByPk(book.id, {
        include: [Author]
      });

      return finalBook ? new BookDTO(finalBook) : null;

    } catch (error) {
      await transaction.rollback();
      return null;
    }
  },

  update: async (id, bookToUpdate) => {
    const isUpdated = await db.Book.update(bookToUpdate, { where: { id }});
    return isUpdated[0] === 1;
  },

  delete: async (id) => {

    const isDeleted = await db.Book.destroy({ where : { id }});
    return isDeleted[0] === 1 
  },
};

module.exports = bookService;
