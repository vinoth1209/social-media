const express = require("express");
const { register } = require("../controllers/authController.js");
const {
  posts,
  gethomePosts,
  postLikes,
} = require("../controllers/postsController.js");
const router = express.Router();

router.post("/register", register);
router.post("/posts", posts);
router.get("/posts", gethomePosts);
router.put("/posts", postLikes);

module.exports = router;
