const express = require("express");
const router = express.Router();
const { Poll } = require("../database");

//endpoints

// Get all Polls with user_id

router.get("/", (req, res) => {
  router.get("/", async (req, res) => {
    const polls = await Poll.findAll();
    res.json(polls);
  });
});

//get specefic poll 


