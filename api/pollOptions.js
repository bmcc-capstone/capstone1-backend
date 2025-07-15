const express = require("express");
const router = express.Router();
const { PollOption } = require("../database"); 

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

//Delete Poll options 

module.exports = router;
