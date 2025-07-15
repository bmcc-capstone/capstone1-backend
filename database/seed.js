const db = require("./db");
const { User, pollTable } = require("./index");

const seed = async () => {
  try {
    db.logging = false;
    await db.sync({ force: true });

    const users = await User.bulkCreate([
      ,
      {
        email: "guaro@gmail.com",
        firstName: "Guarionex",
        lastName: "Tavares",
        passwordHash: User.hashPassword("hashed_password_1"),
      },
      {
        email: "jose@gmail.com",
        firstName: "Jose",
        lastName: "Ramirez",
        passwordHash: User.hashPassword("hashed_password_2"),
      },
      {
        email: "benjamin@gmail.com",
        firstName: "Benjamin",
        lastName: "Santos",
        profilePicture: null,
        passwordHash: User.hashPassword("hashed_password_3"),
      },
      {
        email: "jeramy@gmail.com",
        firstName: "Jeramy",
        lastName: "Flores",
        passwordHash: User.hashPassword("hashed_password_4"),
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

    console.log(`🗳️ Created ${users.length} polls`);
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
