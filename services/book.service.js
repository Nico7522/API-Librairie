
const BookDTO = require('../dto/book.dto');
const db = require('../models')

const bookService = {

    getAll: async () => {
        const { rows, count } = await db.Book.findAndCountAll({
            distinct: true
        });
        return {
            books: rows.map((book) => new BookDTO(book)),
            count
        }
    },

    getById: async (id) => {

    },

    create: async (bookToCreate) => {
        const book = await db.Book.create(bookToCreate);
        return book ? new BookDTO(book) : null;

    },

    update: async (id, bookToUpdate) => {

    },

    delete: async (id) => {

    }
}

module.exports = bookService;