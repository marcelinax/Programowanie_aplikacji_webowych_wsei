const Category = require("../models/category.model");

const categories = [];

exports.getAll = (req, res) => {
  res.status(200).send(categories);
};

exports.add = (req, res) => {
  const category = new Category(req.body.id, req.body.name);
  categories.push(category);
  res.status(201).send(category);
};

exports.update = (req, res) => {
  const editingIndex = categories.indexOf(
    categories.filter((c) => (c.id = req.body.id))[0]
  );
  categories[editingIndex] = req.body;
  res.status(200).send(req.body);
};

exports.delete = (req, res) => {
  const editingIndex = categories.indexOf(
    categories.filter((c) => (c.id = req.params.id))[0]
  );
  categories.splice(editingIndex, 1);
  res.status(200);
};
