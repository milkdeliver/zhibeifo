var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var userSchema = mongoose.Schema({
    // username: String,
    email : String,
    password: String,//hash created from password
    username: String,
    created: {type: Date, default: Date.now}
});

module.exports = mongoose.model('User', userSchema);