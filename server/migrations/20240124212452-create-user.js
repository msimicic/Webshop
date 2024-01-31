"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_first_name: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      user_last_name: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      user_email: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      user_username: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },
      user_password: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },
      user_is_admin: {
        allowNull: false,
        defaultValue: false,
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
    await queryInterface.dropTable("Users");
  },
};
