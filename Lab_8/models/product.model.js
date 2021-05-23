module.exports = class Product {
  constructor(id, categoryId, name, description, price) {
    this.id = id;
    this.categoryId = categoryId;
    this.name = name;
    this.description = description;
    this.price = price;
  }
};
