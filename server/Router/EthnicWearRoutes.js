const router = require("express").Router();
const { ethnicWearRoutesHandler } = require("../Controller/EthnicWearController");
const authMiddleware = require("../Middleware/AuthMiddleware")

router.post("/EthnicWear",authMiddleware,ethnicWearRoutesHandler);
module.exports = router;