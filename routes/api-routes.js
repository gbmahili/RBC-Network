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


  // API ROUTE F
  //GET ROUTE for searched profession through url
  // =============================================================
  app.get('/professions/:category', function (req, res){
    console.log('hello' +req.params.category)
    db.Profession.findAll(
    {
      where: { category: req.params.category },   
      include:[{ all: true}]   
    }).then(function(dbProfession){
      // var users = dbProfession;
      // users.forEach(element => {
      //   console.log(element.createdAt);
      // });

      res.json(dbProfession);
    })
  })


  
  //GET ROUTE for searched 
  // =============================================================
  app.post('/occupations', function (req, res){
    console.log(req.body);
    db.Profession.findAll(
    {
      where: { category: req.body.occupationName } ,
      include:[{ all: true}]    
  
    }).then(function(dbProfession){
      // var users = dbProfession;
      // users.forEach(element => {
      //   console.log(element.createdAt);
      // });

      res.json(dbProfession);
    })
  })

  //GET ROUTE for all profession
  // =============================================================
  app.get('/professions', function (req, res){
    db.Profession.findAll({})
    .then(function(dbProfession){
      res.json(dbProfession);
    })
  })

  // POST route for saving a User
  // =============================================================
  app.post("/api/members", function (req, res) {
    // console.log(req.body);
    let tmpJson = {};
    
    var professionId = req.body.professions;
    var resume = req.body.resume;
   console.log(resume);
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
        //  professionId)      
          dbUser.addProfession(
           professionId  
          ) 
        });
  
      });  
      
   // =============================================================  

};