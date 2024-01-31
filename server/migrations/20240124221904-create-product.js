"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Products", {
      product_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      product_name: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      product_description: {
        type: Sequelize.TEXT,
      },
      product_image: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      product_price: {
        allowNull: false,
        type: Sequelize.DECIMAL(6, 2),
      },
      product_stock: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      category_id: {
        type: Sequelize.INTEGER,
        references: { model: "categories", key: "category_id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
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
    await queryInterface.dropTable("Products");
  },
};
