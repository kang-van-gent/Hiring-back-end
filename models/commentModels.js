const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  postId: String,
  userId: String,
  comment: String,
  createdDate: Date,
  likes: Number,
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
