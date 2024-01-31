"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Customers", {
      customer_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      customer_first_name: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      customer_last_name: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      customer_email: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      customer_phone: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },
      customer_address: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      customer_postcode: {
        allowNull: false,
        type: Sequelize.STRING(20),
      },
      customer_city: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      customer_country: {
        allowNull: false,
        type: Sequelize.STRING(50),
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
    await queryInterface.dropTable("Customers");
  },
};
