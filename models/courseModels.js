const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  ownerId: String,
  ownername: String,
  descriptions: String,
  views: Number,
  likes: Number,
  createdDate: Date,
  updatedDate: Date,
  ordered: Number,
  price: Number,
  privacy: String,
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
