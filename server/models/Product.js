"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category, {
        foreignKey: "category_id",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      });
    }
  }
  Product.init(
    {
      product_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      product_name: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      product_description: {
        type: DataTypes.TEXT,
      },
      product_image: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      product_price: {
        allowNull: false,
        type: DataTypes.DECIMAL(6, 2),
      },
      product_stock: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
