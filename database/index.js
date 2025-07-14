const Sequelize = require("sequelize");
const db = require("./db");

const User = require("./user")(db, Sequelize.DataTypes);
const pollTable = require("./pollTable")(db, Sequelize.DataTypes);
const pollOption = require("./pollOptions")(db, Sequelize.DataTypes);
const Vote = require("./Ballot")(db, Sequelize.DataTypes);
const Rank = require("./Rank")(db, Sequelize.DataTypes);
const Ballot = require("./Ballet")(db, Sequelize.DataTypes);
const BallotItems = require("./BalletItems")(db, Sequelize.DataTypes);

User.hasMany(Poll, { foreignKey: "userId" });
pollTable.belongsTo(User, { foreignKey: "userId" });

pollTable.hasMany(pollOption, { foreignKey: "pollId", onDelete: "CASCADE" });
pollOption.belongsTo(Poll, { foreignKey: "pollId" });

pollTable.hasMany(Vote, { foreignKey: "pollId", onDelete: "CASCADE" });
Ballot.belongsTo(Poll, { foreignKey: "pollId" });

User.hasMany(Vote, { foreignKey: "userId" });
Ballot.belongsTo(User, { foreignKey: "userId" });

Rank.hasMany(pollOption, { foreignKey: "rankId" });
Rank.belongsTo(pollOption, { foreignKey: "optionId" });

Ballot.hasMany(BalletItems, { foreignKey: "ballotId", onDelete: "CASCADE" });
BallotItems.belongsTo(Ballot, { foreignKey: "ballotId" });
