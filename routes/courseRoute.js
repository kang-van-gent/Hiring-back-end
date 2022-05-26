const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");

router
  .route("/")
  .get(courseController.getAllCourses)
  .post(courseController.createNewCourse);

router
  .route("/:id")
  .put(courseController.updateCourse)
  .delete(courseController.deleteCourse);
router.route("/coursename").post(courseController.getCourse);

router.route("/newpass").put(courseController.updateCoursePass);

router.route("/getone").post(courseController.getOneCourse);
module.exports = router;
