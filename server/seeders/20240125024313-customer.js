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
    await queryInterface.bulkInsert("Customers", [
      {
        customer_first_name: "Zvonko",
        customer_last_name: "Šimičić",
        customer_email: "zvonkosimicic@gmail.com",
        customer_phone: "+385917933256",
        customer_address: "Desprimska 17D",
        customer_postcode: "10257",
        customer_city: "Zagreb",
        customer_country: "Hrvatska",
      },
      {
        customer_first_name: "Helena",
        customer_last_name: "Šimičić",
        customer_email: "helenasimicic@gmail.com",
        customer_phone: "+385911166964",
        customer_address: "Desprimska 17D",
        customer_postcode: "10257",
        customer_city: "Zagreb",
        customer_country: "Hrvatska",
      },
      {
        customer_first_name: "Blaženka",
        customer_last_name: "Šimičić",
        customer_email: "blazenkasimicic@gmail.com",
        customer_phone: "+385914040074",
        customer_address: "Desprimska 17D",
        customer_postcode: "10257",
        customer_city: "Zagreb",
        customer_country: "Hrvatska",
      },
      {
        customer_first_name: "Ivan",
        customer_last_name: "Čabraja",
        customer_email: "ivancabraja@gmail.com",
        customer_phone: "+385955051104",
        customer_address: "Desprimska IV. odvojak 25",
        customer_postcode: "10257",
        customer_city: "Zagreb",
        customer_country: "Hrvatska",
      },
      {
        customer_first_name: "Matej",
        customer_last_name: "Šimičić",
        customer_email: "matejsimicic@gmail.com",
        customer_phone: "+385911458432",
        customer_address: "Desprimska 17D",
        customer_postcode: "10257",
        customer_city: "Zagreb",
        customer_country: "Hrvatska",
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
    await queryInterface.bulkDelete("Customers", null, {});
  },
};
