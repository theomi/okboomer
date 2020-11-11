/**
 * 
 * TODO: later boomer
 */

const { Mongoose } = require("mongoose")
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = new Schema({
    id: {type: Schema.Types.ObjectId, required: true},
    name: {type: String, required: true},
});

module.exports = mongoose.model('User', UserSchema);