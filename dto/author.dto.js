const BookDTO = require("./book.dto");
const DTOBookForAuthor = require("./DTOBookForAuthor");


class AuthorDTO {
  constructor({ id, name, surname, birthdate, Books }) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.birthdate = birthdate;
    this.books = Books ? Books.map(book => new DTOBookForAuthor(book)) : [];
  }
}


module.exports = AuthorDTO;
