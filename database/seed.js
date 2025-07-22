const db = require("./db");
const { User, Poll, PollOption, Ballot, BallotItem } = require("./index");

const seed = async () => {
  try {
    db.logging = false;
    await db.sync({ force: true });

    const users = await User.bulkCreate([
      {
        email: "guaro@gmail.com",
        username: "guarionex.t",
        firstName: "Guarionex",
        lastName: "Tavares",
        passwordHash: User.hashPassword("hashed_password_1"),
      },
      {
        email: "jose@gmail.com",
        firstName: "Jose",
        lastName: "Ramirez",
        username: "jose.ramirez",
        passwordHash: User.hashPassword("hashed_password_2"),
      },
      {
        email: "benjamin@gmail.com",
        firstName: "Benjamin",
        lastName: "Santos",
        username: "ben.santos",
        profilePicture: null,
        passwordHash: User.hashPassword("hashed_password_3"),
      },
      {
        email: "jeramy@gmail.com",
        firstName: "Jeramy",
        lastName: "Flores",
        username: "jeramy.f",
        passwordHash: User.hashPassword("hashed_password_4"),
      },
    ]);

    const polls = await Poll.bulkCreate([
      {
        title: "Pizza or Burgers 🍕 ",
        description: "Vote for your favorite language this year!",
        user_id: users[0].user_id,
        status: "published",
      },
      {
        title: "Favorite food? 🍕 ",
        description: "React, Vue, Svelte, or something else?",
        user_id: users[0].user_id,
        status: "published",
      },
      {
        title: "Favorite movie genre?",
        description: "Action, Thriller, Romance, or something else?",
        user_id: users[2].user_id,
        status: "published",
      },
      {
        title: "Greatest basketball player? 🏀",
        description: "Lebron or Jordan?",
        user_id: users[3].user_id,
        status: "published",
      },
      {
        title: "Favorite pop star 🌟🎤",
        description: "Michael Jackson or Prince?",
        user_id: users[3].user_id,
        status: "published",
      },
    ]);

    const pollOptions = await PollOption.bulkCreate([
      {
        option_text: "pizza",
        poll_id: polls[0].poll_id,
      },
      {
        option_text: "burgers",
        poll_id: polls[0].poll_id,
      },
      {
        option_text: "lasagna",
        poll_id: polls[1].poll_id,
      },
      {
        option_text: "tres golpes",
        poll_id: polls[1].poll_id,
      },
    ]);

    const ballots = await Ballot.bulkCreate([
      {
        poll_id: polls[0].poll_id,
        user_id: users[0].user_id,
      },
      {
        poll_id: polls[0].poll_id,
        user_id: users[1].user_id,
      },
      {
        poll_id: polls[1].poll_id,
        user_id: users[0].user_id,
      },
      {
        poll_id: polls[1].poll_id,
        user_id: users[2].user_id,
      },
      {
        poll_id: polls[1].poll_id,
        user_id: users[1].user_id,
      },
    ]);

    const ballotItems = await BallotItem.bulkCreate([
      {
        user_id: users[1].user_id,
        ballot_id: ballots[1].ballot_id,
        option_id: pollOptions[1].option_id,
        poll_id: polls[1].poll_id,
        rank: 1,
      },
      {
        user_id: users[2].user_id,
        ballot_id: ballots[2].user_id,
        option_id: pollOptions[1].option_id,
        poll_id: polls[1].poll_id,
        rank: 2,
      },
    ]);

    console.log(`🗳️ Created ${users.length} users`);
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

module.exports = seed;
