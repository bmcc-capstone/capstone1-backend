const Sequelize = require("sequelize");
const db = require("./db");

const User = require("./user")(db, Sequelize.DataTypes);
const Poll = require("./Poll")(db, Sequelize.DataTypes);
const Option = require("./Option")(db, Sequelize.DataTypes);
const Vote = require("./Vote")(db, Sequelize.DataTypes);
const Rank = require("./Rank")(db, Sequelize.DataTypes);
const Ballet = require("./Ballet")(db, Sequelize.DataTypes);
const BalletItems = require("./BalletItems")(db, Sequelize.DataTypes);

User.hasMany(Poll, { foreignKey: "userId" });
Poll.belongsTo(User, { foreignKey: "userId" });

Poll.hasMany(Option, { foreignKey: "pollId", onDelete: "CASCADE" });
Option.belongsTo(Poll, { foreignKey: "pollId" });

Poll.hasMany(Vote, { foreignKey: "pollId", onDelete: "CASCADE" });
Vote.belongsTo(Poll, { foreignKey: "pollId" });

User.hasMany(Vote, { foreignKey: "userId" });
Vote.belongsTo(User, { foreignKey: "userId" });

Rank.hasMany(Option, { foreignKey: "rankId" });
Rank.belongsTo(Option, { foreignKey: "optionId" });

Ballet.hasMany(BalletItems, { foreignKey: "balletId", onDelete: "CASCADE" });
BalletItems.belongsTo(Ballet, { foreignKey: "balletId" });
