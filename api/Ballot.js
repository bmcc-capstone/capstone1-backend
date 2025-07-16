const express = require("express");
const router = express.Router();
const { Ballot } = require("../database");
const { Poll } = require("../database")

// Get Ballot by ID
// GET a specific ballot by ballot_id
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

//Get ALL ballots by specific poll ID
router.get("/poll/:poll_id", async (req, res) => {
  try {
    const ballots = await Ballot.findAll ({
      where: {
        poll_id: req.params.poll_id,
      }
    });
    res.json(ballots);
  } catch (error) {
    console.error("Error fetching ballots for poll:", error);
    res.status(500).json({ error: "Failed to fetch poll ballots"});
  }
});

module.exports = router;
