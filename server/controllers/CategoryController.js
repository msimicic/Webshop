const { Category } = require("../models");

module.exports = {
  get: async (req, res) => {
    try {
      const categories = await Category.findAll();
      res.json(categories);
    } catch (error) {
      console.error("Greška prilikom dohvaćanja kategorija:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};
