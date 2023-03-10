const { Request, Response } = require("express");

const userController = {

    /**
     * @param { Request } req
     * @param { Response } res
     */
    getAll : async (req, res) => {
        res.sendStatus(501);
    },
        /**
     * @param { Request } req
     * @param { Response } res
     */
    getById : async (req, res) => {
        res.sendStatus(501);
    },
        /**
     * @param { Request } req
     * @param { Response } res
     */
    create: async (req, res) => {
        res.sendStatus(501);
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
        res.sendStatus(501);
    }
}

module.exports = userController;