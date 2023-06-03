const models = require("../models");
const User = models.User;
const Desa = models.Desa;
const Innovator = models.Innovator;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Validator = require("fastest-validator");
const v = new Validator();

module.exports = {
    register: async (req, res) => {
        try {
            //rules request
            const schema = {
                name: "string",
                email: "string|unique",
                password: "string",
                role: "string|optional",
            };

            if (req.body.role == "desa") {
                schema["nama_desa"] = "string";
                schema["alamat_desa"] = "string";
                schema["kabupaten_desa"] = "string";
                schema["kecamatan_desa"] = "string";
                schema["provinsi_desa"] = "string";
            } else if (req.body.role == "innovator") {
                schema["nama_innovator"] = "string";
                schema["deskripsi_innovator"] = "string";
            }

            //validate request berdasarkan rules
            const validate = v.validate(req.body, schema);
            if (validate.length) {
                return res.status(400).json(validate);
            }

            //cek user udah ada atau belum
            const isExist = await User.findOne({
                attributes: ["id", "email", "name"],
                where: { email: req.body.email },
            });

            //kalau udah ada, return negatif
            if (isExist) {
                return res.status(400).json({
                    message: "User sudah pernah dibuat",
                });
            }

            const user = await User.create(req.body);

            //bikin userable nya
            if (req.body.role == "desa") {
                //kalo role desa, bikin desa baru
                const desa = await Desa.create({
                    nama: req.body.nama_desa,
                    alamat: req.body.alamat_desa,
                    kabupaten: req.body.kabupaten_desa,
                    kecamatan: req.body.kecamatan_desa,
                    provinsi: req.body.kecamatan_desa,
                    userId: user.id,
                });
                req.body.userable_id = desa.id;
            } else if (req.body.role == "innovator") {
                //kalo role innovator, bikin innovator baru
                const innovator = await Innovator.create({
                    nama: req.body.nama_innovator,
                    deskripsi: req.body.deskripsi_innovator,
                    userId: user.id,
                });
                req.body.userable_id = innovator.id;
            }

            await user.update({ userable_id: req.body.userable_id });

            const token = jwt.sign(
                {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                },
                process.env.JWT_KEY
            );

            res.status(200).json({
                message: "berhasil membuat akun",
                user: user,
                token: token,
            });
        } catch (error) {
            res.status(500).json({
                error: true,
                message: error.message,
                field: error.field,
            });
        }
    },
    login: async (req, res) => {},
};
