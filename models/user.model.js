const { Sequelize, ModelStatic, DataTypes } = require('sequelize');


/**
 * @param { Sequelize } sequelize
 * @returns { ModelStatic<any>}
 */

module.exports = (sequelize) => {
    const User = sequelize.define('User', {
        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        surname: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        birtdate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        adresse: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: 'UK_User_Email'
        },
        phonenumber: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            unique: "UK_User_PhoneNumber"
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        role: {
            type: DataTypes.STRING(10),
            defaultValue: "User"
        }
    },
    {
        tableName: "User"
    })
    return User;
    
}