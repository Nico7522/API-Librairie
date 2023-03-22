const { Sequelize, ModelStatic, DataTypes } = require("sequelize");

/**
 * @param { Sequelize } sequelize
 * @returns { ModelStatic<any>}
 */

module.exports = (sequelize) => {
  const User = sequelize.define(
    "User",
    {
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
          len: [1, 50],
        },
      },
      surname: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
          len: [1, 50],
        },
      },
      birtdate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          isDate: true,
          notNull: true,
          notEmpty: true,
          customValidator() {
            const date = new Date().getFullYear()
            if (
              this.birtdate.getFullYear() >
              date - 18
            ) {
              throw new Error("Vous devez être majeur");
            }
          },
        },
      },
      adresse: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
          len: [1, 100],
        },
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: "UK_User_Email",
        validate: {
          notNull: true,
          notEmpty: true,
          len: [1, 100],
        },
      },
      phonenumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: "UK_User_PhoneNumber",
        validate: {
          notNull: true,
          notEmpty: true,
          len: [1, 10],
        },
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          is: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
          notNull: true,
          notEmpty: true,
          len: [8, 100],
        },
      },
      role: {
        type: DataTypes.STRING(10),
        allowNull: false,
        defaultValue: "User",
        validate: {
          isIn: [["User", "Sous admin", "Admin"]],
          notNull : true,
          notEmpty : true,
        },
      },
    },
    {
      tableName: "User",
    }
  );
  return User;
};
