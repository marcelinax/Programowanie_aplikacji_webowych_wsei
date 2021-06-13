const db = require("../database");

const Category = db.model("Category", { name: String });

module.exports = Category;
