const { DataTypes } = require("sequelize");
const db = require("./db");
const bcrypt = require("bcrypt");

const pollOption = db.define("user", {
  option_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  option_text: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
  poll_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "pollTable",
      key: "poll_id",
    },
  },
});

module.exports = pollOption;
