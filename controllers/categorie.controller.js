const { Request, Response } = require("express");
const db = require("../models");
const categorieService = require("../services/categorie.service");
const { SuccessArrayResponse, SuccessResponse } = require("../utils/success.response");

const categorieController = {
  /**
   * @param { Request } req
   * @param { Response } res
   */
  getAll: async (req, res) => {
    const { categories, count } = await categorieService.getAll();
    return res.status(200).json(new SuccessArrayResponse(categories, count))
  },
  /**
   * @param { Request } req
   * @param { Response } res
   */
  getById: async (req, res) => {
    const { id } = req.params;
    const categorie = await categorieService.getById(id);
    if (!categorie) {
      res.sendStatus(404);
      return;
    }
    return res.status(200).json(new SuccessResponse(categorie))
  },
  /**
   * @param { Request } req
   * @param { Response } res
   */
  create: async (req, res) => {
    const data = req.body;
    const categorie = await categorieService.create(data);
    res.location('/categorie/' + categorie.id);
    res.status(201).json(new SuccessResponse(categorie, 201))
  },
  /**
   * @param { Request } req
   * @param { Response } res
   */
  update: async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const isUpdated = await categorieService.update(id, data);
    if (!isUpdated) {
      res.sendStatus(404);
      return;
    }
    res.sendStatus(204);
  },

  delete: async (req, res) => {
    res.sendStatus(501);
  },
};

module.exports = categorieController;
