const { DataTypes } = require("sequelize");
const db = require("./db");

const BallotItem = db.define("BallotItem", {
  ballotItem_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

  rank: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: "users",
      key: "user_id",
    },
  },

  ballot_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "ballots",
      key: "ballot_id",
    },
  },

  option_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "pollOptions",
      key: "option_id",
    },
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

module.exports = BallotItem;
