const express = require("express");

const app = express();
app.use(express.json());

require("./routes/product.routes")(app);
require("./routes/categories.routes")(app);

app.listen(3000, () => console.log("Example app listening on port 3000!"));
