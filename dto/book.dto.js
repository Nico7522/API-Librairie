const AuthorBookDTO = require("./author.book.dto");


class BookDTO {
    constructor({id, title, price, Authors}) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.authors = Authors ? Authors.map((author) => new AuthorBookDTO(author)) : [];
    }
}

module.exports = {BookDTO}