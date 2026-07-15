const router = require("express").Router();
const { AuthRoutesHandler } = require("../Controller/AuthController");

router.post("/Users",AuthRoutesHandler);
module.exports = router;