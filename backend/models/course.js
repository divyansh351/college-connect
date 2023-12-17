const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: String,
    description: String,
    prof: String,
    material
})

module.exports = mongoose.model('course', CourseSchema);
