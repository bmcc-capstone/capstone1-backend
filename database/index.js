const Sequelize = require("sequelize");
const db = require("./db");

const User = require("./user")(db, Sequelize.DataTypes);
const Poll = require("./pollTable")(db, Sequelize.DataTypes);
const PollOption = require("./pollOptions")(db, Sequelize.DataTypes);
const Ballot = require("./Ballot")(db, Sequelize.DataTypes);
const BallotItem = require("./BallotItems")(db, Sequelize.DataTypes);

User.hasMany(Poll, { foreignKey: "userId" });
Poll.belongsTo(User, { foreignKey: "userId" });

Poll.hasMany(PollOption, { foreignKey: "pollId", onDelete: "CASCADE" });
PollOption.belongsTo(Poll, { foreignKey: "pollId" });

Poll.hasMany(Ballot, { foreignKey: "pollId", onDelete: "CASCADE" });
Ballot.belongsTo(Poll, { foreignKey: "pollId" });

User.hasMany(Ballot, { foreignKey: "userId" });
Ballot.belongsTo(User, { foreignKey: "userId" });

Ballot.hasMany(BallotItem, { foreignKey: "ballotId", onDelete: "CASCADE" });
BallotItem.belongsTo(Ballot, { foreignKey: "ballotId" });

PollOption.hasMany(Rank, { foreignKey: "optionId" });
Rank.belongsTo(PollOption, { foreignKey: "optionId" });

module.exports = {
  db,
  User,
  Poll,
  PollOption,
  Ballot,
  BallotItem,
};
