const express = require("express");
const router = express.Router();
const { User } = require("../database");

// get specific id from username
router.get("/:username", async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.params.username,
      },
    });
    console.log(`Looking up user: ${req.params.username}`);
    console.log(user.user_id);
    res.json({
      user_id: user.user_id,
    });
  } catch (error) {
    console.error("Error fetching user id:", error);
    res.status(500).json({
      error: "Failed to fetch user id",
      message:
        "Check your database connection, and consider running your seed file: npm run seed",
    });
  }
});

module.exports = router;
