const router = require("express").Router();
const Product = require("../models/product.model");

router.get("/", async (req, res) => {
  res.json(await Product.find());
});

router.post("/", async (req, res) => {
  const { name, category, price } = req.body;
  await Product.create({ name, category, price });
  res.send("Dodano nowy produkt");
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await Product.findByIdAndDelete(id);
  res.send("Usunięto produkt");
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { name, category, price } = req.body;
  await Product.findByIdAndUpdate(id, { name, category, price });
  res.send("Zaaktulizowano produkt");
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  res.json(await Product.findById(id));
});

module.exports = router;
