const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
 
const app = express();
 
app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

let quoteRoute = require('./routes/quote.route');
 

app.use('/api/quote', quoteRoute);

app.get('/', (req, res) => {
    res.json({
        message: 'Behold The the ok boomer site'
    });
});
 
// TODO: put that on the a config file ?
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`listening on ${port}`);
});