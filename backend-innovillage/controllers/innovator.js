const models = require("../models");
const Innovator = models.Innovator;

module.exports = {
    index: async (req, res) => {
        try {
            const innovators = await Innovator.findAll({
                limit: 10,
            });

            if (!innovators) throw new Error("gagal memuat innovators");

            res.status(200).json({
                messsage: "berhasil mendapatkan innovators",
                innovators: innovators,
            });
        } catch (error) {
            res.status(500).json({
                messsage: error.messsage,
            });
        }
    },
    getInnovatorById: async (req, res) => {
        try {
            const idInnovator = req.params.idInnovator;

            const innovator = await Innovator.findByPk(idInnovator);

            if (!innovator) {
                return res.status(404).json({
                    messsage: "innovator tidak ditemukan",
                });
            }

            res.status(200).json({
                messsage: "berhasil mendapatkan detail innovator",
                innovator: innovator,
            });
        } catch (error) {
            res.status(500).json({
                messsage: error.messsage,
            });
        }
    },
};
