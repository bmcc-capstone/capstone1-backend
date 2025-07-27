const { DataTypes } = require("sequelize");
const db = require("./db");
const bcrypt = require("bcrypt");
const slugify = require("slugify");

const Poll = db.define("polls", {
  poll_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  title: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },

  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },

  expires_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  public: {
    type: DataTypes.BOOLEAN,
    allowNull: null,
    defaultValue: true,
  },

  status: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: null,
  },

  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: "users",
      key: "user_id",
    },
  },

  slug: {
    type: DataTypes.STRING, 
    unique: true,
  },

  shareableLink: {
    type: DataTypes.STRING,
    unique: true,
  }
});

Poll.beforeCreate(async (poll) => {
  if (poll.title) {
    const rawSlug = slugify(poll.title, {
      lower: true, 
      strict: true,
    });
  
  const baseUrl = process.env.FRONTEND_URL || "http://localhost:3000";
  poll.slug = `${rawSlug}-${Date.now()}`;
  poll.shareableLink = `${baseUrl}/pollVotingPage/${poll.slug}`;
  }
});

module.exports = Poll;
