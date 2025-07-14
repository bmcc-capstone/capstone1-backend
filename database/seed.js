const db = require("./db");
const { User, Poll } = require("./index");

const seed = async () => {
  try {
    db.logging = false;
    await db.sync({ force: true }); // Drop and recreate tables

    const users = await User.bulkCreate([
      {
        username: "admin",
        passwordHash: User.hashPassword("admin123"),
        firstName: "Admin",
        lastName: "User",
      },
      {
        username: "user1",
        passwordHash: User.hashPassword("user111"),
        firstName: "User",
        lastName: "One",
      },
      {
        username: "user2",
        passwordHash: User.hashPassword("user222"),
        firstName: "User",
        lastName: "Two",
      },
    ]);

    const polls = await Poll.bulkCreate([
      {
        title: "Pizza or Burgers",
        description: "Vote for your favorite language this year!",
      },
      {
        title: "Favorite food?",
        description: "React, Vue, Svelte, or something else?",
      },
    ]);

    console.log(`🗳️ Created ${polls.length} polls`);

    console.log("🌱 Seeded the database");
  } catch (error) {
    console.error("Error seeding database:", error);
    if (error.message.includes("does not exist")) {
      console.log("\n🤔🤔🤔 Have you created your database??? 🤔🤔🤔");
    }
  }
  db.close();
};

seed();
