var express = require("express");
var router = express.Router();
const desaController = require("../controllers/desa");

router.get("/", desaController.index);
router.get("/:idDesa", desaController.getDesaById);

module.exports = router;
