// Dev-Owner: Baraka-Mahili

// Get Models
var db = require("../models");
// Exporting the route to the server.js
module.exports = function (app) {
    // Get login credentials:
    app.post("/login", function (req, res) {
        console.log(req.body);
        var userEmail = req.body.userEmail,
          userPassword = req.body.userPassword;
        
        // Check if user exists in the database
          db.User.count({
            where: {
                email: userEmail,
                password: userPassword
            }
         }).then(count => {
                if (count != 0) {
                    console.log("WE FOUND THAT USER IN THE DATABASE");
                    db.User.findOne({
                        where: {
                            email: userEmail,
                            password: userPassword
                        }
                    }).then(function(userDetails){
                        res.json(userDetails);
                    })
                }else{
                    // User does not exisit
                    res.json({
                        // Send an error code to the user, which means the user does not exist in our database.
                        rcb_code: "404DNJVB"
                    })
                    console.log("User Does not exist");
                }                
        });
    });//End of login route


    app.get("/insertDummyData", function (req, res) {
        db.User.create({
            first_name: "Baraka",
            last_name: "Mahili",
            email: "georgesmahili@gmail.com",
            password: "baraka_test",
            gender: "Mahili",
            house_number: "240",
            street_name: "Somerset",
            telephone: "3472999824",
            city: "Somerset",
            state: "NJ",
            country: "US",
            zipcode: "08873",
        }).then(function (dbUser) {
            // We have access to the new todo as an argument inside of the callback function
            res.json(dbUser);
            db.Profession.create({
                UserId: dbUser.id,
                category: "Programmer"
            });
        });
    });//End of dummy data
};