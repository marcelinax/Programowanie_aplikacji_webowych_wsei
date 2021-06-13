const db = require("../database");
const Category = require("./category.model");

const Product = db.model("Product", {
  name: String,
  category: Category.schema,
  price: Number,
});

module.exports = Product;
