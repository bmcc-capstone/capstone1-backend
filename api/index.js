const express = require("express");
const router = express.Router();
const testDbRouter = require("./test-db");
const deletePollOptionRoutes = require ('./deletePollOption')

router.use("/test-db", testDbRouter);
router.use("/deletePollOption", deletePollOptionRoutes);

module.exports = router;
