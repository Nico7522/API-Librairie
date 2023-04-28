const AuthorBookDTO = require("./author.book.dto");
const CategorieDTO = require('./categorie.dto');

class BookDTO {
    constructor({id, title, price, cover, Authors, Categories, count }) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.cover = cover;
        this.authors = Authors ? Authors.map((author) => new AuthorBookDTO(author)) : [];
        this.categories = Categories ? Categories.map((cate) => new CategorieDTO(cate)) : [];
        this.count = count ? count : 'rien'
    }
}

module.exports = BookDTO