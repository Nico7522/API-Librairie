const AuthorBookDTO = require("./author.book.dto");
const CategorieDTO = require('./categorie.dto');

class BookDTO {
    constructor({id, title, price, Authors, Categories }) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.authors = Authors ? Authors.map((author) => new AuthorBookDTO(author)) : [];
        this.categories = Categories ? Categories.map((cate) => new CategorieDTO(cate)) : [];
    }
}

module.exports = BookDTO