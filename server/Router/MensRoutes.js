const router = require("express").Router();
const { mensWearRoutesHandler } = require("../Controller/MensWearController");
const authMiddleware = require("../Middleware/AuthMiddleware")

router.post("/mensWear",authMiddleware,mensWearRoutesHandler);

module.exports = router;