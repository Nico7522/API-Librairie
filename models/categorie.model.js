const { Sequelize, ModelStatic, DataTypes } = require("sequelize");

/**
 *
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>}
 */
module.exports = (sequelize) => {
  const Categorie = sequelize.define("Categorie", {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate : {
        notNull: true,
        notEmpty: true,
        len: [1, 50]
      }
    }
  },
  {
    tableName: "Categorie"
  });

  return Categorie;
};

