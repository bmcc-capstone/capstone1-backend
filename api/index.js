const express = require("express");
const router = express.Router();

const testDbRouter = require("./test-db");
const pollRouter = require("./Poll"); //
const pollOptionRouter = require("./pollOptions");
const ballotRouter = require("./Ballot");
const userRouter = require('./user')

router.use("/ballots", ballotRouter);
router.use("/poll-options", pollOptionRouter); //
router.use("/test-db", testDbRouter);
router.use("/polls", pollRouter);
router.use("/userId", userRouter);

module.exports = router;
