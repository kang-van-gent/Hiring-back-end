const User = require("../models/userModels");

// Get all users >>... Working 
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

// Get user that login by email and password  >>... Working
exports.getOneUser = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findOne({ email: email, password: password });
    if (user) {
      res.status(200).json({
        status: "success",
        data: { email: email, password: password },
      });
    } else {
      res.status(404).json({
        status: "fail",
        message: "No user found",
        log: { email: email, password: password },
      });
    }
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// Creating new user >>... Working 
exports.createNewUser = async (req, res) => {
  try {
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
// Find user and update user details
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

// To delete user  >>... Working
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

// Search for username already used.
exports.getUsername = async (req, res) => {
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

// Search for email already used.
exports.getEmail = async (req, res) => {
  try {
    const email = req.body.email;
    const user = await User.findOne({ email: email });
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

// Find user and update user infomation for update their password
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
