"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Innovator extends Model {
        static associate(models) {
            models.Innovator.hasMany(models.User, { as: "users" });
        }
    }
    Innovator.init(
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
            deskripsi: {
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
            modelName: "Innovator",
            tableName: "innovators",
        }
    );
    return Innovator;
};
