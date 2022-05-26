const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  ownerId: String,
  ordername: String,
  createdDate: Date,
  orderOwner: String,
  orderprice: Number,
  status: String,
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
