const argon2 = require('argon2');
const UserDTO = require('../dto/user.dto');
const db = require('../models')

const authService = {
    register: async (userToCreate) => {
        const masquedPwd = await argon2.hash(userToCreate.password);
        userToCreate.password = masquedPwd;
        const user = await db.User.create(userToCreate);
        return user ? new UserDTO(user) : null;
    },

    login: async (email, password) => {
        const user = await db.User.findOne({
         where : { email }
        });
      
        if (!user) {
            return null;
        };
        console.log(user.password);
        console.log(password);
        const isValid = await argon2.verify(user.password, password);
        console.log(isValid);
        if (!isValid) {
            return null;
        }
        return new UserDTO(user);
    }
}

module.exports = authService