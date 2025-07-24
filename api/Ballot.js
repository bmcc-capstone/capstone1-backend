const express = require("express");
const router = express.Router();
const { Ballot, BallotItem, PollOption } = require("../database");

// Get a specific ballot by ID
router.get("/:id", async (req, res) => {
  try {
    const ballot = await Ballot.findByPk(req.params.id);
    if (!ballot) {
      return res.status(404).json({ error: "Ballot not found" });
    }
    res.json(ballot);
  } catch (error) {
    console.error("Error fetching ballot:", error);
    res.status(500).json({ error: "Failed to fetch ballot" });
  }
});

// Get all ballots by poll ID
router.get("/ballots/poll/:poll_id", async (req, res) => {
  try {
    const ballots = await Ballot.findAll({
      where: { poll_id: req.params.poll_id },
    });
    res.json(ballots);
  } catch (error) {
    console.error("Error fetching ballots for poll:", error);
    res.status(500).json({ error: "Failed to fetch poll ballots" });
  }
});

// Submit a vote (MAIN route you need)
router.post("/vote", async (req, res) => {
  try {
    const { poll_id, option_id, user_id } = req.body;

    // Confirm the option belongs to the poll (optional validation)
    const validOption = await PollOption.findOne({
      where: { option_id, poll_id },
    });

    if (!validOption) {
      return res.status(400).json({ error: "Invalid option for this poll." });
    }

    // Step 1: Create a Ballot
    const ballot = await Ballot.create({
      poll_id,
      user_id: user_id || null, // Optional for anonymous voting
    });

    // Step 2: Create a BallotItem with rank 1
    await BallotItem.create({
      ballot_id: ballot.ballot_id,
      option_id,
      rank: 1,
      user_id: user_id || null,
    });

    res.status(201).json({ message: "Vote submitted successfully!" });
  } catch (error) {
    console.error("Error submitting vote:", error);
    res.status(500).json({ error: "Failed to submit vote" });
  }
});

module.exports = router;
