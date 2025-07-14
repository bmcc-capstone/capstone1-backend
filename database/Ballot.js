const { DataTypes } = require("sequelize");
const db = require("./db");

const Ballot = db.define("ballot", {
  ballot_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  pollId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: "polls",
        key: "pollId",
    }
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
        model: "users",
        key: "userId",
    },
  },
});

module.exports = Ballot;
