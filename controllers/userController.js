const User = require("../models/userModels");

exports.getAllUsers = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json({
      status: "success",
      results: user.length,
      data: { user },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getOneUser = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.findOne({ username: username, password: password });
    if (user) {
      res.status(200).json({
        status: "success",
        data: { username: username, password: password },
      });
    } else {
      res.status(404).json({
        status: "fail",
        message: "No user found",
        log: { username: username, password: password },
      });
    }
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createNewUser = async (req, res) => {
  try {
    // let currentUserId = await User.find({}).sort({ id: -1 }).limit(1).then((lastUser) => {
    //     return lastUser[0].id
    // });
    // currentUserId += 1;
    const createUser = {
      // id: currentUserId,
      ...req.body,
    };
    const newUser = await User.create(req.body);
    res.status(201).json({
      status: "success",
      data: { newUser },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const user = await User.findOneAndUpdate({ id: userId }, req.body, {
      new: true,
      runValidators: true,
    });
    if (user) {
      res.status(200).json({
        status: "success",
        data: { user },
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

exports.deleteUser = async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const user = await User.findOneAndDelete({ id: parseInt(userId) });
    if (user) {
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

exports.getUser = async (req, res) => {
  try {
    const username = req.body.username;
    const user = await User.findOne({ username: username });
    if (user) {
      res.status(200).json({
        status: "success",
        data: { user },
      });
    } else {
      res.status(200).json({
        status: "fail",
        message: "No user found",
        log: { user },
      });
    }
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateUserPass = async (req, res) => {
  try {
    const username = req.body.username;
    const user = await User.findOneAndUpdate({ username: username }, req.body, {
      new: true,
      runValidators: true,
    });
    if (user) {
      res.status(200).json({
        status: "success",
        data: { user },
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
