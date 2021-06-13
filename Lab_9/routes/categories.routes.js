const router = require("express").Router();
const Category = require("../models/category.model");

router.get("/", async (req, res) => {
  res.json(await Category.find());
});

router.post("/", async (req, res) => {
  const name = req.body.name;
  await Category.create({ name: name });
  res.send("Dodano nową kategorię");
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await Category.findByIdAndDelete(id);
  res.send("Usunięto kategorię");
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  await Category.findByIdAndUpdate(id, { name: name });
  res.send("Zaaktualizowano kategorię");
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  res.json(await Category.findById(id));
});

module.exports = router;
