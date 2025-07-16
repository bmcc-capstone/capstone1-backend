const express = require("express");
const router = express.Router();
const { Poll } = require("../database");

//GET ROUTES

// Get all Polls with user_id
router.get("/user/:userId", async (req, res) => {
  try {
    const polls = await Poll.findAll({
      where: {
        user_id: req.params.userId,
      },
    });
    res.json(polls);
  } catch (error) {
    console.error("Error fetching polls for user:", error);
    res.status(500).json({ error: "Failed to fetch user polls" });
  }
});

//get specefic poll by id
router.get("/:id", async (req, res) => {
  try {
    const poll = await Poll.findByPk(req.params.id);

    if (!poll) {
      return res.status(404).json({ error: "Poll not found" });
    }

    res.send(poll);
  } catch (error) {
    console.error("Error fetching specific poll:", error);
    res.status(500).json({ error: "Failed to fetch poll" });
  }
});

//POST

//Create Polls
router.post("/", async (req, res) => {
  try {
    const poll = await Poll.create({
      title: req.body.title,
      description: req.body.description,
      expires_date: req.body.expires_date,
    });

    res.status(201).json(poll);
  } catch (error) {
    console.error("Error creating poll:", error);
    res.status(500).json({ error: "Failed to create poll" });
  }
});

module.exports = router;


//Delete Polls 

