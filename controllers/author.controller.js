const { Request, Response } = require("express");
const authorService = require("../services/author.service");
const { SuccessResponse ,SuccessArrayResponse} = require("../utils/success.response");

const authorController = {
  /**
   * @param { Request } req
   * @param { Response } res
   */
  getAll: async (req, res) => {
    const { authors, count } = await authorService.getAll();
    res.status(200).json(new SuccessArrayResponse(authors, count))
  },
  /**
   * @param { Request } req
   * @param { Response } res
   */
  getById: async (req, res) => {
    const {id} = req.params
    const author = await authorService.getById(id);
    if (!author) {
        res.sendStatus(404);
        return
    }
    res.status(200).json(new SuccessResponse(author));
  },
  /**
   * @param { Request } req
   * @param { Response } res
   */
  create: async (req, res) => {
    const data = req.body
    const author = await authorService.create(data);

    res.location('/author/'+ author.id)
    res.status(201).json(new SuccessResponse(author, 201))
  },
  /**
   * @param { Request } req
   * @param { Response } res
   */
  update: async (req, res) => {
    const data = req.body;
    const { id } = req.params
    const isUpdated = await authorService.update(id, data)
    if (!isUpdated) {
        res.sendStatus(404);
        return;
    }
    res.location('/author/' + id)
    res.sendStatus(204);
  },
  /**
   * @param { Request } req
   * @param { Response } res
   */
  delete: async (req, res) => {
    const { id } = req.params
    const isDeleted = await authorService.delete(id);
    if (!isDeleted) {
        res.sendStatus(404);
        return;
    }
    res.sendStatus(204)
  },
};

module.exports = authorController;
