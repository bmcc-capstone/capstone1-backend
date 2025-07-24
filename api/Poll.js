const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
const { Poll, PollOption } = require("../database");

//GET ROUTES

// Get all Polls with user_id
router.get("/user/:userId", async (req, res) => {
  try {
    const polls = await Poll.findAll({
      where: {
        user_id: req.params.userId,
      },
    });
    res.json(polls);
  } catch (error) {
    console.error("Error fetching polls for user:", error);
    res.status(500).json({ error: "Failed to fetch user polls" });
  }
});

//get specific poll by id
router.get("/poll/:id", async (req, res) => {
  try {
    const poll = await Poll.findByPk(req.params.id, {
      include: [PollOption],
    });

    if (!poll) {
      return res.status(404).json({ error: "Poll not found" });
    }

    res.send(poll);
  } catch (error) {
    console.error("Error fetching specific poll:", error);
    res.status(500).json({ error: "Failed to fetch poll" });
  }
});

//Post
router.post("/:userId", async (req, res) => {
  try {
    const poll = await Poll.create({
      title: req.body.title,
      description: req.body.description,
      expires_date: req.body.expires_date,
      status: req.body.status,
      user_id: req.params.userId,

      public: req.body.public,
    });
    console.log(poll);

    res.status(201).json(poll);
  } catch (error) {
    console.error("Error creating poll:", error);
    res.status(500).json({ error: "Failed to create poll" });
  }
});

// Simulated viewer count for LivePolls
router.get("/:poll_id/users", (req, res) => {
  try {
    const simulatedUserCount = Math.floor(Math.random() * 10) + 1;
    res.json({ userCount: simulatedUserCount });
  } catch (error) {
    console.error("Error fetching user count:", error);
    res.status(500).json({ error: "Failed to fetch user count" });
  }
});

//Get all LivePolls !
router.get("/livepolls", async (req, res) => {
  try {
    const polls = await Poll.findAll({
      where: {
        expires_date: {
          [Op.gt]: new Date(), // Polls with future expiration date (still live)
        },
        public: true, // Optional: only public polls; remove if you want all
      },
    });

    res.json(polls);
  } catch (error) {
    console.error("Error fetching live polls:", error);
    res.status(500).json({ error: "Failed to fetch live polls" });
  }
});

// Get all expired public polls
router.get("/expiredpolls", async (req, res) => {
  try {
    const polls = await Poll.findAll({
      where: {
        expires_date: {
          [Op.lte]: new Date(), // Polls with expiration date in the past
        },
        public: true,
      },
    });

    res.json(polls);
  } catch (error) {
    console.error("Error fetching expired polls:", error);
    res.status(500).json({ error: "Failed to fetch expired polls" });
  }
});

//Delete Polls
router.delete("/:id", async (req, res) => {
  try {
    const poll = await Poll.findByPk(req.params.id);

    if (!poll) {
      return res.status(404).json({ error: "Poll not found" });
    }

    await poll.destroy();

    res.status(204).send();
  } catch (error) {
    console.error("Error deleting poll:", error);
    res.status(500).json({ error: "Failed to delete poll" });
  }
});

// PATCH - Update specific poll by id
router.patch("/:id", async (req, res) => {
  try {
    const poll = await Poll.findByPk(req.params.id);

    if (!poll) {
      return res.status(404).json({ error: "Poll not found" });
    }

    // Update only fields provided in the request body
    const updatedFields = {
      title: req.body.title ?? poll.title,
      description: req.body.description ?? poll.description,
      expires_date: req.body.expires_date ?? poll.expires_date,
      status: req.body.status ?? poll.status,
      public: req.body.public ?? poll.public,
    };

    await poll.update(updatedFields);

    res.json(poll);
  } catch (error) {
    console.error("Error updating poll:", error);
    res.status(500).json({ error: "Failed to update poll" });
  }
});


// //results
// router.get("/results", async (req, res) => {
//   const { grouped } = req.body.grouped;
//   const winner = false;
//   const rounds = [];

//   while (winner === false) {
//     const rankOneGrouped = grouped.map((group) => group[0]);

//     rankOneGrouped.forEach((ballotItem) => {});
//   }
// });

router.get("/", async (req, res) => {
  res.json("Hello, World!");

router.get("/isExpired/:poll_id", async (req, res) => {
  try {
    const poll = await Poll.findByPk(req.params.poll_id);
    if (!poll) {
      return res.status(404).json({ error: "Poll not found" });
    }

    const isExpired = new Date() > new Date(poll.expires_at);
    res.json({ isExpired });
  } catch (error) {
    console.error("Error checking expiration:", error);
    res.status(500).json({ error: "Failed to check poll expiration" });
  }
});

// POST /api/results
router.post("/results", async (req, res) => {
  const { grouped } = req.body; // grouped ballots from frontend
  let rounds = [];
  let winner = null;

  let remainingOptions = new Set(
    grouped.flat().map((item) => item.option_id)
  );

  while (!winner && remainingOptions.size > 1) {
    // Count first-rank votes for remaining options
    const firstChoices = grouped
      .map((ballot) => ballot.find((item) => remainingOptions.has(item.option_id)))
      .filter(Boolean); // remove nulls

    const tally = {};
    for (const vote of firstChoices) {
      tally[vote.option_id] = (tally[vote.option_id] || 0) + 1;
    }

    // Save round
    rounds.push({ ...tally });

    const totalVotes = firstChoices.length;
    const sortedOptions = Object.entries(tally).sort((a, b) => a[1] - b[1]);
    const [topOption, topVotes] = sortedOptions[sortedOptions.length - 1];

    // Check for winner
    if (topVotes > totalVotes / 2) {
      winner = topOption;
      break;
    }

    // Eliminate option with fewest votes
    const [lowestOption] = sortedOptions[0];
    remainingOptions.delete(parseInt(lowestOption));

    // Remove eliminated options from grouped
    grouped.forEach((ballot) => {
      const index = ballot.findIndex(
        (item) => item.option_id === parseInt(lowestOption)
      );
      if (index !== -1) ballot.splice(index, 1);
    });
  }

  res.json({ winner, rounds });

});

module.exports = router;
