const { Sequelize, ModelStatic, DataTypes } = require("sequelize");

/**
 *
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>}
 */
module.exports = (sequelize) => {
  const Book = sequelize.define("Book", {
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
        len: [1, 50]
      }
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true,
      validate: {
        notNull: false,
        notEmpty: false,
        isFloat: true
      }
    },
    cover: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '/images/bookcover/nocover.jpg',
      validate: {
        notNull: true,
        notEmpty: true
      }
    }
  },
  {
    tableName: "Book"
  });

  return Book;
};
