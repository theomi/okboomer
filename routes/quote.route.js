let express = require('express');
let router = express.Router();
let {check} = require('express-validator');

let quotesController = require('../controllers/quotesController');

router.get('/', quotesController.getQuotes);

router.get('/:id', quotesController.getQuotesById);

router.post('/', (req, res) => {
    res.json({message: "WIP"});
});

router.patch('/:id', [check('id').isMongoId()], (req, res) => {
    res.json({message: "WIP"});
});


router.delete('/:id', [check('id').isMongoId()], (req, res) => {
    res.json({message: "WIP"});
})


module.exports = router;
