const router = require("express").Router();
const { HeaderRoutesHandler } = require("../Controller/HeaderController");

router.post("/MyntraHeadingCategoriesListApi",HeaderRoutesHandler);
module.exports = router;

