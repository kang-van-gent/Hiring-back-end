const Comment = require("../models/commentModels");

exports.getAllComments = async (req, res) => {
  try {
    const comment = await Comment.find();
    res.status(200).json({
      status: "success",
      results: comment.length,
      data: { comment },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getOneComment = async (req, res) => {
  try {
    const commentname = req.body.commentname;
    const password = req.body.password;
    const comment = await Comment.findOne({
      commentname: commentname,
      password: password,
    });
    if (comment) {
      res.status(200).json({
        status: "success",
        data: { commentname: commentname, password: password },
      });
    } else {
      res.status(404).json({
        status: "fail",
        message: "No comment found",
        log: { commentname: commentname, password: password },
      });
    }
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createNewComment = async (req, res) => {
  try {
    const createComment = {
      // id: currentCommentId,
      ...req.body,
    };
    const newComment = await Comment.create(req.body);
    res.status(201).json({
      status: "success",
      data: { newComment },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.updateComment = async (req, res) => {
  try {
    const commentId = parseInt(req.params.id);
    const comment = await Comment.findOneAndUpdate(
      { id: commentId },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (comment) {
      res.status(200).json({
        status: "success",
        data: { comment },
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

exports.deleteComment = async (req, res) => {
  try {
    const commentId = parseInt(req.params.id);
    const comment = await Comment.findOneAndDelete({ id: parseInt(commentId) });
    if (comment) {
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

exports.getComment = async (req, res) => {
  try {
    const commentname = req.body.commentname;
    const comment = await Comment.findOne({ commentname: commentname });
    if (comment) {
      res.status(200).json({
        status: "success",
        data: { comment },
      });
    } else {
      res.status(200).json({
        status: "fail",
        message: "No comment found",
        log: { comment },
      });
    }
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateCommentPass = async (req, res) => {
  try {
    const commentname = req.body.commentname;
    const comment = await Comment.findOneAndUpdate(
      { commentname: commentname },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (comment) {
      res.status(200).json({
        status: "success",
        data: { comment },
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
