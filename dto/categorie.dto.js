const { BookDTO } = require("./book.dto");

class CategorieDTO {
    constructor({ id, name, Books }) {
        this.id = id;
        this.name = name;
        this.books = Books ? Books.map((book)=> new BookDTO(book)) : [];
    }
}

module.exports = CategorieDTO;