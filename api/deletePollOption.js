const express = require('express');
const router = express.Router();
const { PollOption } = require('../database');
const { Poll }  = require('../database');

router.delete("/polls/:pollId/options/:id", async (req, res) => {
    try {
        const polls = Poll.findAll();
        const pollOptions = PollOption.findAll();

        const poll = await Poll.findByPk(pollId);

        if (!poll) {
            return res.status(404).json({error: "PollOption not found"});
        }

        const pollOption = await PollOption.findOne({
            where: {
                option_id: optionId,
                poll_id: pollId,
            },
        });

        if (!pollOption) {
            return res.status(404).json({ error: `Option ${optionId} not found in poll ${pollId}`});
        }

        await pollOption.destroy();

        res.json({
            message: `PollOption with id ${id} was successfully deleted`,
        });

  } catch (error) {
        console.error("Error deleting poll option:", error);

        res.status(500).json({
        error: "Internal server error",
        message: "Could not delete poll option",
    });
  }
});

module.exports = router;
