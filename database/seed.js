const Ballot = require("./Ballot");
const db = require("./db");
const { User, Poll, PollOption, BallotItem  } = require("./index");

const seed = async () => {
  try {
    db.logging = false;
    await db.sync({ force: true }); // Drop and recreate tables

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

    const pollOptions = await PollOption.bulkCreate([
      {
        option_text: "pizza",
        poll_id: 1, 
      },
      {
        option_text: "burgers",
        poll_id: 1,
      },
      {
        option_text: "lasagna",
        poll_id: 2,
      },
      {
        option_text: "tres golpes",
        poll_id: 2
      }
    ]);

    const ballots = await Ballot.bulkCreate([
      {
        poll_id: 1,
        user_id: 1,
      },
      {
        poll_id: 1,
        user_id: 2,
      },
      {
        poll_id: 2, 
        user_id: 1,
      },
      {
        poll_id: 2,
        user_id: 2,
      }
    ]);

    const ballotItems = await BallotItem.bulkCreate ([
      {
        user_id: 1,
        ballot_id: 1,
        option_id: 1, 
        poll_id: 1, 
      },
      {
        user_id: 2,
        ballot_id: 2,
        option_id: 2, 
        poll_id: 1,
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
