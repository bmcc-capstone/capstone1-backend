const { DataTypes } = require("sequelize");
const db = require("./db");

const Ballot = db.define("ballot", {
  ballot_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  poll_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Ballot;