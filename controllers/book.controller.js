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
    const { id } = req.params;
    const book = await bookService.getById(id)
    if (!book) {
      res.sendStatus(404)
      return;
    };
    res.status(200).json(new SuccessResponse(book));
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
    const { id } = req.params
    const data = req.body
    const isUpdated = await bookService.update(id, data)
    if (!isUpdated) {
      res.sendStatus(404)
      return;
    }
    res.sendStatus(204);
  },
    /**
   * @param { Request } req
   * @param { Response } res
   */
  delete: async (req, res) => {
   const { id } = req.params;
   const isDeleted = await bookService.delete(id)
   if ((isDeleted)) {
    res.sendStatus(404);
   }
   res.sendStatus(204)
  },

  updateCover: async (req,res) => {
    const { id } = req.params;
    const cover = req.file.filename;
    await bookService.updateCover(id, cover)
  }
};

module.exports = bookController;
