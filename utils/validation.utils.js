// from : https://github.com/damianomondaini/dashboard/blob/master/utils/validation.utils.js
// Require modules
let {validationResult} = require('express-validator');

// Utils funcions
async function validateData(req, res) {
    let err = validationResult(req);
    if (!err.isEmpty()) {
        res.status(400).json(err);
        res.end();
        return false;
    } else {
        return true;
    }
}

module.exports = {
    validateData: validateData
}