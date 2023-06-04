var express = require("express");
var router = express.Router();
const innovatorController = require("../controllers/innovator");

router.get("/", innovatorController.index);
router.get("/:idInnovator", innovatorController.getInnovatorById);

module.exports = router;
