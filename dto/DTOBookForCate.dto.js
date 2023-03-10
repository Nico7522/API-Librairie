const AuthorBookDTO = require("./author.book.dto");

class DTOBookForCate {
    constructor({id, title, price, Authors, }) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.authors = Authors ? Authors.map((author) => new AuthorBookDTO(author)) : [];
       
    }
}

module.exports = DTOBookForCate