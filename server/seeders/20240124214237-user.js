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
    await queryInterface.bulkInsert("Users", [
      {
        user_first_name: "Matej",
        user_last_name: "Šimičić",
        user_email: "matejsimicic@gmail.com",
        user_username: "matejsimicic",
        user_password: "matejsimicic",
        user_is_admin: true,
      },
      {
        user_first_name: "Ivan",
        user_last_name: "Ivić",
        user_email: "ivanivic@gmail.com",
        user_username: "ivanivic",
        user_password: "ivanivic",
        user_is_admin: false,
      },
      {
        user_first_name: "Josip",
        user_last_name: "Josić",
        user_email: "josipjosic@gmail.com",
        user_username: "josipjosic",
        user_password: "josipjosic",
        user_is_admin: false,
      },
      {
        user_first_name: "Marko",
        user_last_name: "Marić",
        user_email: "markomaric@gmail.com",
        user_username: "markomaric",
        user_password: "markomaric",
        user_is_admin: false,
      },
      {
        user_first_name: "Karlo",
        user_last_name: "Karlović",
        user_email: "karlokarlovic@gmail.com",
        user_username: "karlokarlovic",
        user_password: "karlokarlovic",
        user_is_admin: false,
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

    await queryInterface.bulkDelete("Users", null, {});
  },
};
