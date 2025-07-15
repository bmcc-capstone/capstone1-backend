module.exports = (sequelize, DataTypes) => {
    const BallotItem = sequelize.define("BallotItem", {
      rank_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
  
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "User",
          key: "user_id",
        },
      },
  
      ballot_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Ballot",
          key: "ballot_id",
        },
      },
  
      option_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "pollOption",
          key: "option_id",
        },
      },
  
      poll_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "pollTable",
          key: "poll_id",
        },
      },
  
      rank: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return BallotItem;
  };
  