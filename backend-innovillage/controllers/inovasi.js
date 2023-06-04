const models = require("../models");
const Inovasi = models.Inovasi;

module.exports = {
    index: async (req, res) => {
        try {
            const inovasis = Inovasi.findAll({
                include: "kategori",
                limit: 10,
            });

            res.status(200).json({
                message: "berhasil memuat inovasi",
                inovasis: inovasis,
            });
        } catch (error) {
            res.status(500).json({
                message: error.message,
            });
        }
    },
    getInovasiById: async (req, res) => {
        try {
            const idInovasi = req.params.idInovasi;

            const inovasi = await Inovasi.findByPk(idInovasi);

            if (!inovasi) {
                return res.status(404).json({
                    message: "inovasi tidak ditemukan",
                });
            }

            res.status(200).json({
                message: "berhasil mendapatkan detail invoasi",
                inovasi: inovasi,
            });
        } catch (error) {
            res.status(500).json({
                message: error.message,
            });
        }
    },
    getInovasiByKategori: async (req, res) => {
        try {
            const kategori = req.params.kategori;

            const inovasis = await Inovasi.findAll({
                include: [
                    {
                        model: models.Kategori,
                        where: {
                            nama: kategori,
                        },
                        as: "kategori",
                    },
                ],
            });

            res.status(200).json({
                message:
                    "berhasil memuat inovasi berdasarkan kategori " + kategori,
                inovasis: inovasis,
            });
        } catch (error) {
            res.status(500).json({
                message: error.message,
            });
        }
    },
};
