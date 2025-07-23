const express = require("express");
const router = express.Router();
const { Ballot } = require("../database");

// Get vote counts for each ballot item in a poll
router.get("/votes/:poll_id", async (req, res) => {
  try {
    const pollId = req.params.poll_id;
    console.log(pollId);
    const voteCounts = await Ballot.findAll({
      where: { poll_id: pollId },
      attributes: [
        "ballot_id",
        [
          Ballot.sequelize.fn("COUNT", Ballot.sequelize.col("ballot_id")),
          "voteCount",
        ],
      ],
      group: ["ballot_id"],
      raw: true, //
    });

    // Convert voteCount to number
    const formatted = voteCounts.map((item) => ({
      ...item,
      voteCount: Number(item.voteCount),
    }));

    res.json(formatted);
  } catch (error) {
    console.error("Error fetching vote counts:", error);
    res.status(500).json({ error: "Failed to fetch vote counts" });
  }
});

module.exports = router;
