const router = require("express").Router();
const { CartRoutesHandler } = require("../Controller/CartController");
const authMiddleware = require("../Middleware/AuthMiddleware");

router.post("/Cart",authMiddleware,CartRoutesHandler);
module.exports = router;