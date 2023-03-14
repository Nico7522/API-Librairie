const OrderDTO = require('../dto/order.dto');
const { User, Book } = require('../models');
const db = require('../models')

const orderService = {

    getAll: async () => {
        const { rows, count } = await db.Order.findAndCountAll({
            distinct: true,
            include: [Book ,User]
        });

        return {
            orders : rows.map(order => new OrderDTO(order)),
            count
        }
    },

    getById: async (id) => {
        const order = await db.Order.findByPk(id, {
            include: [Book, User]
        });
        return order ? new OrderDTO(order) : null;

    },

    create: async (orderToCreate) => {
        const transaction = await db.sequelize.transaction();
    
        let order;
        try {
            order = await db.Order.create(orderToCreate, { transaction });
            console.log(order);
            await order.addBook(orderToCreate.books, { transaction });
            await transaction.commit()
            const finalOrder = await db.Order.findByPk(order.id, {
                include : [Book , User]
            })
            return finalOrder ? new OrderDTO(finalOrder) : null;
        } catch (error) {
           await transaction.rollback();
            return null;
        }


    },

    update: async (id, orderToUpdate) => {
        const isUpdated = await db.Order.update(orderToUpdate, {
            where: { id }
        });
        return isUpdated[0] === 1;
    },

    delete: async (id) => {
        const isDeleted = await db.Order.destroy({
            where: { id }
        });
        return isDeleted[0] === 1;

    }

}

module.exports = orderService;