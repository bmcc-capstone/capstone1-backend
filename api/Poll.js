const express = require('express');
const router = express.Router();
const database = require("../database");

router.delete("/pollOptions/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedOption = await database.Item.destroy ({
        where: { id : id }
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
