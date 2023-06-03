var express = require("express");
var router = express.Router();
const models = require("../models");
const User = models.User;
const Desa = models.Desa;

/* GET users listing. */
router.get("/", async (req, res) => {
    const user = await models.User.findOne({
        attributes: ["id", "name", "role"],
        include: "userableInnovator",
    });
    res.send(user);
});

module.exports = router;
