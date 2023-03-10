const { Sequelize, ModelStatic, DataTypes } = require('sequelize')

/**
 * @param { Sequelize } sequelize
 * @returns { ModelStatic<any> }
 */
module.exports = (sequelize) => {
    const Order = sequelize.define('Order', {
        status: {
            type : DataTypes.STRING(20),
            allowNull: false
        }
    },
    {
        tableName: 'Order'
    })

    return Order; 
}