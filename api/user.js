const express = require("express");
const router = express.Router();
const { Poll } = require("../database");

function isAuthenticated(req, res,next) {
    if (req.session && req.session.user) {
        return next();
    }
    return res.status(401).json({ message: 'Not authenticated' })
}

// current logged in user_id
router.get("/me", async (req, res) => {
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

module.exports = router;


