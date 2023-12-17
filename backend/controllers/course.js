const Course = require("../models/course")
const jwt = require("jsonwebtoken");

module.exports.allView = async (req, res) => {
    try {
        const courseList = await Course.find({});
        res.status(200).json(courseList);
    }
    catch (e) {
        res.status(500).json({ name: e.name, message: e.message });
    }
}

module.exports.singleView = async (req, res) => {
    try {
        const course_id = req.params.id;
        const oneCourse = await Course.findById(course_id);
        await oneCourse.populate('associated_posts');
        res.status(200).json(oneCourse);
    }
    catch (e) {
        res.status(500).json({ message: e.message, name: e.name });
    }
}

module.exports.addMaterial = async (req, res) => {
    // some thought required
}