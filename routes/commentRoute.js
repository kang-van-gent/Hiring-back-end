const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

router
  .route("/")
  .get(commentController.getAllComments)
  .post(commentController.createNewComment);

router
  .route("/:id")
  .put(commentController.updateComment)
  .delete(commentController.deleteComment);
router.route("/commentname").post(commentController.getComment);

router.route("/newpass").put(commentController.updateCommentPass);

router.route("/getone").post(commentController.getOneComment);
module.exports = router;
