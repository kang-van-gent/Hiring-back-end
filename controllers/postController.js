const Post = require("../models/postModels");

exports.getAllPosts = async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json({
      status: "success",
      results: post.length,
      data: { post },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getOnePost = async (req, res) => {
  try {
    const postname = req.body.postname;
    const password = req.body.password;
    const post = await Post.findOne({ postname: postname, password: password });
    if (post) {
      res.status(200).json({
        status: "success",
        data: { postname: postname, password: password },
      });
    } else {
      res.status(404).json({
        status: "fail",
        message: "No post found",
        log: { postname: postname, password: password },
      });
    }
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createNewPost = async (req, res) => {
  try {
    const createPost = {
      // id: currentPostId,
      ...req.body,
    };
    const newPost = await Post.create(req.body);
    res.status(201).json({
      status: "success",
      data: { newPost },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const postId = parseInt(req.params.id);
    const post = await Post.findOneAndUpdate({ id: postId }, req.body, {
      new: true,
      runValidators: true,
    });
    if (post) {
      res.status(200).json({
        status: "success",
        data: { post },
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

exports.deletePost = async (req, res) => {
  try {
    const postId = parseInt(req.params.id);
    const post = await Post.findOneAndDelete({ id: parseInt(postId) });
    if (post) {
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

exports.getPost = async (req, res) => {
  try {
    const postname = req.body.postname;
    const post = await Post.findOne({ postname: postname });
    if (post) {
      res.status(200).json({
        status: "success",
        data: { post },
      });
    } else {
      res.status(200).json({
        status: "fail",
        message: "No post found",
        log: { post },
      });
    }
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updatePostPass = async (req, res) => {
  try {
    const postname = req.body.postname;
    const post = await Post.findOneAndUpdate({ postname: postname }, req.body, {
      new: true,
      runValidators: true,
    });
    if (post) {
      res.status(200).json({
        status: "success",
        data: { post },
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
