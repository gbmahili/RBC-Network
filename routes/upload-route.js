// Get Models
var db = require("../models");

module.exports = function(app) {

  app.post("/sendPhotoData", function(req, body){
    //console.log(req.body);
    var randomNumber = Math.floor(Math.random() * 99999) + 1;
    var date = new Date();
    var userName = req.body.first_name + "_" + req.body.last_name + "_" + req.body.telephone;
    var id = req.body.id;

    app.post('/uploadProfilePhoto', function (req, res) {
      if (!req.files)
        return res.status(400).send('No files were uploaded.');

      // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
      let profileImage = req.files.profileImage;
      // GEt current date and add to the file name
      var d = new Date();
      // Rename the image to add the date to avoid images being uploaded with the same name
      let fileName = userName;
      

      // Use the mv() method to place the file somewhere on your server
      profileImage.mv(`${__dirname}/../../RBC-NETWORK/public/profileImages/${fileName}`, function (err) {
        if (err)
          return res.status(500).send(err);
        console.log(id);
        db.User.update(
          {photo: fileName},
          {where:{
            id: id
          }
        }
        ).then(function (results){
          //res.json(results);
          return res.redirect('/profile.html');
        })
        //res.json('File uploaded!');
      });
    });
  })
}