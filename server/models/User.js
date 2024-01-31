"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      user_id: DataTypes.INTEGER,
      user_first_name: DataTypes.STRING(50),
      user_last_name: DataTypes.STRING(50),
      user_email: DataTypes.STRING(100),
      user_username: DataTypes.STRING(30),
      user_password: DataTypes.STRING(30),
      user_is_admin: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
