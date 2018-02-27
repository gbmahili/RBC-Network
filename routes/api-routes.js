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


 // POST route for saving a User
 app.post("/api/members", function(req, res) {
  // console.log(req.body);
  let tmpJson = {};
  db.User.create({
    first_name: req.body['userData[first_name]'],
    last_name: req.body['userData[last_name]'],
    email: req.body['userData[email]'],
    date_of_birth: req.body['userData[date_of_birth]'],
    gender: req.body['userData[gender]'],
    photo: req.body['userData[photo]'],
    house_number: req.body['userData[house_number]'], 
    city: req.body['userData[city]'], 
    state: req.body['userData[state]'],
    country: req.body['userData[country]'],
    zipcode: req.body['userData[zipcode]']

  }).then(function (dbUser) {
    tmpJson.dbUser = dbUser;
    return db.Profession.create({
      category: req.body['professionData[category]'],
      about_me: req.body['professionData[about_me]'],
      links: req.body['professionData[links]'],
      work_image: req.body['professionData[work_image]'],
      header: req.body['professionData[header]'],
      values: req.body['professionData[values]']
    });
  }).then(function (professionData) {
    tmpJson.professionData = professionData;
    res.status(200).json({
        status: "success",
        reason: tmpJson
    });
  });
});
};
