"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Order_Product", {
      order_id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: { model: "orders", key: "order_id" },
      },
      product_id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: { model: "products", key: "product_id" },
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
    await queryInterface.dropTable("Order_Product");
  },
};
