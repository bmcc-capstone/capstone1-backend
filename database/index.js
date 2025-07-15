const Sequelize = require("sequelize");
const db = require("./db");

const User = require("./user") (db, Sequelize.DataTypes);
const Poll = require("./pollTable") (db, Sequelize.DataTypes);
const PollOption = require("./pollOptions") (db, Sequelize.DataTypes);
const Ballot = require("./Ballot") (db, Sequelize.DataTypes);
const BallotItem = require("./BallotItems") (db, Sequelize.DataTypes);

User.hasMany(Poll, { foreignKey: "user_id" });
Poll.belongsTo(User, { foreignKey: "user_id" });

Poll.hasMany(PollOption, { foreignKey: "poll_id", onDelete: "CASCADE" });
PollOption.belongsTo(Poll, { foreignKey: "poll_id" });

Poll.hasMany(Ballot, { foreignKey: "poll_id", onDelete: "CASCADE" });
Ballot.belongsTo(Poll, { foreignKey: "poll_id" });

User.hasMany(Ballot, { foreignKey: "user_id" });
Ballot.belongsTo(User, { foreignKey: "user_id" });

Ballot.hasMany(BallotItem, { foreignKey: "ballot_id", onDelete: "CASCADE" });
BallotItem.belongsTo(Ballot, { foreignKey: "ballot_id" });

module.exports = {
  db,
  User,
  Poll,
  PollOption,
  Ballot,
  BallotItem,
};
