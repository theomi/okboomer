
let express = require('express');
let router = express.Router();
//let {check} = require('express-validator');


router.get('/', (req, res) => {
    res.json({ message : "main route"});
})

module.exports = router;

