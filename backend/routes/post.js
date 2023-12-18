const express = require("express");
const Post = require("../controllers/post")
const { checkToken } = require("../middleware");

const router = express.Router();

router.route("/new")
    .post(Post.addPost)

router.route("/comments")
    .get(Post.viewComments)// single coures view

router.route("/:id/delete")
    .delete(Post.deletePost)

router.route("/:id/edit")
    .put(Post.editPost)

module.exports = router;
