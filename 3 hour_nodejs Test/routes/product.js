const express = require("express");
const {
  PostProduct,
  getProduct,
  deleteProduct,
} = require("../controllers/product");


const Router = express.Router();

Router.post("/product", PostProduct);
Router.get("/product", getProduct);
Router.delete("/product/:id", deleteProduct);

module.exports = Router;