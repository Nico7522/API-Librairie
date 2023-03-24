const argon2 = require("argon2");
const UserDTO = require("../dto/user.dto");
const { User } = require("../models");
const db = require("../models");


const userService = {
  getAll: async () => {
    const { rows, count } = await db.User.findAndCountAll({
      distinct: true,
    });
    console.log(rows);
    return {
      users: rows.map((user) => new UserDTO(user)),
      count,
    };
  },

  getById: async (id) => {
    const user = await db.User.findByPk(id);
    return user ? new UserDTO(user) : null;
  },

  update: async (id, userToUpdate) => {
    const masquedPwd = await argon2.hash(userToUpdate.password);
    userToUpdate.password = masquedPwd;
    const isUpdated = await db.User.update(userToUpdate, {
      where: { id },
    });
    return isUpdated[0] === 1;
  },

  delete: async (id) => {
    const isDeleted = await User.destroy({
      where: { id },
    });
    return isDeleted[0] === 1;
  },
};

module.exports = userService;
