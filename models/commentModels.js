const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  postId: String,
  userId: String,
  comment: String,
  createdDate: Date,
  likes: Number,
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
