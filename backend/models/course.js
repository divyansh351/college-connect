const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    code: {
        type: String,
        required: true,
        unique: true
    },
    name: String,
    description: String,
    instructor: String,
    current_rating: Number,
    material: [
        {
            type: String,
            title: String,
            url: String
        }
    ],
    associated_posts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'post'
        }
    ]
})

module.exports = mongoose.model('course', CourseSchema);
