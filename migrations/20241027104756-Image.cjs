"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Images", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      url: {
        type: Sequelize.STRING,
      },
      secure_url: {
        type: Sequelize.STRING,
      },
      tags: {
        type: Sequelize.STRING,
      },
      uploadedAt: {
        type: Sequelize.DATE,
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      isDeleted: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Images")
  },
};
