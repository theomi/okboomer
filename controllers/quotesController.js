
let QuoteModel = require('../models/Quotes');
let {validateData} = require('../utils/validation.utils');


exports.get = async(req, res) => {
    let err = validationResult(req);

    if(!err.isEmpty()){
        res.status(400).json(err);
    } else {
        //use QuoteModel.aFunction to get things from db 
    }
}