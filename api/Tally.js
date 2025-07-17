const express = require("express");
const router = express.Router();
const { PollOption, BallotItem, Ballot, poll } = require("../database");

router.get("/votes/:poll_id");
