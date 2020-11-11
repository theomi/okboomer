let express = require('express');
let router = express.Router();
let {check} = require('express-validator');

let quotesController = require('../controllers/quotesController');

router.get('/', (req, res) => {
    // call controllerrrrrrrrrrrrrrrrrrrrrrrrrrrr
    quotesController(req)
    res.json({message: "No quotes were found"});
})

router.post('/', (req, res) => {
    res.json({message: "blablu"});
})

router.patch('/:id', [check('id').isMongoId()], (req, res) => {
    res.json({message: "blablu"});
});

router.get('/:id', [check('id').isMongoId()], (req, res) => {
    res.json({message: "No quotes were found"});
})

router.delete('/:id', [check('id').isMongoId()], (req, res) => {
    res.json({message: "No quotes were found"});
})


module.exports = router;
