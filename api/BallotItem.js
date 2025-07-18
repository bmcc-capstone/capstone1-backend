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

// PATCH route to update ranks of ballot items in bulk
router.patch("/update-rankings", async (req, res) => {
  const userId = req.user.id;
  const updates = req.body.updates; // array [{ ballotItem_id, rank }]
  const pollId = req.body.poll_id; // poll id sent from client

  if (!pollId) {
    return res.status(400).json({ error: "poll_id is required" });
  }

  try {
    const ballotItemIds = updates.map((u) => u.ballotItem_id);

    // Fetch ballot items matching user, poll, and IDs
    const ballotItems = await BallotItem.findAll({
      where: {
        ballotItem_id: ballotItemIds,
        user_id: userId,
        poll_id: pollId,
      },
    });

    if (ballotItems.length !== updates.length) {
      return res
        .status(400)
        .json({ error: "One or more ballot items not found for user/poll" });
    }

    // Update each ballot item's rank sequentially
    const updateFunctions = updates.map(
      ({ ballotItem_id, rank }) =>
        async () => {
          const ballotItem = ballotItems.find(
            (b) => b.ballotItem_id === ballotItem_id
          );
          if (ballotItem) {
            await ballotItem.update({ rank });
          }
        }
    );

    for (const updateFn of updateFunctions) {
      await updateFn();
    }

    res.status(200).json({ message: "Ranks updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update ranks" });
  }
});

module.exports = router;
