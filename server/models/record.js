var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var recordSchema= mongoose.Schema({
    count : Number,
    userId: String,//mongoose.Schema.Types.ObjectId,
    recorded: Number,//Date to Number
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Record', recordSchema);