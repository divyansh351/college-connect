const express = require("express");
const Comment = require("../controllers/comment")
const { checkToken } = require("../middleware");

const router = express.Router();

router.route("/new")
    .post(Comment.addComment)

router.route("/:id/delete")
    .delete(Comment.deleteComment)

router.route("/:id/edit")
    .post(Comment.editComment)

module.exports = router;
