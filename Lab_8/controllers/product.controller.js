const Product = require("../models/product.model");

const products = [];

exports.getAll = (req, res) => {
  res.status(200).send(products);
};

exports.add = (req, res) => {
  console.log(req.body);
  const product = new Product(
    req.body.id,
    req.body.categoryId,
    req.body.name,
    req.body.description,
    req.body.price
  );
  products.push(product);
  res.status(201).send(product);
};

exports.update = (req, res) => {
  const editingIndex = products.indexOf(
    products.filter((p) => (p.id = req.body.id))[0]
  );
  products[editingIndex] = req.body;
  res.status(200).send(req.body);
};

exports.delete = (req, res) => {
  const editingIndex = products.indexOf(
    products.filter((p) => (p.id = req.params.id))[0]
  );
  products.splice(editingIndex, 1);
  res.status(200);
};
