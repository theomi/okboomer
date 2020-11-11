let express = require('express');
let router = express.Router();
let {check} = require('express-validator');

let quotesController = require('../controllers/quotesController');

router.get('/', (req, res) => {
    res.json({message: "No quotes were found"});
})


router.get('/:id', [check('id').isMongoId()], (req, res) => {
    res.json({message: "No quotes were found"});
})

module.exports = router;
