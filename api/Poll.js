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

//get specific poll by id
router.get("/poll/:id", async (req, res) => {
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


router.post("/:userId", async (req, res) => {
  try {
    const poll = await Poll.create({
      title: req.body.title,
      description: req.body.description,
      expires_date: req.body.expires_date,
      status: req.body.status,
      user_id: req.params.userId,
      public : req.body.public || false,

    });
    console.log(poll);

    res.status(201).json({
      poll,
      shareableLink: `${req.protocol}://${req.get('host')}/poll/${poll.slug}`,
    });
  } catch (error) {
    console.error("Error creating poll:", error);
    res.status(500).json({ error: "Failed to create poll" });
  }
});

//Delete Polls
router.delete("/:id", async (req, res) => {
  try {
    const poll = await Poll.findByPk(req.params.id);

    if (!poll) {
      return res.status(404).json({ error: "Poll not found" });
    }

    await poll.destroy();

    res.status(204).send();
  } catch (error) {
    console.error("Error deleting poll:", error);
    res.status(500).json({ error: "Failed to delete poll" });
  }
});

// fetch polls using unique urls for each
// router.get('/:slug', async (req, res) => {
//   try {
//     const poll = await Poll.findOne({ where: { slug: req.params.slug } })
//     if (!poll) { return res.status(404).json({ error: "Poll not found" })};

//     res.json(poll);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Failed to fetch poll"});
//   }
// });

module.exports = router;
