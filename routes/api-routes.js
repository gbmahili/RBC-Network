var db = require("../models");
module.exports = function (app) {
    // ROUTES FOR TESTING HEROKU ONLY
    app.get("/members", function (req, res) {
        db.User.findAll({})
            .then(function (allMembers) {
                res.json(allMembers);
            });
    });
}