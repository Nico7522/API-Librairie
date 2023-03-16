const { Request, Response } = require("express");
const authService = require("../services/auth.service");
const ErrorResponse = require("../utils/error.response");
const jwt = require("../utils/jwt");
const { SuccessResponse } = require("../utils/success.response");

const authController = {
  /**
   * @param { Request } req
   * @param { Response } res
   */

  register: async (req, res) => {
    const data = req.body;
    const user = await authService.register(data);
    const token = await jwt.generate(user);
    res.status(201).json(new SuccessResponse({token,user}, 201));
  },
  /**
   * @param { Request } req
   * @param { Response } res
   */
  login: async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    const user = await authService.login(email, password);
    if (!user) {
      res.status(400).json(new ErrorResponse("Login error, please try again."));
      return;
    }
    const token = await jwt.generate(user);

    res.status(200).json(new SuccessResponse({token, user}));
  },
};

module.exports = authController;
