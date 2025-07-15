const { DataTypes } = require("sequelize");
const db = require("./db");

const Ballot = db.define("ballot", {
  ballot_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  poll_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: "pollTable",
        key: "poll_Id",
    }
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "User",
      key: "user_id",
    }
  }

});

module.exports = Ballot;
