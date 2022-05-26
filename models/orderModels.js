const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  ownerId: String,
  ordername: String,
  createdDate: Date,
  orderOwner: String,
  orderprice: Number,
  status: String,
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
