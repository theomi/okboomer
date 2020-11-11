
let UserModel = require('../models/Users');
let {validateData} = require('../utils/validation.utils');
let connection = require('../config/database');


exports.login = async(req, res) => {


        connection.db.collection("users", function(err, collection){
            collection.find({}).toArray(function(err, data){
                res.json(data); // it will print your collection data
            })
        });
    
}
