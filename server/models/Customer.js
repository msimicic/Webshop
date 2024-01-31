"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Customer.init(
    {
      customer_first_name: DataTypes.STRING(50),
      customer_last_name: DataTypes.STRING(50),
      customer_email: DataTypes.STRING(100),
      customer_phone: DataTypes.STRING(30),
      customer_address: DataTypes.STRING(255),
      customer_postcode: DataTypes.STRING(20),
      customer_city: DataTypes.STRING(50),
      customer_country: DataTypes.STRING(50),
    },
    {
      sequelize,
      modelName: "Customer",
    }
  );
  return Customer;
};
