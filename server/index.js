const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const db = require("./models");

const productRoute = require("./routes/Product");
app.use("/api/products", productRoute);

const categoryRoute = require("./routes/Category");
app.use("/api/categories", categoryRoute);

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Listening to port ${port}`);
  });
});
