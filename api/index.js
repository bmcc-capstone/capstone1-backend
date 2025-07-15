const express = require("express");
const router = express.Router();
const testDbRouter = require("./test-db");
const deletePollOptionRouter = require ('./deletePollOption')

router.use("/test-db", testDbRouter);
router.use("/deletePollOption", deletePollOptionRouter);

module.exports = router;
