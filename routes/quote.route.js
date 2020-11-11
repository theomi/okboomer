let express = require('express');
let router = express.Router();
let {check} = require('express-validator');

let quotesController = require('../controllers/quotesController');


router.get('/quote/:id', [check('id').isMongoId()], (req, res) => {
    quotesController.get(req, res);
})