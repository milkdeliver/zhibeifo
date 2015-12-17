var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var userSchema = mongoose.Schema({
    nickname: String,
    email : String,
    password: String,
    created: {type: Date, default: Date.now}
});

module.exports = mongoose.model('User', userSchema);