const argon2 = require('argon2');
const UserDTO = require('../dto/user.dto')
const db = require('../models');
const { options } = require('../routes/user.route');

const userService = {

    getAll: async () => {
        const { rows, count } = await db.User.findAndCountAll({
            distinct: true,
        })
      

        return {
            users: rows.map(user => new UserDTO(user)),
            count
        } 
    },

    getById: async (id) => {
        const user = await db.User.findByPk(id);
        return user ? new UserDTO(user) : null;
    },

    update: async (id, userToUpdate) => {
        const isUpdated = await db.User.update(userToUpdate, {
            where: { id }
        });
        return isUpdated[0] === 1;
    },

    delete: async () => {

    },
}

module.exports = userService;