"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("desas", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nama: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            alamat: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            kabupaten: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            kecamatan: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            provinsi: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            logo: {
                type: Sequelize.STRING,
            },
            userId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("desas");
    },
};
