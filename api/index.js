const express = require("express");
const router = express.Router();

const testDbRouter = require("./test-db");
const pollRouter = require("./Poll");
const pollOptionRouter = require("./pollOptions");
const ballotRouter = require("./Ballot");
const ballotItemRouter = require("./BallotItem");

router.use("/ballotItems", ballotItemRouter);
router.use("/ballots", ballotRouter);
router.use("/poll-options", pollOptionRouter);
router.use("/test-db", testDbRouter);
router.use("/polls", pollRouter);

module.exports = router;
