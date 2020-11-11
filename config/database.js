const mongoose = require('mongoose');

// Connects to the database
mongoose.connect('mongodb+srv://okboomer:pIbboIkzngTnbAFH@okboomer.3xbyy.mongodb.net/okboomer', {useNewUrlParser: true, useUnifiedTopology: true});

let connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));

/*connection.once('open', function () {

    connection.db.collection("users", function(err, collection){
        collection.find({}).toArray(function(err, data){
            console.log(data); // it will print your collection data
        })
    });

});*/

module.exports = connection;