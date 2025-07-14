const Sequelize = require("sequelize");
const db = require("./db");

const User = require("./user")(db, Sequelize.DataTypes);
const Poll = require("./Poll")(db, Sequelize.DataTypes);
const Option = require("./pollOptions")(db, Sequelize.DataTypes);
const Vote = require("./Ballot")(db, Sequelize.DataTypes);
const Rank = require("./Rank")(db, Sequelize.DataTypes);
const Ballot = require("./Ballet")(db, Sequelize.DataTypes);
const BallotItems = require("./BalletItems")(db, Sequelize.DataTypes);

User.hasMany(Poll, { foreignKey: "userId" });
Poll.belongsTo(User, { foreignKey: "userId" });

Poll.hasMany(Option, { foreignKey: "pollId", onDelete: "CASCADE" });
Option.belongsTo(Poll, { foreignKey: "pollId" });

Poll.hasMany(Vote, { foreignKey: "pollId", onDelete: "CASCADE" });
Ballot.belongsTo(Poll, { foreignKey: "pollId" });

User.hasMany(Vote, { foreignKey: "userId" });
Ballot.belongsTo(User, { foreignKey: "userId" });

Rank.hasMany(Option, { foreignKey: "rankId" });
Rank.belongsTo(Option, { foreignKey: "optionId" });

Ballot.hasMany(BalletItems, { foreignKey: "ballotId", onDelete: "CASCADE" });
BallotItems.belongsTo(Ballot, { foreignKey: "ballotId" });
