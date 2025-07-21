const { DataTypes } = require("sequelize");
const db = require("./db");
const bcrypt = require("bcrypt");

const Poll = db.define("polls", {
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
  status: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "users",
      key: "user_id",
    },
  },
});

module.exports = Poll;
