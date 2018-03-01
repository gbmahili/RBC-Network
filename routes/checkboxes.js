// Requiring our User model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
    //GET ROUTE
    //=========================================
    // get request 
    // listen to it via /professions
    // request coming from the client is stored in the parameter req
    // parameter res is there so we can send back a response to the client 
    app.get('/professions', function(req, res){
        // for the purpose of finding id and occupation, we are going to use findAll method
        // we are using db to get access to the models
        // name of the model we are going to use
        // method we are going to use in this case find all 
        // leave the object empty cuze we are not looking for anything specific 
        db.Profession.findAll({})
        //once it finsishes its task of finding all data
        // we will store that data into a packet dbPost
        .then(function(dbPost){
            // now that we have access to that data in dbPost packet
            // how do we display it to the user
            // lets send it back to them in a json format
            res.json(dbPost);
            // ok now with that front end should know what to display because this information is whats retrieved in the result in ajax get request
        })
        
    });
};

