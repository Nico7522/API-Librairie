const { Request, Response } = require("express");
const authService = require("../services/auth.service");
const ErrorResponse = require("../utils/error.response");
const { SuccessResponse } = require("../utils/success.response");

const authController = {
  /**
   * @param { Request } req
   * @param { Response } res
   */

  register: async (req, res) => {
    const data = req.body;
    const user = await authService.register(data);
    res.status(201).json(new SuccessResponse(user, 201));
  },
  /**
   * @param { Request } req
   * @param { Response } res
   */
  login: async (req, res) => {
    const { email, password } = req.body;
    const user = await authService.login(email, password);

    if (!user) {
      res.status(400).json(new ErrorResponse("Login error, please try again."));
      return;
    }
    console.log('okok');
    res.status(200).json(new ErrorResponse("You're now loged, welcome !"));
  },
};

module.exports = authController;
