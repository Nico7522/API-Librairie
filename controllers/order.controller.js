const { Request, Response } = require("express");
const orderService = require("../services/order.service");
const { SuccessArrayResponse, SuccessResponse } = require("../utils/success.response");

const orderController = {
  /**
   * @param { Request } req
   * @param { Response } res
   */
  getAll: async (req, res) => {
    const { orders, count } = await orderService.getAll();
    res.status(200).json(new SuccessArrayResponse(orders, count))
  },
  /**
   * @param { Request } req
   * @param { Response } res
   */
  getById: async (req, res) => {
    const { id } = req.params;
    const order = await orderService.getById(id);
    if (!order) {
      res.sendStatus(404);
    }
    res.status(200).json(new SuccessResponse(order))
  }
  /**
   * @param { Request } req
   * @param { Response } res
   */,
  create: async (req, res) => {
    const data = req.body;
    const order = await orderService.create(data);
    res.location('/order/' + order.id);
    res.status(201).json(new SuccessResponse(order, 201));
  },
  /**
   * @param { Request } req
   * @param { Response } res
   */
  update: async (req, res) => {
    const { id }= req.params;
    const data = req.body;
    const isUpdated = await orderService.update(id, data);
    if(!isUpdated){
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
    const isDeleted = await orderService.delete(id);
    if (!isDeleted) {
      res.sendStatus(404);
      return;
    }
    res.sendStatus(204)
  },
};

module.exports = orderController;
