const { Sequelize, ModelStatic, DataTypes } = require('sequelize')

/**
 * @param { Sequelize } sequelize
 * @returns { ModelStatic<any> }
 */
module.exports = (sequelize) => {
    const Order = sequelize.define('Order', {
        status: {
            type : DataTypes.STRING(20),
            allowNull: false,
            validate: {
                notNull: true,
                notEmpty: true,
                len: [1, 20],
                isIn: [['In process','Finish']]
            }
        }
    },
    {
        tableName: 'Order'
    })

    return Order; 
}