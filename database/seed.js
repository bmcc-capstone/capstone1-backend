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
      {
        email: "maria@gmail.com",
        firstName: "Maria",
        lastName: "Garcia",
        username: "maria.g",
        passwordHash: User.hashPassword("hashed_password_5"),
      },
      {
        email: "david@gmail.com",
        firstName: "David",
        lastName: "Smith",
        username: "david.s",
        passwordHash: User.hashPassword("hashed_password_6"),
      },
      {
        email: "sarah@gmail.com",
        firstName: "Sarah",
        lastName: "Johnson",
        username: "sarah.j",
        passwordHash: User.hashPassword("hashed_password_7"),
      },
      {
        email: "michael@gmail.com",
        firstName: "Michael",
        lastName: "Brown",
        username: "michael.b",
        passwordHash: User.hashPassword("hashed_password_8"),
      },
      {
        email: "emily@gmail.com",
        firstName: "Emily",
        lastName: "Davis",
        username: "emily.d",
        passwordHash: User.hashPassword("hashed_password_9"),
      },
      {
        email: "robert@gmail.com",
        firstName: "Robert",
        lastName: "Wilson",
        username: "robert.w",
        passwordHash: User.hashPassword("hashed_password_10"),
      },
      {
        email: "lisa@gmail.com",
        firstName: "Lisa",
        lastName: "Martinez",
        username: "lisa.m",
        passwordHash: User.hashPassword("hashed_password_11"),
      },
      {
        email: "james@gmail.com",
        firstName: "James",
        lastName: "Anderson",
        username: "james.a",
        passwordHash: User.hashPassword("hashed_password_12"),
      },
      {
        email: "jennifer@gmail.com",
        firstName: "Jennifer",
        lastName: "Taylor",
        username: "jennifer.t",
        passwordHash: User.hashPassword("hashed_password_13"),
      },
      {
        email: "thomas@gmail.com",
        firstName: "Thomas",
        lastName: "Hernandez",
        username: "thomas.h",
        passwordHash: User.hashPassword("hashed_password_14"),
      },
      {
        email: "sophia@gmail.com",
        firstName: "Sophia",
        lastName: "Moore",
        username: "sophia.m",
        passwordHash: User.hashPassword("hashed_password_15"),
      },
      {
        email: "william@gmail.com",
        firstName: "William",
        lastName: "Martin",
        username: "william.m",
        passwordHash: User.hashPassword("hashed_password_16"),
      },
      {
        email: "olivia@gmail.com",
        firstName: "Olivia",
        lastName: "Jackson",
        username: "olivia.j",
        passwordHash: User.hashPassword("hashed_password_17"),
      },
      {
        email: "daniel@gmail.com",
        firstName: "Daniel",
        lastName: "Thompson",
        username: "daniel.t",
        passwordHash: User.hashPassword("hashed_password_18"),
      },
      {
        email: "ava@gmail.com",
        firstName: "Ava",
        lastName: "White",
        username: "ava.w",
        passwordHash: User.hashPassword("hashed_password_19"),
      },
      {
        email: "matthew@gmail.com",
        firstName: "Matthew",
        lastName: "Lopez",
        username: "matthew.l",
        passwordHash: User.hashPassword("hashed_password_20"),
      },
    ]);

    // Create 15 polls across different categories
    const polls = await Poll.bulkCreate([
      // Food category
      {
        title: "Pizza or Burgers?",
        description: "Which do you prefer for a quick meal?",
        user_id: users[0].user_id,
        status: "published",
        expires_date: new Date(2024, 6, 1, 12, 0).toISOString(),
      },
      {
        title: "Favorite Comfort Food",
        description: "What's your go-to comfort food?",
        user_id: users[1].user_id,
        status: "published",
      },
      {
        title: "Best Breakfast Food",
        description: "What's the ultimate breakfast choice?",
        user_id: users[2].user_id,
        status: "published",
      },

      // Entertainment category
      {
        title: "Favorite Movie Genre",
        description: "What genre do you enjoy most?",
        user_id: users[3].user_id,
        status: "published",
      },
      {
        title: "Best Streaming Service",
        description: "Which platform do you use most?",
        user_id: users[4].user_id,
        status: "published",
      },
      {
        title: "Preferred Music Genre",
        description: "What music do you listen to daily?",
        user_id: users[5].user_id,
        status: "published",
      },

      // Sports category
      {
        title: "Greatest Basketball Player",
        description: "Who's the GOAT of basketball?",
        user_id: users[6].user_id,
        status: "published",
      },
      {
        title: "Best Soccer Player 2023",
        description: "Who dominated this year?",
        user_id: users[7].user_id,
        status: "published",
      },
      {
        title: "Favorite Sport to Watch",
        description: "What gets you excited on TV?",
        user_id: users[8].user_id,
        status: "published",
      },

      // Technology category
      {
        title: "Preferred Smartphone OS",
        description: "iOS or Android?",
        user_id: users[9].user_id,
        status: "published",
      },
      {
        title: "Best Programming Language 2023",
        description: "What's most valuable to learn?",
        user_id: users[10].user_id,
        status: "published",
      },
      {
        title: "Favorite Social Media Platform",
        description: "Where do you spend your time?",
        user_id: users[11].user_id,
        status: "published",
      },

      // Miscellaneous
      {
        title: "Best Vacation Destination",
        description: "Where would you love to visit?",
        user_id: users[12].user_id,
        status: "published",
      },
      {
        title: "Preferred Coffee Style",
        description: "How do you take your coffee?",
        user_id: users[13].user_id,
        status: "published",
      },
      {
        title: "Most Important Social Issue",
        description: "What should we prioritize?",
        user_id: users[14].user_id,
        status: "published",
      },
    ]);

    // Create options for all polls (3-5 options per poll)
    const pollOptions = await PollOption.bulkCreate([
      // Pizza or Burgers (poll 1)
      { option_text: "Pizza", poll_id: polls[0].poll_id },
      { option_text: "Burgers", poll_id: polls[0].poll_id },
      { option_text: "Both equally", poll_id: polls[0].poll_id },
      { option_text: "Neither", poll_id: polls[0].poll_id },

      // Comfort Food (poll 2)
      { option_text: "Mac & Cheese", poll_id: polls[1].poll_id },
      { option_text: "Ice Cream", poll_id: polls[1].poll_id },
      { option_text: "Chocolate", poll_id: polls[1].poll_id },
      { option_text: "Fried Chicken", poll_id: polls[1].poll_id },

      // Breakfast Food (poll 3)
      { option_text: "Pancakes", poll_id: polls[2].poll_id },
      { option_text: "Eggs & Bacon", poll_id: polls[2].poll_id },
      { option_text: "Avocado Toast", poll_id: polls[2].poll_id },
      { option_text: "Cereal", poll_id: polls[2].poll_id },
      { option_text: "Smoothie", poll_id: polls[2].poll_id },

      // Movie Genre (poll 4)
      { option_text: "Action", poll_id: polls[3].poll_id },
      { option_text: "Comedy", poll_id: polls[3].poll_id },
      { option_text: "Drama", poll_id: polls[3].poll_id },
      { option_text: "Sci-Fi", poll_id: polls[3].poll_id },

      // Streaming Service (poll 5)
      { option_text: "Netflix", poll_id: polls[4].poll_id },
      { option_text: "Disney+", poll_id: polls[4].poll_id },
      { option_text: "HBO Max", poll_id: polls[4].poll_id },
      { option_text: "Amazon Prime", poll_id: polls[4].poll_id },

      // Music Genre (poll 6)
      { option_text: "Pop", poll_id: polls[5].poll_id },
      { option_text: "Rock", poll_id: polls[5].poll_id },
      { option_text: "Hip Hop", poll_id: polls[5].poll_id },
      { option_text: "Electronic", poll_id: polls[5].poll_id },

      // Basketball GOAT (poll 7)
      { option_text: "Michael Jordan", poll_id: polls[6].poll_id },
      { option_text: "LeBron James", poll_id: polls[6].poll_id },
      { option_text: "Kobe Bryant", poll_id: polls[6].poll_id },
      { option_text: "Kareem Abdul-Jabbar", poll_id: polls[6].poll_id },

      // Soccer Player 2023 (poll 8)
      { option_text: "Lionel Messi", poll_id: polls[7].poll_id },
      { option_text: "Erling Haaland", poll_id: polls[7].poll_id },
      { option_text: "Kylian Mbappé", poll_id: polls[7].poll_id },

      // Sport to Watch (poll 9)
      { option_text: "Football (NFL)", poll_id: polls[8].poll_id },
      { option_text: "Basketball (NBA)", poll_id: polls[8].poll_id },
      { option_text: "Soccer", poll_id: polls[8].poll_id },
      { option_text: "Baseball", poll_id: polls[8].poll_id },

      // Smartphone OS (poll 10)
      { option_text: "iOS", poll_id: polls[9].poll_id },
      { option_text: "Android", poll_id: polls[9].poll_id },
      { option_text: "No preference", poll_id: polls[9].poll_id },

      // Programming Language (poll 11)
      { option_text: "JavaScript", poll_id: polls[10].poll_id },
      { option_text: "Python", poll_id: polls[10].poll_id },
      { option_text: "Java", poll_id: polls[10].poll_id },
      { option_text: "C#", poll_id: polls[10].poll_id },
      { option_text: "Go", poll_id: polls[10].poll_id },

      // Social Media (poll 12)
      { option_text: "Instagram", poll_id: polls[11].poll_id },
      { option_text: "TikTok", poll_id: polls[11].poll_id },
      { option_text: "Twitter", poll_id: polls[11].poll_id },
      { option_text: "Facebook", poll_id: polls[11].poll_id },

      // Vacation Destination (poll 13)
      { option_text: "Beach", poll_id: polls[12].poll_id },
      { option_text: "Mountains", poll_id: polls[12].poll_id },
      { option_text: "City", poll_id: polls[12].poll_id },
      { option_text: "Countryside", poll_id: polls[12].poll_id },

      // Coffee Style (poll 14)
      { option_text: "Black", poll_id: polls[13].poll_id },
      { option_text: "Latte", poll_id: polls[13].poll_id },
      { option_text: "Cappuccino", poll_id: polls[13].poll_id },
      { option_text: "Iced Coffee", poll_id: polls[13].poll_id },

      // Social Issue (poll 15)
      { option_text: "Climate Change", poll_id: polls[14].poll_id },
      { option_text: "Economic Inequality", poll_id: polls[14].poll_id },
      { option_text: "Healthcare", poll_id: polls[14].poll_id },
      { option_text: "Education", poll_id: polls[14].poll_id },
    ]);
    // Create ballots and ballot items
    const ballots = await Ballot.bulkCreate([
      // Poll 1: Pizza or Burgers (4 options)
      { poll_id: polls[0].poll_id, user_id: users[0].user_id }, // User 1
      { poll_id: polls[0].poll_id, user_id: users[1].user_id }, // User 2
      { poll_id: polls[0].poll_id, user_id: users[2].user_id }, // User 3
      { poll_id: polls[0].poll_id, user_id: users[3].user_id }, // User 4
      { poll_id: polls[0].poll_id, user_id: null }, // Unauthenticated
      { poll_id: polls[0].poll_id, user_id: users[4].user_id }, // User 5

      // Poll 2: Comfort Food (4 options)
      { poll_id: polls[1].poll_id, user_id: users[5].user_id }, // User 6
      { poll_id: polls[1].poll_id, user_id: users[6].user_id }, // User 7
      { poll_id: polls[1].poll_id, user_id: users[7].user_id }, // User 8
      { poll_id: polls[1].poll_id, user_id: users[8].user_id }, // User 9
      { poll_id: polls[1].poll_id, user_id: users[9].user_id }, // User 10

      // Poll 3: Breakfast Food (5 options)
      { poll_id: polls[2].poll_id, user_id: users[10].user_id }, // User 11
      { poll_id: polls[2].poll_id, user_id: users[11].user_id }, // User 12
      { poll_id: polls[2].poll_id, user_id: users[12].user_id }, // User 13
      { poll_id: polls[2].poll_id, user_id: users[13].user_id }, // User 14
      { poll_id: polls[2].poll_id, user_id: null }, // Unauthenticated

      // Poll 4: Movie Genre (4 options)
      { poll_id: polls[3].poll_id, user_id: users[14].user_id }, // User 15
      { poll_id: polls[3].poll_id, user_id: users[15].user_id }, // User 16
      { poll_id: polls[3].poll_id, user_id: users[16].user_id }, // User 17
      { poll_id: polls[3].poll_id, user_id: users[17].user_id }, // User 18
      { poll_id: polls[3].poll_id, user_id: users[18].user_id }, // User 19
      { poll_id: polls[3].poll_id, user_id: users[19].user_id }, // User 20

      // Poll 5: Streaming Service (4 options)
      { poll_id: polls[4].poll_id, user_id: users[0].user_id }, // User 1
      { poll_id: polls[4].poll_id, user_id: users[2].user_id }, // User 3
      { poll_id: polls[4].poll_id, user_id: users[4].user_id }, // User 5
      { poll_id: polls[4].poll_id, user_id: users[6].user_id }, // User 7
      { poll_id: polls[4].poll_id, user_id: users[8].user_id }, // User 9
      { poll_id: polls[4].poll_id, user_id: users[10].user_id }, // User 11
    ]);

    const ballotItems = await BallotItem.bulkCreate([
      // ===== POLL 1: Pizza or Burgers =====
      // User 1 - Complete valid ranking
      {
        ballot_id: 1,
        user_id: users[0].user_id,
        option_id: pollOptions[0].option_id,
        poll_id: polls[0].poll_id,
        rank: 1,
      }, // Pizza 1st
      {
        ballot_id: 1,
        user_id: users[0].user_id,
        option_id: pollOptions[1].option_id,
        poll_id: polls[0].poll_id,
        rank: 2,
      }, // Burgers 2nd
      {
        ballot_id: 1,
        user_id: users[0].user_id,
        option_id: pollOptions[2].option_id,
        poll_id: polls[0].poll_id,
        rank: 3,
      }, // Both 3rd
      {
        ballot_id: 1,
        user_id: users[0].user_id,
        option_id: pollOptions[3].option_id,
        poll_id: polls[0].poll_id,
        rank: 4,
      }, // Neither 4th

      // User 2 - Incomplete ranking (missing rank 4)
      {
        ballot_id: 2,
        user_id: users[1].user_id,
        option_id: pollOptions[1].option_id,
        poll_id: polls[0].poll_id,
        rank: 1,
      }, // Burgers 1st
      {
        ballot_id: 2,
        user_id: users[1].user_id,
        option_id: pollOptions[0].option_id,
        poll_id: polls[0].poll_id,
        rank: 2,
      }, // Pizza 2nd
      {
        ballot_id: 2,
        user_id: users[1].user_id,
        option_id: pollOptions[2].option_id,
        poll_id: polls[0].poll_id,
        rank: 3,
      }, // Both 3rd

      // User 3 - Valid alternative ranking
      {
        ballot_id: 3,
        user_id: users[2].user_id,
        option_id: pollOptions[2].option_id,
        poll_id: polls[0].poll_id,
        rank: 1,
      }, // Both 1st
      {
        ballot_id: 3,
        user_id: users[2].user_id,
        option_id: pollOptions[0].option_id,
        poll_id: polls[0].poll_id,
        rank: 2,
      }, // Pizza 2nd
      {
        ballot_id: 3,
        user_id: users[2].user_id,
        option_id: pollOptions[1].option_id,
        poll_id: polls[0].poll_id,
        rank: 3,
      }, // Burgers 3rd
      {
        ballot_id: 3,
        user_id: users[2].user_id,
        option_id: pollOptions[3].option_id,
        poll_id: polls[0].poll_id,
        rank: 4,
      }, // Neither 4th

      // User 4 - Another valid ranking
      {
        ballot_id: 4,
        user_id: users[3].user_id,
        option_id: pollOptions[3].option_id,
        poll_id: polls[0].poll_id,
        rank: 1,
      }, // Neither 1st
      {
        ballot_id: 4,
        user_id: users[3].user_id,
        option_id: pollOptions[2].option_id,
        poll_id: polls[0].poll_id,
        rank: 2,
      }, // Both 2nd
      {
        ballot_id: 4,
        user_id: users[3].user_id,
        option_id: pollOptions[0].option_id,
        poll_id: polls[0].poll_id,
        rank: 3,
      }, // Pizza 3rd
      {
        ballot_id: 4,
        user_id: users[3].user_id,
        option_id: pollOptions[1].option_id,
        poll_id: polls[0].poll_id,
        rank: 4,
      }, // Burgers 4th

      // Unauthenticated user - Complete ranking
      {
        ballot_id: 5,
        user_id: null,
        option_id: pollOptions[0].option_id,
        poll_id: polls[0].poll_id,
        rank: 1,
      }, // Pizza 1st
      {
        ballot_id: 5,
        user_id: null,
        option_id: pollOptions[1].option_id,
        poll_id: polls[0].poll_id,
        rank: 2,
      }, // Burgers 2nd
      {
        ballot_id: 5,
        user_id: null,
        option_id: pollOptions[3].option_id,
        poll_id: polls[0].poll_id,
        rank: 3,
      }, // Neither 3rd
      {
        ballot_id: 5,
        user_id: null,
        option_id: pollOptions[2].option_id,
        poll_id: polls[0].poll_id,
        rank: 4,
      }, // Both 4th

      // User 5 - Another complete ranking
      {
        ballot_id: 6,
        user_id: users[4].user_id,
        option_id: pollOptions[1].option_id,
        poll_id: polls[0].poll_id,
        rank: 1,
      }, // Burgers 1st
      {
        ballot_id: 6,
        user_id: users[4].user_id,
        option_id: pollOptions[3].option_id,
        poll_id: polls[0].poll_id,
        rank: 2,
      }, // Neither 2nd
      {
        ballot_id: 6,
        user_id: users[4].user_id,
        option_id: pollOptions[0].option_id,
        poll_id: polls[0].poll_id,
        rank: 3,
      }, // Pizza 3rd
      {
        ballot_id: 6,
        user_id: users[4].user_id,
        option_id: pollOptions[2].option_id,
        poll_id: polls[0].poll_id,
        rank: 4,
      }, // Both 4th

      // ===== POLL 2: Comfort Food =====
      // User 6 - Complete ranking
      {
        ballot_id: 7,
        user_id: users[5].user_id,
        option_id: pollOptions[4].option_id,
        poll_id: polls[1].poll_id,
        rank: 1,
      }, // Mac & Cheese
      {
        ballot_id: 7,
        user_id: users[5].user_id,
        option_id: pollOptions[5].option_id,
        poll_id: polls[1].poll_id,
        rank: 2,
      }, // Ice Cream
      {
        ballot_id: 7,
        user_id: users[5].user_id,
        option_id: pollOptions[6].option_id,
        poll_id: polls[1].poll_id,
        rank: 3,
      }, // Chocolate
      {
        ballot_id: 7,
        user_id: users[5].user_id,
        option_id: pollOptions[7].option_id,
        poll_id: polls[1].poll_id,
        rank: 4,
      }, // Fried Chicken

      // User 7 - Incomplete ranking (missing rank 4)
      {
        ballot_id: 8,
        user_id: users[6].user_id,
        option_id: pollOptions[5].option_id,
        poll_id: polls[1].poll_id,
        rank: 1,
      }, // Ice Cream
      {
        ballot_id: 8,
        user_id: users[6].user_id,
        option_id: pollOptions[6].option_id,
        poll_id: polls[1].poll_id,
        rank: 2,
      }, // Chocolate
      {
        ballot_id: 8,
        user_id: users[6].user_id,
        option_id: pollOptions[4].option_id,
        poll_id: polls[1].poll_id,
        rank: 3,
      }, // Mac & Cheese

      // User 8 - Complete ranking
      {
        ballot_id: 9,
        user_id: users[7].user_id,
        option_id: pollOptions[7].option_id,
        poll_id: polls[1].poll_id,
        rank: 1,
      }, // Fried Chicken
      {
        ballot_id: 9,
        user_id: users[7].user_id,
        option_id: pollOptions[4].option_id,
        poll_id: polls[1].poll_id,
        rank: 2,
      }, // Mac & Cheese
      {
        ballot_id: 9,
        user_id: users[7].user_id,
        option_id: pollOptions[5].option_id,
        poll_id: polls[1].poll_id,
        rank: 3,
      }, // Ice Cream
      {
        ballot_id: 9,
        user_id: users[7].user_id,
        option_id: pollOptions[6].option_id,
        poll_id: polls[1].poll_id,
        rank: 4,
      }, // Chocolate

      // User 9 - Complete ranking
      {
        ballot_id: 10,
        user_id: users[8].user_id,
        option_id: pollOptions[6].option_id,
        poll_id: polls[1].poll_id,
        rank: 1,
      }, // Chocolate
      {
        ballot_id: 10,
        user_id: users[8].user_id,
        option_id: pollOptions[5].option_id,
        poll_id: polls[1].poll_id,
        rank: 2,
      }, // Ice Cream
      {
        ballot_id: 10,
        user_id: users[8].user_id,
        option_id: pollOptions[7].option_id,
        poll_id: polls[1].poll_id,
        rank: 3,
      }, // Fried Chicken
      {
        ballot_id: 10,
        user_id: users[8].user_id,
        option_id: pollOptions[4].option_id,
        poll_id: polls[1].poll_id,
        rank: 4,
      }, // Mac & Cheese

      // User 10 - Complete ranking
      {
        ballot_id: 11,
        user_id: users[9].user_id,
        option_id: pollOptions[4].option_id,
        poll_id: polls[1].poll_id,
        rank: 1,
      }, // Mac & Cheese
      {
        ballot_id: 11,
        user_id: users[9].user_id,
        option_id: pollOptions[7].option_id,
        poll_id: polls[1].poll_id,
        rank: 2,
      }, // Fried Chicken
      {
        ballot_id: 11,
        user_id: users[9].user_id,
        option_id: pollOptions[5].option_id,
        poll_id: polls[1].poll_id,
        rank: 3,
      }, // Ice Cream
      {
        ballot_id: 11,
        user_id: users[9].user_id,
        option_id: pollOptions[6].option_id,
        poll_id: polls[1].poll_id,
        rank: 4,
      }, // Chocolate

      // ===== POLL 3: Breakfast Food =====
      // User 11 - Complete ranking (5 options)
      {
        ballot_id: 12,
        user_id: users[10].user_id,
        option_id: pollOptions[8].option_id,
        poll_id: polls[2].poll_id,
        rank: 1,
      }, // Pancakes
      {
        ballot_id: 12,
        user_id: users[10].user_id,
        option_id: pollOptions[9].option_id,
        poll_id: polls[2].poll_id,
        rank: 2,
      }, // Eggs & Bacon
      {
        ballot_id: 12,
        user_id: users[10].user_id,
        option_id: pollOptions[10].option_id,
        poll_id: polls[2].poll_id,
        rank: 3,
      }, // Avocado Toast
      {
        ballot_id: 12,
        user_id: users[10].user_id,
        option_id: pollOptions[11].option_id,
        poll_id: polls[2].poll_id,
        rank: 4,
      }, // Cereal
      {
        ballot_id: 12,
        user_id: users[10].user_id,
        option_id: pollOptions[12].option_id,
        poll_id: polls[2].poll_id,
        rank: 5,
      }, // Smoothie

      // User 12 - Incomplete ranking (missing ranks 4-5)
      {
        ballot_id: 13,
        user_id: users[11].user_id,
        option_id: pollOptions[9].option_id,
        poll_id: polls[2].poll_id,
        rank: 1,
      }, // Eggs & Bacon
      {
        ballot_id: 13,
        user_id: users[11].user_id,
        option_id: pollOptions[10].option_id,
        poll_id: polls[2].poll_id,
        rank: 2,
      }, // Avocado Toast
      {
        ballot_id: 13,
        user_id: users[11].user_id,
        option_id: pollOptions[8].option_id,
        poll_id: polls[2].poll_id,
        rank: 3,
      }, // Pancakes

      // User 13 - Complete ranking
      {
        ballot_id: 14,
        user_id: users[12].user_id,
        option_id: pollOptions[12].option_id,
        poll_id: polls[2].poll_id,
        rank: 1,
      }, // Smoothie
      {
        ballot_id: 14,
        user_id: users[12].user_id,
        option_id: pollOptions[10].option_id,
        poll_id: polls[2].poll_id,
        rank: 2,
      }, // Avocado Toast
      {
        ballot_id: 14,
        user_id: users[12].user_id,
        option_id: pollOptions[9].option_id,
        poll_id: polls[2].poll_id,
        rank: 3,
      }, // Eggs & Bacon
      {
        ballot_id: 14,
        user_id: users[12].user_id,
        option_id: pollOptions[11].option_id,
        poll_id: polls[2].poll_id,
        rank: 4,
      }, // Cereal
      {
        ballot_id: 14,
        user_id: users[12].user_id,
        option_id: pollOptions[8].option_id,
        poll_id: polls[2].poll_id,
        rank: 5,
      }, // Pancakes

      // User 14 - Complete ranking
      {
        ballot_id: 15,
        user_id: users[13].user_id,
        option_id: pollOptions[11].option_id,
        poll_id: polls[2].poll_id,
        rank: 1,
      }, // Cereal
      {
        ballot_id: 15,
        user_id: users[13].user_id,
        option_id: pollOptions[8].option_id,
        poll_id: polls[2].poll_id,
        rank: 2,
      }, // Pancakes
      {
        ballot_id: 15,
        user_id: users[13].user_id,
        option_id: pollOptions[12].option_id,
        poll_id: polls[2].poll_id,
        rank: 3,
      }, // Smoothie
      {
        ballot_id: 15,
        user_id: users[13].user_id,
        option_id: pollOptions[10].option_id,
        poll_id: polls[2].poll_id,
        rank: 4,
      }, // Avocado Toast
      {
        ballot_id: 15,
        user_id: users[13].user_id,
        option_id: pollOptions[9].option_id,
        poll_id: polls[2].poll_id,
        rank: 5,
      }, // Eggs & Bacon

      // Unauthenticated user - Complete ranking
      {
        ballot_id: 16,
        user_id: null,
        option_id: pollOptions[10].option_id,
        poll_id: polls[2].poll_id,
        rank: 1,
      }, // Avocado Toast
      {
        ballot_id: 16,
        user_id: null,
        option_id: pollOptions[12].option_id,
        poll_id: polls[2].poll_id,
        rank: 2,
      }, // Smoothie
      {
        ballot_id: 16,
        user_id: null,
        option_id: pollOptions[8].option_id,
        poll_id: polls[2].poll_id,
        rank: 3,
      }, // Pancakes
      {
        ballot_id: 16,
        user_id: null,
        option_id: pollOptions[9].option_id,
        poll_id: polls[2].poll_id,
        rank: 4,
      }, // Eggs & Bacon
      {
        ballot_id: 16,
        user_id: null,
        option_id: pollOptions[11].option_id,
        poll_id: polls[2].poll_id,
        rank: 5,
      }, // Cereal

      // ===== POLL 4: Movie Genre =====
      // User 15 - Complete ranking
      {
        ballot_id: 17,
        user_id: users[14].user_id,
        option_id: pollOptions[13].option_id,
        poll_id: polls[3].poll_id,
        rank: 1,
      }, // Action
      {
        ballot_id: 17,
        user_id: users[14].user_id,
        option_id: pollOptions[14].option_id,
        poll_id: polls[3].poll_id,
        rank: 2,
      }, // Comedy
      {
        ballot_id: 17,
        user_id: users[14].user_id,
        option_id: pollOptions[15].option_id,
        poll_id: polls[3].poll_id,
        rank: 3,
      }, // Drama
      {
        ballot_id: 17,
        user_id: users[14].user_id,
        option_id: pollOptions[16].option_id,
        poll_id: polls[3].poll_id,
        rank: 4,
      }, // Sci-Fi

      // User 16 - Complete ranking
      {
        ballot_id: 18,
        user_id: users[15].user_id,
        option_id: pollOptions[14].option_id,
        poll_id: polls[3].poll_id,
        rank: 1,
      }, // Comedy
      {
        ballot_id: 18,
        user_id: users[15].user_id,
        option_id: pollOptions[16].option_id,
        poll_id: polls[3].poll_id,
        rank: 2,
      }, // Sci-Fi
      {
        ballot_id: 18,
        user_id: users[15].user_id,
        option_id: pollOptions[13].option_id,
        poll_id: polls[3].poll_id,
        rank: 3,
      }, // Action
      {
        ballot_id: 18,
        user_id: users[15].user_id,
        option_id: pollOptions[15].option_id,
        poll_id: polls[3].poll_id,
        rank: 4,
      }, // Drama

      // User 17 - Complete ranking
      {
        ballot_id: 19,
        user_id: users[16].user_id,
        option_id: pollOptions[15].option_id,
        poll_id: polls[3].poll_id,
        rank: 1,
      }, // Drama
      {
        ballot_id: 19,
        user_id: users[16].user_id,
        option_id: pollOptions[13].option_id,
        poll_id: polls[3].poll_id,
        rank: 2,
      }, // Action
      {
        ballot_id: 19,
        user_id: users[16].user_id,
        option_id: pollOptions[14].option_id,
        poll_id: polls[3].poll_id,
        rank: 3,
      }, // Comedy
      {
        ballot_id: 19,
        user_id: users[16].user_id,
        option_id: pollOptions[16].option_id,
        poll_id: polls[3].poll_id,
        rank: 4,
      }, // Sci-Fi

      // User 18 - Complete ranking
      {
        ballot_id: 20,
        user_id: users[17].user_id,
        option_id: pollOptions[16].option_id,
        poll_id: polls[3].poll_id,
        rank: 1,
      }, // Sci-Fi
      {
        ballot_id: 20,
        user_id: users[17].user_id,
        option_id: pollOptions[15].option_id,
        poll_id: polls[3].poll_id,
        rank: 2,
      }, // Drama
      {
        ballot_id: 20,
        user_id: users[17].user_id,
        option_id: pollOptions[14].option_id,
        poll_id: polls[3].poll_id,
        rank: 3,
      }, // Comedy
      {
        ballot_id: 20,
        user_id: users[17].user_id,
        option_id: pollOptions[13].option_id,
        poll_id: polls[3].poll_id,
        rank: 4,
      }, // Action

      // User 19 - Complete ranking
      {
        ballot_id: 21,
        user_id: users[18].user_id,
        option_id: pollOptions[13].option_id,
        poll_id: polls[3].poll_id,
        rank: 1,
      }, // Action
      {
        ballot_id: 21,
        user_id: users[18].user_id,
        option_id: pollOptions[16].option_id,
        poll_id: polls[3].poll_id,
        rank: 2,
      }, // Sci-Fi
      {
        ballot_id: 21,
        user_id: users[18].user_id,
        option_id: pollOptions[14].option_id,
        poll_id: polls[3].poll_id,
        rank: 3,
      }, // Comedy
      {
        ballot_id: 21,
        user_id: users[18].user_id,
        option_id: pollOptions[15].option_id,
        poll_id: polls[3].poll_id,
        rank: 4,
      }, // Drama

      // User 20 - Complete ranking
      {
        ballot_id: 22,
        user_id: users[19].user_id,
        option_id: pollOptions[14].option_id,
        poll_id: polls[3].poll_id,
        rank: 1,
      }, // Comedy
      {
        ballot_id: 22,
        user_id: users[19].user_id,
        option_id: pollOptions[13].option_id,
        poll_id: polls[3].poll_id,
        rank: 2,
      }, // Action
      {
        ballot_id: 22,
        user_id: users[19].user_id,
        option_id: pollOptions[15].option_id,
        poll_id: polls[3].poll_id,
        rank: 3,
      }, // Drama
      {
        ballot_id: 22,
        user_id: users[19].user_id,
        option_id: pollOptions[16].option_id,
        poll_id: polls[3].poll_id,
        rank: 4,
      }, // Sci-Fi

      // ===== POLL 5: Streaming Service =====
      // User 1 - Complete ranking
      {
        ballot_id: 23,
        user_id: users[0].user_id,
        option_id: pollOptions[17].option_id,
        poll_id: polls[4].poll_id,
        rank: 1,
      }, // Netflix
      {
        ballot_id: 23,
        user_id: users[0].user_id,
        option_id: pollOptions[18].option_id,
        poll_id: polls[4].poll_id,
        rank: 2,
      }, // Disney+
      {
        ballot_id: 23,
        user_id: users[0].user_id,
        option_id: pollOptions[19].option_id,
        poll_id: polls[4].poll_id,
        rank: 3,
      }, // HBO Max
      {
        ballot_id: 23,
        user_id: users[0].user_id,
        option_id: pollOptions[20].option_id,
        poll_id: polls[4].poll_id,
        rank: 4,
      }, // Amazon Prime

      // User 3 - Complete ranking
      {
        ballot_id: 24,
        user_id: users[2].user_id,
        option_id: pollOptions[19].option_id,
        poll_id: polls[4].poll_id,
        rank: 1,
      }, // HBO Max
      {
        ballot_id: 24,
        user_id: users[2].user_id,
        option_id: pollOptions[17].option_id,
        poll_id: polls[4].poll_id,
        rank: 2,
      }, // Netflix
      {
        ballot_id: 24,
        user_id: users[2].user_id,
        option_id: pollOptions[20].option_id,
        poll_id: polls[4].poll_id,
        rank: 3,
      }, // Amazon Prime
      {
        ballot_id: 24,
        user_id: users[2].user_id,
        option_id: pollOptions[18].option_id,
        poll_id: polls[4].poll_id,
        rank: 4,
      }, // Disney+

      // User 5 - Complete ranking
      {
        ballot_id: 25,
        user_id: users[4].user_id,
        option_id: pollOptions[18].option_id,
        poll_id: polls[4].poll_id,
        rank: 1,
      }, // Disney+
      {
        ballot_id: 25,
        user_id: users[4].user_id,
        option_id: pollOptions[20].option_id,
        poll_id: polls[4].poll_id,
        rank: 2,
      }, // Amazon Prime
      {
        ballot_id: 25,
        user_id: users[4].user_id,
        option_id: pollOptions[17].option_id,
        poll_id: polls[4].poll_id,
        rank: 3,
      }, // Netflix
      {
        ballot_id: 25,
        user_id: users[4].user_id,
        option_id: pollOptions[19].option_id,
        poll_id: polls[4].poll_id,
        rank: 4,
      }, // HBO Max

      // User 7 - Complete ranking
      {
        ballot_id: 26,
        user_id: users[6].user_id,
        option_id: pollOptions[20].option_id,
        poll_id: polls[4].poll_id,
        rank: 1,
      }, // Amazon Prime
      {
        ballot_id: 26,
        user_id: users[6].user_id,
        option_id: pollOptions[19].option_id,
        poll_id: polls[4].poll_id,
        rank: 2,
      }, // HBO Max
      {
        ballot_id: 26,
        user_id: users[6].user_id,
        option_id: pollOptions[18].option_id,
        poll_id: polls[4].poll_id,
        rank: 3,
      }, // Disney+
      {
        ballot_id: 26,
        user_id: users[6].user_id,
        option_id: pollOptions[17].option_id,
        poll_id: polls[4].poll_id,
        rank: 4,
      }, // Netflix

      // User 9 - Complete ranking
      {
        ballot_id: 27,
        user_id: users[8].user_id,
        option_id: pollOptions[17].option_id,
        poll_id: polls[4].poll_id,
        rank: 1,
      }, // Netflix
      {
        ballot_id: 27,
        user_id: users[8].user_id,
        option_id: pollOptions[19].option_id,
        poll_id: polls[4].poll_id,
        rank: 2,
      }, // HBO Max
      {
        ballot_id: 27,
        user_id: users[8].user_id,
        option_id: pollOptions[18].option_id,
        poll_id: polls[4].poll_id,
        rank: 3,
      }, // Disney+
      {
        ballot_id: 27,
        user_id: users[8].user_id,
        option_id: pollOptions[20].option_id,
        poll_id: polls[4].poll_id,
        rank: 4,
      }, // Amazon Prime

      // User 11 - Complete ranking
      {
        ballot_id: 28,
        user_id: users[10].user_id,
        option_id: pollOptions[19].option_id,
        poll_id: polls[4].poll_id,
        rank: 1,
      }, // HBO Max
      {
        ballot_id: 28,
        user_id: users[10].user_id,
        option_id: pollOptions[20].option_id,
        poll_id: polls[4].poll_id,
        rank: 2,
      }, // Amazon Prime
      {
        ballot_id: 28,
        user_id: users[10].user_id,
        option_id: pollOptions[18].option_id,
        poll_id: polls[4].poll_id,
        rank: 3,
      }, // Disney+
      {
        ballot_id: 28,
        user_id: users[10].user_id,
        option_id: pollOptions[17].option_id,
        poll_id: polls[4].poll_id,
        rank: 4,
      }, // Netflix
    ]);

    console.log(
      `🗳️ Created ${ballots.length} ballots with ${ballotItems.length} ballot items`
    );
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
