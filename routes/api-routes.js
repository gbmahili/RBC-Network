// Dependencies
// =============================================================

// Requiring our User model
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // GET ROUTE FOR ALL MEMBERS
  // =============================================================
  // GET route for getting all of the posts
  function professionTableHandler(dbProfession){
    app.get("/api/allmembers", function (req, res) {
      db.Profession.findAll({})
        .then(function (dbProfession) {
          res.json(dbProfession);
        });
    });
  }
  


  // POST route for saving a User
  app.post("/api/members", function (req, res) {
    // console.log(req.body);
    let tmpJson = {};
    
    var professionId = req.body.professions;
    // console.log(req.body);
    db.User.create({

      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      date_of_birth: req.body.date_of_birth,
      gender: req.body.gender,
      telephone: req.body.telephone,
      // photo: req.body.photo,
      house_number: req.body.house_number,
      street_name: req.body.street_name,
      city: req.body.city,
      state: req.body.state,
      country: req.body.country,
      zipcode: req.body.zipcode
      
    })
       .then(function(dbUser){
        console.log(  dbUser.id, 
         professionId) 
     
          dbUser.addProfession(
           professionId

          )
         })

          
      
  

    
    // }).then(function (professionData) {
    //   tmpJson.professionData = professionData;
    //   res.status(200).json({
    //     status: "success",
    //     reason: tmpJson
    //   });
    // });
  });
};

