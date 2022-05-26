const Course = require("../models/courseModels");

exports.getAllCourses = async (req, res) => {
  try {
    const course = await Course.find();
    res.status(200).json({
      status: "success",
      results: course.length,
      data: { course },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getOneCourse = async (req, res) => {
  try {
    const coursename = req.body.coursename;
    const password = req.body.password;
    const course = await Course.findOne({
      coursename: coursename,
      password: password,
    });
    if (course) {
      res.status(200).json({
        status: "success",
        data: { coursename: coursename, password: password },
      });
    } else {
      res.status(404).json({
        status: "fail",
        message: "No course found",
        log: { coursename: coursename, password: password },
      });
    }
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createNewCourse = async (req, res) => {
  try {
    const createCourse = {
      // id: currentCourseId,
      ...req.body,
    };
    const newCourse = await Course.create(req.body);
    res.status(201).json({
      status: "success",
      data: { newCourse },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.updateCourse = async (req, res) => {
  try {
    const courseId = parseInt(req.params.id);
    const course = await Course.findOneAndUpdate({ id: courseId }, req.body, {
      new: true,
      runValidators: true,
    });
    if (course) {
      res.status(200).json({
        status: "success",
        data: { course },
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

exports.deleteCourse = async (req, res) => {
  try {
    const courseId = parseInt(req.params.id);
    const course = await Course.findOneAndDelete({ id: parseInt(courseId) });
    if (course) {
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

exports.getCourse = async (req, res) => {
  try {
    const coursename = req.body.coursename;
    const course = await Course.findOne({ coursename: coursename });
    if (course) {
      res.status(200).json({
        status: "success",
        data: { course },
      });
    } else {
      res.status(200).json({
        status: "fail",
        message: "No course found",
        log: { course },
      });
    }
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateCoursePass = async (req, res) => {
  try {
    const coursename = req.body.coursename;
    const course = await Course.findOneAndUpdate(
      { coursename: coursename },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (course) {
      res.status(200).json({
        status: "success",
        data: { course },
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
