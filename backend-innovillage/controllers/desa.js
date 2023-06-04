const models = require("../models");
const Desa = models.Desa;

module.exports = {
    index: async (req, res) => {
        try {
            const desa = await Desa.findAll({
                limit: 10,
            });

            res.status(200).json({
                message: "berhasil mendapatkan desa",
                desas: desa,
            });
        } catch (error) {
            res.status(500).json({
                message: error.message,
            });
        }
    },
    getDesaById: async (req, res) => {
        try {
            const idDesa = req.params.idDesa;

            const desa = await Desa.findByPk(idDesa);
            if (!desa) {
                return res.status(404).json({
                    message: "desa tidak ditemukan",
                });
            }

            res.status(200).json({
                message: "berhasil mendapatkan detail desa",
                desa: desa,
            });
        } catch (error) {
            res.status(500).json({
                message: error.message,
            });
        }
    },
};
