const { Sequelize, ModelStatic, DataTypes} = require('sequelize');

/**
 * @param { Sequelize } sequelize
 * @returns { ModelStatic<any> }
 */

module.exports = (sequelize) => {
    const MM_Author_Book = sequelize.define('MM_Author_Book', {
        role : {
            type: DataTypes.STRING(20),
        
        }
    },
    {
        tableName: "MM_Author_Book"
    })
    return MM_Author_Book
}