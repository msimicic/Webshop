"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Orders", [
      {
        order_number: "2024_01_01_1",
        order_date: "2023-12-25",
        order_total_price: 90.52,
        order_product_quantity: 1,
        customer_id: 2,
      },
      {
        order_number: "2024_01_01_2",
        order_date: "2023-12-31",
        order_total_price: 42.1,
        order_product_quantity: 1,
        customer_id: 1,
      },
      {
        order_number: "2024_01_01_3",
        order_date: "2024-01-01",
        order_total_price: 2836.84,
        order_product_quantity: 1,
        customer_id: 3,
      },
      {
        order_number: "2024_01_01_4",
        order_date: "2024-01-02",
        order_total_price: 170.53,
        order_product_quantity: 1,
        customer_id: 4,
      },
      {
        order_number: "2024_01_01_5",
        order_date: "2024-01-03",
        order_total_price: 21.05,
        order_product_quantity: 1,
        customer_id: 5,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Orders", null, {});
  },
};
