"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.getUserableDesa = models.User.belongsTo(models.Desa, {
                foreignKey: "userable_id",
                as: "userableDesa",
            });

            this.getUserableInnovator = models.User.belongsTo(
                models.Innovator,
                {
                    foreignKey: "userable_id",
                    as: "userableInnovator",
                }
            );
        }
    }
    User.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            role: {
                type: DataTypes.STRING,
            },
            userable_id: {
                type: DataTypes.INTEGER,
            },
            createdAt: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            userable: {
                type: DataTypes.VIRTUAL,
                get() {
                    switch (this.role) {
                        case "desa":
                            return this.getUserableDesa;
                        case "innovator":
                            return this.getUserableInnovator;
                        default:
                            return null;
                    }
                },
            },
        },
        {
            sequelize,
            modelName: "User",
            tableName: "users",
        }
    );
    return User;
};
