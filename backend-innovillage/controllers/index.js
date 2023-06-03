const models = require("../models");
const Inovasi = models.Inovasi;

module.exports = {
    index: async (req, res) => {
        const inovasis = await Inovasi.findOne({
            include: "kategori",
            limit: 5,
        });

        res.status(200).json({
            message: "selamat datang",
            data: inovasis,
        });
    },
};
