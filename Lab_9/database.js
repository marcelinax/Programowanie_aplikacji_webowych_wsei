const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/lab_9", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
