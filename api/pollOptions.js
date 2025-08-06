const express = require("express");
const router = express.Router();
const { PollOption, BallotItem } = require("../database");

// Create a new poll option
router.post("/", async (req, res) => {
  try {
    const { option_text, poll_id } = req.body;
    console.log(option_text, poll_id);

    const new_option = await PollOption.create({
      option_text,
      poll_id,
    });

    res.status(201).json(new_option);
  } catch (error) {
    console.error("Error creating poll option:", error);
    res.status(500).json({ error: "Failed to create poll option" });
  }
});

// //Delete Poll options
router.delete("/polls/:pollId/options/:optionId", async (req, res) => {
  const { pollId, optionId } = req.params;
  try {
    const option = await PollOption.findOne({
      where: {
        poll_id: pollId,
        option_id: optionId,
      },
    });

    if (!option) {
      return res.status(404).json({ error: "Option not found for this poll" });
    }

    //Deletes the related ballots first
    await BallotItem.destroy({
      where: { option_id: optionId },
    });

    //Then deletes the option
    await option.destroy();

    res.status(204).send(); // No Content
  } catch (err) {
    console.log(err);
  }
});

// get poll options
router.get("/:poll_id", async (req, res) => {
  try {
    const pollOptions = await PollOption.findAll({
      where: {
        poll_id: req.params.poll_id,
      },
    });

    res.json(pollOptions);
  } catch (error) {
    console.error("Error fetching poll options for poll:", error);
    res.status(500).json({ error: "Failed to fetch poll options" });
  }
});

// PATCH /api/poll-options/:id
router.patch("/:id", async (req, res) => {
  try {
    const optionId = req.params.id;
    const { option_text } = req.body;

    if (!option_text) {
      return res.status(400).json({ error: "option_text is required" });
    }

    const option = await PollOption.findByPk(optionId);
    if (!option) {
      return res.status(404).json({ error: "Poll option not found" });
    }

    option.option_text = option_text;
    await option.save();

    res.json(option);
  } catch (error) {
    console.error("Error updating poll option:", error);
    res.status(500).json({ error: "Failed to update poll option" });
  }
});

module.exports = router;
