var express = require("express");
var router = express.Router();
const inovasiController = require("../controllers/inovasi");

router.get("/", inovasiController.index);
router.get("/:idInovasi", inovasiController.getInovasiById);
router.get("/kategori/:kategori", inovasiController.getInovasiByKategori);

module.exports = router;
