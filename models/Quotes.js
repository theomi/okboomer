const { Mongoose } = require("mongoose")
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let QuoteSchema = new Schema({
    id: {type: Schema.Types.ObjectId, required: true},
    name: {type: String, required: true},
    author: {type: String, required: true},
    date: {type: Schema.Types.Date, required: true} 
});

module.exports = mongoose.model('Quote', QuoteSchema);