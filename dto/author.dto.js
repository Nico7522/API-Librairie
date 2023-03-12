const {BookDTO} = require("./book.dto");


class AuthorDTO {
  constructor({ id, name, surname, birthdate, Books }) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.birthdate = birthdate;
    this.books = Books ? Books.map(book => new BookDTO(book)) : [];
  }
}


module.exports = AuthorDTO;
