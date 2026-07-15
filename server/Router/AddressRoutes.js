const router = require("express").Router();
const {AddressRoutesHandler} = require("../Controller/AddressController");
const authMiddleware = require("../Middleware/AuthMiddleware");

router.post("/address",authMiddleware,AddressRoutesHandler);
module.exports = router;
