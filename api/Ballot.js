const express = require("express");
const router = express.Router();
const { Ballot, BallotItem, PollOption } = require("../database");

// Submit a vote (supports multiple ranked options)
router.post("/vote", async (req, res) => {
  try {
    const { poll_id, votes, user_id } = req.body;
    // votes should be an array: [{ option_id: X, rank: Y }, ...]

    if (!Array.isArray(votes) || votes.length === 0) {
      return res.status(400).json({ error: "Votes array is required." });
    }

    const pollIdInt = parseInt(poll_id, 10);
    if (isNaN(pollIdInt)) {
      return res.status(400).json({ error: "Invalid poll_id" });
    }

    // Validate all votes and option_ids
    for (const vote of votes) {
      const optionIdInt = parseInt(vote.option_id, 10);
      if (isNaN(optionIdInt) || typeof vote.rank !== "number") {
        return res.status(400).json({ error: "Invalid option_id or rank in votes." });
      }

      // Confirm the option belongs to the poll
      const validOption = await PollOption.findOne({
        where: { option_id: optionIdInt, poll_id: pollIdInt },
      });
      if (!validOption) {
        return res.status(400).json({
          error: `Invalid option (${optionIdInt}) for this poll.`,
        });
      }
    }

    // Create new Ballot
    const ballot = await Ballot.create({
      poll_id: pollIdInt,
      user_id: user_id || null,
    });

    // Create BallotItems for each vote
    for (const vote of votes) {
      await BallotItem.create({
        ballot_id: ballot.ballot_id,
        poll_id: pollIdInt,
        option_id: parseInt(vote.option_id, 10),
        rank: vote.rank,
        user_id: user_id || null,
      });
    }

    res.status(201).json({ message: "Vote(s) submitted successfully!" });
  } catch (error) {
    console.error("Error submitting vote:", error);
    res.status(500).json({ error: "Failed to submit vote" });
  }
});

// Get all ballots by poll ID
router.get("/ballots/poll/:poll_id", async (req, res) => {
  try {
    const pollIdInt = parseInt(req.params.poll_id, 10);
    if (isNaN(pollIdInt)) {
      return res.status(400).json({ error: "Invalid poll_id" });
    }

    const ballots = await Ballot.findAll({
      where: { poll_id: pollIdInt },
    });
    res.json(ballots);
  } catch (error) {
    console.error("Error fetching ballots for poll:", error);
    res.status(500).json({ error: "Failed to fetch poll ballots" });
  }
});

// Get a specific ballot by ID (only numeric IDs allowed)
router.get("/:id", async (req, res) => {
  try {
    const idInt = parseInt(req.params.id, 10);
    if (isNaN(idInt)) {
      return res.status(400).json({ error: "Invalid ballot ID" });
    }

    const ballot = await Ballot.findByPk(idInt);
    if (!ballot) {
      return res.status(404).json({ error: "Ballot not found" });
    }
    res.json(ballot);
  } catch (error) {
    console.error("Error fetching ballot:", error);
    res.status(500).json({ error: "Failed to fetch ballot" });
  }
});

module.exports = router;