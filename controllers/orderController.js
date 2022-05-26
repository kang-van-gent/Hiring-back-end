const Order = require("../models/orderModels");

exports.getAllOrders = async (req, res) => {
  try {
    const order = await Order.find();
    res.status(200).json({
      status: "success",
      results: order.length,
      data: { order },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getOneOrder = async (req, res) => {
  try {
    const ordername = req.body.ordername;
    const password = req.body.password;
    const order = await Order.findOne({
      ordername: ordername,
      password: password,
    });
    if (order) {
      res.status(200).json({
        status: "success",
        data: { ordername: ordername, password: password },
      });
    } else {
      res.status(404).json({
        status: "fail",
        message: "No order found",
        log: { ordername: ordername, password: password },
      });
    }
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createNewOrder = async (req, res) => {
  try {
    const createOrder = {
      // id: currentOrderId,
      ...req.body,
    };
    const newOrder = await Order.create(req.body);
    res.status(201).json({
      status: "success",
      data: { newOrder },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const orderId = parseInt(req.params.id);
    const order = await Order.findOneAndUpdate({ id: orderId }, req.body, {
      new: true,
      runValidators: true,
    });
    if (order) {
      res.status(200).json({
        status: "success",
        data: { order },
      });
    } else {
      res.status(404).json({
        status: "fail",
        message: "no id found",
      });
    }
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const orderId = parseInt(req.params.id);
    const order = await Order.findOneAndDelete({ id: parseInt(orderId) });
    if (order) {
      res.status(200).json({
        status: "success",
        data: null,
      });
    } else {
      res.status(404).json({
        status: "fail",
        message: "no id found",
      });
    }
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getOrder = async (req, res) => {
  try {
    const ordername = req.body.ordername;
    const order = await Order.findOne({ ordername: ordername });
    if (order) {
      res.status(200).json({
        status: "success",
        data: { order },
      });
    } else {
      res.status(200).json({
        status: "fail",
        message: "No order found",
        log: { order },
      });
    }
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateOrderPass = async (req, res) => {
  try {
    const ordername = req.body.ordername;
    const order = await Order.findOneAndUpdate(
      { ordername: ordername },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (order) {
      res.status(200).json({
        status: "success",
        data: { order },
      });
    } else {
      res.status(404).json({
        status: "fail",
        message: "no id found",
      });
    }
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
