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
            models.Inovasi.belongsTo(models.Innovator, {
                foreignKey: "innovatorId",
                as: "innovator",
            });
        }
    }
    Inovasi.init(
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            nama: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            deskripsi: {
                type: DataTypes.TEXT,
            },
            kategori_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: "kategoris",
                    key: "id",
                },
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE,
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
