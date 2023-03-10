const { Request, Response } = require("express");
const bookService = require("../services/book.service");
const { SuccessArrayResponse, SuccessResponse } = require("../utils/success.response");

const bookController = {
  /**
   * @param { Request} req
   * @param { Response} res
   */
  getAll : async (req, res) => {
    const { books, count } = await bookService.getAll();
    res.status(200).json(new SuccessArrayResponse(books, count))

  },
    /**
   * @param { Request } req
   * @param { Response } res
   */
  getById: async (req, res) => {
    res.sendStatus(501);
  },
    /**
   * @param { Request } req
   * @param { Response } res
   */
  create: async (req, res) => {
    const data = req.body

    const book = await bookService.create(data);
    res.location('/book/' + book.id)
    res.status(201).json(new SuccessResponse(book, 201))
  },
    /**
   * @param { Request } req
   * @param { Response } res
   */
  update: async (req, res) => {
    res.sendStatus(501);
  },
    /**
   * @param { Request } req
   * @param { Response } res
   */
  delete: async (req, res) => {
    res.sendStatus(501)
  }
};

module.exports = bookController;
