const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  ownerId: String,
  ownername: String,
  caption: String,
  likes: Number,
  createdDate: Date,
  updatedDate: Date,
  privacy: String,
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
