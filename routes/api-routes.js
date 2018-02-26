// Dependencies
// =============================================================

// Requiring our User model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

// GET ROUTE FOR ALL MEMBERS
// =============================================================
    // GET route for getting all of the posts
    app.get("/api/allmembers", function(req, res) {
      db.User.findAll({
        include: 
          {
            model: db.Profession
            
          }
        })  
      .then(function(dbmembers) {
        res.json(dbmembers);
      });
    });


 // POST ROUTE  
// =============================================================
// post route is still in progress, so when testing try to comment it out if it causes any errors
    // POST route for saving a User
  app.post("/api/members", function(req, res) {
    console.log(req.body);

    db.User.create({
      first_name: req.body['userData[first_name]'],
      last_name: req.body['userData[last_name]'],
      email: req.body['userData[email]'],
      password: req.body['userData[password]'],
      gender: req.body['userData[gender]'],
      pet: req.body['userData[pet]']

    }).then(function(dbUser) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbUser);
    });

    db.Profession.create({
       
      category: req.body['professionData[category]']

    }).then(function(dbProfession) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbProfession);
    });

  });
};