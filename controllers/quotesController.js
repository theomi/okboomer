
let QuoteModel = require('../models/Quotes');

exports.getQuotes = async(req, res) => {
    await QuoteModel.find({}, (err,data) => {
        if(!err){
            res.json(data);
        } else {
            res.json({message: "error"});
        }
    })
}

exports.getQuotesById = async(req, res) => {
    id = req.params.id;
    await QuoteModel.findById({_id: id}, (err, data) => {
        if(!err){
            res.json(data);
        } else {
            res.json({message: "error"});
        }
    });
}
