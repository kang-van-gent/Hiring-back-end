const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  firstname: String,
  lastname: String,
  email: String,
  phone: String,
  address: String,
  age: Number,
  gender: String,
  birthDate: Date,
  intru: String,
  university: String,
  level: String,
  group: String,
  branch: String,
  createdDate: Date,
  type: String,
  visitor: Number,
  likes: Number,
  follower: Number,
  following: Number,
  member: String,
  career: String,
  salary: Number,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
