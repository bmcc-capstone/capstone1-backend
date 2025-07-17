const express = require("express");
const router = express.Router();
const { Ballot, BallotItem } = require("../database");
const { Poll } = require("../database");

//Get ALL ballotitems by specific poll ID
router.get("/ballotItems/poll/:poll_id", async (req, res) => {
  try {
    const ballotsItem = await BallotItem.findAll({
      where: {
        poll_id: req.params.poll_id,
      },
    });
    res.json(ballotsItem);
  } catch (error) {
    console.error("Error fetching ballots for poll:", error);
    res.status(500).json({ error: "Failed to fetch poll ballots" });
  }
});

// GET a specific ballot by ballot_id
router.get("/ballotItem/:id", async (req, res) => {
  try {
    const ballotItem = await BallotItem.findByPk(req.params.id);

    if (!ballotItem) {
      return res.status(404).json({ error: "Ballot not found" });
    }

    res.json(ballotItem);
  } catch (error) {
    console.error("Error fetching ballot:", error);
    res.status(500).json({ error: "Failed to fetch ballot" });
  }
});
