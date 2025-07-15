const { DataTypes } = require("sequelize");
const db = require("./db");
const bcrypt = require("bcrypt");

const poll = db.define("polls", {
  poll_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  title: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },

  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },

  expires_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

module.exports = poll;
