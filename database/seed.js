const db = require("./db");
const { User } = require("./index");

const seed = async () => {
  try {
    db.logging = false;
    await db.sync({ force: true }); // Drop and recreate tables

    const users = await User.bulkCreate([
      ,{
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

    console.log(`👤 Created ${users.length} users`);

    // Create more seed data here once you've created your models
    // Seed files are a great way to test your database schema!

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
