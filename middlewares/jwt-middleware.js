const { Request, Response, NextFunction } = require("express");
const db = require("../models");
const userService = require("../services/user.service");
const ErrorResponse = require("../utils/error.response");
const jwt = require("../utils/jwt");

const authJwt = (roles) => {
  /**
   * @param {Request} req
   * @param {Response} res
   * @param {NextFunction} next
   */
  return async (req, res, next) => {
    const bearerToken = req.headers.authorization;
    const token = bearerToken.split(" ")[1];

    if (!token || token === "") {
      res.status(401).json(new ErrorResponse("Not authorized !", 401));
      return;
    }
    const payload = await jwt.decode(token);

    if (roles) {
      const user = await userService.getById(payload.id);
      console.log(user.role.toLowerCase());
      const rolesLowerCase = roles.map((r) => r.toLowerCase());
      console.log(rolesLowerCase);
      const access = rolesLowerCase.includes(user.role.toLowerCase());

      if (!access) {
        res.status(403).json(new ErrorResponse("Access denied !"));
        return;
      }
    }
    req.user = payload;
    next();
  };
};

module.exports = authJwt;
