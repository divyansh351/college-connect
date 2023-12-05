const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String
})

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('user', UserSchema);