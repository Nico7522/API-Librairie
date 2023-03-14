const { Sequelize, ModelStatic, DataTypes } = require('sequelize')

/**
 * @param { DataTypes } sequelize
 * @returns { ModelStatic<any> }
 */

module.exports = (sequelize) => {
    const Author = sequelize.define("Author", {
        name: {
            type: DataTypes.STRING(50),
            allowNull : false,
            validate: {
                notNull: true,
                notEmpty: true,
                len: [1, 50]
            }
        },
        surname : {
            type : DataTypes.STRING(50),
            allowNull: false,
            validate: {
                notNull: true,
                notEmpty: true,
                len: [1, 50]
            }
        },
        birthdate: {
            type : DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: true,
                notEmpty: true,
                isDate: true
            }
        },
    },
    {
        tableName: "Author"
    })

    return Author;
}