const express = require('express');
const router = express.Router();
const PollOption = require('../database/pollOptions');

router.delete("/pollOptions/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const pollOptions = await PollOption.findbyPk({
        where: {
            poll_id : req.params.id,
        },
    });

   
    
    const deletedOption = await pollOptions.destroy ({
        where: { poll_id : id }
    });

    res.json({
      message: "You successfully connected, checking deletion...",
    });

  } catch (error) {
    res.status(500).json({
      error: "Error deleting item",
      message:
        "Could not delete item",
    });
  }
});

module.exports = router;
