var db = require("../models");
module.exports = function (app) {
    // GET route for getting all of the posts
    app.get("/members", function (req, res) {
        db.User.findAll({})
            .then(function (allMembers) {
                res.json(allMembers);
            });
    });
}