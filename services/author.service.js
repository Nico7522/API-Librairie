const AuthorDTO = require("../dto/author.dto");
const { Book } = require("../models");
const db = require("../models");

const authorService = {
  getAll: async () => {
    const { rows, count } = await db.Author.findAndCountAll({
      distinct: true,
      include: [Book]
    });

    return {
      authors: rows.map((author) => new AuthorDTO(author)),
      count,
    };
  },

  getById: async (id) => {
    const author = await db.Author.findByPk(id);
    return author ? new AuthorDTO(author) : null;
  },

  create: async (authorToCreate) => {
    const transaction = await db.sequelize.transaction();
    let author;
    try {
        author = await db.Author.create(authorToCreate, { transaction });
        await author.addBook(authorToCreate.books, { transaction })
        await transaction.commit();
        const finalAuthor = await db.Author.findByPk(author.id, {
            include : [Book]
        })
        return finalAuthor ? new AuthorDTO(finalAuthor) : null;
    } catch (error) {
        await transaction.rollback();
        return null;
    }
  },

  update: async (id, authorToUpdate) => {
    const isUpdated = await db.Author.update(authorToUpdate, {
        where : { id }
    })

    return isUpdated[0] === 1;
  },

  delete: async (id) => {
    const isDeleted = await db.Author.destroy({
        where : { id }
    })

    return isDeleted[0] === 1;
  }
};

module.exports = authorService;
