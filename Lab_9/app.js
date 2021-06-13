const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.use("/categories", require("./routes/categories.routes"));
app.use("/products", require("./routes/products.routes"));

app.listen(port, () => {
  console.log("Wszystko działa");
});
