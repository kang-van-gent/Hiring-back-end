const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

router
  .route("/")
  .get(postController.getAllPosts)
  .post(postController.createNewPost);

router
  .route("/:id")
  .put(postController.updatePost)
  .delete(postController.deletePost);
router.route("/postname").post(postController.getPost);

router.route("/newpass").put(postController.updatePostPass);

router.route("/getone").post(postController.getOnePost);
module.exports = router;
