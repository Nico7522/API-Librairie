const  BookDTO  = require("./book.dto");
const DTOBookForCate = require("./DTOBookForCate.dto");

class CategorieDTO {
    constructor({ id, name, Books }) {
        this.id = id;
        this.name = name;
        this.books = Books ? Books.map((book) => new DTOBookForCate(book)) : [];
    }
}

module.exports = CategorieDTO;