const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./util/database");
const productRouter = require("./routes/product");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: false }));

app.use("/user", productRouter);

sequelize
  .sync({force: true})
  .then((res) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log("error");
  });