const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const CoursesSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: String,
    prof: String
})

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('Courses', CoursesSchema);