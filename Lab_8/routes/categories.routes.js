const controller = require("../controllers/categories.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/categories", controller.getAll);
  app.post("/categories", controller.add);
  app.put("/categories", controller.update);
  app.delete("/categories/:id", controller.delete);
};
