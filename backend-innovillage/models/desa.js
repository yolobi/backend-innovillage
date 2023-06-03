"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Desa extends Model {
        static associate(models) {
            models.Desa.hasMany(models.User, { as: "users" });
        }
    }
    Desa.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nama: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            alamat: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            kabupaten: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            kecamatan: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            provinsi: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            logo: {
                type: DataTypes.STRING,
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            createdAt: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "Desa",
            tableName: "desas",
        }
    );
    return Desa;
};
