const { User, Book } = require("../models");
const BookDTO = require("./book.dto");
const UserDTO = require("./user.dto");

class OrderDTO {
constructor({ id, status, Books, User }){
    this.id = id;
    this.status = status;
    this.books = Books ? Books.map((book) => new BookDTO(book)) : [];
    this.user = User ? `ID : ${User.id}, NAME : ${User.name}` : null;
}

}

module.exports = OrderDTO;