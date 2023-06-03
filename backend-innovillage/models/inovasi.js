"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Inovasi extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            models.Inovasi.belongsTo(models.Kategori, {
                foreignKey: "kategori_id",
                as: "kategori",
            });
        }
    }
    Inovasi.init(
        {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            nama: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            deskripsi: {
                type: Sequelize.TEXT,
            },
            kategori_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "kategoris",
                    key: "id",
                },
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        },
        {
            sequelize,
            modelName: "Inovasi",
            tableName: "inovasis",
        }
    );
    return Inovasi;
};
