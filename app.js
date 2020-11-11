const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
require('./config/database');
 
const app = express();
 
app.use(morgan('tiny'));
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let quoteRoute = require('./routes/quote.route');
let mainRoute = require('./routes/main.route');
let userRoute = require('./routes/user.route');

app.use('/', mainRoute);
app.use('/quotes', quoteRoute);
app.use('/user', userRoute);
 
// TODO: put that on the a config file ?
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`listening on ${port}`);
});