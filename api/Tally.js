const express = require("express");
const router = express.Router();
const { BallotItem } = require("../database");

// Get vote counts for each ballot item in a poll
router.get("/votes/:poll_id", async (req, res) => {
  try {
    const pollId = req.params.poll_id;
    const voteCounts = await BallotItem.findAll({
      where: { poll_id: pollId },
      attributes: [
        "ballotItem_id",
        [
          BallotItem.sequelize.fn(
            "COUNT",
            BallotItem.sequelize.col("ballotItem_id")
          ),
          "voteCount",
        ],
      ],
      group: ["ballotItem_id"],
      raw: true, // 
    });

    // Convert voteCount to number
    const formatted = voteCounts.map(item => ({
      ...item,
      voteCount: Number(item.voteCount)
    }));

    res.json(formatted);
  } catch (error) {
    console.error("Error fetching vote counts:", error);
    res.status(500).json({ error: "Failed to fetch vote counts" });
  }
});

module.exports = router;
