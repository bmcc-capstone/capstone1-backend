const express = require("express");
const router = express.Router();
const { PollOption, BallotItem } = require("../database");

// Create a new poll option
router.post("/", async (req, res) => {
  try {
    const { option_text, poll_id } = req.body;

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

<<<<<<< HEAD
//Get All Poll Options
router.get("/poll/:poll_id", async (req, res) => {
  const { poll_id } = req.params; //turn the id from request into a variable

  try {
    const options = await PollOption.findAll({
      where: { poll_id }, //Find all poll Options that have that specific poll_id
    });

    res.json(options);
  } catch (error) {
    console.error("Error fetching poll options:", error);
=======
// get poll options 
router.get("/options/:poll_id/", async (req, res) => {
  try {
    const pollOptions = await PollOption.findAll({
      where: {
        poll_id: req.params.poll_id,
      },
    });

    res.json(pollOptions);

  } catch (error) {
    console.error("Error fetching poll options for poll:", error);

>>>>>>> 56fcc792e1df5298f4f62568af757d0af6c15bc6
    res.status(500).json({ error: "Failed to fetch poll options" });
  }
});

module.exports = router;
