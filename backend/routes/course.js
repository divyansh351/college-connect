const express = require("express");
const Course = require("../controllers/course")
const catchAsync = require("../utils/catchAsync");
const { checkToken } = require("../middleware");

const router = express.Router();

router.route("/")
    .get(Course.allView)// all course list

router.route("/:id")
    .get(Course.singleView)// single coures view

router.route("/add_material")
    .post(checkToken, Course.addMaterial) 