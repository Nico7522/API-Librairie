const { Sequelize, ModelStatic, DataTypes } = require('sequelize')

/**
 * @param { DataTypes } sequelize
 * @returns { ModelStatic<any> }
 */

module.exports = (sequelize) => {
    const Author = sequelize.define("Author", {
        name: {
            type: DataTypes.STRING(50),
            allowNull : false
        },
        surname : {
            type : DataTypes.STRING(50),
            allowNull: false
        },
        birthdate: {
            type : DataTypes.DATE,
            allowNull: false
        },
    },
    {
        tableName: "Author"
    })

    return Author;
}