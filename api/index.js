const express = require("express");
const router = express.Router();

const testDbRouter = require("./test-db");
const pollRouter = require("./Poll"); // 

router.use("/test-db", testDbRouter);
router.use("/polls", pollRouter);     // 

module.exports = router;
