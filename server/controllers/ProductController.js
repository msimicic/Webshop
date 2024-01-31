const { Product } = require("../models");

module.exports = {
  get: async (req, res) => {
    try {
      const products = await Product.findAll();
      res.json(products);
    } catch (error) {
      console.error("Greška prilikom dohvaćanja proizvoda:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};
