const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Rank = sequelize.define("rank", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  rank: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Rank;
