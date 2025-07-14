const { DataTypes } = require("sequelize");
const db = require("./db");
const bcrypt = require("bcrypt");

const pollOptions = db.define("user", {
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
});

module.exports = pollOptions;
