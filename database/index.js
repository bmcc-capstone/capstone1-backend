const Sequelize = require("sequelize");
const db = require("./db");

const User = require("./user");
const Poll = require("./polls");
const PollOption = require("./pollOptions");
const Ballot = require("./Ballot");
const BallotItem = require("./BallotItems");

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
