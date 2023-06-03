"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("innovators", {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            nama: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            deskripsi: {
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
        await queryInterface.dropTable("innovators");
    },
};
