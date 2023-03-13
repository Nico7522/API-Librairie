class AuthorBookDTO {
  constructor({ id, name, surname, MM_Author_Book }) {
    this.id = id;
    this.name = name ? name : null;
    this.surname = surname ? surname : null;

    this.role = MM_Author_Book ? MM_Author_Book.role : null;
  }
}

module.exports = AuthorBookDTO;
