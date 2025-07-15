const { DataTypes } = require("sequelize");
const db = require("./db");
const bcrypt = require("bcrypt");

const pollOption = db.define("pollOption", {
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
      model: "polls",
      key: "poll_id",
    },
  },
});

module.exports = pollOption;
