const express = require("express");
const router = express.Router();

const testDbRouter = require("./test-db");
const pollRouter = require("./Poll");
const pollOptionRouter = require("./pollOptions");
const ballotRouter = require("./Ballot");
<<<<<<< HEAD
const ballotItemRouter = require("./BallotItem");
=======
const userRouter = require('./user')
>>>>>>> 56fcc792e1df5298f4f62568af757d0af6c15bc6

router.use("/ballotItems", ballotItemRouter);
router.use("/ballots", ballotRouter);
router.use("/poll-options", pollOptionRouter);
router.use("/test-db", testDbRouter);
router.use("/polls", pollRouter);
<<<<<<< HEAD
=======
router.use("/userId", userRouter);
>>>>>>> 56fcc792e1df5298f4f62568af757d0af6c15bc6

module.exports = router;
