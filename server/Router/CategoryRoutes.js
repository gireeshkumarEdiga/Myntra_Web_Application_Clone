const router = require("express").Router();
const {categoryRoutesHandler} = require("../Controller/CategoryController");

router.post("/Categories",categoryRoutesHandler);
module.exports = router;