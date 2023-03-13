const { Request, Response } = require("express");
const userService = require("../services/user.service");
const { SuccessArrayResponse, SuccessResponse } = require("../utils/success.response");

const userController = {

    /**
     * @param { Request } req
     * @param { Response } res
     */
    getAll : async (req, res) => {
        const {users, count} = await userService.getAll()
        res.status(200).json(new SuccessArrayResponse(users, count))
    },
        /**
     * @param { Request } req
     * @param { Response } res
     */
    getById : async (req, res) => {
        const { id } = req.params;
        const user = await userService.getById(id);
        if (!user) {
            res.status(404);
            return;
        }
        res.status(200).json(new SuccessResponse(user))
    },

    /**
     * @param { Request } req
     * @param { Response } res
     */
    update: async (req, res) => {
        const { id } = req.params;
        const data = req.body;
        const isUpdated = await userService.update(id, data)
        if (!isUpdated) {
            res.sendStatus(404);
            return;
        }
        res.location('/user/'+ id)
        res.sendStatus(204)
    },
        /**
     * @param { Request } req
     * @param { Response } res
     */
    delete: async (req, res) => {
        res.sendStatus(501);
    }
}

module.exports = userController;